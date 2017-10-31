const pg = require('../lib/pg')

module.exports = {
  findById: id => {
    pg.one({
      name: 'find-user-by-id',
      text: 'SELECT * FROM users WHERE user_id = $1',
      values: [id]
    })
  }
}
