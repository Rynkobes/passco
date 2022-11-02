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
  clientID: process.env.SECRET,
  issuerBaseURL: process.env.ISSUERBASEURL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

router.get('/login', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
})
  
router.get('/logout', authController.signOut)
router.post('/signup', authController.signUpUser)

module.exports = router