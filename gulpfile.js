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

gulp.task('clean:builds', function(cb) {
  del(['builds/**/*'], cb);
});

gulp.task('watch', function() {
  gulp.watch('react/*.js', ['react']);
  gulp.watch('postcss/*.css', ['postcss']);
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

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(true))
});

gulp.task('build', function(cb) {
  webpack({
    entry: './site/app.js',
    output: {
      path: __dirname + '/builds',
      filename: 'app.js',
      library: 'App'
    },
    plugins: [definePlugin],
    module: {
      loaders: [
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

gulp.task('dist:js', ['webpack'], function(cb) {
  return gulp.src('dist/feng.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('gh-pages', ['dist'], function() {
  return gulp.src('./builds/**/*')
    .pipe(ghPages());
});

gulp.task('dist', ['dist:css', 'dist:js']);
gulp.task('clean', ['clean:postcss', 'clean:react', 'clean:builds', 'clean:dist']);
gulp.task('default', ['dist']);
