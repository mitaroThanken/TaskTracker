var gulp = require('gulp');
var config = require('../config').live;

gulp.task('live', config.depends, function() {
    var server = require('gulp-webserver');
    gulp.src(config.src)
        .pipe(server(config.options));
});
