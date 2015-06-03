var gulp = require('gulp');
var util = require('gulp-util');

/**
 * 配置先にあるファイル・フォルダを削除。
 *
 * @param {Function} cb コールバック関数
 */
gulp.task('clean', function() {
    var del = require('del');
    var config = require('../config').clean;

    del([config.dist], function (err, paths) {
        util.log('Deleted files/folders:\n', paths.join('\n'));
    });
});
