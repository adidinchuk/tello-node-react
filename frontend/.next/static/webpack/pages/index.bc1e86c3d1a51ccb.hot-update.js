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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../socket */ \"./socket.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Objects/Drone */ \"./Objects/Drone.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\adidi\\\\Documents\\\\Development\\\\Robotics\\\\Tello\\\\node\\\\tello-nodejs-react\\\\fontend\\\\components\\\\DroneState.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _this = undefined;\n\n\n\n\n\n\nfunction openSocket() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      status = _useState[0],\n      updateStatus = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    _socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('status', updateStatus);\n    console.log(status);\n  }, []);\n  return status;\n}\n\n_s(openSocket, \"W3q4kKfwyt7fPSlc0oaSTWkjldo=\");\n\nfunction droneStateFeed() {\n  _s2();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      dronestate = _useState2[0],\n      updateDronestate = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    _socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('dronestate', updateDronestate); //Drone.setState(dronestate);\n  }, []);\n  return dronestate;\n}\n\n_s2(droneStateFeed, \"R8RYShhvTd6XobN1fYKpnMoAqVE=\");\n\nvar DroneState = function DroneState() {\n  var state = openSocket();\n  var dronestate = droneStateFeed();\n  _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setState();\n  console.log(_Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState());\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: [\"x : \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().agx != null ? _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().agx : 'N/A', \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: [\"y : \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().agy, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: [\"z : \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().agz, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: [\"State : \", state, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: [\"Height : \", dronestate.h, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: [\"State : \", dronestate.bat, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = DroneState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DroneState);\n\nvar _c;\n\n$RefreshReg$(_c, \"DroneState\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Ryb25lU3RhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOzs7QUFFQSxTQUFTSSxVQUFULEdBQXNCO0FBQUE7O0FBQ2xCLGtCQUErQkYsK0NBQVEsQ0FBQyxLQUFELENBQXZDO0FBQUEsTUFBT0csTUFBUDtBQUFBLE1BQWVDLFlBQWY7O0FBQ0FMLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaRCxJQUFBQSxrREFBQSxDQUFVLFFBQVYsRUFBb0JNLFlBQXBCO0FBQ0FFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLFNBQU9BLE1BQVA7QUFDSDs7R0FQUUQ7O0FBU1QsU0FBU00sY0FBVCxHQUEwQjtBQUFBOztBQUN0QixtQkFBdUNSLCtDQUFRLENBQUMsRUFBRCxDQUEvQztBQUFBLE1BQU9TLFVBQVA7QUFBQSxNQUFtQkMsZ0JBQW5COztBQUVBWCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWkQsSUFBQUEsa0RBQUEsQ0FBVSxZQUFWLEVBQXdCWSxnQkFBeEIsRUFEWSxDQUVaO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLFNBQU9ELFVBQVA7QUFFSDs7SUFUUUQ7O0FBV1QsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixNQUFNQyxLQUFLLEdBQUdWLFVBQVUsRUFBeEI7QUFDQSxNQUFNTyxVQUFVLEdBQUdELGNBQWMsRUFBakM7QUFDQVAsRUFBQUEsK0RBQUE7QUFDQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLCtEQUFBLEVBQVo7QUFDQSxzQkFFSTtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBQSwyQkFBUUEsK0RBQUEsR0FBaUJjLEdBQWpCLElBQXlCLElBQXpCLEdBQWdDZCwrREFBQSxHQUFpQmMsR0FBakQsR0FBdUQsS0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBLDJCQUFRZCwrREFBQSxHQUFpQmUsR0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFBLDJCQUFRZiwrREFBQSxHQUFpQmdCLEdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBQSw2QkFBWUwsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixlQU9JO0FBQUEsOEJBQWFILFVBQVUsQ0FBQ1MsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosZUFRSTtBQUFBLDZCQUFZVCxVQUFVLENBQUNVLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBYUgsQ0FsQkQ7O0tBQU1SO0FBb0JOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRHJvbmVTdGF0ZS5qcz83ZGY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb2NrZXQgZnJvbSAnLi4vc29ja2V0J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IERyb25lIGZyb20gJy4uL09iamVjdHMvRHJvbmUnXHJcblxyXG5mdW5jdGlvbiBvcGVuU29ja2V0KCkge1xyXG4gICAgY29uc3QgW3N0YXR1cywgdXBkYXRlU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc29ja2V0Lm9uKCdzdGF0dXMnLCB1cGRhdGVTdGF0dXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXR1cyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gc3RhdHVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm9uZVN0YXRlRmVlZCgpIHtcclxuICAgIGNvbnN0IFtkcm9uZXN0YXRlLCB1cGRhdGVEcm9uZXN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNvY2tldC5vbignZHJvbmVzdGF0ZScsIHVwZGF0ZURyb25lc3RhdGUpO1xyXG4gICAgICAgIC8vRHJvbmUuc2V0U3RhdGUoZHJvbmVzdGF0ZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gZHJvbmVzdGF0ZTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IERyb25lU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IG9wZW5Tb2NrZXQoKTtcclxuICAgIGNvbnN0IGRyb25lc3RhdGUgPSBkcm9uZVN0YXRlRmVlZCgpO1xyXG4gICAgRHJvbmUuc2V0U3RhdGUoKTtcclxuICAgIGNvbnNvbGUubG9nKERyb25lLmdldFN0YXRlKCkpO1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPnggOiB7RHJvbmUuZ2V0U3RhdGUoKS5hZ3ggICE9IG51bGwgPyBEcm9uZS5nZXRTdGF0ZSgpLmFneCA6ICdOL0EnfSA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD55IDoge0Ryb25lLmdldFN0YXRlKCkuYWd5fSA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD56IDoge0Ryb25lLmdldFN0YXRlKCkuYWd6fSA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD5TdGF0ZSA6IHtzdGF0ZX0gPC9wPlxyXG4gICAgICAgICAgICA8cD5IZWlnaHQgOiB7ZHJvbmVzdGF0ZS5ofSA8L3A+XHJcbiAgICAgICAgICAgIDxwPlN0YXRlIDoge2Ryb25lc3RhdGUuYmF0fSA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9uZVN0YXRlOyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRyb25lIiwib3BlblNvY2tldCIsInN0YXR1cyIsInVwZGF0ZVN0YXR1cyIsIm9uIiwiY29uc29sZSIsImxvZyIsImRyb25lU3RhdGVGZWVkIiwiZHJvbmVzdGF0ZSIsInVwZGF0ZURyb25lc3RhdGUiLCJEcm9uZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiYWd4IiwiYWd5IiwiYWd6IiwiaCIsImJhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DroneState.js\n");

/***/ })

});