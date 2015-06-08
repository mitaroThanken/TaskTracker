var gulp = require('gulp');

/**
 * デバッグ用コンパイルおよび配置（エントリーポイント）
 */
gulp.task('index-js', function() {
    var config = require('../config').js;

    return compile(config.target.index, false);
});

/**
 * デバッグ用コンパイルおよび配置（アプリ）
 */
gulp.task('app-js', function() {
    var config = require('../config').js;

    return compile(config.target.app, false);
}); 

/**
 * デバッグ用コンパイルおよび配置（ログイン）
 */
gulp.task('login-js', function() {
    var config = require('../config').js;

    return compile(config.target.login, false);
}); 

/**
 * デバッグ用コンパイルおよび配置
 */
gulp.task('js', ['index-js', 'app-js', 'login-js']);

/**
 * リリース用コンパイルおよび配置（エントリーポイント）
 */
gulp.task('index-js-release', function() {
    var config = require('../config').js;

    return compile(config.target.index, true);
});

/**
 * リリース用コンパイルおよび配置（アプリ）
 */
gulp.task('app-js-release', function() {
    var config = require('../config').js;

    return compile(config.target.app, true);
}); 

/**
 * リリース用コンパイルおよび配置（ログイン）
 */
gulp.task('login-js-release', function() {
    var config = require('../config').js;

    return compile(config.target.login, true);
}); 

/**
 * リリース用コンパイルおよび配置
 */
gulp.task('js-release', 
	  ['index-js-release', 'app-js-release', 'login-js-release']);

/**
 * リリース用コンパイルおよび配置（エントリーポイント）
 */
gulp.task('index-js-watchify', function() {
    var config = require('../config').js;

    return compile(config.target.index, false, true);
});

/**
 * リリース用コンパイルおよび配置（アプリ）
 */
gulp.task('app-js-watchify', function() {
    var config = require('../config').js;

    return compile(config.target.app, false, true);
}); 

/**
 * リリース用コンパイルおよび配置（ログイン）
 */
gulp.task('login-js-watchify', function() {
    var config = require('../config').js;

    return compile(config.target.login, false, true);
}); 

/**
 * リリース用コンパイルおよび配置
 */
gulp.task('watchify', 
	  ['index-js-watchify', 'app-js-watchify', 'login-js-watchify']);

/**
 * Javascript の依存関係を解決し、単一ファイルにコンパイル
 *
 * @param {Object} target エントリーファイル・バンドルファイル・トランスフォーマーの指定
 * @param {Boolean} isUglify 圧縮を有効にする場合、true
 * @param {Boolean} isWatch 差分監視モードで実行する場合、true
 *
 * @return {Object} gulpストリーム
 */
function compile(target, isUglify, isWatch) {
    var $ = require('gulp-load-plugins')();
    var config = require('../config').js;
    var errorUtil = require('../utils/error');
    var browserify = require('browserify');
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');
    var watchify = require('watchify');

    var bundler = null;

    var option = target.browserify;

    if (isWatch) {
	option.cache = {};
	option.packageCache = {};
	option.fullPaths = true;

	bundler = watchify( browserify(target.src, option));
    } else {
        bundler = browserify(target.src, option);
    }

    function bundle() {
        return bundler
            .bundle()
	    .on('error', errorUtil)
	    .pipe(source(target.bundle))
	    .pipe($.duration('compiled"' + target.bundle + '"'))
	    .pipe(buffer())
	    .pipe($.sourcemaps.init({loadMaps: true}))
	    .pipe($.if(isUglify, $.uglify()))
            .pipe($.sourcemaps.write('.',
                 { sourceMappingURLPrefix: 
                     'resource://tasktracker/data/js/' }))
            .pipe(gulp.dest(config.dest));
    }

    bundler.on('update', bundle);

    return bundle();
}
