var gulp = require('gulp');
var config = require('../config').release;

/**
 * リリース用イメージのビルド
 */
gulp.task('release', config.depends);
