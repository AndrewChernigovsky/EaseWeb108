const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');

module.exports = function (options) {
  return () => {
    return gulp
      .src(`./${options.src}/icon-svg/*.svg`)
      .pipe(svgSprite({
        inlineSvg: true
      }))
      .pipe(rename("sprite.svg"))
      .pipe(gulp.dest(`./${options.dest}/images/sprite`));
  };
};
