var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer');

var sassFiles = './dev/css/**/*.scss',
    jqFiles = './dev/jquery/**/*.js';

gulp.task('hello', function(){
	console.log('Hi Terra, this gulp task is working.')
});

gulp.task('sass',function(){
 return gulp.src(sassFiles)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(rename({extname:'.min.css'}))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(sassFiles, ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch(jqFiles, ['jq', browserSync.reload]);

});

gulp.task('jq', () => {
    return gulp.src(jqFiles)
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./build/jquery'));
});