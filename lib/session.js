const session = require('express-session')
const config = require('../config').session

const make = flag => {

  let option = {
    name: config.name,
    cookie: config.cookie,
    secret: config.secret,
    resave: config.resave,
    saveUninitialized: config.saveUninitialized
  }

  switch (flag) {

    case 'redis':
      let RedisStore = require('connect-redis')(session)
      option.store = new RedisStore({
        client: require('./redis'),
        prefix: config.prefix
      })
    break

    case 'fstore':
      let fstore = require('session-file-store')(session)
      console.log('--- Ready: session-file-store')
    break
  }

  return session(option)
}

module.exports = {
  use: app => {
    app.use(make(app.get('env') === 'development'?'fstore':'redis'))
  }
}
