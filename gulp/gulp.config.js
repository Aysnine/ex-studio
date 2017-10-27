
const srcRoot = 'assets',
      distRoot = 'public'

module.exports = {
  base: {
    srcRoot: 'assets',
    distRoot: 'public'
  },
  stylus: {
    src: [srcRoot + '/stylus/*.styl', '!' + srcRoot + '/stylus/_*.styl'],
    dist: distRoot + '/stylesheets'
  },
  scripts: {
    src: srcRoot + '/scripts/*.js',
    dist: distRoot + '/javascripts',
    options: {
      presets: ['es2015']
    }
  },
  images: {
    src: srcRoot + '/images/**/*.{jpg,png,svg,gif}',
    dist: distRoot + '/images'
  },
  watch: {
    stylus:  srcRoot + '/stylus/**/*.styl',
    scripts: srcRoot + '/scripts/**/*.js',
    images:  srcRoot + '/images/**/*.{jpg,png,svg,gif}'
  }
}
