/*!
{
  "name": "CSS appearance",
  "property": "appearance",
  "authors": ["Ivan Nikolić"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance"
   }],
  "tags": ["css"]
}
!*/
define(['Modernizr', 'testAllProps'], function( Modernizr, testAllProps ) {
  Modernizr.addTest('appearance', testAllProps('appearance', 'none', true));
});
