# modernizr-detects

[![Build Status][ci-img]][ci] [![Browserstack][browserstack-img]][browserstack]

Feature detection not suitable for [Modernizr][modernizr], but within it’s API for easier usage.

## Install

```sh
npm install modernizr-detects --save-dev
```

## Usage

Use it as part of `customTests` feature of [Customizr][customizr].

Since that project is currently unmaintained, I’m maintaining [fork][customizr-fork] ([Gulp][customizr-fork-gulp] and [Grunt][customizr-fork-grunt] plugin also) which is updated to work with new Modernizr features.

```js
var customizr = require('customizr');

customizr({
	// … Customizr config
	customTests: [
		'print',
		'proxybrowser',
		'oninputproper'
	].map(function ( name ) {
		return require.resolve('modernizr-detects/feature-detects/' + name);
	})
}, function () {
    // All done!
});
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[modernizr]: http://modernizr.com
[customizr]: https://github.com/doctyper/customizr
[customizr-fork]: https://github.com/niksy/customizr
[customizr-fork-gulp]: https://github.com/niksy/gulp-modernizr
[customizr-fork-grunt]: https://github.com/niksy/grunt-modernizr
[ci]: https://travis-ci.org/niksy/modernizr-detects
[ci-img]: https://img.shields.io/travis/niksy/modernizr-detects/master.svg
[browserstack]: https://www.browserstack.com/
[browserstack-img]: https://cdn.rawgit.com/niksy/c73069b66d20e2e0005dc8479c125fbd/raw/f644159e3f5f07291f98f59a44146735e9962e0d/browserstack.svg
