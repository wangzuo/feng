var gulp = require('gulp');
var babel = require('gulp-babel');
var postcss = require('gulp-postcss');
var del = require('del');
var ghPages = require('gulp-gh-pages');
var processors = require('./processors');

gulp.task('lib', function() {
  return gulp.src('lib/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean:lib', function(cb) {
  del(['dist/*.js'], cb);
});

gulp.task('postcss', function() {
  return gulp.src('postcss/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'));
});

gulp.task('clean:postcss', function(cb) {
  del(['css/*.css'], cb);
});

gulp.task('watch', function() {
  gulp.watch('lib/*.js', ['lib']);
  gulp.watch('postcss/*.css', ['postcss']);
});

gulp.task('gh-pages', function() {
  return gulp.src('./builds/**/*')
    .pipe(ghPages());
});

gulp.task('clean', ['clean:postcss', 'clean:lib']);
gulp.task('default', ['postcss', 'lib']);
