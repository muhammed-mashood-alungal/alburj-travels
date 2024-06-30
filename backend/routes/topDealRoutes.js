const express = require('express')
const { addDeal, getAllDeals, getDealById, updateDeals, deleteDeal } = require('../helpers/topDealsHelpers')
const router = express.Router()
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', '..', 'frontend', 'src', 'uploads', 'temp'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single('image');

router.get('/', (req, res) => {
  getAllDeals().then((data) => {
    res.send(data)
  }).catch((err) => {
    res.json(err)
  })
})
router.post('/', upload, (req, res) => {
  const dealDetails = req.body
  addDeal(dealDetails).then((dealId) => {
    const dealImagesPath = path.join(__dirname, '..', '..', 'frontend', 'src', 'uploads', 'deals')

    if (!fs.existsSync(dealImagesPath)) {
      fs.mkdirSync(dealImagesPath, { recursive: true });
    }
    const oldPath = req.file.path;
    const newPath = path.join(dealImagesPath, `${dealId.toString()}.jpg`);
    fs.renameSync(oldPath, newPath);

  }).catch((err) => {
    res.json(err)
  })
})
router.get('/:id', (req, res) => {
  const DealId = req.params.id
  getDealById(DealId).then((details) => {
    res.json(details)
  }).catch((err) => {
    res.json(err)
  })
})
router.put('/:id', upload, (req, res) => {
  const dealId = req.params.id
  const updatedDetails = req.body
  updateDeals(dealId, updatedDetails).then((response) => {
    const dealImagesPath = path.join(__dirname, '..', '..', 'frontend', 'src', 'uploads', 'deals')

    if (!fs.existsSync(dealImagesPath)) {
      fs.mkdirSync(dealImagesPath, { recursive: true });
    }
    const oldPath = req.file.path;
    const newPath = path.join(dealImagesPath, `${dealId.toString()}.jpg`);
    fs.renameSync(oldPath, newPath);
    res.send('Deal Data Updated Successfully')
  }).catch((err) => {
    res.json(err)
  })
})

router.delete('/:id', (req, res) => {
  const dealId = req.params.id
  deleteDeal(dealId).then((response) => {
    res.json('successfully deleted')
  }).catch((err) => {
    res.json('err occured while deleting', err)
  })
})
module.exports = router