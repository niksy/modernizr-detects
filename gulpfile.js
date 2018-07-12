'use strict';

const path = require('path');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const debug = require('gulp-debug');
const nunjucks = require('gulp-nunjucks-render');
const webpack = require('webpack');
const del = require('del');
const ws = require('local-web-server');
const opn = require('opn');
const minimist = require('minimist');
const globby = require('globby');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const customizr = require('customizr');

const args = minimist(process.argv.slice(2), {
	'default': {
		watch: false,
		port: 9000
	}
});
const watch = args.watch;
const port = args.port;

function handleError ( msg ) {
	gutil.log(gutil.colors.red(msg.message));
	this.emit('end');
}

gulp.task('test:modernizr-build', ['test:cleanup'], () => {
	function bundle () {
		return new Promise(( resolve ) => {
			customizr({
				dest: './test-dist/modernizr.js',
				crawl: false,
				uglify: false,
				options: [
					'setClasses',
					'addTest',
					'html5printshiv',
					'testProp'
				],
				excludeTests: [
					'contains'
				],
				customTests: [
					'adblock',
					'ie',
					'oninputproper',
					'print',
					'proxybrowser',
					'transitionEndEvent',
					'animationStartEvent',
					'animationEndEvent'
				].map(( feature ) => require.resolve(`./feature-detects/${feature}`))
			}, () => {
				resolve();
			});
		});
	}
	if ( args.watch ) {
		gulp.watch(['./feature-detects/**/*.js'], bundle);
	}
	return bundle();
});

gulp.task('test:cleanup', () => {
	return del([
		'./test-dist'
	]);
});

gulp.task('test:markup', ['test:cleanup'], () => {
	function bundle () {
		return gulp.src('./test/manual/**/*.html')
			.pipe(plumber(handleError))
			.pipe(nunjucks())
			.pipe(plumber.stop())
			.pipe(gulp.dest('./test-dist'))
			.pipe(debug({ title: 'Markup:' }));
	}
	if ( watch ) {
		gulp.watch(['./test/manual/**/*.html'], bundle);
	}
	return bundle();
});

gulp.task('test:style', ['test:cleanup'], () => {
	function bundle () {
		return gulp.src('./test/manual/**/*.css')
			.pipe(plumber(handleError))
			.pipe(sourcemaps.init({
				loadMaps: true
			}))
			.pipe(postcss([
				atImport()
			]))
			// Tasks
			.pipe(sourcemaps.write())
			.pipe(plumber.stop())
			.pipe(gulp.dest('./test-dist'))
			.pipe(debug({ title: 'Style:' }));
	}
	if ( watch ) {
		gulp.watch(['./test/manual/**/*.css'], bundle);
	}
	return bundle();
});

gulp.task('test:script', ['test:cleanup'], () => {

	return globby(['./test/manual/**/*.js'])
		.then(( files ) => {
			return files
				.map(( file ) => {
					const extname = path.extname(file);
					const key = path.basename(file, extname);
					const obj = {};
					obj[`${file.replace('./test/manual/', '').replace(path.basename(file), '')}${key}`] = file;
					return obj;
				})
				.reduce(( prev, next ) => {
					return Object.assign(prev, next);
				}, {});
		})
		.then(( entries ) => {

			const compiler = webpack({
				entry: entries,
				output: {
					filename: '[name].js',
					path: path.resolve(__dirname, './test-dist')
				},
				mode: 'none',
				devtool: 'cheap-module-inline-source-map',
				module: {
					rules: [
						{
							test: /\.js$/,
							exclude: /node_modules/,
							use: [{
								loader: 'babel-loader'
							}]
						}
					]
				}
			});

			return new Promise(( resolve, reject ) => {

				function cb ( err, stats ) {
					if ( err ) {
						return reject(err);
					}
					gutil.log(stats.toString({
						colors: true
					}));
					return resolve();
				}

				if ( watch ) {
					compiler.watch({}, cb);
				} else {
					compiler.run(cb);
				}

			});

		});

});

gulp.task('test:assets', ['test:cleanup'], () => {
	function bundle () {
		return gulp.src('./test/manual/assets/**/*')
			.pipe(gulp.dest('./test-dist/assets'))
			.pipe(debug({ title: 'Assets:' }));
	}
	if ( watch ) {
		gulp.watch(['./test/manual/assets/**/*'], bundle);
	}
	return bundle();
});

gulp.task('test:prepare', ['test:cleanup', 'test:modernizr-build', 'test:markup', 'test:style', 'test:script', 'test:assets']);

gulp.task('test:local:manual', ['test:prepare'], () => {
	if ( watch ) {
		ws({
			'static': {
				root: './test-dist'
			},
			serveIndex: {
				path: './test-dist'
			}
		}).listen(port);
		opn(`http://localhost:${port}`);
	}
});
