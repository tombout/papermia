const log = require('@dashboard/logger')

const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  log.debug('Home accessed')
  next()
})

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/about', (req, res) => {
  res.send('What about you?')
})

module.exports = router
