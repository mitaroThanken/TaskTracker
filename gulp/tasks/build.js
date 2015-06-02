var gulp = require('gulp');
var config = require('../config').build;

/**
 * 開発用イメージのビルド
 */
gulp.task('build', config.depends);
