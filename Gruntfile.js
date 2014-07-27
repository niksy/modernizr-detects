/* jshint node:true */
/* global module */
module.exports = function ( grunt ) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		bump: {
			options: {
				files: ['package.json', 'bower.json'],
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
					'contains',
					'flash'
				],
				'customTests': [
					'feature-detects/adblock.js',
					'feature-detects/appearance.js',
					'feature-detects/ie.js',
					'feature-detects/print.js',
					'feature-detects/proxybrowser.js',
					'feature-detects/xflash.js'
				]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-modernizr');

	grunt.registerTask('stylecheck', ['jshint:main']);
	grunt.registerTask('default', ['stylecheck']);
	grunt.registerTask('test', ['modernizr']);
	grunt.registerTask('releasePatch', ['bump-only:patch', 'default', 'bump-commit']);
	grunt.registerTask('releaseMinor', ['bump-only:minor', 'default', 'bump-commit']);
	grunt.registerTask('releaseMajor', ['bump-only:major', 'default', 'bump-commit']);

};
