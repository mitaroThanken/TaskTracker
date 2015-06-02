var gulp = require('gulp');
var del = require('del');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var mergeStream = require('merge-stream');

var config = require('./config.json');

gulp.task('clean', function(cb) {
    return del([
        config.path.DEST + '/**/*'
    ], cb);
});

gulp.task('transform', function() {
    return browserify({
	entries: [ config.path.APP_JS ],
	transform: [ reactify ],
	debug: true })
	.transform(reactify)
	.bundle()
	.pipe(source( config.path.OUT ))
	.pipe(buffer())
        .pipe(sourcemaps.init({loadmaps: true}))
	.pipe(sourcemaps.write('.', {
	     sourceMappingURLPrefix: 'resource://tasktracker/data'
	}))
	.pipe(gulp.dest(config.path.DEST));
});

gulp.task('copy', function() {
    var static_src = gulp.src( config.path.STATIC, {base: config.path.BASE} );
    var index_src = gulp.src( config.path.INDEX_JS, {base: config.path.BASE} );

    return mergeStream( static_src, index_src )
        .pipe(gulp.dest(config.path.DEST));
});
