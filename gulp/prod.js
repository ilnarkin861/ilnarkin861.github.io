const gulp = require('gulp');
const clean = require('gulp-clean');
const pug = require('gulp-pug');
const webpHTML = require('gulp-webp-html');
const htmlclean = require('gulp-htmlclean');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
var webpCss = require('gulp-webp-css');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
var jsmin = require('gulp-jsmin');
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
gulp.task('clean:prod', function(done){
	if(fs.existsSync('./docs/')){
		return gulp.src('./docs/', {read: false})
            .pipe(clean());
	}

	done();	
});


//Pug
gulp.task('pug:prod', function(){
	return gulp.src('./src/pug/index.pug')
		.pipe(changed('./docs/', {hasChanged: changed.compareContents}))
		.pipe(plumber(errorsNotify('Pug')))
		.pipe(pug())
		.pipe(htmlclean())
		.pipe(gulp.dest('./docs/'));
});


// Sass
gulp.task('sass:prod', function(){
	return gulp.src('./src/scss/style.scss')
		.pipe(changed('./docs/css/'))
		.pipe(plumber(errorsNotify('Scss')))
		.pipe(sass())
		.pipe(autoprefixer({cascade: true}))
		.pipe(csso())
		.pipe(gulp.dest('./docs/css/'))

        //Copy other css
		.pipe(gulp.src(['./src/scss/**/*', '!./src/scss/*.scss']))
		.pipe(gulp.dest('./docs/css/'))
});


//Images
gulp.task('images:prod', function(){
	return gulp.src('./src/img/**/*')
		.pipe(changed('./docs/img'))
		.pipe(plumber(errorsNotify('Images')))
		.pipe(imagemin({verbose: true}))
		.pipe(gulp.dest('./docs/img/'))
});


//Js
gulp.task('js:prod', function(){
	return gulp.src(['./src/js/**/*.js', '!./src/js/counter.js'])
		.pipe(changed('./docs/js'))
		.pipe(plumber(errorsNotify('Js')))
		.pipe(jsmin())
		.pipe(gulp.dest('./docs/js/'));
});


//Favicon
gulp.task('favicon:prod', function(){
	return gulp.src('./src/favicon.ico')
		.pipe(gulp.dest('./docs/'));
});


//Examples
gulp.task('examples:prod', function(){
	return gulp.src('./src/examples/**/*')
		.pipe(gulp.dest('./docs/examples/'));
});


//Server
gulp.task('server:prod', function(){
	browserSync.init({
		server: {
		  baseDir: './docs/'
		}
	  });
});