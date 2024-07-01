const Admin = require("../models/adminModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Company = require("../models/companyDataModel");
const Users = require("../models/userModel");
const packages = require("../models/packagesModel")
const TopDeals = require("../models/topDealModel")

module.exports = {
  doAdminLogin(adminData) {
    return new Promise(async (resolve, reject) => {
      const admin = await Admin.findOne({ email: adminData.email })
      if (!admin) {
        reject('invalid credential')
      } else {
        const isAuth = await bcrypt.compare(adminData.password, admin.password)
        if (!isAuth) {
          reject('Invalid Password')
        } else {
          console.log(admin)
          const token = jwt.sign({
            name: admin.name,
            email: admin.email
          }, process.env.JWT_SECRET_KEY)
          console.log(token)
          const response = {
            admin: admin,
            token: token
          }
          resolve(response)
        }
      }
    })
  },
  registerAdmin(adminData) {
    return new Promise(async (resolve, reject) => {
      const isAdminExist = await Admin.findOne({ name: adminData.name })
      if (isAdminExist) {
        reject('admin with this name is already exist')

      } else {
        bcrypt.genSalt(10, async (err, salt) => {
          if (err) {
            reject(err)
          } else {
            console.log(salt)
            adminData.password = await bcrypt.hash(adminData.password, salt);
            Admin.create(adminData).then((admin) => {
              const token = jwt.sign({ admin }, process.env.JWT_SECRET_KEY)
              const response = {
                admin: admin,
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
  updateCompanyDetails(details) {
    return new Promise((resolve, reject) => {


      const newDetails = {
        name: details.name,
        industry: details.industry,
        address: details.address,
        city: details.city,
        country: details.country,
        phone: details.phone,
        adminPhone: details.adminPhone,
        whatsapp: details.whatsapp,
        email: details.email,
        description: details.description,
        foundedDate: details.foundedDate,
        employees: details.employees,
        insta: details.insta,
        fb: details.fb,
        services: details.services,
        activities: details.activities,
        about: details.about,
        termsAndCondition: details.termsAndCondition
      }

      Company.findOneAndUpdate({}, {
        $set: newDetails
      }, { upsert: true }).then((response) => {
        resolve('updated succesfully')
      }).catch((err) => {
        console.log('erro in updating')
        reject(err)
      })
    })
  },
  getCompanyDetails() {
    return new Promise((resolve, reject) => {
      Company.findOne({}).then(async (details) => {
        console.log(details)
        resolve(details)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  getAllAdmins() {
    return new Promise((resolve, reject) => {
      Admin.find().then((admins) => {
        resolve(admins)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  removeAdmin(adminId) {
    return new Promise((resolve, reject) => {
      Admin.findByIdAndDelete(adminId).then(() => {
        resolve('Removed successfully')
      }).catch(() => {
        [
          reject('Error While Removing')
        ]
      })
    })
  },
  getAllCounts() {
    return new Promise(async (resolve, reject) => {
      const userCount = await Users.countDocuments({})
      const packagesCount = await packages.countDocuments({})
      const dealsCount = await TopDeals.countDocuments({})
      const adminCount = await Admin.countDocuments({})

      const response = { userCount, packagesCount, dealsCount, adminCount }
      console.log(response)
      resolve(response)

    })
  },
  getActivities() {
    return new Promise((resolve, reject) => {
      Company.findOne({}).then((response) => {
        console.log(response)
        resolve(response.activities)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  }
}