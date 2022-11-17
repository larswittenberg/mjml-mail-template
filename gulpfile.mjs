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
}



export default series(clean, copyassets, mjmlTask, serve, watch);
