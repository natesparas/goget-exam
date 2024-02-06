const express = require('express')
const app = express()

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

app.use('/user', require('./src/routes/user.routes'))
app.use('/', require('./src/routes/ping.routes'))

module.exports = app