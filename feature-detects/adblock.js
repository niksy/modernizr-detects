/*!
{
  "name": "Ad block",
  "property": "adblock",
  "tags": ["adblock"],
  "authors": ["Ivan Nikolić"],
  "async": true
}
!*/
/* jshint expr: true */

define(['Modernizr', 'createElement', 'addTest'], function ( Modernizr, createElement, addTest ) {

	Modernizr.addAsyncTest(function () {

		var adBlockActive = false;
		var detectionTimerCount = 0;
		var numberOfChecks = 3;
		var container = document.body;
		var el, detectionTimer, bodyReadyTimer;

		function isBodyReady () {
			return document.body !== null;
		}

		function detectAdBlocker () {

			try {
				adBlockActive = (
					container.getAttribute('abp') !== null ||
					el.style.display === 'none' ||
					el.style.visibility === 'hidden' ||
					el.offsetParent === null ||
					el.offsetHeight === 0 ||
					el.offsetLeft === 0 ||
					el.offsetTop === 0 ||
					el.offsetWidth === 0 ||
					el.clientHeight === 0 ||
					el.clientWidth === 0
				);
			} catch ( err ) {
				adBlockActive = false;
			}

		}

		function insertDummyElement () {
			container.appendChild(el);
		}

		function removeDummyElement () {
			container.removeChild(el);
			el = null;
		}

		function bodyReadyActions () {

			insertDummyElement();

			detectAdBlocker();

			if ( adBlockActive ) {
				addTest('adblock', adBlockActive);
				removeDummyElement();
				return;
			}

			detectionTimer = setInterval(function () {
				if (
					detectionTimerCount >= numberOfChecks ||
					adBlockActive
				) {
					clearInterval(detectionTimer);
					addTest('adblock', adBlockActive);
					removeDummyElement();
					return;
				}
				detectionTimerCount = detectionTimerCount + 1;
				detectAdBlocker();
			}, 100);

		}

		el = createElement('div');
		el.className = 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads';
		el.setAttribute('style', 'position: absolute; top: -10px; left: -10px; width: 1px; height: 1px;');

		if ( isBodyReady() ) {
			bodyReadyActions();
			return;
		}

		bodyReadyTimer = setInterval(function () {
			if ( isBodyReady() ) {
				clearInterval(bodyReadyTimer);
				container = document.body;
				bodyReadyActions();
			}
		}, 16);

	});

});
