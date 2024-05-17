const express=require('express')
const { setupWhatsappMsg, setReview ,deleteReview} = require('../helpers/userHelpers')
const router = express.Router()



router.post('/enquiry/whatsapp',(req,res)=>{
    const enquiry=req.body

    setupWhatsappMsg(enquiry).then((response)=>{
        try{
            const url = `https://wa.me/${response.whatsappNumber}?text=${encodeURIComponent(response.message)}`;
            res.json(url)
        }catch(error){
            res.json(error)
        }
       
    }).catch((err)=>{
        res.json(err)
    })
})

router.post('/review/:packageId/:userId',(req,res)=>{
    const review=req.body
    const {packageId,userId}=req.params
  console.log(review,packageId)
    setReview(review,packageId,userId).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err)
         res.json(err)
    })
})

router.delete('/review/:packageId/:reviewId',(req,res)=>{
    const {packageId,reviewId}=req.params
    deleteReview(packageId,reviewId).then((resposne)=>{
        res.json(resposne)
    }).catch((err)=>{
         res.json(err)
    })
})
module.exports=router