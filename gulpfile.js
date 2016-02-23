
const gulp = require('gulp');
const taskListing = require('gulp-task-listing');
const styles = require('./gulp/styles');

const scripts = require('./gulp/scripts');

gulp
  .task('styles', styles)
  .task('scripts', scripts)
  .task('default', taskListing);
