// Load plugins
var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var merge       = require('merge-stream');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var paths       = require('./gulp-tasks/paths.json');
var files       = require('./gulp-tasks/files.json');

var getTask = function(task) {
  return require('./gulp-tasks/' + task)(gulp, $, browserSync, reload, merge, paths, files);
};

// BrowserSync
gulp.task('browser-sync', getTask('browser-sync'));
// Styles
gulp.task('styles', getTask('styles'));
// Scripts
gulp.task('scripts', getTask('scripts'));
// Media
gulp.task('media', getTask('media'));
// SVG
gulp.task('svg', getTask('svg'));
// SVG Sprite
gulp.task('svg-sprite', getTask('svg-sprite'));

// Bundled Tasks
gulp.task('default', [
  'styles',
  'scripts',
  'media',
  'svg',
  'svg-sprite'
]);

// Watch
gulp.task('watch', ['browser-sync'], function() {
  // HTML
  gulp.watch('dist/*.html', reload);
  // Styles
  gulp.watch(paths.styles.src, ['styles']);
  // Media
  gulp.watch(paths.media.src, ['media', reload]);
  // Scripts
  gulp.watch(paths.scripts.src, ['scripts', reload]);
  // SVG
  gulp.watch(paths.svg.src, ['svg', 'svg-sprite', reload]);
});
