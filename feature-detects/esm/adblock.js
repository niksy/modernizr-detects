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

import Modernizr, { addTest, createAsyncTestListener } from 'modernizr-esm/src/Modernizr';
import createElement from 'modernizr-esm/src/createElement';

Modernizr.addAsyncTest(function () {

	function onLoaded ( cb ) {
		function listener () {
			if ( /^complete$/.test(document.readyState) ) {
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

		function done ( bool ) {
			if ( typeof detectionTimer !== 'undefined' ) {
				clearTimeout(detectionTimer);
			}
			cb(bool);
			container.removeChild(el);
			el = null;
		}

		function getAdBlockActiveState () {
			var bool = false;
			try {
				bool = (
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
				bool = false;
			}
			return bool;
		}

		el.className = 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads';
		el.setAttribute('style', 'position: absolute; top: -10px; left: -10px; width: 1px; height: 1px;');

		container.appendChild(el);

		adBlockActive = getAdBlockActiveState();

		if ( adBlockActive ) {
			done(adBlockActive);
			return;
		}

		detectionTimer = setTimeout(function () {
			adBlockActive = getAdBlockActiveState();
			done(adBlockActive);
		}, detectionTimerInterval);

	}

	onLoaded(function () {
		detectAdBlocker(function ( bool ) {
			addTest('adblock', bool);
		});
	});

});

export default createAsyncTestListener('adblock');
