/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

body{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}


:root{
    --color-itemNav: white;
}

.header {
    width: 100vw;
    height: 80px;
    background-color: #83C5BE;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    color: #EDF6F9;
    font-size: 30px;
    font-weight: 600;
    user-select: none;
    background: linear-gradient(90deg, rgba(207,109,22,1) 35%, rgba(138,17,50,1) 65%, rgba(134,15,135,1) 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.container {
    width: 100vw;
    height: 100%;
    background-color: hwb(15 82% 0%);
    display: flex;
}

.navbar {
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    background-color: #006D77;
}

.navbar_elem {
    display: flex;
    flex-direction: column;
}

.itemNav, .addTask, .itemProject {
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    user-select: none;
    color: #FFDDD2;
}

.itemNav:hover, .addTask:hover, .itemProject:hover, .plus:hover {
    background-color:rgba(226, 232, 240, 0.3);
    border-radius: 5px;
    cursor: pointer;
}

.wrapper {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.content {
    width: 100%;
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.task {
    width: 100%;
    height: 70px;
    background-color: #006D77;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
}

.task:hover {
    cursor: pointer;
}

.task_inner {
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.indicator {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 0;
    background-color: red;
    box-shadow: inset -0.5px 1px 3px black;
}

.low {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 0;
    background-color: green;
    box-shadow: inset -0.5px 1px 3px black;
}

.middle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 0;
    background-color: yellow;
    box-shadow: inset -0.5px 1px 3px black;
}

.task_wrapper{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
}

.description {
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.description_up{
    display: flex;
    gap: 5px;
}

.project {
    color: #EDF6F9;
    
}

.text {
    max-width: 700px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #FFDDD2;
}

.title {
    color: #FFDDD2;
}

.date {
    color: #FFDDD2;
}

.button_task {
    display: flex;
    gap: 15px;
    margin-left: auto;
}

.remove, .done {
    background: transparent;
    border: none;
}

.remove:hover, .done:hover {
    cursor: pointer;
}

dialog {
   max-width: 675px;
   width: 100%;
   height: 500px;
   position: absolute;
   left: 50vw;
   top: 50vh;
   transform: translate(-50%, -50%);
   border: 5px solid #006D77;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.25);
}

.form {
    width: 100%;
    height: 100%;
    padding: 16px;
    background-color: #FFDDD2;
    display: flex;
    justify-content: center;
}

form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

form > div {
    width: 100%;
    display: flex;
    justify-content: center;

}

form div > button {
    display: flex;
    align-self: flex-end;
    justify-self: flex-end;
}

form div > h1 {
    width: 350px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #83C5BE;
    border-radius: 5px;
}

fieldset{
    width: 100%;
    height: 100%;
    border: none;
}

.inner_form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.blockWrapper {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    gap: 35px;
}

.block {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.item {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

input {
    width: 240px;
    height: 42px;
    border: 3px solid #006D77;
    border-radius: 6px;
    background-color: #FFDDD2;
    padding: 0 16px;
}

.inner_form > .item {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

textarea {
    max-width: 515px;
    width: 100%;
    height: 150px;
    border: 3px solid #006D77;
    border-radius: 6px;
    background-color: #FFDDD2;
    padding: 16px;
    resize: none;
}

select {
    width: 240px;
    height: 42px;
    border: 3px solid #006D77;
    border-radius: 6px;
    background-color: #FFDDD2;
    padding: 0 16px;
}

.button_box {
    display: flex;
    justify-content: center;
    gap: 60px;
}

button[type="submit"] {
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 20px;
    background-color: #fbbf24;
    box-shadow: black 2px 2px 10px, white 3px 3px 11px;
    display: flex;
    align-items: center;
    justify-content: center
} 

.close{
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 20px;
    background-color: #dc2626;
    box-shadow: black 2px 2px 10px, white 3px 3px 11px;
    display: flex;
    align-items: center;
    justify-content: center;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box\r\n}\r\n\r\nbody{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n:root{\r\n    --color-itemNav: white;\r\n}\r\n\r\n.header {\r\n    width: 100vw;\r\n    height: 80px;\r\n    background-color: #83C5BE;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.logo {\r\n    color: #EDF6F9;\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n    user-select: none;\r\n    background: linear-gradient(90deg, rgba(207,109,22,1) 35%, rgba(138,17,50,1) 65%, rgba(134,15,135,1) 100%);\r\n    background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.container {\r\n    width: 100vw;\r\n    height: 100%;\r\n    background-color: hwb(15 82% 0%);\r\n    display: flex;\r\n}\r\n\r\n.navbar {\r\n    width: 250px;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    padding: 30px;\r\n    background-color: #006D77;\r\n}\r\n\r\n.navbar_elem {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.itemNav, .addTask, .itemProject {\r\n    width: 100%;\r\n    height: 42px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 10px;\r\n    user-select: none;\r\n    color: #FFDDD2;\r\n}\r\n\r\n.itemNav:hover, .addTask:hover, .itemProject:hover, .plus:hover {\r\n    background-color:rgba(226, 232, 240, 0.3);\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.wrapper {\r\n    max-width: 1000px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.content {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 40px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n.task {\r\n    width: 100%;\r\n    height: 70px;\r\n    background-color: #006D77;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.task_inner {\r\n    padding: 10px;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.indicator {\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    padding: 0;\r\n    background-color: red;\r\n    box-shadow: inset -0.5px 1px 3px black;\r\n}\r\n\r\n.low {\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    padding: 0;\r\n    background-color: green;\r\n    box-shadow: inset -0.5px 1px 3px black;\r\n}\r\n\r\n.middle {\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    padding: 0;\r\n    background-color: yellow;\r\n    box-shadow: inset -0.5px 1px 3px black;\r\n}\r\n\r\n.task_wrapper{\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 30px;\r\n}\r\n\r\n.description {\r\n    max-width: 700px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.description_up{\r\n    display: flex;\r\n    gap: 5px;\r\n}\r\n\r\n.project {\r\n    color: #EDF6F9;\r\n    \r\n}\r\n\r\n.text {\r\n    max-width: 700px;\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    color: #FFDDD2;\r\n}\r\n\r\n.title {\r\n    color: #FFDDD2;\r\n}\r\n\r\n.date {\r\n    color: #FFDDD2;\r\n}\r\n\r\n.button_task {\r\n    display: flex;\r\n    gap: 15px;\r\n    margin-left: auto;\r\n}\r\n\r\n.remove, .done {\r\n    background: transparent;\r\n    border: none;\r\n}\r\n\r\n.remove:hover, .done:hover {\r\n    cursor: pointer;\r\n}\r\n\r\ndialog {\r\n   max-width: 675px;\r\n   width: 100%;\r\n   height: 500px;\r\n   position: absolute;\r\n   left: 50vw;\r\n   top: 50vh;\r\n   transform: translate(-50%, -50%);\r\n   border: 5px solid #006D77;\r\n}\r\n\r\ndialog::backdrop {\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.form {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 16px;\r\n    background-color: #FFDDD2;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nform {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 16px;\r\n}\r\n\r\nform > div {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n}\r\n\r\nform div > button {\r\n    display: flex;\r\n    align-self: flex-end;\r\n    justify-self: flex-end;\r\n}\r\n\r\nform div > h1 {\r\n    width: 350px;\r\n    height: 42px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #83C5BE;\r\n    border-radius: 5px;\r\n}\r\n\r\nfieldset{\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n}\r\n\r\n.inner_form {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\n\r\n.blockWrapper {\r\n    width: 100%;\r\n    height: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 35px;\r\n}\r\n\r\n.block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\n\r\ninput {\r\n    width: 240px;\r\n    height: 42px;\r\n    border: 3px solid #006D77;\r\n    border-radius: 6px;\r\n    background-color: #FFDDD2;\r\n    padding: 0 16px;\r\n}\r\n\r\n.inner_form > .item {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ntextarea {\r\n    max-width: 515px;\r\n    width: 100%;\r\n    height: 150px;\r\n    border: 3px solid #006D77;\r\n    border-radius: 6px;\r\n    background-color: #FFDDD2;\r\n    padding: 16px;\r\n    resize: none;\r\n}\r\n\r\nselect {\r\n    width: 240px;\r\n    height: 42px;\r\n    border: 3px solid #006D77;\r\n    border-radius: 6px;\r\n    background-color: #FFDDD2;\r\n    padding: 0 16px;\r\n}\r\n\r\n.button_box {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 60px;\r\n}\r\n\r\nbutton[type=\"submit\"] {\r\n    width: 50px;\r\n    height: 30px;\r\n    border: none;\r\n    border-radius: 20px;\r\n    background-color: #fbbf24;\r\n    box-shadow: black 2px 2px 10px, white 3px 3px 11px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center\r\n} \r\n\r\n.close{\r\n    width: 50px;\r\n    height: 30px;\r\n    border: none;\r\n    border-radius: 20px;\r\n    background-color: #dc2626;\r\n    box-shadow: black 2px 2px 10px, white 3px 3px 11px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/TaskDom.js":
/*!***********************************!*\
  !*** ./src/components/TaskDom.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskDom)
/* harmony export */ });
/* harmony import */ var _src___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/ */ "./src/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/components/dom.js");


// import done from '../svg/done.svg'
// import { Parser } from 'webpack';
// import doneSvg from '../svg/done';

function taskDom(title, priority, deadline, project, descriptionForm) {
    const task = document.createElement('div');
    task.classList.add('task');

    const taskInner = document.createElement('div');
    taskInner.classList.add('task_inner');

    const taskWrapper = document.createElement('div')
    taskWrapper.classList.add('task_wrapper');

    const indicator = document.createElement('div');
    if (priority === 'hight') {
        indicator.classList.add('indicator');
    } else if (priority === 'middle') {
        indicator.classList.remove('indicator');
        indicator.classList.add('middle');
    } else {
        indicator.classList.remove('indicator');
        indicator.classList.add('low');
    } 

    const description = document.createElement('div');
    description.classList.add('description');

    const descriptionUp = document.createElement('div');
    descriptionUp.classList.add('description_up');

    const projectElem = document.createElement('div');
    projectElem.classList.add('project');
    projectElem.textContent = `# ${project}:`;


    const titleEelemnt = document.createElement('div');
    titleEelemnt.textContent = title;
    titleEelemnt.classList.add('title');

    const text = document.createElement('div');
    text.textContent = descriptionForm;
    text.classList.add('text');

    const date = document.createElement('div');
    date.textContent = `Deadline: ${deadline}`; 
    date.classList.add('date'); 

    const buttonTask = document.createElement('div');
    buttonTask.classList.add('button_task');

    const remove = document.createElement('div');
    const svgRemove = '<svg width="30" height="30" fill="#FFDDD2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>'
    remove.innerHTML = svgRemove;
    remove.classList.add('remove');

    buttonTask.appendChild(remove);

    descriptionUp.appendChild(projectElem);
    descriptionUp.appendChild(titleEelemnt);

    description.appendChild(descriptionUp);
    description.appendChild(text);
    description.appendChild(date);

    taskWrapper.appendChild(indicator);
    taskWrapper.appendChild(description);

    taskInner.appendChild(taskWrapper);
    taskInner.appendChild(buttonTask);
    
    task.appendChild(taskInner);

    return task;
}

/***/ }),

/***/ "./src/components/addTask.js":
/*!***********************************!*\
  !*** ./src/components/addTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTaskFn)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/components/createTask.js");
/* harmony import */ var _idGenereate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idGenereate */ "./src/components/idGenereate.js");
// import dom from './dom.js';



function addTaskFn (list, obj) {
    const arr = [];
    
    for (let key in obj) {
        arr.push(obj[key]);
    }

    let i = (0,_idGenereate__WEBPACK_IMPORTED_MODULE_1__.idGenerate)();
    
    list.push(new _createTask__WEBPACK_IMPORTED_MODULE_0__["default"](...arr, i));
}

/***/ }),

/***/ "./src/components/createTask.js":
/*!**************************************!*\
  !*** ./src/components/createTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreatTask)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/components/dom.js");


// const title = document.getElementById('title');
// const date = document.getElementById('deadline');
// const priopity = document.getElementById('priority');
// const project = document.getElementById('project')
// const descriptionForm = document.getElementById('descriptionForm');


class CreatTask {
    constructor (title, priority, deadline, project, descriptionForm, id) {
        this.title = title;
        this.priority = priority;
        this.deadline = deadline;
        this.project = project;
        this.descriptionForm = descriptionForm;
        this.id = id;
    }

}



/***/ }),

/***/ "./src/components/deleteTask.js":
/*!**************************************!*\
  !*** ./src/components/deleteTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTask)
/* harmony export */ });
function deleteTask(array, i) {
    array.splice(i, 1)
}

/***/ }),

/***/ "./src/components/dom.js":
/*!*******************************!*\
  !*** ./src/components/dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domElement = {
    content: document.querySelector('.content'),
    task: document.querySelector('.task'),
    //button
    addTask: document.querySelector('.addTask'),
    today: document.querySelector('#today'),
    completed: document.querySelector('#completed'),
    home: document.querySelector('#home'),
    plus: document.querySelector('.plus'),
    done: document.querySelector('.done'),
    delete: document.querySelector('.delete'),
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domElement);

/***/ }),

/***/ "./src/components/idGenereate.js":
/*!***************************************!*\
  !*** ./src/components/idGenereate.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   idGenerate: () => (/* binding */ idGenerate)
/* harmony export */ });
function idGenerate() {
    let id = Date.now().toString()
    return id;
}

/***/ }),

/***/ "./src/components/projectDom.js":
/*!**************************************!*\
  !*** ./src/components/projectDom.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectDom)
/* harmony export */ });
function projectDom (name) {
    const nav = document.getElementById('navbarElem');
    const project = document.createElement('div');
    project.classList.add('itemProject');

    const svgContainer = document.createElement('div');
    const projectSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFDDD2" viewBox="0 0 24 24" class="" style="color: var(--named-color-grey);"><path fill="currentColor" fill-rule="evenodd" d="M15.994 6.082a.5.5 0 1 0-.987-.164L14.493 9h-3.986l.486-2.918a.5.5 0 1 0-.986-.164L9.493 9H7a.5.5 0 1 0 0 1h2.326l-.666 4H6a.5.5 0 0 0 0 1h2.493l-.486 2.918a.5.5 0 1 0 .986.164L9.507 15h3.986l-.486 2.918a.5.5 0 1 0 .987.164L14.507 15H17a.5.5 0 1 0 0-1h-2.326l.667-4H18a.5.5 0 1 0 0-1h-2.493l.487-2.918ZM14.327 10H10.34l-.667 4h3.987l.667-4Z" clip-rule="evenodd"></path></svg>';
    
    svgContainer.innerHTML = projectSvg;
    const projectText = document.createElement('div');
    projectText.textContent = name
    
    project.appendChild(svgContainer);
    project.appendChild(projectText)
    nav.appendChild(project);
    
    return nav;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dom */ "./src/components/dom.js");
/* harmony import */ var _components_TaskDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TaskDom */ "./src/components/TaskDom.js");
/* harmony import */ var _components_projectDom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/projectDom */ "./src/components/projectDom.js");
/* harmony import */ var _components_addTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/addTask */ "./src/components/addTask.js");
/* harmony import */ var _components_deleteTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/deleteTask */ "./src/components/deleteTask.js");
/* harmony import */ var _components_idGenereate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/idGenereate */ "./src/components/idGenereate.js");


// import createTask from './components/createTask';






function removeAllChildNodes (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const content = document.querySelector('.content');
const addTask = document.querySelector('.addTask');
const dialog = document.querySelector('dialog');
const close = document.querySelector('.close');
const form = document.getElementById('form');
const navbarElem = document.querySelector('#navbarElem');
// const remove = document.querySelectorAll('.remove');
const butonTask = document.querySelectorAll('.button_task');
const task = document.querySelectorAll('.task')

let isChange = false;
let isHome = true;

addTask.addEventListener('click', () => {
    dialog.showModal();
})

close.addEventListener('click', () => {
    dialog.close();
})

let myTask = JSON.parse(localStorage.getItem('myTask')) || [];

localStorage.setItem('myTask', JSON.stringify(myTask))

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
   
    if (isChange === false) {
        (0,_components_addTask__WEBPACK_IMPORTED_MODULE_4__["default"])(myTask, values);
        if(isHome === true) {
            addTaskDom(myTask);
        }
        addProject(values, values.project);
    }
    updateLocalStorage();

    dialog.close();
})

function addTaskDom (obj) {

    removeAllChildNodes(_components_dom__WEBPACK_IMPORTED_MODULE_1__["default"].content);
    for (let i = 0; i < obj.length; i++) {
        let arrValue = Object.values(obj[i]);
        let taskElement = (0,_components_TaskDom__WEBPACK_IMPORTED_MODULE_2__["default"])(...arrValue);
        // taskElement.id = i;
        taskElement.id = (0,_components_idGenereate__WEBPACK_IMPORTED_MODULE_6__.idGenerate)();
        // taskElement.dataset.taskId = obj[i].id;
        _components_dom__WEBPACK_IMPORTED_MODULE_1__["default"].content.appendChild(taskElement);
    }
}

function addProject (value, projectValue) {
    checkAndAddProject(projectValue);
    let project = JSON.parse(localStorage.getItem(projectValue)) || [];
    // let taskId = myTask.length -1; 
    let taskId = (0,_components_idGenereate__WEBPACK_IMPORTED_MODULE_6__.idGenerate)();
    project.push({...value, id: taskId}); 
    localStorage.setItem(projectValue, JSON.stringify(project));
}



function checkAndAddProject (projectName) {
    if (localStorage.getItem(projectName)) {
        return;
    } else {
        (0,_components_projectDom__WEBPACK_IMPORTED_MODULE_3__["default"])(projectName);
    }
}   
//====================================================-=-=-=-=--=====================================================
content.addEventListener('click', (event) => {
    const target = event.target
    let taskElement = target.closest('.task');
    const taskBtn = target.closest('.button_task'); 
    if (taskElement && !taskBtn) {
        console.log('task');
    } else if (taskBtn) {
        let i = +taskElement.id;
        let projectName;
        for (let j = 0; j < myTask.length; j++) {
            if(myTask[j].id === i) {
                projectName = myTask[j].project;
            }
        }
        console.log(projectName);
        (0,_components_deleteTask__WEBPACK_IMPORTED_MODULE_5__["default"])(myTask, i);
        updateLocalStorage();
        addTaskDom(myTask);
        
    }

    // if (taskElement && !taskBtn) {
    //     console.log('task');
    // } else if (taskBtn) {
    //     let taskId = +taskElement.id; // Получаем ID задачи
    //     // Находим проект, к которому принадлежит задача
    //     let projectName = myTask[taskId].project;
    //     // Удаляем задачу из массива myTask
    //     myTask = myTask.filter((task, index) => index !== taskId);
    //     // Обновляем локальное хранилище для myTask
    //     updateLocalStorage();
    //     // Удаляем задачу из соответствующего проекта
    //     if (projectName) {
    //         let projectTasks = JSON.parse(localStorage.getItem(projectName)) || [];
    //         projectTasks = projectTasks.filter(task => task.id !== taskId);
    //         localStorage.setItem(projectName, JSON.stringify(projectTasks));
    //     }
    //     // Обновляем DOM
    //     addTaskDom(myTask);
    // }
   
})

// content.addEventListener('click', (event) => {
//     const target = event.target;
//     let taskElement = target.closest('.task');
//     const taskBtn = target.closest('.button_task');
//     if (taskElement && !taskBtn) {
//         console.log('task');
//     } else if (taskBtn) {
//         let taskId = +taskElement.id; // Получаем ID задачи
//         // Сначала находим проект, к которому принадлежит задача, до её удаления
//         let projectName;
//         for (let task of myTask) {
//             if (task.id === taskId) {
//                 projectName = task.project;
//                 break;
//             }
//         }

//         // Удаляем задачу из массива myTask
//         myTask = myTask.filter((task, index) => index !== taskId);
//         // Обновляем локальное хранилище для myTask
//         updateLocalStorage();

//         // Удаляем задачу из соответствующего проекта
//         if (projectName) {
//             let projectTasks = JSON.parse(localStorage.getItem(projectName)) || [];
//             projectTasks = projectTasks.filter(task => task.id !== taskId);
//             if (projectTasks.length > 0) {
//                 // Сохраняем обновленный массив задач проекта, если он не пуст
//                 localStorage.setItem(projectName, JSON.stringify(projectTasks));
//             } else {
//                 // Если это была последняя задача в проекте, удаляем ключ проекта из локального хранилища
//                 console.log(`Удаляем проект: ${projectName}`);
//                 localStorage.removeItem(projectName);
//             }
//         }
//         // Обновляем DOM
//         addTaskDom(myTask);
//     }
// });

function updateLocalStorage () {
    localStorage.setItem('myTask', JSON.stringify(myTask));
} 

navbarElem.addEventListener('click', (event) => {
    const target = event.target
    if(target.classList.contains('itemProject')) {
        isHome = false;
        const val = JSON.parse(localStorage.getItem(target.textContent))
        addTaskDom(val);
        updateLocalStorage();
    }
})

_components_dom__WEBPACK_IMPORTED_MODULE_1__["default"].home.addEventListener('click', () => {
    isHome = true;
    addTaskDom(myTask);
    updateLocalStorage();
}) 

window.addEventListener('load', () => {
    myTask = JSON.parse(localStorage.getItem('myTask'));

    let project = [];

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'myTask') {
            project.push(localStorage.key(i));
        }
    }

    for (let j = 0; j < project.length; j++) {
        (0,_components_projectDom__WEBPACK_IMPORTED_MODULE_3__["default"])(project[j]);
    }
    addTaskDom(myTask);
})

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDLFFBQVEsa0VBQVU7QUFDbEI7QUFDQTtBQUNBLENBQUM7Ozs7OztVQy9NRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Rhc2tEb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2RlbGV0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaWRHZW5lcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3REb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxufVxyXG5cclxuYm9keXtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbjpyb290e1xyXG4gICAgLS1jb2xvci1pdGVtTmF2OiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNDNUJFO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgY29sb3I6ICNFREY2Rjk7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjA3LDEwOSwyMiwxKSAzNSUsIHJnYmEoMTM4LDE3LDUwLDEpIDY1JSwgcmdiYSgxMzQsMTUsMTM1LDEpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGh3YigxNSA4MiUgMCUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMzBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2RDc3O1xyXG59XHJcblxyXG4ubmF2YmFyX2VsZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pdGVtTmF2LCAuYWRkVGFzaywgLml0ZW1Qcm9qZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjb2xvcjogI0ZGREREMjtcclxufVxyXG5cclxuLml0ZW1OYXY6aG92ZXIsIC5hZGRUYXNrOmhvdmVyLCAuaXRlbVByb2plY3Q6aG92ZXIsIC5wbHVzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMjYsIDIzMiwgMjQwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZENzc7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXNrOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2tfaW5uZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbmRpY2F0b3Ige1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTAuNXB4IDFweCAzcHggYmxhY2s7XHJcbn1cclxuXHJcbi5sb3cge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMC41cHggMXB4IDNweCBibGFjaztcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMC41cHggMXB4IDNweCBibGFjaztcclxufVxyXG5cclxuLnRhc2tfd3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDMwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uX3Vwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgICBjb2xvcjogI0VERjZGOTtcclxuICAgIFxyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgY29sb3I6ICNGRkRERDI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogI0ZGREREMjtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gICAgY29sb3I6ICNGRkRERDI7XHJcbn1cclxuXHJcbi5idXR0b25fdGFzayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZW1vdmUsIC5kb25lIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucmVtb3ZlOmhvdmVyLCAuZG9uZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmRpYWxvZyB7XHJcbiAgIG1heC13aWR0aDogNjc1cHg7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDUwMHB4O1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGxlZnQ6IDUwdnc7XHJcbiAgIHRvcDogNTB2aDtcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgIGJvcmRlcjogNXB4IHNvbGlkICMwMDZENzc7XHJcbn1cclxuXHJcbmRpYWxvZzo6YmFja2Ryb3Age1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRERDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbmZvcm0gPiBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5mb3JtIGRpdiA+IGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5mb3JtIGRpdiA+IGgxIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNDNUJFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5maWVsZHNldHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uaW5uZXJfZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5ibG9ja1dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMzVweDtcclxufVxyXG5cclxuLmJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTJweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwNkQ3NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRERDI7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5pbm5lcl9mb3JtID4gLml0ZW0ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgbWF4LXdpZHRoOiA1MTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDZENzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEREQyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDZENzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEREQyO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG59XHJcblxyXG4uYnV0dG9uX2JveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDYwcHg7XHJcbn1cclxuXHJcbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmJmMjQ7XHJcbiAgICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDEwcHgsIHdoaXRlIDNweCAzcHggMTFweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufSBcclxuXHJcbi5jbG9zZXtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XHJcbiAgICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDEwcHgsIHdoaXRlIDNweCAzcHggMTFweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwR0FBMEc7SUFDMUcscUJBQXFCO0lBQ3JCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFD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QW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0RBQWtEO0lBQ2xELGFBQWE7SUFDYixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0RBQWtEO0lBQ2xELGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gICAgLS1jb2xvci1pdGVtTmF2OiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNDNUJFO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICBjb2xvcjogI0VERjZGOTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIwNywxMDksMjIsMSkgMzUlLCByZ2JhKDEzOCwxNyw1MCwxKSA2NSUsIHJnYmEoMTM0LDE1LDEzNSwxKSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHdiKDE1IDgyJSAwJSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2RDc3O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX2VsZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbU5hdiwgLmFkZFRhc2ssIC5pdGVtUHJvamVjdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjRkZEREQyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbU5hdjpob3ZlciwgLmFkZFRhc2s6aG92ZXIsIC5pdGVtUHJvamVjdDpob3ZlciwgLnBsdXM6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjI2LCAyMzIsIDI0MCwgMC4zKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogNDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZENzc7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrX2lubmVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmluZGljYXRvciB7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMC41cHggMXB4IDNweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmxvdyB7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0wLjVweCAxcHggM3B4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlkZGxlIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0wLjVweCAxcHggM3B4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza193cmFwcGVye1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uX3Vwe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBjb2xvcjogI0VERjZGOTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi50ZXh0IHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICBjb2xvcjogI0ZGREREMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgY29sb3I6ICNGRkRERDI7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gICAgY29sb3I6ICNGRkRERDI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25fdGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUsIC5kb25lIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZTpob3ZlciwgLmRvbmU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyB7XFxyXFxuICAgbWF4LXdpZHRoOiA2NzVweDtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG4gICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICBsZWZ0OiA1MHZ3O1xcclxcbiAgIHRvcDogNTB2aDtcXHJcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICBib3JkZXI6IDVweCBzb2xpZCAjMDA2RDc3O1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2c6OmJhY2tkcm9wIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREREMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBkaXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmZvcm0gZGl2ID4gYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbmZvcm0gZGl2ID4gaDEge1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIGhlaWdodDogNDJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M0M1QkU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXR7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyX2Zvcm0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2NrV3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgIGhlaWdodDogNDJweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwNkQ3NztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEREQyO1xcclxcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5pbm5lcl9mb3JtID4gLml0ZW0ge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG1heC13aWR0aDogNTE1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDA2RDc3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRERDI7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDZENzc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREREMjtcXHJcXG4gICAgcGFkZGluZzogMCAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uX2JveCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmYyNDtcXHJcXG4gICAgYm94LXNoYWRvdzogYmxhY2sgMnB4IDJweCAxMHB4LCB3aGl0ZSAzcHggM3B4IDExcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxyXFxufSBcXHJcXG5cXHJcXG4uY2xvc2V7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXHJcXG4gICAgYm94LXNoYWRvdzogYmxhY2sgMnB4IDJweCAxMHB4LCB3aGl0ZSAzcHggM3B4IDExcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi8uLi9zcmMvJztcclxuaW1wb3J0IGRvbSBmcm9tICcuL2RvbSc7XHJcbi8vIGltcG9ydCBkb25lIGZyb20gJy4uL3N2Zy9kb25lLnN2ZydcclxuLy8gaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnd2VicGFjayc7XHJcbi8vIGltcG9ydCBkb25lU3ZnIGZyb20gJy4uL3N2Zy9kb25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tEb20odGl0bGUsIHByaW9yaXR5LCBkZWFkbGluZSwgcHJvamVjdCwgZGVzY3JpcHRpb25Gb3JtKSB7XHJcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuXHJcbiAgICBjb25zdCB0YXNrSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tJbm5lci5jbGFzc0xpc3QuYWRkKCd0YXNrX2lubmVyJyk7XHJcblxyXG4gICAgY29uc3QgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGFza1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFza193cmFwcGVyJyk7XHJcblxyXG4gICAgY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpZiAocHJpb3JpdHkgPT09ICdoaWdodCcpIHtcclxuICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yJyk7XHJcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnbWlkZGxlJykge1xyXG4gICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdpbmRpY2F0b3InKTtcclxuICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnbWlkZGxlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdpbmRpY2F0b3InKTtcclxuICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnbG93Jyk7XHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uVXAuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25fdXAnKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdEVsZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xyXG4gICAgcHJvamVjdEVsZW0udGV4dENvbnRlbnQgPSBgIyAke3Byb2plY3R9OmA7XHJcblxyXG5cclxuICAgIGNvbnN0IHRpdGxlRWVsZW1udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGl0bGVFZWxlbW50LnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICB0aXRsZUVlbGVtbnQuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25Gb3JtO1xyXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGBEZWFkbGluZTogJHtkZWFkbGluZX1gOyBcclxuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpOyBcclxuXHJcbiAgICBjb25zdCBidXR0b25UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b25UYXNrLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl90YXNrJyk7XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzdmdSZW1vdmUgPSAnPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBmaWxsPVwiI0ZGREREMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnRyYXNoLWNhbi1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTcsNkgxN1YxOUg3VjZNOSw4VjE3SDExVjhIOU0xMyw4VjE3SDE1VjhIMTNaXCIgLz48L3N2Zz4nXHJcbiAgICByZW1vdmUuaW5uZXJIVE1MID0gc3ZnUmVtb3ZlO1xyXG4gICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xyXG5cclxuICAgIGJ1dHRvblRhc2suYXBwZW5kQ2hpbGQocmVtb3ZlKTtcclxuXHJcbiAgICBkZXNjcmlwdGlvblVwLmFwcGVuZENoaWxkKHByb2plY3RFbGVtKTtcclxuICAgIGRlc2NyaXB0aW9uVXAuYXBwZW5kQ2hpbGQodGl0bGVFZWxlbW50KTtcclxuXHJcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblVwKTtcclxuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcblxyXG4gICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKTtcclxuICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICB0YXNrSW5uZXIuYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpO1xyXG4gICAgdGFza0lubmVyLmFwcGVuZENoaWxkKGJ1dHRvblRhc2spO1xyXG4gICAgXHJcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbm5lcik7XHJcblxyXG4gICAgcmV0dXJuIHRhc2s7XHJcbn0iLCIvLyBpbXBvcnQgZG9tIGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9jcmVhdGVUYXNrJztcclxuaW1wb3J0IHsgaWRHZW5lcmF0ZSB9IGZyb20gJy4vaWRHZW5lcmVhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFza0ZuIChsaXN0LCBvYmopIHtcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgYXJyLnB1c2gob2JqW2tleV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpID0gaWRHZW5lcmF0ZSgpO1xyXG4gICAgXHJcbiAgICBsaXN0LnB1c2gobmV3IGNyZWF0ZVRhc2soLi4uYXJyLCBpKSk7XHJcbn0iLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tJ1xyXG5cclxuLy8gY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuLy8gY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWFkbGluZScpO1xyXG4vLyBjb25zdCBwcmlvcGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpO1xyXG4vLyBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKVxyXG4vLyBjb25zdCBkZXNjcmlwdGlvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25Gb3JtJyk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgcHJpb3JpdHksIGRlYWRsaW5lLCBwcm9qZWN0LCBkZXNjcmlwdGlvbkZvcm0sIGlkKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmRlYWRsaW5lID0gZGVhZGxpbmU7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uRm9ybSA9IGRlc2NyaXB0aW9uRm9ybTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUYXNrKGFycmF5LCBpKSB7XHJcbiAgICBhcnJheS5zcGxpY2UoaSwgMSlcclxufSIsImNvbnN0IGRvbUVsZW1lbnQgPSB7XHJcbiAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLFxyXG4gICAgdGFzazogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKSxcclxuICAgIC8vYnV0dG9uXHJcbiAgICBhZGRUYXNrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFzaycpLFxyXG4gICAgdG9kYXk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpLFxyXG4gICAgY29tcGxldGVkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkJyksXHJcbiAgICBob21lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpLFxyXG4gICAgcGx1czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXMnKSxcclxuICAgIGRvbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb25lJyksXHJcbiAgICBkZWxldGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tRWxlbWVudDsiLCJleHBvcnQgZnVuY3Rpb24gaWRHZW5lcmF0ZSgpIHtcclxuICAgIGxldCBpZCA9IERhdGUubm93KCkudG9TdHJpbmcoKVxyXG4gICAgcmV0dXJuIGlkO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdERvbSAobmFtZSkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhckVsZW0nKTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnaXRlbVByb2plY3QnKTtcclxuXHJcbiAgICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHByb2plY3RTdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgZmlsbD1cIiNGRkRERDJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgY2xhc3M9XCJcIiBzdHlsZT1cImNvbG9yOiB2YXIoLS1uYW1lZC1jb2xvci1ncmV5KTtcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTUuOTk0IDYuMDgyYS41LjUgMCAxIDAtLjk4Ny0uMTY0TDE0LjQ5MyA5aC0zLjk4NmwuNDg2LTIuOTE4YS41LjUgMCAxIDAtLjk4Ni0uMTY0TDkuNDkzIDlIN2EuNS41IDAgMSAwIDAgMWgyLjMyNmwtLjY2NiA0SDZhLjUuNSAwIDAgMCAwIDFoMi40OTNsLS40ODYgMi45MThhLjUuNSAwIDEgMCAuOTg2LjE2NEw5LjUwNyAxNWgzLjk4NmwtLjQ4NiAyLjkxOGEuNS41IDAgMSAwIC45ODcuMTY0TDE0LjUwNyAxNUgxN2EuNS41IDAgMSAwIDAtMWgtMi4zMjZsLjY2Ny00SDE4YS41LjUgMCAxIDAgMC0xaC0yLjQ5M2wuNDg3LTIuOTE4Wk0xNC4zMjcgMTBIMTAuMzRsLS42NjcgNGgzLjk4N2wuNjY3LTRaXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD48L3N2Zz4nO1xyXG4gICAgXHJcbiAgICBzdmdDb250YWluZXIuaW5uZXJIVE1MID0gcHJvamVjdFN2ZztcclxuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IG5hbWVcclxuICAgIFxyXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xyXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dClcclxuICAgIG5hdi5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5hdjtcclxufVxyXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGRvbSBmcm9tICcuL2NvbXBvbmVudHMvZG9tJztcclxuLy8gaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9jb21wb25lbnRzL2NyZWF0ZVRhc2snO1xyXG5pbXBvcnQgdGFza0RvbSBmcm9tICcuL2NvbXBvbmVudHMvVGFza0RvbSc7XHJcbmltcG9ydCBwcm9qZWN0RG9tIGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0RG9tJztcclxuaW1wb3J0IGFkZFRhc2tGbiBmcm9tICcuL2NvbXBvbmVudHMvYWRkVGFzayc7XHJcbmltcG9ydCBkZWxldGVUYXNrIGZyb20gJy4vY29tcG9uZW50cy9kZWxldGVUYXNrJztcclxuaW1wb3J0IHsgaWRHZW5lcmF0ZSB9IGZyb20gJy4vY29tcG9uZW50cy9pZEdlbmVyZWF0ZSc7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzIChwYXJlbnQpIHtcclxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2snKTtcclxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XHJcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xyXG5jb25zdCBuYXZiYXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhckVsZW0nKTtcclxuLy8gY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZScpO1xyXG5jb25zdCBidXRvblRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uX3Rhc2snKTtcclxuY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcclxuXHJcbmxldCBpc0NoYW5nZSA9IGZhbHNlO1xyXG5sZXQgaXNIb21lID0gdHJ1ZTtcclxuXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbn0pXHJcblxyXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG59KVxyXG5cclxubGV0IG15VGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VGFzaycpKSB8fCBbXTtcclxuXHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRhc2snLCBKU09OLnN0cmluZ2lmeShteVRhc2spKVxyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpO1xyXG4gICBcclxuICAgIGlmIChpc0NoYW5nZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBhZGRUYXNrRm4obXlUYXNrLCB2YWx1ZXMpO1xyXG4gICAgICAgIGlmKGlzSG9tZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBhZGRUYXNrRG9tKG15VGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZFByb2plY3QodmFsdWVzLCB2YWx1ZXMucHJvamVjdCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuXHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tEb20gKG9iaikge1xyXG5cclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoZG9tLmNvbnRlbnQpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYXJyVmFsdWUgPSBPYmplY3QudmFsdWVzKG9ialtpXSk7XHJcbiAgICAgICAgbGV0IHRhc2tFbGVtZW50ID0gdGFza0RvbSguLi5hcnJWYWx1ZSk7XHJcbiAgICAgICAgLy8gdGFza0VsZW1lbnQuaWQgPSBpO1xyXG4gICAgICAgIHRhc2tFbGVtZW50LmlkID0gaWRHZW5lcmF0ZSgpO1xyXG4gICAgICAgIC8vIHRhc2tFbGVtZW50LmRhdGFzZXQudGFza0lkID0gb2JqW2ldLmlkO1xyXG4gICAgICAgIGRvbS5jb250ZW50LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdCAodmFsdWUsIHByb2plY3RWYWx1ZSkge1xyXG4gICAgY2hlY2tBbmRBZGRQcm9qZWN0KHByb2plY3RWYWx1ZSk7XHJcbiAgICBsZXQgcHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdFZhbHVlKSkgfHwgW107XHJcbiAgICAvLyBsZXQgdGFza0lkID0gbXlUYXNrLmxlbmd0aCAtMTsgXHJcbiAgICBsZXQgdGFza0lkID0gaWRHZW5lcmF0ZSgpO1xyXG4gICAgcHJvamVjdC5wdXNoKHsuLi52YWx1ZSwgaWQ6IHRhc2tJZH0pOyBcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RWYWx1ZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQW5kQWRkUHJvamVjdCAocHJvamVjdE5hbWUpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmFtZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2plY3REb20ocHJvamVjdE5hbWUpO1xyXG4gICAgfVxyXG59ICAgXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS09LT0tPS09LS09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcclxuICAgIGxldCB0YXNrRWxlbWVudCA9IHRhcmdldC5jbG9zZXN0KCcudGFzaycpO1xyXG4gICAgY29uc3QgdGFza0J0biA9IHRhcmdldC5jbG9zZXN0KCcuYnV0dG9uX3Rhc2snKTsgXHJcbiAgICBpZiAodGFza0VsZW1lbnQgJiYgIXRhc2tCdG4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGFzaycpO1xyXG4gICAgfSBlbHNlIGlmICh0YXNrQnRuKSB7XHJcbiAgICAgICAgbGV0IGkgPSArdGFza0VsZW1lbnQuaWQ7XHJcbiAgICAgICAgbGV0IHByb2plY3ROYW1lO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbXlUYXNrLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmKG15VGFza1tqXS5pZCA9PT0gaSkge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWUgPSBteVRhc2tbal0ucHJvamVjdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgZGVsZXRlVGFzayhteVRhc2ssIGkpO1xyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIGFkZFRhc2tEb20obXlUYXNrKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiAodGFza0VsZW1lbnQgJiYgIXRhc2tCdG4pIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygndGFzaycpO1xyXG4gICAgLy8gfSBlbHNlIGlmICh0YXNrQnRuKSB7XHJcbiAgICAvLyAgICAgbGV0IHRhc2tJZCA9ICt0YXNrRWxlbWVudC5pZDsgLy8g0J/QvtC70YPRh9Cw0LXQvCBJRCDQt9Cw0LTQsNGH0LhcclxuICAgIC8vICAgICAvLyDQndCw0YXQvtC00LjQvCDQv9GA0L7QtdC60YIsINC6INC60L7RgtC+0YDQvtC80YMg0L/RgNC40L3QsNC00LvQtdC20LjRgiDQt9Cw0LTQsNGH0LBcclxuICAgIC8vICAgICBsZXQgcHJvamVjdE5hbWUgPSBteVRhc2tbdGFza0lkXS5wcm9qZWN0O1xyXG4gICAgLy8gICAgIC8vINCj0LTQsNC70Y/QtdC8INC30LDQtNCw0YfRgyDQuNC3INC80LDRgdGB0LjQstCwIG15VGFza1xyXG4gICAgLy8gICAgIG15VGFzayA9IG15VGFzay5maWx0ZXIoKHRhc2ssIGluZGV4KSA9PiBpbmRleCAhPT0gdGFza0lkKTtcclxuICAgIC8vICAgICAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0LvQvtC60LDQu9GM0L3QvtC1INGF0YDQsNC90LjQu9C40YnQtSDQtNC70Y8gbXlUYXNrXHJcbiAgICAvLyAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAvLyAgICAgLy8g0KPQtNCw0LvRj9C10Lwg0LfQsNC00LDRh9GDINC40Lcg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdCz0L4g0L/RgNC+0LXQutGC0LBcclxuICAgIC8vICAgICBpZiAocHJvamVjdE5hbWUpIHtcclxuICAgIC8vICAgICAgICAgbGV0IHByb2plY3RUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKSB8fCBbXTtcclxuICAgIC8vICAgICAgICAgcHJvamVjdFRhc2tzID0gcHJvamVjdFRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XHJcbiAgICAvLyAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0VGFza3MpKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8g0J7QsdC90L7QstC70Y/QtdC8IERPTVxyXG4gICAgLy8gICAgIGFkZFRhc2tEb20obXlUYXNrKTtcclxuICAgIC8vIH1cclxuICAgXHJcbn0pXHJcblxyXG4vLyBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbi8vICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbi8vICAgICBsZXQgdGFza0VsZW1lbnQgPSB0YXJnZXQuY2xvc2VzdCgnLnRhc2snKTtcclxuLy8gICAgIGNvbnN0IHRhc2tCdG4gPSB0YXJnZXQuY2xvc2VzdCgnLmJ1dHRvbl90YXNrJyk7XHJcbi8vICAgICBpZiAodGFza0VsZW1lbnQgJiYgIXRhc2tCdG4pIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygndGFzaycpO1xyXG4vLyAgICAgfSBlbHNlIGlmICh0YXNrQnRuKSB7XHJcbi8vICAgICAgICAgbGV0IHRhc2tJZCA9ICt0YXNrRWxlbWVudC5pZDsgLy8g0J/QvtC70YPRh9Cw0LXQvCBJRCDQt9Cw0LTQsNGH0LhcclxuLy8gICAgICAgICAvLyDQodC90LDRh9Cw0LvQsCDQvdCw0YXQvtC00LjQvCDQv9GA0L7QtdC60YIsINC6INC60L7RgtC+0YDQvtC80YMg0L/RgNC40L3QsNC00LvQtdC20LjRgiDQt9Cw0LTQsNGH0LAsINC00L4g0LXRkSDRg9C00LDQu9C10L3QuNGPXHJcbi8vICAgICAgICAgbGV0IHByb2plY3ROYW1lO1xyXG4vLyAgICAgICAgIGZvciAobGV0IHRhc2sgb2YgbXlUYXNrKSB7XHJcbi8vICAgICAgICAgICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHtcclxuLy8gICAgICAgICAgICAgICAgIHByb2plY3ROYW1lID0gdGFzay5wcm9qZWN0O1xyXG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC8vINCj0LTQsNC70Y/QtdC8INC30LDQtNCw0YfRgyDQuNC3INC80LDRgdGB0LjQstCwIG15VGFza1xyXG4vLyAgICAgICAgIG15VGFzayA9IG15VGFzay5maWx0ZXIoKHRhc2ssIGluZGV4KSA9PiBpbmRleCAhPT0gdGFza0lkKTtcclxuLy8gICAgICAgICAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0LvQvtC60LDQu9GM0L3QvtC1INGF0YDQsNC90LjQu9C40YnQtSDQtNC70Y8gbXlUYXNrXHJcbi8vICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcblxyXG4vLyAgICAgICAgIC8vINCj0LTQsNC70Y/QtdC8INC30LDQtNCw0YfRgyDQuNC3INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LXQs9C+INC/0YDQvtC10LrRgtCwXHJcbi8vICAgICAgICAgaWYgKHByb2plY3ROYW1lKSB7XHJcbi8vICAgICAgICAgICAgIGxldCBwcm9qZWN0VGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSkgfHwgW107XHJcbi8vICAgICAgICAgICAgIHByb2plY3RUYXNrcyA9IHByb2plY3RUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xyXG4vLyAgICAgICAgICAgICBpZiAocHJvamVjdFRhc2tzLmxlbmd0aCA+IDApIHtcclxuLy8gICAgICAgICAgICAgICAgIC8vINCh0L7RhdGA0LDQvdGP0LXQvCDQvtCx0L3QvtCy0LvQtdC90L3Ri9C5INC80LDRgdGB0LjQsiDQt9Cw0LTQsNGHINC/0YDQvtC10LrRgtCwLCDQtdGB0LvQuCDQvtC9INC90LUg0L/Rg9GB0YJcclxuLy8gICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0VGFza3MpKTtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INGN0YLQviDQsdGL0LvQsCDQv9C+0YHQu9C10LTQvdGP0Y8g0LfQsNC00LDRh9CwINCyINC/0YDQvtC10LrRgtC1LCDRg9C00LDQu9GP0LXQvCDQutC70Y7RhyDQv9GA0L7QtdC60YLQsCDQuNC3INC70L7QutCw0LvRjNC90L7Qs9C+INGF0YDQsNC90LjQu9C40YnQsFxyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCj0LTQsNC70Y/QtdC8INC/0YDQvtC10LrRgjogJHtwcm9qZWN0TmFtZX1gKTtcclxuLy8gICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3ROYW1lKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAvLyDQntCx0L3QvtCy0LvRj9C10LwgRE9NXHJcbi8vICAgICAgICAgYWRkVGFza0RvbShteVRhc2spO1xyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSAoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUYXNrJywgSlNPTi5zdHJpbmdpZnkobXlUYXNrKSk7XHJcbn0gXHJcblxyXG5uYXZiYXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcclxuICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1Qcm9qZWN0JykpIHtcclxuICAgICAgICBpc0hvbWUgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCB2YWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhcmdldC50ZXh0Q29udGVudCkpXHJcbiAgICAgICAgYWRkVGFza0RvbSh2YWwpO1xyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuZG9tLmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpc0hvbWUgPSB0cnVlO1xyXG4gICAgYWRkVGFza0RvbShteVRhc2spO1xyXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbn0pIFxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBteVRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRhc2snKSk7XHJcblxyXG4gICAgbGV0IHByb2plY3QgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2Uua2V5KGkpICE9PSAnbXlUYXNrJykge1xyXG4gICAgICAgICAgICBwcm9qZWN0LnB1c2gobG9jYWxTdG9yYWdlLmtleShpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHByb2plY3REb20ocHJvamVjdFtqXSk7XHJcbiAgICB9XHJcbiAgICBhZGRUYXNrRG9tKG15VGFzayk7XHJcbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=