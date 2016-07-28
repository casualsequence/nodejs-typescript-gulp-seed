'use strict';

var gulp = require('gulp');
var gulpTypings = require('gulp-typings');
var sourceMaps = require ('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var gulpConfig = require('./../gulp-config');

gulp.task('install-typings', function() {
    return gulp.src('./typings.json')
        .pipe(gulpTypings());
});

gulp.task('transpile', ['clean'], function () {
    var tsResult = gulp.src(gulpConfig.allTypescript, { base: '.'})
        .pipe(sourceMaps.init()) 
        .pipe(tsc({
            "target": "ES5",
            "module": "commonjs",		
			"emitDecoratorMetadata": true,
			"experimentalDecorators": true,
			"removeComments": false,
			"noImplicitAny": false	
        })).on('error', function () {
            throw new Error('TypeScript transpilation error.');
        });

        return tsResult.js
            .pipe(sourceMaps.write('.'))
            .pipe(gulp.dest(''));
});