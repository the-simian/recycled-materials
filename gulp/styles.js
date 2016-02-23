const gulp = require('gulp');
const stylus = require('gulp-stylus');
const nib = require('nib');
const postcss = require('gulp-postcss');

const stylePostProcessing = require('./style-post-processing');

function Styles() {
  const stylusConfig = {
    use: [
      nib()
    ]
  };
  return gulp
    .src('src/index.styl')
    .pipe(stylus(stylusConfig))
    .pipe(postcss(stylePostProcessing))
    .pipe(gulp.dest('dist'));
}

module.exports = Styles;
