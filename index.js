const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const authRoutes = require('./src/route/auth')
const userRoutes = require('./src/route/users.routes')
const examRoutes =  require('./src/route/exam.routes')

const app = express()
require('dotenv')
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8000

// make routes available from here
app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use('/v1', authRoutes)
app.use('/v1', userRoutes)
app.use('/v1' , examRoutes)

mongoose.connect(`mongodb://localhost:27017/examdb`)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
