/*!
{
  "name": "Print",
  "property": "print",
  "authors": ["Ivan Nikolić"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Window.print"
   }],
  "tags": ["print"]
}
!*/
/* DOC

This is really simple and dumb solution for print functionality
detection - we hide print button only if we are on mobile platform.

*/

define(['Modernizr'], function( Modernizr ) {
  rPlatform = /(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)|kindle|silk/i;
  Modernizr.addTest('print', !rPlatform.test( navigator.userAgent ));
});
