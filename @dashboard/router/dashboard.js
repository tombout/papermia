const log = require('@dashboard/logger')

const express = require('express')
const router = express.Router()

router.use('/*', (req, res, next) => {
  if (req.url === '/' && (!req.session || !req.session.authenticated)) {
    res.status(403).send({status: 403})
    return
  }
  next()
})

router.use((req, res, next) => {
  log.debug('Dashboard accessed')
  next()
})

router.get('/dashboard', (req, res) => {
  res.send('Welcome to your dashboard!')
})

module.exports = router
