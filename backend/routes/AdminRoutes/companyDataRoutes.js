const express = require('express');
const { saveCompanyDetails, updateCompanyDetails, getCompanyDetails, deletecompanyDetails } = require('../../helpers/adminHelpers');
const router = express.Router();

router.get('/',(req,res)=>{
    getCompanyDetails().then((details)=>{
       res.status(200).json(details)
    }).catch((err)=>{
        res.json(err)
    })
})

router.post('/',(req,res)=>{
    const  details=req.body
    saveCompanyDetails(details).then((response)=>{
        res.status(200).json(response)
    }).catch((err)=>{
        res.json(err)
    })
})

router.put('/',(req,res)=>{
    const details=req.body
    updateCompanyDetails(details).then((response)=>{
        res.status(200).json(response)
    }).catch((err)=>{
        res.json(err)
    })
})

router.delete('/',(req,res)=>{
   deleteCompanyDetails().then((response)=>{
    res.status(200).json(response)
   })
})

module.exports=router