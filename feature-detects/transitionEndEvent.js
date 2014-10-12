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
  Modernizr.prefixedEvent.transitionend = transitionEndEventNames[prefixed('transition')];
});
