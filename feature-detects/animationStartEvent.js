/*!
{
  "name": "Animation start event",
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
  var animationStartEventNames = {
    'WebkitAnimation' : 'webkitAnimationStart',
    'msAnimation'     : 'MSAnimationStart',
    'oAnimation'      : 'oAnimationStart',
    'MozAnimation'    : 'animationstart',
    'animation'       : 'animationstart'
  };
  Modernizr.prefixedEvent.animationstart = animationStartEventNames[prefixed('animation')];
});
