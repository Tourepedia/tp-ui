webpackHotUpdate("static/development/pages/components.js",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.jsx");
/* harmony import */ var _Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Seo */ "./components/Seo.jsx");
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CodeBlock */ "./components/CodeBlock.jsx");
var _jsxFileName = "/Users/sudhir/Documents/workspace/tourepedia/tp-ui/www/components/Layout.jsx";




function Layout(_ref) {
  var children = _ref.children,
      sideBar = _ref.sideBar,
      meta = _ref.meta;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), meta ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "".concat(meta.title, " | Tourepedia Design System"),
    description: meta.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-64 bg-gray-100 border-r",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, sideBar), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "w-full py-8 px-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "max-w-4xl mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-3xl md:text-4xl font-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, meta.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "md:text-xl font-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, meta.description)), meta.name ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    language: "bash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "npm install --save ".concat(meta.name))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, children)))));
}

/***/ })

})
//# sourceMappingURL=components.js.113209816ab240a97d35.hot-update.js.map