var gulp = require('gulp');
var webpack = require('../util/webpack');

gulp.task('watch', ['build'], function() {
  return webpack({ watch: true });
});
