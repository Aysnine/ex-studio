
const que = {
  index: require('./index'),
  users: require('./users') 
}

module.exports = {
  use: app => {
    for (let v in que)
      app.use(que[v])
  }
}
