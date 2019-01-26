# modernizr-detects

[![Build Status][ci-img]][ci] [![BrowserStack Status][browserstack-img]][browserstack]

Feature detection not suitable for [Modernizr][modernizr], but within it’s API for easier usage.

## Install

```sh
npm install modernizr-detects --save-dev
```

### ES Modules

```sh
npm install modernizr-esm modernizr-detects --save
```

## Usage

Use it as part of `customTests` feature of [Customizr][customizr].

Since that project is currently unmaintained, I’m maintaining [fork][customizr-fork] ([Gulp][customizr-fork-gulp] and [Grunt][customizr-fork-grunt] plugin also) which is updated to work with new Modernizr features.

```js
const customizr = require('customizr');

customizr({
	// … Customizr config
	customTests: [
		'print',
		'proxybrowser',
		'oninputproper'
	].map(( featureName ) => require.resolve(`modernizr-detects/feature-detects/${featureName}`))
}, () => {
	// All done!
});
```

### ES Modules

There is no need for build step. Import feature detection and use it’s return value.

```js
import print from 'modernizr-detects/feature-detects/esm/print';

console.log(print); // Is printing supported?
```

## List of feature detections

### adblock

Detects presence of ad blockers such as AdBlock Plus.

### ie

Gives you information regarding current IE version (if browser is IE).

### oninputproper

`oninput` event which detects [falsy values](https://developer.mozilla.org/en-US/docs/Web/Events/input#Browser_compatibility).

### print

Detects if current device has printing capability.

### proxybrowser

Detects if current browser is proxy browser.

### animationstart, animationend, transitionend

Not detection per se, but gives you prefixed/unprefixed string for animation/transition event according to browser capabilities.

## Browser support

Tested in IE9+ and all modern browsers.

## Test

For automated tests, run `npm run test:automated` (append `:watch` for watcher support).

For manual tests, run `npm run test:manual` and open <http://localhost:9000/> in your browser.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[modernizr]: http://modernizr.com
[customizr]: https://github.com/doctyper/customizr
[customizr-fork]: https://github.com/niksy/customizr
[customizr-fork-gulp]: https://github.com/niksy/gulp-modernizr
[customizr-fork-grunt]: https://github.com/niksy/grunt-modernizr
[ci]: https://travis-ci.org/niksy/modernizr-detects
[ci-img]: https://travis-ci.org/niksy/modernizr-detects.svg?branch=master
[browserstack]: https://www.browserstack.com/
[browserstack-img]: https://www.browserstack.com/automate/badge.svg?badge_key=NVhJRVhOMzBSZXRCSDNxSUF1ZW55cnJGQ0xyZTNJcDFQSGUyZnl4MG5KWT0tLUN1blZwQXFpak52dEhWQjY4dmlpQlE9PQ==--c4141f7b0cbc97b29063b1c65b1a8e1b6b3833d9
