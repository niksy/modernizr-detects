/* globals Modernizr:false */

const assert = require('assert');
const bowser = require('bowser');

describe('Basic', function () {

	const html = document.getElementsByTagName('html')[0];

	before(function () {
		window.fixture.load('/test/automated/fixtures/index.html');
	});

	after(function () {
		window.fixture.cleanup();
	});

	it('should test feature "adblock"', function ( done ) {
		Modernizr.on('adblock', ( result ) => {
			assert.equal(result, false);
			assert.equal(html.classList.contains('no-adblock'), true);
			done();
		});
	});

	it('should test feature "ie"', function () {
		if ( bowser.msie && bowser.version === 9 ) {
			assert.equal(Modernizr.ie, true);
			assert.equal(Modernizr.ie.version, 8);
			assert.equal(html.classList.contains('ie'), true);
		} else {
			assert.equal(Modernizr.ie, false);
			assert.equal(html.classList.contains('no-ie'), true);
		}
	});

	it('should test feature "oninputproper"', function () {
		if ( bowser.msie && bowser.version <= 9 ) {
			assert.equal(Modernizr.oninputproper, false);
			assert.equal(html.classList.contains('no-oninputproper'), true);
		} else {
			assert.equal(Modernizr.oninputproper, true);
			assert.equal(html.classList.contains('oninputproper'), true);
		}
	});

	it('should test feature "print"', function () {
		if ( bowser.ios ) {
			assert.equal(Modernizr.print, false);
			assert.equal(html.classList.contains('no-print'), true);
		} else {
			assert.equal(Modernizr.print, true);
			assert.equal(html.classList.contains('print'), true);
		}
	});

	it('should test feature "proxybrowser"', function () {
		if ( /Opera Mini/i.test(navigator.userAgent) ) {
			assert.equal(Modernizr.proxybrowser, true);
			assert.equal(html.classList.contains('proxybrowser'), true);
		} else {
			assert.equal(Modernizr.proxybrowser, false);
			assert.equal(html.classList.contains('no-proxybrowser'), true);
		}
	});

});

describe('CSS events', function () {

	it('should test event "transitionEndEvent"', function () {

		const e = Modernizr.prefixedEvent.transitionend;

		if ( bowser.chrome && bowser.version <= 25 ) {
			assert.equal(e, 'webkitTransitionEnd');
		} else if ( bowser.msie && bowser.version <= 9 ) {
			assert.equal(e, 'modernizrNoTransitionEndEvent');
		} else {
			assert.equal(e, 'transitionend');
		}
	});

	it('should test event "animationStartEvent"', function () {

		const e = Modernizr.prefixedEvent.animationstart;

		if ( bowser.chrome && bowser.version <= 40 ) {
			assert.equal(e, 'webkitAnimationStart');
		} else if ( bowser.msie && bowser.version <= 9 ) {
			assert.equal(e, 'modernizrNoAnimationStartEvent');
		} else {
			assert.equal(e, 'animationstart');
		}
	});

	it('should test event "animationEndEvent"', function () {

		const e = Modernizr.prefixedEvent.animationend;

		if ( bowser.chrome && bowser.version <= 40 ) {
			assert.equal(e, 'webkitAnimationEnd');
		} else if ( bowser.msie && bowser.version <= 9 ) {
			assert.equal(e, 'modernizrNoAnimationEndEvent');
		} else {
			assert.equal(e, 'animationend');
		}
	});

});
