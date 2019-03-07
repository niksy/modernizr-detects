/*!
{
  "name": "Proxy browser",
  "property": "proxybrowser",
  "authors": ["Ivan Nikolić"],
  "notes": [{
    "name": "Opera Mini detection",
    "href": "http://dev.opera.com/articles/view/opera-mini-and-javascript/#detectingmini"
   },
   {
    "name": "Amazon Silk detection",
    "href": "http://docs.aws.amazon.com/silk/latest/developerguide/user-agent.html#ua-detection"
   }],
  "tags": ["proxybrowser"]
}
!*/
/* DOC

Unfortunately, UA sniffing is only reliable solution for prxy browser detection.

*/

import Modernizr from 'modernizr-esm/src/Modernizr';

var regex = /Opera Mini|Silk/i;
var isBrowser = typeof window !== 'undefined';
Modernizr.addTest('proxybrowser', isBrowser && regex.test( navigator.userAgent ));

export default Modernizr.proxybrowser;
