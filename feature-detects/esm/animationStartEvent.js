/*!
{
  "name": "Animation start event",
  "property": "animationStartEvent",
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

var animationStartEventNames = {
	'WebkitAnimation': 'webkitAnimationStart',
	'msAnimation': 'MSAnimationStart',
	'OAnimation': 'oAnimationStart',
	'MozAnimation': 'animationstart',
	'animation': 'animationstart'
};
var eventValue = animationStartEventNames[prefixed('animation')];

if ( typeof eventValue === 'undefined' ) {
	eventValue = 'modernizrNoAnimationStartEvent';
}

Modernizr.prefixedEvent = Modernizr.prefixedEvent || {};
Modernizr.prefixedEvent.animationstart = eventValue;

export default Modernizr.prefixedEvent.animationstart;
