var gulp = require('gulp');
var util = require('gulp-util');
var config = require('../config').combine;

/**
 * HTML 内の CSS、JavaScript 参照を調べ、適切なファイルにまとめる。
 * (実際には useref タスクが実施。このタスクではゴミの除去を行う。)
 */

gulp.task('combine', config.depends, function() {
    var del = require('del');

    del(config.css, function (err, paths) {
        util.log('Deleted files/folders:\n', paths.join('\n'));
    });
});
