var gulp    = require('gulp'),
    concat  = require('gulp-concat') // for whatever
  ;

gulp.task('count', function() {
	return gulp.src('Book/**/*')
		.pipe(concat('all.md'))
		.pipe(gulp.dest('./'))
	;
});
