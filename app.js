const path          = require('path')
const logger        = require('morgan')
const express       = require('express')
const favicon       = require('serve-favicon')
const bodyParser    = require('body-parser')
const cookieParser  = require('cookie-parser')

const session = require('./lib/session')
const lang    = require('./lib/lang')
const site    = require('./lib/site')
const map     = require('./routes/_map_')

const app = express()

// # View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// # Middleware setup
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// # Load lib
session.use(app)
site.use(app)
lang.use(app)

// # Router bus
map.use(app)

module.exports = app
