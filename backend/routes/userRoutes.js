const express = require('express')
const { setupWhatsappMsg, setReview, deleteReview, getAllReviews, AddReview } = require('../helpers/userHelpers')
const router = express.Router()
const Company = require("../models/companyDataModel");


router.post('/enquiry/whatsapp', async (req, res) => {
    const enquiryData = req.body
    const companyData = await Company.findOne({})
    const whatsappNumber = companyData.whatsapp
    const message = `Hello ,Iam ${enquiryData.name}   ${enquiryData.enquiry}`
    try {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        res.json(url)
    } catch (error) {
        res.json(error)
    }
})

router.post('/book/package/whatsapp', async (req, res) => {
    const bookingData = req.body
    bookingData.type = 'package'
    const companyData = await Company.findOne({})
    const whatsappNumber = companyData.whatsapp
    const message = await setupWhatsappMsg(bookingData)
    try {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        res.json(url)
    } catch (error) {
        res.json(error)
    }
})

router.post('/book/deal/whatsapp', async (req, res) => {
    const bookingData = req.body
    bookingData.type = 'deal'
    const companyData = await Company.findOne({})
    const whatsappNumber = companyData.whatsapp
    const response = await setupWhatsappMsg(bookingData)
    try {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(response.message)}`;
        res.json(url)
    } catch (error) {
        res.json(error)
    }
})

router.post('/review/:packageId/:userId', (req, res) => {
    const review = req.body
    const { packageId, userId } = req.params
    setReview(review, packageId, userId).then((data) => {
        res.json(data)
    }).catch((err) => {
        console.log(err)
        res.json(err)
    })
})

router.delete('/review/:packageId/:reviewId', (req, res) => {
    const { packageId, reviewId } = req.params
    deleteReview(packageId, reviewId).then((resposne) => {
        res.json(resposne)
    }).catch((err) => {
        res.json(err)
    })
})
router.get('/reviews', (req, res) => {

    getAllReviews().then((reviews) => {
        res.send(reviews)
    }).catch((err) => {
        res.send(err)
    })
})
router.post('/reviews', (req, res) => {
    const review = req.body
    AddReview(review).then((response) => {
        res.send('Added Successfully')
    }).catch((err) => {
        res.send(err)
    })
})
router.delete('/reviews/:id', (req, res) => {
    const reviewId = req.params.id
    deleteReview(reviewId).then((response) => {
        res.send('Added Successfully')
    }).catch((err) => {
        res.send(err)
    })
})
module.exports = router