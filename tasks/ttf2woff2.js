'use strict';

const gulp = require('gulp');
const ttf2woff2 = require('gulp-ttf2woff2');

module.exports = function (options) {
    return () => {
        return gulp.src([`./${options.src}/fonts/**/*.ttf`])
            .pipe(ttf2woff2())
            .pipe(gulp.dest(`./${options.dest}/fonts`));
    };
};
