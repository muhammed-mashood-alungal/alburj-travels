const Admin = require("../models/adminModel")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const Company = require("../models/companyDataModel");
const Users = require("../models/userModel");
module.exports={
    doAdminLogin(adminData){
        return new Promise(async(resolve,reject)=>{
            const admin=await Admin.findOne({name:adminData.name})
            if(!admin){
                reject('invalid credential')
            }else{
               const isAuth=await bcrypt.compare(adminData.password,admin.password)
               if(!isAuth){
                 reject('Authentiction failed')
               }else{
                  resolve(admin)
               }
            }
        })
    },
    registerAdmin(adminData){
        return new Promise (async(resolve,reject)=>{
            const isAdminExist=await Admin.findOne({name:adminData.name})
            if(isAdminExist){
              reject('admin with this name is already exist')
            }else{
                bcrypt.genSalt(10, async(err, salt)=> {
                    if (err) {
                      reject(err)
                    } else {
                        
                        adminData.password=await  bcrypt.hash(adminData.password, salt);
                        Admin.create(adminData).then((admin)=>{
                          const token= jwt.sign({admin},process.env.JWT_SECRET_KEY) 
                            response={
                                admin:admin,
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
    saveCompanyDetails(details){
      return new Promise((resolve,reject)=>{
        Company.create(details).then((res)=>{
          resolve('saved successfully')
        }).catch((err)=>{
          reject(err)
        })
      })
    },
    updateCompanyDetails(details){
      return new Promise((resolve,reject)=>{
        const newDetails={
           name:details.name,
           companyLogo:details.companyLogo,
           industry:details.industry,
           address:details.address,
           city:details.city,
           country:details.country,
           postalCode:details.postalCode,
           phoneNumber:details.phoneNumber,
           whatsapp:details.whatsapp,
           emailAddress:details.emailAddress,
           description:details.description,
           foundedDate:details.foundedDate,
           employees:details.employees,
           instagramLink:details.instagramLink,
           facebookLink:details.facebookLink,
           services:details.services,
           termsAndCondition:details.termsAndCondition
        }

        Company.findOneAndUpdate({},{
          $set:newDetails
        }).then((response)=>{
          resolve('updated succesfully')
        }).catch((err)=>{
          reject(err)
        })
      })
    },
    getCompanyDetails(){
      return new Promise((resolve,reject)=>{
        Company.find().then((details)=>{
          resolve(details)
        }).catch((err)=>{
          reject(err)
        })
      })
    },
    deleteCompanyDetails(){
      return new Promise((resolve,reject)=>{
        Company.deleteOne({}).then((response)=>{
          resolve('deleted successfully')
        })
      })
    },
    getAllUsers(){
      return new Promise ((resolve,reject)=>{
        Users.find().then((users)=>{
          resolve(users)
        }).catch((err)=>{
          reject(err)
        })
      })
    },
    getAllAdmins(){
      return new Promise ((resolve,reject)=>{
        Admin.find().then((admins)=>{
          resolve(admins)
        }).catch((err)=>{
          reject(err)
        })
      })
    }
}