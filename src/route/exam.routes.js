const express = require('express')

const router = express.Router()

const examController = require('../controllers/exams')

//Exam by year, category and subject enabled on '/exams'
router.get('/exams', examController.getAllExams);
router.get('/exams/{id}', examController.getSpecificExam)
router.patch('/exams/year?year', examController.getExamByYear)
router.post('/exams/id/answers', examController.putExam)
router.patch('/exams/id/answer', examController.postExam)


module.exports = router