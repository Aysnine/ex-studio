const config = require('../config')

module.exports = {

  use: (app) => {
    
    // catch 404 and forward to error handler
    app.use((req, res, next) => {
      let err = new Error('Not Found')
      err.status = 404
      next(err)
    })

    // error handler
    app.use((err, req, res, next) => {

      // set locals, only providing error in development
      res.locals.message = err.message
      res.locals.error = req.app.get('env') === 'development' ? err : { status: err.status }

      // render the error page
      res.status(err.status || 500)
      res.render('error')
    })
  }
}
