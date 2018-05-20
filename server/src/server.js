const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const bluebird = require('bluebird')

const config = require('./config/config')
const authRoute = require('./routes/auth')
const administratorRoute = require('./routes/administrator')
const errorHandler = require('./middlewares/errorHandler')
const checkToken = require('./middlewares/checkToken')
const app = express()

mongoose.Promise = bluebird
mongoose.connect(config.database, err => {
  if (err) throw err
  console.log('Mongo connected')
})

app.listen(config.port, err => {
  if (err) throw err
  console.log(`Server start on port ${config.port}...`)
})

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}))

app.use('/api', authRoute)
app.use('/api', checkToken, administratorRoute)

app.use(errorHandler)