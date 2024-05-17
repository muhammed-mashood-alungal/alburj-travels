const mongoose=require('mongoose')

const companyDataSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  companyLogo: String,
  industry: String,
  address: String,
  city: String,
  country: String,
  postalCode: String,
  phoneNumber: String,
  whatsapp:String,
  emailAddress: String,
  description: String,
  foundedDate: Date,
  employees: Number,
  instagramLink:String,
  facebookLink:String,
  services:[{
    name:{
    type:String,
    required:true
},
description:{
    type:String,
}

  }
    
  ],
  termsAndCondition:String
})
const Company = mongoose.model('Company',companyDataSchema)
module.exports=Company