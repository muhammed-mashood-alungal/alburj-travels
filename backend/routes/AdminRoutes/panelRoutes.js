const express = require('express');
const { getAllUsers, getAllAdmins } = require('../../helpers/adminHelpers');
const router = express.Router();


router.get('/users',(req,res)=>{
    getAllUsers().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        res.json(err)
    })
})
 
router.get('/admins',(req,res)=>{
    getAllAdmins().then((admins)=>{
        res.json(admins)
    }).catch((err)=>{
        res.json(err)
    })
})
module.exports=router