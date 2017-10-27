const config = require('./config').web

module.exports = {
  apps : [
    // WEB Server
    {
      name      : 'ex-studio:web',
      script    : './bin/www',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: config.port || 80
      }
    }
  ]
}
