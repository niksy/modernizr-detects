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
detection - we say platform doesn’t support printing only if
it’s mobile platform.

*/

define(['Modernizr'], function ( Modernizr ) {
	var regex = /(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)|kindle|silk/i;
	Modernizr.addTest('print', !regex.test( navigator.userAgent ));
});
