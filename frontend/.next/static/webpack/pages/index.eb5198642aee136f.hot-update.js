"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/DroneState.js":
/*!**********************************!*\
  !*** ./components/DroneState.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../socket */ \"./socket.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Objects/Drone */ \"./Objects/Drone.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\adidi\\\\Documents\\\\Development\\\\Robotics\\\\Tello\\\\node\\\\tello-nodejs-react\\\\fontend\\\\components\\\\DroneState.js\",\n    _s = $RefreshSig$(),\n    _this = undefined;\n\n\n\n\n\n\nfunction openSocket() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      status = _useState[0],\n      updateStatus = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    _socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('status', updateStatus);\n    console.log(status);\n  }, []);\n  return status;\n}\n\n_s(openSocket, \"W3q4kKfwyt7fPSlc0oaSTWkjldo=\");\n\nvar DroneState = function DroneState() {\n  var state = openSocket();\n  var dronestate = _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].openDroneStateSocket();\n  _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setState(dronestate);\n  console.log(_Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState());\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: [\"x : \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().agx != null ? _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().agx : 'N/A', \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: [\"y : \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().agy, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: [\"z : \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().agz, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: [\"State : \", state, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: [\"Height : \", dronestate.h, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: [\"State : \", dronestate.bat, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = DroneState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DroneState);\n\nvar _c;\n\n$RefreshReg$(_c, \"DroneState\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Ryb25lU3RhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7OztBQUVBLFNBQVNJLFVBQVQsR0FBc0I7QUFBQTs7QUFDbEIsa0JBQStCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdkM7QUFBQSxNQUFPRyxNQUFQO0FBQUEsTUFBZUMsWUFBZjs7QUFDQUwsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pELElBQUFBLGtEQUFBLENBQVUsUUFBVixFQUFvQk0sWUFBcEI7QUFDQUUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUO0FBSUEsU0FBT0EsTUFBUDtBQUNIOztHQVBRRDs7QUFVVCxJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLE1BQU1DLEtBQUssR0FBR1AsVUFBVSxFQUF4QjtBQUNBLE1BQU1RLFVBQVUsR0FBR1QsMkVBQUEsRUFBbkI7QUFDQUEsRUFBQUEsK0RBQUEsQ0FBZVMsVUFBZjtBQUNBSixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sK0RBQUEsRUFBWjtBQUNBLHNCQUVJO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSTtBQUFBLDJCQUFRQSwrREFBQSxHQUFpQmEsR0FBakIsSUFBeUIsSUFBekIsR0FBZ0NiLCtEQUFBLEdBQWlCYSxHQUFqRCxHQUF1RCxLQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsMkJBQVFiLCtEQUFBLEdBQWlCYyxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUEsMkJBQVFkLCtEQUFBLEdBQWlCZSxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUEsNkJBQVlQLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosZUFPSTtBQUFBLDhCQUFhQyxVQUFVLENBQUNPLENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKLGVBUUk7QUFBQSw2QkFBWVAsVUFBVSxDQUFDUSxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQWFILENBbEJEOztLQUFNVjtBQW9CTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Ryb25lU3RhdGUuanM/N2RmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ja2V0IGZyb20gJy4uL3NvY2tldCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBEcm9uZSBmcm9tICcuLi9PYmplY3RzL0Ryb25lJ1xyXG5cclxuZnVuY3Rpb24gb3BlblNvY2tldCgpIHtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHVwZGF0ZVN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNvY2tldC5vbignc3RhdHVzJywgdXBkYXRlU3RhdHVzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHN0YXR1cztcclxufVxyXG5cclxuXHJcbmNvbnN0IERyb25lU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IG9wZW5Tb2NrZXQoKTtcclxuICAgIGNvbnN0IGRyb25lc3RhdGUgPSBEcm9uZS5vcGVuRHJvbmVTdGF0ZVNvY2tldCgpO1xyXG4gICAgRHJvbmUuc2V0U3RhdGUoZHJvbmVzdGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhEcm9uZS5nZXRTdGF0ZSgpKTtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD54IDoge0Ryb25lLmdldFN0YXRlKCkuYWd4ICAhPSBudWxsID8gRHJvbmUuZ2V0U3RhdGUoKS5hZ3ggOiAnTi9BJ30gPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+eSA6IHtEcm9uZS5nZXRTdGF0ZSgpLmFneX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+eiA6IHtEcm9uZS5nZXRTdGF0ZSgpLmFnen0gPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+U3RhdGUgOiB7c3RhdGV9IDwvcD5cclxuICAgICAgICAgICAgPHA+SGVpZ2h0IDoge2Ryb25lc3RhdGUuaH0gPC9wPlxyXG4gICAgICAgICAgICA8cD5TdGF0ZSA6IHtkcm9uZXN0YXRlLmJhdH0gPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvbmVTdGF0ZTsiXSwibmFtZXMiOlsic29ja2V0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcm9uZSIsIm9wZW5Tb2NrZXQiLCJzdGF0dXMiLCJ1cGRhdGVTdGF0dXMiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJEcm9uZVN0YXRlIiwic3RhdGUiLCJkcm9uZXN0YXRlIiwib3BlbkRyb25lU3RhdGVTb2NrZXQiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiYWd4IiwiYWd5IiwiYWd6IiwiaCIsImJhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DroneState.js\n");

/***/ })

});