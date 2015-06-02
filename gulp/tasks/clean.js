var gulp = require('gulp');

/**
 * 配置先にあるファイル・フォルダを削除。
 *
 * @param {Function} cb コールバック関数
 */
gulp.task('clean', function(cb) {
    var del = require('del');
    var config = require('../config').clean;

    del([config.dist], cb);
});
