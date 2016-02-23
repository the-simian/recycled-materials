const gulp = require('gulp');
const sass = require('gulp-sass');
//const nib = require('nib');
const postcss = require('gulp-postcss');

const stylePostProcessing = require('./style-post-processing');

function Styles() {
  // const stylusConfig = {
  //   use: [
  //     nib()
  //   ]
  // };
  return gulp
    .src('src/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(stylePostProcessing))
    .pipe(gulp.dest('dist'));
}

module.exports = Styles;
