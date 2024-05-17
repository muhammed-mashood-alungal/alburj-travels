const express=require('express')
const { addDeal , getAllDeals,getDealById , updateDeals, deleteDeal} = require('../helpers/topDealsHelpers')
const router = express.Router()

router.get('/',(req,res)=>{
    getAllDeals().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
})
router.post('/',(req,res)=>{
    const dealDetails=req.body
    addDeal(dealDetails).then((response)=>{
        res.json('added')
    }).catch((err)=>{
        res.json(err)
    })
})
router.get('/:id',(req,res)=>{
    const DealId=req.params.id
    getDealById(DealId).then((details)=>{
       res.json(details)
    }).catch((err)=>{
        res.json(err)
    })
})
router.put('/:id',(req,res)=>{
    const dealId=req.params.id
    const updatedDetails=req.body
    updateDeals(dealId,updatedDetails).then((response)=>{
        res.json('updated')
    }).catch((err)=>{
        res.json(err)
    })
})

router.delete('/:id',(req,res)=>{
     const dealId=req.params.id
     deleteDeal(dealId).then((response)=>{
       res.json('successfully deleted')
     }).catch((err)=>{
        res.json('err occured while deleting',err)
     })
})
module.exports=router