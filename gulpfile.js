var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    wc          = require('gulp-word-count'),
    markdown    = require('gulp-markdown'),
    pandoc      = require('gulp-pandoc'),
    compileBook = require('./lib/compileBook')
  ;

gulp.task('addAll', function() {
	return gulp.src('Book/**/*')
    .pipe(concat('all.md'))
    .pipe(gulp.dest('./'))
	;
});

gulp.task('count', function() {
  return gulp.src('Book/**/*')
   .pipe(wc('app.js'))
   .pipe(gulp.dest('./logs/'))
  ;
});

gulp.task('create:markdown', function() {
  return gulp.src([
      'Book/**/**/*.md',
      '!Book/*.md'
    ])
    .pipe(compileBook({
      file: 'all.md'
    }))
    .pipe(concat('allMD.md'))
    .pipe(gulp.dest('./'))
  ;
});

gulp.task('create:html', function() {
  return gulp.src([
      'Book/**/**/*.md',
      '!Book/*.md'
    ])
    .pipe(compileBook({
      file: 'all.md'
    }))
    .pipe(concat('allMD.md'))
    .pipe(markdown())
    .pipe(gulp.dest('./'))
  ;
});

gulp.task('create:epub', ['create:markdown'], function() {
  return gulp.src([
      'allMD.md'
    ])
    .pipe(pandoc({
      from: 'markdown',
      to: 'epub',
      ext: '.md',
      args: ['--smart']
    }))
    .pipe(gulp.dest('./'))
  ;
});
