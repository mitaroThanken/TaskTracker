var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var path = {
  ALL: ['src/*.js', 'src/**/*.js', 
	'src/*.html', 
	'src/css/*.css', 'src/images/*.png' ],
  INDEX_JS: ['src/js/index.js'],
  APP_JS: ['src/js/app.js'],
  OUT: 'js/TodoAppBundle.js',
  MINIFIED_OUT: 'js/TodoAppBundle.min.js',
  STATIC: ['src/*.html', 'src/css/*.css', 'src/images/*.png' ],
  BASE: 'src',
  DEST: 'data'
};

gulp.task('transform', function() {
    return browserify({
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
    return gulp.src( path.STATIC.concat(path.INDEX_JS), {base: path.BASE} )
        .pipe(gulp.dest(path.DEST));
});
