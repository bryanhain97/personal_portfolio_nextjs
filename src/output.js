"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootElement = document.querySelector('#root');

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_App["default"], null), rootElement);
