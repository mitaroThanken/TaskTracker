var gulp = require('gulp');
var config = require('../config.js').css;

/**
 * StylusファイルをコンパイルしてCSSを生成
 * および、CSSファイルをコピー
 */
gulp.task('css', config.depends, function() {
    var $ = require('gulp-load-plugins')();
    var mergeStream = require('merge-stream');

    var stylus = gulp.src(config.src.styl)
        .pipe($.plumber())
	.pipe($.sourcemaps.init())
	.pipe($.stylus({compress: true}))
	.pipe($.sourcemaps.write('.'));

    var css = gulp.src(config.src.css)

    return mergeStream(stylus, css)
        .pipe(gulp.dest(config.dest));
});
