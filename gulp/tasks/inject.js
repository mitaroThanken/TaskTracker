var gulp = require('gulp');
var config = require('../config').inject;

gulp.task('inject', config.depends, function() {
    var inject = require('gulp-inject');

    gulp.src(config.target)
        .pipe(
	    inject(gulp.src(config.source, config.sourceOption),
		   config.injectOption))
	.pipe(gulp.dest(config.dest));
});
