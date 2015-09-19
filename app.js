var App =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Header = __webpack_require__(2);
	var Footer = __webpack_require__(7);
	var Nav = __webpack_require__(3);
	var Grid = __webpack_require__(8);

	var sitemap = __webpack_require__(9);
	var pages = __webpack_require__(143)(sitemap);

	module.exports = React.createClass({
	  displayName: 'App',

	  render: function render() {
	    var path = this.props.path;
	    var page = pages.filter(function (p) {
	      return p.path === path;
	    })[0];
	    var items = pages.filter(function (p) {
	      return p.dir === page.dir;
	    });
	    var component = page.component;

	    return React.createElement(
	      'div',
	      { className: 'app' },
	      React.createElement(Header, null),
	      React.createElement(
	        Grid.Container,
	        null,
	        React.createElement(
	          Grid.Row,
	          null,
	          React.createElement(
	            Grid.Column,
	            { d: items.length > 1 ? 3 : 0 },
	            React.createElement(Nav, {
	              title: page.dir,
	              className: 'u-nav u-nav-y',
	              items: items })
	          ),
	          React.createElement(
	            Grid.Column,
	            { d: 9 },
	            React.createElement(component)
	          )
	        )
	      ),
	      React.createElement(Footer, null)
	    );
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Nav = __webpack_require__(3);
	var Link = __webpack_require__(5);
	var pages = __webpack_require__(6);

	module.exports = React.createClass({
	  displayName: 'Header',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'm-header' },
	      React.createElement(
	        'div',
	        { className: 'g-c' },
	        React.createElement(
	          'h1',
	          null,
	          React.createElement(
	            Link,
	            { href: '/' },
	            'feng-ui'
	          )
	        )
	      )
	    );
	  }
	});
	/*<Nav className="u-nav-x f-fr" items={pages}/>*/

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);
	var Link = __webpack_require__(5);

	module.exports = React.createClass({
	  displayName: 'Nav',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      title: null,
	      items: []
	    };
	  },

	  render: function render() {
	    return React.createElement(
	      'nav',
	      { className: cx('u-nav', this.props.className) },
	      React.createElement(
	        'a',
	        { href: 'javascript:void(0)', className: 'title' },
	        this.props.title
	      ),
	      this.props.items.map(function (item, i) {
	        return React.createElement(
	          Link,
	          {
	            key: i,
	            href: item.html,
	            path: item.path },
	          item.text
	        );
	      })
	    );
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function () {
		'use strict';

		function classNames () {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;

				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);

				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}

	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var cx = __webpack_require__(4);

	module.exports = React.createClass({
	  displayName: 'Link',

	  render: function render() {
	    var href = this.props.href;
	    var path = this.props.path;
	    var target = this.props.target;

	    return React.createElement(
	      'a',
	      { href: '/feng-ui' + href,
	        'data-href': path,
	        target: target,
	        className: cx('j-link', this.props.classNams) },
	      this.props.children
	    );
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	module.exports = [{
	  text: 'Getting started',
	  path: 'getting-started'
	}, {
	  text: 'CSS',
	  path: 'css',
	  pages: [{
	    text: 'Grid',
	    path: 'grid'
	  }, {
	    text: 'Typography',
	    path: 'typography'
	  }, {
	    text: 'Buttons',
	    path: 'buttons'
	  }, {
	    text: 'Labels',
	    path: 'labels'
	  }, {
	    text: 'Forms',
	    path: 'forms'
	  }, {
	    text: 'Card',
	    path: 'card'
	  }, {
	    text: 'Avatars',
	    path: 'avatars'
	  }]
	}, {
	  text: 'React',
	  path: 'react',
	  pages: [{
	    text: 'Tabs',
	    path: 'tabs'
	  }, {
	    text: 'Dropdown',
	    path: 'dropdown'
	  }, {
	    text: 'Dialog',
	    path: 'dialogs'
	  }, {
	    text: 'Markdown',
	    path: 'markdown'
	  }, {
	    text: 'Feng Form',
	    path: 'feng-form'
	  }]
	}, {
	  text: 'About',
	  path: 'about',
	  pages: []
	}];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Grid = __webpack_require__(8);

	module.exports = React.createClass({
	  displayName: 'Footer',

	  render: function render() {
	    var year = new Date().getFullYear();

	    return React.createElement(
	      'div',
	      { className: 'm-footer' },
	      React.createElement(
	        Grid.Container,
	        null,
	        React.createElement(
	          Grid.Row,
	          null,
	          React.createElement(
	            Grid.Column,
	            { d: 12 },
	            React.createElement(
	              'nav',
	              { className: 'u-nav-x' },
	              React.createElement(
	                'a',
	                { href: 'https://github.com/wangzuo/feng-ui' },
	                'Github'
	              ),
	              React.createElement(
	                'a',
	                { href: 'https://npmjs.com/package/feng-ui' },
	                'NPM'
	              ),
	              React.createElement(
	                'a',
	                { href: '#' },
	                'About'
	              )
	            ),
	            React.createElement(
	              'div',
	              { className: 'leadtext' },
	              'Copyright © 2015 (ISC) License'
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var cx = __webpack_require__(4);

	exports.Container = React.createClass({
	  displayName: 'Container',

	  render: function render() {
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: cx('g-c', this.props.className) }),
	      this.props.children
	    );
	  }
	});

	exports.Row = React.createClass({
	  displayName: 'Row',

	  render: function render() {
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: cx('g-r', this.props.className) }),
	      this.props.children
	    );
	  }
	});

	exports.Column = React.createClass({
	  displayName: 'Column',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      d: 12,
	      t: 12,
	      m: 12
	    };
	  },

	  render: function render() {
	    var cn = cx('g-' + this.props.d, 'g-t-' + this.props.t, 'g-m-' + this.props.m, this.props.className);

	    return React.createElement(
	      'div',
	      _extends({}, this.props, { className: cn }),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  component: __webpack_require__(10),
	  pages: [{
	    text: 'Getting started',
	    path: 'getting-started',
	    component: __webpack_require__(79)
	  }, {
	    text: 'CSS',
	    path: 'css',
	    component: __webpack_require__(80),
	    pages: [{
	      text: 'Grid',
	      path: 'grid',
	      component: __webpack_require__(131)
	    }, {
	      text: 'Typography',
	      path: 'typography',
	      component: __webpack_require__(132)
	    }, {
	      text: 'Buttons',
	      path: 'buttons',
	      component: __webpack_require__(81)
	    }, {
	      text: 'Labels',
	      path: 'labels',
	      component: __webpack_require__(133)
	    }, {
	      text: 'Forms',
	      path: 'forms',
	      component: __webpack_require__(134)
	    }, {
	      text: 'Card',
	      path: 'card',
	      component: __webpack_require__(135)
	    }, {
	      text: 'Avatars',
	      path: 'avatars',
	      component: __webpack_require__(136)
	    }]
	  }, {
	    text: 'React',
	    path: 'react',
	    component: __webpack_require__(137),
	    pages: [{
	      text: 'Tabs',
	      path: 'tabs',
	      component: __webpack_require__(139)
	    }, {
	      text: 'Dropdown',
	      path: 'dropdown',
	      component: __webpack_require__(140)
	    }, {
	      text: 'Dialog',
	      path: 'dialogs',
	      component: __webpack_require__(138)
	    }, {
	      text: 'Markdown',
	      path: 'markdown',
	      component: __webpack_require__(141)
	    }, {
	      text: 'Feng Form',
	      path: 'feng-form',
	      component: __webpack_require__(142)
	    }]
	  }]
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Markdown = __webpack_require__(11);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        Markdown,
	        null,
	        '# feng-ui\n\n[![Build Status](https://travis-ci.org/wangzuo/feng-ui.svg)](https://travis-ci.org/wangzuo/feng-ui)\n\n- [github](http://github.com/wangzuo/feng-ui)\n- [npm](https://www.npmjs.com/package/feng-ui)\n\nfeng-ui is a styleguide built with reactjs and postcss\n\n- [Getting started](/feng-ui/getting-started)\n- [CSS](/feng-ui/css)\n- [React](/feng-ui/react)\n\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.\n\nNullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur.\n\nNullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\nDonec sed odio dui. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna.\n\n### License\nISC'
	      )
	    );
	  }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var MarkdownIt = __webpack_require__(12);

	var md = new MarkdownIt();

	module.exports = React.createClass({
	  displayName: 'Markdown',

	  render: function render() {
	    var text = this.props.children;
	    var html = md.render(text);

	    return React.createElement('div', { dangerouslySetInnerHTML: { __html: html } });
	  }
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	module.exports = __webpack_require__(13);


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// Main perser class

	'use strict';


	var utils        = __webpack_require__(14);
	var helpers      = __webpack_require__(28);
	var Renderer     = __webpack_require__(32);
	var ParserCore   = __webpack_require__(33);
	var ParserBlock  = __webpack_require__(43);
	var ParserInline = __webpack_require__(58);
	var LinkifyIt    = __webpack_require__(72);
	var mdurl        = __webpack_require__(18);
	var punycode     = __webpack_require__(74);


	var config = {
	  'default': __webpack_require__(76),
	  zero: __webpack_require__(77),
	  commonmark: __webpack_require__(78)
	};

	////////////////////////////////////////////////////////////////////////////////
	//
	// This validator can prohibit more than really needed to prevent XSS. It's a
	// tradeoff to keep code simple and to be secure by default.
	//
	// If you need different setup - override validator method as you wish. Or
	// replace it with dummy function and use external sanitizer.
	//

	var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
	var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

	function validateLink(url) {
	  // url should be normalized at this point, and existing entities are decoded
	  var str = url.trim().toLowerCase();

	  return BAD_PROTO_RE.test(str) ? (GOOD_DATA_RE.test(str) ? true : false) : true;
	}

	////////////////////////////////////////////////////////////////////////////////


	var RECODE_HOSTNAME_FOR = [ 'http:', 'https:', 'mailto:' ];

	function normalizeLink(url) {
	  var parsed = mdurl.parse(url, true);

	  if (parsed.hostname) {
	    // Encode hostnames in urls like:
	    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
	    //
	    // We don't encode unknown schemas, because it's likely that we encode
	    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
	    //
	    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
	      try {
	        parsed.hostname = punycode.toASCII(parsed.hostname);
	      } catch(er) {}
	    }
	  }

	  return mdurl.encode(mdurl.format(parsed));
	}

	function normalizeLinkText(url) {
	  var parsed = mdurl.parse(url, true);

	  if (parsed.hostname) {
	    // Encode hostnames in urls like:
	    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
	    //
	    // We don't encode unknown schemas, because it's likely that we encode
	    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
	    //
	    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
	      try {
	        parsed.hostname = punycode.toUnicode(parsed.hostname);
	      } catch(er) {}
	    }
	  }

	  return mdurl.decode(mdurl.format(parsed));
	}


	/**
	 * class MarkdownIt
	 *
	 * Main parser/renderer class.
	 *
	 * ##### Usage
	 *
	 * ```javascript
	 * // node.js, "classic" way:
	 * var MarkdownIt = require('markdown-it'),
	 *     md = new MarkdownIt();
	 * var result = md.render('# markdown-it rulezz!');
	 *
	 * // node.js, the same, but with sugar:
	 * var md = require('markdown-it')();
	 * var result = md.render('# markdown-it rulezz!');
	 *
	 * // browser without AMD, added to "window" on script load
	 * // Note, there are no dash.
	 * var md = window.markdownit();
	 * var result = md.render('# markdown-it rulezz!');
	 * ```
	 *
	 * Single line rendering, without paragraph wrap:
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 * var result = md.renderInline('__markdown-it__ rulezz!');
	 * ```
	 **/

	/**
	 * new MarkdownIt([presetName, options])
	 * - presetName (String): optional, `commonmark` / `zero`
	 * - options (Object)
	 *
	 * Creates parser instanse with given config. Can be called without `new`.
	 *
	 * ##### presetName
	 *
	 * MarkdownIt provides named presets as a convenience to quickly
	 * enable/disable active syntax rules and options for common use cases.
	 *
	 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
	 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
	 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
	 *   similar to GFM, used when no preset name given. Enables all available rules,
	 *   but still without html, typographer & autolinker.
	 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
	 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
	 *   For example, when you need only `bold` and `italic` markup and nothing else.
	 *
	 * ##### options:
	 *
	 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
	 *   That's not safe! You may need external sanitizer to protect output from XSS.
	 *   It's better to extend features via plugins, instead of enabling HTML.
	 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
	 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
	 *   world you will need HTML output.
	 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
	 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
	 *   Can be useful for external highlighters.
	 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
	 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
	 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
	 *   quotes beautification (smartquotes).
	 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
	 *   pairs, when typographer enabled and smartquotes on. For example, you can
	 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
	 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
	 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
	 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
	 *   return empty string if the source was not changed and should be escaped externaly.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * // commonmark mode
	 * var md = require('markdown-it')('commonmark');
	 *
	 * // default mode
	 * var md = require('markdown-it')();
	 *
	 * // enable everything
	 * var md = require('markdown-it')({
	 *   html: true,
	 *   linkify: true,
	 *   typographer: true
	 * });
	 * ```
	 *
	 * ##### Syntax highlighting
	 *
	 * ```js
	 * var hljs = require('highlight.js') // https://highlightjs.org/
	 *
	 * var md = require('markdown-it')({
	 *   highlight: function (str, lang) {
	 *     if (lang && hljs.getLanguage(lang)) {
	 *       try {
	 *         return hljs.highlight(lang, str).value;
	 *       } catch (__) {}
	 *     }
	 *
	 *     try {
	 *       return hljs.highlightAuto(str).value;
	 *     } catch (__) {}
	 *
	 *     return ''; // use external default escaping
	 *   }
	 * });
	 * ```
	 **/
	function MarkdownIt(presetName, options) {
	  if (!(this instanceof MarkdownIt)) {
	    return new MarkdownIt(presetName, options);
	  }

	  if (!options) {
	    if (!utils.isString(presetName)) {
	      options = presetName || {};
	      presetName = 'default';
	    }
	  }

	  /**
	   * MarkdownIt#inline -> ParserInline
	   *
	   * Instance of [[ParserInline]]. You may need it to add new rules when
	   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	   * [[MarkdownIt.enable]].
	   **/
	  this.inline = new ParserInline();

	  /**
	   * MarkdownIt#block -> ParserBlock
	   *
	   * Instance of [[ParserBlock]]. You may need it to add new rules when
	   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	   * [[MarkdownIt.enable]].
	   **/
	  this.block = new ParserBlock();

	  /**
	   * MarkdownIt#core -> Core
	   *
	   * Instance of [[Core]] chain executor. You may need it to add new rules when
	   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	   * [[MarkdownIt.enable]].
	   **/
	  this.core = new ParserCore();

	  /**
	   * MarkdownIt#renderer -> Renderer
	   *
	   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
	   * rules for new token types, generated by plugins.
	   *
	   * ##### Example
	   *
	   * ```javascript
	   * var md = require('markdown-it')();
	   *
	   * function myToken(tokens, idx, options, env, self) {
	   *   //...
	   *   return result;
	   * };
	   *
	   * md.renderer.rules['my_token'] = myToken
	   * ```
	   *
	   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
	   **/
	  this.renderer = new Renderer();

	  /**
	   * MarkdownIt#linkify -> LinkifyIt
	   *
	   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
	   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
	   * rule.
	   **/
	  this.linkify = new LinkifyIt();

	  /**
	   * MarkdownIt#validateLink(url) -> Boolean
	   *
	   * Link validation function. CommonMark allows too much in links. By default
	   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
	   * except some embedded image types.
	   *
	   * You can change this behaviour:
	   *
	   * ```javascript
	   * var md = require('markdown-it')();
	   * // enable everything
	   * md.validateLink = function () { return true; }
	   * ```
	   **/
	  this.validateLink = validateLink;

	  /**
	   * MarkdownIt#normalizeLink(url) -> String
	   *
	   * Function used to encode link url to a machine-readable format,
	   * which includes url-encoding, punycode, etc.
	   **/
	  this.normalizeLink = normalizeLink;

	  /**
	   * MarkdownIt#normalizeLinkText(url) -> String
	   *
	   * Function used to decode link url to a human-readable format`
	   **/
	  this.normalizeLinkText = normalizeLinkText;


	  // Expose utils & helpers for easy acces from plugins

	  /**
	   * MarkdownIt#utils -> utils
	   *
	   * Assorted utility functions, useful to write plugins. See details
	   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
	   **/
	  this.utils = utils;

	  /**
	   * MarkdownIt#helpers -> helpers
	   *
	   * Link components parser functions, useful to write plugins. See details
	   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
	   **/
	  this.helpers = helpers;


	  this.options = {};
	  this.configure(presetName);

	  if (options) { this.set(options); }
	}


	/** chainable
	 * MarkdownIt.set(options)
	 *
	 * Set parser options (in the same format as in constructor). Probably, you
	 * will never need it, but you can change options after constructor call.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')()
	 *             .set({ html: true, breaks: true })
	 *             .set({ typographer, true });
	 * ```
	 *
	 * __Note:__ To achieve the best possible performance, don't modify a
	 * `markdown-it` instance options on the fly. If you need multiple configurations
	 * it's best to create multiple instances and initialize each with separate
	 * config.
	 **/
	MarkdownIt.prototype.set = function (options) {
	  utils.assign(this.options, options);
	  return this;
	};


	/** chainable, internal
	 * MarkdownIt.configure(presets)
	 *
	 * Batch load of all options and compenent settings. This is internal method,
	 * and you probably will not need it. But if you with - see available presets
	 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
	 *
	 * We strongly recommend to use presets instead of direct config loads. That
	 * will give better compatibility with next versions.
	 **/
	MarkdownIt.prototype.configure = function (presets) {
	  var self = this, presetName;

	  if (utils.isString(presets)) {
	    presetName = presets;
	    presets = config[presetName];
	    if (!presets) { throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name'); }
	  }

	  if (!presets) { throw new Error('Wrong `markdown-it` preset, can\'t be empty'); }

	  if (presets.options) { self.set(presets.options); }

	  if (presets.components) {
	    Object.keys(presets.components).forEach(function (name) {
	      if (presets.components[name].rules) {
	        self[name].ruler.enableOnly(presets.components[name].rules);
	      }
	    });
	  }
	  return this;
	};


	/** chainable
	 * MarkdownIt.enable(list, ignoreInvalid)
	 * - list (String|Array): rule name or list of rule names to enable
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Enable list or rules. It will automatically find appropriate components,
	 * containing rules with given names. If rule not found, and `ignoreInvalid`
	 * not set - throws exception.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')()
	 *             .enable(['sub', 'sup'])
	 *             .disable('smartquotes');
	 * ```
	 **/
	MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
	  var result = [];

	  if (!Array.isArray(list)) { list = [ list ]; }

	  [ 'core', 'block', 'inline' ].forEach(function (chain) {
	    result = result.concat(this[chain].ruler.enable(list, true));
	  }, this);

	  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

	  if (missed.length && !ignoreInvalid) {
	    throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
	  }

	  return this;
	};


	/** chainable
	 * MarkdownIt.disable(list, ignoreInvalid)
	 * - list (String|Array): rule name or list of rule names to disable.
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * The same as [[MarkdownIt.enable]], but turn specified rules off.
	 **/
	MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
	  var result = [];

	  if (!Array.isArray(list)) { list = [ list ]; }

	  [ 'core', 'block', 'inline' ].forEach(function (chain) {
	    result = result.concat(this[chain].ruler.disable(list, true));
	  }, this);

	  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

	  if (missed.length && !ignoreInvalid) {
	    throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
	  }
	  return this;
	};


	/** chainable
	 * MarkdownIt.use(plugin, params)
	 *
	 * Load specified plugin with given params into current parser instance.
	 * It's just a sugar to call `plugin(md, params)` with curring.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var iterator = require('markdown-it-for-inline');
	 * var md = require('markdown-it')()
	 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
	 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
	 *             });
	 * ```
	 **/
	MarkdownIt.prototype.use = function (plugin /*, params, ... */) {
	  var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
	  plugin.apply(plugin, args);
	  return this;
	};


	/** internal
	 * MarkdownIt.parse(src, env) -> Array
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * Parse input string and returns list of block tokens (special token type
	 * "inline" will contain list of inline tokens). You should not call this
	 * method directly, until you write custom renderer (for example, to produce
	 * AST).
	 *
	 * `env` is used to pass data between "distributed" rules and return additional
	 * metadata like reference info, needed for for renderer. It also can be used to
	 * inject data in specific cases. Usually, you will be ok to pass `{}`,
	 * and then pass updated object to renderer.
	 **/
	MarkdownIt.prototype.parse = function (src, env) {
	  var state = new this.core.State(src, this, env);

	  this.core.process(state);

	  return state.tokens;
	};


	/**
	 * MarkdownIt.render(src [, env]) -> String
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * Render markdown string into html. It does all magic for you :).
	 *
	 * `env` can be used to inject additional metadata (`{}` by default).
	 * But you will not need it with high probability. See also comment
	 * in [[MarkdownIt.parse]].
	 **/
	MarkdownIt.prototype.render = function (src, env) {
	  env = env || {};

	  return this.renderer.render(this.parse(src, env), this.options, env);
	};


	/** internal
	 * MarkdownIt.parseInline(src, env) -> Array
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
	 * block tokens list with the single `inline` element, containing parsed inline
	 * tokens in `children` property. Also updates `env` object.
	 **/
	MarkdownIt.prototype.parseInline = function (src, env) {
	  var state = new this.core.State(src, this, env);

	  state.inlineMode = true;
	  this.core.process(state);

	  return state.tokens;
	};


	/**
	 * MarkdownIt.renderInline(src [, env]) -> String
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
	 * will NOT be wrapped into `<p>` tags.
	 **/
	MarkdownIt.prototype.renderInline = function (src, env) {
	  env = env || {};

	  return this.renderer.render(this.parseInline(src, env), this.options, env);
	};


	module.exports = MarkdownIt;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Utilities
	//
	'use strict';


	function _class(obj) { return Object.prototype.toString.call(obj); }

	function isString(obj) { return _class(obj) === '[object String]'; }

	var _hasOwnProperty = Object.prototype.hasOwnProperty;

	function has(object, key) {
	  return _hasOwnProperty.call(object, key);
	}

	// Merge objects
	//
	function assign(obj /*from1, from2, from3, ...*/) {
	  var sources = Array.prototype.slice.call(arguments, 1);

	  sources.forEach(function (source) {
	    if (!source) { return; }

	    if (typeof source !== 'object') {
	      throw new TypeError(source + 'must be object');
	    }

	    Object.keys(source).forEach(function (key) {
	      obj[key] = source[key];
	    });
	  });

	  return obj;
	}

	// Remove element from array and put another array at those position.
	// Useful for some operations with tokens
	function arrayReplaceAt(src, pos, newElements) {
	  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
	}

	////////////////////////////////////////////////////////////////////////////////

	function isValidEntityCode(c) {
	  /*eslint no-bitwise:0*/
	  // broken sequence
	  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
	  // never used
	  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
	  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
	  // control codes
	  if (c >= 0x00 && c <= 0x08) { return false; }
	  if (c === 0x0B) { return false; }
	  if (c >= 0x0E && c <= 0x1F) { return false; }
	  if (c >= 0x7F && c <= 0x9F) { return false; }
	  // out of range
	  if (c > 0x10FFFF) { return false; }
	  return true;
	}

	function fromCodePoint(c) {
	  /*eslint no-bitwise:0*/
	  if (c > 0xffff) {
	    c -= 0x10000;
	    var surrogate1 = 0xd800 + (c >> 10),
	        surrogate2 = 0xdc00 + (c & 0x3ff);

	    return String.fromCharCode(surrogate1, surrogate2);
	  }
	  return String.fromCharCode(c);
	}


	var UNESCAPE_MD_RE  = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
	var ENTITY_RE       = /&([a-z#][a-z0-9]{1,31});/gi;
	var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');

	var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;

	var entities = __webpack_require__(15);

	function replaceEntityPattern(match, name) {
	  var code = 0;

	  if (has(entities, name)) {
	    return entities[name];
	  }

	  if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
	    code = name[1].toLowerCase() === 'x' ?
	      parseInt(name.slice(2), 16)
	    :
	      parseInt(name.slice(1), 10);
	    if (isValidEntityCode(code)) {
	      return fromCodePoint(code);
	    }
	  }

	  return match;
	}

	/*function replaceEntities(str) {
	  if (str.indexOf('&') < 0) { return str; }

	  return str.replace(ENTITY_RE, replaceEntityPattern);
	}*/

	function unescapeMd(str) {
	  if (str.indexOf('\\') < 0) { return str; }
	  return str.replace(UNESCAPE_MD_RE, '$1');
	}

	function unescapeAll(str) {
	  if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) { return str; }

	  return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
	    if (escaped) { return escaped; }
	    return replaceEntityPattern(match, entity);
	  });
	}

	////////////////////////////////////////////////////////////////////////////////

	var HTML_ESCAPE_TEST_RE = /[&<>"]/;
	var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
	var HTML_REPLACEMENTS = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};

	function replaceUnsafeChar(ch) {
	  return HTML_REPLACEMENTS[ch];
	}

	function escapeHtml(str) {
	  if (HTML_ESCAPE_TEST_RE.test(str)) {
	    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
	  }
	  return str;
	}

	////////////////////////////////////////////////////////////////////////////////

	var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

	function escapeRE (str) {
	  return str.replace(REGEXP_ESCAPE_RE, '\\$&');
	}

	////////////////////////////////////////////////////////////////////////////////

	// Zs (unicode class) || [\t\f\v\r\n]
	function isWhiteSpace(code) {
	  if (code >= 0x2000 && code <= 0x200A) { return true; }
	  switch (code) {
	    case 0x09: // \t
	    case 0x0A: // \n
	    case 0x0B: // \v
	    case 0x0C: // \f
	    case 0x0D: // \r
	    case 0x20:
	    case 0xA0:
	    case 0x1680:
	    case 0x202F:
	    case 0x205F:
	    case 0x3000:
	      return true;
	  }
	  return false;
	}

	////////////////////////////////////////////////////////////////////////////////

	/*eslint-disable max-len*/
	var UNICODE_PUNCT_RE = __webpack_require__(17);

	// Currently without astral characters support.
	function isPunctChar(char) {
	  return UNICODE_PUNCT_RE.test(char);
	}


	// Markdown ASCII punctuation characters.
	//
	// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
	// http://spec.commonmark.org/0.15/#ascii-punctuation-character
	//
	// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
	//
	function isMdAsciiPunct(ch) {
	  switch (ch) {
	    case 0x21/* ! */:
	    case 0x22/* " */:
	    case 0x23/* # */:
	    case 0x24/* $ */:
	    case 0x25/* % */:
	    case 0x26/* & */:
	    case 0x27/* ' */:
	    case 0x28/* ( */:
	    case 0x29/* ) */:
	    case 0x2A/* * */:
	    case 0x2B/* + */:
	    case 0x2C/* , */:
	    case 0x2D/* - */:
	    case 0x2E/* . */:
	    case 0x2F/* / */:
	    case 0x3A/* : */:
	    case 0x3B/* ; */:
	    case 0x3C/* < */:
	    case 0x3D/* = */:
	    case 0x3E/* > */:
	    case 0x3F/* ? */:
	    case 0x40/* @ */:
	    case 0x5B/* [ */:
	    case 0x5C/* \ */:
	    case 0x5D/* ] */:
	    case 0x5E/* ^ */:
	    case 0x5F/* _ */:
	    case 0x60/* ` */:
	    case 0x7B/* { */:
	    case 0x7C/* | */:
	    case 0x7D/* } */:
	    case 0x7E/* ~ */:
	      return true;
	    default:
	      return false;
	  }
	}

	// Hepler to unify [reference labels].
	//
	function normalizeReference(str) {
	  // use .toUpperCase() instead of .toLowerCase()
	  // here to avoid a conflict with Object.prototype
	  // members (most notably, `__proto__`)
	  return str.trim().replace(/\s+/g, ' ').toUpperCase();
	}

	////////////////////////////////////////////////////////////////////////////////

	// Re-export libraries commonly used in both markdown-it and its plugins,
	// so plugins won't have to depend on them explicitly, which reduces their
	// bundled size (e.g. a browser build).
	//
	exports.lib                 = {};
	exports.lib.mdurl           = __webpack_require__(18);
	exports.lib.ucmicro         = __webpack_require__(23);

	exports.assign              = assign;
	exports.isString            = isString;
	exports.has                 = has;
	exports.unescapeMd          = unescapeMd;
	exports.unescapeAll         = unescapeAll;
	exports.isValidEntityCode   = isValidEntityCode;
	exports.fromCodePoint       = fromCodePoint;
	// exports.replaceEntities     = replaceEntities;
	exports.escapeHtml          = escapeHtml;
	exports.arrayReplaceAt      = arrayReplaceAt;
	exports.isWhiteSpace        = isWhiteSpace;
	exports.isMdAsciiPunct      = isMdAsciiPunct;
	exports.isPunctChar         = isPunctChar;
	exports.escapeRE            = escapeRE;
	exports.normalizeReference  = normalizeReference;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// HTML5 entities map: { name -> utf16string }
	//
	'use strict';

	/*eslint quotes:0*/
	module.exports = __webpack_require__(16);


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
		"Aacute": "Á",
		"aacute": "á",
		"Abreve": "Ă",
		"abreve": "ă",
		"ac": "∾",
		"acd": "∿",
		"acE": "∾̳",
		"Acirc": "Â",
		"acirc": "â",
		"acute": "´",
		"Acy": "А",
		"acy": "а",
		"AElig": "Æ",
		"aelig": "æ",
		"af": "⁡",
		"Afr": "𝔄",
		"afr": "𝔞",
		"Agrave": "À",
		"agrave": "à",
		"alefsym": "ℵ",
		"aleph": "ℵ",
		"Alpha": "Α",
		"alpha": "α",
		"Amacr": "Ā",
		"amacr": "ā",
		"amalg": "⨿",
		"amp": "&",
		"AMP": "&",
		"andand": "⩕",
		"And": "⩓",
		"and": "∧",
		"andd": "⩜",
		"andslope": "⩘",
		"andv": "⩚",
		"ang": "∠",
		"ange": "⦤",
		"angle": "∠",
		"angmsdaa": "⦨",
		"angmsdab": "⦩",
		"angmsdac": "⦪",
		"angmsdad": "⦫",
		"angmsdae": "⦬",
		"angmsdaf": "⦭",
		"angmsdag": "⦮",
		"angmsdah": "⦯",
		"angmsd": "∡",
		"angrt": "∟",
		"angrtvb": "⊾",
		"angrtvbd": "⦝",
		"angsph": "∢",
		"angst": "Å",
		"angzarr": "⍼",
		"Aogon": "Ą",
		"aogon": "ą",
		"Aopf": "𝔸",
		"aopf": "𝕒",
		"apacir": "⩯",
		"ap": "≈",
		"apE": "⩰",
		"ape": "≊",
		"apid": "≋",
		"apos": "'",
		"ApplyFunction": "⁡",
		"approx": "≈",
		"approxeq": "≊",
		"Aring": "Å",
		"aring": "å",
		"Ascr": "𝒜",
		"ascr": "𝒶",
		"Assign": "≔",
		"ast": "*",
		"asymp": "≈",
		"asympeq": "≍",
		"Atilde": "Ã",
		"atilde": "ã",
		"Auml": "Ä",
		"auml": "ä",
		"awconint": "∳",
		"awint": "⨑",
		"backcong": "≌",
		"backepsilon": "϶",
		"backprime": "‵",
		"backsim": "∽",
		"backsimeq": "⋍",
		"Backslash": "∖",
		"Barv": "⫧",
		"barvee": "⊽",
		"barwed": "⌅",
		"Barwed": "⌆",
		"barwedge": "⌅",
		"bbrk": "⎵",
		"bbrktbrk": "⎶",
		"bcong": "≌",
		"Bcy": "Б",
		"bcy": "б",
		"bdquo": "„",
		"becaus": "∵",
		"because": "∵",
		"Because": "∵",
		"bemptyv": "⦰",
		"bepsi": "϶",
		"bernou": "ℬ",
		"Bernoullis": "ℬ",
		"Beta": "Β",
		"beta": "β",
		"beth": "ℶ",
		"between": "≬",
		"Bfr": "𝔅",
		"bfr": "𝔟",
		"bigcap": "⋂",
		"bigcirc": "◯",
		"bigcup": "⋃",
		"bigodot": "⨀",
		"bigoplus": "⨁",
		"bigotimes": "⨂",
		"bigsqcup": "⨆",
		"bigstar": "★",
		"bigtriangledown": "▽",
		"bigtriangleup": "△",
		"biguplus": "⨄",
		"bigvee": "⋁",
		"bigwedge": "⋀",
		"bkarow": "⤍",
		"blacklozenge": "⧫",
		"blacksquare": "▪",
		"blacktriangle": "▴",
		"blacktriangledown": "▾",
		"blacktriangleleft": "◂",
		"blacktriangleright": "▸",
		"blank": "␣",
		"blk12": "▒",
		"blk14": "░",
		"blk34": "▓",
		"block": "█",
		"bne": "=⃥",
		"bnequiv": "≡⃥",
		"bNot": "⫭",
		"bnot": "⌐",
		"Bopf": "𝔹",
		"bopf": "𝕓",
		"bot": "⊥",
		"bottom": "⊥",
		"bowtie": "⋈",
		"boxbox": "⧉",
		"boxdl": "┐",
		"boxdL": "╕",
		"boxDl": "╖",
		"boxDL": "╗",
		"boxdr": "┌",
		"boxdR": "╒",
		"boxDr": "╓",
		"boxDR": "╔",
		"boxh": "─",
		"boxH": "═",
		"boxhd": "┬",
		"boxHd": "╤",
		"boxhD": "╥",
		"boxHD": "╦",
		"boxhu": "┴",
		"boxHu": "╧",
		"boxhU": "╨",
		"boxHU": "╩",
		"boxminus": "⊟",
		"boxplus": "⊞",
		"boxtimes": "⊠",
		"boxul": "┘",
		"boxuL": "╛",
		"boxUl": "╜",
		"boxUL": "╝",
		"boxur": "└",
		"boxuR": "╘",
		"boxUr": "╙",
		"boxUR": "╚",
		"boxv": "│",
		"boxV": "║",
		"boxvh": "┼",
		"boxvH": "╪",
		"boxVh": "╫",
		"boxVH": "╬",
		"boxvl": "┤",
		"boxvL": "╡",
		"boxVl": "╢",
		"boxVL": "╣",
		"boxvr": "├",
		"boxvR": "╞",
		"boxVr": "╟",
		"boxVR": "╠",
		"bprime": "‵",
		"breve": "˘",
		"Breve": "˘",
		"brvbar": "¦",
		"bscr": "𝒷",
		"Bscr": "ℬ",
		"bsemi": "⁏",
		"bsim": "∽",
		"bsime": "⋍",
		"bsolb": "⧅",
		"bsol": "\\",
		"bsolhsub": "⟈",
		"bull": "•",
		"bullet": "•",
		"bump": "≎",
		"bumpE": "⪮",
		"bumpe": "≏",
		"Bumpeq": "≎",
		"bumpeq": "≏",
		"Cacute": "Ć",
		"cacute": "ć",
		"capand": "⩄",
		"capbrcup": "⩉",
		"capcap": "⩋",
		"cap": "∩",
		"Cap": "⋒",
		"capcup": "⩇",
		"capdot": "⩀",
		"CapitalDifferentialD": "ⅅ",
		"caps": "∩︀",
		"caret": "⁁",
		"caron": "ˇ",
		"Cayleys": "ℭ",
		"ccaps": "⩍",
		"Ccaron": "Č",
		"ccaron": "č",
		"Ccedil": "Ç",
		"ccedil": "ç",
		"Ccirc": "Ĉ",
		"ccirc": "ĉ",
		"Cconint": "∰",
		"ccups": "⩌",
		"ccupssm": "⩐",
		"Cdot": "Ċ",
		"cdot": "ċ",
		"cedil": "¸",
		"Cedilla": "¸",
		"cemptyv": "⦲",
		"cent": "¢",
		"centerdot": "·",
		"CenterDot": "·",
		"cfr": "𝔠",
		"Cfr": "ℭ",
		"CHcy": "Ч",
		"chcy": "ч",
		"check": "✓",
		"checkmark": "✓",
		"Chi": "Χ",
		"chi": "χ",
		"circ": "ˆ",
		"circeq": "≗",
		"circlearrowleft": "↺",
		"circlearrowright": "↻",
		"circledast": "⊛",
		"circledcirc": "⊚",
		"circleddash": "⊝",
		"CircleDot": "⊙",
		"circledR": "®",
		"circledS": "Ⓢ",
		"CircleMinus": "⊖",
		"CirclePlus": "⊕",
		"CircleTimes": "⊗",
		"cir": "○",
		"cirE": "⧃",
		"cire": "≗",
		"cirfnint": "⨐",
		"cirmid": "⫯",
		"cirscir": "⧂",
		"ClockwiseContourIntegral": "∲",
		"CloseCurlyDoubleQuote": "”",
		"CloseCurlyQuote": "’",
		"clubs": "♣",
		"clubsuit": "♣",
		"colon": ":",
		"Colon": "∷",
		"Colone": "⩴",
		"colone": "≔",
		"coloneq": "≔",
		"comma": ",",
		"commat": "@",
		"comp": "∁",
		"compfn": "∘",
		"complement": "∁",
		"complexes": "ℂ",
		"cong": "≅",
		"congdot": "⩭",
		"Congruent": "≡",
		"conint": "∮",
		"Conint": "∯",
		"ContourIntegral": "∮",
		"copf": "𝕔",
		"Copf": "ℂ",
		"coprod": "∐",
		"Coproduct": "∐",
		"copy": "©",
		"COPY": "©",
		"copysr": "℗",
		"CounterClockwiseContourIntegral": "∳",
		"crarr": "↵",
		"cross": "✗",
		"Cross": "⨯",
		"Cscr": "𝒞",
		"cscr": "𝒸",
		"csub": "⫏",
		"csube": "⫑",
		"csup": "⫐",
		"csupe": "⫒",
		"ctdot": "⋯",
		"cudarrl": "⤸",
		"cudarrr": "⤵",
		"cuepr": "⋞",
		"cuesc": "⋟",
		"cularr": "↶",
		"cularrp": "⤽",
		"cupbrcap": "⩈",
		"cupcap": "⩆",
		"CupCap": "≍",
		"cup": "∪",
		"Cup": "⋓",
		"cupcup": "⩊",
		"cupdot": "⊍",
		"cupor": "⩅",
		"cups": "∪︀",
		"curarr": "↷",
		"curarrm": "⤼",
		"curlyeqprec": "⋞",
		"curlyeqsucc": "⋟",
		"curlyvee": "⋎",
		"curlywedge": "⋏",
		"curren": "¤",
		"curvearrowleft": "↶",
		"curvearrowright": "↷",
		"cuvee": "⋎",
		"cuwed": "⋏",
		"cwconint": "∲",
		"cwint": "∱",
		"cylcty": "⌭",
		"dagger": "†",
		"Dagger": "‡",
		"daleth": "ℸ",
		"darr": "↓",
		"Darr": "↡",
		"dArr": "⇓",
		"dash": "‐",
		"Dashv": "⫤",
		"dashv": "⊣",
		"dbkarow": "⤏",
		"dblac": "˝",
		"Dcaron": "Ď",
		"dcaron": "ď",
		"Dcy": "Д",
		"dcy": "д",
		"ddagger": "‡",
		"ddarr": "⇊",
		"DD": "ⅅ",
		"dd": "ⅆ",
		"DDotrahd": "⤑",
		"ddotseq": "⩷",
		"deg": "°",
		"Del": "∇",
		"Delta": "Δ",
		"delta": "δ",
		"demptyv": "⦱",
		"dfisht": "⥿",
		"Dfr": "𝔇",
		"dfr": "𝔡",
		"dHar": "⥥",
		"dharl": "⇃",
		"dharr": "⇂",
		"DiacriticalAcute": "´",
		"DiacriticalDot": "˙",
		"DiacriticalDoubleAcute": "˝",
		"DiacriticalGrave": "`",
		"DiacriticalTilde": "˜",
		"diam": "⋄",
		"diamond": "⋄",
		"Diamond": "⋄",
		"diamondsuit": "♦",
		"diams": "♦",
		"die": "¨",
		"DifferentialD": "ⅆ",
		"digamma": "ϝ",
		"disin": "⋲",
		"div": "÷",
		"divide": "÷",
		"divideontimes": "⋇",
		"divonx": "⋇",
		"DJcy": "Ђ",
		"djcy": "ђ",
		"dlcorn": "⌞",
		"dlcrop": "⌍",
		"dollar": "$",
		"Dopf": "𝔻",
		"dopf": "𝕕",
		"Dot": "¨",
		"dot": "˙",
		"DotDot": "⃜",
		"doteq": "≐",
		"doteqdot": "≑",
		"DotEqual": "≐",
		"dotminus": "∸",
		"dotplus": "∔",
		"dotsquare": "⊡",
		"doublebarwedge": "⌆",
		"DoubleContourIntegral": "∯",
		"DoubleDot": "¨",
		"DoubleDownArrow": "⇓",
		"DoubleLeftArrow": "⇐",
		"DoubleLeftRightArrow": "⇔",
		"DoubleLeftTee": "⫤",
		"DoubleLongLeftArrow": "⟸",
		"DoubleLongLeftRightArrow": "⟺",
		"DoubleLongRightArrow": "⟹",
		"DoubleRightArrow": "⇒",
		"DoubleRightTee": "⊨",
		"DoubleUpArrow": "⇑",
		"DoubleUpDownArrow": "⇕",
		"DoubleVerticalBar": "∥",
		"DownArrowBar": "⤓",
		"downarrow": "↓",
		"DownArrow": "↓",
		"Downarrow": "⇓",
		"DownArrowUpArrow": "⇵",
		"DownBreve": "̑",
		"downdownarrows": "⇊",
		"downharpoonleft": "⇃",
		"downharpoonright": "⇂",
		"DownLeftRightVector": "⥐",
		"DownLeftTeeVector": "⥞",
		"DownLeftVectorBar": "⥖",
		"DownLeftVector": "↽",
		"DownRightTeeVector": "⥟",
		"DownRightVectorBar": "⥗",
		"DownRightVector": "⇁",
		"DownTeeArrow": "↧",
		"DownTee": "⊤",
		"drbkarow": "⤐",
		"drcorn": "⌟",
		"drcrop": "⌌",
		"Dscr": "𝒟",
		"dscr": "𝒹",
		"DScy": "Ѕ",
		"dscy": "ѕ",
		"dsol": "⧶",
		"Dstrok": "Đ",
		"dstrok": "đ",
		"dtdot": "⋱",
		"dtri": "▿",
		"dtrif": "▾",
		"duarr": "⇵",
		"duhar": "⥯",
		"dwangle": "⦦",
		"DZcy": "Џ",
		"dzcy": "џ",
		"dzigrarr": "⟿",
		"Eacute": "É",
		"eacute": "é",
		"easter": "⩮",
		"Ecaron": "Ě",
		"ecaron": "ě",
		"Ecirc": "Ê",
		"ecirc": "ê",
		"ecir": "≖",
		"ecolon": "≕",
		"Ecy": "Э",
		"ecy": "э",
		"eDDot": "⩷",
		"Edot": "Ė",
		"edot": "ė",
		"eDot": "≑",
		"ee": "ⅇ",
		"efDot": "≒",
		"Efr": "𝔈",
		"efr": "𝔢",
		"eg": "⪚",
		"Egrave": "È",
		"egrave": "è",
		"egs": "⪖",
		"egsdot": "⪘",
		"el": "⪙",
		"Element": "∈",
		"elinters": "⏧",
		"ell": "ℓ",
		"els": "⪕",
		"elsdot": "⪗",
		"Emacr": "Ē",
		"emacr": "ē",
		"empty": "∅",
		"emptyset": "∅",
		"EmptySmallSquare": "◻",
		"emptyv": "∅",
		"EmptyVerySmallSquare": "▫",
		"emsp13": " ",
		"emsp14": " ",
		"emsp": " ",
		"ENG": "Ŋ",
		"eng": "ŋ",
		"ensp": " ",
		"Eogon": "Ę",
		"eogon": "ę",
		"Eopf": "𝔼",
		"eopf": "𝕖",
		"epar": "⋕",
		"eparsl": "⧣",
		"eplus": "⩱",
		"epsi": "ε",
		"Epsilon": "Ε",
		"epsilon": "ε",
		"epsiv": "ϵ",
		"eqcirc": "≖",
		"eqcolon": "≕",
		"eqsim": "≂",
		"eqslantgtr": "⪖",
		"eqslantless": "⪕",
		"Equal": "⩵",
		"equals": "=",
		"EqualTilde": "≂",
		"equest": "≟",
		"Equilibrium": "⇌",
		"equiv": "≡",
		"equivDD": "⩸",
		"eqvparsl": "⧥",
		"erarr": "⥱",
		"erDot": "≓",
		"escr": "ℯ",
		"Escr": "ℰ",
		"esdot": "≐",
		"Esim": "⩳",
		"esim": "≂",
		"Eta": "Η",
		"eta": "η",
		"ETH": "Ð",
		"eth": "ð",
		"Euml": "Ë",
		"euml": "ë",
		"euro": "€",
		"excl": "!",
		"exist": "∃",
		"Exists": "∃",
		"expectation": "ℰ",
		"exponentiale": "ⅇ",
		"ExponentialE": "ⅇ",
		"fallingdotseq": "≒",
		"Fcy": "Ф",
		"fcy": "ф",
		"female": "♀",
		"ffilig": "ﬃ",
		"fflig": "ﬀ",
		"ffllig": "ﬄ",
		"Ffr": "𝔉",
		"ffr": "𝔣",
		"filig": "ﬁ",
		"FilledSmallSquare": "◼",
		"FilledVerySmallSquare": "▪",
		"fjlig": "fj",
		"flat": "♭",
		"fllig": "ﬂ",
		"fltns": "▱",
		"fnof": "ƒ",
		"Fopf": "𝔽",
		"fopf": "𝕗",
		"forall": "∀",
		"ForAll": "∀",
		"fork": "⋔",
		"forkv": "⫙",
		"Fouriertrf": "ℱ",
		"fpartint": "⨍",
		"frac12": "½",
		"frac13": "⅓",
		"frac14": "¼",
		"frac15": "⅕",
		"frac16": "⅙",
		"frac18": "⅛",
		"frac23": "⅔",
		"frac25": "⅖",
		"frac34": "¾",
		"frac35": "⅗",
		"frac38": "⅜",
		"frac45": "⅘",
		"frac56": "⅚",
		"frac58": "⅝",
		"frac78": "⅞",
		"frasl": "⁄",
		"frown": "⌢",
		"fscr": "𝒻",
		"Fscr": "ℱ",
		"gacute": "ǵ",
		"Gamma": "Γ",
		"gamma": "γ",
		"Gammad": "Ϝ",
		"gammad": "ϝ",
		"gap": "⪆",
		"Gbreve": "Ğ",
		"gbreve": "ğ",
		"Gcedil": "Ģ",
		"Gcirc": "Ĝ",
		"gcirc": "ĝ",
		"Gcy": "Г",
		"gcy": "г",
		"Gdot": "Ġ",
		"gdot": "ġ",
		"ge": "≥",
		"gE": "≧",
		"gEl": "⪌",
		"gel": "⋛",
		"geq": "≥",
		"geqq": "≧",
		"geqslant": "⩾",
		"gescc": "⪩",
		"ges": "⩾",
		"gesdot": "⪀",
		"gesdoto": "⪂",
		"gesdotol": "⪄",
		"gesl": "⋛︀",
		"gesles": "⪔",
		"Gfr": "𝔊",
		"gfr": "𝔤",
		"gg": "≫",
		"Gg": "⋙",
		"ggg": "⋙",
		"gimel": "ℷ",
		"GJcy": "Ѓ",
		"gjcy": "ѓ",
		"gla": "⪥",
		"gl": "≷",
		"glE": "⪒",
		"glj": "⪤",
		"gnap": "⪊",
		"gnapprox": "⪊",
		"gne": "⪈",
		"gnE": "≩",
		"gneq": "⪈",
		"gneqq": "≩",
		"gnsim": "⋧",
		"Gopf": "𝔾",
		"gopf": "𝕘",
		"grave": "`",
		"GreaterEqual": "≥",
		"GreaterEqualLess": "⋛",
		"GreaterFullEqual": "≧",
		"GreaterGreater": "⪢",
		"GreaterLess": "≷",
		"GreaterSlantEqual": "⩾",
		"GreaterTilde": "≳",
		"Gscr": "𝒢",
		"gscr": "ℊ",
		"gsim": "≳",
		"gsime": "⪎",
		"gsiml": "⪐",
		"gtcc": "⪧",
		"gtcir": "⩺",
		"gt": ">",
		"GT": ">",
		"Gt": "≫",
		"gtdot": "⋗",
		"gtlPar": "⦕",
		"gtquest": "⩼",
		"gtrapprox": "⪆",
		"gtrarr": "⥸",
		"gtrdot": "⋗",
		"gtreqless": "⋛",
		"gtreqqless": "⪌",
		"gtrless": "≷",
		"gtrsim": "≳",
		"gvertneqq": "≩︀",
		"gvnE": "≩︀",
		"Hacek": "ˇ",
		"hairsp": " ",
		"half": "½",
		"hamilt": "ℋ",
		"HARDcy": "Ъ",
		"hardcy": "ъ",
		"harrcir": "⥈",
		"harr": "↔",
		"hArr": "⇔",
		"harrw": "↭",
		"Hat": "^",
		"hbar": "ℏ",
		"Hcirc": "Ĥ",
		"hcirc": "ĥ",
		"hearts": "♥",
		"heartsuit": "♥",
		"hellip": "…",
		"hercon": "⊹",
		"hfr": "𝔥",
		"Hfr": "ℌ",
		"HilbertSpace": "ℋ",
		"hksearow": "⤥",
		"hkswarow": "⤦",
		"hoarr": "⇿",
		"homtht": "∻",
		"hookleftarrow": "↩",
		"hookrightarrow": "↪",
		"hopf": "𝕙",
		"Hopf": "ℍ",
		"horbar": "―",
		"HorizontalLine": "─",
		"hscr": "𝒽",
		"Hscr": "ℋ",
		"hslash": "ℏ",
		"Hstrok": "Ħ",
		"hstrok": "ħ",
		"HumpDownHump": "≎",
		"HumpEqual": "≏",
		"hybull": "⁃",
		"hyphen": "‐",
		"Iacute": "Í",
		"iacute": "í",
		"ic": "⁣",
		"Icirc": "Î",
		"icirc": "î",
		"Icy": "И",
		"icy": "и",
		"Idot": "İ",
		"IEcy": "Е",
		"iecy": "е",
		"iexcl": "¡",
		"iff": "⇔",
		"ifr": "𝔦",
		"Ifr": "ℑ",
		"Igrave": "Ì",
		"igrave": "ì",
		"ii": "ⅈ",
		"iiiint": "⨌",
		"iiint": "∭",
		"iinfin": "⧜",
		"iiota": "℩",
		"IJlig": "Ĳ",
		"ijlig": "ĳ",
		"Imacr": "Ī",
		"imacr": "ī",
		"image": "ℑ",
		"ImaginaryI": "ⅈ",
		"imagline": "ℐ",
		"imagpart": "ℑ",
		"imath": "ı",
		"Im": "ℑ",
		"imof": "⊷",
		"imped": "Ƶ",
		"Implies": "⇒",
		"incare": "℅",
		"in": "∈",
		"infin": "∞",
		"infintie": "⧝",
		"inodot": "ı",
		"intcal": "⊺",
		"int": "∫",
		"Int": "∬",
		"integers": "ℤ",
		"Integral": "∫",
		"intercal": "⊺",
		"Intersection": "⋂",
		"intlarhk": "⨗",
		"intprod": "⨼",
		"InvisibleComma": "⁣",
		"InvisibleTimes": "⁢",
		"IOcy": "Ё",
		"iocy": "ё",
		"Iogon": "Į",
		"iogon": "į",
		"Iopf": "𝕀",
		"iopf": "𝕚",
		"Iota": "Ι",
		"iota": "ι",
		"iprod": "⨼",
		"iquest": "¿",
		"iscr": "𝒾",
		"Iscr": "ℐ",
		"isin": "∈",
		"isindot": "⋵",
		"isinE": "⋹",
		"isins": "⋴",
		"isinsv": "⋳",
		"isinv": "∈",
		"it": "⁢",
		"Itilde": "Ĩ",
		"itilde": "ĩ",
		"Iukcy": "І",
		"iukcy": "і",
		"Iuml": "Ï",
		"iuml": "ï",
		"Jcirc": "Ĵ",
		"jcirc": "ĵ",
		"Jcy": "Й",
		"jcy": "й",
		"Jfr": "𝔍",
		"jfr": "𝔧",
		"jmath": "ȷ",
		"Jopf": "𝕁",
		"jopf": "𝕛",
		"Jscr": "𝒥",
		"jscr": "𝒿",
		"Jsercy": "Ј",
		"jsercy": "ј",
		"Jukcy": "Є",
		"jukcy": "є",
		"Kappa": "Κ",
		"kappa": "κ",
		"kappav": "ϰ",
		"Kcedil": "Ķ",
		"kcedil": "ķ",
		"Kcy": "К",
		"kcy": "к",
		"Kfr": "𝔎",
		"kfr": "𝔨",
		"kgreen": "ĸ",
		"KHcy": "Х",
		"khcy": "х",
		"KJcy": "Ќ",
		"kjcy": "ќ",
		"Kopf": "𝕂",
		"kopf": "𝕜",
		"Kscr": "𝒦",
		"kscr": "𝓀",
		"lAarr": "⇚",
		"Lacute": "Ĺ",
		"lacute": "ĺ",
		"laemptyv": "⦴",
		"lagran": "ℒ",
		"Lambda": "Λ",
		"lambda": "λ",
		"lang": "⟨",
		"Lang": "⟪",
		"langd": "⦑",
		"langle": "⟨",
		"lap": "⪅",
		"Laplacetrf": "ℒ",
		"laquo": "«",
		"larrb": "⇤",
		"larrbfs": "⤟",
		"larr": "←",
		"Larr": "↞",
		"lArr": "⇐",
		"larrfs": "⤝",
		"larrhk": "↩",
		"larrlp": "↫",
		"larrpl": "⤹",
		"larrsim": "⥳",
		"larrtl": "↢",
		"latail": "⤙",
		"lAtail": "⤛",
		"lat": "⪫",
		"late": "⪭",
		"lates": "⪭︀",
		"lbarr": "⤌",
		"lBarr": "⤎",
		"lbbrk": "❲",
		"lbrace": "{",
		"lbrack": "[",
		"lbrke": "⦋",
		"lbrksld": "⦏",
		"lbrkslu": "⦍",
		"Lcaron": "Ľ",
		"lcaron": "ľ",
		"Lcedil": "Ļ",
		"lcedil": "ļ",
		"lceil": "⌈",
		"lcub": "{",
		"Lcy": "Л",
		"lcy": "л",
		"ldca": "⤶",
		"ldquo": "“",
		"ldquor": "„",
		"ldrdhar": "⥧",
		"ldrushar": "⥋",
		"ldsh": "↲",
		"le": "≤",
		"lE": "≦",
		"LeftAngleBracket": "⟨",
		"LeftArrowBar": "⇤",
		"leftarrow": "←",
		"LeftArrow": "←",
		"Leftarrow": "⇐",
		"LeftArrowRightArrow": "⇆",
		"leftarrowtail": "↢",
		"LeftCeiling": "⌈",
		"LeftDoubleBracket": "⟦",
		"LeftDownTeeVector": "⥡",
		"LeftDownVectorBar": "⥙",
		"LeftDownVector": "⇃",
		"LeftFloor": "⌊",
		"leftharpoondown": "↽",
		"leftharpoonup": "↼",
		"leftleftarrows": "⇇",
		"leftrightarrow": "↔",
		"LeftRightArrow": "↔",
		"Leftrightarrow": "⇔",
		"leftrightarrows": "⇆",
		"leftrightharpoons": "⇋",
		"leftrightsquigarrow": "↭",
		"LeftRightVector": "⥎",
		"LeftTeeArrow": "↤",
		"LeftTee": "⊣",
		"LeftTeeVector": "⥚",
		"leftthreetimes": "⋋",
		"LeftTriangleBar": "⧏",
		"LeftTriangle": "⊲",
		"LeftTriangleEqual": "⊴",
		"LeftUpDownVector": "⥑",
		"LeftUpTeeVector": "⥠",
		"LeftUpVectorBar": "⥘",
		"LeftUpVector": "↿",
		"LeftVectorBar": "⥒",
		"LeftVector": "↼",
		"lEg": "⪋",
		"leg": "⋚",
		"leq": "≤",
		"leqq": "≦",
		"leqslant": "⩽",
		"lescc": "⪨",
		"les": "⩽",
		"lesdot": "⩿",
		"lesdoto": "⪁",
		"lesdotor": "⪃",
		"lesg": "⋚︀",
		"lesges": "⪓",
		"lessapprox": "⪅",
		"lessdot": "⋖",
		"lesseqgtr": "⋚",
		"lesseqqgtr": "⪋",
		"LessEqualGreater": "⋚",
		"LessFullEqual": "≦",
		"LessGreater": "≶",
		"lessgtr": "≶",
		"LessLess": "⪡",
		"lesssim": "≲",
		"LessSlantEqual": "⩽",
		"LessTilde": "≲",
		"lfisht": "⥼",
		"lfloor": "⌊",
		"Lfr": "𝔏",
		"lfr": "𝔩",
		"lg": "≶",
		"lgE": "⪑",
		"lHar": "⥢",
		"lhard": "↽",
		"lharu": "↼",
		"lharul": "⥪",
		"lhblk": "▄",
		"LJcy": "Љ",
		"ljcy": "љ",
		"llarr": "⇇",
		"ll": "≪",
		"Ll": "⋘",
		"llcorner": "⌞",
		"Lleftarrow": "⇚",
		"llhard": "⥫",
		"lltri": "◺",
		"Lmidot": "Ŀ",
		"lmidot": "ŀ",
		"lmoustache": "⎰",
		"lmoust": "⎰",
		"lnap": "⪉",
		"lnapprox": "⪉",
		"lne": "⪇",
		"lnE": "≨",
		"lneq": "⪇",
		"lneqq": "≨",
		"lnsim": "⋦",
		"loang": "⟬",
		"loarr": "⇽",
		"lobrk": "⟦",
		"longleftarrow": "⟵",
		"LongLeftArrow": "⟵",
		"Longleftarrow": "⟸",
		"longleftrightarrow": "⟷",
		"LongLeftRightArrow": "⟷",
		"Longleftrightarrow": "⟺",
		"longmapsto": "⟼",
		"longrightarrow": "⟶",
		"LongRightArrow": "⟶",
		"Longrightarrow": "⟹",
		"looparrowleft": "↫",
		"looparrowright": "↬",
		"lopar": "⦅",
		"Lopf": "𝕃",
		"lopf": "𝕝",
		"loplus": "⨭",
		"lotimes": "⨴",
		"lowast": "∗",
		"lowbar": "_",
		"LowerLeftArrow": "↙",
		"LowerRightArrow": "↘",
		"loz": "◊",
		"lozenge": "◊",
		"lozf": "⧫",
		"lpar": "(",
		"lparlt": "⦓",
		"lrarr": "⇆",
		"lrcorner": "⌟",
		"lrhar": "⇋",
		"lrhard": "⥭",
		"lrm": "‎",
		"lrtri": "⊿",
		"lsaquo": "‹",
		"lscr": "𝓁",
		"Lscr": "ℒ",
		"lsh": "↰",
		"Lsh": "↰",
		"lsim": "≲",
		"lsime": "⪍",
		"lsimg": "⪏",
		"lsqb": "[",
		"lsquo": "‘",
		"lsquor": "‚",
		"Lstrok": "Ł",
		"lstrok": "ł",
		"ltcc": "⪦",
		"ltcir": "⩹",
		"lt": "<",
		"LT": "<",
		"Lt": "≪",
		"ltdot": "⋖",
		"lthree": "⋋",
		"ltimes": "⋉",
		"ltlarr": "⥶",
		"ltquest": "⩻",
		"ltri": "◃",
		"ltrie": "⊴",
		"ltrif": "◂",
		"ltrPar": "⦖",
		"lurdshar": "⥊",
		"luruhar": "⥦",
		"lvertneqq": "≨︀",
		"lvnE": "≨︀",
		"macr": "¯",
		"male": "♂",
		"malt": "✠",
		"maltese": "✠",
		"Map": "⤅",
		"map": "↦",
		"mapsto": "↦",
		"mapstodown": "↧",
		"mapstoleft": "↤",
		"mapstoup": "↥",
		"marker": "▮",
		"mcomma": "⨩",
		"Mcy": "М",
		"mcy": "м",
		"mdash": "—",
		"mDDot": "∺",
		"measuredangle": "∡",
		"MediumSpace": " ",
		"Mellintrf": "ℳ",
		"Mfr": "𝔐",
		"mfr": "𝔪",
		"mho": "℧",
		"micro": "µ",
		"midast": "*",
		"midcir": "⫰",
		"mid": "∣",
		"middot": "·",
		"minusb": "⊟",
		"minus": "−",
		"minusd": "∸",
		"minusdu": "⨪",
		"MinusPlus": "∓",
		"mlcp": "⫛",
		"mldr": "…",
		"mnplus": "∓",
		"models": "⊧",
		"Mopf": "𝕄",
		"mopf": "𝕞",
		"mp": "∓",
		"mscr": "𝓂",
		"Mscr": "ℳ",
		"mstpos": "∾",
		"Mu": "Μ",
		"mu": "μ",
		"multimap": "⊸",
		"mumap": "⊸",
		"nabla": "∇",
		"Nacute": "Ń",
		"nacute": "ń",
		"nang": "∠⃒",
		"nap": "≉",
		"napE": "⩰̸",
		"napid": "≋̸",
		"napos": "ŉ",
		"napprox": "≉",
		"natural": "♮",
		"naturals": "ℕ",
		"natur": "♮",
		"nbsp": " ",
		"nbump": "≎̸",
		"nbumpe": "≏̸",
		"ncap": "⩃",
		"Ncaron": "Ň",
		"ncaron": "ň",
		"Ncedil": "Ņ",
		"ncedil": "ņ",
		"ncong": "≇",
		"ncongdot": "⩭̸",
		"ncup": "⩂",
		"Ncy": "Н",
		"ncy": "н",
		"ndash": "–",
		"nearhk": "⤤",
		"nearr": "↗",
		"neArr": "⇗",
		"nearrow": "↗",
		"ne": "≠",
		"nedot": "≐̸",
		"NegativeMediumSpace": "​",
		"NegativeThickSpace": "​",
		"NegativeThinSpace": "​",
		"NegativeVeryThinSpace": "​",
		"nequiv": "≢",
		"nesear": "⤨",
		"nesim": "≂̸",
		"NestedGreaterGreater": "≫",
		"NestedLessLess": "≪",
		"NewLine": "\n",
		"nexist": "∄",
		"nexists": "∄",
		"Nfr": "𝔑",
		"nfr": "𝔫",
		"ngE": "≧̸",
		"nge": "≱",
		"ngeq": "≱",
		"ngeqq": "≧̸",
		"ngeqslant": "⩾̸",
		"nges": "⩾̸",
		"nGg": "⋙̸",
		"ngsim": "≵",
		"nGt": "≫⃒",
		"ngt": "≯",
		"ngtr": "≯",
		"nGtv": "≫̸",
		"nharr": "↮",
		"nhArr": "⇎",
		"nhpar": "⫲",
		"ni": "∋",
		"nis": "⋼",
		"nisd": "⋺",
		"niv": "∋",
		"NJcy": "Њ",
		"njcy": "њ",
		"nlarr": "↚",
		"nlArr": "⇍",
		"nldr": "‥",
		"nlE": "≦̸",
		"nle": "≰",
		"nleftarrow": "↚",
		"nLeftarrow": "⇍",
		"nleftrightarrow": "↮",
		"nLeftrightarrow": "⇎",
		"nleq": "≰",
		"nleqq": "≦̸",
		"nleqslant": "⩽̸",
		"nles": "⩽̸",
		"nless": "≮",
		"nLl": "⋘̸",
		"nlsim": "≴",
		"nLt": "≪⃒",
		"nlt": "≮",
		"nltri": "⋪",
		"nltrie": "⋬",
		"nLtv": "≪̸",
		"nmid": "∤",
		"NoBreak": "⁠",
		"NonBreakingSpace": " ",
		"nopf": "𝕟",
		"Nopf": "ℕ",
		"Not": "⫬",
		"not": "¬",
		"NotCongruent": "≢",
		"NotCupCap": "≭",
		"NotDoubleVerticalBar": "∦",
		"NotElement": "∉",
		"NotEqual": "≠",
		"NotEqualTilde": "≂̸",
		"NotExists": "∄",
		"NotGreater": "≯",
		"NotGreaterEqual": "≱",
		"NotGreaterFullEqual": "≧̸",
		"NotGreaterGreater": "≫̸",
		"NotGreaterLess": "≹",
		"NotGreaterSlantEqual": "⩾̸",
		"NotGreaterTilde": "≵",
		"NotHumpDownHump": "≎̸",
		"NotHumpEqual": "≏̸",
		"notin": "∉",
		"notindot": "⋵̸",
		"notinE": "⋹̸",
		"notinva": "∉",
		"notinvb": "⋷",
		"notinvc": "⋶",
		"NotLeftTriangleBar": "⧏̸",
		"NotLeftTriangle": "⋪",
		"NotLeftTriangleEqual": "⋬",
		"NotLess": "≮",
		"NotLessEqual": "≰",
		"NotLessGreater": "≸",
		"NotLessLess": "≪̸",
		"NotLessSlantEqual": "⩽̸",
		"NotLessTilde": "≴",
		"NotNestedGreaterGreater": "⪢̸",
		"NotNestedLessLess": "⪡̸",
		"notni": "∌",
		"notniva": "∌",
		"notnivb": "⋾",
		"notnivc": "⋽",
		"NotPrecedes": "⊀",
		"NotPrecedesEqual": "⪯̸",
		"NotPrecedesSlantEqual": "⋠",
		"NotReverseElement": "∌",
		"NotRightTriangleBar": "⧐̸",
		"NotRightTriangle": "⋫",
		"NotRightTriangleEqual": "⋭",
		"NotSquareSubset": "⊏̸",
		"NotSquareSubsetEqual": "⋢",
		"NotSquareSuperset": "⊐̸",
		"NotSquareSupersetEqual": "⋣",
		"NotSubset": "⊂⃒",
		"NotSubsetEqual": "⊈",
		"NotSucceeds": "⊁",
		"NotSucceedsEqual": "⪰̸",
		"NotSucceedsSlantEqual": "⋡",
		"NotSucceedsTilde": "≿̸",
		"NotSuperset": "⊃⃒",
		"NotSupersetEqual": "⊉",
		"NotTilde": "≁",
		"NotTildeEqual": "≄",
		"NotTildeFullEqual": "≇",
		"NotTildeTilde": "≉",
		"NotVerticalBar": "∤",
		"nparallel": "∦",
		"npar": "∦",
		"nparsl": "⫽⃥",
		"npart": "∂̸",
		"npolint": "⨔",
		"npr": "⊀",
		"nprcue": "⋠",
		"nprec": "⊀",
		"npreceq": "⪯̸",
		"npre": "⪯̸",
		"nrarrc": "⤳̸",
		"nrarr": "↛",
		"nrArr": "⇏",
		"nrarrw": "↝̸",
		"nrightarrow": "↛",
		"nRightarrow": "⇏",
		"nrtri": "⋫",
		"nrtrie": "⋭",
		"nsc": "⊁",
		"nsccue": "⋡",
		"nsce": "⪰̸",
		"Nscr": "𝒩",
		"nscr": "𝓃",
		"nshortmid": "∤",
		"nshortparallel": "∦",
		"nsim": "≁",
		"nsime": "≄",
		"nsimeq": "≄",
		"nsmid": "∤",
		"nspar": "∦",
		"nsqsube": "⋢",
		"nsqsupe": "⋣",
		"nsub": "⊄",
		"nsubE": "⫅̸",
		"nsube": "⊈",
		"nsubset": "⊂⃒",
		"nsubseteq": "⊈",
		"nsubseteqq": "⫅̸",
		"nsucc": "⊁",
		"nsucceq": "⪰̸",
		"nsup": "⊅",
		"nsupE": "⫆̸",
		"nsupe": "⊉",
		"nsupset": "⊃⃒",
		"nsupseteq": "⊉",
		"nsupseteqq": "⫆̸",
		"ntgl": "≹",
		"Ntilde": "Ñ",
		"ntilde": "ñ",
		"ntlg": "≸",
		"ntriangleleft": "⋪",
		"ntrianglelefteq": "⋬",
		"ntriangleright": "⋫",
		"ntrianglerighteq": "⋭",
		"Nu": "Ν",
		"nu": "ν",
		"num": "#",
		"numero": "№",
		"numsp": " ",
		"nvap": "≍⃒",
		"nvdash": "⊬",
		"nvDash": "⊭",
		"nVdash": "⊮",
		"nVDash": "⊯",
		"nvge": "≥⃒",
		"nvgt": ">⃒",
		"nvHarr": "⤄",
		"nvinfin": "⧞",
		"nvlArr": "⤂",
		"nvle": "≤⃒",
		"nvlt": "<⃒",
		"nvltrie": "⊴⃒",
		"nvrArr": "⤃",
		"nvrtrie": "⊵⃒",
		"nvsim": "∼⃒",
		"nwarhk": "⤣",
		"nwarr": "↖",
		"nwArr": "⇖",
		"nwarrow": "↖",
		"nwnear": "⤧",
		"Oacute": "Ó",
		"oacute": "ó",
		"oast": "⊛",
		"Ocirc": "Ô",
		"ocirc": "ô",
		"ocir": "⊚",
		"Ocy": "О",
		"ocy": "о",
		"odash": "⊝",
		"Odblac": "Ő",
		"odblac": "ő",
		"odiv": "⨸",
		"odot": "⊙",
		"odsold": "⦼",
		"OElig": "Œ",
		"oelig": "œ",
		"ofcir": "⦿",
		"Ofr": "𝔒",
		"ofr": "𝔬",
		"ogon": "˛",
		"Ograve": "Ò",
		"ograve": "ò",
		"ogt": "⧁",
		"ohbar": "⦵",
		"ohm": "Ω",
		"oint": "∮",
		"olarr": "↺",
		"olcir": "⦾",
		"olcross": "⦻",
		"oline": "‾",
		"olt": "⧀",
		"Omacr": "Ō",
		"omacr": "ō",
		"Omega": "Ω",
		"omega": "ω",
		"Omicron": "Ο",
		"omicron": "ο",
		"omid": "⦶",
		"ominus": "⊖",
		"Oopf": "𝕆",
		"oopf": "𝕠",
		"opar": "⦷",
		"OpenCurlyDoubleQuote": "“",
		"OpenCurlyQuote": "‘",
		"operp": "⦹",
		"oplus": "⊕",
		"orarr": "↻",
		"Or": "⩔",
		"or": "∨",
		"ord": "⩝",
		"order": "ℴ",
		"orderof": "ℴ",
		"ordf": "ª",
		"ordm": "º",
		"origof": "⊶",
		"oror": "⩖",
		"orslope": "⩗",
		"orv": "⩛",
		"oS": "Ⓢ",
		"Oscr": "𝒪",
		"oscr": "ℴ",
		"Oslash": "Ø",
		"oslash": "ø",
		"osol": "⊘",
		"Otilde": "Õ",
		"otilde": "õ",
		"otimesas": "⨶",
		"Otimes": "⨷",
		"otimes": "⊗",
		"Ouml": "Ö",
		"ouml": "ö",
		"ovbar": "⌽",
		"OverBar": "‾",
		"OverBrace": "⏞",
		"OverBracket": "⎴",
		"OverParenthesis": "⏜",
		"para": "¶",
		"parallel": "∥",
		"par": "∥",
		"parsim": "⫳",
		"parsl": "⫽",
		"part": "∂",
		"PartialD": "∂",
		"Pcy": "П",
		"pcy": "п",
		"percnt": "%",
		"period": ".",
		"permil": "‰",
		"perp": "⊥",
		"pertenk": "‱",
		"Pfr": "𝔓",
		"pfr": "𝔭",
		"Phi": "Φ",
		"phi": "φ",
		"phiv": "ϕ",
		"phmmat": "ℳ",
		"phone": "☎",
		"Pi": "Π",
		"pi": "π",
		"pitchfork": "⋔",
		"piv": "ϖ",
		"planck": "ℏ",
		"planckh": "ℎ",
		"plankv": "ℏ",
		"plusacir": "⨣",
		"plusb": "⊞",
		"pluscir": "⨢",
		"plus": "+",
		"plusdo": "∔",
		"plusdu": "⨥",
		"pluse": "⩲",
		"PlusMinus": "±",
		"plusmn": "±",
		"plussim": "⨦",
		"plustwo": "⨧",
		"pm": "±",
		"Poincareplane": "ℌ",
		"pointint": "⨕",
		"popf": "𝕡",
		"Popf": "ℙ",
		"pound": "£",
		"prap": "⪷",
		"Pr": "⪻",
		"pr": "≺",
		"prcue": "≼",
		"precapprox": "⪷",
		"prec": "≺",
		"preccurlyeq": "≼",
		"Precedes": "≺",
		"PrecedesEqual": "⪯",
		"PrecedesSlantEqual": "≼",
		"PrecedesTilde": "≾",
		"preceq": "⪯",
		"precnapprox": "⪹",
		"precneqq": "⪵",
		"precnsim": "⋨",
		"pre": "⪯",
		"prE": "⪳",
		"precsim": "≾",
		"prime": "′",
		"Prime": "″",
		"primes": "ℙ",
		"prnap": "⪹",
		"prnE": "⪵",
		"prnsim": "⋨",
		"prod": "∏",
		"Product": "∏",
		"profalar": "⌮",
		"profline": "⌒",
		"profsurf": "⌓",
		"prop": "∝",
		"Proportional": "∝",
		"Proportion": "∷",
		"propto": "∝",
		"prsim": "≾",
		"prurel": "⊰",
		"Pscr": "𝒫",
		"pscr": "𝓅",
		"Psi": "Ψ",
		"psi": "ψ",
		"puncsp": " ",
		"Qfr": "𝔔",
		"qfr": "𝔮",
		"qint": "⨌",
		"qopf": "𝕢",
		"Qopf": "ℚ",
		"qprime": "⁗",
		"Qscr": "𝒬",
		"qscr": "𝓆",
		"quaternions": "ℍ",
		"quatint": "⨖",
		"quest": "?",
		"questeq": "≟",
		"quot": "\"",
		"QUOT": "\"",
		"rAarr": "⇛",
		"race": "∽̱",
		"Racute": "Ŕ",
		"racute": "ŕ",
		"radic": "√",
		"raemptyv": "⦳",
		"rang": "⟩",
		"Rang": "⟫",
		"rangd": "⦒",
		"range": "⦥",
		"rangle": "⟩",
		"raquo": "»",
		"rarrap": "⥵",
		"rarrb": "⇥",
		"rarrbfs": "⤠",
		"rarrc": "⤳",
		"rarr": "→",
		"Rarr": "↠",
		"rArr": "⇒",
		"rarrfs": "⤞",
		"rarrhk": "↪",
		"rarrlp": "↬",
		"rarrpl": "⥅",
		"rarrsim": "⥴",
		"Rarrtl": "⤖",
		"rarrtl": "↣",
		"rarrw": "↝",
		"ratail": "⤚",
		"rAtail": "⤜",
		"ratio": "∶",
		"rationals": "ℚ",
		"rbarr": "⤍",
		"rBarr": "⤏",
		"RBarr": "⤐",
		"rbbrk": "❳",
		"rbrace": "}",
		"rbrack": "]",
		"rbrke": "⦌",
		"rbrksld": "⦎",
		"rbrkslu": "⦐",
		"Rcaron": "Ř",
		"rcaron": "ř",
		"Rcedil": "Ŗ",
		"rcedil": "ŗ",
		"rceil": "⌉",
		"rcub": "}",
		"Rcy": "Р",
		"rcy": "р",
		"rdca": "⤷",
		"rdldhar": "⥩",
		"rdquo": "”",
		"rdquor": "”",
		"rdsh": "↳",
		"real": "ℜ",
		"realine": "ℛ",
		"realpart": "ℜ",
		"reals": "ℝ",
		"Re": "ℜ",
		"rect": "▭",
		"reg": "®",
		"REG": "®",
		"ReverseElement": "∋",
		"ReverseEquilibrium": "⇋",
		"ReverseUpEquilibrium": "⥯",
		"rfisht": "⥽",
		"rfloor": "⌋",
		"rfr": "𝔯",
		"Rfr": "ℜ",
		"rHar": "⥤",
		"rhard": "⇁",
		"rharu": "⇀",
		"rharul": "⥬",
		"Rho": "Ρ",
		"rho": "ρ",
		"rhov": "ϱ",
		"RightAngleBracket": "⟩",
		"RightArrowBar": "⇥",
		"rightarrow": "→",
		"RightArrow": "→",
		"Rightarrow": "⇒",
		"RightArrowLeftArrow": "⇄",
		"rightarrowtail": "↣",
		"RightCeiling": "⌉",
		"RightDoubleBracket": "⟧",
		"RightDownTeeVector": "⥝",
		"RightDownVectorBar": "⥕",
		"RightDownVector": "⇂",
		"RightFloor": "⌋",
		"rightharpoondown": "⇁",
		"rightharpoonup": "⇀",
		"rightleftarrows": "⇄",
		"rightleftharpoons": "⇌",
		"rightrightarrows": "⇉",
		"rightsquigarrow": "↝",
		"RightTeeArrow": "↦",
		"RightTee": "⊢",
		"RightTeeVector": "⥛",
		"rightthreetimes": "⋌",
		"RightTriangleBar": "⧐",
		"RightTriangle": "⊳",
		"RightTriangleEqual": "⊵",
		"RightUpDownVector": "⥏",
		"RightUpTeeVector": "⥜",
		"RightUpVectorBar": "⥔",
		"RightUpVector": "↾",
		"RightVectorBar": "⥓",
		"RightVector": "⇀",
		"ring": "˚",
		"risingdotseq": "≓",
		"rlarr": "⇄",
		"rlhar": "⇌",
		"rlm": "‏",
		"rmoustache": "⎱",
		"rmoust": "⎱",
		"rnmid": "⫮",
		"roang": "⟭",
		"roarr": "⇾",
		"robrk": "⟧",
		"ropar": "⦆",
		"ropf": "𝕣",
		"Ropf": "ℝ",
		"roplus": "⨮",
		"rotimes": "⨵",
		"RoundImplies": "⥰",
		"rpar": ")",
		"rpargt": "⦔",
		"rppolint": "⨒",
		"rrarr": "⇉",
		"Rrightarrow": "⇛",
		"rsaquo": "›",
		"rscr": "𝓇",
		"Rscr": "ℛ",
		"rsh": "↱",
		"Rsh": "↱",
		"rsqb": "]",
		"rsquo": "’",
		"rsquor": "’",
		"rthree": "⋌",
		"rtimes": "⋊",
		"rtri": "▹",
		"rtrie": "⊵",
		"rtrif": "▸",
		"rtriltri": "⧎",
		"RuleDelayed": "⧴",
		"ruluhar": "⥨",
		"rx": "℞",
		"Sacute": "Ś",
		"sacute": "ś",
		"sbquo": "‚",
		"scap": "⪸",
		"Scaron": "Š",
		"scaron": "š",
		"Sc": "⪼",
		"sc": "≻",
		"sccue": "≽",
		"sce": "⪰",
		"scE": "⪴",
		"Scedil": "Ş",
		"scedil": "ş",
		"Scirc": "Ŝ",
		"scirc": "ŝ",
		"scnap": "⪺",
		"scnE": "⪶",
		"scnsim": "⋩",
		"scpolint": "⨓",
		"scsim": "≿",
		"Scy": "С",
		"scy": "с",
		"sdotb": "⊡",
		"sdot": "⋅",
		"sdote": "⩦",
		"searhk": "⤥",
		"searr": "↘",
		"seArr": "⇘",
		"searrow": "↘",
		"sect": "§",
		"semi": ";",
		"seswar": "⤩",
		"setminus": "∖",
		"setmn": "∖",
		"sext": "✶",
		"Sfr": "𝔖",
		"sfr": "𝔰",
		"sfrown": "⌢",
		"sharp": "♯",
		"SHCHcy": "Щ",
		"shchcy": "щ",
		"SHcy": "Ш",
		"shcy": "ш",
		"ShortDownArrow": "↓",
		"ShortLeftArrow": "←",
		"shortmid": "∣",
		"shortparallel": "∥",
		"ShortRightArrow": "→",
		"ShortUpArrow": "↑",
		"shy": "­",
		"Sigma": "Σ",
		"sigma": "σ",
		"sigmaf": "ς",
		"sigmav": "ς",
		"sim": "∼",
		"simdot": "⩪",
		"sime": "≃",
		"simeq": "≃",
		"simg": "⪞",
		"simgE": "⪠",
		"siml": "⪝",
		"simlE": "⪟",
		"simne": "≆",
		"simplus": "⨤",
		"simrarr": "⥲",
		"slarr": "←",
		"SmallCircle": "∘",
		"smallsetminus": "∖",
		"smashp": "⨳",
		"smeparsl": "⧤",
		"smid": "∣",
		"smile": "⌣",
		"smt": "⪪",
		"smte": "⪬",
		"smtes": "⪬︀",
		"SOFTcy": "Ь",
		"softcy": "ь",
		"solbar": "⌿",
		"solb": "⧄",
		"sol": "/",
		"Sopf": "𝕊",
		"sopf": "𝕤",
		"spades": "♠",
		"spadesuit": "♠",
		"spar": "∥",
		"sqcap": "⊓",
		"sqcaps": "⊓︀",
		"sqcup": "⊔",
		"sqcups": "⊔︀",
		"Sqrt": "√",
		"sqsub": "⊏",
		"sqsube": "⊑",
		"sqsubset": "⊏",
		"sqsubseteq": "⊑",
		"sqsup": "⊐",
		"sqsupe": "⊒",
		"sqsupset": "⊐",
		"sqsupseteq": "⊒",
		"square": "□",
		"Square": "□",
		"SquareIntersection": "⊓",
		"SquareSubset": "⊏",
		"SquareSubsetEqual": "⊑",
		"SquareSuperset": "⊐",
		"SquareSupersetEqual": "⊒",
		"SquareUnion": "⊔",
		"squarf": "▪",
		"squ": "□",
		"squf": "▪",
		"srarr": "→",
		"Sscr": "𝒮",
		"sscr": "𝓈",
		"ssetmn": "∖",
		"ssmile": "⌣",
		"sstarf": "⋆",
		"Star": "⋆",
		"star": "☆",
		"starf": "★",
		"straightepsilon": "ϵ",
		"straightphi": "ϕ",
		"strns": "¯",
		"sub": "⊂",
		"Sub": "⋐",
		"subdot": "⪽",
		"subE": "⫅",
		"sube": "⊆",
		"subedot": "⫃",
		"submult": "⫁",
		"subnE": "⫋",
		"subne": "⊊",
		"subplus": "⪿",
		"subrarr": "⥹",
		"subset": "⊂",
		"Subset": "⋐",
		"subseteq": "⊆",
		"subseteqq": "⫅",
		"SubsetEqual": "⊆",
		"subsetneq": "⊊",
		"subsetneqq": "⫋",
		"subsim": "⫇",
		"subsub": "⫕",
		"subsup": "⫓",
		"succapprox": "⪸",
		"succ": "≻",
		"succcurlyeq": "≽",
		"Succeeds": "≻",
		"SucceedsEqual": "⪰",
		"SucceedsSlantEqual": "≽",
		"SucceedsTilde": "≿",
		"succeq": "⪰",
		"succnapprox": "⪺",
		"succneqq": "⪶",
		"succnsim": "⋩",
		"succsim": "≿",
		"SuchThat": "∋",
		"sum": "∑",
		"Sum": "∑",
		"sung": "♪",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"sup": "⊃",
		"Sup": "⋑",
		"supdot": "⪾",
		"supdsub": "⫘",
		"supE": "⫆",
		"supe": "⊇",
		"supedot": "⫄",
		"Superset": "⊃",
		"SupersetEqual": "⊇",
		"suphsol": "⟉",
		"suphsub": "⫗",
		"suplarr": "⥻",
		"supmult": "⫂",
		"supnE": "⫌",
		"supne": "⊋",
		"supplus": "⫀",
		"supset": "⊃",
		"Supset": "⋑",
		"supseteq": "⊇",
		"supseteqq": "⫆",
		"supsetneq": "⊋",
		"supsetneqq": "⫌",
		"supsim": "⫈",
		"supsub": "⫔",
		"supsup": "⫖",
		"swarhk": "⤦",
		"swarr": "↙",
		"swArr": "⇙",
		"swarrow": "↙",
		"swnwar": "⤪",
		"szlig": "ß",
		"Tab": "\t",
		"target": "⌖",
		"Tau": "Τ",
		"tau": "τ",
		"tbrk": "⎴",
		"Tcaron": "Ť",
		"tcaron": "ť",
		"Tcedil": "Ţ",
		"tcedil": "ţ",
		"Tcy": "Т",
		"tcy": "т",
		"tdot": "⃛",
		"telrec": "⌕",
		"Tfr": "𝔗",
		"tfr": "𝔱",
		"there4": "∴",
		"therefore": "∴",
		"Therefore": "∴",
		"Theta": "Θ",
		"theta": "θ",
		"thetasym": "ϑ",
		"thetav": "ϑ",
		"thickapprox": "≈",
		"thicksim": "∼",
		"ThickSpace": "  ",
		"ThinSpace": " ",
		"thinsp": " ",
		"thkap": "≈",
		"thksim": "∼",
		"THORN": "Þ",
		"thorn": "þ",
		"tilde": "˜",
		"Tilde": "∼",
		"TildeEqual": "≃",
		"TildeFullEqual": "≅",
		"TildeTilde": "≈",
		"timesbar": "⨱",
		"timesb": "⊠",
		"times": "×",
		"timesd": "⨰",
		"tint": "∭",
		"toea": "⤨",
		"topbot": "⌶",
		"topcir": "⫱",
		"top": "⊤",
		"Topf": "𝕋",
		"topf": "𝕥",
		"topfork": "⫚",
		"tosa": "⤩",
		"tprime": "‴",
		"trade": "™",
		"TRADE": "™",
		"triangle": "▵",
		"triangledown": "▿",
		"triangleleft": "◃",
		"trianglelefteq": "⊴",
		"triangleq": "≜",
		"triangleright": "▹",
		"trianglerighteq": "⊵",
		"tridot": "◬",
		"trie": "≜",
		"triminus": "⨺",
		"TripleDot": "⃛",
		"triplus": "⨹",
		"trisb": "⧍",
		"tritime": "⨻",
		"trpezium": "⏢",
		"Tscr": "𝒯",
		"tscr": "𝓉",
		"TScy": "Ц",
		"tscy": "ц",
		"TSHcy": "Ћ",
		"tshcy": "ћ",
		"Tstrok": "Ŧ",
		"tstrok": "ŧ",
		"twixt": "≬",
		"twoheadleftarrow": "↞",
		"twoheadrightarrow": "↠",
		"Uacute": "Ú",
		"uacute": "ú",
		"uarr": "↑",
		"Uarr": "↟",
		"uArr": "⇑",
		"Uarrocir": "⥉",
		"Ubrcy": "Ў",
		"ubrcy": "ў",
		"Ubreve": "Ŭ",
		"ubreve": "ŭ",
		"Ucirc": "Û",
		"ucirc": "û",
		"Ucy": "У",
		"ucy": "у",
		"udarr": "⇅",
		"Udblac": "Ű",
		"udblac": "ű",
		"udhar": "⥮",
		"ufisht": "⥾",
		"Ufr": "𝔘",
		"ufr": "𝔲",
		"Ugrave": "Ù",
		"ugrave": "ù",
		"uHar": "⥣",
		"uharl": "↿",
		"uharr": "↾",
		"uhblk": "▀",
		"ulcorn": "⌜",
		"ulcorner": "⌜",
		"ulcrop": "⌏",
		"ultri": "◸",
		"Umacr": "Ū",
		"umacr": "ū",
		"uml": "¨",
		"UnderBar": "_",
		"UnderBrace": "⏟",
		"UnderBracket": "⎵",
		"UnderParenthesis": "⏝",
		"Union": "⋃",
		"UnionPlus": "⊎",
		"Uogon": "Ų",
		"uogon": "ų",
		"Uopf": "𝕌",
		"uopf": "𝕦",
		"UpArrowBar": "⤒",
		"uparrow": "↑",
		"UpArrow": "↑",
		"Uparrow": "⇑",
		"UpArrowDownArrow": "⇅",
		"updownarrow": "↕",
		"UpDownArrow": "↕",
		"Updownarrow": "⇕",
		"UpEquilibrium": "⥮",
		"upharpoonleft": "↿",
		"upharpoonright": "↾",
		"uplus": "⊎",
		"UpperLeftArrow": "↖",
		"UpperRightArrow": "↗",
		"upsi": "υ",
		"Upsi": "ϒ",
		"upsih": "ϒ",
		"Upsilon": "Υ",
		"upsilon": "υ",
		"UpTeeArrow": "↥",
		"UpTee": "⊥",
		"upuparrows": "⇈",
		"urcorn": "⌝",
		"urcorner": "⌝",
		"urcrop": "⌎",
		"Uring": "Ů",
		"uring": "ů",
		"urtri": "◹",
		"Uscr": "𝒰",
		"uscr": "𝓊",
		"utdot": "⋰",
		"Utilde": "Ũ",
		"utilde": "ũ",
		"utri": "▵",
		"utrif": "▴",
		"uuarr": "⇈",
		"Uuml": "Ü",
		"uuml": "ü",
		"uwangle": "⦧",
		"vangrt": "⦜",
		"varepsilon": "ϵ",
		"varkappa": "ϰ",
		"varnothing": "∅",
		"varphi": "ϕ",
		"varpi": "ϖ",
		"varpropto": "∝",
		"varr": "↕",
		"vArr": "⇕",
		"varrho": "ϱ",
		"varsigma": "ς",
		"varsubsetneq": "⊊︀",
		"varsubsetneqq": "⫋︀",
		"varsupsetneq": "⊋︀",
		"varsupsetneqq": "⫌︀",
		"vartheta": "ϑ",
		"vartriangleleft": "⊲",
		"vartriangleright": "⊳",
		"vBar": "⫨",
		"Vbar": "⫫",
		"vBarv": "⫩",
		"Vcy": "В",
		"vcy": "в",
		"vdash": "⊢",
		"vDash": "⊨",
		"Vdash": "⊩",
		"VDash": "⊫",
		"Vdashl": "⫦",
		"veebar": "⊻",
		"vee": "∨",
		"Vee": "⋁",
		"veeeq": "≚",
		"vellip": "⋮",
		"verbar": "|",
		"Verbar": "‖",
		"vert": "|",
		"Vert": "‖",
		"VerticalBar": "∣",
		"VerticalLine": "|",
		"VerticalSeparator": "❘",
		"VerticalTilde": "≀",
		"VeryThinSpace": " ",
		"Vfr": "𝔙",
		"vfr": "𝔳",
		"vltri": "⊲",
		"vnsub": "⊂⃒",
		"vnsup": "⊃⃒",
		"Vopf": "𝕍",
		"vopf": "𝕧",
		"vprop": "∝",
		"vrtri": "⊳",
		"Vscr": "𝒱",
		"vscr": "𝓋",
		"vsubnE": "⫋︀",
		"vsubne": "⊊︀",
		"vsupnE": "⫌︀",
		"vsupne": "⊋︀",
		"Vvdash": "⊪",
		"vzigzag": "⦚",
		"Wcirc": "Ŵ",
		"wcirc": "ŵ",
		"wedbar": "⩟",
		"wedge": "∧",
		"Wedge": "⋀",
		"wedgeq": "≙",
		"weierp": "℘",
		"Wfr": "𝔚",
		"wfr": "𝔴",
		"Wopf": "𝕎",
		"wopf": "𝕨",
		"wp": "℘",
		"wr": "≀",
		"wreath": "≀",
		"Wscr": "𝒲",
		"wscr": "𝓌",
		"xcap": "⋂",
		"xcirc": "◯",
		"xcup": "⋃",
		"xdtri": "▽",
		"Xfr": "𝔛",
		"xfr": "𝔵",
		"xharr": "⟷",
		"xhArr": "⟺",
		"Xi": "Ξ",
		"xi": "ξ",
		"xlarr": "⟵",
		"xlArr": "⟸",
		"xmap": "⟼",
		"xnis": "⋻",
		"xodot": "⨀",
		"Xopf": "𝕏",
		"xopf": "𝕩",
		"xoplus": "⨁",
		"xotime": "⨂",
		"xrarr": "⟶",
		"xrArr": "⟹",
		"Xscr": "𝒳",
		"xscr": "𝓍",
		"xsqcup": "⨆",
		"xuplus": "⨄",
		"xutri": "△",
		"xvee": "⋁",
		"xwedge": "⋀",
		"Yacute": "Ý",
		"yacute": "ý",
		"YAcy": "Я",
		"yacy": "я",
		"Ycirc": "Ŷ",
		"ycirc": "ŷ",
		"Ycy": "Ы",
		"ycy": "ы",
		"yen": "¥",
		"Yfr": "𝔜",
		"yfr": "𝔶",
		"YIcy": "Ї",
		"yicy": "ї",
		"Yopf": "𝕐",
		"yopf": "𝕪",
		"Yscr": "𝒴",
		"yscr": "𝓎",
		"YUcy": "Ю",
		"yucy": "ю",
		"yuml": "ÿ",
		"Yuml": "Ÿ",
		"Zacute": "Ź",
		"zacute": "ź",
		"Zcaron": "Ž",
		"zcaron": "ž",
		"Zcy": "З",
		"zcy": "з",
		"Zdot": "Ż",
		"zdot": "ż",
		"zeetrf": "ℨ",
		"ZeroWidthSpace": "​",
		"Zeta": "Ζ",
		"zeta": "ζ",
		"zfr": "𝔷",
		"Zfr": "ℨ",
		"ZHcy": "Ж",
		"zhcy": "ж",
		"zigrarr": "⇝",
		"zopf": "𝕫",
		"Zopf": "ℤ",
		"Zscr": "𝒵",
		"zscr": "𝓏",
		"zwj": "‍",
		"zwnj": "‌"
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports=/[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDE38-\uDE3D]|\uD805[\uDCC6\uDDC1-\uDDC9\uDE41-\uDE43]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F/

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	module.exports.encode = __webpack_require__(19);
	module.exports.decode = __webpack_require__(20);
	module.exports.format = __webpack_require__(21);
	module.exports.parse  = __webpack_require__(22);


/***/ },
/* 19 */
/***/ function(module, exports) {

	
	'use strict';


	var encodeCache = {};


	// Create a lookup array where anything but characters in `chars` string
	// and alphanumeric chars is percent-encoded.
	//
	function getEncodeCache(exclude) {
	  var i, ch, cache = encodeCache[exclude];
	  if (cache) { return cache; }

	  cache = encodeCache[exclude] = [];

	  for (i = 0; i < 128; i++) {
	    ch = String.fromCharCode(i);

	    if (/^[0-9a-z]$/i.test(ch)) {
	      // always allow unencoded alphanumeric characters
	      cache.push(ch);
	    } else {
	      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
	    }
	  }

	  for (i = 0; i < exclude.length; i++) {
	    cache[exclude.charCodeAt(i)] = exclude[i];
	  }

	  return cache;
	}


	// Encode unsafe characters with percent-encoding, skipping already
	// encoded sequences.
	//
	//  - string       - string to encode
	//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
	//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
	//
	function encode(string, exclude, keepEscaped) {
	  var i, l, code, nextCode, cache,
	      result = '';

	  if (typeof exclude !== 'string') {
	    // encode(string, keepEscaped)
	    keepEscaped  = exclude;
	    exclude = encode.defaultChars;
	  }

	  if (typeof keepEscaped === 'undefined') {
	    keepEscaped = true;
	  }

	  cache = getEncodeCache(exclude);

	  for (i = 0, l = string.length; i < l; i++) {
	    code = string.charCodeAt(i);

	    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
	      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
	        result += string.slice(i, i + 3);
	        i += 2;
	        continue;
	      }
	    }

	    if (code < 128) {
	      result += cache[code];
	      continue;
	    }

	    if (code >= 0xD800 && code <= 0xDFFF) {
	      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
	        nextCode = string.charCodeAt(i + 1);
	        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
	          result += encodeURIComponent(string[i] + string[i + 1]);
	          i++;
	          continue;
	        }
	      }
	      result += '%EF%BF%BD';
	      continue;
	    }

	    result += encodeURIComponent(string[i]);
	  }

	  return result;
	}

	encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
	encode.componentChars = "-_.!~*'()";


	module.exports = encode;


/***/ },
/* 20 */
/***/ function(module, exports) {

	
	'use strict';


	/* eslint-disable no-bitwise */

	var decodeCache = {};

	function getDecodeCache(exclude) {
	  var i, ch, cache = decodeCache[exclude];
	  if (cache) { return cache; }

	  cache = decodeCache[exclude] = [];

	  for (i = 0; i < 128; i++) {
	    ch = String.fromCharCode(i);
	    cache.push(ch);
	  }

	  for (i = 0; i < exclude.length; i++) {
	    ch = exclude.charCodeAt(i);
	    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
	  }

	  return cache;
	}


	// Decode percent-encoded string.
	//
	function decode(string, exclude) {
	  var cache;

	  if (typeof exclude !== 'string') {
	    exclude = decode.defaultChars;
	  }

	  cache = getDecodeCache(exclude);

	  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
	    var i, l, b1, b2, b3, b4, chr,
	        result = '';

	    for (i = 0, l = seq.length; i < l; i += 3) {
	      b1 = parseInt(seq.slice(i + 1, i + 3), 16);

	      if (b1 < 0x80) {
	        result += cache[b1];
	        continue;
	      }

	      if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
	        // 110xxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);

	        if ((b2 & 0xC0) === 0x80) {
	          chr = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);

	          if (chr < 0x80) {
	            result += '\ufffd\ufffd';
	          } else {
	            result += String.fromCharCode(chr);
	          }

	          i += 3;
	          continue;
	        }
	      }

	      if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
	        // 1110xxxx 10xxxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	        b3 = parseInt(seq.slice(i + 7, i + 9), 16);

	        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
	          chr = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);

	          if (chr < 0x800 || (chr >= 0xD800 && chr <= 0xDFFF)) {
	            result += '\ufffd\ufffd\ufffd';
	          } else {
	            result += String.fromCharCode(chr);
	          }

	          i += 6;
	          continue;
	        }
	      }

	      if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
	        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
	        b4 = parseInt(seq.slice(i + 10, i + 12), 16);

	        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
	          chr = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);

	          if (chr < 0x10000 || chr > 0x10FFFF) {
	            result += '\ufffd\ufffd\ufffd\ufffd';
	          } else {
	            chr -= 0x10000;
	            result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
	          }

	          i += 9;
	          continue;
	        }
	      }

	      result += '\ufffd';
	    }

	    return result;
	  });
	}


	decode.defaultChars   = ';/?:@&=+$,#';
	decode.componentChars = '';


	module.exports = decode;


/***/ },
/* 21 */
/***/ function(module, exports) {

	
	'use strict';


	module.exports = function format(url) {
	  var result = '';

	  result += url.protocol || '';
	  result += url.slashes ? '//' : '';
	  result += url.auth ? url.auth + '@' : '';

	  if (url.hostname && url.hostname.indexOf(':') !== -1) {
	    // ipv6 address
	    result += '[' + url.hostname + ']';
	  } else {
	    result += url.hostname || '';
	  }

	  result += url.port ? ':' + url.port : '';
	  result += url.pathname || '';
	  result += url.search || '';
	  result += url.hash || '';

	  return result;
	};


/***/ },
/* 22 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	//
	// Changes from joyent/node:
	//
	// 1. No leading slash in paths,
	//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
	//
	// 2. Backslashes are not replaced with slashes,
	//    so `http:\\example.org\` is treated like a relative path
	//
	// 3. Trailing colon is treated like a part of the path,
	//    i.e. in `http://example.org:foo` pathname is `:foo`
	//
	// 4. Nothing is URL-encoded in the resulting object,
	//    (in joyent/node some chars in auth and paths are encoded)
	//
	// 5. `url.parse()` does not have `parseQueryString` argument
	//
	// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
	//    which can be constructed using other parts of the url.
	//


	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.pathname = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = [ '<', '>', '"', '`', ' ', '\r', '\n', '\t' ],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = [ '{', '}', '|', '\\', '^', '`' ].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = [ '\'' ].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = [ '%', '/', '?', ';', '#' ].concat(autoEscape),
	    hostEndingChars = [ '/', '?', '#' ],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    /* eslint-disable no-script-url */
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    };
	    /* eslint-enable no-script-url */

	function urlParse(url, slashesDenoteHost) {
	  if (url && url instanceof Url) { return url; }

	  var u = new Url();
	  u.parse(url, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, slashesDenoteHost) {
	  var i, l, lowerProto, hec, slashes,
	      rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    lowerProto = proto.toLowerCase();
	    this.protocol = proto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (i = 0; i < hostEndingChars.length; i++) {
	      hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
	        hostEnd = hec;
	      }
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = auth;
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (i = 0; i < nonHostChars.length; i++) {
	      hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
	        hostEnd = hec;
	      }
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1) {
	      hostEnd = rest.length;
	    }

	    if (rest[hostEnd - 1] === ':') { hostEnd--; }
	    var host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost(host);

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) { continue; }
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    }

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	    }
	  }

	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    rest = rest.slice(0, qm);
	  }
	  if (rest) { this.pathname = rest; }
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '';
	  }

	  return this;
	};

	Url.prototype.parseHost = function(host) {
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) { this.hostname = host; }
	};

	module.exports = urlParse;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports.Any = __webpack_require__(24);
	module.exports.Cc  = __webpack_require__(25);
	module.exports.Cf  = __webpack_require__(26);
	module.exports.P   = __webpack_require__(17);
	module.exports.Z   = __webpack_require__(27);


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports=/[\0-\uD7FF\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF]/

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports=/[\0-\x1F\x7F-\x9F]/

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// Just a shortcut for bulk export
	'use strict';


	exports.parseLinkLabel       = __webpack_require__(29);
	exports.parseLinkDestination = __webpack_require__(30);
	exports.parseLinkTitle       = __webpack_require__(31);


/***/ },
/* 29 */
/***/ function(module, exports) {

	// Parse link label
	//
	// this function assumes that first character ("[") already matches;
	// returns the end of the label
	//
	'use strict';

	module.exports = function parseLinkLabel(state, start, disableNested) {
	  var level, found, marker, prevPos,
	      labelEnd = -1,
	      max = state.posMax,
	      oldPos = state.pos;

	  state.pos = start + 1;
	  level = 1;

	  while (state.pos < max) {
	    marker = state.src.charCodeAt(state.pos);
	    if (marker === 0x5D /* ] */) {
	      level--;
	      if (level === 0) {
	        found = true;
	        break;
	      }
	    }

	    prevPos = state.pos;
	    state.md.inline.skipToken(state);
	    if (marker === 0x5B /* [ */) {
	      if (prevPos === state.pos - 1) {
	        // increase level if we find text `[`, which is not a part of any token
	        level++;
	      } else if (disableNested) {
	        state.pos = oldPos;
	        return -1;
	      }
	    }
	  }

	  if (found) {
	    labelEnd = state.pos;
	  }

	  // restore old state
	  state.pos = oldPos;

	  return labelEnd;
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// Parse link destination
	//
	'use strict';


	var unescapeAll   = __webpack_require__(14).unescapeAll;


	module.exports = function parseLinkDestination(str, pos, max) {
	  var code, level,
	      lines = 0,
	      start = pos,
	      result = {
	        ok: false,
	        pos: 0,
	        lines: 0,
	        str: ''
	      };

	  if (str.charCodeAt(pos) === 0x3C /* < */) {
	    pos++;
	    while (pos < max) {
	      code = str.charCodeAt(pos);
	      if (code === 0x0A /* \n */) { return result; }
	      if (code === 0x3E /* > */) {
	        result.pos = pos + 1;
	        result.str = unescapeAll(str.slice(start + 1, pos));
	        result.ok = true;
	        return result;
	      }
	      if (code === 0x5C /* \ */ && pos + 1 < max) {
	        pos += 2;
	        continue;
	      }

	      pos++;
	    }

	    // no closing '>'
	    return result;
	  }

	  // this should be ... } else { ... branch

	  level = 0;
	  while (pos < max) {
	    code = str.charCodeAt(pos);

	    if (code === 0x20) { break; }

	    // ascii control characters
	    if (code < 0x20 || code === 0x7F) { break; }

	    if (code === 0x5C /* \ */ && pos + 1 < max) {
	      pos += 2;
	      continue;
	    }

	    if (code === 0x28 /* ( */) {
	      level++;
	      if (level > 1) { break; }
	    }

	    if (code === 0x29 /* ) */) {
	      level--;
	      if (level < 0) { break; }
	    }

	    pos++;
	  }

	  if (start === pos) { return result; }

	  result.str = unescapeAll(str.slice(start, pos));
	  result.lines = lines;
	  result.pos = pos;
	  result.ok = true;
	  return result;
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Parse link title
	//
	'use strict';


	var unescapeAll = __webpack_require__(14).unescapeAll;


	module.exports = function parseLinkTitle(str, pos, max) {
	  var code,
	      marker,
	      lines = 0,
	      start = pos,
	      result = {
	        ok: false,
	        pos: 0,
	        lines: 0,
	        str: ''
	      };

	  if (pos >= max) { return result; }

	  marker = str.charCodeAt(pos);

	  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return result; }

	  pos++;

	  // if opening marker is "(", switch it to closing marker ")"
	  if (marker === 0x28) { marker = 0x29; }

	  while (pos < max) {
	    code = str.charCodeAt(pos);
	    if (code === marker) {
	      result.pos = pos + 1;
	      result.lines = lines;
	      result.str = unescapeAll(str.slice(start + 1, pos));
	      result.ok = true;
	      return result;
	    } else if (code === 0x0A) {
	      lines++;
	    } else if (code === 0x5C /* \ */ && pos + 1 < max) {
	      pos++;
	      if (str.charCodeAt(pos) === 0x0A) {
	        lines++;
	      }
	    }

	    pos++;
	  }

	  return result;
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * class Renderer
	 *
	 * Generates HTML from parsed token stream. Each instance has independent
	 * copy of rules. Those can be rewritten with ease. Also, you can add new
	 * rules if you create plugin and adds new token types.
	 **/
	'use strict';


	var assign          = __webpack_require__(14).assign;
	var unescapeAll     = __webpack_require__(14).unescapeAll;
	var escapeHtml      = __webpack_require__(14).escapeHtml;


	////////////////////////////////////////////////////////////////////////////////

	var default_rules = {};


	default_rules.code_inline = function (tokens, idx /*, options, env */) {
	  return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
	};


	default_rules.code_block = function (tokens, idx /*, options, env */) {
	  return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>\n';
	};


	default_rules.fence = function (tokens, idx, options, env, self) {
	  var token = tokens[idx],
	      info = token.info ? unescapeAll(token.info).trim() : '',
	      langName = '',
	      highlighted;

	  if (info) {
	    langName = info.split(/\s+/g)[0];
	    token.attrPush([ 'class', options.langPrefix + langName ]);
	  }

	  if (options.highlight) {
	    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
	  } else {
	    highlighted = escapeHtml(token.content);
	  }

	  return  '<pre><code' + self.renderAttrs(token) + '>'
	        + highlighted
	        + '</code></pre>\n';
	};


	default_rules.image = function (tokens, idx, options, env, self) {
	  var token = tokens[idx];

	  // "alt" attr MUST be set, even if empty. Because it's mandatory and
	  // should be placed on proper position for tests.
	  //
	  // Replace content with actual value

	  token.attrs[token.attrIndex('alt')][1] =
	    self.renderInlineAsText(token.children, options, env);

	  return self.renderToken(tokens, idx, options);
	};


	default_rules.hardbreak = function (tokens, idx, options /*, env */) {
	  return options.xhtmlOut ? '<br />\n' : '<br>\n';
	};
	default_rules.softbreak = function (tokens, idx, options /*, env */) {
	  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
	};


	default_rules.text = function (tokens, idx /*, options, env */) {
	  return escapeHtml(tokens[idx].content);
	};


	default_rules.html_block = function (tokens, idx /*, options, env */) {
	  return tokens[idx].content;
	};
	default_rules.html_inline = function (tokens, idx /*, options, env */) {
	  return tokens[idx].content;
	};


	/**
	 * new Renderer()
	 *
	 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
	 **/
	function Renderer() {

	  /**
	   * Renderer#rules -> Object
	   *
	   * Contains render rules for tokens. Can be updated and extended.
	   *
	   * ##### Example
	   *
	   * ```javascript
	   * var md = require('markdown-it')();
	   *
	   * md.renderer.rules.strong_open  = function () { return '<b>'; };
	   * md.renderer.rules.strong_close = function () { return '</b>'; };
	   *
	   * var result = md.renderInline(...);
	   * ```
	   *
	   * Each rule is called as independed static function with fixed signature:
	   *
	   * ```javascript
	   * function my_token_render(tokens, idx, options, env, renderer) {
	   *   // ...
	   *   return renderedHTML;
	   * }
	   * ```
	   *
	   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
	   * for more details and examples.
	   **/
	  this.rules = assign({}, default_rules);
	}


	/**
	 * Renderer.renderAttrs(token) -> String
	 *
	 * Render token attributes to string.
	 **/
	Renderer.prototype.renderAttrs = function renderAttrs(token) {
	  var i, l, result;

	  if (!token.attrs) { return ''; }

	  result = '';

	  for (i = 0, l = token.attrs.length; i < l; i++) {
	    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
	  }

	  return result;
	};


	/**
	 * Renderer.renderToken(tokens, idx, options) -> String
	 * - tokens (Array): list of tokens
	 * - idx (Numbed): token index to render
	 * - options (Object): params of parser instance
	 *
	 * Default token renderer. Can be overriden by custom function
	 * in [[Renderer#rules]].
	 **/
	Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
	  var nextToken,
	      result = '',
	      needLf = false,
	      token = tokens[idx];

	  // Tight list paragraphs
	  if (token.hidden) {
	    return '';
	  }

	  // Insert a newline between hidden paragraph and subsequent opening
	  // block-level tag.
	  //
	  // For example, here we should insert a newline before blockquote:
	  //  - a
	  //    >
	  //
	  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
	    result += '\n';
	  }

	  // Add token name, e.g. `<img`
	  result += (token.nesting === -1 ? '</' : '<') + token.tag;

	  // Encode attributes, e.g. `<img src="foo"`
	  result += this.renderAttrs(token);

	  // Add a slash for self-closing tags, e.g. `<img src="foo" /`
	  if (token.nesting === 0 && options.xhtmlOut) {
	    result += ' /';
	  }

	  // Check if we need to add a newline after this tag
	  if (token.block) {
	    needLf = true;

	    if (token.nesting === 1) {
	      if (idx + 1 < tokens.length) {
	        nextToken = tokens[idx + 1];

	        if (nextToken.type === 'inline' || nextToken.hidden) {
	          // Block-level tag containing an inline tag.
	          //
	          needLf = false;

	        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
	          // Opening tag + closing tag of the same type. E.g. `<li></li>`.
	          //
	          needLf = false;
	        }
	      }
	    }
	  }

	  result += needLf ? '>\n' : '>';

	  return result;
	};


	/**
	 * Renderer.renderInline(tokens, options, env) -> String
	 * - tokens (Array): list on block tokens to renter
	 * - options (Object): params of parser instance
	 * - env (Object): additional data from parsed input (references, for example)
	 *
	 * The same as [[Renderer.render]], but for single token of `inline` type.
	 **/
	Renderer.prototype.renderInline = function (tokens, options, env) {
	  var type,
	      result = '',
	      rules = this.rules;

	  for (var i = 0, len = tokens.length; i < len; i++) {
	    type = tokens[i].type;

	    if (typeof rules[type] !== 'undefined') {
	      result += rules[type](tokens, i, options, env, this);
	    } else {
	      result += this.renderToken(tokens, i, options);
	    }
	  }

	  return result;
	};


	/** internal
	 * Renderer.renderInlineAsText(tokens, options, env) -> String
	 * - tokens (Array): list on block tokens to renter
	 * - options (Object): params of parser instance
	 * - env (Object): additional data from parsed input (references, for example)
	 *
	 * Special kludge for image `alt` attributes to conform CommonMark spec.
	 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
	 * instead of simple escaping.
	 **/
	Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
	  var result = '',
	      rules = this.rules;

	  for (var i = 0, len = tokens.length; i < len; i++) {
	    if (tokens[i].type === 'text') {
	      result += rules.text(tokens, i, options, env, this);
	    } else if (tokens[i].type === 'image') {
	      result += this.renderInlineAsText(tokens[i].children, options, env);
	    }
	  }

	  return result;
	};


	/**
	 * Renderer.render(tokens, options, env) -> String
	 * - tokens (Array): list on block tokens to renter
	 * - options (Object): params of parser instance
	 * - env (Object): additional data from parsed input (references, for example)
	 *
	 * Takes token stream and generates HTML. Probably, you will never need to call
	 * this method directly.
	 **/
	Renderer.prototype.render = function (tokens, options, env) {
	  var i, len, type,
	      result = '',
	      rules = this.rules;

	  for (i = 0, len = tokens.length; i < len; i++) {
	    type = tokens[i].type;

	    if (type === 'inline') {
	      result += this.renderInline(tokens[i].children, options, env);
	    } else if (typeof rules[type] !== 'undefined') {
	      result += rules[tokens[i].type](tokens, i, options, env, this);
	    } else {
	      result += this.renderToken(tokens, i, options, env);
	    }
	  }

	  return result;
	};

	module.exports = Renderer;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/** internal
	 * class Core
	 *
	 * Top-level rules executor. Glues block/inline parsers and does intermediate
	 * transformations.
	 **/
	'use strict';


	var Ruler  = __webpack_require__(34);


	var _rules = [
	  [ 'normalize',      __webpack_require__(35)      ],
	  [ 'block',          __webpack_require__(36)          ],
	  [ 'inline',         __webpack_require__(37)         ],
	  [ 'linkify',        __webpack_require__(38)        ],
	  [ 'replacements',   __webpack_require__(39)   ],
	  [ 'smartquotes',    __webpack_require__(40)    ]
	];


	/**
	 * new Core()
	 **/
	function Core() {
	  /**
	   * Core#ruler -> Ruler
	   *
	   * [[Ruler]] instance. Keep configuration of core rules.
	   **/
	  this.ruler = new Ruler();

	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1]);
	  }
	}


	/**
	 * Core.process(state)
	 *
	 * Executes core chain rules.
	 **/
	Core.prototype.process = function (state) {
	  var i, l, rules;

	  rules = this.ruler.getRules('');

	  for (i = 0, l = rules.length; i < l; i++) {
	    rules[i](state);
	  }
	};

	Core.prototype.State = __webpack_require__(41);


	module.exports = Core;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * class Ruler
	 *
	 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
	 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
	 *
	 * - keep rules in defined order
	 * - assign the name to each rule
	 * - enable/disable rules
	 * - add/replace rules
	 * - allow assign rules to additional named chains (in the same)
	 * - cacheing lists of active rules
	 *
	 * You will not need use this class directly until write plugins. For simple
	 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
	 * [[MarkdownIt.use]].
	 **/
	'use strict';


	/**
	 * new Ruler()
	 **/
	function Ruler() {
	  // List of added rules. Each element is:
	  //
	  // {
	  //   name: XXX,
	  //   enabled: Boolean,
	  //   fn: Function(),
	  //   alt: [ name2, name3 ]
	  // }
	  //
	  this.__rules__ = [];

	  // Cached rule chains.
	  //
	  // First level - chain name, '' for default.
	  // Second level - diginal anchor for fast filtering by charcodes.
	  //
	  this.__cache__ = null;
	}

	////////////////////////////////////////////////////////////////////////////////
	// Helper methods, should not be used directly


	// Find rule index by name
	//
	Ruler.prototype.__find__ = function (name) {
	  for (var i = 0; i < this.__rules__.length; i++) {
	    if (this.__rules__[i].name === name) {
	      return i;
	    }
	  }
	  return -1;
	};


	// Build rules lookup cache
	//
	Ruler.prototype.__compile__ = function () {
	  var self = this;
	  var chains = [ '' ];

	  // collect unique names
	  self.__rules__.forEach(function (rule) {
	    if (!rule.enabled) { return; }

	    rule.alt.forEach(function (altName) {
	      if (chains.indexOf(altName) < 0) {
	        chains.push(altName);
	      }
	    });
	  });

	  self.__cache__ = {};

	  chains.forEach(function (chain) {
	    self.__cache__[chain] = [];
	    self.__rules__.forEach(function (rule) {
	      if (!rule.enabled) { return; }

	      if (chain && rule.alt.indexOf(chain) < 0) { return; }

	      self.__cache__[chain].push(rule.fn);
	    });
	  });
	};


	/**
	 * Ruler.at(name, fn [, options])
	 * - name (String): rule name to replace.
	 * - fn (Function): new rule function.
	 * - options (Object): new rule options (not mandatory).
	 *
	 * Replace rule by name with new function & options. Throws error if name not
	 * found.
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * Replace existing typorgapher replacement rule with new one:
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.core.ruler.at('replacements', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/
	Ruler.prototype.at = function (name, fn, options) {
	  var index = this.__find__(name);
	  var opt = options || {};

	  if (index === -1) { throw new Error('Parser rule not found: ' + name); }

	  this.__rules__[index].fn = fn;
	  this.__rules__[index].alt = opt.alt || [];
	  this.__cache__ = null;
	};


	/**
	 * Ruler.before(beforeName, ruleName, fn [, options])
	 * - beforeName (String): new rule will be added before this one.
	 * - ruleName (String): name of added rule.
	 * - fn (Function): rule function.
	 * - options (Object): rule options (not mandatory).
	 *
	 * Add new rule to chain before one with given name. See also
	 * [[Ruler.after]], [[Ruler.push]].
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/
	Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
	  var index = this.__find__(beforeName);
	  var opt = options || {};

	  if (index === -1) { throw new Error('Parser rule not found: ' + beforeName); }

	  this.__rules__.splice(index, 0, {
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });

	  this.__cache__ = null;
	};


	/**
	 * Ruler.after(afterName, ruleName, fn [, options])
	 * - afterName (String): new rule will be added after this one.
	 * - ruleName (String): name of added rule.
	 * - fn (Function): rule function.
	 * - options (Object): rule options (not mandatory).
	 *
	 * Add new rule to chain after one with given name. See also
	 * [[Ruler.before]], [[Ruler.push]].
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/
	Ruler.prototype.after = function (afterName, ruleName, fn, options) {
	  var index = this.__find__(afterName);
	  var opt = options || {};

	  if (index === -1) { throw new Error('Parser rule not found: ' + afterName); }

	  this.__rules__.splice(index + 1, 0, {
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });

	  this.__cache__ = null;
	};

	/**
	 * Ruler.push(ruleName, fn [, options])
	 * - ruleName (String): name of added rule.
	 * - fn (Function): rule function.
	 * - options (Object): rule options (not mandatory).
	 *
	 * Push new rule to the end of chain. See also
	 * [[Ruler.before]], [[Ruler.after]].
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.core.ruler.push('my_rule', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/
	Ruler.prototype.push = function (ruleName, fn, options) {
	  var opt = options || {};

	  this.__rules__.push({
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });

	  this.__cache__ = null;
	};


	/**
	 * Ruler.enable(list [, ignoreInvalid]) -> Array
	 * - list (String|Array): list of rule names to enable.
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Enable rules with given names. If any rule name not found - throw Error.
	 * Errors can be disabled by second param.
	 *
	 * Returns list of found rule names (if no exception happened).
	 *
	 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
	 **/
	Ruler.prototype.enable = function (list, ignoreInvalid) {
	  if (!Array.isArray(list)) { list = [ list ]; }

	  var result = [];

	  // Search by name and enable
	  list.forEach(function (name) {
	    var idx = this.__find__(name);

	    if (idx < 0) {
	      if (ignoreInvalid) { return; }
	      throw new Error('Rules manager: invalid rule name ' + name);
	    }
	    this.__rules__[idx].enabled = true;
	    result.push(name);
	  }, this);

	  this.__cache__ = null;
	  return result;
	};


	/**
	 * Ruler.enableOnly(list [, ignoreInvalid])
	 * - list (String|Array): list of rule names to enable (whitelist).
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Enable rules with given names, and disable everything else. If any rule name
	 * not found - throw Error. Errors can be disabled by second param.
	 *
	 * See also [[Ruler.disable]], [[Ruler.enable]].
	 **/
	Ruler.prototype.enableOnly = function (list, ignoreInvalid) {
	  if (!Array.isArray(list)) { list = [ list ]; }

	  this.__rules__.forEach(function (rule) { rule.enabled = false; });

	  this.enable(list, ignoreInvalid);
	};


	/**
	 * Ruler.disable(list [, ignoreInvalid]) -> Array
	 * - list (String|Array): list of rule names to disable.
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Disable rules with given names. If any rule name not found - throw Error.
	 * Errors can be disabled by second param.
	 *
	 * Returns list of found rule names (if no exception happened).
	 *
	 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
	 **/
	Ruler.prototype.disable = function (list, ignoreInvalid) {
	  if (!Array.isArray(list)) { list = [ list ]; }

	  var result = [];

	  // Search by name and disable
	  list.forEach(function (name) {
	    var idx = this.__find__(name);

	    if (idx < 0) {
	      if (ignoreInvalid) { return; }
	      throw new Error('Rules manager: invalid rule name ' + name);
	    }
	    this.__rules__[idx].enabled = false;
	    result.push(name);
	  }, this);

	  this.__cache__ = null;
	  return result;
	};


	/**
	 * Ruler.getRules(chainName) -> Array
	 *
	 * Return array of active functions (rules) for given chain name. It analyzes
	 * rules configuration, compiles caches if not exists and returns result.
	 *
	 * Default chain name is `''` (empty string). It can't be skipped. That's
	 * done intentionally, to keep signature monomorphic for high speed.
	 **/
	Ruler.prototype.getRules = function (chainName) {
	  if (this.__cache__ === null) {
	    this.__compile__();
	  }

	  // Chain can be empty, if rules disabled. But we still have to return Array.
	  return this.__cache__[chainName] || [];
	};

	module.exports = Ruler;


/***/ },
/* 35 */
/***/ function(module, exports) {

	// Normalize input string

	'use strict';


	var TABS_SCAN_RE = /[\n\t]/g;
	var NEWLINES_RE  = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
	var NULL_RE      = /\u0000/g;


	module.exports = function inline(state) {
	  var str, lineStart, lastTabPos;

	  // Normalize newlines
	  str = state.src.replace(NEWLINES_RE, '\n');

	  // Replace NULL characters
	  str = str.replace(NULL_RE, '\uFFFD');

	  // Replace tabs with proper number of spaces (1..4)
	  if (str.indexOf('\t') >= 0) {
	    lineStart = 0;
	    lastTabPos = 0;

	    str = str.replace(TABS_SCAN_RE, function (match, offset) {
	      var result;
	      if (str.charCodeAt(offset) === 0x0A) {
	        lineStart = offset + 1;
	        lastTabPos = 0;
	        return match;
	      }
	      result = '    '.slice((offset - lineStart - lastTabPos) % 4);
	      lastTabPos = offset - lineStart + 1;
	      return result;
	    });
	  }

	  state.src = str;
	};


/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';


	module.exports = function block(state) {
	  var token;

	  if (state.inlineMode) {
	    token          = new state.Token('inline', '', 0);
	    token.content  = state.src;
	    token.map      = [ 0, 1 ];
	    token.children = [];
	    state.tokens.push(token);
	  } else {
	    state.md.block.parse(state.src, state.md, state.env, state.tokens);
	  }
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function inline(state) {
	  var tokens = state.tokens, tok, i, l;

	  // Parse inlines
	  for (i = 0, l = tokens.length; i < l; i++) {
	    tok = tokens[i];
	    if (tok.type === 'inline') {
	      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
	    }
	  }
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// Replace link-like texts with link nodes.
	//
	// Currently restricted by `md.validateLink()` to http/https/ftp
	//
	'use strict';


	var arrayReplaceAt = __webpack_require__(14).arrayReplaceAt;


	function isLinkOpen(str) {
	  return /^<a[>\s]/i.test(str);
	}
	function isLinkClose(str) {
	  return /^<\/a\s*>/i.test(str);
	}


	module.exports = function linkify(state) {
	  var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos,
	      level, htmlLinkLevel, url, fullUrl, urlText,
	      blockTokens = state.tokens,
	      links;

	  if (!state.md.options.linkify) { return; }

	  for (j = 0, l = blockTokens.length; j < l; j++) {
	    if (blockTokens[j].type !== 'inline' ||
	        !state.md.linkify.pretest(blockTokens[j].content)) {
	      continue;
	    }

	    tokens = blockTokens[j].children;

	    htmlLinkLevel = 0;

	    // We scan from the end, to keep position when new tags added.
	    // Use reversed logic in links start/end match
	    for (i = tokens.length - 1; i >= 0; i--) {
	      currentToken = tokens[i];

	      // Skip content of markdown links
	      if (currentToken.type === 'link_close') {
	        i--;
	        while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
	          i--;
	        }
	        continue;
	      }

	      // Skip content of html tag links
	      if (currentToken.type === 'html_inline') {
	        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
	          htmlLinkLevel--;
	        }
	        if (isLinkClose(currentToken.content)) {
	          htmlLinkLevel++;
	        }
	      }
	      if (htmlLinkLevel > 0) { continue; }

	      if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {

	        text = currentToken.content;
	        links = state.md.linkify.match(text);

	        // Now split string to nodes
	        nodes = [];
	        level = currentToken.level;
	        lastPos = 0;

	        for (ln = 0; ln < links.length; ln++) {

	          url = links[ln].url;
	          fullUrl = state.md.normalizeLink(url);
	          if (!state.md.validateLink(fullUrl)) { continue; }

	          urlText = links[ln].text;

	          // Linkifier might send raw hostnames like "example.com", where url
	          // starts with domain name. So we prepend http:// in those cases,
	          // and remove it afterwards.
	          //
	          if (!links[ln].schema) {
	            urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
	          } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
	            urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
	          } else {
	            urlText = state.md.normalizeLinkText(urlText);
	          }

	          pos = links[ln].index;

	          if (pos > lastPos) {
	            token         = new state.Token('text', '', 0);
	            token.content = text.slice(lastPos, pos);
	            token.level   = level;
	            nodes.push(token);
	          }

	          token         = new state.Token('link_open', 'a', 1);
	          token.attrs   = [ [ 'href', fullUrl ] ];
	          token.level   = level++;
	          token.markup  = 'linkify';
	          token.info    = 'auto';
	          nodes.push(token);

	          token         = new state.Token('text', '', 0);
	          token.content = urlText;
	          token.level   = level;
	          nodes.push(token);

	          token         = new state.Token('link_close', 'a', -1);
	          token.level   = --level;
	          token.markup  = 'linkify';
	          token.info    = 'auto';
	          nodes.push(token);

	          lastPos = links[ln].lastIndex;
	        }
	        if (lastPos < text.length) {
	          token         = new state.Token('text', '', 0);
	          token.content = text.slice(lastPos);
	          token.level   = level;
	          nodes.push(token);
	        }

	        // replace current node
	        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
	      }
	    }
	  }
	};


/***/ },
/* 39 */
/***/ function(module, exports) {

	// Simple typographyc replacements
	//
	// (c) (C) → ©
	// (tm) (TM) → ™
	// (r) (R) → ®
	// +- → ±
	// (p) (P) -> §
	// ... → … (also ?.... → ?.., !.... → !..)
	// ???????? → ???, !!!!! → !!!, `,,` → `,`
	// -- → &ndash;, --- → &mdash;
	//
	'use strict';

	// TODO:
	// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
	// - miltiplication 2 x 4 -> 2 × 4

	var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

	// Workaround for phantomjs - need regex without /g flag,
	// or root check will fail every second time
	var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;

	var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
	var SCOPED_ABBR = {
	  'c': '©',
	  'r': '®',
	  'p': '§',
	  'tm': '™'
	};

	function replaceFn(match, name) {
	  return SCOPED_ABBR[name.toLowerCase()];
	}

	function replace_scoped(inlineTokens) {
	  var i, token;

	  for (i = inlineTokens.length - 1; i >= 0; i--) {
	    token = inlineTokens[i];
	    if (token.type === 'text') {
	      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
	    }
	  }
	}

	function replace_rare(inlineTokens) {
	  var i, token;

	  for (i = inlineTokens.length - 1; i >= 0; i--) {
	    token = inlineTokens[i];
	    if (token.type === 'text') {
	      if (RARE_RE.test(token.content)) {
	        token.content = token.content
	                    .replace(/\+-/g, '±')
	                    // .., ..., ....... -> …
	                    // but ?..... & !..... -> ?.. & !..
	                    .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
	                    .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
	                    // em-dash
	                    .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
	                    // en-dash
	                    .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
	                    .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
	      }
	    }
	  }
	}


	module.exports = function replace(state) {
	  var blkIdx;

	  if (!state.md.options.typographer) { return; }

	  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

	    if (state.tokens[blkIdx].type !== 'inline') { continue; }

	    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
	      replace_scoped(state.tokens[blkIdx].children);
	    }

	    if (RARE_RE.test(state.tokens[blkIdx].content)) {
	      replace_rare(state.tokens[blkIdx].children);
	    }

	  }
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// Convert straight quotation marks to typographic ones
	//
	'use strict';


	var isWhiteSpace   = __webpack_require__(14).isWhiteSpace;
	var isPunctChar    = __webpack_require__(14).isPunctChar;
	var isMdAsciiPunct = __webpack_require__(14).isMdAsciiPunct;

	var QUOTE_TEST_RE = /['"]/;
	var QUOTE_RE = /['"]/g;
	var APOSTROPHE = '\u2019'; /* ’ */


	function replaceAt(str, index, ch) {
	  return str.substr(0, index) + ch + str.substr(index + 1);
	}

	function process_inlines(tokens, state) {
	  var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar,
	      isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace,
	      canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;

	  stack = [];

	  for (i = 0; i < tokens.length; i++) {
	    token = tokens[i];

	    thisLevel = tokens[i].level;

	    for (j = stack.length - 1; j >= 0; j--) {
	      if (stack[j].level <= thisLevel) { break; }
	    }
	    stack.length = j + 1;

	    if (token.type !== 'text') { continue; }

	    text = token.content;
	    pos = 0;
	    max = text.length;

	    /*eslint no-labels:0,block-scoped-var:0*/
	    OUTER:
	    while (pos < max) {
	      QUOTE_RE.lastIndex = pos;
	      t = QUOTE_RE.exec(text);
	      if (!t) { break; }

	      canOpen = canClose = true;
	      pos = t.index + 1;
	      isSingle = (t[0] === "'");

	      // treat begin/end of the line as a whitespace
	      lastChar = t.index - 1 >= 0 ? text.charCodeAt(t.index - 1) : 0x20;
	      nextChar = pos < max ? text.charCodeAt(pos) : 0x20;

	      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
	      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

	      isLastWhiteSpace = isWhiteSpace(lastChar);
	      isNextWhiteSpace = isWhiteSpace(nextChar);

	      if (isNextWhiteSpace) {
	        canOpen = false;
	      } else if (isNextPunctChar) {
	        if (!(isLastWhiteSpace || isLastPunctChar)) {
	          canOpen = false;
	        }
	      }

	      if (isLastWhiteSpace) {
	        canClose = false;
	      } else if (isLastPunctChar) {
	        if (!(isNextWhiteSpace || isNextPunctChar)) {
	          canClose = false;
	        }
	      }

	      if (nextChar === 0x22 /* " */ && t[0] === '"') {
	        if (lastChar >= 0x30 /* 0 */ && lastChar <= 0x39 /* 9 */) {
	          // special case: 1"" - count first quote as an inch
	          canClose = canOpen = false;
	        }
	      }

	      if (canOpen && canClose) {
	        // treat this as the middle of the word
	        canOpen = false;
	        canClose = isNextPunctChar;
	      }

	      if (!canOpen && !canClose) {
	        // middle of word
	        if (isSingle) {
	          token.content = replaceAt(token.content, t.index, APOSTROPHE);
	        }
	        continue;
	      }

	      if (canClose) {
	        // this could be a closing quote, rewind the stack to get a match
	        for (j = stack.length - 1; j >= 0; j--) {
	          item = stack[j];
	          if (stack[j].level < thisLevel) { break; }
	          if (item.single === isSingle && stack[j].level === thisLevel) {
	            item = stack[j];

	            if (isSingle) {
	              openQuote = state.md.options.quotes[2];
	              closeQuote = state.md.options.quotes[3];
	            } else {
	              openQuote = state.md.options.quotes[0];
	              closeQuote = state.md.options.quotes[1];
	            }

	            // replace token.content *before* tokens[item.token].content,
	            // because, if they are pointing at the same token, replaceAt
	            // could mess up indices when quote length != 1
	            token.content = replaceAt(token.content, t.index, closeQuote);
	            tokens[item.token].content = replaceAt(
	              tokens[item.token].content, item.pos, openQuote);

	            pos += closeQuote.length - 1;
	            if (item.token === i) { pos += openQuote.length - 1; }

	            text = token.content;
	            max = text.length;

	            stack.length = j;
	            continue OUTER;
	          }
	        }
	      }

	      if (canOpen) {
	        stack.push({
	          token: i,
	          pos: t.index,
	          single: isSingle,
	          level: thisLevel
	        });
	      } else if (canClose && isSingle) {
	        token.content = replaceAt(token.content, t.index, APOSTROPHE);
	      }
	    }
	  }
	}


	module.exports = function smartquotes(state) {
	  /*eslint max-depth:0*/
	  var blkIdx;

	  if (!state.md.options.typographer) { return; }

	  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

	    if (state.tokens[blkIdx].type !== 'inline' ||
	        !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
	      continue;
	    }

	    process_inlines(state.tokens[blkIdx].children, state);
	  }
	};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// Core state object
	//
	'use strict';

	var Token = __webpack_require__(42);


	function StateCore(src, md, env) {
	  this.src = src;
	  this.env = env;
	  this.tokens = [];
	  this.inlineMode = false;
	  this.md = md; // link to parser instance
	}

	// re-export Token class to use in core rules
	StateCore.prototype.Token = Token;


	module.exports = StateCore;


/***/ },
/* 42 */
/***/ function(module, exports) {

	// Token class

	'use strict';


	/**
	 * class Token
	 **/

	/**
	 * new Token(type, tag, nesting)
	 *
	 * Create new token and fill passed properties.
	 **/
	function Token(type, tag, nesting) {
	  /**
	   * Token#type -> String
	   *
	   * Type of the token (string, e.g. "paragraph_open")
	   **/
	  this.type     = type;

	  /**
	   * Token#tag -> String
	   *
	   * html tag name, e.g. "p"
	   **/
	  this.tag      = tag;

	  /**
	   * Token#attrs -> Array
	   *
	   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
	   **/
	  this.attrs    = null;

	  /**
	   * Token#map -> Array
	   *
	   * Source map info. Format: `[ line_begin, line_end ]`
	   **/
	  this.map      = null;

	  /**
	   * Token#nesting -> Number
	   *
	   * Level change (number in {-1, 0, 1} set), where:
	   *
	   * -  `1` means the tag is opening
	   * -  `0` means the tag is self-closing
	   * - `-1` means the tag is closing
	   **/
	  this.nesting  = nesting;

	  /**
	   * Token#level -> Number
	   *
	   * nesting level, the same as `state.level`
	   **/
	  this.level    = 0;

	  /**
	   * Token#children -> Array
	   *
	   * An array of child nodes (inline and img tokens)
	   **/
	  this.children = null;

	  /**
	   * Token#content -> String
	   *
	   * In a case of self-closing tag (code, html, fence, etc.),
	   * it has contents of this tag.
	   **/
	  this.content  = '';

	  /**
	   * Token#markup -> String
	   *
	   * '*' or '_' for emphasis, fence string for fence, etc.
	   **/
	  this.markup   = '';

	  /**
	   * Token#info -> String
	   *
	   * fence infostring
	   **/
	  this.info     = '';

	  /**
	   * Token#meta -> Object
	   *
	   * A place for plugins to store an arbitrary data
	   **/
	  this.meta     = null;

	  /**
	   * Token#block -> Boolean
	   *
	   * True for block-level tokens, false for inline tokens.
	   * Used in renderer to calculate line breaks
	   **/
	  this.block    = false;

	  /**
	   * Token#hidden -> Boolean
	   *
	   * If it's true, ignore this element when rendering. Used for tight lists
	   * to hide paragraphs.
	   **/
	  this.hidden   = false;
	}


	/**
	 * Token.attrIndex(name) -> Number
	 *
	 * Search attribute index by name.
	 **/
	Token.prototype.attrIndex = function attrIndex(name) {
	  var attrs, i, len;

	  if (!this.attrs) { return -1; }

	  attrs = this.attrs;

	  for (i = 0, len = attrs.length; i < len; i++) {
	    if (attrs[i][0] === name) { return i; }
	  }
	  return -1;
	};


	/**
	 * Token.attrPush(attrData)
	 *
	 * Add `[ name, value ]` attribute to list. Init attrs if necessary
	 **/
	Token.prototype.attrPush = function attrPush(attrData) {
	  if (this.attrs) {
	    this.attrs.push(attrData);
	  } else {
	    this.attrs = [ attrData ];
	  }
	};


	module.exports = Token;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/** internal
	 * class ParserBlock
	 *
	 * Block-level tokenizer.
	 **/
	'use strict';


	var Ruler           = __webpack_require__(34);


	var _rules = [
	  // First 2 params - rule name & source. Secondary array - list of rules,
	  // which can be terminated by this one.
	  [ 'code',       __webpack_require__(44) ],
	  [ 'fence',      __webpack_require__(45),      [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
	  [ 'blockquote', __webpack_require__(46), [ 'paragraph', 'reference', 'list' ] ],
	  [ 'hr',         __webpack_require__(47),         [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
	  [ 'list',       __webpack_require__(48),       [ 'paragraph', 'reference', 'blockquote' ] ],
	  [ 'reference',  __webpack_require__(49) ],
	  [ 'heading',    __webpack_require__(50),    [ 'paragraph', 'reference', 'blockquote' ] ],
	  [ 'lheading',   __webpack_require__(51) ],
	  [ 'html_block', __webpack_require__(52), [ 'paragraph', 'reference', 'blockquote' ] ],
	  [ 'table',      __webpack_require__(55),      [ 'paragraph', 'reference' ] ],
	  [ 'paragraph',  __webpack_require__(56) ]
	];


	/**
	 * new ParserBlock()
	 **/
	function ParserBlock() {
	  /**
	   * ParserBlock#ruler -> Ruler
	   *
	   * [[Ruler]] instance. Keep configuration of block rules.
	   **/
	  this.ruler = new Ruler();

	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
	  }
	}


	// Generate tokens for input range
	//
	ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
	  var ok, i,
	      rules = this.ruler.getRules(''),
	      len = rules.length,
	      line = startLine,
	      hasEmptyLines = false,
	      maxNesting = state.md.options.maxNesting;

	  while (line < endLine) {
	    state.line = line = state.skipEmptyLines(line);
	    if (line >= endLine) { break; }

	    // Termination condition for nested calls.
	    // Nested calls currently used for blockquotes & lists
	    if (state.tShift[line] < state.blkIndent) { break; }

	    // If nesting level exceeded - skip tail to the end. That's not ordinary
	    // situation and we should not care about content.
	    if (state.level >= maxNesting) {
	      state.line = endLine;
	      break;
	    }

	    // Try all possible rules.
	    // On success, rule should:
	    //
	    // - update `state.line`
	    // - update `state.tokens`
	    // - return true

	    for (i = 0; i < len; i++) {
	      ok = rules[i](state, line, endLine, false);
	      if (ok) { break; }
	    }

	    // set state.tight iff we had an empty line before current tag
	    // i.e. latest empty line should not count
	    state.tight = !hasEmptyLines;

	    // paragraph might "eat" one newline after it in nested lists
	    if (state.isEmpty(state.line - 1)) {
	      hasEmptyLines = true;
	    }

	    line = state.line;

	    if (line < endLine && state.isEmpty(line)) {
	      hasEmptyLines = true;
	      line++;

	      // two empty lines should stop the parser in list mode
	      if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) { break; }
	      state.line = line;
	    }
	  }
	};


	/**
	 * ParserBlock.parse(str, md, env, outTokens)
	 *
	 * Process input string and push block tokens into `outTokens`
	 **/
	ParserBlock.prototype.parse = function (src, md, env, outTokens) {
	  var state;

	  if (!src) { return []; }

	  state = new this.State(src, md, env, outTokens);

	  this.tokenize(state, state.line, state.lineMax);
	};


	ParserBlock.prototype.State = __webpack_require__(57);


	module.exports = ParserBlock;


/***/ },
/* 44 */
/***/ function(module, exports) {

	// Code block (4 spaces padded)

	'use strict';


	module.exports = function code(state, startLine, endLine/*, silent*/) {
	  var nextLine, last, token;

	  if (state.tShift[startLine] - state.blkIndent < 4) { return false; }

	  last = nextLine = startLine + 1;

	  while (nextLine < endLine) {
	    if (state.isEmpty(nextLine)) {
	      nextLine++;
	      continue;
	    }
	    if (state.tShift[nextLine] - state.blkIndent >= 4) {
	      nextLine++;
	      last = nextLine;
	      continue;
	    }
	    break;
	  }

	  state.line = nextLine;

	  token         = state.push('code_block', 'code', 0);
	  token.content = state.getLines(startLine, last, 4 + state.blkIndent, true);
	  token.map     = [ startLine, state.line ];

	  return true;
	};


/***/ },
/* 45 */
/***/ function(module, exports) {

	// fences (``` lang, ~~~ lang)

	'use strict';


	module.exports = function fence(state, startLine, endLine, silent) {
	  var marker, len, params, nextLine, mem, token, markup,
	      haveEndMarker = false,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  if (pos + 3 > max) { return false; }

	  marker = state.src.charCodeAt(pos);

	  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
	    return false;
	  }

	  // scan marker length
	  mem = pos;
	  pos = state.skipChars(pos, marker);

	  len = pos - mem;

	  if (len < 3) { return false; }

	  markup = state.src.slice(mem, pos);
	  params = state.src.slice(pos, max);

	  if (params.indexOf('`') >= 0) { return false; }

	  // Since start is found, we can report success here in validation mode
	  if (silent) { return true; }

	  // search end of block
	  nextLine = startLine;

	  for (;;) {
	    nextLine++;
	    if (nextLine >= endLine) {
	      // unclosed block should be autoclosed by end of document.
	      // also block seems to be autoclosed by end of parent
	      break;
	    }

	    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
	    max = state.eMarks[nextLine];

	    if (pos < max && state.tShift[nextLine] < state.blkIndent) {
	      // non-empty line with negative indent should stop the list:
	      // - ```
	      //  test
	      break;
	    }

	    if (state.src.charCodeAt(pos) !== marker) { continue; }

	    if (state.tShift[nextLine] - state.blkIndent >= 4) {
	      // closing fence should be indented less than 4 spaces
	      continue;
	    }

	    pos = state.skipChars(pos, marker);

	    // closing code fence must be at least as long as the opening one
	    if (pos - mem < len) { continue; }

	    // make sure tail has spaces only
	    pos = state.skipSpaces(pos);

	    if (pos < max) { continue; }

	    haveEndMarker = true;
	    // found!
	    break;
	  }

	  // If a fence has heading spaces, they should be removed from its inner block
	  len = state.tShift[startLine];

	  state.line = nextLine + (haveEndMarker ? 1 : 0);

	  token         = state.push('fence', 'code', 0);
	  token.info    = params;
	  token.content = state.getLines(startLine + 1, nextLine, len, true);
	  token.markup  = markup;
	  token.map     = [ startLine, state.line ];

	  return true;
	};


/***/ },
/* 46 */
/***/ function(module, exports) {

	// Block quotes

	'use strict';


	module.exports = function blockquote(state, startLine, endLine, silent) {
	  var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines,
	      terminatorRules, token,
	      i, l, terminate,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  // check the block quote marker
	  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

	  // we know that it's going to be a valid blockquote,
	  // so no point trying to find the end of it in silent mode
	  if (silent) { return true; }

	  // skip one optional space after '>'
	  if (state.src.charCodeAt(pos) === 0x20) { pos++; }

	  oldIndent = state.blkIndent;
	  state.blkIndent = 0;

	  oldBMarks = [ state.bMarks[startLine] ];
	  state.bMarks[startLine] = pos;

	  // check if we have an empty blockquote
	  pos = pos < max ? state.skipSpaces(pos) : pos;
	  lastLineEmpty = pos >= max;

	  oldTShift = [ state.tShift[startLine] ];
	  state.tShift[startLine] = pos - state.bMarks[startLine];

	  terminatorRules = state.md.block.ruler.getRules('blockquote');

	  // Search the end of the block
	  //
	  // Block ends with either:
	  //  1. an empty line outside:
	  //     ```
	  //     > test
	  //
	  //     ```
	  //  2. an empty line inside:
	  //     ```
	  //     >
	  //     test
	  //     ```
	  //  3. another tag
	  //     ```
	  //     > test
	  //      - - -
	  //     ```
	  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
	    if (state.tShift[nextLine] < oldIndent) { break; }

	    pos = state.bMarks[nextLine] + state.tShift[nextLine];
	    max = state.eMarks[nextLine];

	    if (pos >= max) {
	      // Case 1: line is not inside the blockquote, and this line is empty.
	      break;
	    }

	    if (state.src.charCodeAt(pos++) === 0x3E/* > */) {
	      // This line is inside the blockquote.

	      // skip one optional space after '>'
	      if (state.src.charCodeAt(pos) === 0x20) { pos++; }

	      oldBMarks.push(state.bMarks[nextLine]);
	      state.bMarks[nextLine] = pos;

	      pos = pos < max ? state.skipSpaces(pos) : pos;
	      lastLineEmpty = pos >= max;

	      oldTShift.push(state.tShift[nextLine]);
	      state.tShift[nextLine] = pos - state.bMarks[nextLine];
	      continue;
	    }

	    // Case 2: line is not inside the blockquote, and the last line was empty.
	    if (lastLineEmpty) { break; }

	    // Case 3: another tag found.
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }

	    oldBMarks.push(state.bMarks[nextLine]);
	    oldTShift.push(state.tShift[nextLine]);

	    // A negative number means that this is a paragraph continuation;
	    //
	    // Any negative number will do the job here, but it's better for it
	    // to be large enough to make any bugs obvious.
	    state.tShift[nextLine] = -1;
	  }

	  oldParentType = state.parentType;
	  state.parentType = 'blockquote';

	  token        = state.push('blockquote_open', 'blockquote', 1);
	  token.markup = '>';
	  token.map    = lines = [ startLine, 0 ];

	  state.md.block.tokenize(state, startLine, nextLine);

	  token        = state.push('blockquote_close', 'blockquote', -1);
	  token.markup = '>';

	  state.parentType = oldParentType;
	  lines[1] = state.line;

	  // Restore original tShift; this might not be necessary since the parser
	  // has already been here, but just to make sure we can do that.
	  for (i = 0; i < oldTShift.length; i++) {
	    state.bMarks[i + startLine] = oldBMarks[i];
	    state.tShift[i + startLine] = oldTShift[i];
	  }
	  state.blkIndent = oldIndent;

	  return true;
	};


/***/ },
/* 47 */
/***/ function(module, exports) {

	// Horizontal rule

	'use strict';


	module.exports = function hr(state, startLine, endLine, silent) {
	  var marker, cnt, ch, token,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  marker = state.src.charCodeAt(pos++);

	  // Check hr marker
	  if (marker !== 0x2A/* * */ &&
	      marker !== 0x2D/* - */ &&
	      marker !== 0x5F/* _ */) {
	    return false;
	  }

	  // markers can be mixed with spaces, but there should be at least 3 one

	  cnt = 1;
	  while (pos < max) {
	    ch = state.src.charCodeAt(pos++);
	    if (ch !== marker && ch !== 0x20/* space */) { return false; }
	    if (ch === marker) { cnt++; }
	  }

	  if (cnt < 3) { return false; }

	  if (silent) { return true; }

	  state.line = startLine + 1;

	  token        = state.push('hr', 'hr', 0);
	  token.map    = [ startLine, state.line ];
	  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));

	  return true;
	};


/***/ },
/* 48 */
/***/ function(module, exports) {

	// Lists

	'use strict';


	// Search `[-+*][\n ]`, returns next pos arter marker on success
	// or -1 on fail.
	function skipBulletListMarker(state, startLine) {
	  var marker, pos, max;

	  pos = state.bMarks[startLine] + state.tShift[startLine];
	  max = state.eMarks[startLine];

	  marker = state.src.charCodeAt(pos++);
	  // Check bullet
	  if (marker !== 0x2A/* * */ &&
	      marker !== 0x2D/* - */ &&
	      marker !== 0x2B/* + */) {
	    return -1;
	  }

	  if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
	    // " 1.test " - is not a list item
	    return -1;
	  }

	  return pos;
	}

	// Search `\d+[.)][\n ]`, returns next pos arter marker on success
	// or -1 on fail.
	function skipOrderedListMarker(state, startLine) {
	  var ch,
	      start = state.bMarks[startLine] + state.tShift[startLine],
	      pos = start,
	      max = state.eMarks[startLine];

	  // List marker should have at least 2 chars (digit + dot)
	  if (pos + 1 >= max) { return -1; }

	  ch = state.src.charCodeAt(pos++);

	  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

	  for (;;) {
	    // EOL -> fail
	    if (pos >= max) { return -1; }

	    ch = state.src.charCodeAt(pos++);

	    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {

	      // List marker should have no more than 9 digits
	      // (prevents integer overflow in browsers)
	      if (pos - start >= 10) { return -1; }

	      continue;
	    }

	    // found valid marker
	    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
	      break;
	    }

	    return -1;
	  }


	  if (pos < max && state.src.charCodeAt(pos) !== 0x20/* space */) {
	    // " 1.test " - is not a list item
	    return -1;
	  }
	  return pos;
	}

	function markTightParagraphs(state, idx) {
	  var i, l,
	      level = state.level + 2;

	  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
	    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
	      state.tokens[i + 2].hidden = true;
	      state.tokens[i].hidden = true;
	      i += 2;
	    }
	  }
	}


	module.exports = function list(state, startLine, endLine, silent) {
	  var nextLine,
	      indent,
	      oldTShift,
	      oldIndent,
	      oldTight,
	      oldParentType,
	      start,
	      posAfterMarker,
	      max,
	      indentAfterMarker,
	      markerValue,
	      markerCharCode,
	      isOrdered,
	      contentStart,
	      listTokIdx,
	      prevEmptyEnd,
	      listLines,
	      itemLines,
	      tight = true,
	      terminatorRules,
	      token,
	      i, l, terminate;

	  // Detect list type and position after marker
	  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
	    isOrdered = true;
	  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
	    isOrdered = false;
	  } else {
	    return false;
	  }

	  // We should terminate list on style change. Remember first one to compare.
	  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

	  // For validation mode we can terminate immediately
	  if (silent) { return true; }

	  // Start list
	  listTokIdx = state.tokens.length;

	  if (isOrdered) {
	    start = state.bMarks[startLine] + state.tShift[startLine];
	    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));

	    token       = state.push('ordered_list_open', 'ol', 1);
	    if (markerValue !== 1) {
	      token.attrs = [ [ 'start', markerValue ] ];
	    }

	  } else {
	    token       = state.push('bullet_list_open', 'ul', 1);
	  }

	  token.map    = listLines = [ startLine, 0 ];
	  token.markup = String.fromCharCode(markerCharCode);

	  //
	  // Iterate list items
	  //

	  nextLine = startLine;
	  prevEmptyEnd = false;
	  terminatorRules = state.md.block.ruler.getRules('list');

	  while (nextLine < endLine) {
	    contentStart = state.skipSpaces(posAfterMarker);
	    max = state.eMarks[nextLine];

	    if (contentStart >= max) {
	      // trimming space in "-    \n  3" case, indent is 1 here
	      indentAfterMarker = 1;
	    } else {
	      indentAfterMarker = contentStart - posAfterMarker;
	    }

	    // If we have more than 4 spaces, the indent is 1
	    // (the rest is just indented code block)
	    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

	    // "  -  test"
	    //  ^^^^^ - calculating total length of this thing
	    indent = (posAfterMarker - state.bMarks[nextLine]) + indentAfterMarker;

	    // Run subparser & write tokens
	    token        = state.push('list_item_open', 'li', 1);
	    token.markup = String.fromCharCode(markerCharCode);
	    token.map    = itemLines = [ startLine, 0 ];

	    oldIndent = state.blkIndent;
	    oldTight = state.tight;
	    oldTShift = state.tShift[startLine];
	    oldParentType = state.parentType;
	    state.tShift[startLine] = contentStart - state.bMarks[startLine];
	    state.blkIndent = indent;
	    state.tight = true;
	    state.parentType = 'list';

	    state.md.block.tokenize(state, startLine, endLine, true);

	    // If any of list item is tight, mark list as tight
	    if (!state.tight || prevEmptyEnd) {
	      tight = false;
	    }
	    // Item become loose if finish with empty line,
	    // but we should filter last element, because it means list finish
	    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

	    state.blkIndent = oldIndent;
	    state.tShift[startLine] = oldTShift;
	    state.tight = oldTight;
	    state.parentType = oldParentType;

	    token        = state.push('list_item_close', 'li', -1);
	    token.markup = String.fromCharCode(markerCharCode);

	    nextLine = startLine = state.line;
	    itemLines[1] = nextLine;
	    contentStart = state.bMarks[startLine];

	    if (nextLine >= endLine) { break; }

	    if (state.isEmpty(nextLine)) {
	      break;
	    }

	    //
	    // Try to check if list is terminated or continued.
	    //
	    if (state.tShift[nextLine] < state.blkIndent) { break; }

	    // fail if terminating block found
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }

	    // fail if list has another type
	    if (isOrdered) {
	      posAfterMarker = skipOrderedListMarker(state, nextLine);
	      if (posAfterMarker < 0) { break; }
	    } else {
	      posAfterMarker = skipBulletListMarker(state, nextLine);
	      if (posAfterMarker < 0) { break; }
	    }

	    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
	  }

	  // Finilize list
	  if (isOrdered) {
	    token = state.push('ordered_list_close', 'ol', -1);
	  } else {
	    token = state.push('bullet_list_close', 'ul', -1);
	  }
	  token.markup = String.fromCharCode(markerCharCode);

	  listLines[1] = nextLine;
	  state.line = nextLine;

	  // mark paragraphs tight if needed
	  if (tight) {
	    markTightParagraphs(state, listTokIdx);
	  }

	  return true;
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	var parseLinkDestination = __webpack_require__(30);
	var parseLinkTitle       = __webpack_require__(31);
	var normalizeReference   = __webpack_require__(14).normalizeReference;


	module.exports = function reference(state, startLine, _endLine, silent) {
	  var ch,
	      destEndPos,
	      destEndLineNo,
	      endLine,
	      href,
	      i,
	      l,
	      label,
	      labelEnd,
	      res,
	      start,
	      str,
	      terminate,
	      terminatorRules,
	      title,
	      lines = 0,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine],
	      nextLine = startLine + 1;

	  if (state.src.charCodeAt(pos) !== 0x5B/* [ */) { return false; }

	  // Simple check to quickly interrupt scan on [link](url) at the start of line.
	  // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
	  while (++pos < max) {
	    if (state.src.charCodeAt(pos) === 0x5D /* ] */ &&
	        state.src.charCodeAt(pos - 1) !== 0x5C/* \ */) {
	      if (pos + 1 === max) { return false; }
	      if (state.src.charCodeAt(pos + 1) !== 0x3A/* : */) { return false; }
	      break;
	    }
	  }

	  endLine = state.lineMax;

	  // jump line-by-line until empty one or EOF
	  terminatorRules = state.md.block.ruler.getRules('reference');

	  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
	    // this would be a code block normally, but after paragraph
	    // it's considered a lazy continuation regardless of what's there
	    if (state.tShift[nextLine] - state.blkIndent > 3) { continue; }

	    // quirk for blockquotes, this line should already be checked by that rule
	    if (state.tShift[nextLine] < 0) { continue; }

	    // Some tags can terminate paragraph without empty line.
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }
	  }

	  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
	  max = str.length;

	  for (pos = 1; pos < max; pos++) {
	    ch = str.charCodeAt(pos);
	    if (ch === 0x5B /* [ */) {
	      return false;
	    } else if (ch === 0x5D /* ] */) {
	      labelEnd = pos;
	      break;
	    } else if (ch === 0x0A /* \n */) {
	      lines++;
	    } else if (ch === 0x5C /* \ */) {
	      pos++;
	      if (pos < max && str.charCodeAt(pos) === 0x0A) {
	        lines++;
	      }
	    }
	  }

	  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return false; }

	  // [label]:   destination   'title'
	  //         ^^^ skip optional whitespace here
	  for (pos = labelEnd + 2; pos < max; pos++) {
	    ch = str.charCodeAt(pos);
	    if (ch === 0x0A) {
	      lines++;
	    } else if (ch === 0x20) {
	      /*eslint no-empty:0*/
	    } else {
	      break;
	    }
	  }

	  // [label]:   destination   'title'
	  //            ^^^^^^^^^^^ parse this
	  res = parseLinkDestination(str, pos, max);
	  if (!res.ok) { return false; }

	  href = state.md.normalizeLink(res.str);
	  if (!state.md.validateLink(href)) { return false; }

	  pos = res.pos;
	  lines += res.lines;

	  // save cursor state, we could require to rollback later
	  destEndPos = pos;
	  destEndLineNo = lines;

	  // [label]:   destination   'title'
	  //                       ^^^ skipping those spaces
	  start = pos;
	  for (; pos < max; pos++) {
	    ch = str.charCodeAt(pos);
	    if (ch === 0x0A) {
	      lines++;
	    } else if (ch === 0x20) {
	      /*eslint no-empty:0*/
	    } else {
	      break;
	    }
	  }

	  // [label]:   destination   'title'
	  //                          ^^^^^^^ parse this
	  res = parseLinkTitle(str, pos, max);
	  if (pos < max && start !== pos && res.ok) {
	    title = res.str;
	    pos = res.pos;
	    lines += res.lines;
	  } else {
	    title = '';
	    pos = destEndPos;
	    lines = destEndLineNo;
	  }

	  // skip trailing spaces until the rest of the line
	  while (pos < max && str.charCodeAt(pos) === 0x20/* space */) { pos++; }

	  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
	    if (title) {
	      // garbage at the end of the line after title,
	      // but it could still be a valid reference if we roll back
	      title = '';
	      pos = destEndPos;
	      lines = destEndLineNo;
	      while (pos < max && str.charCodeAt(pos) === 0x20/* space */) { pos++; }
	    }
	  }

	  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
	    // garbage at the end of the line
	    return false;
	  }

	  label = normalizeReference(str.slice(1, labelEnd));
	  if (!label) {
	    // CommonMark 0.20 disallows empty labels
	    return false;
	  }

	  // Reference can not terminate anything. This check is for safety only.
	  /*istanbul ignore if*/
	  if (silent) { return true; }

	  if (typeof state.env.references === 'undefined') {
	    state.env.references = {};
	  }
	  if (typeof state.env.references[label] === 'undefined') {
	    state.env.references[label] = { title: title, href: href };
	  }

	  state.line = startLine + lines + 1;
	  return true;
	};


/***/ },
/* 50 */
/***/ function(module, exports) {

	// heading (#, ##, ...)

	'use strict';


	module.exports = function heading(state, startLine, endLine, silent) {
	  var ch, level, tmp, token,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  ch  = state.src.charCodeAt(pos);

	  if (ch !== 0x23/* # */ || pos >= max) { return false; }

	  // count heading level
	  level = 1;
	  ch = state.src.charCodeAt(++pos);
	  while (ch === 0x23/* # */ && pos < max && level <= 6) {
	    level++;
	    ch = state.src.charCodeAt(++pos);
	  }

	  if (level > 6 || (pos < max && ch !== 0x20/* space */)) { return false; }

	  if (silent) { return true; }

	  // Let's cut tails like '    ###  ' from the end of string

	  max = state.skipCharsBack(max, 0x20, pos); // space
	  tmp = state.skipCharsBack(max, 0x23, pos); // #
	  if (tmp > pos && state.src.charCodeAt(tmp - 1) === 0x20/* space */) {
	    max = tmp;
	  }

	  state.line = startLine + 1;

	  token        = state.push('heading_open', 'h' + String(level), 1);
	  token.markup = '########'.slice(0, level);
	  token.map    = [ startLine, state.line ];

	  token          = state.push('inline', '', 0);
	  token.content  = state.src.slice(pos, max).trim();
	  token.map      = [ startLine, state.line ];
	  token.children = [];

	  token        = state.push('heading_close', 'h' + String(level), -1);
	  token.markup = '########'.slice(0, level);

	  return true;
	};


/***/ },
/* 51 */
/***/ function(module, exports) {

	// lheading (---, ===)

	'use strict';


	module.exports = function lheading(state, startLine, endLine/*, silent*/) {
	  var marker, pos, max, token, level,
	      next = startLine + 1;

	  if (next >= endLine) { return false; }
	  if (state.tShift[next] < state.blkIndent) { return false; }

	  // Scan next line

	  if (state.tShift[next] - state.blkIndent > 3) { return false; }

	  pos = state.bMarks[next] + state.tShift[next];
	  max = state.eMarks[next];

	  if (pos >= max) { return false; }

	  marker = state.src.charCodeAt(pos);

	  if (marker !== 0x2D/* - */ && marker !== 0x3D/* = */) { return false; }

	  pos = state.skipChars(pos, marker);

	  pos = state.skipSpaces(pos);

	  if (pos < max) { return false; }

	  pos = state.bMarks[startLine] + state.tShift[startLine];

	  state.line = next + 1;
	  level = (marker === 0x3D/* = */ ? 1 : 2);

	  token          = state.push('heading_open', 'h' + String(level), 1);
	  token.markup   = String.fromCharCode(marker);
	  token.map      = [ startLine, state.line ];

	  token          = state.push('inline', '', 0);
	  token.content  = state.src.slice(pos, state.eMarks[startLine]).trim();
	  token.map      = [ startLine, state.line - 1 ];
	  token.children = [];

	  token          = state.push('heading_close', 'h' + String(level), -1);
	  token.markup   = String.fromCharCode(marker);

	  return true;
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// HTML block

	'use strict';


	var block_names = __webpack_require__(53);
	var HTML_OPEN_CLOSE_TAG_RE = __webpack_require__(54).HTML_OPEN_CLOSE_TAG_RE;

	// An array of opening and corresponding closing sequences for html tags,
	// last argument defines whether it can terminate a paragraph or not
	//
	var HTML_SEQUENCES = [
	  [ /^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true ],
	  [ /^<!--/,        /-->/,   true ],
	  [ /^<\?/,         /\?>/,   true ],
	  [ /^<![A-Z]/,     />/,     true ],
	  [ /^<!\[CDATA\[/, /\]\]>/, true ],
	  [ new RegExp('^</?(' + block_names.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true ],
	  [ new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'),  /^$/, false ]
	];


	module.exports = function html_block(state, startLine, endLine, silent) {
	  var i, nextLine, token, lineText,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  if (!state.md.options.html) { return false; }

	  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

	  lineText = state.src.slice(pos, max);

	  for (i = 0; i < HTML_SEQUENCES.length; i++) {
	    if (HTML_SEQUENCES[i][0].test(lineText)) { break; }
	  }

	  if (i === HTML_SEQUENCES.length) { return false; }

	  if (silent) {
	    // true if this sequence can be a terminator, false otherwise
	    return HTML_SEQUENCES[i][2];
	  }

	  nextLine = startLine + 1;

	  // If we are here - we detected HTML block.
	  // Let's roll down till block end.
	  if (!HTML_SEQUENCES[i][1].test(lineText)) {
	    for (; nextLine < endLine; nextLine++) {
	      if (state.tShift[nextLine] < state.blkIndent) { break; }

	      pos = state.bMarks[nextLine] + state.tShift[nextLine];
	      max = state.eMarks[nextLine];
	      lineText = state.src.slice(pos, max);

	      if (HTML_SEQUENCES[i][1].test(lineText)) {
	        if (lineText.length !== 0) { nextLine++; }
	        break;
	      }
	    }
	  }

	  state.line = nextLine;

	  token         = state.push('html_block', '', 0);
	  token.map     = [ startLine, nextLine ];
	  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);

	  return true;
	};


/***/ },
/* 53 */
/***/ function(module, exports) {

	// List of valid html blocks names, accorting to commonmark spec
	// http://jgm.github.io/CommonMark/spec.html#html-blocks

	'use strict';


	module.exports = [
	  'address',
	  'article',
	  'aside',
	  'base',
	  'basefont',
	  'blockquote',
	  'body',
	  'caption',
	  'center',
	  'col',
	  'colgroup',
	  'dd',
	  'details',
	  'dialog',
	  'dir',
	  'div',
	  'dl',
	  'dt',
	  'fieldset',
	  'figcaption',
	  'figure',
	  'footer',
	  'form',
	  'frame',
	  'frameset',
	  'h1',
	  'head',
	  'header',
	  'hr',
	  'html',
	  'legend',
	  'li',
	  'link',
	  'main',
	  'menu',
	  'menuitem',
	  'meta',
	  'nav',
	  'noframes',
	  'ol',
	  'optgroup',
	  'option',
	  'p',
	  'param',
	  'pre',
	  'section',
	  'source',
	  'title',
	  'summary',
	  'table',
	  'tbody',
	  'td',
	  'tfoot',
	  'th',
	  'thead',
	  'title',
	  'tr',
	  'track',
	  'ul'
	];


/***/ },
/* 54 */
/***/ function(module, exports) {

	// Regexps to match html elements

	'use strict';

	var attr_name     = '[a-zA-Z_:][a-zA-Z0-9:._-]*';

	var unquoted      = '[^"\'=<>`\\x00-\\x20]+';
	var single_quoted = "'[^']*'";
	var double_quoted = '"[^"]*"';

	var attr_value  = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';

	var attribute   = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';

	var open_tag    = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';

	var close_tag   = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
	var comment     = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
	var processing  = '<[?].*?[?]>';
	var declaration = '<![A-Z]+\\s+[^>]*>';
	var cdata       = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

	var HTML_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment +
	                        '|' + processing + '|' + declaration + '|' + cdata + ')');
	var HTML_OPEN_CLOSE_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');

	module.exports.HTML_TAG_RE = HTML_TAG_RE;
	module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;


/***/ },
/* 55 */
/***/ function(module, exports) {

	// GFM table, non-standard

	'use strict';


	function getLine(state, line) {
	  var pos = state.bMarks[line] + state.blkIndent,
	      max = state.eMarks[line];

	  return state.src.substr(pos, max - pos);
	}

	function escapedSplit(str) {
	  var result = [],
	      pos = 0,
	      max = str.length,
	      ch,
	      escapes = 0,
	      lastPos = 0,
	      backTicked = false,
	      lastBackTick = 0;

	  ch  = str.charCodeAt(pos);

	  while (pos < max) {
	    if (ch === 0x60/* ` */ && (escapes % 2 === 0)) {
	      backTicked = !backTicked;
	      lastBackTick = pos;
	    } else if (ch === 0x7c/* | */ && (escapes % 2 === 0) && !backTicked) {
	      result.push(str.substring(lastPos, pos));
	      lastPos = pos + 1;
	    } else if (ch === 0x5c/* \ */) {
	      escapes++;
	    } else {
	      escapes = 0;
	    }

	    pos++;

	    // If there was an un-closed backtick, go back to just after
	    // the last backtick, but as if it was a normal character
	    if (pos === max && backTicked) {
	      backTicked = false;
	      pos = lastBackTick + 1;
	    }

	    ch = str.charCodeAt(pos);
	  }

	  result.push(str.substring(lastPos));

	  return result;
	}


	module.exports = function table(state, startLine, endLine, silent) {
	  var ch, lineText, pos, i, nextLine, rows, token,
	      aligns, t, tableLines, tbodyLines;

	  // should have at least three lines
	  if (startLine + 2 > endLine) { return false; }

	  nextLine = startLine + 1;

	  if (state.tShift[nextLine] < state.blkIndent) { return false; }

	  // first character of the second line should be '|' or '-'

	  pos = state.bMarks[nextLine] + state.tShift[nextLine];
	  if (pos >= state.eMarks[nextLine]) { return false; }

	  ch = state.src.charCodeAt(pos);
	  if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }

	  lineText = getLine(state, startLine + 1);
	  if (!/^[-:| ]+$/.test(lineText)) { return false; }

	  rows = lineText.split('|');
	  if (rows.length < 2) { return false; }
	  aligns = [];
	  for (i = 0; i < rows.length; i++) {
	    t = rows[i].trim();
	    if (!t) {
	      // allow empty columns before and after table, but not in between columns;
	      // e.g. allow ` |---| `, disallow ` ---||--- `
	      if (i === 0 || i === rows.length - 1) {
	        continue;
	      } else {
	        return false;
	      }
	    }

	    if (!/^:?-+:?$/.test(t)) { return false; }
	    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
	      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
	    } else if (t.charCodeAt(0) === 0x3A/* : */) {
	      aligns.push('left');
	    } else {
	      aligns.push('');
	    }
	  }

	  lineText = getLine(state, startLine).trim();
	  if (lineText.indexOf('|') === -1) { return false; }
	  rows = escapedSplit(lineText.replace(/^\||\|$/g, ''));
	  if (aligns.length !== rows.length) { return false; }
	  if (silent) { return true; }

	  token     = state.push('table_open', 'table', 1);
	  token.map = tableLines = [ startLine, 0 ];

	  token     = state.push('thead_open', 'thead', 1);
	  token.map = [ startLine, startLine + 1 ];

	  token     = state.push('tr_open', 'tr', 1);
	  token.map = [ startLine, startLine + 1 ];

	  for (i = 0; i < rows.length; i++) {
	    token          = state.push('th_open', 'th', 1);
	    token.map      = [ startLine, startLine + 1 ];
	    if (aligns[i]) {
	      token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
	    }

	    token          = state.push('inline', '', 0);
	    token.content  = rows[i].trim();
	    token.map      = [ startLine, startLine + 1 ];
	    token.children = [];

	    token          = state.push('th_close', 'th', -1);
	  }

	  token     = state.push('tr_close', 'tr', -1);
	  token     = state.push('thead_close', 'thead', -1);

	  token     = state.push('tbody_open', 'tbody', 1);
	  token.map = tbodyLines = [ startLine + 2, 0 ];

	  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
	    if (state.tShift[nextLine] < state.blkIndent) { break; }

	    lineText = getLine(state, nextLine).trim();
	    if (lineText.indexOf('|') === -1) { break; }
	    rows = escapedSplit(lineText.replace(/^\||\|$/g, ''));

	    // set number of columns to number of columns in header row
	    rows.length = aligns.length;

	    token = state.push('tr_open', 'tr', 1);
	    for (i = 0; i < rows.length; i++) {
	      token          = state.push('td_open', 'td', 1);
	      if (aligns[i]) {
	        token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
	      }

	      token          = state.push('inline', '', 0);
	      token.content  = rows[i] ? rows[i].trim() : '';
	      token.children = [];

	      token          = state.push('td_close', 'td', -1);
	    }
	    token = state.push('tr_close', 'tr', -1);
	  }
	  token = state.push('tbody_close', 'tbody', -1);
	  token = state.push('table_close', 'table', -1);

	  tableLines[1] = tbodyLines[1] = nextLine;
	  state.line = nextLine;
	  return true;
	};


/***/ },
/* 56 */
/***/ function(module, exports) {

	// Paragraph

	'use strict';


	module.exports = function paragraph(state, startLine/*, endLine*/) {
	  var content, terminate, i, l, token,
	      nextLine = startLine + 1,
	      terminatorRules = state.md.block.ruler.getRules('paragraph'),
	      endLine = state.lineMax;

	  // jump line-by-line until empty one or EOF
	  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
	    // this would be a code block normally, but after paragraph
	    // it's considered a lazy continuation regardless of what's there
	    if (state.tShift[nextLine] - state.blkIndent > 3) { continue; }

	    // quirk for blockquotes, this line should already be checked by that rule
	    if (state.tShift[nextLine] < 0) { continue; }

	    // Some tags can terminate paragraph without empty line.
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }
	  }

	  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

	  state.line = nextLine;

	  token          = state.push('paragraph_open', 'p', 1);
	  token.map      = [ startLine, state.line ];

	  token          = state.push('inline', '', 0);
	  token.content  = content;
	  token.map      = [ startLine, state.line ];
	  token.children = [];

	  token          = state.push('paragraph_close', 'p', -1);

	  return true;
	};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// Parser state class

	'use strict';

	var Token = __webpack_require__(42);


	function StateBlock(src, md, env, tokens) {
	  var ch, s, start, pos, len, indent, indent_found;

	  this.src = src;

	  // link to parser instance
	  this.md     = md;

	  this.env = env;

	  //
	  // Internal state vartiables
	  //

	  this.tokens = tokens;

	  this.bMarks = [];  // line begin offsets for fast jumps
	  this.eMarks = [];  // line end offsets for fast jumps
	  this.tShift = [];  // indent for each line

	  // block parser variables
	  this.blkIndent  = 0; // required block content indent
	                       // (for example, if we are in list)
	  this.line       = 0; // line index in src
	  this.lineMax    = 0; // lines count
	  this.tight      = false;  // loose/tight mode for lists
	  this.parentType = 'root'; // if `list`, block parser stops on two newlines
	  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)

	  this.level = 0;

	  // renderer
	  this.result = '';

	  // Create caches
	  // Generate markers.
	  s = this.src;
	  indent = 0;
	  indent_found = false;

	  for (start = pos = indent = 0, len = s.length; pos < len; pos++) {
	    ch = s.charCodeAt(pos);

	    if (!indent_found) {
	      if (ch === 0x20/* space */) {
	        indent++;
	        continue;
	      } else {
	        indent_found = true;
	      }
	    }

	    if (ch === 0x0A || pos === len - 1) {
	      if (ch !== 0x0A) { pos++; }
	      this.bMarks.push(start);
	      this.eMarks.push(pos);
	      this.tShift.push(indent);

	      indent_found = false;
	      indent = 0;
	      start = pos + 1;
	    }
	  }

	  // Push fake entry to simplify cache bounds checks
	  this.bMarks.push(s.length);
	  this.eMarks.push(s.length);
	  this.tShift.push(0);

	  this.lineMax = this.bMarks.length - 1; // don't count last fake line
	}

	// Push new token to "stream".
	//
	StateBlock.prototype.push = function (type, tag, nesting) {
	  var token = new Token(type, tag, nesting);
	  token.block = true;

	  if (nesting < 0) { this.level--; }
	  token.level = this.level;
	  if (nesting > 0) { this.level++; }

	  this.tokens.push(token);
	  return token;
	};

	StateBlock.prototype.isEmpty = function isEmpty(line) {
	  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
	};

	StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
	  for (var max = this.lineMax; from < max; from++) {
	    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
	      break;
	    }
	  }
	  return from;
	};

	// Skip spaces from given position.
	StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
	  for (var max = this.src.length; pos < max; pos++) {
	    if (this.src.charCodeAt(pos) !== 0x20/* space */) { break; }
	  }
	  return pos;
	};

	// Skip char codes from given position
	StateBlock.prototype.skipChars = function skipChars(pos, code) {
	  for (var max = this.src.length; pos < max; pos++) {
	    if (this.src.charCodeAt(pos) !== code) { break; }
	  }
	  return pos;
	};

	// Skip char codes reverse from given position - 1
	StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
	  if (pos <= min) { return pos; }

	  while (pos > min) {
	    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
	  }
	  return pos;
	};

	// cut lines range from source.
	StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
	  var i, first, last, queue, shift,
	      line = begin;

	  if (begin >= end) {
	    return '';
	  }

	  // Opt: don't use push queue for single line;
	  if (line + 1 === end) {
	    first = this.bMarks[line] + Math.min(this.tShift[line], indent);
	    last = this.eMarks[end - 1] + (keepLastLF ? 1 : 0);
	    return this.src.slice(first, last);
	  }

	  queue = new Array(end - begin);

	  for (i = 0; line < end; line++, i++) {
	    shift = this.tShift[line];
	    if (shift > indent) { shift = indent; }
	    if (shift < 0) { shift = 0; }

	    first = this.bMarks[line] + shift;

	    if (line + 1 < end || keepLastLF) {
	      // No need for bounds check because we have fake entry on tail.
	      last = this.eMarks[line] + 1;
	    } else {
	      last = this.eMarks[line];
	    }

	    queue[i] = this.src.slice(first, last);
	  }

	  return queue.join('');
	};

	// re-export Token class to use in block rules
	StateBlock.prototype.Token = Token;


	module.exports = StateBlock;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/** internal
	 * class ParserInline
	 *
	 * Tokenizes paragraph content.
	 **/
	'use strict';


	var Ruler           = __webpack_require__(34);


	////////////////////////////////////////////////////////////////////////////////
	// Parser rules

	var _rules = [
	  [ 'text',            __webpack_require__(59) ],
	  [ 'newline',         __webpack_require__(60) ],
	  [ 'escape',          __webpack_require__(61) ],
	  [ 'backticks',       __webpack_require__(62) ],
	  [ 'strikethrough',   __webpack_require__(63) ],
	  [ 'emphasis',        __webpack_require__(64) ],
	  [ 'link',            __webpack_require__(65) ],
	  [ 'image',           __webpack_require__(66) ],
	  [ 'autolink',        __webpack_require__(67) ],
	  [ 'html_inline',     __webpack_require__(69) ],
	  [ 'entity',          __webpack_require__(70) ]
	];


	/**
	 * new ParserInline()
	 **/
	function ParserInline() {
	  /**
	   * ParserInline#ruler -> Ruler
	   *
	   * [[Ruler]] instance. Keep configuration of inline rules.
	   **/
	  this.ruler = new Ruler();

	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1]);
	  }
	}


	// Skip single token by running all rules in validation mode;
	// returns `true` if any rule reported success
	//
	ParserInline.prototype.skipToken = function (state) {
	  var i, pos = state.pos,
	      rules = this.ruler.getRules(''),
	      len = rules.length,
	      maxNesting = state.md.options.maxNesting,
	      cache = state.cache;


	  if (typeof cache[pos] !== 'undefined') {
	    state.pos = cache[pos];
	    return;
	  }

	  /*istanbul ignore else*/
	  if (state.level < maxNesting) {
	    for (i = 0; i < len; i++) {
	      if (rules[i](state, true)) {
	        cache[pos] = state.pos;
	        return;
	      }
	    }
	  }

	  state.pos++;
	  cache[pos] = state.pos;
	};


	// Generate tokens for input range
	//
	ParserInline.prototype.tokenize = function (state) {
	  var ok, i,
	      rules = this.ruler.getRules(''),
	      len = rules.length,
	      end = state.posMax,
	      maxNesting = state.md.options.maxNesting;

	  while (state.pos < end) {
	    // Try all possible rules.
	    // On success, rule should:
	    //
	    // - update `state.pos`
	    // - update `state.tokens`
	    // - return true

	    if (state.level < maxNesting) {
	      for (i = 0; i < len; i++) {
	        ok = rules[i](state, false);
	        if (ok) { break; }
	      }
	    }

	    if (ok) {
	      if (state.pos >= end) { break; }
	      continue;
	    }

	    state.pending += state.src[state.pos++];
	  }

	  if (state.pending) {
	    state.pushPending();
	  }
	};


	/**
	 * ParserInline.parse(str, md, env, outTokens)
	 *
	 * Process input string and push inline tokens into `outTokens`
	 **/
	ParserInline.prototype.parse = function (str, md, env, outTokens) {
	  var state = new this.State(str, md, env, outTokens);

	  this.tokenize(state);
	};


	ParserInline.prototype.State = __webpack_require__(71);


	module.exports = ParserInline;


/***/ },
/* 59 */
/***/ function(module, exports) {

	// Skip text characters for text token, place those to pending buffer
	// and increment current pos

	'use strict';


	// Rule to skip pure text
	// '{}$%@~+=:' reserved for extentions

	// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~

	// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
	// http://spec.commonmark.org/0.15/#ascii-punctuation-character
	function isTerminatorChar(ch) {
	  switch (ch) {
	    case 0x0A/* \n */:
	    case 0x21/* ! */:
	    case 0x23/* # */:
	    case 0x24/* $ */:
	    case 0x25/* % */:
	    case 0x26/* & */:
	    case 0x2A/* * */:
	    case 0x2B/* + */:
	    case 0x2D/* - */:
	    case 0x3A/* : */:
	    case 0x3C/* < */:
	    case 0x3D/* = */:
	    case 0x3E/* > */:
	    case 0x40/* @ */:
	    case 0x5B/* [ */:
	    case 0x5C/* \ */:
	    case 0x5D/* ] */:
	    case 0x5E/* ^ */:
	    case 0x5F/* _ */:
	    case 0x60/* ` */:
	    case 0x7B/* { */:
	    case 0x7D/* } */:
	    case 0x7E/* ~ */:
	      return true;
	    default:
	      return false;
	  }
	}

	module.exports = function text(state, silent) {
	  var pos = state.pos;

	  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
	    pos++;
	  }

	  if (pos === state.pos) { return false; }

	  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

	  state.pos = pos;

	  return true;
	};

	// Alternative implementation, for memory.
	//
	// It costs 10% of performance, but allows extend terminators list, if place it
	// to `ParcerInline` property. Probably, will switch to it sometime, such
	// flexibility required.

	/*
	var TERMINATOR_RE = /[\n!#$%&*+\-:<=>@[\\\]^_`{}~]/;

	module.exports = function text(state, silent) {
	  var pos = state.pos,
	      idx = state.src.slice(pos).search(TERMINATOR_RE);

	  // first char is terminator -> empty text
	  if (idx === 0) { return false; }

	  // no terminator -> text till end of string
	  if (idx < 0) {
	    if (!silent) { state.pending += state.src.slice(pos); }
	    state.pos = state.src.length;
	    return true;
	  }

	  if (!silent) { state.pending += state.src.slice(pos, pos + idx); }

	  state.pos += idx;

	  return true;
	};*/


/***/ },
/* 60 */
/***/ function(module, exports) {

	// Proceess '\n'

	'use strict';

	module.exports = function newline(state, silent) {
	  var pmax, max, pos = state.pos;

	  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

	  pmax = state.pending.length - 1;
	  max = state.posMax;

	  // '  \n' -> hardbreak
	  // Lookup in pending chars is bad practice! Don't copy to other rules!
	  // Pending string is stored in concat mode, indexed lookups will cause
	  // convertion to flat mode.
	  if (!silent) {
	    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
	      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
	        state.pending = state.pending.replace(/ +$/, '');
	        state.push('hardbreak', 'br', 0);
	      } else {
	        state.pending = state.pending.slice(0, -1);
	        state.push('softbreak', 'br', 0);
	      }

	    } else {
	      state.push('softbreak', 'br', 0);
	    }
	  }

	  pos++;

	  // skip heading spaces for next line
	  while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

	  state.pos = pos;
	  return true;
	};


/***/ },
/* 61 */
/***/ function(module, exports) {

	// Proceess escaped chars and hardbreaks

	'use strict';

	var ESCAPED = [];

	for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

	'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
	  .split('').forEach(function(ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


	module.exports = function escape(state, silent) {
	  var ch, pos = state.pos, max = state.posMax;

	  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

	  pos++;

	  if (pos < max) {
	    ch = state.src.charCodeAt(pos);

	    if (ch < 256 && ESCAPED[ch] !== 0) {
	      if (!silent) { state.pending += state.src[pos]; }
	      state.pos += 2;
	      return true;
	    }

	    if (ch === 0x0A) {
	      if (!silent) {
	        state.push('hardbreak', 'br', 0);
	      }

	      pos++;
	      // skip leading whitespaces from next line
	      while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

	      state.pos = pos;
	      return true;
	    }
	  }

	  if (!silent) { state.pending += '\\'; }
	  state.pos++;
	  return true;
	};


/***/ },
/* 62 */
/***/ function(module, exports) {

	// Parse backticks

	'use strict';

	module.exports = function backtick(state, silent) {
	  var start, max, marker, matchStart, matchEnd, token,
	      pos = state.pos,
	      ch = state.src.charCodeAt(pos);

	  if (ch !== 0x60/* ` */) { return false; }

	  start = pos;
	  pos++;
	  max = state.posMax;

	  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

	  marker = state.src.slice(start, pos);

	  matchStart = matchEnd = pos;

	  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
	    matchEnd = matchStart + 1;

	    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

	    if (matchEnd - matchStart === marker.length) {
	      if (!silent) {
	        token         = state.push('code_inline', 'code', 0);
	        token.markup  = marker;
	        token.content = state.src.slice(pos, matchStart)
	                                 .replace(/[ \n]+/g, ' ')
	                                 .trim();
	      }
	      state.pos = matchEnd;
	      return true;
	    }
	  }

	  if (!silent) { state.pending += marker; }
	  state.pos += marker.length;
	  return true;
	};


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// ~~strike through~~
	//
	'use strict';


	var isWhiteSpace   = __webpack_require__(14).isWhiteSpace;
	var isPunctChar    = __webpack_require__(14).isPunctChar;
	var isMdAsciiPunct = __webpack_require__(14).isMdAsciiPunct;


	// parse sequence of markers,
	// "start" should point at a valid marker
	function scanDelims(state, start) {
	  var pos = start, lastChar, nextChar, count,
	      isLastWhiteSpace, isLastPunctChar,
	      isNextWhiteSpace, isNextPunctChar,
	      can_open = true,
	      can_close = true,
	      max = state.posMax,
	      marker = state.src.charCodeAt(start);

	  // treat beginning of the line as a whitespace
	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : 0x20;

	  while (pos < max && state.src.charCodeAt(pos) === marker) { pos++; }

	  if (pos >= max) {
	    can_open = false;
	  }

	  count = pos - start;

	  // treat end of the line as a whitespace
	  nextChar = pos < max ? state.src.charCodeAt(pos) : 0x20;

	  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
	  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

	  isLastWhiteSpace = isWhiteSpace(lastChar);
	  isNextWhiteSpace = isWhiteSpace(nextChar);

	  if (isNextWhiteSpace) {
	    can_open = false;
	  } else if (isNextPunctChar) {
	    if (!(isLastWhiteSpace || isLastPunctChar)) {
	      can_open = false;
	    }
	  }

	  if (isLastWhiteSpace) {
	    can_close = false;
	  } else if (isLastPunctChar) {
	    if (!(isNextWhiteSpace || isNextPunctChar)) {
	      can_close = false;
	    }
	  }

	  return {
	    can_open: can_open,
	    can_close: can_close,
	    delims: count
	  };
	}


	module.exports = function strikethrough(state, silent) {
	  var startCount,
	      count,
	      tagCount,
	      found,
	      stack,
	      res,
	      token,
	      max = state.posMax,
	      start = state.pos,
	      marker = state.src.charCodeAt(start);

	  if (marker !== 0x7E/* ~ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode

	  res = scanDelims(state, start);
	  startCount = res.delims;
	  if (!res.can_open) {
	    state.pos += startCount;
	    // Earlier we checked !silent, but this implementation does not need it
	    state.pending += state.src.slice(start, state.pos);
	    return true;
	  }

	  stack = Math.floor(startCount / 2);
	  if (stack <= 0) { return false; }
	  state.pos = start + startCount;

	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === marker) {
	      res = scanDelims(state, state.pos);
	      count = res.delims;
	      tagCount = Math.floor(count / 2);
	      if (res.can_close) {
	        if (tagCount >= stack) {
	          state.pos += count - 2;
	          found = true;
	          break;
	        }
	        stack -= tagCount;
	        state.pos += count;
	        continue;
	      }

	      if (res.can_open) { stack += tagCount; }
	      state.pos += count;
	      continue;
	    }

	    state.md.inline.skipToken(state);
	  }

	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;

	  // Earlier we checked !silent, but this implementation does not need it
	  token        = state.push('s_open', 's', 1);
	  token.markup = '~~';

	  state.md.inline.tokenize(state);

	  token        = state.push('s_close', 's', -1);
	  token.markup = '~~';

	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// Process *this* and _that_
	//
	'use strict';


	var isWhiteSpace   = __webpack_require__(14).isWhiteSpace;
	var isPunctChar    = __webpack_require__(14).isPunctChar;
	var isMdAsciiPunct = __webpack_require__(14).isMdAsciiPunct;


	// parse sequence of emphasis markers,
	// "start" should point at a valid marker
	function scanDelims(state, start) {
	  var pos = start, lastChar, nextChar, count, can_open, can_close,
	      isLastWhiteSpace, isLastPunctChar,
	      isNextWhiteSpace, isNextPunctChar,
	      left_flanking = true,
	      right_flanking = true,
	      max = state.posMax,
	      marker = state.src.charCodeAt(start);

	  // treat beginning of the line as a whitespace
	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : 0x20;

	  while (pos < max && state.src.charCodeAt(pos) === marker) { pos++; }

	  count = pos - start;

	  // treat end of the line as a whitespace
	  nextChar = pos < max ? state.src.charCodeAt(pos) : 0x20;

	  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
	  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

	  isLastWhiteSpace = isWhiteSpace(lastChar);
	  isNextWhiteSpace = isWhiteSpace(nextChar);

	  if (isNextWhiteSpace) {
	    left_flanking = false;
	  } else if (isNextPunctChar) {
	    if (!(isLastWhiteSpace || isLastPunctChar)) {
	      left_flanking = false;
	    }
	  }

	  if (isLastWhiteSpace) {
	    right_flanking = false;
	  } else if (isLastPunctChar) {
	    if (!(isNextWhiteSpace || isNextPunctChar)) {
	      right_flanking = false;
	    }
	  }

	  if (marker === 0x5F /* _ */) {
	    // "_" inside a word can neither open nor close an emphasis
	    can_open  = left_flanking  && (!right_flanking || isLastPunctChar);
	    can_close = right_flanking && (!left_flanking  || isNextPunctChar);
	  } else {
	    can_open  = left_flanking;
	    can_close = right_flanking;
	  }

	  return {
	    can_open: can_open,
	    can_close: can_close,
	    delims: count
	  };
	}

	module.exports = function emphasis(state, silent) {
	  var startCount,
	      count,
	      found,
	      oldCount,
	      newCount,
	      stack,
	      res,
	      token,
	      max = state.posMax,
	      start = state.pos,
	      marker = state.src.charCodeAt(start);

	  if (marker !== 0x5F/* _ */ && marker !== 0x2A /* * */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode

	  res = scanDelims(state, start);
	  startCount = res.delims;
	  if (!res.can_open) {
	    state.pos += startCount;
	    // Earlier we checked !silent, but this implementation does not need it
	    state.pending += state.src.slice(start, state.pos);
	    return true;
	  }

	  state.pos = start + startCount;
	  stack = [ startCount ];

	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === marker) {
	      res = scanDelims(state, state.pos);
	      count = res.delims;
	      if (res.can_close) {
	        oldCount = stack.pop();
	        newCount = count;

	        while (oldCount !== newCount) {
	          if (newCount < oldCount) {
	            stack.push(oldCount - newCount);
	            break;
	          }

	          // assert(newCount > oldCount)
	          newCount -= oldCount;

	          if (stack.length === 0) { break; }
	          state.pos += oldCount;
	          oldCount = stack.pop();
	        }

	        if (stack.length === 0) {
	          startCount = oldCount;
	          found = true;
	          break;
	        }
	        state.pos += count;
	        continue;
	      }

	      if (res.can_open) { stack.push(count); }
	      state.pos += count;
	      continue;
	    }

	    state.md.inline.skipToken(state);
	  }

	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + startCount;

	  // Earlier we checked !silent, but this implementation does not need it

	  // we have `startCount` starting and ending markers,
	  // now trying to serialize them into tokens
	  for (count = startCount; count > 1; count -= 2) {
	    token        = state.push('strong_open', 'strong', 1);
	    token.markup = String.fromCharCode(marker) + String.fromCharCode(marker);
	  }
	  if (count % 2) {
	    token        = state.push('em_open', 'em', 1);
	    token.markup = String.fromCharCode(marker);
	  }

	  state.md.inline.tokenize(state);

	  if (count % 2) {
	    token        = state.push('em_close', 'em', -1);
	    token.markup = String.fromCharCode(marker);
	  }
	  for (count = startCount; count > 1; count -= 2) {
	    token        = state.push('strong_close', 'strong', -1);
	    token.markup = String.fromCharCode(marker) + String.fromCharCode(marker);
	  }

	  state.pos = state.posMax + startCount;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// Process [link](<to> "stuff")

	'use strict';

	var parseLinkLabel       = __webpack_require__(29);
	var parseLinkDestination = __webpack_require__(30);
	var parseLinkTitle       = __webpack_require__(31);
	var normalizeReference   = __webpack_require__(14).normalizeReference;


	module.exports = function link(state, silent) {
	  var attrs,
	      code,
	      label,
	      labelEnd,
	      labelStart,
	      pos,
	      res,
	      ref,
	      title,
	      token,
	      href = '',
	      oldPos = state.pos,
	      max = state.posMax,
	      start = state.pos;

	  if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false; }

	  labelStart = state.pos + 1;
	  labelEnd = parseLinkLabel(state, state.pos, true);

	  // parser failed to find ']', so it's not a valid link
	  if (labelEnd < 0) { return false; }

	  pos = labelEnd + 1;
	  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
	    //
	    // Inline link
	    //

	    // [link](  <href>  "title"  )
	    //        ^^ skipping these spaces
	    pos++;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }
	    if (pos >= max) { return false; }

	    // [link](  <href>  "title"  )
	    //          ^^^^^^ parsing link destination
	    start = pos;
	    res = parseLinkDestination(state.src, pos, state.posMax);
	    if (res.ok) {
	      href = state.md.normalizeLink(res.str);
	      if (state.md.validateLink(href)) {
	        pos = res.pos;
	      } else {
	        href = '';
	      }
	    }

	    // [link](  <href>  "title"  )
	    //                ^^ skipping these spaces
	    start = pos;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }

	    // [link](  <href>  "title"  )
	    //                  ^^^^^^^ parsing link title
	    res = parseLinkTitle(state.src, pos, state.posMax);
	    if (pos < max && start !== pos && res.ok) {
	      title = res.str;
	      pos = res.pos;

	      // [link](  <href>  "title"  )
	      //                         ^^ skipping these spaces
	      for (; pos < max; pos++) {
	        code = state.src.charCodeAt(pos);
	        if (code !== 0x20 && code !== 0x0A) { break; }
	      }
	    } else {
	      title = '';
	    }

	    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
	      state.pos = oldPos;
	      return false;
	    }
	    pos++;
	  } else {
	    //
	    // Link reference
	    //
	    if (typeof state.env.references === 'undefined') { return false; }

	    // [foo]  [bar]
	    //      ^^ optional whitespace (can include newlines)
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }

	    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
	      start = pos + 1;
	      pos = parseLinkLabel(state, pos);
	      if (pos >= 0) {
	        label = state.src.slice(start, pos++);
	      } else {
	        pos = labelEnd + 1;
	      }
	    } else {
	      pos = labelEnd + 1;
	    }

	    // covers label === '' and label === undefined
	    // (collapsed reference link and shortcut reference link respectively)
	    if (!label) { label = state.src.slice(labelStart, labelEnd); }

	    ref = state.env.references[normalizeReference(label)];
	    if (!ref) {
	      state.pos = oldPos;
	      return false;
	    }
	    href = ref.href;
	    title = ref.title;
	  }

	  //
	  // We found the end of the link, and know for a fact it's a valid link;
	  // so all that's left to do is to call tokenizer.
	  //
	  if (!silent) {
	    state.pos = labelStart;
	    state.posMax = labelEnd;

	    token        = state.push('link_open', 'a', 1);
	    token.attrs  = attrs = [ [ 'href', href ] ];
	    if (title) {
	      attrs.push([ 'title', title ]);
	    }

	    state.md.inline.tokenize(state);

	    token        = state.push('link_close', 'a', -1);
	  }

	  state.pos = pos;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// Process ![image](<src> "title")

	'use strict';

	var parseLinkLabel       = __webpack_require__(29);
	var parseLinkDestination = __webpack_require__(30);
	var parseLinkTitle       = __webpack_require__(31);
	var normalizeReference   = __webpack_require__(14).normalizeReference;


	module.exports = function image(state, silent) {
	  var attrs,
	      code,
	      label,
	      labelEnd,
	      labelStart,
	      pos,
	      ref,
	      res,
	      title,
	      token,
	      tokens,
	      start,
	      href = '',
	      oldPos = state.pos,
	      max = state.posMax;

	  if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
	  if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) { return false; }

	  labelStart = state.pos + 2;
	  labelEnd = parseLinkLabel(state, state.pos + 1, false);

	  // parser failed to find ']', so it's not a valid link
	  if (labelEnd < 0) { return false; }

	  pos = labelEnd + 1;
	  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
	    //
	    // Inline link
	    //

	    // [link](  <href>  "title"  )
	    //        ^^ skipping these spaces
	    pos++;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }
	    if (pos >= max) { return false; }

	    // [link](  <href>  "title"  )
	    //          ^^^^^^ parsing link destination
	    start = pos;
	    res = parseLinkDestination(state.src, pos, state.posMax);
	    if (res.ok) {
	      href = state.md.normalizeLink(res.str);
	      if (state.md.validateLink(href)) {
	        pos = res.pos;
	      } else {
	        href = '';
	      }
	    }

	    // [link](  <href>  "title"  )
	    //                ^^ skipping these spaces
	    start = pos;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }

	    // [link](  <href>  "title"  )
	    //                  ^^^^^^^ parsing link title
	    res = parseLinkTitle(state.src, pos, state.posMax);
	    if (pos < max && start !== pos && res.ok) {
	      title = res.str;
	      pos = res.pos;

	      // [link](  <href>  "title"  )
	      //                         ^^ skipping these spaces
	      for (; pos < max; pos++) {
	        code = state.src.charCodeAt(pos);
	        if (code !== 0x20 && code !== 0x0A) { break; }
	      }
	    } else {
	      title = '';
	    }

	    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
	      state.pos = oldPos;
	      return false;
	    }
	    pos++;
	  } else {
	    //
	    // Link reference
	    //
	    if (typeof state.env.references === 'undefined') { return false; }

	    // [foo]  [bar]
	    //      ^^ optional whitespace (can include newlines)
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }

	    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
	      start = pos + 1;
	      pos = parseLinkLabel(state, pos);
	      if (pos >= 0) {
	        label = state.src.slice(start, pos++);
	      } else {
	        pos = labelEnd + 1;
	      }
	    } else {
	      pos = labelEnd + 1;
	    }

	    // covers label === '' and label === undefined
	    // (collapsed reference link and shortcut reference link respectively)
	    if (!label) { label = state.src.slice(labelStart, labelEnd); }

	    ref = state.env.references[normalizeReference(label)];
	    if (!ref) {
	      state.pos = oldPos;
	      return false;
	    }
	    href = ref.href;
	    title = ref.title;
	  }

	  //
	  // We found the end of the link, and know for a fact it's a valid link;
	  // so all that's left to do is to call tokenizer.
	  //
	  if (!silent) {
	    state.pos = labelStart;
	    state.posMax = labelEnd;

	    var newState = new state.md.inline.State(
	      state.src.slice(labelStart, labelEnd),
	      state.md,
	      state.env,
	      tokens = []
	    );
	    newState.md.inline.tokenize(newState);

	    token          = state.push('image', 'img', 0);
	    token.attrs    = attrs = [ [ 'src', href ], [ 'alt', '' ] ];
	    token.children = tokens;
	    if (title) {
	      attrs.push([ 'title', title ]);
	    }
	  }

	  state.pos = pos;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// Process autolinks '<protocol:...>'

	'use strict';

	var url_schemas = __webpack_require__(68);


	/*eslint max-len:0*/
	var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
	var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;


	module.exports = function autolink(state, silent) {
	  var tail, linkMatch, emailMatch, url, fullUrl, token,
	      pos = state.pos;

	  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

	  tail = state.src.slice(pos);

	  if (tail.indexOf('>') < 0) { return false; }

	  if (AUTOLINK_RE.test(tail)) {
	    linkMatch = tail.match(AUTOLINK_RE);

	    if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) { return false; }

	    url = linkMatch[0].slice(1, -1);
	    fullUrl = state.md.normalizeLink(url);
	    if (!state.md.validateLink(fullUrl)) { return false; }

	    if (!silent) {
	      token         = state.push('link_open', 'a', 1);
	      token.attrs   = [ [ 'href', fullUrl ] ];

	      token         = state.push('text', '', 0);
	      token.content = state.md.normalizeLinkText(url);

	      token         = state.push('link_close', 'a', -1);
	    }

	    state.pos += linkMatch[0].length;
	    return true;
	  }

	  if (EMAIL_RE.test(tail)) {
	    emailMatch = tail.match(EMAIL_RE);

	    url = emailMatch[0].slice(1, -1);
	    fullUrl = state.md.normalizeLink('mailto:' + url);
	    if (!state.md.validateLink(fullUrl)) { return false; }

	    if (!silent) {
	      token         = state.push('link_open', 'a', 1);
	      token.attrs   = [ [ 'href', fullUrl ] ];
	      token.markup  = 'autolink';
	      token.info    = 'auto';

	      token         = state.push('text', '', 0);
	      token.content = state.md.normalizeLinkText(url);

	      token         = state.push('link_close', 'a', -1);
	      token.markup  = 'autolink';
	      token.info    = 'auto';
	    }

	    state.pos += emailMatch[0].length;
	    return true;
	  }

	  return false;
	};


/***/ },
/* 68 */
/***/ function(module, exports) {

	// List of valid url schemas, accorting to commonmark spec
	// http://jgm.github.io/CommonMark/spec.html#autolinks

	'use strict';


	module.exports = [
	  'coap',
	  'doi',
	  'javascript',
	  'aaa',
	  'aaas',
	  'about',
	  'acap',
	  'cap',
	  'cid',
	  'crid',
	  'data',
	  'dav',
	  'dict',
	  'dns',
	  'file',
	  'ftp',
	  'geo',
	  'go',
	  'gopher',
	  'h323',
	  'http',
	  'https',
	  'iax',
	  'icap',
	  'im',
	  'imap',
	  'info',
	  'ipp',
	  'iris',
	  'iris.beep',
	  'iris.xpc',
	  'iris.xpcs',
	  'iris.lwz',
	  'ldap',
	  'mailto',
	  'mid',
	  'msrp',
	  'msrps',
	  'mtqp',
	  'mupdate',
	  'news',
	  'nfs',
	  'ni',
	  'nih',
	  'nntp',
	  'opaquelocktoken',
	  'pop',
	  'pres',
	  'rtsp',
	  'service',
	  'session',
	  'shttp',
	  'sieve',
	  'sip',
	  'sips',
	  'sms',
	  'snmp',
	  'soap.beep',
	  'soap.beeps',
	  'tag',
	  'tel',
	  'telnet',
	  'tftp',
	  'thismessage',
	  'tn3270',
	  'tip',
	  'tv',
	  'urn',
	  'vemmi',
	  'ws',
	  'wss',
	  'xcon',
	  'xcon-userid',
	  'xmlrpc.beep',
	  'xmlrpc.beeps',
	  'xmpp',
	  'z39.50r',
	  'z39.50s',
	  'adiumxtra',
	  'afp',
	  'afs',
	  'aim',
	  'apt',
	  'attachment',
	  'aw',
	  'beshare',
	  'bitcoin',
	  'bolo',
	  'callto',
	  'chrome',
	  'chrome-extension',
	  'com-eventbrite-attendee',
	  'content',
	  'cvs',
	  'dlna-playsingle',
	  'dlna-playcontainer',
	  'dtn',
	  'dvb',
	  'ed2k',
	  'facetime',
	  'feed',
	  'finger',
	  'fish',
	  'gg',
	  'git',
	  'gizmoproject',
	  'gtalk',
	  'hcp',
	  'icon',
	  'ipn',
	  'irc',
	  'irc6',
	  'ircs',
	  'itms',
	  'jar',
	  'jms',
	  'keyparc',
	  'lastfm',
	  'ldaps',
	  'magnet',
	  'maps',
	  'market',
	  'message',
	  'mms',
	  'ms-help',
	  'msnim',
	  'mumble',
	  'mvn',
	  'notes',
	  'oid',
	  'palm',
	  'paparazzi',
	  'platform',
	  'proxy',
	  'psyc',
	  'query',
	  'res',
	  'resource',
	  'rmi',
	  'rsync',
	  'rtmp',
	  'secondlife',
	  'sftp',
	  'sgn',
	  'skype',
	  'smb',
	  'soldat',
	  'spotify',
	  'ssh',
	  'steam',
	  'svn',
	  'teamspeak',
	  'things',
	  'udp',
	  'unreal',
	  'ut2004',
	  'ventrilo',
	  'view-source',
	  'webcal',
	  'wtai',
	  'wyciwyg',
	  'xfire',
	  'xri',
	  'ymsgr'
	];


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// Process html tags

	'use strict';


	var HTML_TAG_RE = __webpack_require__(54).HTML_TAG_RE;


	function isLetter(ch) {
	  /*eslint no-bitwise:0*/
	  var lc = ch | 0x20; // to lower case
	  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
	}


	module.exports = function html_inline(state, silent) {
	  var ch, match, max, token,
	      pos = state.pos;

	  if (!state.md.options.html) { return false; }

	  // Check start
	  max = state.posMax;
	  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
	      pos + 2 >= max) {
	    return false;
	  }

	  // Quick fail on second char
	  ch = state.src.charCodeAt(pos + 1);
	  if (ch !== 0x21/* ! */ &&
	      ch !== 0x3F/* ? */ &&
	      ch !== 0x2F/* / */ &&
	      !isLetter(ch)) {
	    return false;
	  }

	  match = state.src.slice(pos).match(HTML_TAG_RE);
	  if (!match) { return false; }

	  if (!silent) {
	    token         = state.push('html_inline', '', 0);
	    token.content = state.src.slice(pos, pos + match[0].length);
	  }
	  state.pos += match[0].length;
	  return true;
	};


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// Process html entity - &#123;, &#xAF;, &quot;, ...

	'use strict';

	var entities          = __webpack_require__(15);
	var has               = __webpack_require__(14).has;
	var isValidEntityCode = __webpack_require__(14).isValidEntityCode;
	var fromCodePoint     = __webpack_require__(14).fromCodePoint;


	var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
	var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


	module.exports = function entity(state, silent) {
	  var ch, code, match, pos = state.pos, max = state.posMax;

	  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

	  if (pos + 1 < max) {
	    ch = state.src.charCodeAt(pos + 1);

	    if (ch === 0x23 /* # */) {
	      match = state.src.slice(pos).match(DIGITAL_RE);
	      if (match) {
	        if (!silent) {
	          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
	          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
	        }
	        state.pos += match[0].length;
	        return true;
	      }
	    } else {
	      match = state.src.slice(pos).match(NAMED_RE);
	      if (match) {
	        if (has(entities, match[1])) {
	          if (!silent) { state.pending += entities[match[1]]; }
	          state.pos += match[0].length;
	          return true;
	        }
	      }
	    }
	  }

	  if (!silent) { state.pending += '&'; }
	  state.pos++;
	  return true;
	};


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// Inline parser state

	'use strict';


	var Token = __webpack_require__(42);

	function StateInline(src, md, env, outTokens) {
	  this.src = src;
	  this.env = env;
	  this.md = md;
	  this.tokens = outTokens;

	  this.pos = 0;
	  this.posMax = this.src.length;
	  this.level = 0;
	  this.pending = '';
	  this.pendingLevel = 0;

	  this.cache = {};        // Stores { start: end } pairs. Useful for backtrack
	                          // optimization of pairs parse (emphasis, strikes).
	}


	// Flush pending text
	//
	StateInline.prototype.pushPending = function () {
	  var token = new Token('text', '', 0);
	  token.content = this.pending;
	  token.level = this.pendingLevel;
	  this.tokens.push(token);
	  this.pending = '';
	  return token;
	};


	// Push new token to "stream".
	// If pending text exists - flush it as text token
	//
	StateInline.prototype.push = function (type, tag, nesting) {
	  if (this.pending) {
	    this.pushPending();
	  }

	  var token = new Token(type, tag, nesting);

	  if (nesting < 0) { this.level--; }
	  token.level = this.level;
	  if (nesting > 0) { this.level++; }

	  this.pendingLevel = this.level;
	  this.tokens.push(token);
	  return token;
	};

	// re-export Token class to use in block rules
	StateInline.prototype.Token = Token;


	module.exports = StateInline;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	////////////////////////////////////////////////////////////////////////////////
	// Helpers

	// Merge objects
	//
	function assign(obj /*from1, from2, from3, ...*/) {
	  var sources = Array.prototype.slice.call(arguments, 1);

	  sources.forEach(function (source) {
	    if (!source) { return; }

	    Object.keys(source).forEach(function (key) {
	      obj[key] = source[key];
	    });
	  });

	  return obj;
	}

	function _class(obj) { return Object.prototype.toString.call(obj); }
	function isString(obj) { return _class(obj) === '[object String]'; }
	function isObject(obj) { return _class(obj) === '[object Object]'; }
	function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
	function isFunction(obj) { return _class(obj) === '[object Function]'; }


	function escapeRE (str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

	////////////////////////////////////////////////////////////////////////////////


	var defaultOptions = {
	  fuzzyLink: true,
	  fuzzyEmail: true,
	  fuzzyIP: false
	};


	function isOptionsObj(obj) {
	  return Object.keys(obj || {}).reduce(function (acc, k) {
	    return acc || defaultOptions.hasOwnProperty(k);
	  }, false);
	}


	var defaultSchemas = {
	  'http:': {
	    validate: function (text, pos, self) {
	      var tail = text.slice(pos);

	      if (!self.re.http) {
	        // compile lazily, because "host"-containing variables can change on tlds update.
	        self.re.http =  new RegExp(
	          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
	        );
	      }
	      if (self.re.http.test(tail)) {
	        return tail.match(self.re.http)[0].length;
	      }
	      return 0;
	    }
	  },
	  'https:':  'http:',
	  'ftp:':    'http:',
	  '//':      {
	    validate: function (text, pos, self) {
	      var tail = text.slice(pos);

	      if (!self.re.no_http) {
	      // compile lazily, becayse "host"-containing variables can change on tlds update.
	        self.re.no_http =  new RegExp(
	          '^' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
	        );
	      }

	      if (self.re.no_http.test(tail)) {
	        // should not be `://`, that protects from errors in protocol name
	        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
	        return tail.match(self.re.no_http)[0].length;
	      }
	      return 0;
	    }
	  },
	  'mailto:': {
	    validate: function (text, pos, self) {
	      var tail = text.slice(pos);

	      if (!self.re.mailto) {
	        self.re.mailto =  new RegExp(
	          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
	        );
	      }
	      if (self.re.mailto.test(tail)) {
	        return tail.match(self.re.mailto)[0].length;
	      }
	      return 0;
	    }
	  }
	};

	/*eslint-disable max-len*/

	// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
	var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

	// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
	var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

	/*eslint-enable max-len*/

	////////////////////////////////////////////////////////////////////////////////

	function resetScanCache(self) {
	  self.__index__ = -1;
	  self.__text_cache__   = '';
	}

	function createValidator(re) {
	  return function (text, pos) {
	    var tail = text.slice(pos);

	    if (re.test(tail)) {
	      return tail.match(re)[0].length;
	    }
	    return 0;
	  };
	}

	function createNormalizer() {
	  return function (match, self) {
	    self.normalize(match);
	  };
	}

	// Schemas compiler. Build regexps.
	//
	function compile(self) {

	  // Load & clone RE patterns.
	  var re = self.re = assign({}, __webpack_require__(73));

	  // Define dynamic patterns
	  var tlds = self.__tlds__.slice();

	  if (!self.__tlds_replaced__) {
	    tlds.push(tlds_2ch_src_re);
	  }
	  tlds.push(re.src_xn);

	  re.src_tlds = tlds.join('|');

	  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }

	  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
	  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
	  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
	  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

	  //
	  // Compile each schema
	  //

	  var aliases = [];

	  self.__compiled__ = {}; // Reset compiled data

	  function schemaError(name, val) {
	    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
	  }

	  Object.keys(self.__schemas__).forEach(function (name) {
	    var val = self.__schemas__[name];

	    // skip disabled methods
	    if (val === null) { return; }

	    var compiled = { validate: null, link: null };

	    self.__compiled__[name] = compiled;

	    if (isObject(val)) {
	      if (isRegExp(val.validate)) {
	        compiled.validate = createValidator(val.validate);
	      } else if (isFunction(val.validate)) {
	        compiled.validate = val.validate;
	      } else {
	        schemaError(name, val);
	      }

	      if (isFunction(val.normalize)) {
	        compiled.normalize = val.normalize;
	      } else if (!val.normalize) {
	        compiled.normalize = createNormalizer();
	      } else {
	        schemaError(name, val);
	      }

	      return;
	    }

	    if (isString(val)) {
	      aliases.push(name);
	      return;
	    }

	    schemaError(name, val);
	  });

	  //
	  // Compile postponed aliases
	  //

	  aliases.forEach(function (alias) {
	    if (!self.__compiled__[self.__schemas__[alias]]) {
	      // Silently fail on missed schemas to avoid errons on disable.
	      // schemaError(alias, self.__schemas__[alias]);
	      return;
	    }

	    self.__compiled__[alias].validate =
	      self.__compiled__[self.__schemas__[alias]].validate;
	    self.__compiled__[alias].normalize =
	      self.__compiled__[self.__schemas__[alias]].normalize;
	  });

	  //
	  // Fake record for guessed links
	  //
	  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

	  //
	  // Build schema condition
	  //
	  var slist = Object.keys(self.__compiled__)
	                      .filter(function(name) {
	                        // Filter disabled & fake schemas
	                        return name.length > 0 && self.__compiled__[name];
	                      })
	                      .map(escapeRE)
	                      .join('|');
	  // (?!_) cause 1.5x slowdown
	  self.re.schema_test   = RegExp('(^|(?!_)(?:>|' + re.src_ZPCc + '))(' + slist + ')', 'i');
	  self.re.schema_search = RegExp('(^|(?!_)(?:>|' + re.src_ZPCc + '))(' + slist + ')', 'ig');

	  self.re.pretest       = RegExp(
	                            '(' + self.re.schema_test.source + ')|' +
	                            '(' + self.re.host_fuzzy_test.source + ')|' +
	                            '@',
	                            'i');

	  //
	  // Cleanup
	  //

	  resetScanCache(self);
	}

	/**
	 * class Match
	 *
	 * Match result. Single element of array, returned by [[LinkifyIt#match]]
	 **/
	function Match(self, shift) {
	  var start = self.__index__,
	      end   = self.__last_index__,
	      text  = self.__text_cache__.slice(start, end);

	  /**
	   * Match#schema -> String
	   *
	   * Prefix (protocol) for matched string.
	   **/
	  this.schema    = self.__schema__.toLowerCase();
	  /**
	   * Match#index -> Number
	   *
	   * First position of matched string.
	   **/
	  this.index     = start + shift;
	  /**
	   * Match#lastIndex -> Number
	   *
	   * Next position after matched string.
	   **/
	  this.lastIndex = end + shift;
	  /**
	   * Match#raw -> String
	   *
	   * Matched string.
	   **/
	  this.raw       = text;
	  /**
	   * Match#text -> String
	   *
	   * Notmalized text of matched string.
	   **/
	  this.text      = text;
	  /**
	   * Match#url -> String
	   *
	   * Normalized url of matched string.
	   **/
	  this.url       = text;
	}

	function createMatch(self, shift) {
	  var match = new Match(self, shift);

	  self.__compiled__[match.schema].normalize(match, self);

	  return match;
	}


	/**
	 * class LinkifyIt
	 **/

	/**
	 * new LinkifyIt(schemas, options)
	 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
	 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
	 *
	 * Creates new linkifier instance with optional additional schemas.
	 * Can be called without `new` keyword for convenience.
	 *
	 * By default understands:
	 *
	 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
	 * - "fuzzy" links and emails (example.com, foo@bar.com).
	 *
	 * `schemas` is an object, where each key/value describes protocol/rule:
	 *
	 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
	 *   for example). `linkify-it` makes shure that prefix is not preceeded with
	 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
	 * - __value__ - rule to check tail after link prefix
	 *   - _String_ - just alias to existing rule
	 *   - _Object_
	 *     - _validate_ - validator function (should return matched length on success),
	 *       or `RegExp`.
	 *     - _normalize_ - optional function to normalize text & url of matched result
	 *       (for example, for @twitter mentions).
	 *
	 * `options`:
	 *
	 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
	 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
	 *   like version numbers. Default `false`.
	 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
	 *
	 **/
	function LinkifyIt(schemas, options) {
	  if (!(this instanceof LinkifyIt)) {
	    return new LinkifyIt(schemas, options);
	  }

	  if (!options) {
	    if (isOptionsObj(schemas)) {
	      options = schemas;
	      schemas = {};
	    }
	  }

	  this.__opts__           = assign({}, defaultOptions, options);

	  // Cache last tested result. Used to skip repeating steps on next `match` call.
	  this.__index__          = -1;
	  this.__last_index__     = -1; // Next scan position
	  this.__schema__         = '';
	  this.__text_cache__     = '';

	  this.__schemas__        = assign({}, defaultSchemas, schemas);
	  this.__compiled__       = {};

	  this.__tlds__           = tlds_default;
	  this.__tlds_replaced__  = false;

	  this.re = {};

	  compile(this);
	}


	/** chainable
	 * LinkifyIt#add(schema, definition)
	 * - schema (String): rule name (fixed pattern prefix)
	 * - definition (String|RegExp|Object): schema definition
	 *
	 * Add new rule definition. See constructor description for details.
	 **/
	LinkifyIt.prototype.add = function add(schema, definition) {
	  this.__schemas__[schema] = definition;
	  compile(this);
	  return this;
	};


	/** chainable
	 * LinkifyIt#set(options)
	 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
	 *
	 * Set recognition options for links without schema.
	 **/
	LinkifyIt.prototype.set = function set(options) {
	  this.__opts__ = assign(this.__opts__, options);
	  return this;
	};


	/**
	 * LinkifyIt#test(text) -> Boolean
	 *
	 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
	 **/
	LinkifyIt.prototype.test = function test(text) {
	  // Reset scan cache
	  this.__text_cache__ = text;
	  this.__index__      = -1;

	  if (!text.length) { return false; }

	  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

	  // try to scan for link with schema - that's the most simple rule
	  if (this.re.schema_test.test(text)) {
	    re = this.re.schema_search;
	    re.lastIndex = 0;
	    while ((m = re.exec(text)) !== null) {
	      len = this.testSchemaAt(text, m[2], re.lastIndex);
	      if (len) {
	        this.__schema__     = m[2];
	        this.__index__      = m.index + m[1].length;
	        this.__last_index__ = m.index + m[0].length + len;
	        break;
	      }
	    }
	  }

	  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
	    // guess schemaless links
	    tld_pos = text.search(this.re.host_fuzzy_test);
	    if (tld_pos >= 0) {
	      // if tld is located after found link - no need to check fuzzy pattern
	      if (this.__index__ < 0 || tld_pos < this.__index__) {
	        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

	          shift = ml.index + ml[1].length;

	          if (this.__index__ < 0 || shift < this.__index__) {
	            this.__schema__     = '';
	            this.__index__      = shift;
	            this.__last_index__ = ml.index + ml[0].length;
	          }
	        }
	      }
	    }
	  }

	  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
	    // guess schemaless emails
	    at_pos = text.indexOf('@');
	    if (at_pos >= 0) {
	      // We can't skip this check, because this cases are possible:
	      // 192.168.1.1@gmail.com, my.in@example.com
	      if ((me = text.match(this.re.email_fuzzy)) !== null) {

	        shift = me.index + me[1].length;
	        next  = me.index + me[0].length;

	        if (this.__index__ < 0 || shift < this.__index__ ||
	            (shift === this.__index__ && next > this.__last_index__)) {
	          this.__schema__     = 'mailto:';
	          this.__index__      = shift;
	          this.__last_index__ = next;
	        }
	      }
	    }
	  }

	  return this.__index__ >= 0;
	};


	/**
	 * LinkifyIt#pretest(text) -> Boolean
	 *
	 * Very quick check, that can give false positives. Returns true if link MAY BE
	 * can exists. Can be used for speed optimization, when you need to check that
	 * link NOT exists.
	 **/
	LinkifyIt.prototype.pretest = function pretest(text) {
	  return this.re.pretest.test(text);
	};


	/**
	 * LinkifyIt#testSchemaAt(text, name, position) -> Number
	 * - text (String): text to scan
	 * - name (String): rule (schema) name
	 * - position (Number): text offset to check from
	 *
	 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
	 * at given position. Returns length of found pattern (0 on fail).
	 **/
	LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
	  // If not supported schema check requested - terminate
	  if (!this.__compiled__[schema.toLowerCase()]) {
	    return 0;
	  }
	  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
	};


	/**
	 * LinkifyIt#match(text) -> Array|null
	 *
	 * Returns array of found link descriptions or `null` on fail. We strongly
	 * to use [[LinkifyIt#test]] first, for best speed.
	 *
	 * ##### Result match description
	 *
	 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
	 *   protocol-neutral  links.
	 * - __index__ - offset of matched text
	 * - __lastIndex__ - index of next char after mathch end
	 * - __raw__ - matched text
	 * - __text__ - normalized text
	 * - __url__ - link, generated from matched text
	 **/
	LinkifyIt.prototype.match = function match(text) {
	  var shift = 0, result = [];

	  // Try to take previous element from cache, if .test() called before
	  if (this.__index__ >= 0 && this.__text_cache__ === text) {
	    result.push(createMatch(this, shift));
	    shift = this.__last_index__;
	  }

	  // Cut head if cache was used
	  var tail = shift ? text.slice(shift) : text;

	  // Scan string until end reached
	  while (this.test(tail)) {
	    result.push(createMatch(this, shift));

	    tail = tail.slice(this.__last_index__);
	    shift += this.__last_index__;
	  }

	  if (result.length) {
	    return result;
	  }

	  return null;
	};


	/** chainable
	 * LinkifyIt#tlds(list [, keepOld]) -> this
	 * - list (Array): list of tlds
	 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
	 *
	 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
	 * to avoid false positives. By default this algorythm used:
	 *
	 * - hostname with any 2-letter root zones are ok.
	 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
	 *   are ok.
	 * - encoded (`xn--...`) root zones are ok.
	 *
	 * If list is replaced, then exact match for 2-chars root zones will be checked.
	 **/
	LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
	  list = Array.isArray(list) ? list : [ list ];

	  if (!keepOld) {
	    this.__tlds__ = list.slice();
	    this.__tlds_replaced__ = true;
	    compile(this);
	    return this;
	  }

	  this.__tlds__ = this.__tlds__.concat(list)
	                                  .sort()
	                                  .filter(function(el, idx, arr) {
	                                    return el !== arr[idx - 1];
	                                  })
	                                  .reverse();

	  compile(this);
	  return this;
	};

	/**
	 * LinkifyIt#normalize(match)
	 *
	 * Default normalizer (if schema does not define it's own).
	 **/
	LinkifyIt.prototype.normalize = function normalize(match) {

	  // Do minimal possible changes by default. Need to collect feedback prior
	  // to move forward https://github.com/markdown-it/linkify-it/issues/1

	  if (!match.schema) { match.url = 'http://' + match.url; }

	  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
	    match.url = 'mailto:' + match.url;
	  }
	};


	module.exports = LinkifyIt;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Use direct extract instead of `regenerate` to reduse browserified size
	var src_Any = exports.src_Any = __webpack_require__(24).source;
	var src_Cc  = exports.src_Cc = __webpack_require__(25).source;
	var src_Z   = exports.src_Z  = __webpack_require__(27).source;
	var src_P   = exports.src_P  = __webpack_require__(17).source;

	// \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
	var src_ZPCc = exports.src_ZPCc = [ src_Z, src_P, src_Cc ].join('|');

	// \p{\Z\Cc} (white spaces + control)
	var src_ZCc = exports.src_ZCc = [ src_Z, src_Cc ].join('|');

	// All possible word characters (everything without punctuation, spaces & controls)
	// Defined via punctuation & spaces to save space
	// Should be something like \p{\L\N\S\M} (\w but without `_`)
	var src_pseudo_letter       = '(?:(?!' + src_ZPCc + ')' + src_Any + ')';
	// The same as abothe but without [0-9]
	var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

	////////////////////////////////////////////////////////////////////////////////

	var src_ip4 = exports.src_ip4 =

	  '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

	exports.src_auth    = '(?:(?:(?!' + src_ZCc + ').)+@)?';

	var src_port = exports.src_port =

	  '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

	var src_host_terminator = exports.src_host_terminator =

	  '(?=$|' + src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + src_ZPCc + '))';

	var src_path = exports.src_path =

	  '(?:' +
	    '[/?#]' +
	      '(?:' +
	        '(?!' + src_ZCc + '|[()[\\]{}.,"\'?!\\-]).|' +
	        '\\[(?:(?!' + src_ZCc + '|\\]).)*\\]|' +
	        '\\((?:(?!' + src_ZCc + '|[)]).)*\\)|' +
	        '\\{(?:(?!' + src_ZCc + '|[}]).)*\\}|' +
	        '\\"(?:(?!' + src_ZCc + '|["]).)+\\"|' +
	        "\\'(?:(?!" + src_ZCc + "|[']).)+\\'|" +
	        "\\'(?=" + src_pseudo_letter + ').|' +  // allow `I'm_king` if no pair found
	        '\\.{2,3}[a-zA-Z0-9%/]|' + // github has ... in commit range links. Restrict to
	                                   // - english
	                                   // - percent-encoded
	                                   // - parts of file path
	                                   // until more examples found.
	        '\\.(?!' + src_ZCc + '|[.]).|' +
	        '\\-(?!--(?:[^-]|$))(?:-*)|' +  // `---` => long dash, terminate
	        '\\,(?!' + src_ZCc + ').|' +      // allow `,,,` in paths
	        '\\!(?!' + src_ZCc + '|[!]).|' +
	        '\\?(?!' + src_ZCc + '|[?]).' +
	      ')+' +
	    '|\\/' +
	  ')?';

	var src_email_name = exports.src_email_name =

	  '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+';

	var src_xn = exports.src_xn =

	  'xn--[a-z0-9\\-]{1,59}';

	// More to read about domain names
	// http://serverfault.com/questions/638260/

	var src_domain_root = exports.src_domain_root =

	  // Can't have digits and dashes
	  '(?:' +
	    src_xn +
	    '|' +
	    src_pseudo_letter_non_d + '{1,63}' +
	  ')';

	var src_domain = exports.src_domain =

	  '(?:' +
	    src_xn +
	    '|' +
	    '(?:' + src_pseudo_letter + ')' +
	    '|' +
	    // don't allow `--` in domain names, because:
	    // - that can conflict with markdown &mdash; / &ndash;
	    // - nobody use those anyway
	    '(?:' + src_pseudo_letter + '(?:-(?!-)|' + src_pseudo_letter + '){0,61}' + src_pseudo_letter + ')' +
	  ')';

	var src_host = exports.src_host =

	  '(?:' +
	    src_ip4 +
	  '|' +
	    '(?:(?:(?:' + src_domain + ')\\.)*' + src_domain_root + ')' +
	  ')';

	var tpl_host_fuzzy = exports.tpl_host_fuzzy =

	  '(?:' +
	    src_ip4 +
	  '|' +
	    '(?:(?:(?:' + src_domain + ')\\.)+(?:%TLDS%))' +
	  ')';

	var tpl_host_no_ip_fuzzy = exports.tpl_host_no_ip_fuzzy =

	  '(?:(?:(?:' + src_domain + ')\\.)+(?:%TLDS%))';

	exports.src_host_strict =

	  src_host + src_host_terminator;

	var tpl_host_fuzzy_strict = exports.tpl_host_fuzzy_strict =

	  tpl_host_fuzzy + src_host_terminator;

	exports.src_host_port_strict =

	  src_host + src_port + src_host_terminator;

	var tpl_host_port_fuzzy_strict = exports.tpl_host_port_fuzzy_strict =

	  tpl_host_fuzzy + src_port + src_host_terminator;

	var tpl_host_port_no_ip_fuzzy_strict = exports.tpl_host_port_no_ip_fuzzy_strict =

	  tpl_host_no_ip_fuzzy + src_port + src_host_terminator;


	////////////////////////////////////////////////////////////////////////////////
	// Main rules

	// Rude test fuzzy links by host, for quick deny
	exports.tpl_host_fuzzy_test =

	  'localhost|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + src_ZPCc + '|$))';

	exports.tpl_email_fuzzy =

	    '(^|>|' + src_ZCc + ')(' + src_email_name + '@' + tpl_host_fuzzy_strict + ')';

	exports.tpl_link_fuzzy =
	    // Fuzzy link can't be prepended with .:/\- and non punctuation.
	    // but can start with > (markdown blockquote)
	    '(^|(?![.:/\\-_@])(?:[$+<=>^`|]|' + src_ZPCc + '))' +
	    '((?![$+<=>^`|])' + tpl_host_port_fuzzy_strict + src_path + ')';

	exports.tpl_link_no_ip_fuzzy =
	    // Fuzzy link can't be prepended with .:/\- and non punctuation.
	    // but can start with > (markdown blockquote)
	    '(^|(?![.:/\\-_@])(?:[$+<=>^`|]|' + src_ZPCc + '))' +
	    '((?![$+<=>^`|])' + tpl_host_port_no_ip_fuzzy_strict + src_path + ')';


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)(module), (function() { return this; }())))

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 76 */
/***/ function(module, exports) {

	// markdown-it default options

	'use strict';


	module.exports = {
	  options: {
	    html:         false,        // Enable HTML tags in source
	    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Could be either a String or an Array.
	    //
	    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
	    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
	    quotes: '\u201c\u201d\u2018\u2019' /* “”‘’ */,

	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,

	    maxNesting:   20            // Internal protection, recursion limit
	  },

	  components: {

	    core: {},
	    block: {},
	    inline: {}
	  }
	};


/***/ },
/* 77 */
/***/ function(module, exports) {

	// "Zero" preset, with nothing enabled. Useful for manual configuring of simple
	// modes. For example, to parse bold/italic only.

	'use strict';


	module.exports = {
	  options: {
	    html:         false,        // Enable HTML tags in source
	    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Could be either a String or an Array.
	    //
	    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
	    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
	    quotes: '\u201c\u201d\u2018\u2019' /* “”‘’ */,

	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,

	    maxNesting:   20            // Internal protection, recursion limit
	  },

	  components: {

	    core: {
	      rules: [
	        'normalize',
	        'block',
	        'inline'
	      ]
	    },

	    block: {
	      rules: [
	        'paragraph'
	      ]
	    },

	    inline: {
	      rules: [
	        'text'
	      ]
	    }
	  }
	};


/***/ },
/* 78 */
/***/ function(module, exports) {

	// Commonmark default options

	'use strict';


	module.exports = {
	  options: {
	    html:         true,         // Enable HTML tags in source
	    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Could be either a String or an Array.
	    //
	    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
	    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
	    quotes: '\u201c\u201d\u2018\u2019' /* “”‘’ */,

	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,

	    maxNesting:   20            // Internal protection, recursion limit
	  },

	  components: {

	    core: {
	      rules: [
	        'normalize',
	        'block',
	        'inline'
	      ]
	    },

	    block: {
	      rules: [
	        'blockquote',
	        'code',
	        'fence',
	        'heading',
	        'hr',
	        'html_block',
	        'lheading',
	        'list',
	        'reference',
	        'paragraph'
	      ]
	    },

	    inline: {
	      rules: [
	        'autolink',
	        'backticks',
	        'emphasis',
	        'entity',
	        'escape',
	        'html_inline',
	        'image',
	        'link',
	        'newline',
	        'text'
	      ]
	    }
	  }
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'h1',
	      null,
	      'Getting started'
	    );
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(81);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(82);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Basic'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-buttons">\n  <Button>Button</Button>\n  <Button href="https://github.com" target="_blank" a>Link</Button>\n</div>'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'States'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-buttons">\n  <Button color="blue">normal</Button>\n  <Button color="blue" active>active</Button>\n  <Button color="blue" hover>hover</Button>\n  <Button color="blue" disabled>disabled</Button>\n</div>'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Colors'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-buttons">\n  <Button color="blue">hello world</Button>\n  <Button color="red">hello world</Button>\n  <Button color="green">hello world</Button>\n  <Button color="yellow">hello world</Button>\n</div>'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Sizes'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-buttons">\n  <Button>hello world</Button>\n  <Button size="lg">hello world</Button>\n  <Button size="xlg">hello world</Button>\n</div>'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Block'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-buttons">\n  <Button size="lg" block>hello world</Button>\n  <Button size="lg" color="blue" block>hello world</Button>\n</div>'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Icons'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Powered by ',
	        React.createElement(
	          'a',
	          { href: 'http://ionicons.com/' },
	          'ionicons'
	        )
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-buttons">\n  <Button icon="ion-checkmark-round">hello world</Button>\n  <Button icon="ion-checkmark-round" size="lg">hello world</Button>\n  <Button icon="ion-checkmark-round" size="xlg">hello world</Button>\n  <Button icon="ion-checkmark-round" size="xlg" block>hello world</Button>\n  <Button icon="ion-checkmark-round"/>\n  <Button icon="ion-checkmark-round" size="lg"/>\n  <Button icon="ion-checkmark-round" size="xlg"/>\n  <Button color="blue" icon="ion-social-github" size="lg" href="https://github.com" target="_blank" a>github</Button>\n</div>'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Button group'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-button-groups">\n  <ButtonGroup>\n    <Button>hello</Button>\n    <Button>hello</Button>\n    <Button>hello</Button>\n    <Button>hello</Button>\n  </ButtonGroup>\n\n  <ButtonGroup>\n    <Button size="lg">hello</Button>\n    <Button size="lg">hello</Button>\n    <Button size="lg">hello</Button>\n    <Button size="lg">hello</Button>\n  </ButtonGroup>\n\n  <ButtonGroup>\n    <Button icon="ion-laptop">Desktop</Button>\n    <Button icon="ion-ipad">Tablet</Button>\n    <Button icon="ion-iphone">Mobile</Button>\n  </ButtonGroup>\n\n  <ButtonGroup>\n    <Button color="blue" icon="ion-laptop">Desktop</Button>\n    <Button color="blue" icon="ion-ipad">Tablet</Button>\n    <Button color="blue" icon="ion-iphone">Mobile</Button>\n  </ButtonGroup>\n</div>'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Loading Button'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-buttons">\n  <Button><Spinner/></Button>\n  <Button loading disabled>Saving</Button>\n  <Button color="blue" loading disabled>Saving</Button>\n  <Button color="yellow" loading disabled>Saving</Button>\n  <Button color="red" loading disabled>Saving</Button>\n</div>'
	      )
	    );
	  }
	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var babel = __webpack_require__(83);

	var Grid = __webpack_require__(8);
	var Button = __webpack_require__(84);
	var ButtonGroup = __webpack_require__(86);
	var Form = __webpack_require__(87);
	var Card = __webpack_require__(88);
	var Slat = __webpack_require__(91);
	var Field = __webpack_require__(92);
	var Checkbox = __webpack_require__(93);
	var Label = __webpack_require__(94);
	var Tabs = __webpack_require__(95);
	var Spinner = __webpack_require__(85);
	var FengForm = __webpack_require__(96);
	var Dropdown = __webpack_require__(123);
	var Dialog = __webpack_require__(124);
	var Avatar = __webpack_require__(125);
	var Markdown = __webpack_require__(11);

	var Code = __webpack_require__(126);

	module.exports = React.createClass({
	  displayName: 'Example',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      html: true
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      active: 0
	    };
	  },

	  render: function render() {
	    var showHtml = this.props.html;
	    var code = this.props.children;
	    var active = this.state.active;

	    var transformed = babel.transform(code).code;
	    var el = eval(transformed);

	    return React.createElement(
	      'div',
	      _extends({}, this.props, { className: 'm-example' }),
	      React.createElement(
	        'div',
	        { className: 'preview' },
	        el
	      ),
	      React.createElement(
	        Tabs.Tabs,
	        { className: 'codes' },
	        React.createElement(
	          Tabs.Nav,
	          null,
	          React.createElement(
	            Tabs.Tab,
	            { active: active === 0, onClick: this.changeTab.bind(null, 0) },
	            'React'
	          ),
	          showHtml ? React.createElement(
	            Tabs.Tab,
	            {
	              active: active === 1,
	              onClick: this.changeTab.bind(null, 1) },
	            'Html'
	          ) : null
	        ),
	        React.createElement(
	          Tabs.Contents,
	          null,
	          React.createElement(
	            Tabs.Content,
	            { active: active === 0 },
	            React.createElement(Code, { code: code })
	          ),
	          showHtml ? React.createElement(
	            Tabs.Content,
	            { active: active === 1 },
	            React.createElement(Code, { code: React.renderToStaticMarkup(el), format: true })
	          ) : null
	        )
	      )
	    );
	  },

	  changeTab: function changeTab(i) {
	    this.setState({
	      active: i
	    });
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = babel;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var cx = __webpack_require__(4);
	var Spinner = __webpack_require__(85);

	module.exports = React.createClass({
	  displayName: 'Button',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      a: false,
	      block: false,
	      active: false,
	      hover: false,
	      disabled: false,
	      loading: false
	    };
	  },

	  renderSpinner: function renderSpinner() {
	    if (!this.props.loading) return null;
	    var color = this.props.color;
	    return React.createElement(Spinner, { className: 'spinner', inverted: ['yellow', 'red', 'blue'].indexOf(color) >= 0 });
	  },

	  render: function render() {
	    var color = this.props.color;
	    var size = this.props.size;
	    var block = this.props.block;
	    var icon = this.props.icon;
	    var active = this.props.active;
	    var hover = this.props.hover;
	    var disabled = this.props.disabled;
	    var a = this.props.a;
	    var loading = this.props.loading;

	    var cn = cx('u-btn', color ? 'u-btn-' + color : null, size ? 'u-btn-' + size : null, icon, {
	      'u-btn-blk': block,
	      'u-btn-icon': icon && this.props.children,
	      'is-hover': hover,
	      'is-active': active,
	      'is-disabled': disabled,
	      'is-loading': loading
	    }, this.props.className);

	    delete this.props.disabled;

	    if (a) {
	      return React.createElement(
	        'a',
	        _extends({}, this.props, { className: cn, role: 'button' }),
	        this.renderSpinner(),
	        this.props.children
	      );
	    }

	    return React.createElement(
	      'button',
	      _extends({}, this.props, { className: cn, type: 'button' }),
	      this.renderSpinner(),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'spinner',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      inverted: false
	    };
	  },

	  render: function render() {
	    return React.createElement(
	      'span',
	      { className: cx('u-spinner', 'u-spinner-three-bounce', {
	          'is-inverted': this.props.inverted
	        }, this.props.className) },
	      React.createElement('span', { className: 'bounce1' }),
	      React.createElement('span', { className: 'bounce2' }),
	      React.createElement('span', { className: 'bounce3' })
	    );
	  }
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'ButtonGroup',

	  render: function render() {
	    return React.createElement(
	      'span',
	      { className: 'u-btn-group' },
	      this.props.children
	    );
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'Form',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      horizontal: false
	    };
	  },

	  render: function render() {
	    return React.createElement(
	      'form',
	      _extends({}, this.props, { className: cx('u-form', this.props.className) }),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);
	var Gravatar = __webpack_require__(89);

	module.exports = React.createClass({
	  displayName: 'Card',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      link: '#'
	    };
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: cx('u-card', this.props.className) },
	      React.createElement('div', { className: 'gradient' }),
	      React.createElement('img', { className: 'img', src: this.props.image }),
	      React.createElement(
	        'div',
	        { className: 'text' },
	        React.createElement(
	          'div',
	          { className: 'title' },
	          this.props.title
	        ),
	        React.createElement(
	          'div',
	          { className: 'leadtext' },
	          this.props.leadtext
	        ),
	        React.createElement(
	          'div',
	          { className: 'info' },
	          React.createElement(Gravatar, { className: 'avatar', email: this.props.authorEmail, size: 20 }),
	          React.createElement(
	            'span',
	            { className: 'author' },
	            this.props.authorName
	          ),
	          React.createElement(
	            'span',
	            { className: 'time' },
	            this.props.time
	          )
	        )
	      ),
	      React.createElement(
	        'span',
	        { className: 'label' },
	        this.props.label
	      ),
	      React.createElement('a', { className: 'link', href: this.props.link })
	    );
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var _md5 = __webpack_require__(90);
	var md5 = _md5.md5 || _md5;

	module.exports = React.createClass({
	  displayName: 'Gravatar',

	  render: function render() {
	    var email = this.props.email;
	    var size = this.props.size;
	    var hash = md5(email);

	    return React.createElement('img', _extends({}, this.props, {
	      src: 'http://www.gravatar.com/avatar/' + hash + '?s=' + size
	    }));
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * JavaScript MD5 1.0.1
	 * https://github.com/blueimp/JavaScript-MD5
	 *
	 * Copyright 2011, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 * 
	 * Based on
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	/*jslint bitwise: true */
	/*global unescape, define */

	(function ($) {
	    'use strict';

	    /*
	    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	    * to work around bugs in some JS interpreters.
	    */
	    function safe_add(x, y) {
	        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
	            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	        return (msw << 16) | (lsw & 0xFFFF);
	    }

	    /*
	    * Bitwise rotate a 32-bit number to the left.
	    */
	    function bit_rol(num, cnt) {
	        return (num << cnt) | (num >>> (32 - cnt));
	    }

	    /*
	    * These functions implement the four basic operations the algorithm uses.
	    */
	    function md5_cmn(q, a, b, x, s, t) {
	        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	    }
	    function md5_ff(a, b, c, d, x, s, t) {
	        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	    }
	    function md5_gg(a, b, c, d, x, s, t) {
	        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	    }
	    function md5_hh(a, b, c, d, x, s, t) {
	        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	    }
	    function md5_ii(a, b, c, d, x, s, t) {
	        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	    }

	    /*
	    * Calculate the MD5 of an array of little-endian words, and a bit length.
	    */
	    function binl_md5(x, len) {
	        /* append padding */
	        x[len >> 5] |= 0x80 << (len % 32);
	        x[(((len + 64) >>> 9) << 4) + 14] = len;

	        var i, olda, oldb, oldc, oldd,
	            a =  1732584193,
	            b = -271733879,
	            c = -1732584194,
	            d =  271733878;

	        for (i = 0; i < x.length; i += 16) {
	            olda = a;
	            oldb = b;
	            oldc = c;
	            oldd = d;

	            a = md5_ff(a, b, c, d, x[i],       7, -680876936);
	            d = md5_ff(d, a, b, c, x[i +  1], 12, -389564586);
	            c = md5_ff(c, d, a, b, x[i +  2], 17,  606105819);
	            b = md5_ff(b, c, d, a, x[i +  3], 22, -1044525330);
	            a = md5_ff(a, b, c, d, x[i +  4],  7, -176418897);
	            d = md5_ff(d, a, b, c, x[i +  5], 12,  1200080426);
	            c = md5_ff(c, d, a, b, x[i +  6], 17, -1473231341);
	            b = md5_ff(b, c, d, a, x[i +  7], 22, -45705983);
	            a = md5_ff(a, b, c, d, x[i +  8],  7,  1770035416);
	            d = md5_ff(d, a, b, c, x[i +  9], 12, -1958414417);
	            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
	            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
	            a = md5_ff(a, b, c, d, x[i + 12],  7,  1804603682);
	            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
	            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
	            b = md5_ff(b, c, d, a, x[i + 15], 22,  1236535329);

	            a = md5_gg(a, b, c, d, x[i +  1],  5, -165796510);
	            d = md5_gg(d, a, b, c, x[i +  6],  9, -1069501632);
	            c = md5_gg(c, d, a, b, x[i + 11], 14,  643717713);
	            b = md5_gg(b, c, d, a, x[i],      20, -373897302);
	            a = md5_gg(a, b, c, d, x[i +  5],  5, -701558691);
	            d = md5_gg(d, a, b, c, x[i + 10],  9,  38016083);
	            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
	            b = md5_gg(b, c, d, a, x[i +  4], 20, -405537848);
	            a = md5_gg(a, b, c, d, x[i +  9],  5,  568446438);
	            d = md5_gg(d, a, b, c, x[i + 14],  9, -1019803690);
	            c = md5_gg(c, d, a, b, x[i +  3], 14, -187363961);
	            b = md5_gg(b, c, d, a, x[i +  8], 20,  1163531501);
	            a = md5_gg(a, b, c, d, x[i + 13],  5, -1444681467);
	            d = md5_gg(d, a, b, c, x[i +  2],  9, -51403784);
	            c = md5_gg(c, d, a, b, x[i +  7], 14,  1735328473);
	            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

	            a = md5_hh(a, b, c, d, x[i +  5],  4, -378558);
	            d = md5_hh(d, a, b, c, x[i +  8], 11, -2022574463);
	            c = md5_hh(c, d, a, b, x[i + 11], 16,  1839030562);
	            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
	            a = md5_hh(a, b, c, d, x[i +  1],  4, -1530992060);
	            d = md5_hh(d, a, b, c, x[i +  4], 11,  1272893353);
	            c = md5_hh(c, d, a, b, x[i +  7], 16, -155497632);
	            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
	            a = md5_hh(a, b, c, d, x[i + 13],  4,  681279174);
	            d = md5_hh(d, a, b, c, x[i],      11, -358537222);
	            c = md5_hh(c, d, a, b, x[i +  3], 16, -722521979);
	            b = md5_hh(b, c, d, a, x[i +  6], 23,  76029189);
	            a = md5_hh(a, b, c, d, x[i +  9],  4, -640364487);
	            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
	            c = md5_hh(c, d, a, b, x[i + 15], 16,  530742520);
	            b = md5_hh(b, c, d, a, x[i +  2], 23, -995338651);

	            a = md5_ii(a, b, c, d, x[i],       6, -198630844);
	            d = md5_ii(d, a, b, c, x[i +  7], 10,  1126891415);
	            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
	            b = md5_ii(b, c, d, a, x[i +  5], 21, -57434055);
	            a = md5_ii(a, b, c, d, x[i + 12],  6,  1700485571);
	            d = md5_ii(d, a, b, c, x[i +  3], 10, -1894986606);
	            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
	            b = md5_ii(b, c, d, a, x[i +  1], 21, -2054922799);
	            a = md5_ii(a, b, c, d, x[i +  8],  6,  1873313359);
	            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
	            c = md5_ii(c, d, a, b, x[i +  6], 15, -1560198380);
	            b = md5_ii(b, c, d, a, x[i + 13], 21,  1309151649);
	            a = md5_ii(a, b, c, d, x[i +  4],  6, -145523070);
	            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
	            c = md5_ii(c, d, a, b, x[i +  2], 15,  718787259);
	            b = md5_ii(b, c, d, a, x[i +  9], 21, -343485551);

	            a = safe_add(a, olda);
	            b = safe_add(b, oldb);
	            c = safe_add(c, oldc);
	            d = safe_add(d, oldd);
	        }
	        return [a, b, c, d];
	    }

	    /*
	    * Convert an array of little-endian words to a string
	    */
	    function binl2rstr(input) {
	        var i,
	            output = '';
	        for (i = 0; i < input.length * 32; i += 8) {
	            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
	        }
	        return output;
	    }

	    /*
	    * Convert a raw string to an array of little-endian words
	    * Characters >255 have their high-byte silently ignored.
	    */
	    function rstr2binl(input) {
	        var i,
	            output = [];
	        output[(input.length >> 2) - 1] = undefined;
	        for (i = 0; i < output.length; i += 1) {
	            output[i] = 0;
	        }
	        for (i = 0; i < input.length * 8; i += 8) {
	            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
	        }
	        return output;
	    }

	    /*
	    * Calculate the MD5 of a raw string
	    */
	    function rstr_md5(s) {
	        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
	    }

	    /*
	    * Calculate the HMAC-MD5, of a key and some data (raw strings)
	    */
	    function rstr_hmac_md5(key, data) {
	        var i,
	            bkey = rstr2binl(key),
	            ipad = [],
	            opad = [],
	            hash;
	        ipad[15] = opad[15] = undefined;
	        if (bkey.length > 16) {
	            bkey = binl_md5(bkey, key.length * 8);
	        }
	        for (i = 0; i < 16; i += 1) {
	            ipad[i] = bkey[i] ^ 0x36363636;
	            opad[i] = bkey[i] ^ 0x5C5C5C5C;
	        }
	        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
	        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
	    }

	    /*
	    * Convert a raw string to a hex string
	    */
	    function rstr2hex(input) {
	        var hex_tab = '0123456789abcdef',
	            output = '',
	            x,
	            i;
	        for (i = 0; i < input.length; i += 1) {
	            x = input.charCodeAt(i);
	            output += hex_tab.charAt((x >>> 4) & 0x0F) +
	                hex_tab.charAt(x & 0x0F);
	        }
	        return output;
	    }

	    /*
	    * Encode a string as utf-8
	    */
	    function str2rstr_utf8(input) {
	        return unescape(encodeURIComponent(input));
	    }

	    /*
	    * Take string arguments and return either raw or hex encoded strings
	    */
	    function raw_md5(s) {
	        return rstr_md5(str2rstr_utf8(s));
	    }
	    function hex_md5(s) {
	        return rstr2hex(raw_md5(s));
	    }
	    function raw_hmac_md5(k, d) {
	        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
	    }
	    function hex_hmac_md5(k, d) {
	        return rstr2hex(raw_hmac_md5(k, d));
	    }

	    function md5(string, key, raw) {
	        if (!key) {
	            if (!raw) {
	                return hex_md5(string);
	            }
	            return raw_md5(string);
	        }
	        if (!raw) {
	            return hex_hmac_md5(key, string);
	        }
	        return raw_hmac_md5(key, string);
	    }

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return md5;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        $.md5 = md5;
	    }
	}(this));


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'Slat',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'u-slat' },
	      React.createElement('img', { className: 'img', src: this.props.image }),
	      React.createElement(
	        'div',
	        { className: 'title' },
	        this.props.title
	      ),
	      React.createElement(
	        'div',
	        { className: 'inner' },
	        this.props.children
	      )
	    );
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'Field',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      label: '',
	      horizontal: false
	    };
	  },

	  renderError: function renderError() {
	    if (!this.props.error) return null;

	    return React.createElement(
	      'span',
	      { className: 'error' },
	      this.props.error
	    );
	  },

	  renderLabel: function renderLabel() {
	    if (!this.props.label) return null;

	    return React.createElement(
	      'label',
	      { className: 'label' },
	      this.props.label
	    );
	  },

	  render: function render() {
	    var horizontal = this.props.horizontal;
	    var cn = cx('u-field', {
	      'u-field-x': horizontal,
	      'u-field-err': this.props.error
	    });

	    return React.createElement(
	      'div',
	      { className: cn },
	      this.renderLabel(),
	      this.props.children,
	      this.renderError()
	    );
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'Checkbox',

	  render: function render() {
	    return React.createElement(
	      'span',
	      { className: 'u-checkbox' },
	      React.createElement('input', { type: 'checkbox' }),
	      React.createElement(
	        'span',
	        { className: 'label' },
	        this.props.children
	      )
	    );
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var cx = __webpack_require__(4);

	module.exports = React.createClass({
	  displayName: 'Label',

	  render: function render() {
	    var color = this.props.color;
	    var cn = cx('u-label', color ? 'u-label-' + color : null, this.props.className);

	    return React.createElement(
	      'span',
	      _extends({}, this.props, { className: cn }),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);

	exports.Tabs = React.createClass({
	  displayName: 'Tabs',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      fixed: false,
	      alignRight: false
	    };
	  },

	  render: function render() {
	    var cn = cx('u-tabs', { 'u-tabs-fixed': this.props.fixed }, { 'is-right': this.props.alignRight }, this.props.className);

	    return React.createElement(
	      'div',
	      _extends({}, this.props, { className: cn }),
	      this.props.children
	    );
	  }
	});

	exports.Nav = React.createClass({
	  displayName: 'TabsNav',

	  render: function render() {
	    return React.createElement(
	      'div',
	      _extends({}, this.props, { className: 'tabs-nav' }),
	      this.props.children
	    );
	  }
	});

	exports.Tab = React.createClass({
	  displayName: 'TabsTab',

	  render: function render() {
	    var cn = cx('tab', { 'is-active': this.props.active }, this.props.className);

	    return React.createElement(
	      'div',
	      _extends({}, this.props, { className: cn }),
	      this.props.children
	    );
	  }
	});

	exports.Contents = React.createClass({
	  displayName: 'TabsContents',

	  render: function render() {
	    return React.createElement(
	      'div',
	      _extends({}, this.props, { className: 'tabs-contents' }),
	      this.props.children
	    );
	  }
	});

	exports.Content = React.createClass({
	  displayName: 'TabsContent',

	  render: function render() {
	    var cn = cx('tabs-content', { 'is-active': this.props.active }, this.props.className);

	    return React.createElement(
	      'div',
	      _extends({}, this.props, { className: cn }),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Select = __webpack_require__(97);
	var Switch = __webpack_require__(100);
	var Textarea = __webpack_require__(102);
	var InputColor = __webpack_require__(105);
	// var InputNumber = require('react-input-number');
	var InputSlider = __webpack_require__(115);

	// todo: avoid e.target.value
	// var InputText = require('./input-text');

	var Field = __webpack_require__(92);
	var Form = __webpack_require__(87);

	function renderElement(attr, value, onChange) {
	  var type = attr.type;
	  var name = attr.name;
	  var label = attr.label;

	  var handleChange = function handleChange(e) {
	    onChange(name, e.target.value);
	  };

	  // fix react-select options
	  if (attr.options) {
	    attr.options = attr.options.map(function (option) {
	      return {
	        value: option,
	        label: option
	      };
	    });

	    if (type === 'Array') {
	      handleChange = function (value, selected) {
	        onChange(name, selected.map(function (s) {
	          return s.value;
	        }));
	      };
	    } else if (type === 'Enum') {
	      handleChange = function (value, selected) {
	        onChange(name, value);
	      };
	    }
	  }

	  if (type === 'Boolean' || type === 'Color') {
	    handleChange = function (value) {
	      onChange(name, value);
	    };
	  }

	  switch (type) {
	    case 'Integer':
	      return React.createElement(
	        Field,
	        { label: label, horizontal: true },
	        React.createElement(
	          'span',
	          { className: 'input' },
	          React.createElement('input', {
	            type: 'number',
	            name: name,
	            value: parseInt(value, 10),
	            onChange: handleChange
	          })
	        )
	      );
	    case 'String':
	      return React.createElement(
	        Field,
	        { label: label },
	        React.createElement('input', {
	          type: 'text',
	          value: value,
	          name: name,
	          onChange: handleChange
	        })
	      );
	    case 'Color':
	      return React.createElement(
	        Field,
	        { label: label, horizontal: true },
	        React.createElement(
	          'span',
	          { className: 'input' },
	          React.createElement(InputColor, {
	            value: value || '#ffffff',
	            onChange: handleChange
	          })
	        )
	      );
	    case 'Text':
	      return React.createElement(
	        Field,
	        { label: label },
	        React.createElement(Textarea, {
	          rows: 4,
	          name: name,
	          value: value,
	          onChange: handleChange
	        })
	      );
	    case 'Boolean':
	      return React.createElement(
	        Field,
	        { label: label, horizontal: true },
	        React.createElement(
	          'div',
	          { className: 'input' },
	          React.createElement(Switch, {
	            checked: !!value,
	            onChange: handleChange
	          })
	        )
	      );
	    case 'Enum':
	      return React.createElement(
	        Field,
	        { label: label },
	        React.createElement(Select, {
	          name: name,
	          options: attr.options,
	          value: value,
	          onChange: handleChange
	        })
	      );
	    case 'Array':
	      return React.createElement(
	        Field,
	        { label: label },
	        React.createElement(Select, {
	          name: name,
	          options: attr.options,
	          value: value,
	          multi: true,
	          onChange: handleChange
	        })
	      );

	    case 'Range':
	      return React.createElement(
	        Field,
	        { label: label },
	        React.createElement(InputSlider, {
	          name: name,
	          x: value,
	          xmin: attr.min,
	          xmax: attr.max
	        })
	      );
	  }
	}

	var Element = React.createClass({
	  displayName: 'FengElement',

	  render: function render() {
	    var attr = this.props.attr;
	    var value = this.props.value;
	    return renderElement(attr, value, this.handleChange);
	  },

	  handleChange: function handleChange(name, value) {
	    if (this.props.onChange) this.props.onChange(name, value);
	  }
	});

	module.exports = React.createClass({
	  displayName: 'FengForm',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      attrs: [],
	      values: {}
	    };
	  },

	  render: function render() {
	    var _this = this;

	    var attrs = this.props.attrs;
	    var values = this.props.values;

	    return React.createElement(
	      Form,
	      this.props,
	      attrs.map(function (attr, i) {
	        return React.createElement(Element, {
	          key: i,
	          attr: attr,
	          value: values[attr.name],
	          onChange: _this.handleChange
	        });
	      })
	    );
	  },

	  handleChange: function handleChange(name, value) {
	    if (this.props.onChange) {
	      this.props.onChange(name, value);
	    }
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* disable some rules until we refactor more completely; fixing them now would
	   cause conflicts with some open PRs unnecessarily. */
	/* eslint react/jsx-sort-prop-types: 0, react/sort-comp: 0, react/prop-types: 0 */

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var Input = __webpack_require__(98);
	var classes = __webpack_require__(4);
	var Value = __webpack_require__(99);

	var requestId = 0;

	var Select = React.createClass({

		displayName: 'Select',

		propTypes: {
			allowCreate: React.PropTypes.bool, // wether to allow creation of new entries
			asyncOptions: React.PropTypes.func, // function to call to get options
			autoload: React.PropTypes.bool, // whether to auto-load the default async options set
			className: React.PropTypes.string, // className for the outer element
			clearable: React.PropTypes.bool, // should it be possible to reset value
			clearAllText: React.PropTypes.string, // title for the "clear" control when multi: true
			clearValueText: React.PropTypes.string, // title for the "clear" control
			delimiter: React.PropTypes.string, // delimiter to use to join multiple values
			disabled: React.PropTypes.bool, // whether the Select is disabled or not
			filterOption: React.PropTypes.func, // method to filter a single option: function(option, filterString)
			filterOptions: React.PropTypes.func, // method to filter the options array: function([options], filterString, [values])
			ignoreCase: React.PropTypes.bool, // whether to perform case-insensitive filtering
			inputProps: React.PropTypes.object, // custom attributes for the Input (in the Select-control) e.g: {'data-foo': 'bar'}
			matchPos: React.PropTypes.string, // (any|start) match the start or entire string when filtering
			matchProp: React.PropTypes.string, // (any|label|value) which option property to filter on
			multi: React.PropTypes.bool, // multi-value input
			name: React.PropTypes.string, // field name, for hidden <input /> tag
			addLabelText: React.PropTypes.string, // placeholder displayed when you want to add a label on a multi-value input
			noResultsText: React.PropTypes.string, // placeholder displayed when there are no matching search results
			onBlur: React.PropTypes.func, // onBlur handler: function(event) {}
			onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
			onFocus: React.PropTypes.func, // onFocus handler: function(event) {}
			onOptionLabelClick: React.PropTypes.func, // onCLick handler for value labels: function (value, event) {}
			optionRenderer: React.PropTypes.func, // optionRenderer: function(option) {}
			options: React.PropTypes.array, // array of options
			placeholder: React.PropTypes.string, // field placeholder, displayed when there's no value
			searchable: React.PropTypes.bool, // whether to enable searching feature or not
			searchPromptText: React.PropTypes.string, // label to prompt for search input
			value: React.PropTypes.any, // initial field value
			valueRenderer: React.PropTypes.func // valueRenderer: function(option) {}
		},

		getDefaultProps: function getDefaultProps() {
			return {
				allowCreate: false,
				asyncOptions: undefined,
				autoload: true,
				className: undefined,
				clearable: true,
				clearAllText: 'Clear all',
				clearValueText: 'Clear value',
				delimiter: ',',
				disabled: false,
				ignoreCase: true,
				inputProps: {},
				matchPos: 'any',
				matchProp: 'any',
				name: undefined,
				addLabelText: 'Add {label} ?',
				noResultsText: 'No results found',
				onChange: undefined,
				onOptionLabelClick: undefined,
				options: undefined,
				placeholder: 'Select...',
				searchable: true,
				searchPromptText: 'Type to search',
				value: undefined
			};
		},

		getInitialState: function getInitialState() {
			return {
				/*
	    * set by getStateFromValue on componentWillMount:
	    * - value
	    * - values
	    * - filteredOptions
	    * - inputValue
	    * - placeholder
	    * - focusedOption
	   */
				isFocused: false,
				isLoading: false,
				isOpen: false,
				options: this.props.options
			};
		},

		componentWillMount: function componentWillMount() {
			this._optionsCache = {};
			this._optionsFilterString = '';

			var self = this;
			this._closeMenuIfClickedOutside = function (event) {
				if (!self.state.isOpen) {
					return;
				}
				var menuElem = React.findDOMNode(self.refs.selectMenuContainer);
				var controlElem = React.findDOMNode(self.refs.control);

				var eventOccuredOutsideMenu = self.clickedOutsideElement(menuElem, event);
				var eventOccuredOutsideControl = self.clickedOutsideElement(controlElem, event);

				// Hide dropdown menu if click occurred outside of menu
				if (eventOccuredOutsideMenu && eventOccuredOutsideControl) {
					self.setState({
						isOpen: false
					}, self._unbindCloseMenuIfClickedOutside);
				}
			};

			this._bindCloseMenuIfClickedOutside = function () {
				if (!document.addEventListener && document.attachEvent) {
					document.attachEvent('onclick', this._closeMenuIfClickedOutside);
				} else {
					document.addEventListener('click', this._closeMenuIfClickedOutside);
				}
			};

			this._unbindCloseMenuIfClickedOutside = function () {
				if (!document.removeEventListener && document.detachEvent) {
					document.detachEvent('onclick', this._closeMenuIfClickedOutside);
				} else {
					document.removeEventListener('click', this._closeMenuIfClickedOutside);
				}
			};

			this.setState(this.getStateFromValue(this.props.value));
		},

		componentDidMount: function componentDidMount() {
			if (this.props.asyncOptions && this.props.autoload) {
				this.autoloadAsyncOptions();
			}
		},

		componentWillUnmount: function componentWillUnmount() {
			clearTimeout(this._blurTimeout);
			clearTimeout(this._focusTimeout);

			if (this.state.isOpen) {
				this._unbindCloseMenuIfClickedOutside();
			}
		},

		componentWillReceiveProps: function componentWillReceiveProps(newProps) {
			if (JSON.stringify(newProps.options) !== JSON.stringify(this.props.options)) {
				this.setState({
					options: newProps.options,
					filteredOptions: this.filterOptions(newProps.options)
				});
			}
			if (newProps.value !== this.state.value || newProps.placeholder !== this.state.placeholder) {
				this.setState(this.getStateFromValue(newProps.value, newProps.options, newProps.placeholder));
			}
		},

		componentDidUpdate: function componentDidUpdate() {
			var self = this;

			if (!this.props.disabled && this._focusAfterUpdate) {
				clearTimeout(this._blurTimeout);
				this._focusTimeout = setTimeout(function () {
					self.getInputNode().focus();
					self._focusAfterUpdate = false;
				}, 50);
			}

			if (this._focusedOptionReveal) {
				if (this.refs.focused && this.refs.menu) {
					var focusedDOM = React.findDOMNode(this.refs.focused);
					var menuDOM = React.findDOMNode(this.refs.menu);
					var focusedRect = focusedDOM.getBoundingClientRect();
					var menuRect = menuDOM.getBoundingClientRect();

					if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
						menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
					}
				}
				this._focusedOptionReveal = false;
			}
		},

		focus: function focus() {
			this.getInputNode().focus();
		},

		clickedOutsideElement: function clickedOutsideElement(element, event) {
			var eventTarget = event.target ? event.target : event.srcElement;
			while (eventTarget != null) {
				if (eventTarget === element) return false;
				eventTarget = eventTarget.offsetParent;
			}
			return true;
		},

		getStateFromValue: function getStateFromValue(value, options, placeholder) {
			if (!options) {
				options = this.state.options;
			}
			if (!placeholder) {
				placeholder = this.props.placeholder;
			}

			// reset internal filter string
			this._optionsFilterString = '';

			var values = this.initValuesArray(value, options),
			    filteredOptions = this.filterOptions(options, values);

			return {
				value: values.map(function (v) {
					return v.value;
				}).join(this.props.delimiter),
				values: values,
				inputValue: '',
				filteredOptions: filteredOptions,
				placeholder: !this.props.multi && values.length ? values[0].label : placeholder,
				focusedOption: !this.props.multi && values.length ? values[0] : filteredOptions[0]
			};
		},

		initValuesArray: function initValuesArray(values, options) {
			if (!Array.isArray(values)) {
				if (typeof values === 'string') {
					values = values === '' ? [] : values.split(this.props.delimiter);
				} else {
					values = values ? [values] : [];
				}
			}

			return values.map(function (val) {
				if (typeof val === 'string') {
					for (var key in options) {
						if (options.hasOwnProperty(key) && options[key] && options[key].value === val) {
							return options[key];
						}
					}
					return { value: val, label: val };
				} else {
					return val;
				}
			});
		},

		setValue: function setValue(value, focusAfterUpdate) {
			if (focusAfterUpdate || focusAfterUpdate === undefined) {
				this._focusAfterUpdate = true;
			}
			var newState = this.getStateFromValue(value);
			newState.isOpen = false;
			this.fireChangeEvent(newState);
			this.setState(newState);
		},

		selectValue: function selectValue(value) {
			if (!this.props.multi) {
				this.setValue(value);
			} else if (value) {
				this.addValue(value);
			}
			this._unbindCloseMenuIfClickedOutside();
		},

		addValue: function addValue(value) {
			this.setValue(this.state.values.concat(value));
		},

		popValue: function popValue() {
			this.setValue(this.state.values.slice(0, this.state.values.length - 1));
		},

		removeValue: function removeValue(valueToRemove) {
			this.setValue(this.state.values.filter(function (value) {
				return value !== valueToRemove;
			}));
		},

		clearValue: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setValue(null);
		},

		resetValue: function resetValue() {
			this.setValue(this.state.value === '' ? null : this.state.value);
		},

		getInputNode: function getInputNode() {
			var input = this.refs.input;
			return this.props.searchable ? input : React.findDOMNode(input);
		},

		fireChangeEvent: function fireChangeEvent(newState) {
			if (newState.value !== this.state.value && this.props.onChange) {
				this.props.onChange(newState.value, newState.values);
			}
		},

		handleMouseDown: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.stopPropagation();
			event.preventDefault();
			if (this.state.isFocused) {
				this.setState({
					isOpen: true
				}, this._bindCloseMenuIfClickedOutside);
			} else {
				this._openAfterFocus = true;
				this.getInputNode().focus();
			}
		},

		handleMouseDownOnArrow: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			// If not focused, handleMouseDown will handle it
			if (!this.state.isOpen) {
				return;
			}

			event.stopPropagation();
			event.preventDefault();
			this.setState({
				isOpen: false
			}, this._unbindCloseMenuIfClickedOutside);
		},

		handleInputFocus: function handleInputFocus(event) {
			var newIsOpen = this.state.isOpen || this._openAfterFocus;
			this.setState({
				isFocused: true,
				isOpen: newIsOpen
			}, function () {
				if (newIsOpen) {
					this._bindCloseMenuIfClickedOutside();
				} else {
					this._unbindCloseMenuIfClickedOutside();
				}
			});
			this._openAfterFocus = false;

			if (this.props.onFocus) {
				this.props.onFocus(event);
			}
		},

		handleInputBlur: function handleInputBlur(event) {
			var self = this;

			this._blurTimeout = setTimeout(function () {
				if (self._focusAfterUpdate) return;

				self.setState({
					isFocused: false
				});
			}, 50);

			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
		},

		handleKeyDown: function handleKeyDown(event) {
			if (this.state.disabled) return;

			switch (event.keyCode) {

				case 8:
					// backspace
					if (!this.state.inputValue) {
						this.popValue();
					}
					return;

				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.state.focusedOption) {
						return;
					}
					this.selectFocusedOption();
					break;

				case 13:
					// enter
					if (!this.state.isOpen) return;

					this.selectFocusedOption();
					break;

				case 27:
					// escape
					if (this.state.isOpen) {
						this.resetValue();
					} else {
						this.clearValue(event);
					}
					break;

				case 38:
					// up
					this.focusPreviousOption();
					break;

				case 40:
					// down
					this.focusNextOption();
					break;

				case 188:
					// ,
					if (this.props.allowCreate && this.props.multi) {
						event.preventDefault();
						event.stopPropagation();
						this.selectFocusedOption();
					} else {
						return;
					}
					break;

				default:
					return;
			}

			event.preventDefault();
		},

		// Ensures that the currently focused option is available in filteredOptions.
		// If not, returns the first available option.
		_getNewFocusedOption: function _getNewFocusedOption(filteredOptions) {
			for (var key in filteredOptions) {
				if (filteredOptions.hasOwnProperty(key) && filteredOptions[key] === this.state.focusedOption) {
					return filteredOptions[key];
				}
			}
			return filteredOptions[0];
		},

		handleInputChange: function handleInputChange(event) {
			// assign an internal variable because we need to use
			// the latest value before setState() has completed.
			this._optionsFilterString = event.target.value;

			if (this.props.asyncOptions) {
				this.setState({
					isLoading: true,
					inputValue: event.target.value
				});
				this.loadAsyncOptions(event.target.value, {
					isLoading: false,
					isOpen: true
				}, this._bindCloseMenuIfClickedOutside);
			} else {
				var filteredOptions = this.filterOptions(this.state.options);
				this.setState({
					isOpen: true,
					inputValue: event.target.value,
					filteredOptions: filteredOptions,
					focusedOption: this._getNewFocusedOption(filteredOptions)
				}, this._bindCloseMenuIfClickedOutside);
			}
		},

		autoloadAsyncOptions: function autoloadAsyncOptions() {
			var self = this;
			this.loadAsyncOptions(this.props.value || '', {}, function () {
				// update with fetched but don't focus
				self.setValue(self.props.value, false);
			});
		},

		loadAsyncOptions: function loadAsyncOptions(input, state, callback) {
			var thisRequestId = this._currentRequestId = requestId++;

			for (var i = 0; i <= input.length; i++) {
				var cacheKey = input.slice(0, i);
				if (this._optionsCache[cacheKey] && (input === cacheKey || this._optionsCache[cacheKey].complete)) {
					var options = this._optionsCache[cacheKey].options;
					var filteredOptions = this.filterOptions(options);

					var newState = {
						options: options,
						filteredOptions: filteredOptions,
						focusedOption: this._getNewFocusedOption(filteredOptions)
					};
					for (var key in state) {
						if (state.hasOwnProperty(key)) {
							newState[key] = state[key];
						}
					}
					this.setState(newState);
					if (callback) callback.call(this, {});
					return;
				}
			}

			var self = this;
			this.props.asyncOptions(input, function (err, data) {

				if (err) throw err;

				self._optionsCache[input] = data;

				if (thisRequestId !== self._currentRequestId) {
					return;
				}
				var filteredOptions = self.filterOptions(data.options);

				var newState = {
					options: data.options,
					filteredOptions: filteredOptions,
					focusedOption: self._getNewFocusedOption(filteredOptions)
				};
				for (var key in state) {
					if (state.hasOwnProperty(key)) {
						newState[key] = state[key];
					}
				}
				self.setState(newState);

				if (callback) callback.call(self, {});
			});
		},

		filterOptions: function filterOptions(options, values) {
			if (!this.props.searchable) {
				return options;
			}

			var filterValue = this._optionsFilterString;
			var exclude = (values || this.state.values).map(function (i) {
				return i.value;
			});
			if (this.props.filterOptions) {
				return this.props.filterOptions.call(this, options, filterValue, exclude);
			} else {
				var filterOption = function filterOption(op) {
					if (this.props.multi && exclude.indexOf(op.value) > -1) return false;
					if (this.props.filterOption) return this.props.filterOption.call(this, op, filterValue);
					var valueTest = String(op.value),
					    labelTest = String(op.label);
					if (this.props.ignoreCase) {
						valueTest = valueTest.toLowerCase();
						labelTest = labelTest.toLowerCase();
						filterValue = filterValue.toLowerCase();
					}
					return !filterValue || this.props.matchPos === 'start' ? this.props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || this.props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : this.props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || this.props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
				};
				return (options || []).filter(filterOption, this);
			}
		},

		selectFocusedOption: function selectFocusedOption() {
			if (this.props.allowCreate && !this.state.focusedOption) {
				return this.selectValue(this.state.inputValue);
			}
			return this.selectValue(this.state.focusedOption);
		},

		focusOption: function focusOption(op) {
			this.setState({
				focusedOption: op
			});
		},

		focusNextOption: function focusNextOption() {
			this.focusAdjacentOption('next');
		},

		focusPreviousOption: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		},

		focusAdjacentOption: function focusAdjacentOption(dir) {
			this._focusedOptionReveal = true;

			var ops = this.state.filteredOptions;

			if (!this.state.isOpen) {
				this.setState({
					isOpen: true,
					inputValue: '',
					focusedOption: this.state.focusedOption || ops[dir === 'next' ? 0 : ops.length - 1]
				}, this._bindCloseMenuIfClickedOutside);
				return;
			}

			if (!ops.length) {
				return;
			}

			var focusedIndex = -1;

			for (var i = 0; i < ops.length; i++) {
				if (this.state.focusedOption === ops[i]) {
					focusedIndex = i;
					break;
				}
			}

			var focusedOption = ops[0];

			if (dir === 'next' && focusedIndex > -1 && focusedIndex < ops.length - 1) {
				focusedOption = ops[focusedIndex + 1];
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedOption = ops[focusedIndex - 1];
				} else {
					focusedOption = ops[ops.length - 1];
				}
			}

			this.setState({
				focusedOption: focusedOption
			});
		},

		unfocusOption: function unfocusOption(op) {
			if (this.state.focusedOption === op) {
				this.setState({
					focusedOption: null
				});
			}
		},

		buildMenu: function buildMenu() {
			var focusedValue = this.state.focusedOption ? this.state.focusedOption.value : null;
			var renderLabel = this.props.optionRenderer || function (op) {
				return op.label;
			};

			if (this.state.filteredOptions.length > 0) {
				focusedValue = focusedValue == null ? this.state.filteredOptions[0] : focusedValue;
			}
			// Add the current value to the filtered options in last resort
			var options = this.state.filteredOptions;
			if (this.props.allowCreate && this.state.inputValue.trim()) {
				var inputValue = this.state.inputValue;
				options = options.slice();
				options.unshift({
					value: inputValue,
					label: inputValue,
					create: true
				});
			}

			var ops = Object.keys(options).map(function (key) {
				var op = options[key];
				var isSelected = this.state.value === op.value;
				var isFocused = focusedValue === op.value;

				var optionClass = classes({
					'Select-option': true,
					'is-selected': isSelected,
					'is-focused': isFocused,
					'is-disabled': op.disabled
				});

				var ref = isFocused ? 'focused' : null;

				var mouseEnter = this.focusOption.bind(this, op);
				var mouseLeave = this.unfocusOption.bind(this, op);
				var mouseDown = this.selectValue.bind(this, op);
				var renderedLabel = renderLabel(op);

				return op.disabled ? React.createElement(
					'div',
					{ ref: ref, key: 'option-' + op.value, className: optionClass },
					renderedLabel
				) : React.createElement(
					'div',
					{ ref: ref, key: 'option-' + op.value, className: optionClass, onMouseEnter: mouseEnter, onMouseLeave: mouseLeave, onMouseDown: mouseDown, onClick: mouseDown },
					op.create ? this.props.addLabelText.replace('{label}', op.label) : renderedLabel
				);
			}, this);

			return ops.length ? ops : React.createElement(
				'div',
				{ className: 'Select-noresults' },
				this.props.asyncOptions && !this.state.inputValue ? this.props.searchPromptText : this.props.noResultsText
			);
		},

		handleOptionLabelClick: function handleOptionLabelClick(value, event) {
			if (this.props.onOptionLabelClick) {
				this.props.onOptionLabelClick(value, event);
			}
		},

		render: function render() {
			var selectClass = classes('Select', this.props.className, {
				'is-multi': this.props.multi,
				'is-searchable': this.props.searchable,
				'is-open': this.state.isOpen,
				'is-focused': this.state.isFocused,
				'is-loading': this.state.isLoading,
				'is-disabled': this.props.disabled,
				'has-value': this.state.value
			});

			var value = [];

			if (this.props.multi) {
				this.state.values.forEach(function (val) {
					value.push(React.createElement(Value, {
						key: val.value,
						option: val,
						renderer: this.props.valueRenderer,
						optionLabelClick: !!this.props.onOptionLabelClick,
						onOptionLabelClick: this.handleOptionLabelClick.bind(this, val),
						onRemove: this.removeValue.bind(this, val),
						disabled: this.props.disabled }));
				}, this);
			}

			if (!this.state.inputValue && (!this.props.multi || !value.length)) {
				value.push(React.createElement(
					'div',
					{ className: 'Select-placeholder', key: 'placeholder' },
					this.state.placeholder
				));
			}

			var loading = this.state.isLoading ? React.createElement('span', { className: 'Select-loading', 'aria-hidden': 'true' }) : null;
			var clear = this.props.clearable && this.state.value && !this.props.disabled ? React.createElement('span', { className: 'Select-clear', title: this.props.multi ? this.props.clearAllText : this.props.clearValueText, 'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText, onMouseDown: this.clearValue, onClick: this.clearValue, dangerouslySetInnerHTML: { __html: '&times;' } }) : null;

			var menu;
			var menuProps;
			if (this.state.isOpen) {
				menuProps = {
					ref: 'menu',
					className: 'Select-menu'
				};
				if (this.props.multi) {
					menuProps.onMouseDown = this.handleMouseDown;
				}
				menu = React.createElement(
					'div',
					{ ref: 'selectMenuContainer', className: 'Select-menu-outer' },
					React.createElement(
						'div',
						menuProps,
						this.buildMenu()
					)
				);
			}

			var input;
			var inputProps = {
				ref: 'input',
				className: 'Select-input',
				tabIndex: this.props.tabIndex || 0,
				onFocus: this.handleInputFocus,
				onBlur: this.handleInputBlur
			};
			for (var key in this.props.inputProps) {
				if (this.props.inputProps.hasOwnProperty(key)) {
					inputProps[key] = this.props.inputProps[key];
				}
			}

			if (!this.props.disabled) {
				if (this.props.searchable) {
					input = React.createElement(Input, _extends({ value: this.state.inputValue, onChange: this.handleInputChange, minWidth: '5' }, inputProps));
				} else {
					input = React.createElement(
						'div',
						inputProps,
						' '
					);
				}
			} else if (!this.props.multi || !this.state.values.length) {
				input = React.createElement(
					'div',
					{ className: 'Select-input' },
					' '
				);
			}

			return React.createElement(
				'div',
				{ ref: 'wrapper', className: selectClass },
				React.createElement('input', { type: 'hidden', ref: 'value', name: this.props.name, value: this.state.value, disabled: this.props.disabled }),
				React.createElement(
					'div',
					{ className: 'Select-control', ref: 'control', onKeyDown: this.handleKeyDown, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
					value,
					input,
					React.createElement('span', { className: 'Select-arrow-zone', onMouseDown: this.handleMouseDownOnArrow }),
					React.createElement('span', { className: 'Select-arrow', onMouseDown: this.handleMouseDownOnArrow }),
					loading,
					clear
				),
				menu
			);
		}

	});

	module.exports = Select;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);

	var sizerStyle = { position: 'absolute', visibility: 'hidden', height: 0, width: 0, overflow: 'scroll', whiteSpace: 'nowrap' };

	var AutosizeInput = React.createClass({
		displayName: 'AutosizeInput',

		propTypes: {
			value: React.PropTypes.any, // field value
			defaultValue: React.PropTypes.any, // default field value
			onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
			style: React.PropTypes.object, // css styles for the outer element
			className: React.PropTypes.string, // className for the outer element
			minWidth: React.PropTypes.oneOfType([// minimum width for input element
			React.PropTypes.number, React.PropTypes.string]),
			inputStyle: React.PropTypes.object, // css styles for the input element
			inputClassName: React.PropTypes.string // className for the input element
		},
		getDefaultProps: function getDefaultProps() {
			return {
				minWidth: 1
			};
		},
		getInitialState: function getInitialState() {
			return {
				inputWidth: this.props.minWidth
			};
		},
		componentDidMount: function componentDidMount() {
			this.copyInputStyles();
			this.updateInputWidth();
		},
		componentDidUpdate: function componentDidUpdate() {
			this.updateInputWidth();
		},
		copyInputStyles: function copyInputStyles() {
			if (!this.isMounted() || !window.getComputedStyle) {
				return;
			}
			var inputStyle = window.getComputedStyle(React.findDOMNode(this.refs.input));
			var widthNode = React.findDOMNode(this.refs.sizer);
			widthNode.style.fontSize = inputStyle.fontSize;
			widthNode.style.fontFamily = inputStyle.fontFamily;
			if (this.props.placeholder) {
				var placeholderNode = React.findDOMNode(this.refs.placeholderSizer);
				placeholderNode.style.fontSize = inputStyle.fontSize;
				placeholderNode.style.fontFamily = inputStyle.fontFamily;
			}
		},
		updateInputWidth: function updateInputWidth() {
			if (!this.isMounted() || typeof React.findDOMNode(this.refs.sizer).scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth;
			if (this.props.placeholder) {
				newInputWidth = Math.max(React.findDOMNode(this.refs.sizer).scrollWidth, React.findDOMNode(this.refs.placeholderSizer).scrollWidth) + 2;
			} else {
				newInputWidth = React.findDOMNode(this.refs.sizer).scrollWidth + 2;
			}
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		},
		getInput: function getInput() {
			return this.refs.input;
		},
		focus: function focus() {
			React.findDOMNode(this.refs.input).focus();
		},
		select: function select() {
			React.findDOMNode(this.refs.input).select();
		},
		render: function render() {
			var escapedValue = (this.props.value || '').replace(/\&/g, '&amp;').replace(/ /g, '&nbsp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
			var wrapperStyle = this.props.style || {};
			wrapperStyle.display = 'inline-block';
			var inputStyle = this.props.inputStyle || {};
			inputStyle.width = this.state.inputWidth;
			var placeholder = this.props.placeholder ? React.createElement(
				'div',
				{ ref: 'placeholderSizer', style: sizerStyle },
				this.props.placeholder
			) : null;
			return React.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				React.createElement('input', _extends({}, this.props, { ref: 'input', className: this.props.inputClassName, style: inputStyle })),
				React.createElement('div', { ref: 'sizer', style: sizerStyle, dangerouslySetInnerHTML: { __html: escapedValue } }),
				placeholder
			);
		}
	});

	module.exports = AutosizeInput;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Value = React.createClass({

		displayName: 'Value',

		propTypes: {
			disabled: React.PropTypes.bool,
			onOptionLabelClick: React.PropTypes.func,
			onRemove: React.PropTypes.func,
			option: React.PropTypes.object.isRequired,
			optionLabelClick: React.PropTypes.bool,
			renderer: React.PropTypes.func
		},

		blockEvent: function blockEvent(event) {
			event.stopPropagation();
		},

		handleOnRemove: function handleOnRemove(event) {
			if (!this.props.disabled) {
				this.props.onRemove(event);
			}
		},

		render: function render() {
			var label = this.props.option.label;
			if (this.props.renderer) {
				label = this.props.renderer(this.props.option);
			}

			if (this.props.optionLabelClick) {
				label = React.createElement(
					'a',
					{ className: 'Select-item-label__a',
						onMouseDown: this.blockEvent,
						onTouchEnd: this.props.onOptionLabelClick,
						onClick: this.props.onOptionLabelClick },
					label
				);
			}

			return React.createElement(
				'div',
				{ className: 'Select-item' },
				React.createElement(
					'span',
					{ className: 'Select-item-icon',
						onMouseDown: this.blockEvent,
						onClick: this.handleOnRemove,
						onTouchEnd: this.handleOnRemove },
					'×'
				),
				React.createElement(
					'span',
					{ className: 'Select-item-label' },
					label
				)
			);
		}

	});

	module.exports = Value;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(101);


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'exports',

	  display: 'InputSwitch',

	  render: function render() {
	    var name = this.props.name;
	    var checked = !!this.props.checked;
	    var classes = { 'is-checked': checked };
	    classes['u-switch'] = true;
	    this.checked = checked;

	    return React.createElement(
	      'label',
	      { className: cx(classes) },
	      React.createElement('input', {
	        type: 'checkbox',
	        name: name,
	        onClick: this.handleClick
	      }),
	      React.createElement('span', { className: 'track' }),
	      React.createElement('span', { className: 'button' })
	    );
	  },

	  handleClick: function handleClick() {
	    if (this.props.onChange) {
	      this.props.onChange(!this.checked);
	    }
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	/**
	 * <TextareaAutosize />
	 */

	var _React = __webpack_require__(1);

	var _React2 = _interopRequireWildcard(_React);

	var _emptyFunction = __webpack_require__(103);

	var _emptyFunction2 = _interopRequireWildcard(_emptyFunction);

	var _calculateNodeHeight = __webpack_require__(104);

	var _calculateNodeHeight2 = _interopRequireWildcard(_calculateNodeHeight);

	var TextareaAutosize = (function (_React$Component) {
	  function TextareaAutosize(props) {
	    _classCallCheck(this, TextareaAutosize);

	    _get(Object.getPrototypeOf(TextareaAutosize.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      height: null,
	      minHeight: -Infinity,
	      maxHeight: Infinity
	    };
	    this._onChange = this._onChange.bind(this);
	    this._resizeComponent = this._resizeComponent.bind(this);
	  }

	  _inherits(TextareaAutosize, _React$Component);

	  _createClass(TextareaAutosize, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var valueLink = _props.valueLink;
	      var onChange = _props.onChange;

	      var props = _objectWithoutProperties(_props, ['valueLink', 'onChange']);

	      props = _extends({}, props);
	      if (typeof valueLink === 'object') {
	        props.value = this.props.valueLink.value;
	      }
	      props.style = _extends({}, props.style, {
	        height: this.state.height
	      });
	      var maxHeight = Math.max(props.style.maxHeight ? props.style.maxHeight : Infinity, this.state.maxHeight);
	      if (maxHeight < this.state.height) {
	        props.style.overflow = 'hidden';
	      }
	      return _React2['default'].createElement('textarea', _extends({}, props, { onChange: this._onChange }));
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._resizeComponent();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      // Re-render with the new content then recalculate the height as required.
	      this.clearNextFrame();
	      this.onNextFrameActionId = onNextFrame(this._resizeComponent);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      // Invoke callback when old height does not equal to new one.
	      if (this.state.height !== prevState.height) {
	        this.props.onHeightChange(this.state.height);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      //remove any scheduled events to prevent manipulating the node after it's
	      //been unmounted
	      this.clearNextFrame();
	    }
	  }, {
	    key: 'clearNextFrame',
	    value: function clearNextFrame() {
	      if (this.onNextFrameActionId) {
	        clearNextFrameAction(this.onNextFrameActionId);
	      }
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(e) {
	      this._resizeComponent();
	      var _props2 = this.props;
	      var valueLink = _props2.valueLink;
	      var onChange = _props2.onChange;

	      if (valueLink) {
	        valueLink.requestChange(e.target.value);
	      } else {
	        onChange(e);
	      }
	    }
	  }, {
	    key: '_resizeComponent',
	    value: function _resizeComponent() {
	      var useCacheForDOMMeasurements = this.props.useCacheForDOMMeasurements;

	      this.setState(_calculateNodeHeight2['default'](_React2['default'].findDOMNode(this), useCacheForDOMMeasurements, this.props.rows || this.props.minRows, this.props.maxRows));
	    }
	  }, {
	    key: 'value',

	    /**
	     * Read the current value of <textarea /> from DOM.
	     */
	    get: function () {
	      return _React2['default'].findDOMNode(this).value;
	    }
	  }, {
	    key: 'focus',

	    /**
	     * Put focus on a <textarea /> DOM element.
	     */
	    value: function focus() {
	      _React2['default'].findDOMNode(this).focus();
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      /**
	       * Current textarea value.
	       */
	      value: _React2['default'].PropTypes.string,

	      /**
	       * Callback on value change.
	       */
	      onChange: _React2['default'].PropTypes.func,

	      /**
	       * Callback on height changes.
	       */
	      onHeightChange: _React2['default'].PropTypes.func,

	      /**
	       * Try to cache DOM measurements performed by component so that we don't
	       * touch DOM when it's not needed.
	       *
	       * This optimization doesn't work if we dynamically style <textarea />
	       * component.
	       */
	      useCacheForDOMMeasurements: _React2['default'].PropTypes.bool,

	      /**
	       * Minimal numbder of rows to show.
	       */
	      rows: _React2['default'].PropTypes.number,

	      /**
	       * Alias for `rows`.
	       */
	      minRows: _React2['default'].PropTypes.number,

	      /**
	       * Maximum number of rows to show.
	       */
	      maxRows: _React2['default'].PropTypes.number
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      onChange: _emptyFunction2['default'],
	      onHeightChange: _emptyFunction2['default'],
	      useCacheForDOMMeasurements: false
	    },
	    enumerable: true
	  }]);

	  return TextareaAutosize;
	})(_React2['default'].Component);

	exports['default'] = TextareaAutosize;

	function onNextFrame(cb) {
	  if (window.requestAnimationFrame) {
	    return window.requestAnimationFrame(cb);
	  }
	  return window.setTimeout(cb, 1);
	}

	function clearNextFrameAction(nextFrameId) {
	  if (window.cancelAnimationFrame) {
	    window.cancelAnimationFrame(nextFrameId);
	  } else {
	    window.clearTimeout(nextFrameId);
	  }
	}
	module.exports = exports['default'];


/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */

	function makeEmptyFunction(arg) {
	  return function() {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function() { return this; };
	emptyFunction.thatReturnsArgument = function(arg) { return arg; };

	module.exports = emptyFunction;


/***/ },
/* 104 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calculateNodeHeight;
	/**
	 * calculateNodeHeight(uiTextNode, useCache = false)
	 */

	var HIDDEN_TEXTAREA_STYLE = '\n  height:0;\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0\n';

	var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-transform', 'width', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

	var computedStyleCache = {};
	var hiddenTextarea = undefined;

	function calculateNodeHeight(uiTextNode) {
	  var useCache = arguments[1] === undefined ? false : arguments[1];
	  var minRows = arguments[2] === undefined ? null : arguments[2];
	  var maxRows = arguments[3] === undefined ? null : arguments[3];

	  if (!hiddenTextarea) {
	    hiddenTextarea = document.createElement('textarea');
	    document.body.appendChild(hiddenTextarea);
	  }

	  // Copy all CSS properties that have an impact on the height of the content in
	  // the textbox

	  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache);

	  var paddingSize = _calculateNodeStyling.paddingSize;
	  var borderSize = _calculateNodeStyling.borderSize;
	  var boxSizing = _calculateNodeStyling.boxSizing;
	  var sizingStyle = _calculateNodeStyling.sizingStyle;

	  // Need to have the overflow attribute to hide the scrollbar otherwise
	  // text-lines will not calculated properly as the shadow will technically be
	  // narrower for content
	  hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
	  hiddenTextarea.value = uiTextNode.value;

	  var minHeight = -Infinity;
	  var maxHeight = Infinity;
	  var height = hiddenTextarea.scrollHeight;

	  if (boxSizing === 'border-box') {
	    // border-box: add border, since height = content + padding + border
	    height = height + borderSize;
	  } else if (boxSizing === 'content-box') {
	    // remove padding, since height = content
	    height = height - paddingSize;
	  }

	  if (minRows !== null || maxRows !== null) {
	    // measure height of a textarea with a single row
	    hiddenTextarea.value = 'x';
	    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
	    if (minRows !== null) {
	      minHeight = singleRowHeight * minRows;
	      if (boxSizing === 'border-box') {
	        minHeight = minHeight + paddingSize + borderSize;
	      }
	      height = Math.max(minHeight, height);
	    }
	    if (maxRows !== null) {
	      maxHeight = singleRowHeight * maxRows;
	      if (boxSizing === 'border-box') {
	        maxHeight = maxHeight + paddingSize + borderSize;
	      }
	      height = Math.min(maxHeight, height);
	    }
	  }
	  return { height: height, minHeight: minHeight, maxHeight: maxHeight };
	}

	function calculateNodeStyling(node) {
	  var useCache = arguments[1] === undefined ? false : arguments[1];

	  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');

	  if (useCache && computedStyleCache[nodeRef]) {
	    return computedStyleCache[nodeRef];
	  }

	  var style = window.getComputedStyle(node);

	  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');

	  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

	  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

	  var sizingStyle = SIZING_STYLE.map(function (name) {
	    return '' + name + ':' + style.getPropertyValue(name);
	  }).join(';');

	  var nodeInfo = {
	    sizingStyle: sizingStyle,
	    paddingSize: paddingSize,
	    borderSize: borderSize,
	    boxSizing: boxSizing
	  };

	  if (useCache && nodeRef) {
	    computedStyleCache[nodeRef] = nodeInfo;
	  }

	  return nodeInfo;
	}
	module.exports = exports['default'];


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(106);


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(107);
	var React = __webpack_require__(1);
	var assign = __webpack_require__(108);
	var colorParser = __webpack_require__(109);
	var rgbaColor = __webpack_require__(111);
	var rgb2hsv = __webpack_require__(112);
	var rgb2hex = __webpack_require__(113);

	var ColorPicker = __webpack_require__(114);

	var KEY_ENTER = 13;

	module.exports = React.createClass({
	  displayName: 'InputColor',

	  propTypes: {
	    value: React.PropTypes.string,
	    defaultValue: React.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultValue: '#000000'
	    };
	  },

	  getInitialState: function getInitialState() {
	    var cssColor = this.props.value;

	    return {
	      color: this.getColor(this.props.value),
	      colorPicker: false,
	      colorPickerPosition: 0
	    };
	  },

	  getColor: function getColor(cssColor) {
	    cssColor = cssColor || this.props.defaultValue;

	    var rgba = colorParser(cssColor);
	    var r = rgba.r,
	        g = rgba.g,
	        b = rgba.b,
	        a = rgba.a * 100;
	    var hsv = rgb2hsv(r, g, b);

	    return assign(hsv, {
	      r: r,
	      g: g,
	      b: b,
	      a: a,
	      hex: rgb2hex(r, g, b)
	    });
	  },

	  getRgbaBackground: function getRgbaBackground() {
	    var color = this.state.color;
	    var r = color.r;
	    var g = color.g;
	    var b = color.b;
	    var a = color.a;
	    return rgbaColor(r, g, b, a);
	  },

	  render: function render() {
	    var color = this.state.color;
	    var rgbaBackground = this.getRgbaBackground();

	    return React.createElement(
	      'span',
	      { className: cx({
	          'm-input-color': true,
	          'color-picker-open': this.state.colorPicker
	        }) },
	      React.createElement('span', {
	        className: "css-color",
	        style: { background: rgbaBackground },
	        onClick: this._onClick }),
	      React.createElement(
	        'span',
	        {
	          className: "remove",
	          onClick: this.handleClickRemove },
	        '×'
	      ),
	      this.state.colorPicker ? React.createElement(ColorPicker, {
	        left: this.state.colorPickerPosition,
	        color: this.state.color,
	        onChange: this._onChange }) : null
	    );
	  },

	  componentDidMount: function componentDidMount() {
	    document.addEventListener('click', this.closeColorPicker, false);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    document.removeEventListener('click', this.closeColorPicker);
	  },

	  closeColorPicker: function closeColorPicker() {
	    this.setState({ colorPicker: false });
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var cssColor = nextProps.value;

	    // anti-pattern, maybe
	    if (!this._updated) {
	      this.setState({
	        color: this.getColor(cssColor)
	      });
	    } else {
	      this._updated = false;
	    }
	  },

	  change: function change(cssColor) {
	    if (this.props.onChange) {
	      this.props.onChange(cssColor);
	    }
	  },

	  _onChange: function _onChange(color) {
	    this.setState({
	      cssColor: '#' + color.hex,
	      color: color
	    });
	    this._updated = true;
	    this.change('#' + color.hex);
	  },

	  _onClick: function _onClick(e) {
	    e.stopPropagation();
	    e.nativeEvent.stopImmediatePropagation();
	    var dom = React.findDOMNode(this);
	    var rect = dom.getBoundingClientRect();
	    var ww = window.innerWidth;

	    var left = -105;
	    if (rect.right + 105 > ww) {
	      left = -210 + ww - rect.right;
	    } else if (rect.left - 105 < 0) {
	      left = -rect.left;
	    }

	    this.setState({
	      colorPicker: !this.state.colorPicker,
	      colorPickerPosition: left
	    });
	  },

	  handleClickRemove: function handleClickRemove(e) {
	    this.change('');
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var colors = __webpack_require__(110);

	/**
	 * Expose `parse`.
	 */

	module.exports = parse;

	/**
	 * Parse `str`.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api public
	 */

	function parse(str) {
	  return named(str)
	    || hex3(str)
	    || hex6(str)
	    || rgb(str)
	    || rgba(str);
	}

	/**
	 * Parse named css color `str`.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function named(str) {
	  var c = colors[str.toLowerCase()];
	  if (!c) return;
	  return {
	    r: c[0],
	    g: c[1],
	    b: c[2]
	  }
	}

	/**
	 * Parse rgb(n, n, n)
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function rgb(str) {
	  if (0 == str.indexOf('rgb(')) {
	    str = str.match(/rgb\(([^)]+)\)/)[1];
	    var parts = str.split(/ *, */).map(Number);
	    return {
	      r: parts[0],
	      g: parts[1],
	      b: parts[2],
	      a: 1
	    }
	  }
	}

	/**
	 * Parse rgba(n, n, n, n)
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function rgba(str) {
	  if (0 == str.indexOf('rgba(')) {
	    str = str.match(/rgba\(([^)]+)\)/)[1];
	    var parts = str.split(/ *, */).map(Number);
	    return {
	      r: parts[0],
	      g: parts[1],
	      b: parts[2],
	      a: parts[3]
	    }
	  }
	}

	/**
	 * Parse #nnnnnn
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function hex6(str) {
	  if ('#' == str[0] && 7 == str.length) {
	    return {
	      r: parseInt(str.slice(1, 3), 16),
	      g: parseInt(str.slice(3, 5), 16),
	      b: parseInt(str.slice(5, 7), 16),
	      a: 1
	    }
	  }
	}

	/**
	 * Parse #nnn
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function hex3(str) {
	  if ('#' == str[0] && 4 == str.length) {
	    return {
	      r: parseInt(str[1] + str[1], 16),
	      g: parseInt(str[2] + str[2], 16),
	      b: parseInt(str[3] + str[3], 16),
	      a: 1
	    }
	  }
	}



/***/ },
/* 110 */
/***/ function(module, exports) {

	
	module.exports = {
	    aliceblue: [240, 248, 255]
	  , antiquewhite: [250, 235, 215]
	  , aqua: [0, 255, 255]
	  , aquamarine: [127, 255, 212]
	  , azure: [240, 255, 255]
	  , beige: [245, 245, 220]
	  , bisque: [255, 228, 196]
	  , black: [0, 0, 0]
	  , blanchedalmond: [255, 235, 205]
	  , blue: [0, 0, 255]
	  , blueviolet: [138, 43, 226]
	  , brown: [165, 42, 42]
	  , burlywood: [222, 184, 135]
	  , cadetblue: [95, 158, 160]
	  , chartreuse: [127, 255, 0]
	  , chocolate: [210, 105, 30]
	  , coral: [255, 127, 80]
	  , cornflowerblue: [100, 149, 237]
	  , cornsilk: [255, 248, 220]
	  , crimson: [220, 20, 60]
	  , cyan: [0, 255, 255]
	  , darkblue: [0, 0, 139]
	  , darkcyan: [0, 139, 139]
	  , darkgoldenrod: [184, 132, 11]
	  , darkgray: [169, 169, 169]
	  , darkgreen: [0, 100, 0]
	  , darkgrey: [169, 169, 169]
	  , darkkhaki: [189, 183, 107]
	  , darkmagenta: [139, 0, 139]
	  , darkolivegreen: [85, 107, 47]
	  , darkorange: [255, 140, 0]
	  , darkorchid: [153, 50, 204]
	  , darkred: [139, 0, 0]
	  , darksalmon: [233, 150, 122]
	  , darkseagreen: [143, 188, 143]
	  , darkslateblue: [72, 61, 139]
	  , darkslategray: [47, 79, 79]
	  , darkslategrey: [47, 79, 79]
	  , darkturquoise: [0, 206, 209]
	  , darkviolet: [148, 0, 211]
	  , deeppink: [255, 20, 147]
	  , deepskyblue: [0, 191, 255]
	  , dimgray: [105, 105, 105]
	  , dimgrey: [105, 105, 105]
	  , dodgerblue: [30, 144, 255]
	  , firebrick: [178, 34, 34]
	  , floralwhite: [255, 255, 240]
	  , forestgreen: [34, 139, 34]
	  , fuchsia: [255, 0, 255]
	  , gainsboro: [220, 220, 220]
	  , ghostwhite: [248, 248, 255]
	  , gold: [255, 215, 0]
	  , goldenrod: [218, 165, 32]
	  , gray: [128, 128, 128]
	  , green: [0, 128, 0]
	  , greenyellow: [173, 255, 47]
	  , grey: [128, 128, 128]
	  , honeydew: [240, 255, 240]
	  , hotpink: [255, 105, 180]
	  , indianred: [205, 92, 92]
	  , indigo: [75, 0, 130]
	  , ivory: [255, 255, 240]
	  , khaki: [240, 230, 140]
	  , lavender: [230, 230, 250]
	  , lavenderblush: [255, 240, 245]
	  , lawngreen: [124, 252, 0]
	  , lemonchiffon: [255, 250, 205]
	  , lightblue: [173, 216, 230]
	  , lightcoral: [240, 128, 128]
	  , lightcyan: [224, 255, 255]
	  , lightgoldenrodyellow: [250, 250, 210]
	  , lightgray: [211, 211, 211]
	  , lightgreen: [144, 238, 144]
	  , lightgrey: [211, 211, 211]
	  , lightpink: [255, 182, 193]
	  , lightsalmon: [255, 160, 122]
	  , lightseagreen: [32, 178, 170]
	  , lightskyblue: [135, 206, 250]
	  , lightslategray: [119, 136, 153]
	  , lightslategrey: [119, 136, 153]
	  , lightsteelblue: [176, 196, 222]
	  , lightyellow: [255, 255, 224]
	  , lime: [0, 255, 0]
	  , limegreen: [50, 205, 50]
	  , linen: [250, 240, 230]
	  , magenta: [255, 0, 255]
	  , maroon: [128, 0, 0]
	  , mediumaquamarine: [102, 205, 170]
	  , mediumblue: [0, 0, 205]
	  , mediumorchid: [186, 85, 211]
	  , mediumpurple: [147, 112, 219]
	  , mediumseagreen: [60, 179, 113]
	  , mediumslateblue: [123, 104, 238]
	  , mediumspringgreen: [0, 250, 154]
	  , mediumturquoise: [72, 209, 204]
	  , mediumvioletred: [199, 21, 133]
	  , midnightblue: [25, 25, 112]
	  , mintcream: [245, 255, 250]
	  , mistyrose: [255, 228, 225]
	  , moccasin: [255, 228, 181]
	  , navajowhite: [255, 222, 173]
	  , navy: [0, 0, 128]
	  , oldlace: [253, 245, 230]
	  , olive: [128, 128, 0]
	  , olivedrab: [107, 142, 35]
	  , orange: [255, 165, 0]
	  , orangered: [255, 69, 0]
	  , orchid: [218, 112, 214]
	  , palegoldenrod: [238, 232, 170]
	  , palegreen: [152, 251, 152]
	  , paleturquoise: [175, 238, 238]
	  , palevioletred: [219, 112, 147]
	  , papayawhip: [255, 239, 213]
	  , peachpuff: [255, 218, 185]
	  , peru: [205, 133, 63]
	  , pink: [255, 192, 203]
	  , plum: [221, 160, 203]
	  , powderblue: [176, 224, 230]
	  , purple: [128, 0, 128]
	  , red: [255, 0, 0]
	  , rosybrown: [188, 143, 143]
	  , royalblue: [65, 105, 225]
	  , saddlebrown: [139, 69, 19]
	  , salmon: [250, 128, 114]
	  , sandybrown: [244, 164, 96]
	  , seagreen: [46, 139, 87]
	  , seashell: [255, 245, 238]
	  , sienna: [160, 82, 45]
	  , silver: [192, 192, 192]
	  , skyblue: [135, 206, 235]
	  , slateblue: [106, 90, 205]
	  , slategray: [119, 128, 144]
	  , slategrey: [119, 128, 144]
	  , snow: [255, 255, 250]
	  , springgreen: [0, 255, 127]
	  , steelblue: [70, 130, 180]
	  , tan: [210, 180, 140]
	  , teal: [0, 128, 128]
	  , thistle: [216, 191, 216]
	  , tomato: [255, 99, 71]
	  , turquoise: [64, 224, 208]
	  , violet: [238, 130, 238]
	  , wheat: [245, 222, 179]
	  , white: [255, 255, 255]
	  , whitesmoke: [245, 245, 245]
	  , yellow: [255, 255, 0]
	  , yellowgreen: [154, 205, 5]
	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = function(r, g, b, a) {
	  return 'rgba('+
	    [r, g, b, a/100].join(',')+')';
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	// http://www.rapidtables.com/convert/color/rgb-to-hsv.htm
	module.exports = function(r, g, b) {
	  var h, s, v;
	  var max = Math.max(r, g, b);
	  var min = Math.min(r, g, b);
	  var delta = max - min;

	  // hue
	  if(delta === 0) {
	    h = 0;
	  } else if(r === max) {
	    h = ((g-b)/delta) % 6;
	  } else if(g === max) {
	    h = (b-r)/delta + 2;
	  } else if(b === max) {
	    h = (r-g)/delta + 4;
	  }

	  h = Math.round(h*60);
	  if(h < 0) h += 360;

	  // saturation
	  s = Math.round((max === 0 ? 0 : (delta/max)) * 100);

	  // value
	  v = Math.round(max/255*100);

	  return {
	    h: h,
	    s: s,
	    v: v
	  };
	};

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = function(r, g, b) {
	  return [
	    _convert(r),
	    _convert(g),
	    _convert(b)
	  ].join('');

	  function _convert(num) {
	    var hex = num.toString(16);
	    return hex.length===1 ? '0'+hex : hex;
	  }
	};


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var objectAssign = __webpack_require__(108);
	var InputSlider = __webpack_require__(115);
	var InputNumber = __webpack_require__(117);

	var rgb2hsv = __webpack_require__(112);
	var hsv2hex = __webpack_require__(120);
	var hsv2rgb = __webpack_require__(121);
	var rgb2hex = __webpack_require__(113);
	var hex2rgb = __webpack_require__(122);
	var rgba = __webpack_require__(111);

	var KEY_ENTER = 13;

	module.exports = React.createClass({
	  displayName: 'ColorPicker',

	  getInitialState: function getInitialState() {
	    return {
	      hex: this.props.color.hex,
	      hsvMode: false
	    };
	  },

	  render: function render() {
	    var color = this.props.color;
	    var r = color.r,
	        g = color.g,
	        b = color.b;
	    var h = color.h,
	        s = color.s,
	        v = color.v;
	    var a = color.a,
	        hex = color.hex;

	    var rgbaBackground = rgba(r, g, b, a);
	    var opacityGradient = 'linear-gradient(to right, ' + rgba(r, g, b, 0) + ', ' + rgba(r, g, b, 100) + ')';
	    var hueBackground = '#' + hsv2hex(h, 100, 100);

	    return React.createElement(
	      'div',
	      { className: "m-color-picker", style: { left: this.props.left }, onClick: this._onClick },
	      React.createElement(
	        'div',
	        { className: "selector",
	          style: { backgroundColor: hueBackground } },
	        React.createElement('div', { className: "gradient white" }),
	        React.createElement('div', { className: "gradient dark" }),
	        React.createElement(InputSlider, {
	          className: "slider slider-xy",
	          axis: "xy",
	          x: s, xmax: 100,
	          y: 100 - v, ymax: 100,
	          onChange: this._onSVChange
	        })
	      ),
	      React.createElement(
	        'div',
	        { className: "sliders" },
	        React.createElement(InputSlider, {
	          className: "slider slider-x hue",
	          axis: "x", x: h, xmax: 359,
	          onChange: this._onHueChange
	        }),
	        React.createElement(InputSlider, {
	          className: "slider slider-x opacity",
	          axis: "x", x: a, xmax: 100,
	          style: { background: opacityGradient },
	          onChange: this._onAlphaChange
	        }),
	        React.createElement('div', { className: "color", style: { backgroundColor: rgbaBackground } })
	      ),
	      React.createElement(
	        'div',
	        { className: "inputs" },
	        React.createElement(
	          'div',
	          { className: "input hex" },
	          React.createElement('input', { type: "text", className: "value", value: this.state.hex,
	            onChange: this._onHexChange, onKeyUp: this._onHexKeyUp }),
	          React.createElement(
	            'span',
	            { className: "label" },
	            'Hex'
	          )
	        ),
	        !this.state.hsvMode ? React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'div',
	            { className: "input r" },
	            React.createElement(InputNumber, {
	              className: "value", value: r,
	              onChange: this.changeRGB.bind(null, 'r') }),
	            React.createElement(
	              'span',
	              { className: "label" },
	              'R'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: "input g" },
	            React.createElement(InputNumber, {
	              className: "value", value: g,
	              onChange: this.changeRGB.bind(null, 'g') }),
	            React.createElement(
	              'span',
	              { className: "label" },
	              'G'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: "input b" },
	            React.createElement(InputNumber, {
	              className: "value", value: b,
	              onChange: this.changeRGB.bind(null, 'b') }),
	            React.createElement(
	              'span',
	              { className: "label" },
	              'B'
	            )
	          )
	        ) : React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'div',
	            { className: "input h" },
	            React.createElement(InputNumber, {
	              className: "value", value: h,
	              onChange: this.changeHSV.bind(null, 'h') }),
	            React.createElement(
	              'span',
	              { className: "label" },
	              'H'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: "input s" },
	            React.createElement(InputNumber, {
	              className: "value", value: s,
	              onChange: this.changeHSV.bind(null, 's') }),
	            React.createElement(
	              'span',
	              { className: "label" },
	              'S'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: "input v" },
	            React.createElement(InputNumber, {
	              className: "value", value: v,
	              onChange: this.changeHSV.bind(null, 'v') }),
	            React.createElement(
	              'span',
	              { className: "label" },
	              'V'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: "input a" },
	          React.createElement(InputNumber, {
	            className: "value", value: a,
	            onChange: this.changeAlpha }),
	          React.createElement(
	            'span',
	            { className: "label" },
	            'A'
	          )
	        )
	      )
	    );
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var hex = nextProps.color.hex;
	    this.setState({
	      hex: hex
	    });
	  },

	  changeHSV: function changeHSV(p, val) {
	    if (this.props.onChange) {
	      var j = p;if (typeof j === 'string') {
	        j = {};j[p] = val;
	      }
	      var color = this.props.color;
	      var rgb = hsv2rgb(j.h || color.h, j.s || color.s, j.v || color.v);
	      var hex = rgb2hex(rgb.r, rgb.g, rgb.b);
	      this.props.onChange(objectAssign(color, j, rgb, { hex: hex }));
	    }
	  },

	  changeRGB: function changeRGB(p, val) {
	    if (this.props.onChange) {
	      var j = p;if (typeof j === 'string') {
	        j = {};j[p] = val;
	      }

	      var color = this.props.color;
	      var rgb = [j.r !== void 0 ? j.r : color.r, j.g !== void 0 ? j.g : color.g, j.b !== void 0 ? j.b : color.b];

	      var hsv = rgb2hsv.apply(null, rgb);
	      var hex = rgb2hex.apply(null, rgb);

	      this.props.onChange(objectAssign(color, j, hsv, { hex: hex }));
	    }
	  },

	  changeAlpha: function changeAlpha(a) {
	    if (this.props.onChange) {
	      if (a <= 100 && a >= 0) {
	        this.props.onChange(objectAssign(this.props.color, { a: a }));
	      }
	    }
	  },

	  _onSVChange: function _onSVChange(pos) {
	    this.changeHSV({
	      s: pos.x,
	      v: 100 - pos.y
	    });
	  },

	  _onHueChange: function _onHueChange(pos) {
	    this.changeHSV({
	      h: pos.x
	    });
	  },

	  _onAlphaChange: function _onAlphaChange(pos) {
	    this.changeHSV({
	      a: pos.x
	    });
	  },

	  _onHexChange: function _onHexChange(e) {
	    this.setState({
	      hex: e.target.value.trim()
	    });
	  },

	  _onHexKeyUp: function _onHexKeyUp(e) {
	    if (e.keyCode === KEY_ENTER) {
	      var hex = e.target.value.trim();
	      var rgb = hex2rgb(hex);
	      this.changeRGB(objectAssign(rgb, { hex: hex }));
	    }
	  },

	  _onClick: function _onClick(e) {
	    e.stopPropagation();
	    e.nativeEvent.stopImmediatePropagation();
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(116);


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'InputSlider',

	  propTypes: {
	    axis: React.PropTypes.string,
	    x: React.PropTypes.number,
	    xmax: React.PropTypes.number,
	    xmin: React.PropTypes.number,
	    y: React.PropTypes.number,
	    ymax: React.PropTypes.number,
	    ymin: React.PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      axis: 'x',
	      xmin: 0,
	      ymin: 0
	    };
	  },

	  render: function render() {
	    var pos = this.getPosition();
	    var axis = this.props.axis;
	    var valueStyle = {};
	    if (axis === 'x') valueStyle.width = pos.left;
	    if (axis === 'y') valueStyle.height = pos.top;

	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: cx('u-slider', 'u-slider-' + axis, this.props.className),
	        onClick: this.handleClick }),
	      React.createElement('div', {
	        className: 'value',
	        style: valueStyle }),
	      React.createElement('div', {
	        className: 'handle',
	        ref: 'handle',
	        onMouseDown: this.handleMounseDown,
	        onClick: function (e) {
	          e.stopPropagation();
	          e.nativeEvent.stopImmediatePropagation();
	        },
	        style: pos })
	    );
	  },

	  getPosition: function getPosition() {
	    var top = (this.props.y - this.props.ymin) / (this.props.ymax - this.props.ymin) * 100;
	    var left = (this.props.x - this.props.xmin) / (this.props.xmax - this.props.xmin) * 100;

	    if (top > 100) top = 100;
	    if (top < 0) top = 0;
	    if (this.props.axis === 'x') top = 0;
	    top += '%';

	    if (left > 100) left = 100;
	    if (left < 0) left = 0;
	    if (this.props.axis === 'y') left = 0;
	    left += '%';

	    return { top: top, left: left };
	  },

	  change: function change(pos) {
	    if (this.props.onChange) {
	      var rect = this.getDOMNode().getBoundingClientRect();
	      var width = rect.width;
	      var height = rect.height;
	      var left = pos.left;
	      var top = pos.top;
	      var axis = this.props.axis;

	      if (left < 0) left = 0;
	      if (left > width) left = width;
	      if (top < 0) top = 0;
	      if (top > height) top = height;

	      var x = 0;
	      var y = 0;
	      if (axis === 'x' || axis === 'xy') {
	        x = left / width * (this.props.xmax - this.props.xmin) + this.props.xmin;
	      }
	      if (axis === 'y' || axis === 'xy') {
	        y = top / height * (this.props.ymax - this.props.ymin) + this.props.ymin;
	      }

	      this.props.onChange({ x: x, y: y });
	    }
	  },

	  handleMounseDown: function handleMounseDown(e) {
	    var dom = this.refs.handle.getDOMNode();

	    this.start = {
	      x: dom.offsetLeft,
	      y: dom.offsetTop
	    };

	    this.offset = {
	      x: e.clientX,
	      y: e.clientY
	    };

	    document.addEventListener('mousemove', this.handleDrag);
	    document.addEventListener('mouseup', this.handleDragEnd);
	  },

	  handleDrag: function handleDrag(e) {
	    var rect = this.getDOMNode().getBoundingClientRect();
	    var posX = e.clientX + this.start.x - this.offset.x;
	    var posY = e.clientY + this.start.y - this.offset.y;

	    this.change({
	      left: posX,
	      top: posY
	    });
	  },

	  handleDragEnd: function handleDragEnd(e) {
	    document.removeEventListener('mousemove', this.handleDrag);
	    document.removeEventListener('mouseup', this.handleDragEnd);
	  },

	  handleClick: function handleClick(e) {
	    var rect = this.getDOMNode().getBoundingClientRect();

	    this.change({
	      left: e.clientX - rect.left,
	      top: e.clientY - rect.top
	    });
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(118);


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var _parse = __webpack_require__(119);

	var KEY_UP = 38;
	var KEY_DOWN = 40;
	var KEY_ENTER = 13;

	module.exports = React.createClass({
	  displayName: 'InputNumber',

	  getDefaultProps: function() {
	    return {
	      step: 1
	    };
	  },

	  parse: function(val) {
	    return _parse(val, this.props.step, this.props.max, this.props.min);
	  },

	  getInitialState: function() {
	    return {
	      value: this.parse(this.props.value)
	    }
	  },

	  render: function() {
	    return React.createElement("input", {
	      className: this.props.className, 
	      type: "text", 
	      value: this.state.value, 
	      onKeyUp: this._onKeyUp, 
	      onKeyDown: this._onKeyDown, 
	      onChange: this._onChange});
	  },

	  componentWillReceiveProps: function(nextProps) {
	    this.setState({
	      value: this.parse(nextProps.value)
	    });
	  },

	  change: function(value) {
	    if(this.props.onChange) {
	      this.props.onChange(this.parse(value));
	    }
	  },

	  up: function() {
	    this.change(this.state.value+this.props.step);
	  },

	  down: function() {
	    this.change(this.state.value-this.props.step);
	  },

	  _onKeyDown: function(e) {
	    switch(e.keyCode) {
	      case KEY_UP:
	        e.preventDefault();
	        this.up();
	        break;
	      case KEY_DOWN:
	        e.preventDefault();
	        this.down();
	        break;
	    }
	  },

	  _onKeyUp: function(e) {
	    if(e.keyCode === KEY_ENTER) {
	      this.change(this.state.value);
	    }
	  },

	  _onChange: function(e) {
	    this.setState({
	      value: e.target.value
	    });
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = function(value, step, max, min) {
	  if(value === '') return '';
	  if(value) {
	    value = parseFloat(value);
	    if(isNaN(value)) return '';
	  }

	  if(typeof max === 'number' && value > max) return max;
	  if(typeof min === 'number' && value < min) return min;

	  if(step) {
	    var p = (step.toString().split('.')[1] || []).length;
	    if(p) return parseFloat(value.toFixed(p));
	  }

	  return value;
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var hsv2rgb = __webpack_require__(121);
	var rgb2hex = __webpack_require__(113);

	module.exports = function(h, s, v) {
	  var rgb = hsv2rgb(h, s, v);
	  return rgb2hex(rgb.r, rgb.g, rgb.b);
	};


/***/ },
/* 121 */
/***/ function(module, exports) {

	// http://www.rapidtables.com/convert/color/hsv-to-rgb.htm
	module.exports = function(h, s, v) {
	  var s = s/100, v = v/100;
	  var rgb = [];

	  var c = v * s;
	  var hh = h/60;
	  var x = c * (1 - Math.abs(hh%2-1));
	  var m = v - c;

	  switch(parseInt(hh, 10)) {
	    case 0:
	      rgb = [c, x, 0];
	    break;

	    case 1:
	      rgb = [x, c, 0];
	    break;

	    case 2:
	      rgb = [0, c, x];
	    break;

	    case 3:
	      rgb = [0, x, c];
	    break;

	    case 4:
	      rgb = [x, 0, c];
	    break;

	    case 5:
	      rgb = [c, 0, x];
	    break;
	  }

	  return {
	    r: Math.round(255*(rgb[0]+m)),
	    g: Math.round(255*(rgb[1]+m)),
	    b: Math.round(255*(rgb[2]+m))
	  };
	};


/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = function(hex) {
	  if(hex[0] === '#') hex = hex.substr(1);

	  if(hex.length === 6) {
	    return {
	      r: parseInt(hex.substr(0, 2), 16),
	      g: parseInt(hex.substr(2, 2), 16),
	      b: parseInt(hex.substr(4, 2), 16)
	    };
	  } else if(hex.length === 3) {
	    return {
	      r: parseInt(hex[0]+hex[0], 16),
	      g: parseInt(hex[1]+hex[1], 16),
	      b: parseInt(hex[2]+hex[2], 16)
	    };
	  }
	};


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);
	var Button = __webpack_require__(84);

	module.exports = React.createClass({
	  displayName: 'Dropdown',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      items: ['dog', 'pig', 'moose']
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      open: true
	    };
	  },

	  render: function render() {
	    var open = this.state.open;
	    var items = this.props.items;
	    var cn = cx('u-dropdown', {
	      'is-open': open
	    }, this.props.className);

	    return React.createElement(
	      'div',
	      { className: cn },
	      React.createElement(
	        Button,
	        { onClick: this.handleClick },
	        'More ',
	        React.createElement('i', { className: 'ion-chevron-down' })
	      ),
	      React.createElement(
	        'ul',
	        { className: 'items' },
	        items.map(function (item, i) {
	          return React.createElement(
	            'li',
	            { key: i, className: 'item' },
	            item
	          );
	        })
	      )
	    );
	  },

	  handleClick: function handleClick(e) {
	    this.setState({
	      open: !this.state.open
	    });
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'Dialog',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      open: false
	    };
	  },

	  render: function render() {
	    var cn = cx('u-dialog-wrap', {
	      'is-open': this.props.open
	    });

	    return React.createElement(
	      'div',
	      { className: cn },
	      React.createElement('div', { className: 'u-dialog-bg' }),
	      React.createElement(
	        'div',
	        { className: 'u-dialog' },
	        React.createElement(
	          'div',
	          { className: 'content' },
	          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
	          React.createElement(
	            'span',
	            { onClick: this.handleClickClose },
	            'x'
	          )
	        )
	      )
	    );
	  },

	  handleClickClose: function handleClickClose() {
	    if (this.props.onClose) this.props.onClose();
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);
	var _md5 = __webpack_require__(90);
	var md5 = _md5.md5 || _md5;

	module.exports = React.createClass({
	  displayName: 'Avatar',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      round: false,
	      circle: false
	    };
	  },

	  getStyle: function getStyle() {
	    var name = this.props.name;
	    var style = {};

	    if (name && name.length) {
	      var hex = backgroundColor(name);
	      style = {
	        backgroundColor: '#' + hex,
	        color: fontColor(hex)
	      };
	    }

	    return style;
	  },

	  renderInner: function renderInner() {
	    var name = this.props.name;
	    var email = this.props.email;

	    if (name && name.length) return name[0];
	    if (email) {
	      var hash = md5(email);
	      var size = 40;
	      if (this.props.size === 'lg') size = 80;
	      return React.createElement('img', { src: 'http://www.gravatar.com/avatar/' + hash + '?s=' + size });
	    }
	  },

	  render: function render() {
	    var name = this.props.name;
	    var round = this.props.round;
	    var circle = this.props.circle;
	    var size = this.props.size;
	    var style = this.getStyle();

	    var cn = cx('u-avatar', size ? 'u-avatar-' + size : null, {
	      'is-round': round,
	      'is-circle': circle
	    });

	    return React.createElement(
	      'div',
	      { className: cn, style: style },
	      this.renderInner()
	    );
	  }
	});

	function backgroundColor(str) {
	  var hash = 0;
	  for (var i = 0; i < str.length; i++) {
	    hash = str.charCodeAt(i) + ((hash << 5) - hash);
	  }
	  return (hash + '').substr(0, 6);
	}

	function fontColor(hex) {
	  var r = parseInt(hex.substr(0, 2), 16);
	  var g = parseInt(hex.substr(2, 2), 16);
	  var b = parseInt(hex.substr(4, 2), 16);
	  var yiq = (r * 299 + g * 587 + b * 114) / 1000;

	  return yiq >= 128 ? 'black' : 'white';
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);
	var beautify = __webpack_require__(127).html;

	module.exports = React.createClass({
	  displayName: 'Code',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      language: 'markup',
	      format: false
	    };
	  },

	  highlight: function highlight() {
	    Prism.highlightElement(this.refs.code.getDOMNode(), true);
	  },

	  componentDidMount: function componentDidMount() {
	    this.highlight();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this.highlight();
	  },

	  render: function render() {
	    var code = this.props.code;
	    var format = this.props.format;

	    if (format) {
	      code = beautify(code, {
	        indent_size: 2,
	        wrap_line_length: 80,
	        unformatted: []
	      });
	    }

	    return React.createElement(
	      'pre',
	      this.props,
	      React.createElement(
	        'code',
	        { ref: 'code', className: 'language-' + this.props.language },
	        code
	      )
	    );
	  }
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	The following batches are equivalent:

	var beautify_js = require('js-beautify');
	var beautify_js = require('js-beautify').js;
	var beautify_js = require('js-beautify').js_beautify;

	var beautify_css = require('js-beautify').css;
	var beautify_css = require('js-beautify').css_beautify;

	var beautify_html = require('js-beautify').html;
	var beautify_html = require('js-beautify').html_beautify;

	All methods returned accept two arguments, the source string and an options object.
	**/

	function get_beautify(js_beautify, css_beautify, html_beautify) {
	    // the default is js
	    var beautify = function (src, config) {
	        return js_beautify.js_beautify(src, config);
	    };

	    // short aliases
	    beautify.js   = js_beautify.js_beautify;
	    beautify.css  = css_beautify.css_beautify;
	    beautify.html = html_beautify.html_beautify;

	    // legacy aliases
	    beautify.js_beautify   = js_beautify.js_beautify;
	    beautify.css_beautify  = css_beautify.css_beautify;
	    beautify.html_beautify = html_beautify.html_beautify;

	    return beautify;
	}

	if (true) {
	    // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(128),
	        __webpack_require__(129),
	        __webpack_require__(130)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(js_beautify, css_beautify, html_beautify) {
	        return get_beautify(js_beautify, css_beautify, html_beautify);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	    (function(mod) {
	        var js_beautify = require('./lib/beautify');
	        var css_beautify = require('./lib/beautify-css');
	        var html_beautify = require('./lib/beautify-html');

	        mod.exports = get_beautify(js_beautify, css_beautify, html_beautify);

	    })(module);
	}



/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
	/*

	  The MIT License (MIT)

	  Copyright (c) 2007-2013 Einar Lielmanis and contributors.

	  Permission is hereby granted, free of charge, to any person
	  obtaining a copy of this software and associated documentation files
	  (the "Software"), to deal in the Software without restriction,
	  including without limitation the rights to use, copy, modify, merge,
	  publish, distribute, sublicense, and/or sell copies of the Software,
	  and to permit persons to whom the Software is furnished to do so,
	  subject to the following conditions:

	  The above copyright notice and this permission notice shall be
	  included in all copies or substantial portions of the Software.

	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
	  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	  SOFTWARE.

	 JS Beautifier
	---------------


	  Written by Einar Lielmanis, <einar@jsbeautifier.org>
	      http://jsbeautifier.org/

	  Originally converted to javascript by Vital, <vital76@gmail.com>
	  "End braces on own line" added by Chris J. Shull, <chrisjshull@gmail.com>
	  Parsing improvements for brace-less statements by Liam Newman <bitwiseman@gmail.com>


	  Usage:
	    js_beautify(js_source_text);
	    js_beautify(js_source_text, options);

	  The options are:
	    indent_size (default 4)          - indentation size,
	    indent_char (default space)      - character to indent with,
	    preserve_newlines (default true) - whether existing line breaks should be preserved,
	    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk,

	    jslint_happy (default false) - if true, then jslint-stricter mode is enforced.

	            jslint_happy        !jslint_happy
	            ---------------------------------
	            function ()         function()

	            switch () {         switch() {
	            case 1:               case 1:
	              break;                break;
	            }                   }

	    space_after_anon_function (default false) - should the space before an anonymous function's parens be added, "function()" vs "function ()",
	          NOTE: This option is overriden by jslint_happy (i.e. if jslint_happy is true, space_after_anon_function is true by design)

	    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none"
	            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.

	    space_before_conditional (default true) - should the space before conditional statement be added, "if(true)" vs "if (true)",

	    unescape_strings (default false) - should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"

	    wrap_line_length (default unlimited) - lines should wrap at next opportunity after this number of characters.
	          NOTE: This is not a hard limit. Lines will continue until a point where a newline would
	                be preserved if it were present.

	    end_with_newline (default false)  - end output with a newline


	    e.g

	    js_beautify(js_source_text, {
	      'indent_size': 1,
	      'indent_char': '\t'
	    });

	*/

	(function() {

	    var acorn = {};
	    (function (exports) {
	      // This section of code is taken from acorn.
	      //
	      // Acorn was written by Marijn Haverbeke and released under an MIT
	      // license. The Unicode regexps (for identifiers and whitespace) were
	      // taken from [Esprima](http://esprima.org) by Ariya Hidayat.
	      //
	      // Git repositories for Acorn are available at
	      //
	      //     http://marijnhaverbeke.nl/git/acorn
	      //     https://github.com/marijnh/acorn.git

	      // ## Character categories

	      // Big ugly regular expressions that match characters in the
	      // whitespace, identifier, and identifier-start categories. These
	      // are only applied when a character is found to actually have a
	      // code point above 128.

	      var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
	      var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
	      var nonASCIIidentifierChars = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
	      var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
	      var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

	      // Whether a single character denotes a newline.

	      var newline = exports.newline = /[\n\r\u2028\u2029]/;

	      // Matches a whole line break (where CRLF is considered a single
	      // line break). Used to count lines.

	      var lineBreak = exports.lineBreak = /\r\n|[\n\r\u2028\u2029]/g;

	      // Test whether a given character code starts an identifier.

	      var isIdentifierStart = exports.isIdentifierStart = function(code) {
	        if (code < 65) return code === 36;
	        if (code < 91) return true;
	        if (code < 97) return code === 95;
	        if (code < 123)return true;
	        return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
	      };

	      // Test whether a given character is part of an identifier.

	      var isIdentifierChar = exports.isIdentifierChar = function(code) {
	        if (code < 48) return code === 36;
	        if (code < 58) return true;
	        if (code < 65) return false;
	        if (code < 91) return true;
	        if (code < 97) return code === 95;
	        if (code < 123)return true;
	        return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
	      };
	    })(acorn);

	    function in_array(what, arr) {
	        for (var i = 0; i < arr.length; i += 1) {
	            if (arr[i] === what) {
	                return true;
	            }
	        }
	        return false;
	    }

	    function trim(s) {
	        return s.replace(/^\s+|\s+$/g, '');
	    }

	    function ltrim(s) {
	        return s.replace(/^\s+/g, '');
	    }

	    function rtrim(s) {
	        return s.replace(/\s+$/g, '');
	    }

	    function js_beautify(js_source_text, options) {
	        "use strict";
	        var beautifier = new Beautifier(js_source_text, options);
	        return beautifier.beautify();
	    }

	    var MODE = {
	            BlockStatement: 'BlockStatement', // 'BLOCK'
	            Statement: 'Statement', // 'STATEMENT'
	            ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
	            ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
	            ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
	            Conditional: 'Conditional', //'(COND-EXPRESSION)',
	            Expression: 'Expression' //'(EXPRESSION)'
	        };

	    function Beautifier(js_source_text, options) {
	        "use strict";
	        var output
	        var tokens = [], token_pos;
	        var Tokenizer;
	        var current_token;
	        var last_type, last_last_text, indent_string;
	        var flags, previous_flags, flag_store;
	        var prefix;

	        var handlers, opt;
	        var baseIndentString = '';

	        handlers = {
	            'TK_START_EXPR': handle_start_expr,
	            'TK_END_EXPR': handle_end_expr,
	            'TK_START_BLOCK': handle_start_block,
	            'TK_END_BLOCK': handle_end_block,
	            'TK_WORD': handle_word,
	            'TK_RESERVED': handle_word,
	            'TK_SEMICOLON': handle_semicolon,
	            'TK_STRING': handle_string,
	            'TK_EQUALS': handle_equals,
	            'TK_OPERATOR': handle_operator,
	            'TK_COMMA': handle_comma,
	            'TK_BLOCK_COMMENT': handle_block_comment,
	            'TK_COMMENT': handle_comment,
	            'TK_DOT': handle_dot,
	            'TK_UNKNOWN': handle_unknown,
	            'TK_EOF': handle_eof
	        };

	        function create_flags(flags_base, mode) {
	            var next_indent_level = 0;
	            if (flags_base) {
	                next_indent_level = flags_base.indentation_level;
	                if (!output.just_added_newline() &&
	                    flags_base.line_indent_level > next_indent_level) {
	                    next_indent_level = flags_base.line_indent_level;
	                }
	            }

	            var next_flags = {
	                mode: mode,
	                parent: flags_base,
	                last_text: flags_base ? flags_base.last_text : '', // last token text
	                last_word: flags_base ? flags_base.last_word : '', // last 'TK_WORD' passed
	                declaration_statement: false,
	                declaration_assignment: false,
	                multiline_frame: false,
	                if_block: false,
	                else_block: false,
	                do_block: false,
	                do_while: false,
	                in_case_statement: false, // switch(..){ INSIDE HERE }
	                in_case: false, // we're on the exact line with "case 0:"
	                case_body: false, // the indented case-action block
	                indentation_level: next_indent_level,
	                line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
	                start_line_index: output.get_line_number(),
	                ternary_depth: 0
	            };
	            return next_flags;
	        }

	        // Some interpreters have unexpected results with foo = baz || bar;
	        options = options ? options : {};
	        opt = {};

	        // compatibility
	        if (options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
	            opt.brace_style = options.braces_on_own_line ? "expand" : "collapse";
	        }
	        opt.brace_style = options.brace_style ? options.brace_style : (opt.brace_style ? opt.brace_style : "collapse");

	        // graceful handling of deprecated option
	        if (opt.brace_style === "expand-strict") {
	            opt.brace_style = "expand";
	        }


	        opt.indent_size = options.indent_size ? parseInt(options.indent_size, 10) : 4;
	        opt.indent_char = options.indent_char ? options.indent_char : ' ';
	        opt.eol = options.eol ? options.eol : '\n';
	        opt.preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
	        opt.break_chained_methods = (options.break_chained_methods === undefined) ? false : options.break_chained_methods;
	        opt.max_preserve_newlines = (options.max_preserve_newlines === undefined) ? 0 : parseInt(options.max_preserve_newlines, 10);
	        opt.space_in_paren = (options.space_in_paren === undefined) ? false : options.space_in_paren;
	        opt.space_in_empty_paren = (options.space_in_empty_paren === undefined) ? false : options.space_in_empty_paren;
	        opt.jslint_happy = (options.jslint_happy === undefined) ? false : options.jslint_happy;
	        opt.space_after_anon_function = (options.space_after_anon_function === undefined) ? false : options.space_after_anon_function;
	        opt.keep_array_indentation = (options.keep_array_indentation === undefined) ? false : options.keep_array_indentation;
	        opt.space_before_conditional = (options.space_before_conditional === undefined) ? true : options.space_before_conditional;
	        opt.unescape_strings = (options.unescape_strings === undefined) ? false : options.unescape_strings;
	        opt.wrap_line_length = (options.wrap_line_length === undefined) ? 0 : parseInt(options.wrap_line_length, 10);
	        opt.e4x = (options.e4x === undefined) ? false : options.e4x;
	        opt.end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
	        opt.comma_first = (options.comma_first === undefined) ? false : options.comma_first;

	        // For testing of beautify ignore:start directive
	        opt.test_output_raw = (options.test_output_raw === undefined) ? false : options.test_output_raw;

	        // force opt.space_after_anon_function to true if opt.jslint_happy
	        if(opt.jslint_happy) {
	            opt.space_after_anon_function = true;
	        }

	        if(options.indent_with_tabs){
	            opt.indent_char = '\t';
	            opt.indent_size = 1;
	        }

	        opt.eol = opt.eol.replace(/\\r/, '\r').replace(/\\n/, '\n')

	        //----------------------------------
	        indent_string = '';
	        while (opt.indent_size > 0) {
	            indent_string += opt.indent_char;
	            opt.indent_size -= 1;
	        }

	        var preindent_index = 0;
	        if(js_source_text && js_source_text.length) {
	            while ( (js_source_text.charAt(preindent_index) === ' ' ||
	                    js_source_text.charAt(preindent_index) === '\t')) {
	                baseIndentString += js_source_text.charAt(preindent_index);
	                preindent_index += 1;
	            }
	            js_source_text = js_source_text.substring(preindent_index);
	        }

	        last_type = 'TK_START_BLOCK'; // last token type
	        last_last_text = ''; // pre-last token text
	        output = new Output(indent_string, baseIndentString);

	        // If testing the ignore directive, start with output disable set to true
	        output.raw = opt.test_output_raw;


	        // Stack of parsing/formatting states, including MODE.
	        // We tokenize, parse, and output in an almost purely a forward-only stream of token input
	        // and formatted output.  This makes the beautifier less accurate than full parsers
	        // but also far more tolerant of syntax errors.
	        //
	        // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
	        // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
	        // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
	        // most full parsers would die, but the beautifier gracefully falls back to
	        // MODE.BlockStatement and continues on.
	        flag_store = [];
	        set_mode(MODE.BlockStatement);

	        this.beautify = function() {

	            /*jshint onevar:true */
	            var local_token, sweet_code;
	            Tokenizer = new tokenizer(js_source_text, opt, indent_string);
	            tokens = Tokenizer.tokenize();
	            token_pos = 0;

	            while (local_token = get_token()) {
	                for(var i = 0; i < local_token.comments_before.length; i++) {
	                    // The cleanest handling of inline comments is to treat them as though they aren't there.
	                    // Just continue formatting and the behavior should be logical.
	                    // Also ignore unknown tokens.  Again, this should result in better behavior.
	                    handle_token(local_token.comments_before[i]);
	                }
	                handle_token(local_token);

	                last_last_text = flags.last_text;
	                last_type = local_token.type;
	                flags.last_text = local_token.text;

	                token_pos += 1;
	            }

	            sweet_code = output.get_code();
	            if (opt.end_with_newline) {
	                sweet_code += '\n';
	            }

	            if (opt.eol != '\n') {
	                sweet_code = sweet_code.replace(/[\n]/g, opt.eol);
	            }

	            return sweet_code;
	        };

	        function handle_token(local_token) {
	            var newlines = local_token.newlines;
	            var keep_whitespace = opt.keep_array_indentation && is_array(flags.mode);

	            if (keep_whitespace) {
	                for (i = 0; i < newlines; i += 1) {
	                    print_newline(i > 0);
	                }
	            } else {
	                if (opt.max_preserve_newlines && newlines > opt.max_preserve_newlines) {
	                    newlines = opt.max_preserve_newlines;
	                }

	                if (opt.preserve_newlines) {
	                    if (local_token.newlines > 1) {
	                        print_newline();
	                        for (var i = 1; i < newlines; i += 1) {
	                            print_newline(true);
	                        }
	                    }
	                }
	            }

	            current_token = local_token;
	            handlers[current_token.type]();
	        }

	        // we could use just string.split, but
	        // IE doesn't like returning empty strings
	        function split_newlines(s) {
	            //return s.split(/\x0d\x0a|\x0a/);

	            s = s.replace(/\x0d/g, '');
	            var out = [],
	                idx = s.indexOf("\n");
	            while (idx !== -1) {
	                out.push(s.substring(0, idx));
	                s = s.substring(idx + 1);
	                idx = s.indexOf("\n");
	            }
	            if (s.length) {
	                out.push(s);
	            }
	            return out;
	        }

	        function allow_wrap_or_preserved_newline(force_linewrap) {
	            force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;

	            // Never wrap the first token on a line
	            if (output.just_added_newline()) {
	                return
	            }

	            if ((opt.preserve_newlines && current_token.wanted_newline) || force_linewrap) {
	                print_newline(false, true);
	            } else if (opt.wrap_line_length) {
	                var proposed_line_length = output.current_line.get_character_count() + current_token.text.length +
	                    (output.space_before_token ? 1 : 0);
	                if (proposed_line_length >= opt.wrap_line_length) {
	                    print_newline(false, true);
	                }
	            }
	        }

	        function print_newline(force_newline, preserve_statement_flags) {
	            if (!preserve_statement_flags) {
	                if (flags.last_text !== ';' && flags.last_text !== ',' && flags.last_text !== '=' && last_type !== 'TK_OPERATOR') {
	                    while (flags.mode === MODE.Statement && !flags.if_block && !flags.do_block) {
	                        restore_mode();
	                    }
	                }
	            }

	            if (output.add_new_line(force_newline)) {
	                flags.multiline_frame = true;
	            }
	        }

	        function print_token_line_indentation() {
	            if (output.just_added_newline()) {
	                if (opt.keep_array_indentation && is_array(flags.mode) && current_token.wanted_newline) {
	                    output.current_line.push(current_token.whitespace_before);
	                    output.space_before_token = false;
	                } else if (output.set_indent(flags.indentation_level)) {
	                    flags.line_indent_level = flags.indentation_level;
	                }
	            }
	        }

	        function print_token(printable_token) {
	            if (output.raw) {
	                output.add_raw_token(current_token)
	                return;
	            }

	            if (opt.comma_first && last_type === 'TK_COMMA'
	                && output.just_added_newline()) {
	                if(output.previous_line.last() === ',') {
	                    output.previous_line.pop();
	                    print_token_line_indentation();
	                    output.add_token(',');
	                    output.space_before_token = true;
	                }
	            }

	            printable_token = printable_token || current_token.text;
	            print_token_line_indentation();
	            output.add_token(printable_token);
	        }

	        function indent() {
	            flags.indentation_level += 1;
	        }

	        function deindent() {
	            if (flags.indentation_level > 0 &&
	                ((!flags.parent) || flags.indentation_level > flags.parent.indentation_level))
	                flags.indentation_level -= 1;
	        }

	        function set_mode(mode) {
	            if (flags) {
	                flag_store.push(flags);
	                previous_flags = flags;
	            } else {
	                previous_flags = create_flags(null, mode);
	            }

	            flags = create_flags(previous_flags, mode);
	        }

	        function is_array(mode) {
	            return mode === MODE.ArrayLiteral;
	        }

	        function is_expression(mode) {
	            return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
	        }

	        function restore_mode() {
	            if (flag_store.length > 0) {
	                previous_flags = flags;
	                flags = flag_store.pop();
	                if (previous_flags.mode === MODE.Statement) {
	                    output.remove_redundant_indentation(previous_flags);
	                }
	            }
	        }

	        function start_of_object_property() {
	            return flags.parent.mode === MODE.ObjectLiteral && flags.mode === MODE.Statement && (
	                (flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set'])));
	        }

	        function start_of_statement() {
	            if (
	                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') ||
	                    (last_type === 'TK_RESERVED' && flags.last_text === 'do') ||
	                    (last_type === 'TK_RESERVED' && flags.last_text === 'return' && !current_token.wanted_newline) ||
	                    (last_type === 'TK_RESERVED' && flags.last_text === 'else' && !(current_token.type === 'TK_RESERVED' && current_token.text === 'if')) ||
	                    (last_type === 'TK_END_EXPR' && (previous_flags.mode === MODE.ForInitializer || previous_flags.mode === MODE.Conditional)) ||
	                    (last_type === 'TK_WORD' && flags.mode === MODE.BlockStatement
	                        && !flags.in_case
	                        && !(current_token.text === '--' || current_token.text === '++')
	                        && last_last_text !== 'function'
	                        && current_token.type !== 'TK_WORD' && current_token.type !== 'TK_RESERVED') ||
	                    (flags.mode === MODE.ObjectLiteral && (
	                        (flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set']))))
	                ) {

	                set_mode(MODE.Statement);
	                indent();

	                if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') {
	                    flags.declaration_statement = true;
	                }

	                // Issue #276:
	                // If starting a new statement with [if, for, while, do], push to a new line.
	                // if (a) if (b) if(c) d(); else e(); else f();
	                if (!start_of_object_property()) {
	                    allow_wrap_or_preserved_newline(
	                        current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['do', 'for', 'if', 'while']));
	                }

	                return true;
	            }
	            return false;
	        }

	        function all_lines_start_with(lines, c) {
	            for (var i = 0; i < lines.length; i++) {
	                var line = trim(lines[i]);
	                if (line.charAt(0) !== c) {
	                    return false;
	                }
	            }
	            return true;
	        }

	        function each_line_matches_indent(lines, indent) {
	            var i = 0,
	                len = lines.length,
	                line;
	            for (; i < len; i++) {
	                line = lines[i];
	                // allow empty lines to pass through
	                if (line && line.indexOf(indent) !== 0) {
	                    return false;
	                }
	            }
	            return true;
	        }

	        function is_special_word(word) {
	            return in_array(word, ['case', 'return', 'do', 'if', 'throw', 'else']);
	        }

	        function get_token(offset) {
	            var index = token_pos + (offset || 0);
	            return (index < 0 || index >= tokens.length) ? null : tokens[index];
	        }

	        function handle_start_expr() {
	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	            }

	            var next_mode = MODE.Expression;
	            if (current_token.text === '[') {

	                if (last_type === 'TK_WORD' || flags.last_text === ')') {
	                    // this is array index specifier, break immediately
	                    // a[x], fn()[x]
	                    if (last_type === 'TK_RESERVED' && in_array(flags.last_text, Tokenizer.line_starters)) {
	                        output.space_before_token = true;
	                    }
	                    set_mode(next_mode);
	                    print_token();
	                    indent();
	                    if (opt.space_in_paren) {
	                        output.space_before_token = true;
	                    }
	                    return;
	                }

	                next_mode = MODE.ArrayLiteral;
	                if (is_array(flags.mode)) {
	                    if (flags.last_text === '[' ||
	                        (flags.last_text === ',' && (last_last_text === ']' || last_last_text === '}'))) {
	                        // ], [ goes to new line
	                        // }, [ goes to new line
	                        if (!opt.keep_array_indentation) {
	                            print_newline();
	                        }
	                    }
	                }

	            } else {
	                if (last_type === 'TK_RESERVED' && flags.last_text === 'for') {
	                    next_mode = MODE.ForInitializer;
	                } else if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['if', 'while'])) {
	                    next_mode = MODE.Conditional;
	                } else {
	                    // next_mode = MODE.Expression;
	                }
	            }

	            if (flags.last_text === ';' || last_type === 'TK_START_BLOCK') {
	                print_newline();
	            } else if (last_type === 'TK_END_EXPR' || last_type === 'TK_START_EXPR' || last_type === 'TK_END_BLOCK' || flags.last_text === '.') {
	                // TODO: Consider whether forcing this is required.  Review failing tests when removed.
	                allow_wrap_or_preserved_newline(current_token.wanted_newline);
	                // do nothing on (( and )( and ][ and ]( and .(
	            } else if (!(last_type === 'TK_RESERVED' && current_token.text === '(') && last_type !== 'TK_WORD' && last_type !== 'TK_OPERATOR') {
	                output.space_before_token = true;
	            } else if ((last_type === 'TK_RESERVED' && (flags.last_word === 'function' || flags.last_word === 'typeof')) ||
	                (flags.last_text === '*' && last_last_text === 'function')) {
	                // function() vs function ()
	                if (opt.space_after_anon_function) {
	                    output.space_before_token = true;
	                }
	            } else if (last_type === 'TK_RESERVED' && (in_array(flags.last_text, Tokenizer.line_starters) || flags.last_text === 'catch')) {
	                if (opt.space_before_conditional) {
	                    output.space_before_token = true;
	                }
	            }

	            // Should be a space between await and an IIFE
	            if(current_token.text === '(' && last_type === 'TK_RESERVED' && flags.last_word === 'await'){
	                output.space_before_token = true;
	            }

	            // Support of this kind of newline preservation.
	            // a = (b &&
	            //     (c || d));
	            if (current_token.text === '(') {
	                if (last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
	                    if (!start_of_object_property()) {
	                        allow_wrap_or_preserved_newline();
	                    }
	                }
	            }

	            set_mode(next_mode);
	            print_token();
	            if (opt.space_in_paren) {
	                output.space_before_token = true;
	            }

	            // In all cases, if we newline while inside an expression it should be indented.
	            indent();
	        }

	        function handle_end_expr() {
	            // statements inside expressions are not valid syntax, but...
	            // statements must all be closed when their container closes
	            while (flags.mode === MODE.Statement) {
	                restore_mode();
	            }

	            if (flags.multiline_frame) {
	                allow_wrap_or_preserved_newline(current_token.text === ']' && is_array(flags.mode) && !opt.keep_array_indentation);
	            }

	            if (opt.space_in_paren) {
	                if (last_type === 'TK_START_EXPR' && ! opt.space_in_empty_paren) {
	                    // () [] no inner space in empty parens like these, ever, ref #320
	                    output.trim();
	                    output.space_before_token = false;
	                } else {
	                    output.space_before_token = true;
	                }
	            }
	            if (current_token.text === ']' && opt.keep_array_indentation) {
	                print_token();
	                restore_mode();
	            } else {
	                restore_mode();
	                print_token();
	            }
	            output.remove_redundant_indentation(previous_flags);

	            // do {} while () // no statement required after
	            if (flags.do_while && previous_flags.mode === MODE.Conditional) {
	                previous_flags.mode = MODE.Expression;
	                flags.do_block = false;
	                flags.do_while = false;

	            }
	        }

	        function handle_start_block() {
	            // Check if this is should be treated as a ObjectLiteral
	            var next_token = get_token(1)
	            var second_token = get_token(2)
	            if (second_token && (
	                    (second_token.text === ':' && in_array(next_token.type, ['TK_STRING', 'TK_WORD', 'TK_RESERVED']))
	                    || (in_array(next_token.text, ['get', 'set']) && in_array(second_token.type, ['TK_WORD', 'TK_RESERVED']))
	                )) {
	                // We don't support TypeScript,but we didn't break it for a very long time.
	                // We'll try to keep not breaking it.
	                if (!in_array(last_last_text, ['class','interface'])) {
	                    set_mode(MODE.ObjectLiteral);
	                } else {
	                    set_mode(MODE.BlockStatement);
	                }
	            } else {
	                set_mode(MODE.BlockStatement);
	            }

	            var empty_braces = !next_token.comments_before.length &&  next_token.text === '}';
	            var empty_anonymous_function = empty_braces && flags.last_word === 'function' &&
	                last_type === 'TK_END_EXPR';

	            if (opt.brace_style === "expand" ||
	                (opt.brace_style === "none" && current_token.wanted_newline)) {
	                if (last_type !== 'TK_OPERATOR' &&
	                    (empty_anonymous_function ||
	                        last_type === 'TK_EQUALS' ||
	                        (last_type === 'TK_RESERVED' && is_special_word(flags.last_text) && flags.last_text !== 'else'))) {
	                    output.space_before_token = true;
	                } else {
	                    print_newline(false, true);
	                }
	            } else { // collapse
	                if (last_type !== 'TK_OPERATOR' && last_type !== 'TK_START_EXPR') {
	                    if (last_type === 'TK_START_BLOCK') {
	                        print_newline();
	                    } else {
	                        output.space_before_token = true;
	                    }
	                } else {
	                    // if TK_OPERATOR or TK_START_EXPR
	                    if (is_array(previous_flags.mode) && flags.last_text === ',') {
	                        if (last_last_text === '}') {
	                            // }, { in array context
	                            output.space_before_token = true;
	                        } else {
	                            print_newline(); // [a, b, c, {
	                        }
	                    }
	                }
	            }
	            print_token();
	            indent();
	        }

	        function handle_end_block() {
	            // statements must all be closed when their container closes
	            while (flags.mode === MODE.Statement) {
	                restore_mode();
	            }
	            var empty_braces = last_type === 'TK_START_BLOCK';

	            if (opt.brace_style === "expand") {
	                if (!empty_braces) {
	                    print_newline();
	                }
	            } else {
	                // skip {}
	                if (!empty_braces) {
	                    if (is_array(flags.mode) && opt.keep_array_indentation) {
	                        // we REALLY need a newline here, but newliner would skip that
	                        opt.keep_array_indentation = false;
	                        print_newline();
	                        opt.keep_array_indentation = true;

	                    } else {
	                        print_newline();
	                    }
	                }
	            }
	            restore_mode();
	            print_token();
	        }

	        function handle_word() {
	            if (current_token.type === 'TK_RESERVED' && flags.mode !== MODE.ObjectLiteral &&
	                in_array(current_token.text, ['set', 'get'])) {
	                current_token.type = 'TK_WORD';
	            }

	            if (current_token.type === 'TK_RESERVED' && flags.mode === MODE.ObjectLiteral) {
	                var next_token = get_token(1);
	                if (next_token.text == ':') {
	                    current_token.type = 'TK_WORD';
	                }
	            }

	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	            } else if (current_token.wanted_newline && !is_expression(flags.mode) &&
	                (last_type !== 'TK_OPERATOR' || (flags.last_text === '--' || flags.last_text === '++')) &&
	                last_type !== 'TK_EQUALS' &&
	                (opt.preserve_newlines || !(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const', 'set', 'get'])))) {

	                print_newline();
	            }

	            if (flags.do_block && !flags.do_while) {
	                if (current_token.type === 'TK_RESERVED' && current_token.text === 'while') {
	                    // do {} ## while ()
	                    output.space_before_token = true;
	                    print_token();
	                    output.space_before_token = true;
	                    flags.do_while = true;
	                    return;
	                } else {
	                    // do {} should always have while as the next word.
	                    // if we don't see the expected while, recover
	                    print_newline();
	                    flags.do_block = false;
	                }
	            }

	            // if may be followed by else, or not
	            // Bare/inline ifs are tricky
	            // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
	            if (flags.if_block) {
	                if (!flags.else_block && (current_token.type === 'TK_RESERVED' && current_token.text === 'else')) {
	                    flags.else_block = true;
	                } else {
	                    while (flags.mode === MODE.Statement) {
	                        restore_mode();
	                    }
	                    flags.if_block = false;
	                    flags.else_block = false;
	                }
	            }

	            if (current_token.type === 'TK_RESERVED' && (current_token.text === 'case' || (current_token.text === 'default' && flags.in_case_statement))) {
	                print_newline();
	                if (flags.case_body || opt.jslint_happy) {
	                    // switch cases following one another
	                    deindent();
	                    flags.case_body = false;
	                }
	                print_token();
	                flags.in_case = true;
	                flags.in_case_statement = true;
	                return;
	            }

	            if (current_token.type === 'TK_RESERVED' && current_token.text === 'function') {
	                if (in_array(flags.last_text, ['}', ';']) || (output.just_added_newline() && ! in_array(flags.last_text, ['[', '{', ':', '=', ',']))) {
	                    // make sure there is a nice clean space of at least one blank line
	                    // before a new function definition
	                    if ( !output.just_added_blankline() && !current_token.comments_before.length) {
	                        print_newline();
	                        print_newline(true);
	                    }
	                }
	                if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD') {
	                    if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set', 'new', 'return', 'export', 'async'])) {
	                        output.space_before_token = true;
	                    } else if (last_type === 'TK_RESERVED' && flags.last_text === 'default' && last_last_text === 'export') {
	                        output.space_before_token = true;
	                    } else {
	                        print_newline();
	                    }
	                } else if (last_type === 'TK_OPERATOR' || flags.last_text === '=') {
	                    // foo = function
	                    output.space_before_token = true;
	                } else if (!flags.multiline_frame && (is_expression(flags.mode) || is_array(flags.mode))) {
	                    // (function
	                } else {
	                    print_newline();
	                }
	            }

	            if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
	                if (!start_of_object_property()) {
	                    allow_wrap_or_preserved_newline();
	                }
	            }

	            if (current_token.type === 'TK_RESERVED' &&  in_array(current_token.text, ['function', 'get', 'set'])) {
	                print_token();
	                flags.last_word = current_token.text;
	                return;
	            }

	            prefix = 'NONE';

	            if (last_type === 'TK_END_BLOCK') {
	                if (!(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally']))) {
	                    prefix = 'NEWLINE';
	                } else {
	                    if (opt.brace_style === "expand" ||
	                        opt.brace_style === "end-expand" ||
	                        (opt.brace_style === "none" && current_token.wanted_newline)) {
	                        prefix = 'NEWLINE';
	                    } else {
	                        prefix = 'SPACE';
	                        output.space_before_token = true;
	                    }
	                }
	            } else if (last_type === 'TK_SEMICOLON' && flags.mode === MODE.BlockStatement) {
	                // TODO: Should this be for STATEMENT as well?
	                prefix = 'NEWLINE';
	            } else if (last_type === 'TK_SEMICOLON' && is_expression(flags.mode)) {
	                prefix = 'SPACE';
	            } else if (last_type === 'TK_STRING') {
	                prefix = 'NEWLINE';
	            } else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' ||
	                (flags.last_text === '*' && last_last_text === 'function')) {
	                prefix = 'SPACE';
	            } else if (last_type === 'TK_START_BLOCK') {
	                prefix = 'NEWLINE';
	            } else if (last_type === 'TK_END_EXPR') {
	                output.space_before_token = true;
	                prefix = 'NEWLINE';
	            }

	            if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
	                if (flags.last_text === 'else' || flags.last_text === 'export') {
	                    prefix = 'SPACE';
	                } else {
	                    prefix = 'NEWLINE';
	                }

	            }

	            if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally'])) {
	                if (last_type !== 'TK_END_BLOCK' ||
	                    opt.brace_style === "expand" ||
	                    opt.brace_style === "end-expand" ||
	                    (opt.brace_style === "none" && current_token.wanted_newline)) {
	                    print_newline();
	                } else {
	                    output.trim(true);
	                    var line = output.current_line;
	                    // If we trimmed and there's something other than a close block before us
	                    // put a newline back in.  Handles '} // comment' scenario.
	                    if (line.last() !== '}') {
	                        print_newline();
	                    }
	                    output.space_before_token = true;
	                }
	            } else if (prefix === 'NEWLINE') {
	                if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
	                    // no newline between 'return nnn'
	                    output.space_before_token = true;
	                } else if (last_type !== 'TK_END_EXPR') {
	                    if ((last_type !== 'TK_START_EXPR' || !(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['var', 'let', 'const']))) && flags.last_text !== ':') {
	                        // no need to force newline on 'var': for (var x = 0...)
	                        if (current_token.type === 'TK_RESERVED' && current_token.text === 'if' && flags.last_text === 'else') {
	                            // no newline for } else if {
	                            output.space_before_token = true;
	                        } else {
	                            print_newline();
	                        }
	                    }
	                } else if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
	                    print_newline();
	                }
	            } else if (flags.multiline_frame && is_array(flags.mode) && flags.last_text === ',' && last_last_text === '}') {
	                print_newline(); // }, in lists get a newline treatment
	            } else if (prefix === 'SPACE') {
	                output.space_before_token = true;
	            }
	            print_token();
	            flags.last_word = current_token.text;

	            if (current_token.type === 'TK_RESERVED' && current_token.text === 'do') {
	                flags.do_block = true;
	            }

	            if (current_token.type === 'TK_RESERVED' && current_token.text === 'if') {
	                flags.if_block = true;
	            }
	        }

	        function handle_semicolon() {
	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	                // Semicolon can be the start (and end) of a statement
	                output.space_before_token = false;
	            }
	            while (flags.mode === MODE.Statement && !flags.if_block && !flags.do_block) {
	                restore_mode();
	            }
	            print_token();
	        }

	        function handle_string() {
	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	                // One difference - strings want at least a space before
	                output.space_before_token = true;
	            } else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD') {
	                output.space_before_token = true;
	            } else if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
	                if (!start_of_object_property()) {
	                    allow_wrap_or_preserved_newline();
	                }
	            } else {
	                print_newline();
	            }
	            print_token();
	        }

	        function handle_equals() {
	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	            }

	            if (flags.declaration_statement) {
	                // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
	                flags.declaration_assignment = true;
	            }
	            output.space_before_token = true;
	            print_token();
	            output.space_before_token = true;
	        }

	        function handle_comma() {
	            if (flags.declaration_statement) {
	                if (is_expression(flags.parent.mode)) {
	                    // do not break on comma, for(var a = 1, b = 2)
	                    flags.declaration_assignment = false;
	                }

	                print_token();

	                if (flags.declaration_assignment) {
	                    flags.declaration_assignment = false;
	                    print_newline(false, true);
	                } else {
	                    output.space_before_token = true;
	                    // for comma-first, we want to allow a newline before the comma
	                    // to turn into a newline after the comma, which we will fixup later
	                    if (opt.comma_first) {
	                        allow_wrap_or_preserved_newline();
	                    }
	                }
	                return;
	            }

	            print_token();
	            if (flags.mode === MODE.ObjectLiteral ||
	                (flags.mode === MODE.Statement && flags.parent.mode === MODE.ObjectLiteral)) {
	                if (flags.mode === MODE.Statement) {
	                    restore_mode();
	                }
	                print_newline();
	            } else {
	                // EXPR or DO_BLOCK
	                output.space_before_token = true;
	                // for comma-first, we want to allow a newline before the comma
	                // to turn into a newline after the comma, which we will fixup later
	                if (opt.comma_first) {
	                    allow_wrap_or_preserved_newline();
	                }
	            }

	        }

	        function handle_operator() {
	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	            }

	            if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
	                // "return" had a special handling in TK_WORD. Now we need to return the favor
	                output.space_before_token = true;
	                print_token();
	                return;
	            }

	            // hack for actionscript's import .*;
	            if (current_token.text === '*' && last_type === 'TK_DOT') {
	                print_token();
	                return;
	            }

	            if (current_token.text === ':' && flags.in_case) {
	                flags.case_body = true;
	                indent();
	                print_token();
	                print_newline();
	                flags.in_case = false;
	                return;
	            }

	            if (current_token.text === '::') {
	                // no spaces around exotic namespacing syntax operator
	                print_token();
	                return;
	            }

	            // Allow line wrapping between operators
	            if (last_type === 'TK_OPERATOR') {
	                allow_wrap_or_preserved_newline();
	            }

	            var space_before = true;
	            var space_after = true;

	            if (in_array(current_token.text, ['--', '++', '!', '~']) || (in_array(current_token.text, ['-', '+']) && (in_array(last_type, ['TK_START_BLOCK', 'TK_START_EXPR', 'TK_EQUALS', 'TK_OPERATOR']) || in_array(flags.last_text, Tokenizer.line_starters) || flags.last_text === ','))) {
	                // unary operators (and binary +/- pretending to be unary) special cases

	                space_before = false;
	                space_after = false;

	                // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
	                // if there is a newline between -- or ++ and anything else we should preserve it.
	                if (current_token.wanted_newline && (current_token.text === '--' || current_token.text === '++')) {
	                    print_newline(false, true);
	                }

	                if (flags.last_text === ';' && is_expression(flags.mode)) {
	                    // for (;; ++i)
	                    //        ^^^
	                    space_before = true;
	                }

	                if (last_type === 'TK_RESERVED') {
	                    space_before = true;
	                } else if (last_type === 'TK_END_EXPR') {
	                    space_before = !(flags.last_text === ']' && (current_token.text === '--' || current_token.text === '++'));
	                } else if (last_type === 'TK_OPERATOR') {
	                    // a++ + ++b;
	                    // a - -b
	                    space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(flags.last_text, ['--', '-', '++', '+']);
	                    // + and - are not unary when preceeded by -- or ++ operator
	                    // a-- + b
	                    // a * +b
	                    // a - -b
	                    if (in_array(current_token.text, ['+', '-']) && in_array(flags.last_text, ['--', '++'])) {
	                        space_after = true;
	                    }
	                }

	                if ((flags.mode === MODE.BlockStatement || flags.mode === MODE.Statement) && (flags.last_text === '{' || flags.last_text === ';')) {
	                    // { foo; --i }
	                    // foo(); --bar;
	                    print_newline();
	                }
	            } else if (current_token.text === ':') {
	                if (flags.ternary_depth === 0) {
	                    // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
	                    space_before = false;
	                } else {
	                    flags.ternary_depth -= 1;
	                }
	            } else if (current_token.text === '?') {
	                flags.ternary_depth += 1;
	            } else if (current_token.text === '*' && last_type === 'TK_RESERVED' && flags.last_text === 'function') {
	                space_before = false;
	                space_after = false;
	            }
	            output.space_before_token = output.space_before_token || space_before;
	            print_token();
	            output.space_before_token = space_after;
	        }

	        function handle_block_comment() {
	            if (output.raw) {
	                output.add_raw_token(current_token)
	                if (current_token.directives && current_token.directives['preserve'] === 'end') {
	                    // If we're testing the raw output behavior, do not allow a directive to turn it off.
	                    if (!opt.test_output_raw) {
	                        output.raw = false;
	                    }
	                }
	                return;
	            }

	            if (current_token.directives) {
	                print_newline(false, true);
	                print_token();
	                if (current_token.directives['preserve'] === 'start') {
	                    output.raw = true;
	                }
	                print_newline(false, true);
	                return;
	            }

	            // inline block
	            if (!acorn.newline.test(current_token.text) && !current_token.wanted_newline) {
	                output.space_before_token = true;
	                print_token();
	                output.space_before_token = true;
	                return;
	            }

	            var lines = split_newlines(current_token.text);
	            var j; // iterator for this case
	            var javadoc = false;
	            var starless = false;
	            var lastIndent = current_token.whitespace_before;
	            var lastIndentLength = lastIndent.length;

	            // block comment starts with a new line
	            print_newline(false, true);
	            if (lines.length > 1) {
	                if (all_lines_start_with(lines.slice(1), '*')) {
	                    javadoc = true;
	                }
	                else if (each_line_matches_indent(lines.slice(1), lastIndent)) {
	                    starless = true;
	                }
	            }

	            // first line always indented
	            print_token(lines[0]);
	            for (j = 1; j < lines.length; j++) {
	                print_newline(false, true);
	                if (javadoc) {
	                    // javadoc: reformat and re-indent
	                    print_token(' ' + ltrim(lines[j]));
	                } else if (starless && lines[j].length > lastIndentLength) {
	                    // starless: re-indent non-empty content, avoiding trim
	                    print_token(lines[j].substring(lastIndentLength));
	                } else {
	                    // normal comments output raw
	                    output.add_token(lines[j]);
	                }
	            }

	            // for comments of more than one line, make sure there's a new line after
	            print_newline(false, true);
	        }

	        function handle_comment() {
	            if (current_token.wanted_newline) {
	                print_newline(false, true);
	            } else {
	                output.trim(true);
	            }

	            output.space_before_token = true;
	            print_token();
	            print_newline(false, true);
	        }

	        function handle_dot() {
	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	            }

	            if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
	                output.space_before_token = true;
	            } else {
	                // allow preserved newlines before dots in general
	                // force newlines on dots after close paren when break_chained - for bar().baz()
	                allow_wrap_or_preserved_newline(flags.last_text === ')' && opt.break_chained_methods);
	            }

	            print_token();
	        }

	        function handle_unknown() {
	            print_token();

	            if (current_token.text[current_token.text.length - 1] === '\n') {
	                print_newline();
	            }
	        }

	        function handle_eof() {
	            // Unwind any open statements
	            while (flags.mode === MODE.Statement) {
	                restore_mode();
	            }
	        }
	    }


	    function OutputLine(parent) {
	        var _character_count = 0;
	        // use indent_count as a marker for lines that have preserved indentation
	        var _indent_count = -1;

	        var _items = [];
	        var _empty = true;

	        this.set_indent = function(level) {
	            _character_count = parent.baseIndentLength + level * parent.indent_length
	            _indent_count = level;
	        }

	        this.get_character_count = function() {
	            return _character_count;
	        }

	        this.is_empty = function() {
	            return _empty;
	        }

	        this.last = function() {
	            if (!this._empty) {
	              return _items[_items.length - 1];
	            } else {
	              return null;
	            }
	        }

	        this.push = function(input) {
	            _items.push(input);
	            _character_count += input.length;
	            _empty = false;
	        }

	        this.pop = function() {
	            var item = null;
	            if (!_empty) {
	                item = _items.pop();
	                _character_count -= item.length;
	                _empty = _items.length === 0;
	            }
	            return item;
	        }

	        this.remove_indent = function() {
	            if (_indent_count > 0) {
	                _indent_count -= 1;
	                _character_count -= parent.indent_length
	            }
	        }

	        this.trim = function() {
	            while (this.last() === ' ') {
	                var item = _items.pop();
	                _character_count -= 1;
	            }
	            _empty = _items.length === 0;
	        }

	        this.toString = function() {
	            var result = '';
	            if (!this._empty) {
	                if (_indent_count >= 0) {
	                    result = parent.indent_cache[_indent_count];
	                }
	                result += _items.join('')
	            }
	            return result;
	        }
	    }

	    function Output(indent_string, baseIndentString) {
	        baseIndentString = baseIndentString || '';
	        this.indent_cache = [ baseIndentString ];
	        this.baseIndentLength = baseIndentString.length;
	        this.indent_length = indent_string.length;
	        this.raw = false;

	        var lines =[];
	        this.baseIndentString = baseIndentString;
	        this.indent_string = indent_string;
	        this.previous_line = null;
	        this.current_line = null;
	        this.space_before_token = false;

	        this.add_outputline = function() {
	            this.previous_line = this.current_line;
	            this.current_line = new OutputLine(this);
	            lines.push(this.current_line);
	        }

	        // initialize
	        this.add_outputline();


	        this.get_line_number = function() {
	            return lines.length;
	        }

	        // Using object instead of string to allow for later expansion of info about each line
	        this.add_new_line = function(force_newline) {
	            if (this.get_line_number() === 1 && this.just_added_newline()) {
	                return false; // no newline on start of file
	            }

	            if (force_newline || !this.just_added_newline()) {
	                if (!this.raw) {
	                    this.add_outputline();
	                }
	                return true;
	            }

	            return false;
	        }

	        this.get_code = function() {
	            var sweet_code = lines.join('\n').replace(/[\r\n\t ]+$/, '');
	            return sweet_code;
	        }

	        this.set_indent = function(level) {
	            // Never indent your first output indent at the start of the file
	            if (lines.length > 1) {
	                while(level >= this.indent_cache.length) {
	                    this.indent_cache.push(this.indent_cache[this.indent_cache.length - 1] + this.indent_string);
	                }

	                this.current_line.set_indent(level);
	                return true;
	            }
	            this.current_line.set_indent(0);
	            return false;
	        }

	        this.add_raw_token = function(token) {
	            for (var x = 0; x < token.newlines; x++) {
	                this.add_outputline();
	            }
	            this.current_line.push(token.whitespace_before);
	            this.current_line.push(token.text);
	            this.space_before_token = false;
	        }

	        this.add_token = function(printable_token) {
	            this.add_space_before_token();
	            this.current_line.push(printable_token);
	        }

	        this.add_space_before_token = function() {
	            if (this.space_before_token && !this.just_added_newline()) {
	                this.current_line.push(' ');
	            }
	            this.space_before_token = false;
	        }

	        this.remove_redundant_indentation = function (frame) {
	            // This implementation is effective but has some issues:
	            //     - can cause line wrap to happen too soon due to indent removal
	            //           after wrap points are calculated
	            // These issues are minor compared to ugly indentation.

	            if (frame.multiline_frame ||
	                frame.mode === MODE.ForInitializer ||
	                frame.mode === MODE.Conditional) {
	                return;
	            }

	            // remove one indent from each line inside this section
	            var index = frame.start_line_index;
	            var line;

	            var output_length = lines.length;
	            while (index < output_length) {
	                lines[index].remove_indent();
	                index++;
	            }
	        }

	        this.trim = function(eat_newlines) {
	            eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

	            this.current_line.trim(indent_string, baseIndentString);

	            while (eat_newlines && lines.length > 1 &&
	                this.current_line.is_empty()) {
	                lines.pop();
	                this.current_line = lines[lines.length - 1]
	                this.current_line.trim();
	            }

	            this.previous_line = lines.length > 1 ? lines[lines.length - 2] : null;
	        }

	        this.just_added_newline = function() {
	            return this.current_line.is_empty();
	        }

	        this.just_added_blankline = function() {
	            if (this.just_added_newline()) {
	                if (lines.length === 1) {
	                    return true; // start of the file and newline = blank
	                }

	                var line = lines[lines.length - 2];
	                return line.is_empty();
	            }
	            return false;
	        }
	    }


	    var Token = function(type, text, newlines, whitespace_before, mode, parent) {
	        this.type = type;
	        this.text = text;
	        this.comments_before = [];
	        this.newlines = newlines || 0;
	        this.wanted_newline = newlines > 0;
	        this.whitespace_before = whitespace_before || '';
	        this.parent = null;
	        this.directives = null;
	    }

	    function tokenizer(input, opts, indent_string) {

	        var whitespace = "\n\r\t ".split('');
	        var digit = /[0-9]/;
	        var digit_hex = /[0123456789abcdefABCDEF]/;

	        var punct = ('+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! ~ , : ? ^ ^= |= :: =>'
	                +' <%= <% %> <?= <? ?>').split(' '); // try to be a good boy and try not to break the markup language identifiers

	        // words which should always start on new line.
	        this.line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
	        var reserved_words = this.line_starters.concat(['do', 'in', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await']);

	        //  /* ... */ comment ends with nearest */ or end of file
	        var block_comment_pattern = /([\s\S]*?)((?:\*\/)|$)/g;

	        // comment ends just before nearest linefeed or end of file
	        var comment_pattern = /([^\n\r\u2028\u2029]*)/g;

	        var directives_block_pattern = /\/\* beautify( \w+[:]\w+)+ \*\//g;
	        var directive_pattern = / (\w+)[:](\w+)/g;
	        var directives_end_ignore_pattern = /([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g;

	        var template_pattern = /((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g

	        var n_newlines, whitespace_before_token, in_html_comment, tokens, parser_pos;
	        var input_length;

	        this.tokenize = function() {
	            // cache the source's length.
	            input_length = input.length
	            parser_pos = 0;
	            in_html_comment = false
	            tokens = [];

	            var next, last;
	            var token_values;
	            var open = null;
	            var open_stack = [];
	            var comments = [];

	            while (!(last && last.type === 'TK_EOF')) {
	                token_values = tokenize_next();
	                next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
	                while(next.type === 'TK_COMMENT' || next.type === 'TK_BLOCK_COMMENT' || next.type === 'TK_UNKNOWN') {
	                    if (next.type === 'TK_BLOCK_COMMENT') {
	                        next.directives = token_values[2];
	                    }
	                    comments.push(next);
	                    token_values = tokenize_next();
	                    next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
	                }

	                if (comments.length) {
	                    next.comments_before = comments;
	                    comments = [];
	                }

	                if (next.type === 'TK_START_BLOCK' || next.type === 'TK_START_EXPR') {
	                    next.parent = last;
	                    open_stack.push(open);
	                    open = next;
	                }  else if ((next.type === 'TK_END_BLOCK' || next.type === 'TK_END_EXPR') &&
	                    (open && (
	                        (next.text === ']' && open.text === '[') ||
	                        (next.text === ')' && open.text === '(') ||
	                        (next.text === '}' && open.text === '{')))) {
	                    next.parent = open.parent;
	                    open = open_stack.pop();
	                }

	                tokens.push(next);
	                last = next;
	            }

	            return tokens;
	        }

	        function get_directives (text) {
	            if (!text.match(directives_block_pattern)) {
	                return null;
	            }

	            var directives = {};
	            directive_pattern.lastIndex = 0;
	            var directive_match = directive_pattern.exec(text);

	            while (directive_match) {
	                directives[directive_match[1]] = directive_match[2];
	                directive_match = directive_pattern.exec(text);
	            }

	            return directives;
	        }

	        function tokenize_next() {
	            var i, resulting_string;
	            var whitespace_on_this_line = [];

	            n_newlines = 0;
	            whitespace_before_token = '';

	            if (parser_pos >= input_length) {
	                return ['', 'TK_EOF'];
	            }

	            var last_token;
	            if (tokens.length) {
	                last_token = tokens[tokens.length-1];
	            } else {
	                // For the sake of tokenizing we can pretend that there was on open brace to start
	                last_token = new Token('TK_START_BLOCK', '{');
	            }


	            var c = input.charAt(parser_pos);
	            parser_pos += 1;

	            while (in_array(c, whitespace)) {

	                if (acorn.newline.test(c)) {
	                    if (!(c === '\n' && input.charAt(parser_pos-2) === '\r')) {
	                        n_newlines += 1;
	                        whitespace_on_this_line = [];
	                    }
	                } else {
	                    whitespace_on_this_line.push(c);
	                }

	                if (parser_pos >= input_length) {
	                    return ['', 'TK_EOF'];
	                }

	                c = input.charAt(parser_pos);
	                parser_pos += 1;
	            }

	            if(whitespace_on_this_line.length) {
	                whitespace_before_token = whitespace_on_this_line.join('');
	            }

	            if (digit.test(c)) {
	                var allow_decimal = true;
	                var allow_e = true;
	                var local_digit = digit;

	                if (c === '0' && parser_pos < input_length && /[Xx]/.test(input.charAt(parser_pos))) {
	                    // switch to hex number, no decimal or e, just hex digits
	                    allow_decimal = false;
	                    allow_e = false;
	                    c += input.charAt(parser_pos);
	                    parser_pos += 1;
	                    local_digit = digit_hex
	                } else {
	                    // we know this first loop will run.  It keeps the logic simpler.
	                    c = '';
	                    parser_pos -= 1
	                }

	                // Add the digits
	                while (parser_pos < input_length && local_digit.test(input.charAt(parser_pos))) {
	                    c += input.charAt(parser_pos);
	                    parser_pos += 1;

	                    if (allow_decimal && parser_pos < input_length && input.charAt(parser_pos) === '.') {
	                        c += input.charAt(parser_pos);
	                        parser_pos += 1;
	                        allow_decimal = false;
	                    }

	                    if (allow_e && parser_pos < input_length && /[Ee]/.test(input.charAt(parser_pos))) {
	                        c += input.charAt(parser_pos);
	                        parser_pos += 1;

	                        if (parser_pos < input_length && /[+-]/.test(input.charAt(parser_pos))) {
	                            c += input.charAt(parser_pos);
	                            parser_pos += 1;
	                        }

	                        allow_e = false;
	                        allow_decimal = false;
	                    }
	                }

	                return [c, 'TK_WORD'];
	            }

	            if (acorn.isIdentifierStart(input.charCodeAt(parser_pos-1))) {
	                if (parser_pos < input_length) {
	                    while (acorn.isIdentifierChar(input.charCodeAt(parser_pos))) {
	                        c += input.charAt(parser_pos);
	                        parser_pos += 1;
	                        if (parser_pos === input_length) {
	                            break;
	                        }
	                    }
	                }

	                if (!(last_token.type === 'TK_DOT' ||
	                        (last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['set', 'get'])))
	                    && in_array(c, reserved_words)) {
	                    if (c === 'in') { // hack for 'in' operator
	                        return [c, 'TK_OPERATOR'];
	                    }
	                    return [c, 'TK_RESERVED'];
	                }

	                return [c, 'TK_WORD'];
	            }

	            if (c === '(' || c === '[') {
	                return [c, 'TK_START_EXPR'];
	            }

	            if (c === ')' || c === ']') {
	                return [c, 'TK_END_EXPR'];
	            }

	            if (c === '{') {
	                return [c, 'TK_START_BLOCK'];
	            }

	            if (c === '}') {
	                return [c, 'TK_END_BLOCK'];
	            }

	            if (c === ';') {
	                return [c, 'TK_SEMICOLON'];
	            }

	            if (c === '/') {
	                var comment = '';
	                // peek for comment /* ... */
	                if (input.charAt(parser_pos) === '*') {
	                    parser_pos += 1;
	                    block_comment_pattern.lastIndex = parser_pos;
	                    var comment_match = block_comment_pattern.exec(input);
	                    comment = '/*' + comment_match[0];
	                    parser_pos += comment_match[0].length;
	                    var directives = get_directives(comment);
	                    if (directives && directives['ignore'] === 'start') {
	                        directives_end_ignore_pattern.lastIndex = parser_pos;
	                        comment_match = directives_end_ignore_pattern.exec(input)
	                        comment += comment_match[0];
	                        parser_pos += comment_match[0].length;
	                    }
	                    comment = comment.replace(acorn.lineBreak, '\n');
	                    return [comment, 'TK_BLOCK_COMMENT', directives];
	                }
	                // peek for comment // ...
	                if (input.charAt(parser_pos) === '/') {
	                    parser_pos += 1;
	                    comment_pattern.lastIndex = parser_pos;
	                    var comment_match = comment_pattern.exec(input);
	                    comment = '//' + comment_match[0];
	                    parser_pos += comment_match[0].length;
	                    return [comment, 'TK_COMMENT'];
	                }

	            }

	            if (c === '`' || c === "'" || c === '"' || // string
	                (
	                    (c === '/') || // regexp
	                    (opts.e4x && c === "<" && input.slice(parser_pos - 1).match(/^<([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/)) // xml
	                ) && ( // regex and xml can only appear in specific locations during parsing
	                    (last_token.type === 'TK_RESERVED' && in_array(last_token.text , ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) ||
	                    (last_token.type === 'TK_END_EXPR' && last_token.text === ')' &&
	                        last_token.parent && last_token.parent.type === 'TK_RESERVED' && in_array(last_token.parent.text, ['if', 'while', 'for'])) ||
	                    (in_array(last_token.type, ['TK_COMMENT', 'TK_START_EXPR', 'TK_START_BLOCK',
	                        'TK_END_BLOCK', 'TK_OPERATOR', 'TK_EQUALS', 'TK_EOF', 'TK_SEMICOLON', 'TK_COMMA'
	                    ]))
	                )) {

	                var sep = c,
	                    esc = false,
	                    has_char_escapes = false;

	                resulting_string = c;

	                if (sep === '/') {
	                    //
	                    // handle regexp
	                    //
	                    var in_char_class = false;
	                    while (parser_pos < input_length &&
	                            ((esc || in_char_class || input.charAt(parser_pos) !== sep) &&
	                            !acorn.newline.test(input.charAt(parser_pos)))) {
	                        resulting_string += input.charAt(parser_pos);
	                        if (!esc) {
	                            esc = input.charAt(parser_pos) === '\\';
	                            if (input.charAt(parser_pos) === '[') {
	                                in_char_class = true;
	                            } else if (input.charAt(parser_pos) === ']') {
	                                in_char_class = false;
	                            }
	                        } else {
	                            esc = false;
	                        }
	                        parser_pos += 1;
	                    }
	                } else if (opts.e4x && sep === '<') {
	                    //
	                    // handle e4x xml literals
	                    //
	                    var xmlRegExp = /<(\/?)([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/g;
	                    var xmlStr = input.slice(parser_pos - 1);
	                    var match = xmlRegExp.exec(xmlStr);
	                    if (match && match.index === 0) {
	                        var rootTag = match[2];
	                        var depth = 0;
	                        while (match) {
	                            var isEndTag = !! match[1];
	                            var tagName = match[2];
	                            var isSingletonTag = ( !! match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
	                            if (tagName === rootTag && !isSingletonTag) {
	                                if (isEndTag) {
	                                    --depth;
	                                } else {
	                                    ++depth;
	                                }
	                            }
	                            if (depth <= 0) {
	                                break;
	                            }
	                            match = xmlRegExp.exec(xmlStr);
	                        }
	                        var xmlLength = match ? match.index + match[0].length : xmlStr.length;
	                        xmlStr = xmlStr.slice(0, xmlLength);
	                        parser_pos += xmlLength - 1;
	                        xmlStr = xmlStr.replace(acorn.lineBreak, '\n');
	                        return [xmlStr, "TK_STRING"];
	                    }
	                } else {
	                    //
	                    // handle string
	                    //
	                    // Template strings can travers lines without escape characters.
	                    // Other strings cannot
	                    while (parser_pos < input_length &&
	                            (esc || (input.charAt(parser_pos) !== sep &&
	                            (sep === '`' || !acorn.newline.test(input.charAt(parser_pos)))))) {
	                        // Handle \r\n linebreaks after escapes or in template strings
	                        if ((esc || sep === '`') && acorn.newline.test(input.charAt(parser_pos))) {
	                            if (input.charAt(parser_pos) === '\r' && input.charAt(parser_pos + 1) === '\n') {
	                                parser_pos += 1;
	                            }
	                            resulting_string += '\n';
	                        } else {
	                            resulting_string += input.charAt(parser_pos);
	                        }
	                        if (esc) {
	                            if (input.charAt(parser_pos) === 'x' || input.charAt(parser_pos) === 'u') {
	                                has_char_escapes = true;
	                            }
	                            esc = false;
	                        } else {
	                            esc = input.charAt(parser_pos) === '\\';
	                        }
	                        parser_pos += 1;
	                    }

	                }

	                if (has_char_escapes && opts.unescape_strings) {
	                    resulting_string = unescape_string(resulting_string);
	                }

	                if (parser_pos < input_length && input.charAt(parser_pos) === sep) {
	                    resulting_string += sep;
	                    parser_pos += 1;

	                    if (sep === '/') {
	                        // regexps may have modifiers /regexp/MOD , so fetch those, too
	                        // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
	                        while (parser_pos < input_length && acorn.isIdentifierStart(input.charCodeAt(parser_pos))) {
	                            resulting_string += input.charAt(parser_pos);
	                            parser_pos += 1;
	                        }
	                    }
	                }
	                return [resulting_string, 'TK_STRING'];
	            }

	            if (c === '#') {

	                if (tokens.length === 0 && input.charAt(parser_pos) === '!') {
	                    // shebang
	                    resulting_string = c;
	                    while (parser_pos < input_length && c !== '\n') {
	                        c = input.charAt(parser_pos);
	                        resulting_string += c;
	                        parser_pos += 1;
	                    }
	                    return [trim(resulting_string) + '\n', 'TK_UNKNOWN'];
	                }



	                // Spidermonkey-specific sharp variables for circular references
	                // https://developer.mozilla.org/En/Sharp_variables_in_JavaScript
	                // http://mxr.mozilla.org/mozilla-central/source/js/src/jsscan.cpp around line 1935
	                var sharp = '#';
	                if (parser_pos < input_length && digit.test(input.charAt(parser_pos))) {
	                    do {
	                        c = input.charAt(parser_pos);
	                        sharp += c;
	                        parser_pos += 1;
	                    } while (parser_pos < input_length && c !== '#' && c !== '=');
	                    if (c === '#') {
	                        //
	                    } else if (input.charAt(parser_pos) === '[' && input.charAt(parser_pos + 1) === ']') {
	                        sharp += '[]';
	                        parser_pos += 2;
	                    } else if (input.charAt(parser_pos) === '{' && input.charAt(parser_pos + 1) === '}') {
	                        sharp += '{}';
	                        parser_pos += 2;
	                    }
	                    return [sharp, 'TK_WORD'];
	                }
	            }

	            if (c === '<' && (input.charAt(parser_pos) === '?' || input.charAt(parser_pos) === '%')) {
	                template_pattern.lastIndex = parser_pos - 1;
	                var template_match = template_pattern.exec(input);
	                if(template_match) {
	                    c = template_match[0];
	                    parser_pos += c.length - 1;
	                    c = c.replace(acorn.lineBreak, '\n');
	                    return [c, 'TK_STRING'];
	                }
	            }

	            if (c === '<' && input.substring(parser_pos - 1, parser_pos + 3) === '<!--') {
	                parser_pos += 3;
	                c = '<!--';
	                while (!acorn.newline.test(input.charAt(parser_pos)) && parser_pos < input_length) {
	                    c += input.charAt(parser_pos);
	                    parser_pos++;
	                }
	                in_html_comment = true;
	                return [c, 'TK_COMMENT'];
	            }

	            if (c === '-' && in_html_comment && input.substring(parser_pos - 1, parser_pos + 2) === '-->') {
	                in_html_comment = false;
	                parser_pos += 2;
	                return ['-->', 'TK_COMMENT'];
	            }

	            if (c === '.') {
	                return [c, 'TK_DOT'];
	            }

	            if (in_array(c, punct)) {
	                while (parser_pos < input_length && in_array(c + input.charAt(parser_pos), punct)) {
	                    c += input.charAt(parser_pos);
	                    parser_pos += 1;
	                    if (parser_pos >= input_length) {
	                        break;
	                    }
	                }

	                if (c === ',') {
	                    return [c, 'TK_COMMA'];
	                } else if (c === '=') {
	                    return [c, 'TK_EQUALS'];
	                } else {
	                    return [c, 'TK_OPERATOR'];
	                }
	            }

	            return [c, 'TK_UNKNOWN'];
	        }


	        function unescape_string(s) {
	            var esc = false,
	                out = '',
	                pos = 0,
	                s_hex = '',
	                escaped = 0,
	                c;

	            while (esc || pos < s.length) {

	                c = s.charAt(pos);
	                pos++;

	                if (esc) {
	                    esc = false;
	                    if (c === 'x') {
	                        // simple hex-escape \x24
	                        s_hex = s.substr(pos, 2);
	                        pos += 2;
	                    } else if (c === 'u') {
	                        // unicode-escape, \u2134
	                        s_hex = s.substr(pos, 4);
	                        pos += 4;
	                    } else {
	                        // some common escape, e.g \n
	                        out += '\\' + c;
	                        continue;
	                    }
	                    if (!s_hex.match(/^[0123456789abcdefABCDEF]+$/)) {
	                        // some weird escaping, bail out,
	                        // leaving whole string intact
	                        return s;
	                    }

	                    escaped = parseInt(s_hex, 16);

	                    if (escaped >= 0x00 && escaped < 0x20) {
	                        // leave 0x00...0x1f escaped
	                        if (c === 'x') {
	                            out += '\\x' + s_hex;
	                        } else {
	                            out += '\\u' + s_hex;
	                        }
	                        continue;
	                    } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
	                        // single-quote, apostrophe, backslash - escape these
	                        out += '\\' + String.fromCharCode(escaped);
	                    } else if (c === 'x' && escaped > 0x7e && escaped <= 0xff) {
	                        // we bail out on \x7f..\xff,
	                        // leaving whole string escaped,
	                        // as it's probably completely binary
	                        return s;
	                    } else {
	                        out += String.fromCharCode(escaped);
	                    }
	                } else if (c === '\\') {
	                    esc = true;
	                } else {
	                    out += c;
	                }
	            }
	            return out;
	        }

	    }


	    if (true) {
	        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return { js_beautify: js_beautify };
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        // Add support for CommonJS. Just put this file somewhere on your require.paths
	        // and you will be able to `var js_beautify = require("beautify").js_beautify`.
	        exports.js_beautify = js_beautify;
	    } else if (typeof window !== "undefined") {
	        // If we're running a web page and don't have either of the above, add our one global
	        window.js_beautify = js_beautify;
	    } else if (typeof global !== "undefined") {
	        // If we don't even have window, try global.
	        global.js_beautify = js_beautify;
	    }

	}());


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
	/*

	  The MIT License (MIT)

	  Copyright (c) 2007-2013 Einar Lielmanis and contributors.

	  Permission is hereby granted, free of charge, to any person
	  obtaining a copy of this software and associated documentation files
	  (the "Software"), to deal in the Software without restriction,
	  including without limitation the rights to use, copy, modify, merge,
	  publish, distribute, sublicense, and/or sell copies of the Software,
	  and to permit persons to whom the Software is furnished to do so,
	  subject to the following conditions:

	  The above copyright notice and this permission notice shall be
	  included in all copies or substantial portions of the Software.

	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
	  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	  SOFTWARE.


	 CSS Beautifier
	---------------

	    Written by Harutyun Amirjanyan, (amirjanyan@gmail.com)

	    Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
	        http://jsbeautifier.org/

	    Usage:
	        css_beautify(source_text);
	        css_beautify(source_text, options);

	    The options are (default in brackets):
	        indent_size (4)                   — indentation size,
	        indent_char (space)               — character to indent with,
	        selector_separator_newline (true) - separate selectors with newline or
	                                            not (e.g. "a,\nbr" or "a, br")
	        end_with_newline (false)          - end with a newline
	        newline_between_rules (true)      - add a new line after every css rule

	    e.g

	    css_beautify(css_source_text, {
	      'indent_size': 1,
	      'indent_char': '\t',
	      'selector_separator': ' ',
	      'end_with_newline': false,
	      'newline_between_rules': true
	    });
	*/

	// http://www.w3.org/TR/CSS21/syndata.html#tokenization
	// http://www.w3.org/TR/css3-syntax/

	(function() {
	    function css_beautify(source_text, options) {
	        options = options || {};
	        source_text = source_text || '';
	        // HACK: newline parsing inconsistent. This brute force normalizes the input.
	        source_text = source_text.replace(/\r\n|[\r\u2028\u2029]/g, '\n')

	        var indentSize = options.indent_size || 4;
	        var indentCharacter = options.indent_char || ' ';
	        var selectorSeparatorNewline = (options.selector_separator_newline === undefined) ? true : options.selector_separator_newline;
	        var end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
	        var newline_between_rules = (options.newline_between_rules === undefined) ? true : options.newline_between_rules;
	        var eol = options.eol ? options.eol : '\n';

	        // compatibility
	        if (typeof indentSize === "string") {
	            indentSize = parseInt(indentSize, 10);
	        }

	        if(options.indent_with_tabs){
	            indentCharacter = '\t';
	            indentSize = 1;
	        }

	        eol = eol.replace(/\\r/, '\r').replace(/\\n/, '\n')


	        // tokenizer
	        var whiteRe = /^\s+$/;
	        var wordRe = /[\w$\-_]/;

	        var pos = -1,
	            ch;
	        var parenLevel = 0;

	        function next() {
	            ch = source_text.charAt(++pos);
	            return ch || '';
	        }

	        function peek(skipWhitespace) {
	            var result = '';
	            var prev_pos = pos;
	            if (skipWhitespace) {
	                eatWhitespace();
	            }
	            result = source_text.charAt(pos + 1) || '';
	            pos = prev_pos - 1;
	            next();
	            return result;
	        }

	        function eatString(endChars) {
	            var start = pos;
	            while (next()) {
	                if (ch === "\\") {
	                    next();
	                } else if (endChars.indexOf(ch) !== -1) {
	                    break;
	                } else if (ch === "\n") {
	                    break;
	                }
	            }
	            return source_text.substring(start, pos + 1);
	        }

	        function peekString(endChar) {
	            var prev_pos = pos;
	            var str = eatString(endChar);
	            pos = prev_pos - 1;
	            next();
	            return str;
	        }

	        function eatWhitespace() {
	            var result = '';
	            while (whiteRe.test(peek())) {
	                next();
	                result += ch;
	            }
	            return result;
	        }

	        function skipWhitespace() {
	            var result = '';
	            if (ch && whiteRe.test(ch)) {
	                result = ch;
	            }
	            while (whiteRe.test(next())) {
	                result += ch;
	            }
	            return result;
	        }

	        function eatComment(singleLine) {
	            var start = pos;
	            singleLine = peek() === "/";
	            next();
	            while (next()) {
	                if (!singleLine && ch === "*" && peek() === "/") {
	                    next();
	                    break;
	                } else if (singleLine && ch === "\n") {
	                    return source_text.substring(start, pos);
	                }
	            }

	            return source_text.substring(start, pos) + ch;
	        }


	        function lookBack(str) {
	            return source_text.substring(pos - str.length, pos).toLowerCase() ===
	                str;
	        }

	        // Nested pseudo-class if we are insideRule
	        // and the next special character found opens
	        // a new block
	        function foundNestedPseudoClass() {
	            var openParen = 0;
	            for (var i = pos + 1; i < source_text.length; i++) {
	                var ch = source_text.charAt(i);
	                if (ch === "{") {
	                    return true;
	                } else if (ch === '(') {
	                    // pseudoclasses can contain ()
	                    openParen += 1;
	                } else if (ch === ')') {
	                    if (openParen == 0) {
	                        return false;
	                    }
	                    openParen -= 1;
	                } else if (ch === ";" || ch === "}") {
	                    return false;
	                }
	            }
	            return false;
	        }

	        // printer
	        var basebaseIndentString = source_text.match(/^[\t ]*/)[0];
	        var singleIndent = new Array(indentSize + 1).join(indentCharacter);
	        var indentLevel = 0;
	        var nestedLevel = 0;

	        function indent() {
	            indentLevel++;
	            basebaseIndentString += singleIndent;
	        }

	        function outdent() {
	            indentLevel--;
	            basebaseIndentString = basebaseIndentString.slice(0, -indentSize);
	        }

	        var print = {};
	        print["{"] = function(ch) {
	            print.singleSpace();
	            output.push(ch);
	            print.newLine();
	        };
	        print["}"] = function(ch) {
	            print.newLine();
	            output.push(ch);
	            print.newLine();
	        };

	        print._lastCharWhitespace = function() {
	            return whiteRe.test(output[output.length - 1]);
	        };

	        print.newLine = function(keepWhitespace) {
	            if (output.length) {
	                if (!keepWhitespace && output[output.length - 1] !== '\n') {
	                    print.trim();
	                }

	                output.push('\n');

	                if (basebaseIndentString) {
	                    output.push(basebaseIndentString);
	                }
	            }
	        };
	        print.singleSpace = function() {
	            if (output.length && !print._lastCharWhitespace()) {
	                output.push(' ');
	            }
	        };

	        print.preserveSingleSpace = function() {
	            if (isAfterSpace) {
	                print.singleSpace();
	            }
	        };

	        print.trim = function() {
	            while (print._lastCharWhitespace()) {
	                output.pop();
	            }
	        };


	        var output = [];
	        /*_____________________--------------------_____________________*/

	        var insideRule = false;
	        var insidePropertyValue = false;
	        var enteringConditionalGroup = false;
	        var top_ch = '';
	        var last_top_ch = '';

	        while (true) {
	            var whitespace = skipWhitespace();
	            var isAfterSpace = whitespace !== '';
	            var isAfterNewline = whitespace.indexOf('\n') !== -1;
	            last_top_ch = top_ch;
	            top_ch = ch;

	            if (!ch) {
	                break;
	            } else if (ch === '/' && peek() === '*') { /* css comment */
	                var header = indentLevel === 0;

	                if (isAfterNewline || header) {
	                    print.newLine();
	                }

	                output.push(eatComment());
	                print.newLine();
	                if (header) {
	                    print.newLine(true);
	                }
	            } else if (ch === '/' && peek() === '/') { // single line comment
	                if (!isAfterNewline && last_top_ch !== '{' ) {
	                    print.trim();
	                }
	                print.singleSpace();
	                output.push(eatComment());
	                print.newLine();
	            } else if (ch === '@') {
	                print.preserveSingleSpace();
	                output.push(ch);

	                // strip trailing space, if present, for hash property checks
	                var variableOrRule = peekString(": ,;{}()[]/='\"");

	                if (variableOrRule.match(/[ :]$/)) {
	                    // we have a variable or pseudo-class, add it and insert one space before continuing
	                    next();
	                    variableOrRule = eatString(": ").replace(/\s$/, '');
	                    output.push(variableOrRule);
	                    print.singleSpace();
	                }

	                variableOrRule = variableOrRule.replace(/\s$/, '')

	                // might be a nesting at-rule
	                if (variableOrRule in css_beautify.NESTED_AT_RULE) {
	                    nestedLevel += 1;
	                    if (variableOrRule in css_beautify.CONDITIONAL_GROUP_RULE) {
	                        enteringConditionalGroup = true;
	                    }
	                }
	            } else if (ch === '#' && peek() === '{') {
	              print.preserveSingleSpace();
	              output.push(eatString('}'));
	            } else if (ch === '{') {
	                if (peek(true) === '}') {
	                    eatWhitespace();
	                    next();
	                    print.singleSpace();
	                    output.push("{}");
	                    print.newLine();
	                    if (newline_between_rules && indentLevel === 0) {
	                        print.newLine(true);
	                    }
	                } else {
	                    indent();
	                    print["{"](ch);
	                    // when entering conditional groups, only rulesets are allowed
	                    if (enteringConditionalGroup) {
	                        enteringConditionalGroup = false;
	                        insideRule = (indentLevel > nestedLevel);
	                    } else {
	                        // otherwise, declarations are also allowed
	                        insideRule = (indentLevel >= nestedLevel);
	                    }
	                }
	            } else if (ch === '}') {
	                outdent();
	                print["}"](ch);
	                insideRule = false;
	                insidePropertyValue = false;
	                if (nestedLevel) {
	                    nestedLevel--;
	                }
	                if (newline_between_rules && indentLevel === 0) {
	                    print.newLine(true);
	                }
	            } else if (ch === ":") {
	                eatWhitespace();
	                if ((insideRule || enteringConditionalGroup) &&
	                    !(lookBack("&") || foundNestedPseudoClass())) {
	                    // 'property: value' delimiter
	                    // which could be in a conditional group query
	                    insidePropertyValue = true;
	                    output.push(':');
	                    print.singleSpace();
	                } else {
	                    // sass/less parent reference don't use a space
	                    // sass nested pseudo-class don't use a space
	                    if (peek() === ":") {
	                        // pseudo-element
	                        next();
	                        output.push("::");
	                    } else {
	                        // pseudo-class
	                        output.push(':');
	                    }
	                }
	            } else if (ch === '"' || ch === '\'') {
	                print.preserveSingleSpace();
	                output.push(eatString(ch));
	            } else if (ch === ';') {
	                insidePropertyValue = false;
	                output.push(ch);
	                print.newLine();
	            } else if (ch === '(') { // may be a url
	                if (lookBack("url")) {
	                    output.push(ch);
	                    eatWhitespace();
	                    if (next()) {
	                        if (ch !== ')' && ch !== '"' && ch !== '\'') {
	                            output.push(eatString(')'));
	                        } else {
	                            pos--;
	                        }
	                    }
	                } else {
	                    parenLevel++;
	                    print.preserveSingleSpace();
	                    output.push(ch);
	                    eatWhitespace();
	                }
	            } else if (ch === ')') {
	                output.push(ch);
	                parenLevel--;
	            } else if (ch === ',') {
	                output.push(ch);
	                eatWhitespace();
	                if (selectorSeparatorNewline && !insidePropertyValue && parenLevel < 1) {
	                    print.newLine();
	                } else {
	                    print.singleSpace();
	                }
	            } else if (ch === ']') {
	                output.push(ch);
	            } else if (ch === '[') {
	                print.preserveSingleSpace();
	                output.push(ch);
	            } else if (ch === '=') { // no whitespace before or after
	                eatWhitespace()
	                ch = '=';
	                output.push(ch);
	            } else {
	                print.preserveSingleSpace();
	                output.push(ch);
	            }
	        }


	        var sweetCode = '';
	        if (basebaseIndentString) {
	            sweetCode += basebaseIndentString;
	        }

	        sweetCode += output.join('').replace(/[\r\n\t ]+$/, '');

	        // establish end_with_newline
	        if (end_with_newline) {
	            sweetCode += '\n';
	        }

	        if (eol != '\n') {
	            sweetCode = sweetCode.replace(/[\n]/g, eol);
	        }

	        return sweetCode;
	    }

	    // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
	    css_beautify.NESTED_AT_RULE = {
	        "@page": true,
	        "@font-face": true,
	        "@keyframes": true,
	        // also in CONDITIONAL_GROUP_RULE below
	        "@media": true,
	        "@supports": true,
	        "@document": true
	    };
	    css_beautify.CONDITIONAL_GROUP_RULE = {
	        "@media": true,
	        "@supports": true,
	        "@document": true
	    };

	    /*global define */
	    if (true) {
	        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return {
	                css_beautify: css_beautify
	            };
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        // Add support for CommonJS. Just put this file somewhere on your require.paths
	        // and you will be able to `var html_beautify = require("beautify").html_beautify`.
	        exports.css_beautify = css_beautify;
	    } else if (typeof window !== "undefined") {
	        // If we're running a web page and don't have either of the above, add our one global
	        window.css_beautify = css_beautify;
	    } else if (typeof global !== "undefined") {
	        // If we don't even have window, try global.
	        global.css_beautify = css_beautify;
	    }

	}());


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
	/*

	  The MIT License (MIT)

	  Copyright (c) 2007-2013 Einar Lielmanis and contributors.

	  Permission is hereby granted, free of charge, to any person
	  obtaining a copy of this software and associated documentation files
	  (the "Software"), to deal in the Software without restriction,
	  including without limitation the rights to use, copy, modify, merge,
	  publish, distribute, sublicense, and/or sell copies of the Software,
	  and to permit persons to whom the Software is furnished to do so,
	  subject to the following conditions:

	  The above copyright notice and this permission notice shall be
	  included in all copies or substantial portions of the Software.

	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
	  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	  SOFTWARE.


	 Style HTML
	---------------

	  Written by Nochum Sossonko, (nsossonko@hotmail.com)

	  Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
	    http://jsbeautifier.org/

	  Usage:
	    style_html(html_source);

	    style_html(html_source, options);

	  The options are:
	    indent_inner_html (default false)  — indent <head> and <body> sections,
	    indent_size (default 4)          — indentation size,
	    indent_char (default space)      — character to indent with,
	    wrap_line_length (default 250)            -  maximum amount of characters per line (0 = disable)
	    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none"
	            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
	    unformatted (defaults to inline tags) - list of tags, that shouldn't be reformatted
	    indent_scripts (default normal)  - "keep"|"separate"|"normal"
	    preserve_newlines (default true) - whether existing line breaks before elements should be preserved
	                                        Only works before elements, not inside tags or for text.
	    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk
	    indent_handlebars (default false) - format and indent {{#foo}} and {{/foo}}
	    end_with_newline (false)          - end with a newline
	    extra_liners (default [head,body,/html]) -List of tags that should have an extra newline before them.

	    e.g.

	    style_html(html_source, {
	      'indent_inner_html': false,
	      'indent_size': 2,
	      'indent_char': ' ',
	      'wrap_line_length': 78,
	      'brace_style': 'expand',
	      'unformatted': ['a', 'sub', 'sup', 'b', 'i', 'u'],
	      'preserve_newlines': true,
	      'max_preserve_newlines': 5,
	      'indent_handlebars': false,
	      'extra_liners': ['/html']
	    });
	*/

	(function() {

	    function trim(s) {
	        return s.replace(/^\s+|\s+$/g, '');
	    }

	    function ltrim(s) {
	        return s.replace(/^\s+/g, '');
	    }

	    function rtrim(s) {
	        return s.replace(/\s+$/g,'');
	    }

	    function style_html(html_source, options, js_beautify, css_beautify) {
	        //Wrapper function to invoke all the necessary constructors and deal with the output.

	        var multi_parser,
	            indent_inner_html,
	            indent_size,
	            indent_character,
	            wrap_line_length,
	            brace_style,
	            unformatted,
	            preserve_newlines,
	            max_preserve_newlines,
	            indent_handlebars,
	            wrap_attributes,
	            wrap_attributes_indent_size,
	            end_with_newline,
	            extra_liners,
	            eol;

	        options = options || {};

	        // backwards compatibility to 1.3.4
	        if ((options.wrap_line_length === undefined || parseInt(options.wrap_line_length, 10) === 0) &&
	                (options.max_char !== undefined && parseInt(options.max_char, 10) !== 0)) {
	            options.wrap_line_length = options.max_char;
	        }

	        indent_inner_html = (options.indent_inner_html === undefined) ? false : options.indent_inner_html;
	        indent_size = (options.indent_size === undefined) ? 4 : parseInt(options.indent_size, 10);
	        indent_character = (options.indent_char === undefined) ? ' ' : options.indent_char;
	        brace_style = (options.brace_style === undefined) ? 'collapse' : options.brace_style;
	        wrap_line_length =  parseInt(options.wrap_line_length, 10) === 0 ? 32786 : parseInt(options.wrap_line_length || 250, 10);
	        unformatted = options.unformatted || ['a', 'span', 'img', 'bdo', 'em', 'strong', 'dfn', 'code', 'samp', 'kbd',
	            'var', 'cite', 'abbr', 'acronym', 'q', 'sub', 'sup', 'tt', 'i', 'b', 'big', 'small', 'u', 's', 'strike',
	            'font', 'ins', 'del', 'pre', 'address', 'dt', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
	        preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
	        max_preserve_newlines = preserve_newlines ?
	            (isNaN(parseInt(options.max_preserve_newlines, 10)) ? 32786 : parseInt(options.max_preserve_newlines, 10))
	            : 0;
	        indent_handlebars = (options.indent_handlebars === undefined) ? false : options.indent_handlebars;
	        wrap_attributes = (options.wrap_attributes === undefined) ? 'auto' : options.wrap_attributes;
	        wrap_attributes_indent_size = (options.wrap_attributes_indent_size === undefined) ? indent_size : parseInt(options.wrap_attributes_indent_size, 10) || indent_size;
	        end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
	        extra_liners = (typeof options.extra_liners == 'object') && options.extra_liners ?
	            options.extra_liners.concat() : (typeof options.extra_liners === 'string') ?
	            options.extra_liners.split(',') : 'head,body,/html'.split(',');
	        eol = options.eol ? options.eol : '\n';

	        if(options.indent_with_tabs){
	            indent_character = '\t';
	            indent_size = 1;
	        }

	        eol = eol.replace(/\\r/, '\r').replace(/\\n/, '\n')

	        function Parser() {

	            this.pos = 0; //Parser position
	            this.token = '';
	            this.current_mode = 'CONTENT'; //reflects the current Parser mode: TAG/CONTENT
	            this.tags = { //An object to hold tags, their position, and their parent-tags, initiated with default values
	                parent: 'parent1',
	                parentcount: 1,
	                parent1: ''
	            };
	            this.tag_type = '';
	            this.token_text = this.last_token = this.last_text = this.token_type = '';
	            this.newlines = 0;
	            this.indent_content = indent_inner_html;

	            this.Utils = { //Uilities made available to the various functions
	                whitespace: "\n\r\t ".split(''),
	                single_token: 'br,input,link,meta,source,!doctype,basefont,base,area,hr,wbr,param,img,isindex,embed'.split(','), //all the single tags for HTML
	                extra_liners: extra_liners, //for tags that need a line of whitespace before them
	                in_array: function(what, arr) {
	                    for (var i = 0; i < arr.length; i++) {
	                        if (what === arr[i]) {
	                            return true;
	                        }
	                    }
	                    return false;
	                }
	            };

	            // Return true if the given text is composed entirely of whitespace.
	            this.is_whitespace = function(text) {
	                for (var n = 0; n < text.length; text++) {
	                    if (!this.Utils.in_array(text.charAt(n), this.Utils.whitespace)) {
	                        return false;
	                    }
	                }
	                return true;
	            };

	            this.traverse_whitespace = function() {
	                var input_char = '';

	                input_char = this.input.charAt(this.pos);
	                if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
	                    this.newlines = 0;
	                    while (this.Utils.in_array(input_char, this.Utils.whitespace)) {
	                        if (preserve_newlines && input_char === '\n' && this.newlines <= max_preserve_newlines) {
	                            this.newlines += 1;
	                        }

	                        this.pos++;
	                        input_char = this.input.charAt(this.pos);
	                    }
	                    return true;
	                }
	                return false;
	            };

	            // Append a space to the given content (string array) or, if we are
	            // at the wrap_line_length, append a newline/indentation.
	            this.space_or_wrap = function(content) {
	                if (this.line_char_count >= this.wrap_line_length) { //insert a line when the wrap_line_length is reached
	                    this.print_newline(false, content);
	                    this.print_indentation(content);
	                } else {
	                    this.line_char_count++;
	                    content.push(' ');
	                }
	            };

	            this.get_content = function() { //function to capture regular content between tags
	                var input_char = '',
	                    content = [],
	                    space = false; //if a space is needed

	                while (this.input.charAt(this.pos) !== '<') {
	                    if (this.pos >= this.input.length) {
	                        return content.length ? content.join('') : ['', 'TK_EOF'];
	                    }

	                    if (this.traverse_whitespace()) {
	                        this.space_or_wrap(content);
	                        continue;
	                    }

	                    if (indent_handlebars) {
	                        // Handlebars parsing is complicated.
	                        // {{#foo}} and {{/foo}} are formatted tags.
	                        // {{something}} should get treated as content, except:
	                        // {{else}} specifically behaves like {{#if}} and {{/if}}
	                        var peek3 = this.input.substr(this.pos, 3);
	                        if (peek3 === '{{#' || peek3 === '{{/') {
	                            // These are tags and not content.
	                            break;
	                        } else if (peek3 === '{{!') {
	                            return [this.get_tag(), 'TK_TAG_HANDLEBARS_COMMENT'];
	                        } else if (this.input.substr(this.pos, 2) === '{{') {
	                            if (this.get_tag(true) === '{{else}}') {
	                                break;
	                            }
	                        }
	                    }

	                    input_char = this.input.charAt(this.pos);
	                    this.pos++;
	                    this.line_char_count++;
	                    content.push(input_char); //letter at-a-time (or string) inserted to an array
	                }
	                return content.length ? content.join('') : '';
	            };

	            this.get_contents_to = function(name) { //get the full content of a script or style to pass to js_beautify
	                if (this.pos === this.input.length) {
	                    return ['', 'TK_EOF'];
	                }
	                var input_char = '';
	                var content = '';
	                var reg_match = new RegExp('</' + name + '\\s*>', 'igm');
	                reg_match.lastIndex = this.pos;
	                var reg_array = reg_match.exec(this.input);
	                var end_script = reg_array ? reg_array.index : this.input.length; //absolute end of script
	                if (this.pos < end_script) { //get everything in between the script tags
	                    content = this.input.substring(this.pos, end_script);
	                    this.pos = end_script;
	                }
	                return content;
	            };

	            this.record_tag = function(tag) { //function to record a tag and its parent in this.tags Object
	                if (this.tags[tag + 'count']) { //check for the existence of this tag type
	                    this.tags[tag + 'count']++;
	                    this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
	                } else { //otherwise initialize this tag type
	                    this.tags[tag + 'count'] = 1;
	                    this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
	                }
	                this.tags[tag + this.tags[tag + 'count'] + 'parent'] = this.tags.parent; //set the parent (i.e. in the case of a div this.tags.div1parent)
	                this.tags.parent = tag + this.tags[tag + 'count']; //and make this the current parent (i.e. in the case of a div 'div1')
	            };

	            this.retrieve_tag = function(tag) { //function to retrieve the opening tag to the corresponding closer
	                if (this.tags[tag + 'count']) { //if the openener is not in the Object we ignore it
	                    var temp_parent = this.tags.parent; //check to see if it's a closable tag.
	                    while (temp_parent) { //till we reach '' (the initial value);
	                        if (tag + this.tags[tag + 'count'] === temp_parent) { //if this is it use it
	                            break;
	                        }
	                        temp_parent = this.tags[temp_parent + 'parent']; //otherwise keep on climbing up the DOM Tree
	                    }
	                    if (temp_parent) { //if we caught something
	                        this.indent_level = this.tags[tag + this.tags[tag + 'count']]; //set the indent_level accordingly
	                        this.tags.parent = this.tags[temp_parent + 'parent']; //and set the current parent
	                    }
	                    delete this.tags[tag + this.tags[tag + 'count'] + 'parent']; //delete the closed tags parent reference...
	                    delete this.tags[tag + this.tags[tag + 'count']]; //...and the tag itself
	                    if (this.tags[tag + 'count'] === 1) {
	                        delete this.tags[tag + 'count'];
	                    } else {
	                        this.tags[tag + 'count']--;
	                    }
	                }
	            };

	            this.indent_to_tag = function(tag) {
	                // Match the indentation level to the last use of this tag, but don't remove it.
	                if (!this.tags[tag + 'count']) {
	                    return;
	                }
	                var temp_parent = this.tags.parent;
	                while (temp_parent) {
	                    if (tag + this.tags[tag + 'count'] === temp_parent) {
	                        break;
	                    }
	                    temp_parent = this.tags[temp_parent + 'parent'];
	                }
	                if (temp_parent) {
	                    this.indent_level = this.tags[tag + this.tags[tag + 'count']];
	                }
	            };

	            this.get_tag = function(peek) { //function to get a full tag and parse its type
	                var input_char = '',
	                    content = [],
	                    comment = '',
	                    space = false,
	                    first_attr = true,
	                    tag_start, tag_end,
	                    tag_start_char,
	                    orig_pos = this.pos,
	                    orig_line_char_count = this.line_char_count;

	                peek = peek !== undefined ? peek : false;

	                do {
	                    if (this.pos >= this.input.length) {
	                        if (peek) {
	                            this.pos = orig_pos;
	                            this.line_char_count = orig_line_char_count;
	                        }
	                        return content.length ? content.join('') : ['', 'TK_EOF'];
	                    }

	                    input_char = this.input.charAt(this.pos);
	                    this.pos++;

	                    if (this.Utils.in_array(input_char, this.Utils.whitespace)) { //don't want to insert unnecessary space
	                        space = true;
	                        continue;
	                    }

	                    if (input_char === "'" || input_char === '"') {
	                        input_char += this.get_unformatted(input_char);
	                        space = true;

	                    }

	                    if (input_char === '=') { //no space before =
	                        space = false;
	                    }

	                    if (content.length && content[content.length - 1] !== '=' && input_char !== '>' && space) {
	                        //no space after = or before >
	                        this.space_or_wrap(content);
	                        space = false;
	                        if (!first_attr && wrap_attributes === 'force' &&  input_char !== '/') {
	                            this.print_newline(true, content);
	                            this.print_indentation(content);
	                            for (var count = 0; count < wrap_attributes_indent_size; count++) {
	                                content.push(indent_character);
	                            }
	                        }
	                        for (var i = 0; i < content.length; i++) {
	                          if (content[i] === ' ') {
	                            first_attr = false;
	                            break;
	                          }
	                        }
	                    }

	                    if (indent_handlebars && tag_start_char === '<') {
	                        // When inside an angle-bracket tag, put spaces around
	                        // handlebars not inside of strings.
	                        if ((input_char + this.input.charAt(this.pos)) === '{{') {
	                            input_char += this.get_unformatted('}}');
	                            if (content.length && content[content.length - 1] !== ' ' && content[content.length - 1] !== '<') {
	                                input_char = ' ' + input_char;
	                            }
	                            space = true;
	                        }
	                    }

	                    if (input_char === '<' && !tag_start_char) {
	                        tag_start = this.pos - 1;
	                        tag_start_char = '<';
	                    }

	                    if (indent_handlebars && !tag_start_char) {
	                        if (content.length >= 2 && content[content.length - 1] === '{' && content[content.length - 2] === '{') {
	                            if (input_char === '#' || input_char === '/' || input_char === '!') {
	                                tag_start = this.pos - 3;
	                            } else {
	                                tag_start = this.pos - 2;
	                            }
	                            tag_start_char = '{';
	                        }
	                    }

	                    this.line_char_count++;
	                    content.push(input_char); //inserts character at-a-time (or string)

	                    if (content[1] && (content[1] === '!' || content[1] === '?' || content[1] === '%')) { //if we're in a comment, do something special
	                        // We treat all comments as literals, even more than preformatted tags
	                        // we just look for the appropriate close tag
	                        content = [this.get_comment(tag_start)];
	                        break;
	                    }

	                    if (indent_handlebars && content[1] && content[1] === '{' && content[2] && content[2] === '!') { //if we're in a comment, do something special
	                        // We treat all comments as literals, even more than preformatted tags
	                        // we just look for the appropriate close tag
	                        content = [this.get_comment(tag_start)];
	                        break;
	                    }

	                    if (indent_handlebars && tag_start_char === '{' && content.length > 2 && content[content.length - 2] === '}' && content[content.length - 1] === '}') {
	                        break;
	                    }
	                } while (input_char !== '>');

	                var tag_complete = content.join('');
	                var tag_index;
	                var tag_offset;

	                if (tag_complete.indexOf(' ') !== -1) { //if there's whitespace, thats where the tag name ends
	                    tag_index = tag_complete.indexOf(' ');
	                } else if (tag_complete.charAt(0) === '{') {
	                    tag_index = tag_complete.indexOf('}');
	                } else { //otherwise go with the tag ending
	                    tag_index = tag_complete.indexOf('>');
	                }
	                if (tag_complete.charAt(0) === '<' || !indent_handlebars) {
	                    tag_offset = 1;
	                } else {
	                    tag_offset = tag_complete.charAt(2) === '#' ? 3 : 2;
	                }
	                var tag_check = tag_complete.substring(tag_offset, tag_index).toLowerCase();
	                if (tag_complete.charAt(tag_complete.length - 2) === '/' ||
	                    this.Utils.in_array(tag_check, this.Utils.single_token)) { //if this tag name is a single tag type (either in the list or has a closing /)
	                    if (!peek) {
	                        this.tag_type = 'SINGLE';
	                    }
	                } else if (indent_handlebars && tag_complete.charAt(0) === '{' && tag_check === 'else') {
	                    if (!peek) {
	                        this.indent_to_tag('if');
	                        this.tag_type = 'HANDLEBARS_ELSE';
	                        this.indent_content = true;
	                        this.traverse_whitespace();
	                    }
	                } else if (this.is_unformatted(tag_check, unformatted)) { // do not reformat the "unformatted" tags
	                    comment = this.get_unformatted('</' + tag_check + '>', tag_complete); //...delegate to get_unformatted function
	                    content.push(comment);
	                    tag_end = this.pos - 1;
	                    this.tag_type = 'SINGLE';
	                } else if (tag_check === 'script' &&
	                    (tag_complete.search('type') === -1 ||
	                    (tag_complete.search('type') > -1 &&
	                    tag_complete.search(/\b(text|application)\/(x-)?(javascript|ecmascript|jscript|livescript)/) > -1))) {
	                    if (!peek) {
	                        this.record_tag(tag_check);
	                        this.tag_type = 'SCRIPT';
	                    }
	                } else if (tag_check === 'style' &&
	                    (tag_complete.search('type') === -1 ||
	                    (tag_complete.search('type') > -1 && tag_complete.search('text/css') > -1))) {
	                    if (!peek) {
	                        this.record_tag(tag_check);
	                        this.tag_type = 'STYLE';
	                    }
	                } else if (tag_check.charAt(0) === '!') { //peek for <! comment
	                    // for comments content is already correct.
	                    if (!peek) {
	                        this.tag_type = 'SINGLE';
	                        this.traverse_whitespace();
	                    }
	                } else if (!peek) {
	                    if (tag_check.charAt(0) === '/') { //this tag is a double tag so check for tag-ending
	                        this.retrieve_tag(tag_check.substring(1)); //remove it and all ancestors
	                        this.tag_type = 'END';
	                    } else { //otherwise it's a start-tag
	                        this.record_tag(tag_check); //push it on the tag stack
	                        if (tag_check.toLowerCase() !== 'html') {
	                            this.indent_content = true;
	                        }
	                        this.tag_type = 'START';
	                    }

	                    // Allow preserving of newlines after a start or end tag
	                    if (this.traverse_whitespace()) {
	                        this.space_or_wrap(content);
	                    }

	                    if (this.Utils.in_array(tag_check, this.Utils.extra_liners)) { //check if this double needs an extra line
	                        this.print_newline(false, this.output);
	                        if (this.output.length && this.output[this.output.length - 2] !== '\n') {
	                            this.print_newline(true, this.output);
	                        }
	                    }
	                }

	                if (peek) {
	                    this.pos = orig_pos;
	                    this.line_char_count = orig_line_char_count;
	                }

	                return content.join(''); //returns fully formatted tag
	            };

	            this.get_comment = function(start_pos) { //function to return comment content in its entirety
	                // this is will have very poor perf, but will work for now.
	                var comment = '',
	                    delimiter = '>',
	                    matched = false;

	                this.pos = start_pos;
	                input_char = this.input.charAt(this.pos);
	                this.pos++;

	                while (this.pos <= this.input.length) {
	                    comment += input_char;

	                    // only need to check for the delimiter if the last chars match
	                    if (comment.charAt(comment.length - 1) === delimiter.charAt(delimiter.length - 1) &&
	                        comment.indexOf(delimiter) !== -1) {
	                        break;
	                    }

	                    // only need to search for custom delimiter for the first few characters
	                    if (!matched && comment.length < 10) {
	                        if (comment.indexOf('<![if') === 0) { //peek for <![if conditional comment
	                            delimiter = '<![endif]>';
	                            matched = true;
	                        } else if (comment.indexOf('<![cdata[') === 0) { //if it's a <[cdata[ comment...
	                            delimiter = ']]>';
	                            matched = true;
	                        } else if (comment.indexOf('<![') === 0) { // some other ![ comment? ...
	                            delimiter = ']>';
	                            matched = true;
	                        } else if (comment.indexOf('<!--') === 0) { // <!-- comment ...
	                            delimiter = '-->';
	                            matched = true;
	                        } else if (comment.indexOf('{{!') === 0) { // {{! handlebars comment
	                            delimiter = '}}';
	                            matched = true;
	                        } else if (comment.indexOf('<?') === 0) { // {{! handlebars comment
	                            delimiter = '?>';
	                            matched = true;
	                        } else if (comment.indexOf('<%') === 0) { // {{! handlebars comment
	                            delimiter = '%>';
	                            matched = true;
	                        }
	                    }

	                    input_char = this.input.charAt(this.pos);
	                    this.pos++;
	                }

	                return comment;
	            };

	            this.get_unformatted = function(delimiter, orig_tag) { //function to return unformatted content in its entirety

	                if (orig_tag && orig_tag.toLowerCase().indexOf(delimiter) !== -1) {
	                    return '';
	                }
	                var input_char = '';
	                var content = '';
	                var min_index = 0;
	                var space = true;
	                do {

	                    if (this.pos >= this.input.length) {
	                        return content;
	                    }

	                    input_char = this.input.charAt(this.pos);
	                    this.pos++;

	                    if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
	                        if (!space) {
	                            this.line_char_count--;
	                            continue;
	                        }
	                        if (input_char === '\n' || input_char === '\r') {
	                            content += '\n';
	                            /*  Don't change tab indention for unformatted blocks.  If using code for html editing, this will greatly affect <pre> tags if they are specified in the 'unformatted array'
	                for (var i=0; i<this.indent_level; i++) {
	                  content += this.indent_string;
	                }
	                space = false; //...and make sure other indentation is erased
	                */
	                            this.line_char_count = 0;
	                            continue;
	                        }
	                    }
	                    content += input_char;
	                    this.line_char_count++;
	                    space = true;

	                    if (indent_handlebars && input_char === '{' && content.length && content.charAt(content.length - 2) === '{') {
	                        // Handlebars expressions in strings should also be unformatted.
	                        content += this.get_unformatted('}}');
	                        // These expressions are opaque.  Ignore delimiters found in them.
	                        min_index = content.length;
	                    }
	                } while (content.toLowerCase().indexOf(delimiter, min_index) === -1);
	                return content;
	            };

	            this.get_token = function() { //initial handler for token-retrieval
	                var token;

	                if (this.last_token === 'TK_TAG_SCRIPT' || this.last_token === 'TK_TAG_STYLE') { //check if we need to format javascript
	                    var type = this.last_token.substr(7);
	                    token = this.get_contents_to(type);
	                    if (typeof token !== 'string') {
	                        return token;
	                    }
	                    return [token, 'TK_' + type];
	                }
	                if (this.current_mode === 'CONTENT') {
	                    token = this.get_content();
	                    if (typeof token !== 'string') {
	                        return token;
	                    } else {
	                        return [token, 'TK_CONTENT'];
	                    }
	                }

	                if (this.current_mode === 'TAG') {
	                    token = this.get_tag();
	                    if (typeof token !== 'string') {
	                        return token;
	                    } else {
	                        var tag_name_type = 'TK_TAG_' + this.tag_type;
	                        return [token, tag_name_type];
	                    }
	                }
	            };

	            this.get_full_indent = function(level) {
	                level = this.indent_level + level || 0;
	                if (level < 1) {
	                    return '';
	                }

	                return Array(level + 1).join(this.indent_string);
	            };

	            this.is_unformatted = function(tag_check, unformatted) {
	                //is this an HTML5 block-level link?
	                if (!this.Utils.in_array(tag_check, unformatted)) {
	                    return false;
	                }

	                if (tag_check.toLowerCase() !== 'a' || !this.Utils.in_array('a', unformatted)) {
	                    return true;
	                }

	                //at this point we have an  tag; is its first child something we want to remain
	                //unformatted?
	                var next_tag = this.get_tag(true /* peek. */ );

	                // test next_tag to see if it is just html tag (no external content)
	                var tag = (next_tag || "").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);

	                // if next_tag comes back but is not an isolated tag, then
	                // let's treat the 'a' tag as having content
	                // and respect the unformatted option
	                if (!tag || this.Utils.in_array(tag, unformatted)) {
	                    return true;
	                } else {
	                    return false;
	                }
	            };

	            this.printer = function(js_source, indent_character, indent_size, wrap_line_length, brace_style) { //handles input/output and some other printing functions

	                this.input = js_source || ''; //gets the input for the Parser

	                // HACK: newline parsing inconsistent. This brute force normalizes the input.
	                this.input = this.input.replace(/\r\n|[\r\u2028\u2029]/g, '\n')

	                this.output = [];
	                this.indent_character = indent_character;
	                this.indent_string = '';
	                this.indent_size = indent_size;
	                this.brace_style = brace_style;
	                this.indent_level = 0;
	                this.wrap_line_length = wrap_line_length;
	                this.line_char_count = 0; //count to see if wrap_line_length was exceeded

	                for (var i = 0; i < this.indent_size; i++) {
	                    this.indent_string += this.indent_character;
	                }

	                this.print_newline = function(force, arr) {
	                    this.line_char_count = 0;
	                    if (!arr || !arr.length) {
	                        return;
	                    }
	                    if (force || (arr[arr.length - 1] !== '\n')) { //we might want the extra line
	                        if ((arr[arr.length - 1] !== '\n')) {
	                            arr[arr.length - 1] = rtrim(arr[arr.length - 1]);
	                        }
	                        arr.push('\n');
	                    }
	                };

	                this.print_indentation = function(arr) {
	                    for (var i = 0; i < this.indent_level; i++) {
	                        arr.push(this.indent_string);
	                        this.line_char_count += this.indent_string.length;
	                    }
	                };

	                this.print_token = function(text) {
	                    // Avoid printing initial whitespace.
	                    if (this.is_whitespace(text) && !this.output.length) {
	                        return;
	                    }
	                    if (text || text !== '') {
	                        if (this.output.length && this.output[this.output.length - 1] === '\n') {
	                            this.print_indentation(this.output);
	                            text = ltrim(text);
	                        }
	                    }
	                    this.print_token_raw(text);
	                };

	                this.print_token_raw = function(text) {
	                    // If we are going to print newlines, truncate trailing
	                    // whitespace, as the newlines will represent the space.
	                    if (this.newlines > 0) {
	                        text = rtrim(text);
	                    }

	                    if (text && text !== '') {
	                        if (text.length > 1 && text.charAt(text.length - 1) === '\n') {
	                            // unformatted tags can grab newlines as their last character
	                            this.output.push(text.slice(0, -1));
	                            this.print_newline(false, this.output);
	                        } else {
	                            this.output.push(text);
	                        }
	                    }

	                    for (var n = 0; n < this.newlines; n++) {
	                        this.print_newline(n > 0, this.output);
	                    }
	                    this.newlines = 0;
	                };

	                this.indent = function() {
	                    this.indent_level++;
	                };

	                this.unindent = function() {
	                    if (this.indent_level > 0) {
	                        this.indent_level--;
	                    }
	                };
	            };
	            return this;
	        }

	        /*_____________________--------------------_____________________*/

	        multi_parser = new Parser(); //wrapping functions Parser
	        multi_parser.printer(html_source, indent_character, indent_size, wrap_line_length, brace_style); //initialize starting values

	        while (true) {
	            var t = multi_parser.get_token();
	            multi_parser.token_text = t[0];
	            multi_parser.token_type = t[1];

	            if (multi_parser.token_type === 'TK_EOF') {
	                break;
	            }

	            switch (multi_parser.token_type) {
	                case 'TK_TAG_START':
	                    multi_parser.print_newline(false, multi_parser.output);
	                    multi_parser.print_token(multi_parser.token_text);
	                    if (multi_parser.indent_content) {
	                        multi_parser.indent();
	                        multi_parser.indent_content = false;
	                    }
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_STYLE':
	                case 'TK_TAG_SCRIPT':
	                    multi_parser.print_newline(false, multi_parser.output);
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_END':
	                    //Print new line only if the tag has no content and has child
	                    if (multi_parser.last_token === 'TK_CONTENT' && multi_parser.last_text === '') {
	                        var tag_name = multi_parser.token_text.match(/\w+/)[0];
	                        var tag_extracted_from_last_output = null;
	                        if (multi_parser.output.length) {
	                            tag_extracted_from_last_output = multi_parser.output[multi_parser.output.length - 1].match(/(?:<|{{#)\s*(\w+)/);
	                        }
	                        if (tag_extracted_from_last_output === null ||
	                            (tag_extracted_from_last_output[1] !== tag_name && !multi_parser.Utils.in_array(tag_extracted_from_last_output[1], unformatted))) {
	                            multi_parser.print_newline(false, multi_parser.output);
	                        }
	                    }
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_SINGLE':
	                    // Don't add a newline before elements that should remain unformatted.
	                    var tag_check = multi_parser.token_text.match(/^\s*<([a-z-]+)/i);
	                    if (!tag_check || !multi_parser.Utils.in_array(tag_check[1], unformatted)) {
	                        multi_parser.print_newline(false, multi_parser.output);
	                    }
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_HANDLEBARS_ELSE':
	                    multi_parser.print_token(multi_parser.token_text);
	                    if (multi_parser.indent_content) {
	                        multi_parser.indent();
	                        multi_parser.indent_content = false;
	                    }
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_HANDLEBARS_COMMENT':
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'TAG';
	                    break;
	                case 'TK_CONTENT':
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'TAG';
	                    break;
	                case 'TK_STYLE':
	                case 'TK_SCRIPT':
	                    if (multi_parser.token_text !== '') {
	                        multi_parser.print_newline(false, multi_parser.output);
	                        var text = multi_parser.token_text,
	                            _beautifier,
	                            script_indent_level = 1;
	                        if (multi_parser.token_type === 'TK_SCRIPT') {
	                            _beautifier = typeof js_beautify === 'function' && js_beautify;
	                        } else if (multi_parser.token_type === 'TK_STYLE') {
	                            _beautifier = typeof css_beautify === 'function' && css_beautify;
	                        }

	                        if (options.indent_scripts === "keep") {
	                            script_indent_level = 0;
	                        } else if (options.indent_scripts === "separate") {
	                            script_indent_level = -multi_parser.indent_level;
	                        }

	                        var indentation = multi_parser.get_full_indent(script_indent_level);
	                        if (_beautifier) {

	                            // call the Beautifier if avaliable
	                            var Child_options = function() {
	                                this.eol = '\n';
	                            };
	                            Child_options.prototype = options;
	                            var child_options = new Child_options();
	                            text = _beautifier(text.replace(/^\s*/, indentation), child_options);
	                        } else {
	                            // simply indent the string otherwise
	                            var white = text.match(/^\s*/)[0];
	                            var _level = white.match(/[^\n\r]*$/)[0].split(multi_parser.indent_string).length - 1;
	                            var reindent = multi_parser.get_full_indent(script_indent_level - _level);
	                            text = text.replace(/^\s*/, indentation)
	                                .replace(/\r\n|\r|\n/g, '\n' + reindent)
	                                .replace(/\s+$/, '');
	                        }
	                        if (text) {
	                            multi_parser.print_token_raw(text);
	                            multi_parser.print_newline(true, multi_parser.output);
	                        }
	                    }
	                    multi_parser.current_mode = 'TAG';
	                    break;
	                default:
	                    // We should not be getting here but we don't want to drop input on the floor
	                    // Just output the text and move on
	                    if (multi_parser.token_text !== '') {
	                        multi_parser.print_token(multi_parser.token_text);
	                    }
	                    break;
	            }
	            multi_parser.last_token = multi_parser.token_type;
	            multi_parser.last_text = multi_parser.token_text;
	        }
	        var sweet_code = multi_parser.output.join('').replace(/[\r\n\t ]+$/, '');

	        // establish end_with_newline
	        if (end_with_newline) {
	            sweet_code += '\n';
	        }

	        if (eol != '\n') {
	            sweet_code = sweet_code.replace(/[\n]/g, eol);
	        }

	        return sweet_code;
	    }

	    if (true) {
	        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, __webpack_require__(128), __webpack_require__(129)], __WEBPACK_AMD_DEFINE_RESULT__ = function(requireamd) {
	            var js_beautify =  __webpack_require__(128);
	            var css_beautify =  __webpack_require__(129);

	            return {
	              html_beautify: function(html_source, options) {
	                return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
	              }
	            };
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        // Add support for CommonJS. Just put this file somewhere on your require.paths
	        // and you will be able to `var html_beautify = require("beautify").html_beautify`.
	        var js_beautify = require('./beautify.js');
	        var css_beautify = require('./beautify-css.js');

	        exports.html_beautify = function(html_source, options) {
	            return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
	        };
	    } else if (typeof window !== "undefined") {
	        // If we're running a web page and don't have either of the above, add our one global
	        window.html_beautify = function(html_source, options) {
	            return style_html(html_source, options, window.js_beautify, window.css_beautify);
	        };
	    } else if (typeof global !== "undefined") {
	        // If we don't even have window, try global.
	        global.html_beautify = function(html_source, options) {
	            return style_html(html_source, options, global.js_beautify, global.css_beautify);
	        };
	    }

	}());


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(82);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Basic'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Feng-ui comes up with a very simple grid.'
	      ),
	      React.createElement(
	        Example,
	        null,
	        'var Container = Grid.Container;\nvar Row = Grid.Row;\nvar Column = Grid.Column;\n\n<div className="example-grid">\n  <Container className="container">\n    <Row className="row">\n      <Column d={1}><div className="col">1</div></Column>\n      <Column d={11}><div className="col">11</div></Column>\n    </Row>\n\n    <Row className="row">\n      <Column d={2}><div className="col">2</div></Column>\n      <Column d={10}><div className="col">10</div></Column>\n    </Row>\n  </Container>\n</div>'
	      )
	    );
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	// var Example = require('../../example');

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        null,
	        'Heading'
	      ),
	      React.createElement(
	        'h2',
	        null,
	        'Heading'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Heading'
	      ),
	      React.createElement(
	        'h4',
	        null,
	        'Heading'
	      ),
	      React.createElement(
	        'h5',
	        null,
	        'Heading'
	      ),
	      React.createElement(
	        'h6',
	        null,
	        'Heading'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'The base type is 15px over 1.6 line height (24px)'
	      ),
	      React.createElement(
	        'strong',
	        null,
	        'Bolded'
	      ),
	      React.createElement(
	        'em',
	        null,
	        'Italicized'
	      ),
	      React.createElement(
	        'a',
	        null,
	        'Colored'
	      ),
	      React.createElement(
	        'u',
	        null,
	        'Underlined'
	      )
	    );
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(82);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      Example,
	      null,
	      '<div className="example-labels">\n  <Label color="blue">1</Label>\n  <Label color="green">2</Label>\n  <Label color="yellow">3</Label>\n  <Label color="red">4</Label>\n</div>'
	    );
	  }
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(82);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Quick form'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<form className="u-form">\n  <Field label="First Name">\n    <input type="text" placeholder="First Name"/>\n  </Field>\n  <Field label="Last Name">\n    <input type="text" placeholder="Last Name"/>\n  </Field>\n  <Field label="About">\n    <textarea placeholder="About" rows={4}></textarea>\n  </Field>\n  <Field>\n    <Checkbox>\n      I agree to Terms and Conditions\n    </Checkbox>\n  </Field>\n  <Button color="blue">Submit</Button>\n</form>'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Error fields'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<form className="u-form">\n  <Field label="First Name" error="First name cannot be empty">\n    <input type="text" placeholder="First Name"/>\n  </Field>\n  <Field label="Last Name" error="Last name cannot be empty">\n    <input type="text" placeholder="Last Name"/>\n  </Field>\n  <Field label="About" error="About cannot be empty">\n    <textarea placeholder="About" rows={4}></textarea>\n  </Field>\n  <Field error="Agree to continue">\n    <Checkbox>\n      I agree to Terms and Conditions\n    </Checkbox>\n  </Field>\n  <Button color="blue">Submit</Button>\n</form>'
	      )
	    );
	  }
	});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(82);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        Example,
	        null,
	        '<Card\n  label="NYHETER"\n  title="Ornare Parturient Ridiculus Nibh"\n  leadtext="Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod."\n  link="#"\n  image="http://yoo.io//gk/GkkemmjxHGXIdrNi4Nv8Ig.jpg"\n  authorName="Wang Zuo"\n  authorEmail="wzuoadjusted@gmail.com"\n  time="3 days ago"\n/>'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<Slat\n  title="Egestas Adipiscing Malesuada Euismod Bibendum"\n  image="http://yoo.io//qm/QM30YAEXXaGTmfAZK0jl0w.jpg">\n  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit.\n</Slat>'
	      )
	    );
	  }
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(82);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Gravatar'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-avatars">\n  <Avatar email="wzuoadjusted@gmail.com"/>\n  <Avatar email="wzuoadjusted@gmail.com" round/>\n  <Avatar email="wzuoadjusted@gmail.com" circle/>\n  <Avatar email="wzuoadjusted@gmail.com" size="lg"/>\n  <Avatar email="wzuoadjusted@gmail.com" size="lg" round/>\n  <Avatar email="wzuoadjusted@gmail.com" size="lg" circle/>\n</div>'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Sqaure (default)'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-avatars">\n  <Avatar name="David"/>\n  <Avatar name="唐僧"/>\n  <Avatar name="おだ"/>\n  <Avatar name="David" size="lg"/>\n  <Avatar name="唐僧" size="lg"/>\n  <Avatar name="おだ" size="lg"/>\n</div>'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Round'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-avatars">\n  <Avatar name="David" round/>\n  <Avatar name="唐僧" round/>\n  <Avatar name="おだ" round/>\n  <Avatar name="David" size="lg" round/>\n  <Avatar name="唐僧" size="lg" round/>\n  <Avatar name="おだ" size="lg" round/>\n</div>'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Circle'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-avatars">\n  <Avatar name="David" circle/>\n  <Avatar name="唐僧" circle/>\n  <Avatar name="おだ" circle/>\n  <Avatar name="David" size="lg" circle/>\n  <Avatar name="唐僧" size="lg" circle/>\n  <Avatar name="おだ" size="lg" circle/>\n</div>'
	      )
	    );
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(138);

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(82);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Dialogs'
	      ),
	      React.createElement(
	        Example,
	        { html: false },
	        'var App = React.createClass({\n  getInitialState() {\n    return {\n      open: false\n    };\n  },\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.toggleDialog}>Open dialog</Button>\n        <Dialog open={this.state.open} onClose={this.handleClose}/>\n      </div>\n    );\n  },\n\n  handleClose() {\n    this.setState({open: false});\n  },\n\n  toggleDialog() {\n    this.setState({open: !this.state.open});\n  }\n});\n\n<App/>;'
	      )
	    );
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(82);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Auto height'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-tabs">\n\n<Tabs.Tabs>\n  <Tabs.Nav>\n    <Tabs.Tab active>Pharetra</Tabs.Tab>\n    <Tabs.Tab >Inceptos</Tabs.Tab>\n    <Tabs.Tab >Mollis</Tabs.Tab>\n  </Tabs.Nav>\n\n  <Tabs.Contents>\n    <Tabs.Content active>\n    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis.\n\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.\nInteger posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor.\n    </Tabs.Content>\n\n    <Tabs.Content>\n    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n    </Tabs.Content>\n\n    <Tabs.Content>\n    Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.\n    </Tabs.Content>\n  </Tabs.Contents>\n</Tabs.Tabs>\n\n</div>'
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Fixed height'
	      ),
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-tabs-fixed">\n\n<Tabs.Tabs fixed>\n  <Tabs.Nav>\n    <Tabs.Tab active>Pharetra</Tabs.Tab>\n    <Tabs.Tab>Inceptos</Tabs.Tab>\n    <Tabs.Tab>Mollis</Tabs.Tab>\n  </Tabs.Nav>\n\n  <Tabs.Contents>\n    <Tabs.Content active>\n    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis.\n\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.\nInteger posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor.\n    </Tabs.Content>\n    <Tabs.Content>\n    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n    </Tabs.Content>\n\n    <Tabs.Content>\n    Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.\n    </Tabs.Content>\n  </Tabs.Contents>\n</Tabs.Tabs>\n\n</div>'
	      )
	    );
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(82);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        Example,
	        null,
	        '<div className="example-dropdown">\n  <Dropdown/>\n</div>'
	      )
	    );
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(82);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      Example,
	      { html: false },
	      '<Markdown>\n{`### hello world`}\n</Markdown>'
	    );
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(82);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        Example,
	        { html: false },
	        'var attrs = [\n  { name: \'range\', type: \'Range\', label: \'Range\', max: 360, min: 100},\n  { name: \'array\', type: \'Array\', label: \'Aray\', options: [\'Ornare\', \'Vehicula\', \'Dolor\', \'Lorem\'] },\n  { name: \'boolean\', type: \'Boolean\', label: \'Boolean\' },\n  { name: \'integer\', type: \'Integer\', label: \'Integer\' },\n  { name: \'enum\', type: "Enum", label: \'Enum\', options: [\'Ornare\', \'Vehicula\', \'Dolor\', \'Lorem\'] },\n  { name: \'string\', type: \'String\', label: \'String\' },\n  { name: \'text\', type: \'Text\', label: \'Text\' },\n  { name: \'color\', type: \'Color\', label: \'Color\'}\n];\n\nvar values = {\n  range: 250,\n  array: [\'Ornare\'],\n  boolean: true,\n  integer: 12,\n  enum: \'Ornare\',\n  string: \'hello\',\n  text: \'hello world\',\n  color: \'#3498db\'\n};\n\n<FengForm\n  attrs={attrs}\n  values={values}\n/>'
	      )
	    );
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (sitemap) {
	  var res = [];

	  function renderPage(page, prefix) {
	    var subpages = page.pages;
	    var component = page.component;
	    var text = page.text;

	    if (prefix === undefined) {
	      // index page
	      res.push({
	        text: text,
	        dir: '/',
	        path: '/',
	        html: 'index.html',
	        component: component
	      });
	    } else {
	      if (subpages && subpages.length) {
	        res.push({
	          text: text,
	          dir: prefix,
	          path: prefix + '/' + page.path,
	          html: prefix + '/' + page.path + '/index.html',
	          component: component
	        });
	      } else {
	        res.push({
	          text: text,
	          dir: prefix,
	          path: prefix + '/' + page.path,
	          html: prefix + '/' + page.path + '.html',
	          component: component
	        });
	      }
	    }

	    if (subpages && subpages.length) {
	      var _prefix = prefix === undefined ? '' : prefix + '/' + page.path;

	      subpages.forEach(function (subpage) {
	        renderPage(subpage, _prefix);
	      });
	    }
	  }

	  renderPage(sitemap);

	  return res;
	};

/***/ }
/******/ ]);