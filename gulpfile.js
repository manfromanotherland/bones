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

var options = {

	html: {
		files       : '*.html'
	},

	sass: {
		files	    : 'src/scss/**/*.scss',
		destination : 'dist/css'
	}
};

// -------------------------------------
//  Task: Serve
// -------------------------------------

gulp.task('serve', ['styles'], function() {
	browserSync.init({
		server: './'
	});

	gulp.watch(options.sass.files, ['styles']);
	gulp.watch(options.html.files).on('change', browserSync.reload);
});

// -------------------------------------
//  Task: Sass
// -------------------------------------

gulp.task('styles', function() {
	return gulp.src(options.sass.files)
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer('last 3 versions'))
		.pipe(gulp.dest(options.sass.destination))
		.pipe(browserSync.stream());
});

// -------------------------------------
//  Task: Default
// -------------------------------------

gulp.task('default', ['serve']);
