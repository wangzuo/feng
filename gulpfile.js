var gulp = require('gulp');
var gutil = require("gulp-util");
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var postcss = require('gulp-postcss');
var del = require('del');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var ghPages = require('gulp-gh-pages');
var webpack = require('webpack');
var processors = require('./processors');

gulp.task('css', function() {
  return gulp.src('css/*.css')
    .pipe(postcss(processors))
    .pipe(concat('feng.css'))
    .pipe(minifyCss({
      advanced: false,
      keepSpecialComments: 0
    }))
    .pipe(rename('feng.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['css']);
