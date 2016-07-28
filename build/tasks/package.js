'use strict';

var gulp = require('gulp');
var gulpConfig = require('./../gulp-config');

gulp.task('package-transpiled-javascript', ['transpile', 'clean-output'], function () {
    return gulp.src(gulpConfig.appTranspiledJavaScript)
        .pipe(gulp.dest(gulpConfig.output));
});