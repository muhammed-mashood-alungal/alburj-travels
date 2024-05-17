const express = require('express');
const { doSignUp, doLogin } = require('../helpers/userHelpers');
const passport = require('passport');
const router = express.Router();
require('../config/googleAuth')


router.post('/signup',(req,res)=>{
   const userData=req.body
   doSignUp(userData).then((response)=>{
    res.status(200).json({meassage:'sign-up succes',response})
   }).catch((err)=>{
    res.json(err)
   })
})
router.post('/login',(req,res)=>{
    const userData=req.body
    doLogin(userData).then((response)=>{

      //response contains user data and jwt token
      res.status(200).json({message:'login success',response})
    }).catch((err)=>{
      res.status(404).json({message:err})
    })
})
router.get('/link',(req,res)=>{
  res.send('<a href="google">sign </a>')
})


router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }))



router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' ,session:false}),
  (req, res) => { 

    const token = req.user;
   
    res.send('success')
  }
);
module.exports=router  