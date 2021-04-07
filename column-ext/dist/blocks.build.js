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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(/*! lodash */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);\n\n\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar Fragment = wp.element.Fragment;\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    ColorPalette = _wp$components.ColorPalette;\nvar addFilter = wp.hooks.addFilter;\nvar __ = wp.i18n.__;\n\n// Enable manipulation of the following blocks\n\nvar enabledBlocks = ['core/column'];\n\n/**\n * Add background-color control attribute to block.\n *\n * @param {object} settings Current block settings.\n * @param {string} name Name of block.\n *\n * @returns {object} Modified block settings.\n */\nvar addBgColorAttribute = function addBgColorAttribute(settings, name) {\n    // Do nothing if it's another block than our defined ones\n    if (!enabledBlocks.includes(name)) {\n        return settings;\n    }\n\n    // Use Lodash's assign to gracefully handle if attributes are undefined\n    settings.attributes = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__[\"assign\"])(settings.attributes, {\n        bgColor: {\n            type: 'string',\n            default: 'transparent'\n        }\n    });\n\n    return settings;\n};\n\naddFilter('blocks.registerBlockType', 'lu-gutenberg/attribute/bgColor', addBgColorAttribute);\n\n/**\n * Create HOC to add background-color option to inspector controls of block\n */\nvar withBgColor = createHigherOrderComponent(function (BlockEdit) {\n    return function (props) {\n        // Do nothing if it's another block than our defined ones\n        if (!enabledBlocks.includes(props.name)) {\n            return wp.element.createElement(BlockEdit, props);\n        }\n\n        var bgColor = props.attributes.bgColor;\n\n        // add has-bgColor-x class to block\n\n        if (bgColor) {\n            props.attributes.className = 'has-bgColor-' + bgColor;\n            props.style = { 'background': bgColor };\n        }\n\n        var colors = [{ name: 'None', color: 'transparent' }, { name: 'White', color: '#FFFFFF' }, { name: 'Gray', color: '#F5F5F5' }, { name: 'Dark Gray', color: '#333333' }, { name: 'Dark Blue', color: '#161F31' }, { name: 'Blue', color: '#E7EFF7' }];\n\n        return wp.element.createElement(\n            Fragment,\n            null,\n            wp.element.createElement(\n                'div',\n                { style: { background: bgColor } },\n                wp.element.createElement(BlockEdit, props)\n            ),\n            wp.element.createElement(\n                InspectorControls,\n                null,\n                wp.element.createElement(\n                    'panelBody',\n                    { initialOpen: false },\n                    wp.element.createElement(\n                        'panelRow',\n                        null,\n                        wp.element.createElement(\n                            'label',\n                            null,\n                            wp.element.createElement(\n                                'b',\n                                null,\n                                'Background Color'\n                            )\n                        ),\n                        wp.element.createElement(ColorPalette, {\n                            colors: colors,\n                            value: props.attributes,\n                            disableCustomColors: true,\n                            onChange: function onChange(value) {\n                                return props.setAttributes({ bgColor: value });\n                            }\n                        })\n                    )\n                )\n            )\n        );\n    };\n}, 'withBgColor');\n\naddFilter('editor.BlockEdit', 'lu-gutenberg/with-bg-color', withBgColor);\n\n/**\n * Add background-color style attribute to save element of block.\n *\n * @param {object} saveElementProps Props of save element.\n * @param {Object} blockType Block type information.\n * @param {Object} attributes Attributes of block.\n *\n * @returns {object} Modified props of save element.\n */\nvar addBgColorExtraProps = function addBgColorExtraProps(saveElementProps, blockType, attributes) {\n    // Do nothing if it's another block than our defined ones.\n    if (!enabledBlocks.includes(blockType.name)) {\n        return saveElementProps;\n    }\n\n    // console.log(attributes);\n\n    // Use Lodash's assign to gracefully handle if attributes are undefined\n    Object(__WEBPACK_IMPORTED_MODULE_0_lodash__[\"assign\"])(saveElementProps, { style: { 'background': attributes.bgColor } });\n\n    return saveElementProps;\n};\n\naddFilter('blocks.getSaveContent.extraProps', 'lu-gutenberg/get-save-content/extra-props', addBgColorExtraProps);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzc2lnbiB9IGZyb20gJ2xvZGFzaCc7XG5cbnZhciBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCA9IHdwLmNvbXBvc2UuY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQ7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIEluc3BlY3RvckNvbnRyb2xzID0gd3AuYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBTZWxlY3RDb250cm9sID0gX3dwJGNvbXBvbmVudHMuU2VsZWN0Q29udHJvbCxcbiAgICBDb2xvclBhbGV0dGUgPSBfd3AkY29tcG9uZW50cy5Db2xvclBhbGV0dGU7XG52YXIgYWRkRmlsdGVyID0gd3AuaG9va3MuYWRkRmlsdGVyO1xudmFyIF9fID0gd3AuaTE4bi5fXztcblxuLy8gRW5hYmxlIG1hbmlwdWxhdGlvbiBvZiB0aGUgZm9sbG93aW5nIGJsb2Nrc1xuXG52YXIgZW5hYmxlZEJsb2NrcyA9IFsnY29yZS9jb2x1bW4nXTtcblxuLyoqXG4gKiBBZGQgYmFja2dyb3VuZC1jb2xvciBjb250cm9sIGF0dHJpYnV0ZSB0byBibG9jay5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3MgQ3VycmVudCBibG9jayBzZXR0aW5ncy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgYmxvY2suXG4gKlxuICogQHJldHVybnMge29iamVjdH0gTW9kaWZpZWQgYmxvY2sgc2V0dGluZ3MuXG4gKi9cbnZhciBhZGRCZ0NvbG9yQXR0cmlidXRlID0gZnVuY3Rpb24gYWRkQmdDb2xvckF0dHJpYnV0ZShzZXR0aW5ncywgbmFtZSkge1xuICAgIC8vIERvIG5vdGhpbmcgaWYgaXQncyBhbm90aGVyIGJsb2NrIHRoYW4gb3VyIGRlZmluZWQgb25lc1xuICAgIGlmICghZW5hYmxlZEJsb2Nrcy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgLy8gVXNlIExvZGFzaCdzIGFzc2lnbiB0byBncmFjZWZ1bGx5IGhhbmRsZSBpZiBhdHRyaWJ1dGVzIGFyZSB1bmRlZmluZWRcbiAgICBzZXR0aW5ncy5hdHRyaWJ1dGVzID0gYXNzaWduKHNldHRpbmdzLmF0dHJpYnV0ZXMsIHtcbiAgICAgICAgYmdDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzZXR0aW5ncztcbn07XG5cbmFkZEZpbHRlcignYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJywgJ2x1LWd1dGVuYmVyZy9hdHRyaWJ1dGUvYmdDb2xvcicsIGFkZEJnQ29sb3JBdHRyaWJ1dGUpO1xuXG4vKipcbiAqIENyZWF0ZSBIT0MgdG8gYWRkIGJhY2tncm91bmQtY29sb3Igb3B0aW9uIHRvIGluc3BlY3RvciBjb250cm9scyBvZiBibG9ja1xuICovXG52YXIgd2l0aEJnQ29sb3IgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChmdW5jdGlvbiAoQmxvY2tFZGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGl0J3MgYW5vdGhlciBibG9jayB0aGFuIG91ciBkZWZpbmVkIG9uZXNcbiAgICAgICAgaWYgKCFlbmFibGVkQmxvY2tzLmluY2x1ZGVzKHByb3BzLm5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEJsb2NrRWRpdCwgcHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJnQ29sb3IgPSBwcm9wcy5hdHRyaWJ1dGVzLmJnQ29sb3I7XG5cbiAgICAgICAgLy8gYWRkIGhhcy1iZ0NvbG9yLXggY2xhc3MgdG8gYmxvY2tcblxuICAgICAgICBpZiAoYmdDb2xvcikge1xuICAgICAgICAgICAgcHJvcHMuYXR0cmlidXRlcy5jbGFzc05hbWUgPSAnaGFzLWJnQ29sb3ItJyArIGJnQ29sb3I7XG4gICAgICAgICAgICBwcm9wcy5zdHlsZSA9IHsgJ2JhY2tncm91bmQnOiBiZ0NvbG9yIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29sb3JzID0gW3sgbmFtZTogJ05vbmUnLCBjb2xvcjogJ3RyYW5zcGFyZW50JyB9LCB7IG5hbWU6ICdXaGl0ZScsIGNvbG9yOiAnI0ZGRkZGRicgfSwgeyBuYW1lOiAnR3JheScsIGNvbG9yOiAnI0Y1RjVGNScgfSwgeyBuYW1lOiAnRGFyayBHcmF5JywgY29sb3I6ICcjMzMzMzMzJyB9LCB7IG5hbWU6ICdEYXJrIEJsdWUnLCBjb2xvcjogJyMxNjFGMzEnIH0sIHsgbmFtZTogJ0JsdWUnLCBjb2xvcjogJyNFN0VGRjcnIH1dO1xuXG4gICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBGcmFnbWVudCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogeyBiYWNrZ3JvdW5kOiBiZ0NvbG9yIH0gfSxcbiAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tFZGl0LCBwcm9wcylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdwYW5lbEJvZHknLFxuICAgICAgICAgICAgICAgICAgICB7IGluaXRpYWxPcGVuOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAncGFuZWxSb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdCYWNrZ3JvdW5kIENvbG9yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQ29sb3JQYWxldHRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBjb2xvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUN1c3RvbUNvbG9yczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBiZ0NvbG9yOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH07XG59LCAnd2l0aEJnQ29sb3InKTtcblxuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tFZGl0JywgJ2x1LWd1dGVuYmVyZy93aXRoLWJnLWNvbG9yJywgd2l0aEJnQ29sb3IpO1xuXG4vKipcbiAqIEFkZCBiYWNrZ3JvdW5kLWNvbG9yIHN0eWxlIGF0dHJpYnV0ZSB0byBzYXZlIGVsZW1lbnQgb2YgYmxvY2suXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHNhdmVFbGVtZW50UHJvcHMgUHJvcHMgb2Ygc2F2ZSBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGJsb2NrVHlwZSBCbG9jayB0eXBlIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgQXR0cmlidXRlcyBvZiBibG9jay5cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBNb2RpZmllZCBwcm9wcyBvZiBzYXZlIGVsZW1lbnQuXG4gKi9cbnZhciBhZGRCZ0NvbG9yRXh0cmFQcm9wcyA9IGZ1bmN0aW9uIGFkZEJnQ29sb3JFeHRyYVByb3BzKHNhdmVFbGVtZW50UHJvcHMsIGJsb2NrVHlwZSwgYXR0cmlidXRlcykge1xuICAgIC8vIERvIG5vdGhpbmcgaWYgaXQncyBhbm90aGVyIGJsb2NrIHRoYW4gb3VyIGRlZmluZWQgb25lcy5cbiAgICBpZiAoIWVuYWJsZWRCbG9ja3MuaW5jbHVkZXMoYmxvY2tUeXBlLm5hbWUpKSB7XG4gICAgICAgIHJldHVybiBzYXZlRWxlbWVudFByb3BzO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKGF0dHJpYnV0ZXMpO1xuXG4gICAgLy8gVXNlIExvZGFzaCdzIGFzc2lnbiB0byBncmFjZWZ1bGx5IGhhbmRsZSBpZiBhdHRyaWJ1dGVzIGFyZSB1bmRlZmluZWRcbiAgICBhc3NpZ24oc2F2ZUVsZW1lbnRQcm9wcywgeyBzdHlsZTogeyAnYmFja2dyb3VuZCc6IGF0dHJpYnV0ZXMuYmdDb2xvciB9IH0pO1xuXG4gICAgcmV0dXJuIHNhdmVFbGVtZW50UHJvcHM7XG59O1xuXG5hZGRGaWx0ZXIoJ2Jsb2Nrcy5nZXRTYXZlQ29udGVudC5leHRyYVByb3BzJywgJ2x1LWd1dGVuYmVyZy9nZXQtc2F2ZS1jb250ZW50L2V4dHJhLXByb3BzJywgYWRkQmdDb2xvckV4dHJhUHJvcHMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! dynamic exports provided */
/*! exports used: assign */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ })
/******/ ]);