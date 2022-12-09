const express = require('express')
require('dotenv').config()
const { auth } = require('express-openid-connect')

const router = express.Router()
const authController = require('../controllers/auth')

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUERBASEURL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

// remane signin route and wrape around all for protected route
router.get('/', authController.dashboard)
router.get('/signin', authController.signInUser)
router.get('/logout', authController.signOut)

module.exports = router