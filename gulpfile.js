var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
    return browserify({
	    entries: ['./src/app.js'],
	    transform: [reactify],
	    debug: true })
	    .transform(reactify)
	    .bundle()
	    .pipe(source('TodoAppBundle.js'))
	    .pipe(buffer())
	    .pipe(sourcemaps.init({loadmaps: true}))
	    .pipe(uglify())
	    .pipe(sourcemaps.write('.', {
	        sourceMappingURLPrefix: 'resource://tasktracker/data/js/'
	    }))
	    .pipe(gulp.dest('data/js'));
});
