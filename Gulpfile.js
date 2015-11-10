'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var watch = require('gulp-watch');

gulp.task('nodemon', function () {
  nodemon({
    script: 'index.js',
    env: {
      'NODE_ENV': 'development'
    },
    nodeArgs: ['--debug=9999']
  }).on('restart');
});

// rerun the tasks when a file changes

gulp.task('watch', function () {
  gulp.src(['*.js', 'routes/*.js', 'config/*.js', 'app/**/*.js'], {read: true})
    .pipe(watch({emit: 'all'}));
});

gulp.task('default', ['nodemon', 'watch']);