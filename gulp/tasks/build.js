var gulp = require('gulp');
var webpack = require('../util/webpack');

gulp.task('build', function() {
  return webpack({ watch: false });
});
