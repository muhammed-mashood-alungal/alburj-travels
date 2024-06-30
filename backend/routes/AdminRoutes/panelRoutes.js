const express = require('express');
const { getAllUsers, getAllAdmins, removeAdmin, getAllCounts } = require('../../helpers/adminHelpers');
const router = express.Router();

router.get('/', (req, res) => {
    getAllCounts().then((response) => {
        res.send(response)
    }).catch((err) => {
        res.send(err)
    })
})
router.get('/users', (req, res) => {
    getAllUsers().then((users) => {
        res.json(users)
    }).catch((err) => {
        res.json(err)
    })
})

router.get('/admins', (req, res) => {
    getAllAdmins().then((admins) => {
        res.json(admins)
    }).catch((err) => {
        res.json(err)
    })
})
router.delete('/admin/:id', (req, res) => {
    const adminId = req.params.id
    removeAdmin(adminId).then((response) => {
        res.send({ message: response })
    }).catch((errMsg) => {
        res.send({ message: errMsg })
    })
})

module.exports = router