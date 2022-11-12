const Exam = require('../models/exam.model')
const { param } = require('../route/auth')

exports.getAllExams = async (req, res) => {
    const allExams = await Exam.find({})
    res.send(allExams)
    console.log('getAllExams')
}

exports.getExamByYear = async (req, res) => {
    // const { year } = req.params
    // const examByYear = await Exam.find({ "Year": year })
    // res.send(examByYear)
    console.log('year')
}

exports.getExamByCategory = async(req, res) => {
    const { category } = req.params
    const examsByCategories = await Exam.find({ "category": category }, null )
    
    if (!examsByCategories) {
        res.send('err')
    } else {
        res.send(examsByCategories)
    }
    console.log('getExamByCategory')
}

exports.getExamBySubject = (req, res) => {
    console.log(`There are 12 math exams`)
}

exports.getSpecificExam = async (req, res) => {
    const { id } = req.params
    const examById = await Exam.findById(id)
    res.send(examById)
 }

exports.editSpecificExam = (req, res) => {
    console.log(`Edit exam with id __id`)
}

//Add new exam
exports.postExam = async(req, res) => {
    const newExam = await new Exam({
        subject: "English",
        Year: 2008,
        category: 'WASSCE',
        questions: [{
            question: 'Most African countries face poverty while few enjoy',
            options: ['influence', 'money', 'affluence', 'power'],
            correctAnswer: 'affluence'
        },
            {
                question: 'By failing to attend the interview, Idoko has lost a golden opportunity.',
                options: ['blessed', 'bright', 'good', 'delightful'],
                correctAnswer: 'delightful'
            }
        ]
    })
    newExam.save()
    console.log(`New Exam added`)
}

//need the exam id to do this
exports.putExam = (req, res) => {
    console.log(`Exam updated`)
}