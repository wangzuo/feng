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
	var Grid = __webpack_require__(9);

	var sections = __webpack_require__(6);

	var pages = {
	  'getting-started': {},
	  'react': {
	    'feng-form': __webpack_require__(10),
	    tabs: __webpack_require__(60),
	    dropdown: __webpack_require__(61),
	    dialogs: __webpack_require__(62)
	  },
	  css: {
	    buttons: __webpack_require__(63),
	    forms: __webpack_require__(64),
	    card: __webpack_require__(65),
	    grid: __webpack_require__(66),
	    labels: __webpack_require__(67),
	    typography: __webpack_require__(68),
	    avatars: __webpack_require__(69)
	  }
	};

	var Panel = React.createClass({
	  displayName: 'Panel',

	  renderPage: function renderPage(section, page) {
	    var component = pages[section][page];
	    if (!component) throw new Error(section + '/' + page + ' not found');

	    return React.createElement(component);
	  },

	  render: function render() {
	    var path = this.props.path;
	    var ps = path.split('/');
	    var section = ps[1];
	    var page = ps[2];
	    var current = sections.filter(function (page) {
	      return page.path === section;
	    })[0];

	    return React.createElement(
	      Grid.Container,
	      null,
	      React.createElement(
	        Grid.Row,
	        null,
	        React.createElement(
	          Grid.Column,
	          { d: 3 },
	          React.createElement(Nav, {
	            title: section,
	            className: 'u-nav u-nav-y',
	            items: current.pages
	          })
	        ),
	        React.createElement(
	          Grid.Column,
	          { d: 9 },
	          this.renderPage(section, page)
	        )
	      )
	    );
	  }
	});

	module.exports = React.createClass({
	  displayName: 'App',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'app' },
	      React.createElement(Header, null),
	      React.createElement(Panel, { path: this.props.path }),
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
	          'a',
	          { to: '/' },
	          'feng-ui'
	        ),
	        React.createElement(Nav, { className: 'nav', items: pages })
	      )
	    );
	  }
	});

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
	      items: []
	    };
	  },

	  render: function render() {
	    var items = this.props.items;

	    return React.createElement(
	      'nav',
	      { className: cx('u-nav', this.props.className) },
	      React.createElement(
	        'a',
	        { href: 'javascript:void(0)', className: 'title' },
	        this.props.title
	      ),
	      items.map(function (item, i) {
	        return React.createElement(
	          Link,
	          {
	            key: i,
	            href: item.path,
	            target: item.target },
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

	    return React.createElement(
	      'a',
	      {
	        href: '/feng-ui' + href + '.html',
	        target: this.props.target,
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
	  path: 'getting-started',
	  pages: []
	}, {
	  text: 'CSS',
	  path: 'css',
	  pages: [{
	    text: 'Grid',
	    path: '/css/grid'
	  }, {
	    text: 'Typography',
	    path: '/css/typography'
	  }, {
	    text: 'Buttons',
	    path: '/css/buttons'
	  }, {
	    text: 'Labels',
	    path: '/css/labels'
	  }, {
	    text: 'Forms',
	    path: '/css/forms'
	  }, {
	    text: 'Card',
	    path: '/css/card'
	  }, {
	    text: 'Avatars',
	    path: '/css/avatars'
	  }]
	}, {
	  text: 'React',
	  path: 'react',
	  pages: [{
	    text: 'Tabs',
	    path: '/react/tabs'
	  }, {
	    text: 'Dropdown',
	    path: '/react/dropdown'
	  }, {
	    text: 'Dialog',
	    path: '/react/dialogs'
	  }, {
	    text: 'Feng Form',
	    path: '/react/feng-form'
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
	            { d: 3 },
	            React.createElement(
	              'nav',
	              null,
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

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var React = __webpack_require__(1);
	var cx = __webpack_require__(4);

	exports.Container = React.createClass({
	  displayName: 'Container',

	  render: function render() {
	    return React.createElement('div', _extends({}, this.props, {
	      className: cx('g-c', this.props.className) }), this.props.children);
	  }
	});

	exports.Row = React.createClass({
	  displayName: 'Row',

	  render: function render() {
	    return React.createElement('div', _extends({}, this.props, {
	      className: cx('g-r', this.props.className) }), this.props.children);
	  }
	});

	exports.Column = React.createClass({
	  displayName: 'Column',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      d: 1,
	      t: 1,
	      m: 1
	    };
	  },

	  render: function render() {
	    var cn = cx('g-' + this.props.d, 't-' + this.props.t, 'm-' + this.props.m, this.props.className);

	    return React.createElement('div', _extends({}, this.props, { className: cn }), this.props.children);
	  }
	});

/***/ },
/* 9 */
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
	      d: 1,
	      t: 1,
	      m: 1
	    };
	  },

	  render: function render() {
	    var cn = cx('g-' + this.props.d, 't-' + this.props.t, 'm-' + this.props.m, this.props.className);

	    return React.createElement(
	      'div',
	      _extends({}, this.props, { className: cn }),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(11);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var babel = __webpack_require__(12);

	var Grid = __webpack_require__(9);
	var Button = __webpack_require__(13);
	var ButtonGroup = __webpack_require__(15);
	var Form = __webpack_require__(16);
	var Card = __webpack_require__(17);
	var Slat = __webpack_require__(20);
	var Field = __webpack_require__(21);
	var Checkbox = __webpack_require__(22);
	var Label = __webpack_require__(23);
	var Tabs = __webpack_require__(24);
	var Spinner = __webpack_require__(14);
	var FengForm = __webpack_require__(25);
	var Dropdown = __webpack_require__(52);
	var Dialog = __webpack_require__(53);
	var Avatar = __webpack_require__(54);

	var Code = __webpack_require__(55);

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
/* 12 */
/***/ function(module, exports) {

	module.exports = babel;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var cx = __webpack_require__(4);
	var Spinner = __webpack_require__(14);

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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);
	var Gravatar = __webpack_require__(18);

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var _md5 = __webpack_require__(19);
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
/* 19 */
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
/* 20 */
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
/* 21 */
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

	    return React.createElement(
	      'div',
	      { className: cx('u-field', horizontal ? 'u-field-x' : null) },
	      this.renderLabel(),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Select = __webpack_require__(26);
	var Switch = __webpack_require__(29);
	var Textarea = __webpack_require__(31);
	var InputColor = __webpack_require__(34);
	// var InputNumber = require('react-input-number');
	var InputSlider = __webpack_require__(44);

	// todo: avoid e.target.value
	// var InputText = require('./input-text');

	var Field = __webpack_require__(21);
	var Form = __webpack_require__(16);

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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* disable some rules until we refactor more completely; fixing them now would
	   cause conflicts with some open PRs unnecessarily. */
	/* eslint react/jsx-sort-prop-types: 0, react/sort-comp: 0, react/prop-types: 0 */

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var Input = __webpack_require__(27);
	var classes = __webpack_require__(4);
	var Value = __webpack_require__(28);

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
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);


/***/ },
/* 30 */
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
/* 31 */
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

	var _emptyFunction = __webpack_require__(32);

	var _emptyFunction2 = _interopRequireWildcard(_emptyFunction);

	var _calculateNodeHeight = __webpack_require__(33);

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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(35);


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(36);
	var React = __webpack_require__(1);
	var assign = __webpack_require__(37);
	var colorParser = __webpack_require__(38);
	var rgbaColor = __webpack_require__(40);
	var rgb2hsv = __webpack_require__(41);
	var rgb2hex = __webpack_require__(42);

	var ColorPicker = __webpack_require__(43);

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
/* 36 */
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
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var colors = __webpack_require__(39);

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
/* 39 */
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
/* 40 */
/***/ function(module, exports) {

	module.exports = function(r, g, b, a) {
	  return 'rgba('+
	    [r, g, b, a/100].join(',')+')';
	};

/***/ },
/* 41 */
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
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var objectAssign = __webpack_require__(37);
	var InputSlider = __webpack_require__(44);
	var InputNumber = __webpack_require__(46);

	var rgb2hsv = __webpack_require__(41);
	var hsv2hex = __webpack_require__(49);
	var hsv2rgb = __webpack_require__(50);
	var rgb2hex = __webpack_require__(42);
	var hex2rgb = __webpack_require__(51);
	var rgba = __webpack_require__(40);

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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(45);


/***/ },
/* 45 */
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(47);


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var _parse = __webpack_require__(48);

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
/* 48 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var hsv2rgb = __webpack_require__(50);
	var rgb2hex = __webpack_require__(42);

	module.exports = function(h, s, v) {
	  var rgb = hsv2rgb(h, s, v);
	  return rgb2hex(rgb.r, rgb.g, rgb.b);
	};


/***/ },
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);
	var Button = __webpack_require__(13);

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
/* 53 */
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
	          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
	        )
	      )
	    );
	  }
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);
	var _md5 = __webpack_require__(19);
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cx = __webpack_require__(4);
	var React = __webpack_require__(1);
	var beautify = __webpack_require__(56).html;

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
/* 56 */
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
	        __webpack_require__(57),
	        __webpack_require__(58),
	        __webpack_require__(59)
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
/* 57 */
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
/* 58 */
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
/* 59 */
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
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, __webpack_require__(57), __webpack_require__(58)], __WEBPACK_AMD_DEFINE_RESULT__ = function(requireamd) {
	            var js_beautify =  __webpack_require__(57);
	            var css_beautify =  __webpack_require__(58);

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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(11);

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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(11);

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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(11);

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
	        'var App = React.createClass({\n  getInitialState() {\n    return {\n      open: false\n    };\n  },\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.toggleDialog}>Open dialog</Button>\n        <Dialog open={this.state.open}/>\n      </div>\n    );\n  },\n\n  toggleDialog() {\n    this.setState({open: !this.state.open});\n  }\n});\n\n<App/>;'
	      )
	    );
	  }
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(11);

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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(11);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      Example,
	      null,
	      '<form className="u-form">\n  <Field label="First Name">\n    <input type="text" placeholder="First Name"/>\n  </Field>\n  <Field label="Last Name">\n    <input type="text" placeholder="Last Name"/>\n  </Field>\n  <Field label="About">\n    <textarea placeholder="About" rows={4}></textarea>\n  </Field>\n  <Field>\n    <Checkbox>\n      I agree to Terms and Conditions\n    </Checkbox>\n  </Field>\n  <Button color="blue">Submit</Button>\n</form>'
	    );
	  }
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(11);

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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(11);

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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(11);

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
/* 68 */
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Example = __webpack_require__(11);

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

/***/ }
/******/ ]);