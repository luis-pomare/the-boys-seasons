/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  color: #b4e197;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #f1eee9;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-items: center;\\r\\n  align-items: center;\\r\\n  background-image:\\r\\n    linear-gradient(\\r\\n      to bottom right,\\r\\n      rgba(0, 0, 0, 0.9) 20%,\\r\\n      rgba(241, 238, 233, 0.5)\\r\\n    );\\r\\n  height: 300px;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  margin: 0 auto;\\r\\n  gap: 100px;\\r\\n  width: 100%;\\r\\n  max-width: 800px;\\r\\n  height: 80px;\\r\\n}\\r\\n\\r\\nnav .logo {\\r\\n  width: 100%;\\r\\n  max-width: 100px;\\r\\n}\\r\\n\\r\\nnav .list-items {\\r\\n  display: flex;\\r\\n  width: 400px;\\r\\n  justify-content: space-between;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.list-items .list-item {\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.list-items .list-item a {\\r\\n  color: #7ad33f;\\r\\n  font-size: 26px;\\r\\n  font-weight: 600;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.list-items .list-item:hover {\\r\\n  color: #b4e197;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  background-color: #73777b;\\r\\n  width: 200px;\\r\\n  height: 300px;\\r\\n  margin: 10px;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 7px;\\r\\n  font-weight: 700;\\r\\n  font-size: 17px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#container {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 10% 20%;\\r\\n  margin: 30px;\\r\\n  overflow-y: visible;\\r\\n  height: 2100px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  height: 30px;\\r\\n  width: 100%;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-top: 20px;\\r\\n  border: 4px groove #73777b;\\r\\n}\\r\\n\\r\\n/* Modal  */\\r\\n\\r\\n.modal {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  background-color: rgb(0, 0, 0);\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  background-color: #fefefe;\\r\\n  margin: 15% auto;\\r\\n  padding: 20px;\\r\\n  border: 1px solid #888;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n#modalContent {\\r\\n  background: #b4e197;\\r\\n  margin: 20% auto;\\r\\n  padding: 10px;\\r\\n  width: 70%;\\r\\n  border: 3px solid green;\\r\\n}\\r\\n\\r\\n#comForm {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 70%;\\r\\n  margin: 5% auto;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n#addCom {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.comInputs {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.comInput {\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.commentBtn {\\r\\n  width: 80px;\\r\\n  background-color: #929992;\\r\\n  border: none;\\r\\n  color: white;\\r\\n  padding: 10px;\\r\\n  text-align: center;\\r\\n  height: 30px;\\r\\n  text-decoration: none;\\r\\n  display: inline-block;\\r\\n  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.commentBtn:hover,\\r\\n.commentBtn:focus {\\r\\n  background-color: #eaf0ea;\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  color: red;\\r\\n  float: right;\\r\\n  font-size: 28px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.close:hover,\\r\\n.close:focus {\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  color: rgb(215, 40, 69);\\r\\n  font-size: 27px;\\r\\n}\\r\\n\\r\\n.likes-counter {\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.likes-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _image_logo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image/logo.jpg */ \"./src/image/logo.jpg\");\n/* harmony import */ var _modules_navListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/navListeners.js */ \"./src/modules/navListeners.js\");\n\n\n\n\n\ndocument.getElementById('logoimg').src = _image_logo_jpg__WEBPACK_IMPORTED_MODULE_2__; // Main logo displaying\n\nwindow.onload = () => {\n  _modules_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSeasonOne();\n  _modules_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLikes();\n  (0,_modules_navListeners_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n};\n\n\n//# sourceURL=webpack://webpacktemplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentCount.js":
/*!*************************************!*\
  !*** ./src/modules/commentCount.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCount = (count) => count.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCount);\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/commentCount.js?");

/***/ }),

/***/ "./src/modules/createComment.js":
/*!**************************************!*\
  !*** ./src/modules/createComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvement.js */ \"./src/modules/involvement.js\");\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCount.js */ \"./src/modules/commentCount.js\");\n\n\n\nconst createComment = async (e, btn) => {\n  e.preventDefault();\n\n  const comment = document.querySelector('#comment');\n  const name = document.querySelector('#name');\n  const comDetail = document.querySelector('#comDetail');\n  const comCount = document.querySelector('#comCount');\n  const form = document.querySelector('#comForm');\n\n  const body = {\n    item_id: btn.id,\n    username: name.value,\n    comment: comment.value,\n  };\n  const postResponse = await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(body);\n  console.log(postResponse);\n  form.reset();\n\n  const commentData = await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_0__.getCommnets)(btn.id);\n\n  comCount.textContent = (0,_commentCount_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentData);\n\n  commentData.forEach((item) => {\n    const p = document.createElement('p');\n    p.className = 'comment-item';\n    p.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;\n    comDetail.appendChild(p);\n  });\n  return commentData;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createComment);\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/createComment.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCommnets\": () => (/* binding */ getCommnets),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mSaRFqdkMnkop7U1e7L5/';\n\nconst postComment = async (body) => {\n  const response = await fetch(`${url}comments`, {\n    method: 'POST',\n    body: JSON.stringify(body),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return (response.text());\n};\n\nconst getCommnets = async (id) => {\n  let data;\n  const dataArray = [{ creation_date: '2022-05-18', username: 'Barbra', comment: 'Wow ! i was on toes when Milk finally learned about the Supes.❤️😁' }];\n  try {\n    const response = await fetch(`${url}comments?item_id=${id}`);\n    data = await response.json();\n    data.forEach((item) => {\n      dataArray.push(item);\n    });\n  } catch (error) {\n    console.log(error);\n  }\n  return dataArray;\n};\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createComment.js */ \"./src/modules/createComment.js\");\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCount.js */ \"./src/modules/commentCount.js\");\n/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./involvement.js */ \"./src/modules/involvement.js\");\n\n\n\n\nclass Modal {\n  constructor() {\n    this.comBtn = document.querySelectorAll('.comments-button');\n    this.commentModal = document.querySelector('#commentModal');\n    this.closeBtn = document.querySelector('.close');\n    this.modalContent = document.querySelector('#modalContent');\n  }\n\n  displayModal = (comBtn, episodes) => {\n    comBtn.forEach((btn) => {\n      btn.addEventListener('click', async () => {\n        /* display modal */\n\n        const commentData = await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_2__.getCommnets)(btn.id);\n        const APIdata = episodes.filter((ep) => ep.id === parseInt(btn.id, 10));\n        this.commentModal.style.display = 'block';\n        this.modalContent.innerHTML = `\n       <img src=\"${APIdata[0].image.medium}\" alt=\"poster\">\n      <h1 style=\"color: red;\">Episode ${APIdata[0].number}</h1>\n       <div class=\"metaData\">\n          <p class=\"meta-data\"> Airdate : ${APIdata[0].airdate} </p>\n          <p class=\"meta-data\"> Name : ${APIdata[0].name} </p>\n          <p class=\"meta-data\"> Episode : ${APIdata[0].number} </p>\n          <p class=\"meta-data\"> Rating: ${APIdata[0].rating.average} </p>\n          <p class=\"meta-data\"> Summary: ${APIdata[0].summary} </p>\n          <br>\n          <h3 class=\"comSection\">Comments <span id=\"comCount\"></span></h3>\n          <div id=\"comDetail\"></div>\n          <form action=\"#\" id=\"comForm\">\n           <h3 id=\"addCom\">Add a Comment</h3>\n         <div class=\"comInputs\">\n           <input type=\"text\" id=\"name\" name=\"name\" class=\"comInput\" placeholder=\"Your Name..\" required>\n           <textarea name=\"comment\" id=\"comment\" class=\"comInput\" cols=\"30\" rows=\"8\" required></textarea>\n         </div>\n          <input type=\"button\" value=\"Submit\" class=\"commentBtn\" id= \"${btn.id}\">\n        </form>\n       </div>`;\n\n        const comCount = document.querySelector('#comCount');\n        comCount.textContent = (0,_commentCount_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentData);\n\n        const comDetail = document.querySelector('#comDetail');\n        commentData.forEach((item) => {\n          const p = document.createElement('p');\n          p.className = 'comment-item';\n          p.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;\n          comDetail.appendChild(p);\n        });\n\n        const commentBtn = document.querySelector('.commentBtn');\n        console.log(commentBtn);\n        commentBtn.addEventListener('click', (e) => (0,_createComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, btn));\n        /* close modal */\n        this.closeBtn.addEventListener('click', () => {\n          this.commentModal.style.display = 'none';\n        });\n\n        window.addEventListener('click', (e) => {\n          if (e.target === this.commentModal) {\n            this.commentModal.style.display = 'none';\n          }\n        });\n      });\n    });\n  }\n\n  getEpisodes = (episodes) => episodes\n}\n\nconst modal = new Modal();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/navListeners.js":
/*!*************************************!*\
  !*** ./src/modules/navListeners.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\n\nfunction navListeners() {\n  document.getElementById('seasonOne').addEventListener('click', () => {\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSeasonOne();\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLikes();\n  });\n\n  document.getElementById('seasonTwo').addEventListener('click', () => {\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSeasonTwo();\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLikes();\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navListeners);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/navListeners.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ \"./src/modules/update.js\");\n\n\nclass Storage {\n  getSeasonOne = async () => {\n    const response = await fetch(\n      'https://api.tvmaze.com/seasons/40764/episodes',\n    );\n    this.seasonOne = await response.json();\n    _update_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].season(this.seasonOne);\n  };\n\n  getSeasonTwo = async () => {\n    const response = await fetch(\n      'https://api.tvmaze.com/seasons/103731/episodes',\n    );\n    this.seasonTwo = await response.json();\n    this.seasonTwo.splice(3, 1);\n    _update_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].season(this.seasonTwo);\n  };\n\n  getLikes = async () => {\n    const response = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mSaRFqdkMnkop7U1e7L5/likes/',\n    );\n    this.likes = await response.json();\n    _update_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].likes(this.likes);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Storage());\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/update.js":
/*!*******************************!*\
  !*** ./src/modules/update.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/modules/modal.js\");\n\n\nclass Update {\n  season(info) {\n    const container = document.getElementById('container');\n    container.innerHTML = '';\n    for (let i = 0; i < info.length; i += 1) {\n      container.innerHTML += `\n      <div class=\"card\">\n        <img\n          src=\"${info[i].image.original}\"\n          class=\"image\"\n          alt=\"card image\"\n        />\n        <div class=\"card-title\">\n          <h2>${info[i].name}</h2>\n          </div>\n        <div class='likes-container'>\n        <i class=\"fa-solid fa-heart\" data-id='${info[i].id}'></i>\n        <p class=\"likes-counter\" data-id='${info[i].id}'>0 likes</p>\n        </div>\n        <button class=\"comments-button\" id=\"${info[i].id}\">Comments</button>\n      </div>\n    `;\n    }\n    this.inUse = true;\n\n    /* getNodeList for comments buttons */\n    const com = document.querySelectorAll('.comments-button');\n    _modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayModal(com, info);\n  }\n\n  likes(info) {\n    const cards = document.getElementById('container').children;\n    for (let i = 0; i < info.length; i += 1) {\n      for (let j = 0; j < cards.length; j += 1) {\n        const element = document.getElementById('container').children[j].children[2]\n          .children[1].dataset.id;\n        if (info[i].item_id === element) {\n          document.getElementById('container').children[\n            j\n          ].children[2].children[1].innerText = `${info[i].likes} likes`;\n          this.found = true;\n        }\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Update());\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/update.js?");

/***/ }),

/***/ "./src/image/logo.jpg":
/*!****************************!*\
  !*** ./src/image/logo.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"66fa15cfdcbeb3fed3f8.jpg\";\n\n//# sourceURL=webpack://webpacktemplate/./src/image/logo.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;