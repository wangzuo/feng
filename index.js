/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/builds/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackMissingModule() { throw new Error("Cannot find module \"./client.js\""); }());
	__webpack_require__(1);
	(function webpackMissingModule() { throw new Error("Cannot find module \"test.js\""); }());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var Basic = __webpack_require__(3);
	// var States = require('./states.example');
	// var Colors = require('./colors.example');
	// var Sizes = require('./sizes.example');
	// var Block = require('./block.example');
	// var Icons = require('./icons.example');
	// var Group = require('./group.example');
	// var Loading = require('./loading.example');
	
	module.exports = React.createClass({
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Basic'
	      ),
	      React.createElement(Basic, null)
	    );
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Example = function Example() {
	  return _react2.default.createElement(
	    "div",
	    { className: "example" },
	    _react2.default.createElement(
	      Button,
	      null,
	      "Button"
	    ),
	    _react2.default.createElement(
	      Button,
	      { href: "https://github.com", target: "_blank" },
	      "Link"
	    ),
	    _react2.default.createElement(
	      "pre",
	      null,
	      _react2.default.createElement(
	        "code",
	        null,
	        "<Button>Button</Button>\n<Button href=\"https://github.com\" target=\"_blank\">Link</Button>"
	      )
	    )
	  );
	};
	
	exports.default = Example;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map