import gulp from 'gulp';
import mjml from 'gulp-mjml';
import mjmlEngine from 'mjml';
import { deleteAsync } from 'del';
import browserSync from 'browser-sync';

const { series } = gulp;


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
	staticfiles: {
		src: ['staticfiles/index.html', 'staticfiles/screenshot-1.jpg', 'staticfiles/screenshot-2.jpg'],
		dest: 'dist/'
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
	return deleteAsync(['dist']);
}




// TASK: Copy Assets
function copyassets() {
	return (
		gulp
			.src(paths.assets.src)
			.pipe(gulp.dest(paths.assets.dest))
	);
}



// TASK: Copy static files
function copystaticfiles() {
	return (
		gulp
			.src(paths.staticfiles.src)
			.pipe(gulp.dest(paths.staticfiles.dest))
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



// TASK: Watch
function watch() {
	gulp.watch(paths.mjml.src, mjmlTask).on('change', reload);
	gulp.watch(paths.assets.src, copyassets).on('change', reload);
	gulp.watch(paths.staticfiles.src, copystaticfiles).on('change', reload);
}



export default series(clean, copyassets, copystaticfiles, mjmlTask, serve, watch);
