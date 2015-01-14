var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    wc      = require('gulp-word-count')
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
