(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/appRedux/actions/PersonasActions.js":
/*!**********************************************************!*\
  !*** ./resources/js/appRedux/actions/PersonasActions.js ***!
  \**********************************************************/
/*! exports provided: mostrarPersonas, agregarPersona, showPersona, obtenerPersona, actualizarPersona, eliminarPersona, buscarPersona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mostrarPersonas", function() { return mostrarPersonas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agregarPersona", function() { return agregarPersona; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPersona", function() { return showPersona; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obtenerPersona", function() { return obtenerPersona; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actualizarPersona", function() { return actualizarPersona; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eliminarPersona", function() { return eliminarPersona; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buscarPersona", function() { return buscarPersona; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_PersonasTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/PersonasTypes */ "./resources/js/constants/PersonasTypes.js");
/* harmony import */ var _util_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Api */ "./resources/js/util/Api.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var mostrarPersonas = function mostrarPersonas(pagina) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var respuesta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].get('/personas' + '?page=' + pagina);

            case 2:
              respuesta = _context.sent;
              dispatch({
                type: _constants_PersonasTypes__WEBPACK_IMPORTED_MODULE_1__["MOSTRAR_PERSONAS"],
                payload: respuesta.data
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var agregarPersona = function agregarPersona(persona) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var respuesta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].post('/personas', persona);

            case 2:
              respuesta = _context2.sent;
              dispatch({
                type: _constants_PersonasTypes__WEBPACK_IMPORTED_MODULE_1__["AGREGAR_PERSONA"],
                payload: respuesta.data
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var showPersona = function showPersona(id) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      var respuesta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].get('/personas/' + id);

            case 2:
              respuesta = _context3.sent;
              dispatch({
                type: _constants_PersonasTypes__WEBPACK_IMPORTED_MODULE_1__["MOSTRAR_PERSONA"],
                payload: respuesta.data
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var obtenerPersona = function obtenerPersona(id) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
      var respuesta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].get('/personas/' + id + '/edit');

            case 2:
              respuesta = _context4.sent;
              dispatch({
                type: _constants_PersonasTypes__WEBPACK_IMPORTED_MODULE_1__["OBTENER_PERSONA"],
                payload: respuesta.data
              });

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var actualizarPersona = function actualizarPersona(persona) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch) {
      var respuesta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].put('/personas/' + persona.id, persona);

            case 2:
              respuesta = _context5.sent;
              dispatch({
                type: _constants_PersonasTypes__WEBPACK_IMPORTED_MODULE_1__["EDITAR_PERSONA"],
                payload: respuesta.data
              });

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var eliminarPersona = function eliminarPersona(id) {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"]('/personas/' + id);

            case 2:
              dispatch({
                type: _constants_PersonasTypes__WEBPACK_IMPORTED_MODULE_1__["ELIMINAR_PERSONA"],
                payload: id
              });

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
};
var buscarPersona = function buscarPersona(value) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(dispatch) {
      var respuesta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].get('personas/' + value);

            case 2:
              respuesta = _context7.sent;
              dispatch({
                type: _constants_PersonasTypes__WEBPACK_IMPORTED_MODULE_1__["BUSCAR_PERSONA"],
                payload: respuesta.data
              });

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/js/routes/Personas/create.js":
/*!************************************************!*\
  !*** ./resources/js/routes/Personas/create.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _appRedux_actions_PersonasActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appRedux/actions/PersonasActions */ "./resources/js/appRedux/actions/PersonasActions.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Title = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title;

var create = /*#__PURE__*/function (_Component) {
  _inherits(create, _Component);

  var _super = _createSuper(create);

  function create() {
    var _this;

    _classCallCheck(this, create);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      nombre: '',
      apellidos: '',
      telefono: '',
      direccion: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, _defineProperty({}, e.target.name, e.target.value)));
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubimit", function (e) {
      // e.preventDefault();
      var _this$state = _this.state,
          nombre = _this$state.nombre,
          apellidos = _this$state.apellidos,
          telefono = _this$state.telefono,
          direccion = _this$state.direccion;
      var datos = {
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        direccion: direccion
      };

      _this.props.agregarPersona(datos);

      _this.props.history.push('/personas');
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.props.history.push('/personas');
    });

    return _this;
  }

  _createClass(create, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "gx-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
        level: 4,
        className: "gx-text-center gx-text-uppercase"
      }, "Datos Personales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onFinish: this.handleSubimit,
        name: "persona"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        gutter: [16, 8]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        sm: 12,
        xs: 24,
        span: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "nombre",
        label: "Nombre",
        labelCol: {
          span: 24
        },
        wrapperCol: {
          span: 24
        },
        rules: [{
          required: true,
          message: 'El campo es obligatorio'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        name: "nombre",
        type: "text",
        placeholder: "Escriba su nombre",
        onChange: this.handleChange,
        value: this.state.nombre
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        sm: 12,
        xs: 24,
        span: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "apellidos",
        label: "Apellidos",
        labelCol: {
          span: 24
        },
        wrapperCol: {
          span: 24
        },
        rules: [{
          required: true,
          message: 'Este campo es obligatorio'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        name: "apellidos",
        type: "text",
        placeholder: "Escriba sus apellidos",
        onChange: this.handleChange,
        value: this.apellidos
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        sm: 12,
        xs: 24,
        span: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "telefono",
        label: "Telefono",
        labelCol: {
          span: 24
        },
        wrapperCol: {
          span: 24
        },
        rules: [{
          required: true,
          message: 'Este campo es obligatorio'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        name: "telefono",
        type: "text",
        placeholder: "Escriba su numero de telefono",
        onChange: this.handleChange,
        value: this.telefono
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        sm: 12,
        xs: 24,
        span: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "direccion",
        label: "Direcc\xEDon",
        labelCol: {
          span: 24
        },
        wrapperCol: {
          span: 24
        },
        rules: [{
          required: true,
          message: 'Este campo es obligatorio'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        name: "direccion",
        type: "text",
        placeholder: "Escriba su direccion",
        onChange: this.handleChange,
        value: this.direccion
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        danger: true,
        className: "gx-btn-danger",
        onClick: this.handleCancel
      }, "Cancelar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        htmlType: "submit"
      }, "Guardar")))));
    }
  }]);

  return create;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  agregarPersona: _appRedux_actions_PersonasActions__WEBPACK_IMPORTED_MODULE_3__["agregarPersona"]
})(create));

/***/ }),

/***/ "./resources/js/util/Api.js":
/*!**********************************!*\
  !*** ./resources/js/util/Api.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var Api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://127.0.0.1:8000/api",
  // baseURL: "http://192.168.43.15:8000/api",
  headers: {
    'Content-Type': 'application/json' //   'Accept': 'application/json',

  }
});
/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ })

}]);