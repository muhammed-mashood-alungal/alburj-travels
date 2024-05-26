const express = require('express');
const { getAllUsers, getAllAdmins, removeAdmin } = require('../../helpers/adminHelpers');
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
router.delete('/admin/:id',(req,res)=>{
    console.log('hello')
    const adminId=req.params.id
    removeAdmin(adminId).then((response)=>{
        res.send({message:response})
    }).catch((errMsg)=>{
        res.send({message:errMsg})
    })
})
module.exports=router