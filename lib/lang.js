const config = require('../config.js').site

const QUERY_KEY = 'lang'
const COOKIE_KEY = 'lang'

const langs = {
  'zh_CN':  require('./languages/zh_CN.js'),
  'en':     require('./languages/en.js')
  // add new lang in here...
}

let def_lang = null
if (!langs[config.default_lang_tag])
  new Error("config.site.defaultLanguage is not define!")
else
  def_lang = config.site.default_lang_tag

const get_lang = (name=def_lang) => langs[name] || langs[def_lang]
const get_lang_name = (name=def_lang) => langs[name]?name:def_lang

const lang_changer = (req, res, next) => {
  let target = req.query[QUERY_KEY] || req.cookies[COOKIE_KEY]
  target = get_lang_name(target)
  res.locals.$dict = get_lang(target)
  res.locals.$page = {lang: get_lang_name(target)}
  res.cookie(COOKIE_KEY, target)
  next()
}

module.exports = {
  use: (app) => {
    app.locals.$site.lang = {
      langs: langs,
      def_lang: def_lang
    }
    app.use(lang_changer)
  }
}
