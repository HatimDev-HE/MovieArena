"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  background: #dfdfde;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  background-color: rgb(7, 35, 7);\\r\\n  padding: 2rem;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  gap: 30px;\\r\\n  color: white;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.nav-list li {\\r\\n  cursor: pointer;\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\n.display-list-of-shows {\\r\\n  max-width: 82%;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.shows-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding-bottom: 100px;\\r\\n}\\r\\n\\r\\n.display-show {\\r\\n  width: 420px;\\r\\n  margin: 12px;\\r\\n  background-color: white;\\r\\n  padding: 8px;\\r\\n}\\r\\n\\r\\n.title-like {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.show-likes {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.display-show img {\\r\\n  width: 400px;\\r\\n  height: 500px;\\r\\n}\\r\\n\\r\\n.comment-submit-btn {\\r\\n  width: 250px;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.button_p {\\r\\n  text-align: right;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.close-button {\\r\\n  border: none;\\r\\n  background: none;\\r\\n  font-size: 35px;\\r\\n  color: rgb(49, 46, 206);\\r\\n}\\r\\n\\r\\n.pop-up {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 50px;\\r\\n}\\r\\n\\r\\n.pop-up-img {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin-left: 2%;\\r\\n  margin-right: 2%;\\r\\n}\\r\\n\\r\\n.detail_container {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.display-popup-show {\\r\\n  width: 60%;\\r\\n  background-color: white;\\r\\n  border-radius: 20px;\\r\\n  margin-bottom: 5%;\\r\\n  padding-bottom: 30px;\\r\\n}\\r\\n\\r\\n.like-comment-btns span {\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.show-title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding-top: 15px;\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n.heart-like {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  width: 30%;\\r\\n}\\r\\n\\r\\n.like-heart {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.comment_container {\\r\\n  padding-left: 2%;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nform input {\\r\\n  margin-top: 1%;\\r\\n  margin-bottom: 1%;\\r\\n  width: 80%;\\r\\n  border: solid rgb(54, 54, 54) 0.5px;\\r\\n  border-radius: 8px;\\r\\n  padding: 1%;\\r\\n}\\r\\n\\r\\n.submit_button {\\r\\n  background: rgb(16, 16, 212);\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: rgb(7, 35, 7);\\r\\n  padding: 2rem;\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n\\r\\nsvg {\\r\\n  width: 2rem;\\r\\n  height: 2rem;\\r\\n  margin-right: 1rem;\\r\\n  fill: aliceblue;\\r\\n  background-color: rgb(7, 35, 7);\\r\\n  transition: transform 0.1s;\\r\\n}\\r\\n\\r\\n.icons {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n@media (min-width: 481px) and (min-width: 768px) {\\r\\n  .detail_container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding-left: 2%;\\r\\n  }\\r\\n\\r\\n  .pop-up-img img {\\r\\n    object-fit: cover;\\r\\n    width: 100%;\\r\\n    height: 580px;\\r\\n    border-radius: 8px;\\r\\n    padding-bottom: 20px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) and (max-width: 1100px) {\\r\\n  .pop-up-img img {\\r\\n    object-fit: fill;\\r\\n    width: 100%;\\r\\n    height: 580px;\\r\\n    border-radius: 10px;\\r\\n    padding-bottom: 20px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI.js */ \"./src/modules/UI.js\");\n/* eslint-disable*/\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', async () => {\r\n  await (0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_1__.displayShows)();\r\n});\r\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/APIhandler.js":
/*!***********************************!*\
  !*** ./src/modules/APIhandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable*/\r\n\r\nconst appId = 'KFWAWpNuJb0b9FZEXp7P';\r\nconst fetchTVAPI = async () => {\r\n  const TVResponse = await fetch('https://api.tvmaze.com/shows');\r\n  const getShowResult = await TVResponse.json();\r\n  return getShowResult.slice(6, 18);\r\n};\r\n\r\nconst fetchInvolvementAPI = async () => {\r\n    const involvementAPIResponse = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`);\r\n    const getLikeResult = await involvementAPIResponse.json();\r\n    return getLikeResult;\r\n  };\r\n  \r\n  const submitLike = async (newLike) => {\r\n    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: newLike,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n  };\r\n\r\n  const fetchInvolvementAPIcomments = async (id) => {\r\n    const commentsResponse = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`);\r\n    const getCommentResult = await commentsResponse.json();\r\n    return getCommentResult;\r\n  };\r\n  \r\n  const submitComment = async (newComment, theId, newName) => {\r\n    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: theId,\r\n        username: newName,\r\n        comment: newComment,\r\n  \r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    fetchTVAPI,\r\n    fetchInvolvementAPI,\r\n    submitLike,\r\n    fetchInvolvementAPIcomments,\r\n    submitComment,\r\n  });\n\n//# sourceURL=webpack://webpack/./src/modules/APIhandler.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"displayShows\": () => (/* binding */ displayShows)\n/* harmony export */ });\n/* harmony import */ var _APIhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIhandler */ \"./src/modules/APIhandler.js\");\n/* eslint-disable*/\r\n\r\n\r\nconst displayListOfShows = document.querySelector('.display-list-of-shows');\r\nconst showCounter = document.querySelector('.show-counter');\r\n\r\nconst popUp = document.querySelector('.pop-up');\r\nconst commentPopUp = document.querySelector('.comment');\r\nconst showsContainer = document.querySelector('.shows-container');\r\n\r\nconst Likes = () => {\r\n    const likeButtons = document.getElementsByClassName('like-heart');\r\n    Array.from(likeButtons).forEach((likeButton) => {\r\n      likeButton.addEventListener('click', async (e) => {\r\n        await _APIhandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].submitLike(e.target.id);\r\n        // eslint-disable-next-line no-use-before-define\r\n        displayShows();\r\n      });\r\n    });\r\n  };\r\n\r\n  const commentCounter = (commentData) => commentData.length;\r\n\r\nconst comments = () => {\r\n  const inputName = document.querySelector('.name_input');\r\n  const inputInsights = document.querySelector('.insight_input');\r\n  const selector3 = '.submit_button';\r\n  const commentCounterContainer = document.querySelector('.commnent-counter');\r\n  const commentContainer = document.querySelector('.comments-container');\r\n  document.addEventListener('click', async (e) => {\r\n    const el = e.target;\r\n    e.preventDefault();\r\n    if (!el.matches(selector3)) {\r\n      return;\r\n    }\r\n\r\n    if (inputInsights.value !== '' && inputName.value !== '') {\r\n      await _APIhandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].submitComment(\r\n        inputInsights.value,\r\n        el.id,\r\n        inputName.value,\r\n      );\r\n\r\n      let commentNumber = parseInt(\r\n        commentCounterContainer.innerHTML.slice(9),\r\n        10,\r\n      );\r\n      commentNumber += 1;\r\n      commentCounterContainer.innerHTML = `Comments(${commentNumber})`;\r\n      const comment = document.createElement('div');\r\n      comment.innerHTML = `\r\n        <span>${new Date().toISOString().split('T')[0]}</span>\r\n        <span>${inputName.value}</span>\r\n        <span>${inputInsights.value}</span>\r\n      `;\r\n      commentContainer.append(comment);\r\n      inputName.value = '';\r\n      inputInsights.value = '';\r\n    }\r\n  });\r\n};\r\n\r\nconst openPopUpWindow = () => {\r\n  const commentButtons = document.getElementsByClassName('comment-btn');\r\n  Array.from(commentButtons).forEach((commentButton) => {\r\n    commentButton.addEventListener('click', async (e) => {\r\n      const showData = await _APIhandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchTVAPI();\r\n      const targetId = e.target.id;\r\n      const commentData = await _APIhandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchInvolvementAPIcomments(targetId);\r\n      showsContainer.classList.add('hide');\r\n      popUp.classList.remove('hide');\r\n      commentPopUp.classList.remove('hide');\r\n      const selectedShow = showData.filter(\r\n        (data) => data.id === Number(targetId),\r\n      )[0];\r\n\r\n      popUp.innerHTML = `<div class=\"display-popup-show\">\r\n<p class='button_p'><button type=\"button\" data-close-button class=\"close-button\">&times;</button></p>\r\n         <div class=\"pop-up-img\">  \r\n         <img src=\"${selectedShow.image.original}\" alt=\"\">\r\n           <h3>${selectedShow.name}</h3>\r\n           <p>${selectedShow.summary}</p>\r\n         </div>\r\n         <div class=\"detail_container\">\r\n          <div>\r\n            <p><strong>Language: </strong> ${selectedShow.language}</p>\r\n            <p><strong>Premiered: </strong> ${selectedShow.premiered}</p>\r\n          </div>\r\n        <div>\r\n          <p><strong>Runtime: </strong>${selectedShow.runtime}</p>\r\n          <p><strong >Rating: </strong>${selectedShow.rating.average}</p>\r\n        </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"comment_container\">\r\n          <h3 class=\"commnent-counter\" >Comments(${commentCounter(\r\n    commentData,\r\n  )})</h3> \r\n          <div class=\"comments-container\">        \r\n          ${commentData\r\n    .map(\r\n      (data) => `\r\n        <span>${data.creation_date} </span>\r\n        <span>${data.username}: </span>\r\n        <span>${data.comment}</span><br>\r\n      `,\r\n    )\r\n    .join('')}\r\n    </div>\r\n    <hr>\r\n        </div>\r\n          <form action=\"#\">\r\n          <input id=\"${targetId}\" class=\"name_input\" type=\"text\" placeholder=\"Your name\" name=\"username\" required>\r\n          <input id=\"${targetId}\" class=\"insight_input\" type=\"text\" placeholder=\"Your insights\" name=\"insights\" required>\r\n          <p class=\"button_p\"><button class=\"submit_button btn btn-secondary comment-btn\"  id=\"${targetId}\" type=\"submit\">Comment</button></p>\r\n        </form>\r\n        </div>`;\r\n      comments();\r\n    });\r\n  });\r\n};\r\n\r\nconst closePopUp = () => {\r\n  const selector2 = '.close-button';\r\n\r\n  document.addEventListener('click', async (e) => {\r\n    const el = e.target;\r\n    if (!el.matches(selector2)) {\r\n      return;\r\n    }\r\n    showsContainer.classList.remove('hide');\r\n    popUp.classList.add('hide');\r\n    commentPopUp.classList.add('hide');\r\n  });\r\n};\r\n\r\nconst showCount = async () => {\r\n    const numberOfShows = await _APIhandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchTVAPI();\r\n    showCounter.innerHTML = `Best Shows(${numberOfShows.length})`;\r\n    return numberOfShows.length;\r\n  };\r\n\r\nconst displayShows = async () => {\r\n  const showData = await _APIhandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchTVAPI();\r\n  const involveData = await _APIhandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchInvolvementAPI();\r\n\r\n  const values = showData\r\n    .map(\r\n      (result) => `<div class=\"display-show\">\r\n      <img src=\"${result.image.original}\" alt=\"\">\r\n      <p class=\"show-title\">${result.name}\r\n      <span>\r\n      <a id=${result.id} class=\"like-heart\" href=\"#\">&#9825;</a>\r\n      ${\r\n  involveData.filter(\r\n    (like) => parseInt(like.item_id, 10) === parseInt(result.id, 10),\r\n  )[0].likes\r\n} likes\r\n      </span>\r\n      </p>\r\n      <button id=${\r\n  result.id\r\n} class=\"btn btn-secondary comment-btn\">Comments</button>\r\n      </div>`,\r\n    )\r\n    .join('');\r\n\r\n  displayListOfShows.innerHTML = values;\r\n\r\n  openPopUpWindow();\r\n  closePopUp();\r\n  showCount();\r\n  Likes();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});\n\n//# sourceURL=webpack://webpack/./src/modules/UI.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);