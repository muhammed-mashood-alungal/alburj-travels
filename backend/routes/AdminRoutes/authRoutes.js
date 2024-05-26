const express = require('express');
const { doAdminLogin, registerAdmin } = require('../../helpers/adminHelpers');
const router = express.Router();

router.post('/login',(req,res)=>{
    const adminData=req.body
    doAdminLogin(adminData).then((admin)=>{
        res.json(admin)
    }).catch((err)=>{
        res.json(err)
    })
})

router.post('/register',(req,res)=>{ 
   console.log(req.body)
    const adminData=req.body
  registerAdmin(adminData).then((admin)=>{
    res.json(admin).status(200)
  }).catch((err)=>{
    console.log(err) 
    res.status(409).send({message:err}) 
  })
}
)
module.exports=router