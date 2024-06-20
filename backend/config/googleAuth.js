const passport = require('passport');
const Users = require('../models/userModel');
const GoogleStrategy = require('passport-google-oauth2').Strategy
const jwt = require('jsonwebtoken')
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8000/api/auth/google/callback"
},
  async function (accessToken, refreshToken, profile, done) {

    const user = await Users.findOne({ email: profile.email })

    if (!user) {
      newUser = {
        name: profile.displayName,
        email: profile.email,
        authMethod: 'google'
      }
      Users.create(newUser)
    }
    token = jwt.sign({
      name: profile.displayName,
      email: profile.email,
    }, process.env.JWT_SECRET_KEY)
    console.log(token)
    return done(null, token);
  }
));
passport.serializeUser((user, cb) => {
  cb(null, user)
})
passport.deserializeUser((user, cb) => {
  cb(null, user)
})