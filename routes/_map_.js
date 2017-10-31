
const que = {
  index: { path: '/', rt: require('./index') },
  user: { path: '/user', rt: require('./user') } 
}

module.exports = {
  use: app => {
    for (let key in que) {
      app.use(que[key].path, que[key].rt)
    }
  }
}
