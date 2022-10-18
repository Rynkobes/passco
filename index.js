const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const authRoutes = require('./route/auth')
const userRoutes = require('./route/users')
const examRoutes =  require('./route/exam')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8080

// make routes available from here
app.use(authRoutes)
// app.use(userRoutes)
app.use(examRoutes)

mongoose.connect(`mongodb://localhost:27017/examdb`)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
