/*!
{
  "name": "Animation end event",
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
   }],
  "tags": ["animation"]
}
!*/
define(['Modernizr','prefixed'], function( Modernizr, prefixed ) {
  Modernizr.prefixedEvent = Modernizr.prefixedEvent || {};
  var animationEndEventNames = {
    'WebkitAnimation' : 'webkitAnimationEnd',
    'msAnimation'     : 'MSAnimationEnd',
    'oAnimation'      : 'oAnimationEnd',
    'MozAnimation'    : 'animationend',
    'animation'       : 'animationend'
  };
  Modernizr.prefixedEvent.animationend = animationEndEventNames[prefixed('animation')];
});
