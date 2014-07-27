/*!
{
  "name": "Ad block",
  "tags": ["adblock"],
  "authors": ["Ivan Nikolić"],
  "async": true
}
!*/
/* jshint expr: true */

define(['Modernizr', 'createElement', 'docElement', 'addTest'], function( Modernizr, createElement, docElement, addTest ) {
  Modernizr.addAsyncTest(function() {

    var isInDom;
    var el = createElement('img');
    el.src = '//ads.modernizr';
    el.style.width = '1px';
    el.style.height = '1px';
    el.style.position = 'absolute';

    docElement.appendChild(el);

    setTimeout(function(){

      isInDom = docElement.contains(el);

      addTest('adblock', !isInDom);

      isInDom && docElement.removeChild(el);
      el = null;

    },200);

  });
});
