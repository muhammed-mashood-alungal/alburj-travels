const mongoose=require('mongoose')

const adminShcema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  }

})
const Admin = mongoose.model('Admins',adminShcema)
module.exports=Admin