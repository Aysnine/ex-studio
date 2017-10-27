const gulp = require('gulp')

const babel  = require('gulp-babel')
const stylus = require('gulp-stylus')
  const nib  = require('nib')
  const jeet = require('jeet')

const watch   = require('gulp-watch')
const plumber = require('gulp-plumber')

const del         = require('del')
const browserSync = require('browser-sync')
const runSequence = require('run-sequence')

const config = require('./gulp.config')
const {srcRoot, distRoot} = config.base

// Tasks for base

gulp.task('stylus', () => {
  const {src, dist} = config.stylus
  return gulp.src(src)
    .pipe(plumber())
    .pipe(stylus({/*'include css': true,*/ use: [nib(), jeet()]}))
    .pipe(gulp.dest(dist))
})

gulp.task('scripts', () => {
  const {src, dist} = config.scripts
  return gulp.src(src)
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest(dist))
})

gulp.task('images', () => {
  const {src, dist} = config.images
  return gulp.src(src)
    .pipe(plumber())
    .pipe(gulp.dest(dist))
})

// Tasks for dev

gulp.task('clean', () => {
  return del([
    config.stylus.dist + '/*',
    config.scripts.dist + '/*',
    config.images.dist + '/*'
  ])
})

gulp.task('build', (cb) => {
  runSequence(
    'clean',
    ['stylus', 'scripts', 'images'],
    cb)
})

gulp.task('bs', ['build'], () => {
  browserSync.init({
    proxy: 'localhost:3000',
    files: distRoot + ', views'
  })
})

gulp.task('watch', ['bs'], () => {

  const {stylus, scripts, images} = config.watch

  gulp.watch(stylus, ['stylus'])
  gulp.watch(scripts, ['scripts'])
  gulp.watch(images, ['images'])
})
