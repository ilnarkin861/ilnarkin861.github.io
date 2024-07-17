const gulp = require('gulp');
const clean = require('gulp-clean');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const changed = require('gulp-changed');
const fs = require('fs');



let browserSync = require('browser-sync').create();

const errorsNotify = (title) => {
	return {
		errorHandler: notify.onError({
			title: title,
			message: 'Error <%= error.message %>',
			sound: true
		})
	}
}


//Clean
gulp.task('clean:dev', function(done){
	if(fs.existsSync('./build/')){
		return gulp.src('./build/', {read: false}).pipe(clean());
	}

	done();	
});


//Pug
gulp.task('pug:dev', function(){
	return gulp.src('./src/pug/index.pug')
		.pipe(changed('./build/', {hasChanged: changed.compareContents}))
		.pipe(plumber(errorsNotify('Pug')))
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('./build/'));
});


// Sass
gulp.task('sass:dev', function(){
	return gulp.src('./src/scss/style.scss')
		.pipe(changed('./build/css/'))
		.pipe(plumber(errorsNotify('Scss')))
		.pipe(sourceMaps.init())
		.pipe(sass())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('./build/css/'))

		//Copy other css
		.pipe(gulp.src(['./src/scss/**/*', '!./src/scss/*.scss']))
		.pipe(gulp.dest('./build/css/'))
});


//Images
gulp.task('images:dev', function(){
	return gulp.src('./src/img/**/*')
		.pipe(changed('./build/img'))
		.pipe(gulp.dest('./build/img/'))
});


//Js
gulp.task('js:dev', function(){
	return gulp.src(['./src/js/**/*.js', '!./src/js/counter.js'])
		.pipe(changed('./build/js'))
		.pipe(gulp.dest('./build/js/'));
});


//Favicon
gulp.task('favicon:dev', function(){
	return gulp.src('./src/favicon.ico')
		.pipe(gulp.dest('./build/'));
});


//Examples
gulp.task('examples:dev', function(){
	return gulp.src('./src/examples/**/*')
		.pipe(gulp.dest('./build/examples/'));
});


//Server
gulp.task('server:dev', function(){
	browserSync.init({
		server: {
		  baseDir: './build/'
		}
	  });
});


//Wacthing
gulp.task('watch:dev', function(){
	gulp.watch('./src/pug/**/*.pug', gulp.parallel('pug:dev')).on('change', browserSync.reload);
	gulp.watch('./src/scss/**/*', gulp.parallel('sass:dev')).on('change', browserSync.reload);
	gulp.watch('./src/img/**/*', gulp.parallel('images:dev')).on('change', browserSync.reload);
	gulp.watch('./src/js/**/*', gulp.parallel('js:dev')).on('change', browserSync.reload);
	gulp.watch('./src/examples/', gulp.parallel('examples:dev')).on('change', browserSync.reload);
});