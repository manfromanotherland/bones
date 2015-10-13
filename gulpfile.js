'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

// Static Server / Watching files
gulp.task('serve', ['styles'], function() {
	browserSync.init({
		server: './'
	});

	gulp.watch('src/scss/**/*.scss', ['styles']);
	gulp.watch('*.html').on('change', browserSync.reload);
});

// Compile sass into CSS
gulp.task('styles', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer('last 2 versions', '> 2%'))
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);