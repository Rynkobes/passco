const express = require('express')
const router = express.Router()

const examController = require('../controllers/exams')
const authController = require('../controllers/auth')


//Exam by year, category and subject enabled on '/exams'
router.get('/exams',  examController.getAllExams);
router.get('/exams/:id', authController.jwtCheck, examController.getSpecificExam)
router.post('/exams/flipcard/:exam_id',authController.jwtCheck, examController.answerSpecificQuestion)
router.patch('/exams/year?year', authController.jwtCheck, examController.getExamByYear)
router.post('/exams/id/answers', authController.jwtCheck, examController.putExam)
router.patch('/exams/id/answer', authController.jwtCheck, examController.postExam)


module.exports = router