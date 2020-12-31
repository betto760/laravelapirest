(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/routes/SamplePage/index.js":
/*!*************************************************!*\
  !*** ./resources/js/routes/SamplePage/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/IntlMessages */ "./resources/js/util/IntlMessages.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




var SamplePage = function SamplePage() {
  var info = function info() {
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].info('Mensaje normales');
  };

  var error = function error() {
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('Mensaje de errores');
  };

  var warning = function warning() {
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].warning('Mensaje de advertencias');
  };

  var success = function success() {
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].success('Mensaje satisfactorio');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title gx-mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "sidebar.samplePage"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Hola Mundo como estas!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    onClick: info
  }, "Guardar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "danger",
    onClick: error
  }, "Cancelar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "ghost",
    onClick: success
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-file"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "dashed",
    onClick: warning
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-save"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SamplePage);

/***/ })

}]);