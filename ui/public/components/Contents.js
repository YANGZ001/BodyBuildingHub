"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Contents;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Diet = _interopRequireDefault(require("./Diet.jsx"));

var _Motivation = _interopRequireDefault(require("./Motivation.jsx"));

var _SearchBar = _interopRequireDefault(require("./SearchBar.jsx"));

var _Tracker = _interopRequireDefault(require("./Tracker.jsx"));

var _Train = _interopRequireDefault(require("./Train.jsx"));

var _Home = _interopRequireDefault(require("./Home.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return /*#__PURE__*/_react.default.createElement("h1", null, "Page Not Found");
};

function Contents() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/",
    to: "/home"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/home",
    component: _Home.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/diet",
    component: _Diet.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/motivation",
    component: _Motivation.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/tracker",
    component: _Tracker.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/train",
    component: _Train.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    component: NotFound
  }));
}