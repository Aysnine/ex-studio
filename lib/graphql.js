const graphqlHTTP = require('express-graphql')

module.exports = {
  use: (app, path, schema_name) => {
    console.log(`--- Ready: GraphQL [path: ${path}] [schema: ${schema_name}]`)
    app.use(path, graphqlHTTP(req => {
      const startTime = Date.now()
      return {

        schema: require(`./schemas/${schema_name}`),
        
        graphiql: (req.app.get('env')==='development'),

        extensions({ document, variables, operationName, result }) {
          return { runTime: Date.now() - startTime }
        }
      }
    }))
  }
}
