var gulp = require('gulp');
var config = require('../config').watch;

/**
 * 変更を検知し、必要に応じてビルド
 */
gulp.task('watch', config.depends, function() {
    gulp.watch(config.css.src, config.css.task);
});
