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

gulp.task('react', function() {
  return gulp.src('react/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('clean:react', function(cb) {
  del(['lib/*.js'], cb);
});

gulp.task('postcss', function() {
  return gulp.src('postcss/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('lib'));
});

gulp.task('clean:postcss', function(cb) {
  del(['lib/*.css'], cb);
});

gulp.task('clean:dist', function(cb) {
  del(['dist/*'], cb);
});

gulp.task('dist:css', ['postcss'], function() {
  return gulp.src('lib/*.css')
    .pipe(concat('feng.css'))
    .pipe(minifyCss({
      advanced: false,
      keepSpecialComments: 0
    }))
    .pipe(rename('feng.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('webpack', ['react'], function(cb) {
  webpack({
    entry: './index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'feng.min.js',
      library: 'Feng'
    },
    externals: {
      'react': 'React'
    }
  }, function(err, stats) {
    cb();
  });
});

gulp.task('dist:js', ['webpack'], function(cb) {
  return gulp.src('dist/feng.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('site:app', function(cb) {
  webpack({
    entry: './site/app.js',
    output: {
      path: __dirname + '/feng-ui',
      filename: 'app.js',
      library: 'App'
    },
    module: {
      loaders: [
        {test: /\.json$/, loader: 'json-loader'},
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
      ]
    },
    externals: {
      'react': 'React',
      'babel-core/browser': 'babel'
    }
  }, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);

    gutil.log("[webpack]", stats.toString({
      // output options
    }));

    cb();
  });
});

gulp.task('site:css', ['dist:css'], function() {
  return gulp.src('dist/feng.min.css')
    .pipe(gulp.dest('feng-ui'));
});

gulp.task('site:styles', function() {
  return gulp.src('site/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('feng-ui'));
});

gulp.task('site:vendors', function() {
  return gulp.src('vendors/*')
    .pipe(gulp.dest('feng-ui/vendors'));
});

gulp.task('site', ['site:app', 'site:vendors', 'site:css', 'site:styles']);

gulp.task('clean:site', function(cb) {
  del(['feng-ui/**/*'], cb);
});

gulp.task('gh-pages', ['site'], function() {
  return gulp.src('./feng-ui/**/*')
    .pipe(ghPages());
});

gulp.task('dist', ['dist:css', 'dist:js']);
gulp.task('clean', ['clean:postcss', 'clean:react', 'clean:site', 'clean:dist']);
gulp.task('default', ['clean', 'dist', 'site']);
