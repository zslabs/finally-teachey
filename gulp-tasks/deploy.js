module.exports = function(gulp, $, browserSync, reload, merge, paths, files) {
  return function() {
    return gulp.src('./dist/**/*')
    .pipe($.ghPages());
  };
};
