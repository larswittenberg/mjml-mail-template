const gulp = require('gulp');
const mjml = require('gulp-mjml');
const mjmlEngine = require('mjml');
const browserSync  = require('browser-sync').create();


// TASK: Reload Browser
function reload() {
	browserSync.reload();
}


// TASK: Browser-Sync Serve
function serve(done) {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});
	done();
}


function handleError (err) {
	console.log(err.toString());
	this.emit('end');
}

// Build MJML
function buildmjml() {
	return (
		gulp
			.src('src/*.mjml')
			.pipe(mjml(mjmlEngine, {validationLevel: 'strict'}))
			.on('error', handleError)
			.pipe(gulp.dest('./dist'))
	);
}
exports.buildmjml = buildmjml;


// TASK: Watch
function watch() {
	gulp.watch('src/*.mjml', buildmjml).on('change', reload);
}
exports.watch = watch;


exports.watch = gulp.series(buildmjml, serve, watch);
