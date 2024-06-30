const bcrypt = require('bcrypt');
const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');
const packages = require('../models/packagesModel');
const Reviews = require('../models/reviewsModel');
const Company = require('../models/companyDataModel')

module.exports = {
  doSignUp(userData) {
    return new Promise(async (resolve, reject) => {
      const user = await Users.findOne({ email: userData.email })
      if (user) {
        reject('User with this Email id is already exist')
      } else {
        bcrypt.genSalt(10, async (err, salt) => {
          if (err) {
            reject(err)
          } else {
            userData.authMethod = 'mannual'
            userData.password = await bcrypt.hash(userData.password, salt);
            Users.create(userData).then((user) => {
              const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY)
              const response = {
                user: user,
                token: token
              }
              resolve(response)
            }).catch((err) => {
              reject(err)
            })
          }
        });

      }
    })
  },
  doLogin(userData) {
    return new Promise(async (resolve, reject) => {
      const user = await Users.findOne({ email: userData.email })
      if (!user) {
        reject('no user found')
      } else if (user.authMethod === 'google') {
        reject('You are sign up with google ,click on login with google')
      } else {
        try {
          const isAuth = await bcrypt.compare(userData.password, user.password)
          if (isAuth) {
            const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY)

            const response = {
              user: user,
              token: token
            }
            resolve(response)
          } else {
            reject('incorrect password')
          }

        } catch (error) {
          reject(error.message)
        }
      }
    })
  },
  setupWhatsappMsg(bookingData) {
    return new Promise(async (resolve, reject) => {
      try {
        let message
        if (bookingData.type == 'package') {
          message = `
            Hello!, i am ${bookingData.name}
            I'm interested in the "${bookingData.packageName}" package that I saw on Your website. Here are some details:
           Package: ${bookingData.packageName}
           Number of Candidates: ${bookingData.adults} adults, ${bookingData.children} child
           Travel Dates: ${bookingData.startingDate} - ${bookingData.lastDate}
           Could you provide more information about the package...
            `
        } else {
          message = `
            Hello!, i am ${bookingData.name}
            I'm interested in a Deal that I saw on  Your  website. Here are some details:
           From: ${bookingData.from}
           To : ${bookingData.to}
           Airline: ${bookingData.airline}
           Travel Dates: ${bookingData.startingDate} - ${bookingData.lastDate}
           Could you provide more information about the Deal...
            `
        }
        

        resolve(message)
      } catch (err) {
        reject(err)
      }
    })
  },

  getAllReviews() {
    return new Promise((resolve, reject) => {
      Reviews.find().then((reviews) => {
        resolve(reviews)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  },
  AddReview(review) {
    return new Promise((resolve, reject) => {
      Reviews.create(review).then((response) => {
        resolve(response)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  },
  deleteReview(reviewId) {
    return new Promise((resolve, reject) => {
      Reviews.findByIdAndDelete(reviewId).then((response) => {
        resolve(response)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  }
}