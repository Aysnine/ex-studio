const config = require('../config')

module.exports = {
  use: (app) => {
    app.locals.$site = config.site
  }
}
