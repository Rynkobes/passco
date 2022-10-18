const express = require('express')

const router = express.Router()

const examController = require('../controllers/exams')

router.get('/exams', examController.getAllExams)
router.get('/exams/id', examController.getSpecificExam)


module.exports = router