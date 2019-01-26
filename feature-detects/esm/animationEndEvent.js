/*!
{
  "name": "Animation end event",
  "property": "animationEndEvent",
  "authors": ["Ivan Nikolić"],
  "notes": [{
    "name": "Modernizr Methods documentation",
    "href": "http://modernizr.com/docs/#s25"
   },
   {
    "name": "Animation prefixes #1",
    "href": "https://gist.github.com/adamjmcintyre/3098766"
   },
   {
    "name": "Animation prefixes #2",
    "href": "https://gist.github.com/Calvein/2025652"
   },
   {
    "name": "Animation prefixes #3",
    "href": "http://stackoverflow.com/q/19321411/178058"
   },
   {
    "name": "Prefixes",
    "href": "https://github.com/Modernizr/Modernizr/blob/master/src/omPrefixes.js"
   }],
  "tags": ["animation"]
}
!*/

/* eslint-disable quote-props, no-param-reassign */

import Modernizr from 'modernizr-esm/src/Modernizr';
import prefixed from 'modernizr-esm/src/prefixed';

var animationEndEventNames = {
	'WebkitAnimation': 'webkitAnimationEnd',
	'msAnimation': 'MSAnimationEnd',
	'OAnimation': 'oAnimationEnd',
	'MozAnimation': 'animationend',
	'animation': 'animationend'
};
var eventValue = animationEndEventNames[prefixed('animation')];

if ( typeof eventValue === 'undefined' ) {
	eventValue = 'modernizrNoAnimationEndEvent';
}

Modernizr.prefixedEvent = Modernizr.prefixedEvent || {};
Modernizr.prefixedEvent.animationend = eventValue;

export default Modernizr.prefixedEvent.animationend;
