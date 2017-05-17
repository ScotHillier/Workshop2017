define("b520f400-d2ca-4479-ac39-c2d2e4fd27b7_0.0.1", ["react","react-dom","@microsoft/sp-webpart-base","@microsoft/sp-core-library"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDom = __webpack_require__(2);
	var sp_webpart_base_1 = __webpack_require__(3);
	var MyPart_1 = __webpack_require__(4);
	var sp_core_library_1 = __webpack_require__(5);
	var MyPartWebPart = (function (_super) {
	    __extends(MyPartWebPart, _super);
	    function MyPartWebPart() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    MyPartWebPart.prototype.render = function () {
	        var _this = this;
	        this.context.statusRenderer.displayLoadingIndicator(this.domElement, "Loading Contacts...");
	        if (sp_core_library_1.Environment.type !== sp_core_library_1.EnvironmentType.Local) {
	            fetch('../../_api/web/currentuser', {
	                method: 'GET',
	                credentials: 'same-origin',
	                headers: {
	                    'accept': 'application/json'
	                }
	            }).then(function (response) {
	                return response.json();
	            }).then(function (json) {
	                ReactDom.render(React.createElement(MyPart_1.default, { message: "Hello, " + json.Title }), _this.domElement);
	                _this.context.statusRenderer.clearLoadingIndicator(_this.domElement);
	            }).catch(function (e) {
	                console.log(e);
	            });
	        }
	        else {
	            ReactDom.render(React.createElement(MyPart_1.default, { message: "I'm sorry. I don't know who you are." }), this.domElement);
	            this.context.statusRenderer.clearLoadingIndicator(this.domElement);
	        }
	    };
	    return MyPartWebPart;
	}(sp_webpart_base_1.BaseClientSideWebPart));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MyPartWebPart;



/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var MyPart = (function (_super) {
	    __extends(MyPart, _super);
	    function MyPart(props) {
	        return _super.call(this, props) || this;
	    }
	    MyPart.prototype.render = function () {
	        return (React.createElement("div", null, this.props.message));
	    };
	    return MyPart;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MyPart;



/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }
/******/ ])});;
//# sourceMappingURL=my-part.bundle.js.map