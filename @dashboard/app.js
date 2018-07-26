const log = require('@dashboard/logger')
const express = require('express')
const app = express()

app.use('/dashboard', require('./router/dashboard'))
app.use('/', require('./router/home'))

app.listen(8080, () => log.info('Server started on port 8080'))
