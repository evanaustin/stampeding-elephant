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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(/*! lodash */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__(/*! ./style.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);\n/**\n * Paragrah block extension\n */\n\n\n\n//  Import CSS.\n\n\n\nvar Fragment = wp.element.Fragment;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar addFilter = wp.hooks.addFilter;\nvar __ = wp.i18n.__;\n\n// Enable manipulation of the following blocks\n\nvar enabledBlocks = ['core/paragraph'];\n\n/**\n * Extend default Paragraph block\n *\n * @param {function} settings Block edit component.\n * @param {function} name Block edit component.\n * @return {function} BlockEdit Modified block edit component.\n */\nfunction extendParagraphBlock(settings, name) {\n\t// Do nothing if it's another block than our defined ones\n\tif (!enabledBlocks.includes(name)) {\n\t\treturn settings;\n\t}\n\n\tsettings.attributes = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__[\"assign\"])(settings.attributes, {\n\t\tparentBgColor: {\n\t\t\ttype: 'string',\n\t\t\tdefault: null\n\t\t},\n\t\ttextColor: {\n\t\t\ttype: 'string',\n\t\t\tdefault: null\n\t\t}\n\t});\n\n\tsettings.attributes.content.default = __('This is a new paragraph. Lorem ipsum dolor sit amet...');\n\n\treturn settings;\n}\n\naddFilter('blocks.registerBlockType', 'lu-gutenberg/extend-paragraph-block', extendParagraphBlock);\n\n/**\n * Get most immediate parent with a non-transparent background image\n */\nfunction getParentBgColor(parentBlocks, index) {\n\tvar directParent = wp.data.select('core/block-editor').getBlocksByClientId(parentBlocks)[parentBlocks.length - 1];\n\n\tif (index > 0 && directParent.attributes.bgColor == 'transparent') {\n\t\tgetparentBgColor(parentBlocks, index - 1);\n\t} else if (index == 0 && directParent.attributes.bgColor == 'transparent') {\n\t\treturn 'transparent';\n\t} else {\n\t\treturn directParent.attributes.bgColor;\n\t}\n}\n\n/**\n * Given a parent bgColor, return the corresponding text color\n */\nfunction getTextColor(parentBgColor) {\n\tvar textColor = void 0;\n\n\tswitch (parentBgColor) {\n\t\tcase 'transparent':\n\t\t\t// None\n\t\t\ttextColor = '#000000';\n\t\t\tbreak;\n\t\tcase '#FFFFFF':\n\t\t\t// White\n\t\t\ttextColor = '#000000';\n\t\t\tbreak;\n\t\tcase '#F5F5F5':\n\t\t\t// Gray\n\t\t\ttextColor = '#000000';\n\t\t\tbreak;\n\t\tcase '#333333':\n\t\t\t// Dark Gray\n\t\t\ttextColor = '#FFFFFF';\n\t\t\tbreak;\n\t\tcase '#161F31':\n\t\t\t// Dark Blue\n\t\t\ttextColor = '#FFFFFF';\n\t\t\tbreak;\n\t\tcase '#F5F5F5':\n\t\t\t// Blue\n\t\t\ttextColor = '#FFFFFF';\n\t\t\tbreak;\n\t\tdefault:\n\t\t\ttextColor = '#000000';\n\t}\n\n\treturn textColor;\n}\n\n/**\n * Create HOC to add background-color option to inspector controls of block\n */\nvar withColor = createHigherOrderComponent(function (BlockEdit) {\n\treturn function (props) {\n\t\t// Do nothing if it's another block than our defined ones\n\t\tif (!enabledBlocks.includes(props.name)) {\n\t\t\treturn wp.element.createElement(BlockEdit, props);\n\t\t}\n\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes,\n\t\t    className = props.className,\n\t\t    clientId = props.clientId;\n\t\tvar parentBgColor = attributes.parentBgColor;\n\n\n\t\tif (!parentBgColor) {\n\t\t\tvar parentBlocks = wp.data.select('core/block-editor').getBlockParents(props.clientId);\n\n\t\t\tif (parentBlocks.length) {\n\t\t\t\tprops.setAttributes({ parentBgColor: getParentBgColor(parentBlocks, parentBlocks.length - 1) });\n\t\t\t}\n\t\t}\n\n\t\t/* if (!props.attributes.textColor && parentBgColor) {\n  \tprops.setAttributes({ textColor: getTextColor(parentBgColor) });\n  } */\n\n\t\t// props.style = { color: props.attributes.textColor };\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ style: props.style },\n\t\t\t\twp.element.createElement(BlockEdit, props)\n\t\t\t)\n\t\t);\n\t};\n}, 'withColor');\n\naddFilter('editor.BlockEdit', 'lu-gutenberg/with-color', withColor);\n\n/**\n * Add color style attribute to save element of block.\n *\n * @param {object} saveElementProps Props of save element.\n * @param {Object} blockType Block type information.\n * @param {Object} attributes Attributes of block.\n *\n * @returns {object} Modified props of save element.\n */\nvar addExtraProps = function addExtraProps(saveElementProps, blockType, attributes) {\n\t// Do nothing if it's another block than our defined ones.\n\tif (!enabledBlocks.includes(blockType.name)) {\n\t\treturn saveElementProps;\n\t}\n\n\t// Use Lodash's assign to gracefully handle if attributes are undefined\n\t/* assign(saveElementProps, {\n \tstyle: {\n \t\tcolor: attributes.textColor\n \t}\n }); */\n\n\treturn saveElementProps;\n};\n\naddFilter('blocks.getSaveContent.extraProps', 'lu-gutenberg/get-save-content/extra-props', addExtraProps);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUGFyYWdyYWggYmxvY2sgZXh0ZW5zaW9uXG4gKi9cblxuaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnbG9kYXNoJztcblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIEluc3BlY3RvckNvbnRyb2xzID0gd3AuYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgPSB3cC5jb21wb3NlLmNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50O1xudmFyIGFkZEZpbHRlciA9IHdwLmhvb2tzLmFkZEZpbHRlcjtcbnZhciBfXyA9IHdwLmkxOG4uX187XG5cbi8vIEVuYWJsZSBtYW5pcHVsYXRpb24gb2YgdGhlIGZvbGxvd2luZyBibG9ja3NcblxudmFyIGVuYWJsZWRCbG9ja3MgPSBbJ2NvcmUvcGFyYWdyYXBoJ107XG5cbi8qKlxuICogRXh0ZW5kIGRlZmF1bHQgUGFyYWdyYXBoIGJsb2NrXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc2V0dGluZ3MgQmxvY2sgZWRpdCBjb21wb25lbnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBuYW1lIEJsb2NrIGVkaXQgY29tcG9uZW50LlxuICogQHJldHVybiB7ZnVuY3Rpb259IEJsb2NrRWRpdCBNb2RpZmllZCBibG9jayBlZGl0IGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gZXh0ZW5kUGFyYWdyYXBoQmxvY2soc2V0dGluZ3MsIG5hbWUpIHtcblx0Ly8gRG8gbm90aGluZyBpZiBpdCdzIGFub3RoZXIgYmxvY2sgdGhhbiBvdXIgZGVmaW5lZCBvbmVzXG5cdGlmICghZW5hYmxlZEJsb2Nrcy5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdHJldHVybiBzZXR0aW5ncztcblx0fVxuXG5cdHNldHRpbmdzLmF0dHJpYnV0ZXMgPSBhc3NpZ24oc2V0dGluZ3MuYXR0cmlidXRlcywge1xuXHRcdHBhcmVudEJnQ29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogbnVsbFxuXHRcdH0sXG5cdFx0dGV4dENvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6IG51bGxcblx0XHR9XG5cdH0pO1xuXG5cdHNldHRpbmdzLmF0dHJpYnV0ZXMuY29udGVudC5kZWZhdWx0ID0gX18oJ1RoaXMgaXMgYSBuZXcgcGFyYWdyYXBoLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4uLicpO1xuXG5cdHJldHVybiBzZXR0aW5ncztcbn1cblxuYWRkRmlsdGVyKCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLCAnbHUtZ3V0ZW5iZXJnL2V4dGVuZC1wYXJhZ3JhcGgtYmxvY2snLCBleHRlbmRQYXJhZ3JhcGhCbG9jayk7XG5cbi8qKlxuICogR2V0IG1vc3QgaW1tZWRpYXRlIHBhcmVudCB3aXRoIGEgbm9uLXRyYW5zcGFyZW50IGJhY2tncm91bmQgaW1hZ2VcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50QmdDb2xvcihwYXJlbnRCbG9ja3MsIGluZGV4KSB7XG5cdHZhciBkaXJlY3RQYXJlbnQgPSB3cC5kYXRhLnNlbGVjdCgnY29yZS9ibG9jay1lZGl0b3InKS5nZXRCbG9ja3NCeUNsaWVudElkKHBhcmVudEJsb2NrcylbcGFyZW50QmxvY2tzLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChpbmRleCA+IDAgJiYgZGlyZWN0UGFyZW50LmF0dHJpYnV0ZXMuYmdDb2xvciA9PSAndHJhbnNwYXJlbnQnKSB7XG5cdFx0Z2V0cGFyZW50QmdDb2xvcihwYXJlbnRCbG9ja3MsIGluZGV4IC0gMSk7XG5cdH0gZWxzZSBpZiAoaW5kZXggPT0gMCAmJiBkaXJlY3RQYXJlbnQuYXR0cmlidXRlcy5iZ0NvbG9yID09ICd0cmFuc3BhcmVudCcpIHtcblx0XHRyZXR1cm4gJ3RyYW5zcGFyZW50Jztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZGlyZWN0UGFyZW50LmF0dHJpYnV0ZXMuYmdDb2xvcjtcblx0fVxufVxuXG4vKipcbiAqIEdpdmVuIGEgcGFyZW50IGJnQ29sb3IsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyB0ZXh0IGNvbG9yXG4gKi9cbmZ1bmN0aW9uIGdldFRleHRDb2xvcihwYXJlbnRCZ0NvbG9yKSB7XG5cdHZhciB0ZXh0Q29sb3IgPSB2b2lkIDA7XG5cblx0c3dpdGNoIChwYXJlbnRCZ0NvbG9yKSB7XG5cdFx0Y2FzZSAndHJhbnNwYXJlbnQnOlxuXHRcdFx0Ly8gTm9uZVxuXHRcdFx0dGV4dENvbG9yID0gJyMwMDAwMDAnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnI0ZGRkZGRic6XG5cdFx0XHQvLyBXaGl0ZVxuXHRcdFx0dGV4dENvbG9yID0gJyMwMDAwMDAnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnI0Y1RjVGNSc6XG5cdFx0XHQvLyBHcmF5XG5cdFx0XHR0ZXh0Q29sb3IgPSAnIzAwMDAwMCc7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcjMzMzMzMzJzpcblx0XHRcdC8vIERhcmsgR3JheVxuXHRcdFx0dGV4dENvbG9yID0gJyNGRkZGRkYnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnIzE2MUYzMSc6XG5cdFx0XHQvLyBEYXJrIEJsdWVcblx0XHRcdHRleHRDb2xvciA9ICcjRkZGRkZGJztcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJyNGNUY1RjUnOlxuXHRcdFx0Ly8gQmx1ZVxuXHRcdFx0dGV4dENvbG9yID0gJyNGRkZGRkYnO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRleHRDb2xvciA9ICcjMDAwMDAwJztcblx0fVxuXG5cdHJldHVybiB0ZXh0Q29sb3I7XG59XG5cbi8qKlxuICogQ3JlYXRlIEhPQyB0byBhZGQgYmFja2dyb3VuZC1jb2xvciBvcHRpb24gdG8gaW5zcGVjdG9yIGNvbnRyb2xzIG9mIGJsb2NrXG4gKi9cbnZhciB3aXRoQ29sb3IgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChmdW5jdGlvbiAoQmxvY2tFZGl0KSB7XG5cdHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcblx0XHQvLyBEbyBub3RoaW5nIGlmIGl0J3MgYW5vdGhlciBibG9jayB0aGFuIG91ciBkZWZpbmVkIG9uZXNcblx0XHRpZiAoIWVuYWJsZWRCbG9ja3MuaW5jbHVkZXMocHJvcHMubmFtZSkpIHtcblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tFZGl0LCBwcm9wcyk7XG5cdFx0fVxuXG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuXHRcdCAgICBjbGllbnRJZCA9IHByb3BzLmNsaWVudElkO1xuXHRcdHZhciBwYXJlbnRCZ0NvbG9yID0gYXR0cmlidXRlcy5wYXJlbnRCZ0NvbG9yO1xuXG5cblx0XHRpZiAoIXBhcmVudEJnQ29sb3IpIHtcblx0XHRcdHZhciBwYXJlbnRCbG9ja3MgPSB3cC5kYXRhLnNlbGVjdCgnY29yZS9ibG9jay1lZGl0b3InKS5nZXRCbG9ja1BhcmVudHMocHJvcHMuY2xpZW50SWQpO1xuXG5cdFx0XHRpZiAocGFyZW50QmxvY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgcGFyZW50QmdDb2xvcjogZ2V0UGFyZW50QmdDb2xvcihwYXJlbnRCbG9ja3MsIHBhcmVudEJsb2Nrcy5sZW5ndGggLSAxKSB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKiBpZiAoIXByb3BzLmF0dHJpYnV0ZXMudGV4dENvbG9yICYmIHBhcmVudEJnQ29sb3IpIHtcbiAgXHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgdGV4dENvbG9yOiBnZXRUZXh0Q29sb3IocGFyZW50QmdDb2xvcikgfSk7XG4gIH0gKi9cblxuXHRcdC8vIHByb3BzLnN0eWxlID0geyBjb2xvcjogcHJvcHMuYXR0cmlidXRlcy50ZXh0Q29sb3IgfTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRGcmFnbWVudCxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IHN0eWxlOiBwcm9wcy5zdHlsZSB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tFZGl0LCBwcm9wcylcblx0XHRcdClcblx0XHQpO1xuXHR9O1xufSwgJ3dpdGhDb2xvcicpO1xuXG5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0VkaXQnLCAnbHUtZ3V0ZW5iZXJnL3dpdGgtY29sb3InLCB3aXRoQ29sb3IpO1xuXG4vKipcbiAqIEFkZCBjb2xvciBzdHlsZSBhdHRyaWJ1dGUgdG8gc2F2ZSBlbGVtZW50IG9mIGJsb2NrLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBzYXZlRWxlbWVudFByb3BzIFByb3BzIG9mIHNhdmUgZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBibG9ja1R5cGUgQmxvY2sgdHlwZSBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzIEF0dHJpYnV0ZXMgb2YgYmxvY2suXG4gKlxuICogQHJldHVybnMge29iamVjdH0gTW9kaWZpZWQgcHJvcHMgb2Ygc2F2ZSBlbGVtZW50LlxuICovXG52YXIgYWRkRXh0cmFQcm9wcyA9IGZ1bmN0aW9uIGFkZEV4dHJhUHJvcHMoc2F2ZUVsZW1lbnRQcm9wcywgYmxvY2tUeXBlLCBhdHRyaWJ1dGVzKSB7XG5cdC8vIERvIG5vdGhpbmcgaWYgaXQncyBhbm90aGVyIGJsb2NrIHRoYW4gb3VyIGRlZmluZWQgb25lcy5cblx0aWYgKCFlbmFibGVkQmxvY2tzLmluY2x1ZGVzKGJsb2NrVHlwZS5uYW1lKSkge1xuXHRcdHJldHVybiBzYXZlRWxlbWVudFByb3BzO1xuXHR9XG5cblx0Ly8gVXNlIExvZGFzaCdzIGFzc2lnbiB0byBncmFjZWZ1bGx5IGhhbmRsZSBpZiBhdHRyaWJ1dGVzIGFyZSB1bmRlZmluZWRcblx0LyogYXNzaWduKHNhdmVFbGVtZW50UHJvcHMsIHtcbiBcdHN0eWxlOiB7XG4gXHRcdGNvbG9yOiBhdHRyaWJ1dGVzLnRleHRDb2xvclxuIFx0fVxuIH0pOyAqL1xuXG5cdHJldHVybiBzYXZlRWxlbWVudFByb3BzO1xufTtcblxuYWRkRmlsdGVyKCdibG9ja3MuZ2V0U2F2ZUNvbnRlbnQuZXh0cmFQcm9wcycsICdsdS1ndXRlbmJlcmcvZ2V0LXNhdmUtY29udGVudC9leHRyYS1wcm9wcycsIGFkZEV4dHJhUHJvcHMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

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