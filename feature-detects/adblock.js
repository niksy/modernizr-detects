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

		function onParsed ( cb ) {
			function listener () {
				if ( /^(?:interactive|complete)$/.test(document.readyState) ) {
					document.removeEventListener('readystatechange', listener);
					cb();
				}
			}
			document.addEventListener('readystatechange', listener);
			listener();
		}

		function detectAdBlocker ( cb ) {

			var detectionTimerInterval = 300;
			var adBlockActive = false;
			var el = createElement('div');
			var container = document.body;
			var detectionTimer;

			function done () {
				if ( typeof detectionTimer !== 'undefined' ) {
					clearTimeout(detectionTimer);
				}
				cb(adBlockActive);
				container.removeChild(el);
				el = null;
			}

			el.className = 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads';
			el.setAttribute('style', 'position: absolute; top: -10px; left: -10px; width: 1px; height: 1px;');

			container.appendChild(el);

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

			if ( adBlockActive ) {
				done();
				return;
			}

			detectionTimer = setTimeout(function () {
				done();
			}, detectionTimerInterval);

		}

		onParsed(function () {
			detectAdBlocker(function ( bool ) {
				addTest('adblock', bool);
			});
		});

	});

});
