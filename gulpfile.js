var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// bundle

var projectsPaths = [
    { projectName: 'project-one', srcPath: './projects/project-one/style/sass/**/*.scss', destPath: './projects/project-one/style/css' },
    { projectName: 'profile-card', srcPath: './projects/profile-card/style/sass/**/*.scss', destPath: './projects/profile-card/style/css' }
]

gulp.task('build-css', function () {

    for (var i = 0; i < projectsPaths.length; i++) {
        var element = projectsPaths[i];

        gulp.src(element.srcPath)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(element.destPath));
    }
  
});

gulp.task('watch', function(){

    for (var i = 0; i < projectsPaths.length; i++) {
        var element = projectsPaths[i];
        console.log('watch to:', element.projectName);
        gulp.watch(element.srcPath, ['build-css']);
    }

});