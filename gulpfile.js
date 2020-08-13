const gulp = require('gulp');
const mjml = require('gulp-mjml');
const mjmlEngine = require('mjml');
const del = require('del');
const browserSync  = require('browser-sync').create();


// Path Variables
const paths = {
	mjml: {
		src: 'src/**/*.mjml',
		dest: 'dist/'
	},
	assets: {
		src: 'src/assets/**/*.*',
		dest: 'dist/assets/'
	},
};


// BrowserSync: Serve
function serve(done) {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});
	done();
}


// BrowserSync: Reload Browser
function reload() {
	browserSync.reload();
}


// TASK: Clean Assets
function clean() {
	return del(['dist']);
}


// TASK: Copy Assets
function copyassets() {
	return (
		gulp
			.src(paths.assets.src)
			.pipe(gulp.dest(paths.assets.dest))
	);
}


// MJML Validation Error
function handleError (err) {
	console.log(err.toString());
	this.emit('end');
}


// TASK: Build MJML
function mjmlTask() {
	return (
		gulp
			.src(paths.mjml.src)
			.pipe(mjml(mjmlEngine, {validationLevel: 'strict'}))
			.on('error', handleError)
			.pipe(gulp.dest(paths.mjml.dest))
	);
}
exports.mjmlTask = mjmlTask;


// TASK: Watch
function watch() {
	gulp.watch('src/**/*.mjml', mjmlTask).on('change', reload);
	gulp.watch(paths.assets.src, copyassets).on('change', reload);
}
exports.watch = watch;


exports.watch = gulp.series(clean, mjmlTask, copyassets, serve, watch);
