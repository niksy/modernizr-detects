/*!
{
  "name": "Transition end event",
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
define(['Modernizr','prefixed'], function( Modernizr, prefixed ) {
  Modernizr.prefixedEvent = Modernizr.prefixedEvent || {};
  var transitionEndEventNames = {
    'WebkitTransition' : 'webkitTransitionEnd',
    'msTransition'     : 'MSTransitionEnd',
    'OTransition'      : 'oTransitionEnd',
    'MozTransition'    : 'transitionend',
    'transition'       : 'transitionend'
  };
  var eventValue = transitionEndEventNames[prefixed('transition')];
  // Falsy value on Android 4.1-4.3 default browser
  if ( /Android 4\.[123]/.test(navigator.userAgent) ) {
    eventValue = transitionEndEventNames['WebkitTransition'];
  }
  Modernizr.prefixedEvent.transitionend = eventValue;
});
