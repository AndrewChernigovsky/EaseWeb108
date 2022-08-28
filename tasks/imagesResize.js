'use strict'

const gulp = require('gulp');
const rename = require('gulp-rename');
const squoosh = require('gulp-libsquoosh');


// let width = 100;
// let height = 100;

module.exports = function (options) {
  return function imagesxdefault() {
    return gulp
      .src([`./${options.src}/images/**/*.{png,jpg}`])
      .pipe(
        squoosh((src) => ({
          preprocessOptions: {
            resize: {
              width: Math.round(src.width / 2),
              height: Math.round(src.height / 2),
            },
          },
        }))
      )
      .pipe(gulp.dest(`./${options.src}/images/`));
  };
};

