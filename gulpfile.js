var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// bundle

gulp.task('build-css:project-one', function () {
  return gulp.src('./projects/project-one/style/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./projects/project-one/style/css'));
});

gulp.task('watch', function(){
    gulp.watch('./projects/project-one/style/**/*.scss', ['build-css:project-one']);
});
