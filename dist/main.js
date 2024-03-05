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
/* harmony import */ var _components_createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/createTask */ "./src/components/createTask.js");
/* harmony import */ var _components_TaskDom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TaskDom */ "./src/components/TaskDom.js");
/* harmony import */ var _components_projectDom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projectDom */ "./src/components/projectDom.js");






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
// const task = document.querySelectorAll('.task'); 

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

    addTaskFn(values);
    if(isHome === true) {
        addTaskDom(myTask);
    }
    addProject(values, values.project);
    updateLocalStorage();

    dialog.close();
})

function addTaskFn (obj) {
    const arr = [];
    
    for (let key in obj) {
        arr.push(obj[key]);
    }

    let i = 0;

    for (i; i < myTask.length; i++) {
        i = i;
    }
    
    myTask.push(new _components_createTask__WEBPACK_IMPORTED_MODULE_2__["default"](...arr, i));
}

function addTaskDom (obj) {

    removeAllChildNodes(_components_dom__WEBPACK_IMPORTED_MODULE_1__["default"].content);
    for (let i = 0; i < obj.length; i++) {
        let arrValue = Object.values(obj[i]);
        // dom.content.appendChild(taskDom(...arrValue))
        let taskElement = (0,_components_TaskDom__WEBPACK_IMPORTED_MODULE_3__["default"])(...arrValue);
        taskElement.id = i;
        _components_dom__WEBPACK_IMPORTED_MODULE_1__["default"].content.appendChild(taskElement);
    }
}

function addProject (value, projectValue) {
    checkAndAddProject(projectValue);
    let project = JSON.parse(localStorage.getItem(projectValue)) || []; 
    project.push(value); 
    localStorage.setItem(projectValue, JSON.stringify(project));
}

function checkAndAddProject (projectName) {
    if( localStorage.getItem(projectName)) {
        return;
    } else {
        (0,_components_projectDom__WEBPACK_IMPORTED_MODULE_4__["default"])(projectName);
    }
}   

function updateLocalStorage () {
    localStorage.setItem('myTask', JSON.stringify(myTask));
} 

navbarElem.addEventListener('click', (event) => {
    const target = event.target
    if(target.classList.contains('itemProject')) {
        isHome = false;
        const val = JSON.parse(localStorage.getItem(target.textContent))
        addTaskDom(val);
        updateLocalStorage ()
    }
})

_components_dom__WEBPACK_IMPORTED_MODULE_1__["default"].home.addEventListener('click', () => {
    isHome = true;
    addTaskDom(myTask);
    updateLocalStorage();
}) 
//==================================================================================
content.addEventListener('click', (event) => {
    const target = event.target;
    let div = target.closest('.task');

    if (div && !target.closest('.button_task')) {
        let taskId = div.id;
        const taskData = JSON.parse(localStorage.getItem('myTask'));
        let obj = taskData[taskId];

        let formChange = new FormData(form);
        for (let key in obj) {
            if (key !== 'id') {
                formChange.set(key, obj[key]);
            }
        }

        for (let pair of formChange.entries()) {
            const [key, value] = pair;
            document.getElementById(key).value = value;
        }

        // console.log(myTask[taskId]);

        dialog.showModal();

        form.addEventListener('submit', (e) => {
            e.preventDefault();
        
            for (const pair of formChange.entries()) {
                const [key, value] = pair;
                myTask[taskId][key] = value;
            }
        
            localStorage.setItem('myTask', JSON.stringify(myTask)); // Обновляем данные в localStorage
        
            updateLocalStorage();
            dialog.close();
        });
    }
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
        (0,_components_projectDom__WEBPACK_IMPORTED_MODULE_4__["default"])(project[j]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLDZCQUE2QixrQkFBa0IsbUJBQW1CLG1DQUFtQyxhQUFhLHFCQUFxQixzQkFBc0Isc0JBQXNCLCtCQUErQixLQUFLLGtCQUFrQiwrQkFBK0IsS0FBSyxpQkFBaUIscUJBQXFCLHFCQUFxQixrQ0FBa0Msc0JBQXNCLGdDQUFnQyw0QkFBNEIsS0FBSyxlQUFlLHVCQUF1Qix3QkFBd0IseUJBQXlCLDBCQUEwQixtSEFBbUgsOEJBQThCLDZDQUE2QyxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLHlDQUF5QyxzQkFBc0IsS0FBSyxpQkFBaUIscUJBQXFCLHFCQUFxQixzQkFBc0IsK0JBQStCLGtCQUFrQixzQkFBc0Isa0NBQWtDLEtBQUssc0JBQXNCLHNCQUFzQiwrQkFBK0IsS0FBSywwQ0FBMEMsb0JBQW9CLHFCQUFxQixzQkFBc0IsNEJBQTRCLGtCQUFrQixzQkFBc0IsMEJBQTBCLHVCQUF1QixLQUFLLHlFQUF5RSxrREFBa0QsMkJBQTJCLHdCQUF3QixLQUFLLGtCQUFrQiwwQkFBMEIsb0JBQW9CLHVCQUF1QixzQkFBc0IsZ0NBQWdDLEtBQUssa0JBQWtCLG9CQUFvQixxQkFBcUIsc0JBQXNCLHNCQUFzQiwrQkFBK0Isa0JBQWtCLEtBQUssZUFBZSxvQkFBb0IscUJBQXFCLGtDQUFrQyxzQkFBc0IsMkJBQTJCLHNCQUFzQiw0QkFBNEIsS0FBSyxxQkFBcUIsd0JBQXdCLEtBQUsscUJBQXFCLHNCQUFzQixvQkFBb0Isc0JBQXNCLDRCQUE0Qix1Q0FBdUMsS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQiwyQkFBMkIsbUJBQW1CLDhCQUE4QiwrQ0FBK0MsS0FBSyxjQUFjLG9CQUFvQixxQkFBcUIsMkJBQTJCLG1CQUFtQixnQ0FBZ0MsK0NBQStDLEtBQUssaUJBQWlCLG9CQUFvQixxQkFBcUIsMkJBQTJCLG1CQUFtQixpQ0FBaUMsK0NBQStDLEtBQUssc0JBQXNCLG9CQUFvQixzQkFBc0IsNEJBQTRCLGtCQUFrQixLQUFLLHNCQUFzQix5QkFBeUIsb0JBQW9CLHNCQUFzQiwrQkFBK0IsS0FBSyx3QkFBd0Isc0JBQXNCLGlCQUFpQixLQUFLLGtCQUFrQix1QkFBdUIsYUFBYSxlQUFlLHlCQUF5QixvQkFBb0IsNEJBQTRCLHlCQUF5QixnQ0FBZ0MsdUJBQXVCLEtBQUssZ0JBQWdCLHVCQUF1QixLQUFLLGVBQWUsdUJBQXVCLEtBQUssc0JBQXNCLHNCQUFzQixrQkFBa0IsMEJBQTBCLEtBQUssd0JBQXdCLGdDQUFnQyxxQkFBcUIsS0FBSyxvQ0FBb0Msd0JBQXdCLEtBQUssZ0JBQWdCLHdCQUF3QixtQkFBbUIscUJBQXFCLDBCQUEwQixrQkFBa0IsaUJBQWlCLHdDQUF3QyxpQ0FBaUMsS0FBSywwQkFBMEIsNENBQTRDLEtBQUssZUFBZSxvQkFBb0IscUJBQXFCLHNCQUFzQixrQ0FBa0Msc0JBQXNCLGdDQUFnQyxLQUFLLGNBQWMsb0JBQW9CLHFCQUFxQixzQkFBc0IsK0JBQStCLDRCQUE0QixrQkFBa0IsS0FBSyxvQkFBb0Isb0JBQW9CLHNCQUFzQixnQ0FBZ0MsU0FBUywyQkFBMkIsc0JBQXNCLDZCQUE2QiwrQkFBK0IsS0FBSyx1QkFBdUIscUJBQXFCLHFCQUFxQixzQkFBc0IsNEJBQTRCLGdDQUFnQyxrQ0FBa0MsMkJBQTJCLEtBQUssaUJBQWlCLG9CQUFvQixxQkFBcUIscUJBQXFCLEtBQUsscUJBQXFCLG9CQUFvQixxQkFBcUIsc0JBQXNCLCtCQUErQixzQ0FBc0MsS0FBSyx1QkFBdUIsb0JBQW9CLG9CQUFvQixzQkFBc0IsZ0NBQWdDLGtCQUFrQixLQUFLLGdCQUFnQixzQkFBc0IsK0JBQStCLGtCQUFrQixLQUFLLGVBQWUsc0JBQXNCLCtCQUErQixrQkFBa0IsS0FBSyxlQUFlLHFCQUFxQixxQkFBcUIsa0NBQWtDLDJCQUEyQixrQ0FBa0Msd0JBQXdCLEtBQUssNkJBQTZCLHFCQUFxQixzQkFBc0IsZ0NBQWdDLDRCQUE0QixLQUFLLGtCQUFrQix5QkFBeUIsb0JBQW9CLHNCQUFzQixrQ0FBa0MsMkJBQTJCLGtDQUFrQyxzQkFBc0IscUJBQXFCLEtBQUssZ0JBQWdCLHFCQUFxQixxQkFBcUIsa0NBQWtDLDJCQUEyQixrQ0FBa0Msd0JBQXdCLEtBQUsscUJBQXFCLHNCQUFzQixnQ0FBZ0Msa0JBQWtCLEtBQUssaUNBQWlDLG9CQUFvQixxQkFBcUIscUJBQXFCLDRCQUE0QixrQ0FBa0MsMkRBQTJELHNCQUFzQiw0QkFBNEIscUNBQXFDLGVBQWUsb0JBQW9CLHFCQUFxQixxQkFBcUIsNEJBQTRCLGtDQUFrQywyREFBMkQsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsS0FBSywyQkFBMkI7QUFDai9TO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDelcxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JvQjtBQUNJO0FBQ3hCO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDYlY7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUtBQXlLO0FBQ3pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJxQjtBQUNjO0FBQ2M7QUFDTjtBQUNNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOERBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQUc7QUFDM0Isb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0EsMEJBQTBCLCtEQUFPO0FBQ2pDO0FBQ0EsUUFBUSx1REFBRztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFFBQVEsa0VBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsdURBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDLFFBQVEsa0VBQVU7QUFDbEI7QUFDQTtBQUNBLENBQUM7Ozs7OztVQzdLRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Rhc2tEb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdERvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxuOnJvb3R7XHJcbiAgICAtLWNvbG9yLWl0ZW1OYXY6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M0M1QkU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBjb2xvcjogI0VERjZGOTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMDcsMTA5LDIyLDEpIDM1JSwgcmdiYSgxMzgsMTcsNTAsMSkgNjUlLCByZ2JhKDEzNCwxNSwxMzUsMSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHdiKDE1IDgyJSAwJSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZENzc7XHJcbn1cclxuXHJcbi5uYXZiYXJfZWxlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLml0ZW1OYXYsIC5hZGRUYXNrLCAuaXRlbVByb2plY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGNvbG9yOiAjRkZEREQyO1xyXG59XHJcblxyXG4uaXRlbU5hdjpob3ZlciwgLmFkZFRhc2s6aG92ZXIsIC5pdGVtUHJvamVjdDpob3ZlciwgLnBsdXM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIyNiwgMjMyLCAyNDAsIDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi50YXNrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNkQ3NztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2s6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFza19pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmluZGljYXRvciB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMC41cHggMXB4IDNweCBibGFjaztcclxufVxyXG5cclxuLmxvdyB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0wLjVweCAxcHggM3B4IGJsYWNrO1xyXG59XHJcblxyXG4ubWlkZGxlIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0wLjVweCAxcHggM3B4IGJsYWNrO1xyXG59XHJcblxyXG4udGFza193cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMzBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb25fdXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0IHtcclxuICAgIGNvbG9yOiAjRURGNkY5O1xyXG4gICAgXHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBjb2xvcjogI0ZGREREMjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjRkZEREQyO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBjb2xvcjogI0ZGREREMjtcclxufVxyXG5cclxuLmJ1dHRvbl90YXNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLnJlbW92ZSwgLmRvbmUge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5yZW1vdmU6aG92ZXIsIC5kb25lOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZGlhbG9nIHtcclxuICAgbWF4LXdpZHRoOiA2NzVweDtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogNTAwcHg7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgbGVmdDogNTB2dztcclxuICAgdG9wOiA1MHZoO1xyXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgYm9yZGVyOiA1cHggc29saWQgIzAwNkQ3NztcclxufVxyXG5cclxuZGlhbG9nOjpiYWNrZHJvcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREREMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTZweDtcclxufVxyXG5cclxuZm9ybSA+IGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmZvcm0gZGl2ID4gYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbmZvcm0gZGl2ID4gaDEge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M0M1QkU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmZpZWxkc2V0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5pbm5lcl9mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmJsb2NrV3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAzNXB4O1xyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDA2RDc3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREREMjtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG5cclxuLmlubmVyX2Zvcm0gPiAuaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBtYXgtd2lkdGg6IDUxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwNkQ3NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRERDI7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwNkQ3NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRERDI7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5idXR0b25fYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogNjBweDtcclxufVxyXG5cclxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmYyNDtcclxuICAgIGJveC1zaGFkb3c6IGJsYWNrIDJweCAycHggMTBweCwgd2hpdGUgM3B4IDNweCAxMXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG59IFxyXG5cclxuLmNsb3Nle1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcclxuICAgIGJveC1zaGFkb3c6IGJsYWNrIDJweCAycHggMTBweCwgd2hpdGUgM3B4IDNweCAxMXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBHQUEwRztJQUMxRyxxQkFBcUI7SUFDckIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMs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O0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrREFBa0Q7SUFDbEQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrREFBa0Q7SUFDbEQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWNvbG9yLWl0ZW1OYXY6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M0M1QkU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAgIGNvbG9yOiAjRURGNkY5O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjA3LDEwOSwyMiwxKSAzNSUsIHJnYmEoMTM4LDE3LDUwLDEpIDY1JSwgcmdiYSgxMzQsMTUsMTM1LDEpIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBod2IoMTUgODIlIDAlKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZENzc7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfZWxlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtTmF2LCAuYWRkVGFzaywgLml0ZW1Qcm9qZWN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNGRkRERDI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtTmF2OmhvdmVyLCAuYWRkVGFzazpob3ZlciwgLml0ZW1Qcm9qZWN0OmhvdmVyLCAucGx1czpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMjYsIDIzMiwgMjQwLCAwLjMpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNkQ3NztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tfaW5uZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5kaWNhdG9yIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0wLjVweCAxcHggM3B4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubG93IHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTAuNXB4IDFweCAzcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5taWRkbGUge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTAuNXB4IDFweCAzcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50YXNrX3dyYXBwZXJ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb25fdXB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGNvbG9yOiAjRURGNkY5O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIGNvbG9yOiAjRkZEREQyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBjb2xvcjogI0ZGREREMjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgICBjb2xvcjogI0ZGREREMjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbl90YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZSwgLmRvbmUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlOmhvdmVyLCAuZG9uZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIHtcXHJcXG4gICBtYXgtd2lkdGg6IDY3NXB4O1xcclxcbiAgIHdpZHRoOiAxMDAlO1xcclxcbiAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgIGxlZnQ6IDUwdnc7XFxyXFxuICAgdG9wOiA1MHZoO1xcclxcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgIGJvcmRlcjogNXB4IHNvbGlkICMwMDZENzc7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZzo6YmFja2Ryb3Age1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEREQyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGRpdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBkaXYgPiBidXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBkaXYgPiBoMSB7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzQzVCRTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXJfZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2tXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDA2RDc3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRERDI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyX2Zvcm0gPiAuaXRlbSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MTVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDZENzc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREREMjtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgIGhlaWdodDogNDJweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwNkQ3NztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEREQyO1xcclxcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25fYm94IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiZjI0O1xcclxcbiAgICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDEwcHgsIHdoaXRlIDNweCAzcHggMTFweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXHJcXG59IFxcclxcblxcclxcbi5jbG9zZXtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcclxcbiAgICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDEwcHgsIHdoaXRlIDNweCAzcHggMTFweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uLy4uL3NyYy8nO1xyXG5pbXBvcnQgZG9tIGZyb20gJy4vZG9tJztcclxuLy8gaW1wb3J0IGRvbmUgZnJvbSAnLi4vc3ZnL2RvbmUuc3ZnJ1xyXG4vLyBpbXBvcnQgeyBQYXJzZXIgfSBmcm9tICd3ZWJwYWNrJztcclxuLy8gaW1wb3J0IGRvbmVTdmcgZnJvbSAnLi4vc3ZnL2RvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0RvbSh0aXRsZSwgcHJpb3JpdHksIGRlYWRsaW5lLCBwcm9qZWN0LCBkZXNjcmlwdGlvbkZvcm0pIHtcclxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza0lubmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfaW5uZXInKTtcclxuXHJcbiAgICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0YXNrV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0YXNrX3dyYXBwZXInKTtcclxuXHJcbiAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGlmIChwcmlvcml0eSA9PT0gJ2hpZ2h0Jykge1xyXG4gICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3InKTtcclxuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICdtaWRkbGUnKSB7XHJcbiAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2luZGljYXRvcicpO1xyXG4gICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdtaWRkbGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2luZGljYXRvcicpO1xyXG4gICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdsb3cnKTtcclxuICAgIH0gXHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb25VcC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbl91cCcpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0RWxlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcbiAgICBwcm9qZWN0RWxlbS50ZXh0Q29udGVudCA9IGAjICR7cHJvamVjdH06YDtcclxuXHJcblxyXG4gICAgY29uc3QgdGl0bGVFZWxlbW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZUVlbGVtbnQudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIHRpdGxlRWVsZW1udC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRleHQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbkZvcm07XHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYERlYWRsaW5lOiAke2RlYWRsaW5lfWA7IFxyXG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7IFxyXG5cclxuICAgIGNvbnN0IGJ1dHRvblRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvblRhc2suY2xhc3NMaXN0LmFkZCgnYnV0dG9uX3Rhc2snKTtcclxuXHJcbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHN2Z1JlbW92ZSA9ICc8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGZpbGw9XCIjRkZEREQyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dHJhc2gtY2FuLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNOSwzVjRINFY2SDVWMTlBMiwyIDAgMCwwIDcsMjFIMTdBMiwyIDAgMCwwIDE5LDE5VjZIMjBWNEgxNVYzSDlNNyw2SDE3VjE5SDdWNk05LDhWMTdIMTFWOEg5TTEzLDhWMTdIMTVWOEgxM1pcIiAvPjwvc3ZnPidcclxuICAgIHJlbW92ZS5pbm5lckhUTUwgPSBzdmdSZW1vdmU7XHJcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XHJcblxyXG4gICAgYnV0dG9uVGFzay5hcHBlbmRDaGlsZChyZW1vdmUpO1xyXG5cclxuICAgIGRlc2NyaXB0aW9uVXAuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW0pO1xyXG4gICAgZGVzY3JpcHRpb25VcC5hcHBlbmRDaGlsZCh0aXRsZUVlbGVtbnQpO1xyXG5cclxuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVXApO1xyXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkYXRlKTtcclxuXHJcbiAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZChpbmRpY2F0b3IpO1xyXG4gICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIHRhc2tJbm5lci5hcHBlbmRDaGlsZCh0YXNrV3JhcHBlcik7XHJcbiAgICB0YXNrSW5uZXIuYXBwZW5kQ2hpbGQoYnV0dG9uVGFzayk7XHJcbiAgICBcclxuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0lubmVyKTtcclxuXHJcbiAgICByZXR1cm4gdGFzaztcclxufSIsImltcG9ydCBkb20gZnJvbSAnLi9kb20nXHJcblxyXG4vLyBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG4vLyBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYWRsaW5lJyk7XHJcbi8vIGNvbnN0IHByaW9waXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jyk7XHJcbi8vIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpXHJcbi8vIGNvbnN0IGRlc2NyaXB0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbkZvcm0nKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBwcmlvcml0eSwgZGVhZGxpbmUsIHByb2plY3QsIGRlc2NyaXB0aW9uRm9ybSwgaWQpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuZGVhZGxpbmUgPSBkZWFkbGluZTtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25Gb3JtID0gZGVzY3JpcHRpb25Gb3JtO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImNvbnN0IGRvbUVsZW1lbnQgPSB7XHJcbiAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLFxyXG4gICAgdGFzazogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKSxcclxuICAgIC8vYnV0dG9uXHJcbiAgICBhZGRUYXNrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFzaycpLFxyXG4gICAgdG9kYXk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpLFxyXG4gICAgY29tcGxldGVkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkJyksXHJcbiAgICBob21lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpLFxyXG4gICAgcGx1czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXMnKSxcclxuICAgIGRvbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb25lJyksXHJcbiAgICBkZWxldGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tRWxlbWVudDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0RG9tIChuYW1lKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyRWxlbScpO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdpdGVtUHJvamVjdCcpO1xyXG5cclxuICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcHJvamVjdFN2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBmaWxsPVwiI0ZGREREMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBjbGFzcz1cIlwiIHN0eWxlPVwiY29sb3I6IHZhcigtLW5hbWVkLWNvbG9yLWdyZXkpO1wiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNS45OTQgNi4wODJhLjUuNSAwIDEgMC0uOTg3LS4xNjRMMTQuNDkzIDloLTMuOTg2bC40ODYtMi45MThhLjUuNSAwIDEgMC0uOTg2LS4xNjRMOS40OTMgOUg3YS41LjUgMCAxIDAgMCAxaDIuMzI2bC0uNjY2IDRINmEuNS41IDAgMCAwIDAgMWgyLjQ5M2wtLjQ4NiAyLjkxOGEuNS41IDAgMSAwIC45ODYuMTY0TDkuNTA3IDE1aDMuOTg2bC0uNDg2IDIuOTE4YS41LjUgMCAxIDAgLjk4Ny4xNjRMMTQuNTA3IDE1SDE3YS41LjUgMCAxIDAgMC0xaC0yLjMyNmwuNjY3LTRIMThhLjUuNSAwIDEgMCAwLTFoLTIuNDkzbC40ODctMi45MThaTTE0LjMyNyAxMEgxMC4zNGwtLjY2NyA0aDMuOTg3bC42NjctNFpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPjwvc3ZnPic7XHJcbiAgICBcclxuICAgIHN2Z0NvbnRhaW5lci5pbm5lckhUTUwgPSBwcm9qZWN0U3ZnO1xyXG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gbmFtZVxyXG4gICAgXHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbmF2O1xyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZG9tIGZyb20gJy4vY29tcG9uZW50cy9kb20nO1xyXG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NvbXBvbmVudHMvY3JlYXRlVGFzayc7XHJcbmltcG9ydCB0YXNrRG9tIGZyb20gJy4vY29tcG9uZW50cy9UYXNrRG9tJztcclxuaW1wb3J0IHByb2plY3REb20gZnJvbSAnLi9jb21wb25lbnRzL3Byb2plY3REb20nO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyAocGFyZW50KSB7XHJcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJyk7XHJcbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpO1xyXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcclxuY29uc3QgbmF2YmFyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXJFbGVtJyk7XHJcbi8vIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpOyBcclxuXHJcbmxldCBpc0hvbWUgPSB0cnVlO1xyXG5cclxuXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbn0pXHJcblxyXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG59KVxyXG5cclxubGV0IG15VGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VGFzaycpKSB8fCBbXTtcclxuXHJcblxyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUYXNrJywgSlNPTi5zdHJpbmdpZnkobXlUYXNrKSlcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSk7XHJcblxyXG4gICAgYWRkVGFza0ZuKHZhbHVlcyk7XHJcbiAgICBpZihpc0hvbWUgPT09IHRydWUpIHtcclxuICAgICAgICBhZGRUYXNrRG9tKG15VGFzayk7XHJcbiAgICB9XHJcbiAgICBhZGRQcm9qZWN0KHZhbHVlcywgdmFsdWVzLnByb2plY3QpO1xyXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcblxyXG4gICAgZGlhbG9nLmNsb3NlKCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrRm4gKG9iaikge1xyXG4gICAgY29uc3QgYXJyID0gW107XHJcbiAgICBcclxuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgICAgICBhcnIucHVzaChvYmpba2V5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGkgPSAwO1xyXG5cclxuICAgIGZvciAoaTsgaSA8IG15VGFzay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGkgPSBpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBteVRhc2sucHVzaChuZXcgY3JlYXRlVGFzayguLi5hcnIsIGkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGFza0RvbSAob2JqKSB7XHJcblxyXG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhkb20uY29udGVudCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBhcnJWYWx1ZSA9IE9iamVjdC52YWx1ZXMob2JqW2ldKTtcclxuICAgICAgICAvLyBkb20uY29udGVudC5hcHBlbmRDaGlsZCh0YXNrRG9tKC4uLmFyclZhbHVlKSlcclxuICAgICAgICBsZXQgdGFza0VsZW1lbnQgPSB0YXNrRG9tKC4uLmFyclZhbHVlKTtcclxuICAgICAgICB0YXNrRWxlbWVudC5pZCA9IGk7XHJcbiAgICAgICAgZG9tLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0ICh2YWx1ZSwgcHJvamVjdFZhbHVlKSB7XHJcbiAgICBjaGVja0FuZEFkZFByb2plY3QocHJvamVjdFZhbHVlKTtcclxuICAgIGxldCBwcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0VmFsdWUpKSB8fCBbXTsgXHJcbiAgICBwcm9qZWN0LnB1c2godmFsdWUpOyBcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RWYWx1ZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0FuZEFkZFByb2plY3QgKHByb2plY3ROYW1lKSB7XHJcbiAgICBpZiggbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9qZWN0RG9tKHByb2plY3ROYW1lKTtcclxuICAgIH1cclxufSAgIFxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlICgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRhc2snLCBKU09OLnN0cmluZ2lmeShteVRhc2spKTtcclxufSBcclxuXHJcbm5hdmJhckVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxyXG4gICAgaWYodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaXRlbVByb2plY3QnKSkge1xyXG4gICAgICAgIGlzSG9tZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGFyZ2V0LnRleHRDb250ZW50KSlcclxuICAgICAgICBhZGRUYXNrRG9tKHZhbCk7XHJcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlICgpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5kb20uaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlzSG9tZSA9IHRydWU7XHJcbiAgICBhZGRUYXNrRG9tKG15VGFzayk7XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxufSkgXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBsZXQgZGl2ID0gdGFyZ2V0LmNsb3Nlc3QoJy50YXNrJyk7XHJcblxyXG4gICAgaWYgKGRpdiAmJiAhdGFyZ2V0LmNsb3Nlc3QoJy5idXR0b25fdGFzaycpKSB7XHJcbiAgICAgICAgbGV0IHRhc2tJZCA9IGRpdi5pZDtcclxuICAgICAgICBjb25zdCB0YXNrRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VGFzaycpKTtcclxuICAgICAgICBsZXQgb2JqID0gdGFza0RhdGFbdGFza0lkXTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm1DaGFuZ2UgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAnaWQnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtQ2hhbmdlLnNldChrZXksIG9ialtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcGFpciBvZiBmb3JtQ2hhbmdlLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwYWlyO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXkpLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhteVRhc2tbdGFza0lkXSk7XHJcblxyXG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcclxuXHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtQ2hhbmdlLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gcGFpcjtcclxuICAgICAgICAgICAgICAgIG15VGFza1t0YXNrSWRdW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUYXNrJywgSlNPTi5zdHJpbmdpZnkobXlUYXNrKSk7IC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQtNCw0L3QvdGL0LUg0LIgbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBteVRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRhc2snKSk7XHJcblxyXG4gICAgbGV0IHByb2plY3QgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2Uua2V5KGkpICE9PSAnbXlUYXNrJykge1xyXG4gICAgICAgICAgICBwcm9qZWN0LnB1c2gobG9jYWxTdG9yYWdlLmtleShpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHByb2plY3REb20ocHJvamVjdFtqXSk7XHJcbiAgICB9XHJcbiAgICBhZGRUYXNrRG9tKG15VGFzayk7XHJcbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=