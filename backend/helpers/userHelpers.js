const bcrypt = require('bcrypt');
const Users = require('../models/userModel');
const jwt=require('jsonwebtoken');
const packages = require('../models/packagesModel');
module.exports={
    doSignUp(userData){
      
      return new Promise(async(resolve,reject)=>{
        const user=await Users.findOne({email:userData.email})
        if(user){
          reject('User with this Email id is already exist')
        }else{
          bcrypt.genSalt(10, async(err, salt)=> {
              if (err) {
                reject(err)
              } else {
                userData.authMethod='mannual'
                  userData.password=await  bcrypt.hash(userData.password, salt);
                  Users.create(userData).then((user)=>{
                    const token= jwt.sign({user},process.env.JWT_SECRET_KEY) 
                      response={
                          user:user,
                          token:token
                       }
                      resolve(response)
                   }).catch((err)=>{
                      reject(err)
                   })
              }
            });
          
        }
      })
    },
    doLogin(userData){
      return new Promise(async(resolve,reject)=>{
        const user=await Users.findOne({email:userData.email})
        if(!user){
          reject('no user found')
        }else if(user.authMethod==='google') {
          reject('You are sign up with google ,click on login with google')
        }else{
          try{
            const isAuth=await bcrypt.compare(userData.password,user.password)
            if(isAuth){
            const token= jwt.sign({user},process.env.JWT_SECRET_KEY) 
           
            response={
              user:user,
              token:token
            }
            resolve(response)
            }else{
              reject('incorrect password')
            }
            
          }catch(error){
             console.error(error.message);
          }

         
        }
      })
    },
    setupWhatsappMsg(enquiry){
      return new Promise (async(resolve,reject)=>{
        try{
          console.log(enquiry)
             const message=`
             Hello!, i am ${enquiry.userName}

             I'm interested in the "${enquiry.packageName}" package that I saw on the travel agency website. Here are some details:

            Package: ${enquiry.packageName}
            Number of Candidates: ${enquiry.adults} adults, ${enquiry.childrens} child
            Destination: ${enquiry.destination}
            Travel Dates: ${enquiry.availableStartDate} - ${enquiry.availableEndDate}
            
            Could you provide more information about the package...
             `
            
            const whatsappNumber= enquiry.whatsapp

            
             const response={
              message,whatsappNumber
            }
           
            resolve(response)
        }catch(err){
            reject(err)
        }
      })
    },
    setReview(review,packageId,userId){
      return new Promise((resolve,reject)=>{
        const newReview = {
          customerId:userId,
          customerName:review.userName,
          rating: review.rating,
          comment: review.comment,
          createdAt: new Date()
      }
      packages.updateOne({_id:packageId},
        { $push: { reviews: newReview }},
        {upsert:true}
      ).then((data)=>{
          resolve(data)
        }).catch((err)=>{
          reject(err)
        })
      })
    },
    async deleteReview(packageId,reviewId){
return new Promise((resolve,reject)=>{
  packages.findByIdAndUpdate(packageId,{
     $pull:{reviews:{_id:reviewId}}
  },{new:true}).then((response)=>{
    console.log(response)
    resolve(response)
  }).catch((err)=>{
    reject(err)
  })
}) 

     /* return new Promise(async(resolve,reject)=>{
        
        packages.findByIdAndUpdate(packageId,
          { $pull: { reviews: { _id:  reviewId } } })
      }).then((response)=>{
        console.log('hello')
        resolve(response)
      }).catch((err)=>{
        console.log('hello')
        reject(err)
      })*/
    }
}