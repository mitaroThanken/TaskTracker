var gulp = require('gulp');
var config = require('../config').default;

/**
 * gulp の既定のタスク
 */
gulp.task('default', config.depends);
