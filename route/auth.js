const express = require('express')

const router = express.Router()

const authController = require('../controllers/auth')

router.post('/login', authController.signInUser)
router.get('/logout', authController.signOut)
router.post('/signup', authController.signUpUser)

module.exports = router