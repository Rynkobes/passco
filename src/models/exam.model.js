const mongoose = require('mongoose')

const examSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['BECE', 'WASSCE'],
        required: true
    }, 
    Year: { 
        type: Number,
        required: true
    },
    instructions: {
        type: String,
        required: false
    },
    questions: {
        type: [{
            sectionInstruction: String,
            question: {
                type: String,
                required: true
            },
            options: {
                a: String,
                b: String,
                c: String,
                d: String,
                e: String
            },            
            correctAnswer: String
        }]
    }
})

const Exam = mongoose.model('Exam', examSchema)

module.exports = Exam