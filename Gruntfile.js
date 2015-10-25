/* jshint node:true */
/* global module */
module.exports = function ( grunt ) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		bump: {
			options: {
				files: ['package.json'],
				updateConfigs: ['pkg'],
				commit: true,
				commitMessage: 'Release %VERSION%',
				commitFiles: ['-a'],
				createTag: true,
				tagName: '%VERSION%',
				tagMessage: '',
				push: false
			}
		},

		jshint: {
			main: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: [
					'feature-detects/**/*.js'
				]
			}
		},

		autoprefixer: {
			test: {
				options: {
					browsers: ['last 2 versions', 'Firefox >= 20', 'iOS >= 5', 'Android >= 2', 'Explorer 8']
				},
				expand: true,
				flatten: true,
				src: 'test/assets/style/*.css',
				dest: 'test/assets/style/'
			}
		},

		modernizr: {
			dist: {
				uglify: false,
				'dest': 'test/modernizr.js',
				'options': [
					'setClasses',
					'addTest',
					'html5printshiv',
					'testProp'
				],
				'excludeTests': [
					'contains'
				],
				'customTests': [
					'feature-detects/adblock.js',
					'feature-detects/appearance.js',
					'feature-detects/ie.js',
					'feature-detects/print.js',
					'feature-detects/proxybrowser.js',
					'feature-detects/transitionEndEvent.js',
					'feature-detects/animationStartEvent.js',
					'feature-detects/animationEndEvent.js'
				]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('stylecheck', ['jshint:main']);
	grunt.registerTask('default', ['stylecheck']);
	grunt.registerTask('test', ['modernizr','autoprefixer']);
	grunt.registerTask('releasePatch', ['bump-only:patch', 'default', 'bump-commit']);
	grunt.registerTask('releaseMinor', ['bump-only:minor', 'default', 'bump-commit']);
	grunt.registerTask('releaseMajor', ['bump-only:major', 'default', 'bump-commit']);

};
