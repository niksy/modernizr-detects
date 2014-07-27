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

define(['Modernizr'], function( Modernizr ) {
  var regex = /Opera Mini|Silk/i;
  Modernizr.addTest('proxybrowser', regex.test( navigator.userAgent ));
});
