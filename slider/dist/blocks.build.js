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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: slider\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n// import times from \"lodash/times\";\n// import memoize from \"memize\";\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,\n    BlockControls = _wp$blockEditor.BlockControls,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    PanelColorSettings = _wp$blockEditor.PanelColorSettings,\n    InnerBlocks = _wp$blockEditor.InnerBlocks;\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    RangeControl = _wp$components.RangeControl,\n    SelectControl = _wp$components.SelectControl,\n    ToggleControl = _wp$components.ToggleControl;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('lu/block-slider-parent', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Slider Parent'), // Block title.\n\ticon: 'menu', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('Accordion'), __('Custom Blocks'), __('Gutenberg')],\n\tattributes: {\n\t\tnoOfChildren: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 2\n\t\t},\n\t\tblockId: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    noOfChildren = _props$attributes.noOfChildren,\n\t\t    styled = _props$attributes.styled,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes,\n\t\t    clientId = props.clientId;\n\n\n\t\tsetAttributes({ blockId: clientId });\n\n\t\tvar ALLOWEDBLOCKS = ['lu/block-slider-child'];\n\t\tvar BLOCKS_TEMPLATE = [['lu/block-slider-child']];\n\n\t\t// const getChildSliderBlock = memoize(slider => {\n\t\t// \treturn times(slider, n => [\"lu/block-slider-child\", {\n\t\t// \t\tid: n + 1\n\t\t// \t}]);\n\t\t// });\n\n\t\treturn wp.element.createElement(\n\t\t\t'fragment',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: { className: className } },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'sliderParentWrapper' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'[ Slider ]'\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\t\t\ttemplate: BLOCKS_TEMPLATE,\n\t\t\t\t\t\ttemplateLock: false,\n\t\t\t\t\t\tallowedBlocks: ALLOWEDBLOCKS\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\tvar noOfChildren = props.attributes.noOfChildren,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes,\n\t\t    clientId = props.clientId;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'slider' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'slider_container' },\n\t\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t\t)\n\t\t);\n\t}\n});\n\n/* Slider Child Block */\nregisterBlockType('lu/block-slider-child', {\n\ttitle: __('Slider Child'),\n\tcategory: 'common',\n\tparent: ['lu/block-slider-parent'],\n\tedit: function edit(props) {\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes,\n\t\t    className = props.className,\n\t\t    clientId = props.clientId;\n\n\n\t\tvar ALLOWEDBLOCKS = ['core/paragraph'];\n\t\tvar BLOCKS_TEMPLATE = [['core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet' }]];\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: { className: className } },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'slider' },\n\t\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\t\ttemplate: BLOCKS_TEMPLATE,\n\t\t\t\t\ttemplateLock: false,\n\t\t\t\t\tallowedBlocks: ALLOWEDBLOCKS\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'slider_item cycle_slide' },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHNsaWRlclxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbi8vIGltcG9ydCB0aW1lcyBmcm9tIFwibG9kYXNoL3RpbWVzXCI7XG4vLyBpbXBvcnQgbWVtb2l6ZSBmcm9tIFwibWVtaXplXCI7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbnZhciBfd3AkYmxvY2tFZGl0b3IgPSB3cC5ibG9ja0VkaXRvcixcbiAgICBSaWNoVGV4dCA9IF93cCRibG9ja0VkaXRvci5SaWNoVGV4dCxcbiAgICBBbGlnbm1lbnRUb29sYmFyID0gX3dwJGJsb2NrRWRpdG9yLkFsaWdubWVudFRvb2xiYXIsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRibG9ja0VkaXRvci5CbG9ja0NvbnRyb2xzLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGJsb2NrRWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIFBhbmVsQ29sb3JTZXR0aW5ncyA9IF93cCRibG9ja0VkaXRvci5QYW5lbENvbG9yU2V0dGluZ3MsXG4gICAgSW5uZXJCbG9ja3MgPSBfd3AkYmxvY2tFZGl0b3IuSW5uZXJCbG9ja3M7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFRleHRDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dENvbnRyb2wsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFBhbmVsUm93ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxSb3csXG4gICAgUmFuZ2VDb250cm9sID0gX3dwJGNvbXBvbmVudHMuUmFuZ2VDb250cm9sLFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sLFxuICAgIFRvZ2dsZUNvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5Ub2dnbGVDb250cm9sO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnbHUvYmxvY2stc2xpZGVyLXBhcmVudCcsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnU2xpZGVyIFBhcmVudCcpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ21lbnUnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oJ0FjY29yZGlvbicpLCBfXygnQ3VzdG9tIEJsb2NrcycpLCBfXygnR3V0ZW5iZXJnJyldLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bm9PZkNoaWxkcmVuOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDJcblx0XHR9LFxuXHRcdGJsb2NrSWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICpcbiAgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cbiAgKi9cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBfcHJvcHMkYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIG5vT2ZDaGlsZHJlbiA9IF9wcm9wcyRhdHRyaWJ1dGVzLm5vT2ZDaGlsZHJlbixcblx0XHQgICAgc3R5bGVkID0gX3Byb3BzJGF0dHJpYnV0ZXMuc3R5bGVkLFxuXHRcdCAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGllbnRJZCA9IHByb3BzLmNsaWVudElkO1xuXG5cblx0XHRzZXRBdHRyaWJ1dGVzKHsgYmxvY2tJZDogY2xpZW50SWQgfSk7XG5cblx0XHR2YXIgQUxMT1dFREJMT0NLUyA9IFsnbHUvYmxvY2stc2xpZGVyLWNoaWxkJ107XG5cdFx0dmFyIEJMT0NLU19URU1QTEFURSA9IFtbJ2x1L2Jsb2NrLXNsaWRlci1jaGlsZCddXTtcblxuXHRcdC8vIGNvbnN0IGdldENoaWxkU2xpZGVyQmxvY2sgPSBtZW1vaXplKHNsaWRlciA9PiB7XG5cdFx0Ly8gXHRyZXR1cm4gdGltZXMoc2xpZGVyLCBuID0+IFtcImx1L2Jsb2NrLXNsaWRlci1jaGlsZFwiLCB7XG5cdFx0Ly8gXHRcdGlkOiBuICsgMVxuXHRcdC8vIFx0fV0pO1xuXHRcdC8vIH0pO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdmcmFnbWVudCcsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdzbGlkZXJQYXJlbnRXcmFwcGVyJyB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHQnWyBTbGlkZXIgXSdcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcywge1xuXHRcdFx0XHRcdFx0dGVtcGxhdGU6IEJMT0NLU19URU1QTEFURSxcblx0XHRcdFx0XHRcdHRlbXBsYXRlTG9jazogZmFsc2UsXG5cdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzOiBBTExPV0VEQkxPQ0tTXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICpcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIG5vT2ZDaGlsZHJlbiA9IHByb3BzLmF0dHJpYnV0ZXMubm9PZkNoaWxkcmVuLFxuXHRcdCAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGllbnRJZCA9IHByb3BzLmNsaWVudElkO1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ3NsaWRlcicgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnc2xpZGVyX2NvbnRhaW5lcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cbi8qIFNsaWRlciBDaGlsZCBCbG9jayAqL1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2x1L2Jsb2NrLXNsaWRlci1jaGlsZCcsIHtcblx0dGl0bGU6IF9fKCdTbGlkZXIgQ2hpbGQnKSxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRwYXJlbnQ6IFsnbHUvYmxvY2stc2xpZGVyLXBhcmVudCddLFxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuXHRcdCAgICBjbGllbnRJZCA9IHByb3BzLmNsaWVudElkO1xuXG5cblx0XHR2YXIgQUxMT1dFREJMT0NLUyA9IFsnY29yZS9wYXJhZ3JhcGgnXTtcblx0XHR2YXIgQkxPQ0tTX1RFTVBMQVRFID0gW1snY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnIH1dXTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0gfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnc2xpZGVyJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIHtcblx0XHRcdFx0XHR0ZW1wbGF0ZTogQkxPQ0tTX1RFTVBMQVRFLFxuXHRcdFx0XHRcdHRlbXBsYXRlTG9jazogZmFsc2UsXG5cdFx0XHRcdFx0YWxsb3dlZEJsb2NrczogQUxMT1dFREJMT0NLU1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ3NsaWRlcl9pdGVtIGN5Y2xlX3NsaWRlJyB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

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

/***/ })
/******/ ]);