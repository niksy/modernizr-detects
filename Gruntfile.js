module.exports = function (grunt) {

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
				tagMessage: 'Version %VERSION%',
				push: false
			}
		}

	});

	grunt.loadNpmTasks( 'grunt-bump' );

	grunt.registerTask( 'releasePatch', ['bump-only:patch', 'bump-commit'] );
	grunt.registerTask( 'releaseMinor', ['bump-only:minor', 'bump-commit'] );
	grunt.registerTask( 'releaseMajor', ['bump-only:major', 'bump-commit'] );

};
