'use strict';

module.exports = function ( config ) {

	config.set({
		basePath: '',
		frameworks: ['mocha'],
		files: [
			'test-dist/modernizr.js',
			'test/automated/**/*.html',
			'test/automated/**/.webpack.js'
		],
		exclude: [],
		preprocessors: {
			'test/automated/**/*.html': ['html2js'],
			'test/automated/**/.webpack.js': ['webpack', 'sourcemap']
		},
		reporters: ['mocha'],
		port: 9001,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browserStack: {
			startTunnel: true,
			project: 'modernizr-detects',
			name: 'Automated (Karma)',
			build: 'Automated (Karma)'
		},
		client: {
			captureConsole: true,
			mocha: {
				ui: 'bdd'
			}
		},
		browserConsoleLogOptions: {
			level: 'log',
			format: '%b %T: %m',
			terminal: true
		},
		webpack: {
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
		},
		customLaunchers: {
			'BS-Chrome': {
				base: 'BrowserStack',
				browser: 'Chrome',
				os: 'Windows',
				'os_version': '7',
				project: 'modernizr-detects',
				build: 'Automated (Karma)',
				name: 'Chrome'
			},
			'BS-Firefox': {
				base: 'BrowserStack',
				browser: 'Firefox',
				os: 'Windows',
				'os_version': '7',
				project: 'modernizr-detects',
				build: 'Automated (Karma)',
				name: 'Firefox'
			},
			'BS-IE9': {
				base: 'BrowserStack',
				browser: 'IE',
				'browser_version': '9',
				os: 'Windows',
				'os_version': '7',
				project: 'modernizr-detects',
				build: 'Automated (Karma)',
				name: 'IE9'
			},
		},
		browsers: ['BS-Chrome', 'BS-Firefox', 'BS-IE9'],
		singleRun: true,
		concurrency: Infinity
	});

};
