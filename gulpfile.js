const path = require('path');
const customizr = require('customizr');

const task = () => {
	return new Promise(( resolve ) => {
		customizr({
			dest: path.resolve(__dirname, './test-dist/modernizr.js'),
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
			].map(( feature ) => path.resolve(__dirname, `./feature-detects/${feature}.js`))
		}, () => {
			resolve();
		});
	});
};

module.exports.default = task;
