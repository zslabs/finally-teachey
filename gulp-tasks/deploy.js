module.exports = function(gulp, $, config) {
  return function() {
    return gulp.src('./dist/**/*')
    .pipe($.ghPages());
  };
};
