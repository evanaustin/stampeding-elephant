/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(/*! lodash */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);\n/**\n * Paragrah block extension\n */\n\n\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar addFilter = wp.hooks.addFilter;\n\n// Enable manipulation of the following blocks\n\nvar enabledBlocks = ['core/paragraph'];\n\n/**\n * Extend default Paragraph block\n *\n * @param {function} settings Block edit component.\n * @param {function} name Block edit component.\n * @return {function} BlockEdit Modified block edit component.\n */\nfunction extendParagraphBlock(settings, name) {\n\t// Do nothing if it's another block than our defined ones\n\tif (!enabledBlocks.includes(name)) {\n\t\treturn settings;\n\t}\n\n\tsettings.attributes = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__[\"assign\"])(settings.attributes, {\n\t\tparentColor: {\n\t\t\ttype: 'string',\n\t\t\tdefault: null\n\t\t}\n\t});\n\n\tsettings.attributes.content.default = __('This is a new paragraph. Lorem ipsum dolor sit amet...');\n\n\treturn settings;\n}\n\naddFilter('blocks.registerBlockType', 'lu-gutenberg/extend-paragraph-block', extendParagraphBlock);\n\n/**\n * Create HOC to add background-color option to inspector controls of block\n */\nvar withColor = createHigherOrderComponent(function (BlockEdit) {\n\treturn function (props) {\n\t\t// Do nothing if it's another block than our defined ones\n\t\tif (!enabledBlocks.includes(props.name)) {\n\t\t\treturn wp.element.createElement(BlockEdit, props);\n\t\t}\n\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes,\n\t\t    className = props.className,\n\t\t    clientId = props.clientId;\n\t\tvar parentColor = attributes.parentColor;\n\n\t\t// get most immediate parent\n\n\t\tif (!parentColor) {\n\t\t\tvar parentBlocks = wp.data.select('core/block-editor').getBlockParents(props.clientId);\n\t\t\tvar parentAttributes = wp.data.select('core/block-editor').getBlocksByClientId(parentBlocks)[parentBlocks.length - 1].attributes;\n\n\t\t\tprops.setAttributes = { parentColor: parentAttributes.bgColor };\n\t\t}\n\n\t\tconsole.log({ parentColor: parentColor });\n\n\t\tif (parentColor) {\n\t\t\tconsole.log('parent has bgColor', parentColor);\n\t\t\tvar textColor = void 0;\n\n\t\t\tswitch (parentColor) {\n\t\t\t\tcase '#transparent':\n\t\t\t\t\t// None\n\t\t\t\t\ttextColor = '#000000';\n\t\t\t\t\tbreak;\n\t\t\t\tcase '#FFFFFF':\n\t\t\t\t\t// White\n\t\t\t\t\ttextColor = '#000000';\n\t\t\t\t\tbreak;\n\t\t\t\tcase '#F5F5F5':\n\t\t\t\t\t// Gray\n\t\t\t\t\ttextColor = '#000000';\n\t\t\t\t\tbreak;\n\t\t\t\tcase '#333333':\n\t\t\t\t\t// Dark Gray\n\t\t\t\t\ttextColor = '#FFFFFF';\n\t\t\t\t\tbreak;\n\t\t\t\tcase '#161F31':\n\t\t\t\t\t// Dark Blue\n\t\t\t\t\ttextColor = '#FFFFFF';\n\t\t\t\t\tbreak;\n\t\t\t\tcase '#F5F5F5':\n\t\t\t\t\t// Blue\n\t\t\t\t\ttextColor = '#FFFFFF';\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\ttextColor = '#000000';\n\t\t\t}\n\n\t\t\tprops.style = { color: textColor };\n\t\t}\n\n\t\tconsole.log('props.style', props.style);\n\n\t\tconsole.log('props.attributes', props.attributes);\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'foo', style: props.style },\n\t\t\twp.element.createElement(BlockEdit, props)\n\t\t);\n\t};\n}, 'withColor');\n\naddFilter('editor.BlockEdit', 'lu-gutenberg/with-color', withColor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUGFyYWdyYWggYmxvY2sgZXh0ZW5zaW9uXG4gKi9cblxuaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnbG9kYXNoJztcblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50ID0gd3AuY29tcG9zZS5jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudDtcbnZhciBhZGRGaWx0ZXIgPSB3cC5ob29rcy5hZGRGaWx0ZXI7XG5cbi8vIEVuYWJsZSBtYW5pcHVsYXRpb24gb2YgdGhlIGZvbGxvd2luZyBibG9ja3NcblxudmFyIGVuYWJsZWRCbG9ja3MgPSBbJ2NvcmUvcGFyYWdyYXBoJ107XG5cbi8qKlxuICogRXh0ZW5kIGRlZmF1bHQgUGFyYWdyYXBoIGJsb2NrXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc2V0dGluZ3MgQmxvY2sgZWRpdCBjb21wb25lbnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBuYW1lIEJsb2NrIGVkaXQgY29tcG9uZW50LlxuICogQHJldHVybiB7ZnVuY3Rpb259IEJsb2NrRWRpdCBNb2RpZmllZCBibG9jayBlZGl0IGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gZXh0ZW5kUGFyYWdyYXBoQmxvY2soc2V0dGluZ3MsIG5hbWUpIHtcblx0Ly8gRG8gbm90aGluZyBpZiBpdCdzIGFub3RoZXIgYmxvY2sgdGhhbiBvdXIgZGVmaW5lZCBvbmVzXG5cdGlmICghZW5hYmxlZEJsb2Nrcy5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdHJldHVybiBzZXR0aW5ncztcblx0fVxuXG5cdHNldHRpbmdzLmF0dHJpYnV0ZXMgPSBhc3NpZ24oc2V0dGluZ3MuYXR0cmlidXRlcywge1xuXHRcdHBhcmVudENvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6IG51bGxcblx0XHR9XG5cdH0pO1xuXG5cdHNldHRpbmdzLmF0dHJpYnV0ZXMuY29udGVudC5kZWZhdWx0ID0gX18oJ1RoaXMgaXMgYSBuZXcgcGFyYWdyYXBoLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4uLicpO1xuXG5cdHJldHVybiBzZXR0aW5ncztcbn1cblxuYWRkRmlsdGVyKCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLCAnbHUtZ3V0ZW5iZXJnL2V4dGVuZC1wYXJhZ3JhcGgtYmxvY2snLCBleHRlbmRQYXJhZ3JhcGhCbG9jayk7XG5cbi8qKlxuICogQ3JlYXRlIEhPQyB0byBhZGQgYmFja2dyb3VuZC1jb2xvciBvcHRpb24gdG8gaW5zcGVjdG9yIGNvbnRyb2xzIG9mIGJsb2NrXG4gKi9cbnZhciB3aXRoQ29sb3IgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChmdW5jdGlvbiAoQmxvY2tFZGl0KSB7XG5cdHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcblx0XHQvLyBEbyBub3RoaW5nIGlmIGl0J3MgYW5vdGhlciBibG9jayB0aGFuIG91ciBkZWZpbmVkIG9uZXNcblx0XHRpZiAoIWVuYWJsZWRCbG9ja3MuaW5jbHVkZXMocHJvcHMubmFtZSkpIHtcblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tFZGl0LCBwcm9wcyk7XG5cdFx0fVxuXG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuXHRcdCAgICBjbGllbnRJZCA9IHByb3BzLmNsaWVudElkO1xuXHRcdHZhciBwYXJlbnRDb2xvciA9IGF0dHJpYnV0ZXMucGFyZW50Q29sb3I7XG5cblx0XHQvLyBnZXQgbW9zdCBpbW1lZGlhdGUgcGFyZW50XG5cblx0XHRpZiAoIXBhcmVudENvbG9yKSB7XG5cdFx0XHR2YXIgcGFyZW50QmxvY2tzID0gd3AuZGF0YS5zZWxlY3QoJ2NvcmUvYmxvY2stZWRpdG9yJykuZ2V0QmxvY2tQYXJlbnRzKHByb3BzLmNsaWVudElkKTtcblx0XHRcdHZhciBwYXJlbnRBdHRyaWJ1dGVzID0gd3AuZGF0YS5zZWxlY3QoJ2NvcmUvYmxvY2stZWRpdG9yJykuZ2V0QmxvY2tzQnlDbGllbnRJZChwYXJlbnRCbG9ja3MpW3BhcmVudEJsb2Nrcy5sZW5ndGggLSAxXS5hdHRyaWJ1dGVzO1xuXG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzID0geyBwYXJlbnRDb2xvcjogcGFyZW50QXR0cmlidXRlcy5iZ0NvbG9yIH07XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coeyBwYXJlbnRDb2xvcjogcGFyZW50Q29sb3IgfSk7XG5cblx0XHRpZiAocGFyZW50Q29sb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdwYXJlbnQgaGFzIGJnQ29sb3InLCBwYXJlbnRDb2xvcik7XG5cdFx0XHR2YXIgdGV4dENvbG9yID0gdm9pZCAwO1xuXG5cdFx0XHRzd2l0Y2ggKHBhcmVudENvbG9yKSB7XG5cdFx0XHRcdGNhc2UgJyN0cmFuc3BhcmVudCc6XG5cdFx0XHRcdFx0Ly8gTm9uZVxuXHRcdFx0XHRcdHRleHRDb2xvciA9ICcjMDAwMDAwJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnI0ZGRkZGRic6XG5cdFx0XHRcdFx0Ly8gV2hpdGVcblx0XHRcdFx0XHR0ZXh0Q29sb3IgPSAnIzAwMDAwMCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJyNGNUY1RjUnOlxuXHRcdFx0XHRcdC8vIEdyYXlcblx0XHRcdFx0XHR0ZXh0Q29sb3IgPSAnIzAwMDAwMCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJyMzMzMzMzMnOlxuXHRcdFx0XHRcdC8vIERhcmsgR3JheVxuXHRcdFx0XHRcdHRleHRDb2xvciA9ICcjRkZGRkZGJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnIzE2MUYzMSc6XG5cdFx0XHRcdFx0Ly8gRGFyayBCbHVlXG5cdFx0XHRcdFx0dGV4dENvbG9yID0gJyNGRkZGRkYnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICcjRjVGNUY1Jzpcblx0XHRcdFx0XHQvLyBCbHVlXG5cdFx0XHRcdFx0dGV4dENvbG9yID0gJyNGRkZGRkYnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRleHRDb2xvciA9ICcjMDAwMDAwJztcblx0XHRcdH1cblxuXHRcdFx0cHJvcHMuc3R5bGUgPSB7IGNvbG9yOiB0ZXh0Q29sb3IgfTtcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZygncHJvcHMuc3R5bGUnLCBwcm9wcy5zdHlsZSk7XG5cblx0XHRjb25zb2xlLmxvZygncHJvcHMuYXR0cmlidXRlcycsIHByb3BzLmF0dHJpYnV0ZXMpO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdmb28nLCBzdHlsZTogcHJvcHMuc3R5bGUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChCbG9ja0VkaXQsIHByb3BzKVxuXHRcdCk7XG5cdH07XG59LCAnd2l0aENvbG9yJyk7XG5cbmFkZEZpbHRlcignZWRpdG9yLkJsb2NrRWRpdCcsICdsdS1ndXRlbmJlcmcvd2l0aC1jb2xvcicsIHdpdGhDb2xvcik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! dynamic exports provided */
/*! exports used: assign */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ })
/******/ ]);