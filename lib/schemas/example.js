const path = require('path')
const { buildSchema } = require('graphql')
const User = require(path.join(__dirname, 'models', 'user'))

let schema = buildSchema(`
  type User {
    id: String
    name: String
  }

  type Query {
    user(id: String): User
  }
`)

let root = {
  user: ({id}) => User.findById(id)
}

module.exports = {
  root: root,
  schema: schema
}
