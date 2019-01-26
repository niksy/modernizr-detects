/*!
{
  "name": "Transition end event",
  "property": "transitionEndEvent",
  "authors": ["Ivan Nikolić"],
  "notes": [{
    "name": "Modernizr Methods documentation",
    "href": "http://modernizr.com/docs/#s25"
   },
   {
    "name": "Prefixes",
    "href": "https://github.com/twbs/bootstrap/issues/2870#issue-3887306"
   }],
  "tags": ["transition"]
}
!*/

/* eslint-disable quote-props, no-param-reassign, dot-notation */

import Modernizr from 'modernizr-esm/src/Modernizr';
import prefixed from 'modernizr-esm/src/prefixed';

var transitionEndEventNames = {
	'WebkitTransition': 'webkitTransitionEnd',
	'msTransition': 'MSTransitionEnd',
	'OTransition': 'oTransitionEnd',
	'MozTransition': 'transitionend',
	'transition': 'transitionend'
};
var eventValue = transitionEndEventNames[prefixed('transition')];

// Falsy value on Android 4.1-4.3 default browser
if ( /Android 4\.[123]/.test(navigator.userAgent) ) {
	eventValue = transitionEndEventNames['WebkitTransition'];
}

if ( typeof eventValue === 'undefined' ) {
	eventValue = 'modernizrNoTransitionEndEvent';
}

Modernizr.prefixedEvent = Modernizr.prefixedEvent || {};
Modernizr.prefixedEvent.transitionend = eventValue;

export default Modernizr.prefixedEvent.transitionend;
