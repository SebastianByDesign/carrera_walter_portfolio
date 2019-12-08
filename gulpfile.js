const gulp = require('gulp');
const sass = require('gulp-sass');
const post = require('gulp-postcss');
const nano = require('cssnano');
const prefixer = require('autoprefixer');
const imagemin = require('gulp-imagemin');

//define some common tasks for Gulp to run

//compile and minify SASS files:
function compile(done) {
    gulp.src("./sass/**/*.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(post([prefixer('last 2 versions'), nano()]))
        .pipe(gulp.dest("./css"))
        done()
}

//minify every image
function squashImages(done) {
    gulp.src('./images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
        done()
}

exports.compile = compile;