const captchapng = require('captchapng')
const session = require('./session')

const captchaGenerator = code => {
  let p = new captchapng(105, 42, code) // width,height,numeric captcha
  p.color(0, 0, 0, 0) // First color: background (red, green, blue, alpha)
  p.color(80, 80, 80, 255) // Second color: paint (red, green, blue, alpha)
  return new Buffer(p.getBase64(), 'base64')
}

module.exports = {
  end: (req, res) => {
    // generate & save captcha
    let captcha = parseInt(Math.random()*900000+100000)
    req.session.captcha = captcha.toString()
    
    // generate & send image
    res.writeHead(200, {'Content-Type': 'image/png'})
    res.end(captchaGenerator(captcha));
  }
}
