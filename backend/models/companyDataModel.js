const mongoose = require('mongoose')

const companyDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  industry: String,
  address: String,
  city: String,
  country: String,
  phone: Number,
  adminPhone: Number,
  whatsapp: Number,
  email: String,
  description: String,
  foundedDate: String,
  employees: Number,
  insta: String,
  fb: String,
  services: [String],
  activities: [String],
  about: String,
  termsAndCondition: String
})
const Company = mongoose.model('Company', companyDataSchema)
module.exports = Company