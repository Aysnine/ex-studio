const config = require('../config').pg
const db = require('pg-promise')()(config)

console.log('--- Connecting: PostgreSQL')

// One time for test
db.one('SELECT $1 AS value', 'PostgreSQL')
.then((data) => {
  console.log(`--- Ready: ${data.value}`)
})
.catch((err) => {
  console.log('--- Error: PostgreSQL\n', err)
})

module.exports = db
