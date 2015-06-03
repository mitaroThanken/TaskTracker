var gulp = require('gulp');
var config = require('../config').copy;

/**
 * 必要な静的ファイルをコピー
 */
gulp.task('copy', config.depends, function() {
    return gulp.src( config.src, {base: config.base})
        .pipe(gulp.dest( config.dest ));
});
