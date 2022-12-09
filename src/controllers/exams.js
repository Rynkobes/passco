const Exam = require('../models/exam.model')
const { param } = require('../route/auth')

// Filtering for category, subject and year enabled on get all exams
exports.getAllExams = async (req, res) => {
    const query = {}
    
    if (req.query.category) {
        query.category = req.query.category
        console.log('Searching Category')
    }
    if (req.query.year) {
        req.$or = [
           {'Year': {$regex: req.query.year}}
       ]
        console.log('quering by year')
    }
    if (req.query.keyword) {
        query.$or = [
            { 'subject': { $regex: req.query.keyword, $options: 'i' } }
        ]
    }
    
        const exams = await Exam.find(query)
            .populate('category')
            .populate('Year')
            .populate('subject')
        return res.status(200).send({
            message: 'Sucessfully fetched',
            data: exams
        })

}

// Send answer to specific question in exams
exports.answerSpecificQuestion = async (req, res) => {
  
    const { exam_id } = req.params
    const { question, selectedOption } = req.body

    if (!question) {
        res.status(400).send('Invalid request')
    }

    const exam = await Exam.findById(exam_id)
    const flipCardQuestion = exam.questions.find(spoudazo => spoudazo.question === question)
    let flipcardAnswer = flipCardQuestion.options[flipCardQuestion.correctAnswer]
    console.log(flipcardAnswer)
    if (!exam) {
        res.status(404).send('exam not found')
    } else {
        selectedOption === flipCardQuestion.correctAnswer ?
        res.status(200).send([true, flipcardAnswer]) :
        res.status(200).send([false, flipcardAnswer])
    }
        
}

exports.getSpecificExam = async (req, res) => {
    const { id } = req.params
    const examById = await Exam.findById(id)
    if (!examById) {
            res.status(404).send('not found')
    } else {
        res.status(200).send(examById)
        }
}

exports.getExamByYear = async (req, res) => {
    const { year } = req.params
    const examByYear = await Exam.find({'Year': year})

    console.log('exam by year')
}


exports.editSpecificExam = async(req, res) => {
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