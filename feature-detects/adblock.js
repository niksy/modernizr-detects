/*!
{
  "name": "Ad block",
  "property": "adblock",
  "tags": ["adblock"],
  "authors": ["Ivan Nikolić"],
  "async": true
}
!*/
/* jshint expr: true */

define(['Modernizr', 'createElement', 'docElement', 'addTest'], function( Modernizr, createElement, docElement, addTest ) {
  Modernizr.addAsyncTest(function() {

    var adblockActive = false;
    var el = createElement('img');
    el.src = '//ads.modernizr';
    el.style.width = '1px';
    el.style.height = '1px';
    el.style.position = 'absolute';

    // IE8 complains if we try to append element to HTML element
    // Since it certainly doesn’t have ad blocker, we automatically return false
    if ( document.all && !document.addEventListener ) {

      addTest('adblock', false);

    } else {

      docElement.appendChild(el);

      setTimeout(function(){

        adblockActive = !docElement.contains(el) || el.style.display == 'none';

        addTest('adblock', adblockActive);

        adblockActive && docElement.removeChild(el);
        el = null;

      },200);

    }

  });
});
