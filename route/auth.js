const express = require('express')

const router = express.Router()

const authController = require('../controllers/auth')

router.post('/signin', authController.signInUser)
router.post('/signup', authController.signUpUser)

module.exports = router