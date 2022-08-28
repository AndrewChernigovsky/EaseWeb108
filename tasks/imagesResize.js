'use strict'

const gulp = require('gulp');
const rename = require('gulp-rename');
const responsive = require('gulp-responsive');


let width = 100;
let height = 100;

module.exports = function (options) {
  return function imagesxdefault() {
    return gulp
      .src(`./${options.src}/images/**/*.{png,jpg}`)
      .pipe(
        responsive({
          '1*.jpg': {
            width: 700,
            quality: 50,
            rename: '1x1.jpg'
          },
          'cover.png': {
            width: '50%',
            // convert to jpeg format
            format: 'jpeg',
            rename: 'cover.jpg'
          },
          // produce multiple images from one source
          'logo.png': [
            {
              width: 200
            },
            {
              width: 200 * 2,
              rename: 'logo@2x.png'
            }
          ]
        })
      )

      .pipe(gulp.dest(`./${options.src}/images/`));
  };
};

