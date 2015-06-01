var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var path = {
  HTML: 'src/TodoApp.html',
  ALL: ['src/*.js', 'src/**/*.js', 'src/TodoApp.html'],
  INDEX_JS: ['src/index.js'],
  APP_JS: ['src/app.js'],
  OUT: 'js/TodoAppBundle.js',
  MINIFIED_OUT: 'js/TodoAppBundle.min.js',
  DEST: 'data'
};

gulp.task('transform', function() {
    browserify({
	entries: [ path.APP_JS ],
	transform: [ reactify ],
	debug: true })
	.transform(reactify)
	.bundle()
	.pipe(source( path.OUT ))
	.pipe(buffer())
        .pipe(sourcemaps.init({loadmaps: true}))
	.pipe(sourcemaps.write('.', {
	     sourceMappingURLPrefix: 'resource://tasktracker/data'
	}))
	.pipe(gulp.dest(path.DEST));
});

gulp.task('copy', function() {
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
});
