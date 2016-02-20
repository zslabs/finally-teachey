module.exports = function(gulp, $, browserSync, reload, merge, paths, files) {
  return function() {
    return gulp.src('./dist/**/*')
    .pipe($.ghPages({
      'remoteUrl': 'git@github.com:zslabs/finally-teachey.git'
    }));
  };
};
