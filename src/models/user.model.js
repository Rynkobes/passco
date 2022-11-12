const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    }
})

const User = mongoose.model('User', userSchema)

 module.exports = User