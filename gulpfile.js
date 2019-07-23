var gulp = require('gulp');
var mjml = require('gulp-mjml');
var browserSync  = require('browser-sync').create();


//
// TASK: Reload Browser
//
function reload() {
	browserSync.reload();
}



//
// TASK: Browser-Sync Serve
//
function serve(done) {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	done();
}



//
// Build MJML
//
function buildmjml() {
	return (
		gulp
			.src('index.mjml')
			.pipe(mjml())
			.pipe(gulp.dest('./'))
	);
}
exports.buildmjml = buildmjml;



//
// TASK: Watch
//
function watch() {
	gulp.watch('index.mjml', buildmjml).on('change', reload);
}
exports.watch = watch;


exports.watch = gulp.series(buildmjml, serve, watch);
