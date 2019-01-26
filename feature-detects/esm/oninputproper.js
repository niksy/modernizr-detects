/*!
{
  "name": "onInput event, with proper support",
  "property": "oninputproper",
  "tags": ["oninput","event"],
  "authors": ["Ivan Nikolić"],
  "notes": [{
    "name": "MDN article on browser compatibility",
    "href": "https://developer.mozilla.org/en-US/docs/Web/Events/input#Browser_compatibility"
  },{
    "name": "IE 9 check",
    "href": "http://browserhacks.com/#hack-3ccf60c3e853ba37d5a42ab9654c5400"
  }]
}
!*/
/* DOC
`oninput` test for proper support
*/

import Modernizr from 'modernizr-esm/src/Modernizr';
import oninput from 'modernizr-esm/feature/event/oninput';

Modernizr.addTest('oninputproper', function () {
	// If no `oninput` support or IE 9
	if ( !oninput || (document.all && document.addEventListener && !window.atob) ) {
		return false;
	}
	return true;
});

export default Modernizr.oninputproper;
