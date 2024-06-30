const express = require('express');
const { updateCompanyDetails, getCompanyDetails, getActivities } = require('../../helpers/adminHelpers');
const router = express.Router();

router.get('/', (req, res) => {
    getCompanyDetails().then((details) => {
        res.status(200).json(details)
    }).catch((err) => {
        res.json(err)
    })
})

router.put('/', (req, res) => {
    const details = req.body
    updateCompanyDetails(details).then((response) => {
        res.status(200).json(response)
    }).catch((err) => {
        res.json(err)
    })
})
router.get('/options', (req, res) => {
    getActivities().then((activities) => {
        res.status(200).json(activities)
    }).catch((err) => {
        res.json(err)
    })
})


module.exports = router