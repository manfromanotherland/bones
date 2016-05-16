// *************************************
//  Gulpfile
// *************************************

'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');

// -------------------------------------
//  Options
// -------------------------------------

var paths = {

	html: {
		src  : '*.html'
	},

	styles: {
		src	 : 'src/scss/**/*.scss',
		dest : 'dist/css'
	}
};

// -------------------------------------
//  Task: Serve
// -------------------------------------

gulp.task('serve', ['styles'], function() {
	browserSync.init({
		server: './'
	});

	gulp.watch(paths.styles.src, ['styles']);
	gulp.watch(paths.html.src).on('change', browserSync.reload);
});

// -------------------------------------
//  Task: Sass
// -------------------------------------

gulp.task('styles', function() {
	return gulp.src(paths.styles.src)
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer('last 3 versions'))
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(browserSync.stream());
});

// -------------------------------------
//  Task: Default
// -------------------------------------

gulp.task('default', ['serve']);
