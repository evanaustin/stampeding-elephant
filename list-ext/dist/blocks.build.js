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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(/*! lodash */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__(/*! ./style.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);\n/**\n * Paragrah block extension\n */\n\n\n\n//  Import CSS.\n\n\n\nvar _wp$element = wp.element,\n    Fragment = _wp$element.Fragment,\n    useEffect = _wp$element.useEffect;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar addFilter = wp.hooks.addFilter;\nvar __ = wp.i18n.__;\n\n// Enable manipulation of the following blocks\n\nvar enabledBlocks = ['core/list'];\n\n/**\n * Extend default Paragraph block\n *\n * @param {function} settings Block edit component.\n * @param {function} name Block edit component.\n * @return {function} BlockEdit Modified block edit component.\n */\nfunction extendListBlock(settings, name) {\n\t// Do nothing if it's another block than our defined ones\n\tif (!enabledBlocks.includes(name)) {\n\t\treturn settings;\n\t}\n\n\t/* useEffect(() => {\n \tconsole.log('use effect');\n }); */\n\n\tsettings.attributes = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__[\"assign\"])(settings.attributes, {\n\t\tparentBgColor: {\n\t\t\ttype: 'string',\n\t\t\tdefault: null\n\t\t},\n\t\ttextColor: {\n\t\t\ttype: 'string',\n\t\t\tdefault: null\n\t\t}\n\t});\n\n\tsettings.attributes.values.default = __('<li>Lorem ipsum</li>');\n\n\treturn settings;\n}\n\naddFilter('blocks.registerBlockType', 'lu-gutenberg/extend-list-block', extendListBlock);\n\n/**\n * Get most immediate parent with a non-transparent background image\n */\nfunction getParentBgColor(parentBlocks, index) {\n\tvar directParent = wp.data.select('core/block-editor').getBlocksByClientId(parentBlocks)[parentBlocks.length - 1];\n\n\tif (index > 0 && directParent.attributes.bgColor == 'transparent') {\n\t\tgetparentBgColor(parentBlocks, index - 1);\n\t} else if (index == 0 && directParent.attributes.bgColor == 'transparent') {\n\t\treturn 'transparent';\n\t} else {\n\t\treturn directParent.attributes.bgColor;\n\t}\n}\n\n/**\n * Given a parent bgColor, return the corresponding text color\n */\nfunction getTextColor(parentBgColor) {\n\tvar textColor = void 0;\n\n\tswitch (parentBgColor) {\n\t\tcase '#transparent':\n\t\t\t// None\n\t\t\ttextColor = '#000000';\n\t\t\tbreak;\n\t\tcase '#FFFFFF':\n\t\t\t// White\n\t\t\ttextColor = '#000000';\n\t\t\tbreak;\n\t\tcase '#F5F5F5':\n\t\t\t// Gray\n\t\t\ttextColor = '#000000';\n\t\t\tbreak;\n\t\tcase '#333333':\n\t\t\t// Dark Gray\n\t\t\ttextColor = '#FFFFFF';\n\t\t\tbreak;\n\t\tcase '#161F31':\n\t\t\t// Dark Blue\n\t\t\ttextColor = '#FFFFFF';\n\t\t\tbreak;\n\t\tcase '#F5F5F5':\n\t\t\t// Blue\n\t\t\ttextColor = '#FFFFFF';\n\t\t\tbreak;\n\t\tdefault:\n\t\t\ttextColor = '#000000';\n\t}\n\n\treturn textColor;\n}\n\n/**\n * Create HOC to add background-color option to inspector controls of block\n */\nvar withColor = createHigherOrderComponent(function (BlockEdit) {\n\treturn function (props) {\n\t\t// Do nothing if it's another block than our defined ones\n\t\tif (!enabledBlocks.includes(props.name)) {\n\t\t\treturn wp.element.createElement(BlockEdit, props);\n\t\t}\n\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes,\n\t\t    className = props.className,\n\t\t    clientId = props.clientId;\n\t\tvar parentBgColor = attributes.parentBgColor;\n\n\n\t\tif (!parentBgColor) {\n\t\t\tvar parentBlocks = wp.data.select('core/block-editor').getBlockParents(props.clientId);\n\n\t\t\tif (parentBlocks.length) {\n\t\t\t\tprops.setAttributes({ parentBgColor: getParentBgColor(parentBlocks, parentBlocks.length - 1) });\n\t\t\t}\n\t\t}\n\n\t\tif (!props.attributes.textColor && parentBgColor) {\n\t\t\tprops.setAttributes({ textColor: getTextColor(parentBgColor) });\n\t\t}\n\n\t\tprops.style = { color: props.attributes.textColor };\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ style: props.style },\n\t\t\t\twp.element.createElement(BlockEdit, props)\n\t\t\t)\n\t\t);\n\t};\n}, 'withColor');\n\naddFilter('editor.BlockEdit', 'lu-gutenberg/with-color', withColor);\n\n/**\n * Add color style attribute to save element of block.\n *\n * @param {object} saveElementProps Props of save element.\n * @param {Object} blockType Block type information.\n * @param {Object} attributes Attributes of block.\n *\n * @returns {object} Modified props of save element.\n */\nvar addExtraProps = function addExtraProps(saveElementProps, blockType, attributes) {\n\t// Do nothing if it's another block than our defined ones.\n\tif (!enabledBlocks.includes(blockType.name)) {\n\t\treturn saveElementProps;\n\t}\n\n\t// Use Lodash's assign to gracefully handle if attributes are undefined\n\tObject(__WEBPACK_IMPORTED_MODULE_0_lodash__[\"assign\"])(saveElementProps, {\n\t\tstyle: {\n\t\t\tcolor: attributes.textColor\n\t\t}\n\t});\n\n\treturn saveElementProps;\n};\n\naddFilter('blocks.getSaveContent.extraProps', 'lu-gutenberg/get-save-content/extra-props', addExtraProps);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUGFyYWdyYWggYmxvY2sgZXh0ZW5zaW9uXG4gKi9cblxuaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnbG9kYXNoJztcblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX3dwJGVsZW1lbnQgPSB3cC5lbGVtZW50LFxuICAgIEZyYWdtZW50ID0gX3dwJGVsZW1lbnQuRnJhZ21lbnQsXG4gICAgdXNlRWZmZWN0ID0gX3dwJGVsZW1lbnQudXNlRWZmZWN0O1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIEluc3BlY3RvckNvbnRyb2xzID0gd3AuYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgPSB3cC5jb21wb3NlLmNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50O1xudmFyIGFkZEZpbHRlciA9IHdwLmhvb2tzLmFkZEZpbHRlcjtcbnZhciBfXyA9IHdwLmkxOG4uX187XG5cbi8vIEVuYWJsZSBtYW5pcHVsYXRpb24gb2YgdGhlIGZvbGxvd2luZyBibG9ja3NcblxudmFyIGVuYWJsZWRCbG9ja3MgPSBbJ2NvcmUvbGlzdCddO1xuXG4vKipcbiAqIEV4dGVuZCBkZWZhdWx0IFBhcmFncmFwaCBibG9ja1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHNldHRpbmdzIEJsb2NrIGVkaXQgY29tcG9uZW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gbmFtZSBCbG9jayBlZGl0IGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufSBCbG9ja0VkaXQgTW9kaWZpZWQgYmxvY2sgZWRpdCBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZExpc3RCbG9jayhzZXR0aW5ncywgbmFtZSkge1xuXHQvLyBEbyBub3RoaW5nIGlmIGl0J3MgYW5vdGhlciBibG9jayB0aGFuIG91ciBkZWZpbmVkIG9uZXNcblx0aWYgKCFlbmFibGVkQmxvY2tzLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0cmV0dXJuIHNldHRpbmdzO1xuXHR9XG5cblx0LyogdXNlRWZmZWN0KCgpID0+IHtcbiBcdGNvbnNvbGUubG9nKCd1c2UgZWZmZWN0Jyk7XG4gfSk7ICovXG5cblx0c2V0dGluZ3MuYXR0cmlidXRlcyA9IGFzc2lnbihzZXR0aW5ncy5hdHRyaWJ1dGVzLCB7XG5cdFx0cGFyZW50QmdDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiBudWxsXG5cdFx0fSxcblx0XHR0ZXh0Q29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogbnVsbFxuXHRcdH1cblx0fSk7XG5cblx0c2V0dGluZ3MuYXR0cmlidXRlcy52YWx1ZXMuZGVmYXVsdCA9IF9fKCc8bGk+TG9yZW0gaXBzdW08L2xpPicpO1xuXG5cdHJldHVybiBzZXR0aW5ncztcbn1cblxuYWRkRmlsdGVyKCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLCAnbHUtZ3V0ZW5iZXJnL2V4dGVuZC1saXN0LWJsb2NrJywgZXh0ZW5kTGlzdEJsb2NrKTtcblxuLyoqXG4gKiBHZXQgbW9zdCBpbW1lZGlhdGUgcGFyZW50IHdpdGggYSBub24tdHJhbnNwYXJlbnQgYmFja2dyb3VuZCBpbWFnZVxuICovXG5mdW5jdGlvbiBnZXRQYXJlbnRCZ0NvbG9yKHBhcmVudEJsb2NrcywgaW5kZXgpIHtcblx0dmFyIGRpcmVjdFBhcmVudCA9IHdwLmRhdGEuc2VsZWN0KCdjb3JlL2Jsb2NrLWVkaXRvcicpLmdldEJsb2Nrc0J5Q2xpZW50SWQocGFyZW50QmxvY2tzKVtwYXJlbnRCbG9ja3MubGVuZ3RoIC0gMV07XG5cblx0aWYgKGluZGV4ID4gMCAmJiBkaXJlY3RQYXJlbnQuYXR0cmlidXRlcy5iZ0NvbG9yID09ICd0cmFuc3BhcmVudCcpIHtcblx0XHRnZXRwYXJlbnRCZ0NvbG9yKHBhcmVudEJsb2NrcywgaW5kZXggLSAxKTtcblx0fSBlbHNlIGlmIChpbmRleCA9PSAwICYmIGRpcmVjdFBhcmVudC5hdHRyaWJ1dGVzLmJnQ29sb3IgPT0gJ3RyYW5zcGFyZW50Jykge1xuXHRcdHJldHVybiAndHJhbnNwYXJlbnQnO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBkaXJlY3RQYXJlbnQuYXR0cmlidXRlcy5iZ0NvbG9yO1xuXHR9XG59XG5cbi8qKlxuICogR2l2ZW4gYSBwYXJlbnQgYmdDb2xvciwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHRleHQgY29sb3JcbiAqL1xuZnVuY3Rpb24gZ2V0VGV4dENvbG9yKHBhcmVudEJnQ29sb3IpIHtcblx0dmFyIHRleHRDb2xvciA9IHZvaWQgMDtcblxuXHRzd2l0Y2ggKHBhcmVudEJnQ29sb3IpIHtcblx0XHRjYXNlICcjdHJhbnNwYXJlbnQnOlxuXHRcdFx0Ly8gTm9uZVxuXHRcdFx0dGV4dENvbG9yID0gJyMwMDAwMDAnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnI0ZGRkZGRic6XG5cdFx0XHQvLyBXaGl0ZVxuXHRcdFx0dGV4dENvbG9yID0gJyMwMDAwMDAnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnI0Y1RjVGNSc6XG5cdFx0XHQvLyBHcmF5XG5cdFx0XHR0ZXh0Q29sb3IgPSAnIzAwMDAwMCc7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcjMzMzMzMzJzpcblx0XHRcdC8vIERhcmsgR3JheVxuXHRcdFx0dGV4dENvbG9yID0gJyNGRkZGRkYnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnIzE2MUYzMSc6XG5cdFx0XHQvLyBEYXJrIEJsdWVcblx0XHRcdHRleHRDb2xvciA9ICcjRkZGRkZGJztcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJyNGNUY1RjUnOlxuXHRcdFx0Ly8gQmx1ZVxuXHRcdFx0dGV4dENvbG9yID0gJyNGRkZGRkYnO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRleHRDb2xvciA9ICcjMDAwMDAwJztcblx0fVxuXG5cdHJldHVybiB0ZXh0Q29sb3I7XG59XG5cbi8qKlxuICogQ3JlYXRlIEhPQyB0byBhZGQgYmFja2dyb3VuZC1jb2xvciBvcHRpb24gdG8gaW5zcGVjdG9yIGNvbnRyb2xzIG9mIGJsb2NrXG4gKi9cbnZhciB3aXRoQ29sb3IgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChmdW5jdGlvbiAoQmxvY2tFZGl0KSB7XG5cdHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcblx0XHQvLyBEbyBub3RoaW5nIGlmIGl0J3MgYW5vdGhlciBibG9jayB0aGFuIG91ciBkZWZpbmVkIG9uZXNcblx0XHRpZiAoIWVuYWJsZWRCbG9ja3MuaW5jbHVkZXMocHJvcHMubmFtZSkpIHtcblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tFZGl0LCBwcm9wcyk7XG5cdFx0fVxuXG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuXHRcdCAgICBjbGllbnRJZCA9IHByb3BzLmNsaWVudElkO1xuXHRcdHZhciBwYXJlbnRCZ0NvbG9yID0gYXR0cmlidXRlcy5wYXJlbnRCZ0NvbG9yO1xuXG5cblx0XHRpZiAoIXBhcmVudEJnQ29sb3IpIHtcblx0XHRcdHZhciBwYXJlbnRCbG9ja3MgPSB3cC5kYXRhLnNlbGVjdCgnY29yZS9ibG9jay1lZGl0b3InKS5nZXRCbG9ja1BhcmVudHMocHJvcHMuY2xpZW50SWQpO1xuXG5cdFx0XHRpZiAocGFyZW50QmxvY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgcGFyZW50QmdDb2xvcjogZ2V0UGFyZW50QmdDb2xvcihwYXJlbnRCbG9ja3MsIHBhcmVudEJsb2Nrcy5sZW5ndGggLSAxKSB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIXByb3BzLmF0dHJpYnV0ZXMudGV4dENvbG9yICYmIHBhcmVudEJnQ29sb3IpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyB0ZXh0Q29sb3I6IGdldFRleHRDb2xvcihwYXJlbnRCZ0NvbG9yKSB9KTtcblx0XHR9XG5cblx0XHRwcm9wcy5zdHlsZSA9IHsgY29sb3I6IHByb3BzLmF0dHJpYnV0ZXMudGV4dENvbG9yIH07XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBzdHlsZTogcHJvcHMuc3R5bGUgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEJsb2NrRWRpdCwgcHJvcHMpXG5cdFx0XHQpXG5cdFx0KTtcblx0fTtcbn0sICd3aXRoQ29sb3InKTtcblxuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tFZGl0JywgJ2x1LWd1dGVuYmVyZy93aXRoLWNvbG9yJywgd2l0aENvbG9yKTtcblxuLyoqXG4gKiBBZGQgY29sb3Igc3R5bGUgYXR0cmlidXRlIHRvIHNhdmUgZWxlbWVudCBvZiBibG9jay5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gc2F2ZUVsZW1lbnRQcm9wcyBQcm9wcyBvZiBzYXZlIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gYmxvY2tUeXBlIEJsb2NrIHR5cGUgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlcyBBdHRyaWJ1dGVzIG9mIGJsb2NrLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9IE1vZGlmaWVkIHByb3BzIG9mIHNhdmUgZWxlbWVudC5cbiAqL1xudmFyIGFkZEV4dHJhUHJvcHMgPSBmdW5jdGlvbiBhZGRFeHRyYVByb3BzKHNhdmVFbGVtZW50UHJvcHMsIGJsb2NrVHlwZSwgYXR0cmlidXRlcykge1xuXHQvLyBEbyBub3RoaW5nIGlmIGl0J3MgYW5vdGhlciBibG9jayB0aGFuIG91ciBkZWZpbmVkIG9uZXMuXG5cdGlmICghZW5hYmxlZEJsb2Nrcy5pbmNsdWRlcyhibG9ja1R5cGUubmFtZSkpIHtcblx0XHRyZXR1cm4gc2F2ZUVsZW1lbnRQcm9wcztcblx0fVxuXG5cdC8vIFVzZSBMb2Rhc2gncyBhc3NpZ24gdG8gZ3JhY2VmdWxseSBoYW5kbGUgaWYgYXR0cmlidXRlcyBhcmUgdW5kZWZpbmVkXG5cdGFzc2lnbihzYXZlRWxlbWVudFByb3BzLCB7XG5cdFx0c3R5bGU6IHtcblx0XHRcdGNvbG9yOiBhdHRyaWJ1dGVzLnRleHRDb2xvclxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHNhdmVFbGVtZW50UHJvcHM7XG59O1xuXG5hZGRGaWx0ZXIoJ2Jsb2Nrcy5nZXRTYXZlQ29udGVudC5leHRyYVByb3BzJywgJ2x1LWd1dGVuYmVyZy9nZXQtc2F2ZS1jb250ZW50L2V4dHJhLXByb3BzJywgYWRkRXh0cmFQcm9wcyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! dynamic exports provided */
/*! exports used: assign */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);