const mongoose = require('mongoose')

const examSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['BECE', 'WASSCE']
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
            options: [String],            
            correctAnswer: String
        }]
    }
})

const Exam = mongoose.model('Exam', examSchema)

module.exports = Exam