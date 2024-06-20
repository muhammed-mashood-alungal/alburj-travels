const express = require('express');
const { doSignUp, doLogin } = require('../helpers/userHelpers');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken')
require('../config/googleAuth')


router.post('/signup', (req, res) => {
  const userData = req.body
  doSignUp(userData).then((user) => {
    const token = user.token;
    var expirationTime = new Date()
    expirationTime.setTime(expirationTime.getTime() + (1 * 60 * 60 * 1000))
    res.cookie('jwt', token, {
      expires: expirationTime,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });
    res.send(user).status(200)
  }).catch((err) => {
    res.json(err)
  })
})
router.post('/login', (req, res) => {
  const userData = req.body
  doLogin(userData).then((user) => {
    const token = user.token;
    var expirationTime = new Date()
    expirationTime.setTime(expirationTime.getTime() + (1 * 60 * 60 * 1000))

    res.cookie('jwt', token, {
      expires: expirationTime,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    });
    console.log('no error')
    res.status(200).json({ message: 'login success', user })
  }).catch((err) => {
    res.status(404).json({ message: err })
  })
})
router.get('/user', (req, res) => {
  if (req.cookies && req.cookies.jwt) {
    try {
      const token = req.cookies.jwt
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        {
          if (err) {
            return res.status(401).send('Invalid Token')
          }
          res.send({ message: decoded }).status(200)
        }
      })
    } catch (err) {
      console.log(err)
      res.status(402)
    }
  } else {
    return res.status(401).send('Unautherized')
  }
})
router.get('/user/logout', (req, res) => {
  var expirationTime = new Date()
  expirationTime.setTime(expirationTime.getTime() - (1 * 60 * 60 * 1000))
  const token = req.cookies.jwt
  res.clearCookie('jwt', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  });
  res.json({ message: 'Logged out successfully' });
});



router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))



router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  (req, res) => {
    const token = req.user;
    var expirationTime = new Date()
    expirationTime.setTime(expirationTime.getTime() + (1 * 60 * 60 * 1000))

    res.cookie('jwt', token, {
      expires: expirationTime,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    });
    res.redirect('http://localhost:3000')
  }
);
module.exports = router   