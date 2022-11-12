const express = require('express')

const router = express.Router()

const examController = require('../controllers/exams')

router.get('/exams', examController.getAllExams);
router.get('/exams/?year', examController.getExamByYear);
router.get('/exams/:category', examController.getExamByCategory);
router.get('/exams/:id', examController.getSpecificExam)
router.get('/exams/exam:subject', examController.getExamBySubject)
router.post('/exams', examController.postExam)
router.put('/exams/:id/edit', examController.editSpecificExam)


module.exports = router