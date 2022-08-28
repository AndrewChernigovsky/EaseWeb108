'use strict';

const gulp = require('gulp');
const ttf2woff = require('gulp-ttf2woff');

module.exports = function (options) {
    return () => {
        return gulp.src([`./${options.src}/fonts/*.ttf`])
            .pipe(ttf2woff())
            .pipe(gulp.dest(`./${options.dest}/fonts`));
    };
};
