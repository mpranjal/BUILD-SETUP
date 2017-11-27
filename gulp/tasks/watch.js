var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync =  require('browser-sync').create();
var config = require('./gulp.config')();

gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch(config.watchHTML, function() {
		browserSync.reload();
	});

	watch(config.watchCSS, function() {
		gulp.start('cssInject');
	});

	watch(config.watchJS, function() {
		gulp.start('scriptsRefresh');
	});

});

gulp.task('cssInject', ['styles'],function(){
	return gulp.src(config.compileCss)
	.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});