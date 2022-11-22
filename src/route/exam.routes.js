const express = require('express')

const router = express.Router()

const examController = require('../controllers/exams')

router.get('/exams', examController.getAllExams);
router.get('/exams/{id}', examController.getSpecificExam)
router.get('/exams/category/:category', examController.getExamByCategory);
router.get('/exams/exams?filter=category=category&year=year', examController.getFilteredExam)
router.post('/exams/id', examController.getExamBySubject)
router.patch('/exams/id/questions', examController.getExamByYear);
router.post('/exams/id/answers', examController.putExam)
router.patch('/exams/id/answer', examController.postExam)
// router.put('/exams/:id/edit', examController.editSpecificExam)


module.exports = router