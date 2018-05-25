/* globals Modernizr:false */

var assert = require('assert');
var bowser = require('bowser');
require('classlist.js');

describe('Basic', function () {

	var html = document.getElementsByTagName('html')[0];

	before(function () {
		var fixture = window.__html__['test/automatic/fixtures/index.html'];
		document.body.insertAdjacentHTML('beforeend', '<div id="fixture">' + fixture + '</div>');
	});

	after(function () {
		document.body.removeChild(document.getElementById('fixture'));
	});

	it('adblock', function ( done ) {
		Modernizr.on('adblock', function ( result ) {
			assert.equal(result, false);
			assert.equal(html.classList.contains('no-adblock'), true);
			done();
		});
	});

	it('ie', function () {
		if ( bowser.msie && bowser.version === 9 ) {
			assert.equal(Modernizr.ie, true);
			assert.equal(Modernizr.ie.version, 8);
			assert.equal(html.classList.contains('ie'), true);
		} else {
			assert.equal(Modernizr.ie, false);
			assert.equal(html.classList.contains('no-ie'), true);
		}
	});

	it('oninputproper', function () {
		if ( bowser.msie && bowser.version <= 9 ) {
			assert.equal(Modernizr.oninputproper, false);
			assert.equal(html.classList.contains('no-oninputproper'), true);
		} else {
			assert.equal(Modernizr.oninputproper, true);
			assert.equal(html.classList.contains('oninputproper'), true);
		}
	});

	it('print', function () {
		if ( bowser.ios ) {
			assert.equal(Modernizr.print, false);
			assert.equal(html.classList.contains('no-print'), true);
		} else {
			assert.equal(Modernizr.print, true);
			assert.equal(html.classList.contains('print'), true);
		}
	});

	it('proxybrowser', function () {
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

	it('transitionEndEvent', function () {

		var e = Modernizr.prefixedEvent.transitionend;

		if ( bowser.chrome && bowser.version <= 25 ) {
			assert.equal(e, 'webkitTransitionEnd');
		} else if ( bowser.msie && bowser.version <= 9 ) {
			assert.equal(e, 'modernizrNoTransitionEndEvent');
		} else {
			assert.equal(e, 'transitionend');
		}
	});

	it('animationStartEvent', function () {

		var e = Modernizr.prefixedEvent.animationstart;

		if ( bowser.chrome && bowser.version <= 40 ) {
			assert.equal(e, 'webkitAnimationStart');
		} else if ( bowser.msie && bowser.version <= 9 ) {
			assert.equal(e, 'modernizrNoAnimationStartEvent');
		} else {
			assert.equal(e, 'animationstart');
		}
	});

	it('animationEndEvent', function () {

		var e = Modernizr.prefixedEvent.animationend;

		if ( bowser.chrome && bowser.version <= 40 ) {
			assert.equal(e, 'webkitAnimationEnd');
		} else if ( bowser.msie && bowser.version <= 9 ) {
			assert.equal(e, 'modernizrNoAnimationEndEvent');
		} else {
			assert.equal(e, 'animationend');
		}
	});

});
