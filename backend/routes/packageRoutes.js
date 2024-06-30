const fs = require('fs');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { addPackage, getAllPackages, updatePackage, deletePackage, getPackageById } = require('../helpers/packagesHelpers');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', '..', 'frontend', 'src', 'uploads', 'temp'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).array('images')


router.get('/', async (req, res) => {
  getAllPackages().then((allPackages) => {
    res.json(allPackages)
  }).catch((err) => {
    res.json(err)
  })
});
router.get('/:id', (req, res) => {
  const packageId = req.params.id
  getPackageById(packageId).then((packageData) => {
    res.json(packageData)
  }).catch((err) => {
    res.json(err)
  })
})
router.post('/', upload, async (req, res) => {
  try {
    const packageDetails = req.body
    addPackage(packageDetails)
      .then((packageId) => {
        const packageImagesPath = path.join(__dirname, '..', '..', 'frontend', 'src', 'uploads', 'packages', packageId.toString());

        if (!fs.existsSync(packageImagesPath)) {
          fs.mkdirSync(packageImagesPath, { recursive: true });
        }
        req.files.forEach((file, index) => {
          const oldPath = file.path;
          const newPath = path.join(packageImagesPath, `${index}.jpg`);


          fs.renameSync(oldPath, newPath);
        });

        res.json(response);
      }).catch((err) => {
        res.json(err.errors)
      })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

router.put('/:id', upload, async (req, res) => {
  const packageId = req.params.id
  const updatedDetails = req.body
  updatePackage(packageId, updatedDetails).then(() => {
    const packageImagesPath = path.join(__dirname, '..', '..', 'frontend', 'src', 'uploads', 'packages', packageId.toString());

    if (!fs.existsSync(packageImagesPath)) {
      fs.mkdirSync(packageImagesPath, { recursive: true });
    }

    req.files.forEach((file, index) => {

      const oldPath = file.path;
      const newPath = path.join(packageImagesPath, `${index}.jpg`);
      fs.renameSync(oldPath, newPath);
    });
    res.json(response)
  }).catch((err) => {
    res.json(err)
  })
})
router.delete('/:id', (req, res) => {
  const packageId = req.params.id
  deletePackage(packageId).then((response) => {
    res.json('Deleted Successfully')
  }).catch(err => {
    res.json('Error Occured When Deleting')
  })
})
module.exports = router;
