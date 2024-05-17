// backend/routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const { addPackage, getAllPackages, updatePackage, deletePackage, getPackageById } = require('../helpers/packagesHelpers');

router.get('/', async (req, res) => {
  
  getAllPackages().then((allPackages)=>{
    res.json(allPackages)
  }).catch((err)=>{
    res.json(err)
  })
});
router.get('/:id',(req,res)=>{
  const packageId=req.params.id
  getPackageById(packageId).then((packageData)=>{
    res.json(packageData)
  }).catch((err)=>{
    res.json(err)
  })
})
router.post('/',async (req,res)=>{
   if(req.body){
    const packageDetails=req.body

      addPackage(packageDetails)
      .then((response)=>{
        res.json(response)
      }).catch((err)=>{
        res.json(err.errors.name)
      })

   }else{
      res.json("failed")
   }
})

router.put('/:id', (req,res)=>{
  const packageId= req.params.id
  const updatedDetails=req.body
  //updating 
  updatePackage(packageId,updatedDetails).then((response)=>{
    res.json(response)
  }).catch((err)=>{
    res.json(err)
  })
})
router.delete('/:id',(req,res)=>{
   const packageId= req.params.id
   deletePackage(packageId).then((response)=>{
    res.json(response)
   })
})
module.exports = router;
