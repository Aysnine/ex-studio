const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
  res.render('user', { data: {title: 'Ex-Studio'} })
})

module.exports = router
