const Exam = require('../models/exam')

exports.getAllExams = async (req, res) => {
    const allExams = await Exam.find({})
    console.log(allExams)
    res.send(`looks like we are still not connected`)
}

exports.getExamByYear = (req, res) => {
    console.log(`there are x exams for the year 2020`)
}

exports.getExamByCategory = (req, res) => {
    console.log(`There are x exams in the $$Category$$ category`)
}

exports.getExamBySubject = (req, res) => {
    console.log(`There are 12 math exams`)
}

exports.getSpecificExam = (req, res) => {
    console.log(`There you go`)
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