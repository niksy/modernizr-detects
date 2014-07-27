/*!
{
  "name": "Flash",
  "property": "xflash",
  "notes": [{
    "name": "Original and refined reference",
    "href": "https://gist.github.com/getify/675496/#comment-574735"
  }],
  "polyfills": ["shumway"],
  "tags": ["flash"]
}
!*/
/* DOC

Simple detect for Flash.
Why "xflash"? Flash test inside Modernzir throws error in IE.

*/
/* global ActiveXObject */

define(['Modernizr'], function( Modernizr ) {
  var ieFlash;
  try {
    ieFlash = (window.ActiveXObject && (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) !== false );
  }
  catch(err) {
    ieFlash = false;
  }
  var flashInstalled = ((typeof navigator.plugins != 'undefined' && typeof navigator.plugins['Shockwave Flash'] == 'object') || ieFlash);
  Modernizr.addTest('xflash', flashInstalled);
});
