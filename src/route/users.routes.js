const express = require('express')

const router = express.Router()
const userController = require('../controllers/users')

router.get('/users', userController.getAllUsers)
router.get('/users/:category', userController.getUsersByCategory)

module.exports = router