"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ControlUserInterface",{

/***/ "./Objects/Drone.js":
/*!**************************!*\
  !*** ./Objects/Drone.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socket */ \"./socket.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Drone = function () {\n  var _s = $RefreshSig$(),\n      _s2 = $RefreshSig$(),\n      _ref;\n\n  var state = \"\";\n  var socketState = false;\n\n  var getState = function getState() {\n    return state; // Or pull this from cookie/localStorage\n  };\n\n  var setState = function setState(data) {\n    state = data; // Also set this in cookie/localStorage\n  };\n\n  var openSocket = function openSocket() {\n    if (!socketState) {\n      _socket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on('dronestate', function (data) {\n        state = data;\n      });\n      socketState = true;\n    }\n  };\n\n  function openDroneStateSocket() {\n    _s();\n\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n        dronestate = _useState[0],\n        updateDronestate = _useState[1];\n\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n      _socket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on('dronestate', updateDronestate); //Drone.setState(dronestate);\n    }, []);\n    return dronestate;\n  }\n\n  _s(openDroneStateSocket, \"R8RYShhvTd6XobN1fYKpnMoAqVE=\");\n\n  function openStatusSocket() {\n    _s2();\n\n    var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n        status = _useState2[0],\n        updateStatus = _useState2[1];\n\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n      _socket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on('status', updateStatus);\n      console.log(status);\n    }, []);\n    return status;\n  }\n\n  _s2(openStatusSocket, \"W3q4kKfwyt7fPSlc0oaSTWkjldo=\");\n\n  var getSignalStrength = function getSignalStrength() {\n    return 0;\n  };\n\n  var getSpeed = function getSpeed() {\n    return 0;\n  };\n\n  return _ref = {\n    getState: getState,\n    setState: setState,\n    openSocket: openSocket,\n    getSignalStrength: getSignalStrength\n  }, (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"getSignalStrength\", getSignalStrength), (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"getSpeed\", getSpeed), (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"getSpeed\", getSpeed), (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"openDroneStateSocket\", openDroneStateSocket), (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"openDroneStateSocket\", openDroneStateSocket), _ref;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Drone);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9PYmplY3RzL0Ryb25lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBSUksS0FBSyxHQUFJLFlBQVk7QUFBQTtBQUFBO0FBQUE7O0FBRXJCLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEtBQWxCOztBQUVBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7QUFDdkIsV0FBT0YsS0FBUCxDQUR1QixDQUNOO0FBQ3BCLEdBRkQ7O0FBSUEsTUFBSUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBVUMsSUFBVixFQUFnQjtBQUMzQkosSUFBQUEsS0FBSyxHQUFHSSxJQUFSLENBRDJCLENBRTNCO0FBQ0gsR0FIRDs7QUFLQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBQ3pCLFFBQUksQ0FBQ0osV0FBTCxFQUFrQjtBQUNkTixNQUFBQSxrREFBQSxDQUFVLFlBQVYsRUFBd0IsVUFBQ1MsSUFBRCxFQUFVO0FBQzlCSixRQUFBQSxLQUFLLEdBQUdJLElBQVI7QUFDSCxPQUZEO0FBSUFILE1BQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0g7QUFDSixHQVJEOztBQVVBLFdBQVNNLG9CQUFULEdBQWdDO0FBQUE7O0FBQzVCLG9CQUF1Q1YsK0NBQVEsQ0FBQyxFQUFELENBQS9DO0FBQUEsUUFBT1csVUFBUDtBQUFBLFFBQW1CQyxnQkFBbkI7O0FBRUFiLElBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaRCxNQUFBQSxrREFBQSxDQUFVLFlBQVYsRUFBd0JjLGdCQUF4QixFQURZLENBRVo7QUFDSCxLQUhRLEVBR04sRUFITSxDQUFUO0FBSUEsV0FBT0QsVUFBUDtBQUVIOztBQWpDb0IsS0F3QlpELG9CQXhCWTs7QUFtQ3JCLFdBQVNHLGdCQUFULEdBQTRCO0FBQUE7O0FBQ3hCLHFCQUErQmIsK0NBQVEsQ0FBQyxLQUFELENBQXZDO0FBQUEsUUFBT2MsTUFBUDtBQUFBLFFBQWVDLFlBQWY7O0FBQ0FoQixJQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWkQsTUFBQUEsa0RBQUEsQ0FBVSxRQUFWLEVBQW9CaUIsWUFBcEI7QUFDQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFDSCxLQUhRLEVBR04sRUFITSxDQUFUO0FBSUEsV0FBT0EsTUFBUDtBQUVIOztBQTNDb0IsTUFtQ1pELGdCQW5DWTs7QUE2Q3JCLE1BQUlLLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBWTtBQUNoQyxXQUFPLENBQVA7QUFDSCxHQUZEOztBQUdBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7QUFDdkIsV0FBTyxDQUFQO0FBQ0gsR0FGRDs7QUFJQTtBQUNJZCxJQUFBQSxRQUFRLEVBQUVBLFFBRGQ7QUFFSUMsSUFBQUEsUUFBUSxFQUFFQSxRQUZkO0FBR0lFLElBQUFBLFVBQVUsRUFBRUEsVUFIaEI7QUFJSVUsSUFBQUEsaUJBQWlCLEVBQWpCQTtBQUpKLHdPQUl1QkEsaUJBSnZCLDZOQUtJQyxRQUxKLDZOQUtjQSxRQUxkLHlPQU1JVCxvQkFOSix5T0FNMEJBLG9CQU4xQjtBQVVILENBOURXLEVBQVo7O0FBZ0VBLCtEQUFlUixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL09iamVjdHMvRHJvbmUuanM/N2E2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ja2V0IGZyb20gJy4uL3NvY2tldCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnZhciBEcm9uZSA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHN0YXRlID0gXCJcIjtcclxuICAgIHZhciBzb2NrZXRTdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBnZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGU7ICAgIC8vIE9yIHB1bGwgdGhpcyBmcm9tIGNvb2tpZS9sb2NhbFN0b3JhZ2VcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNldFN0YXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBzdGF0ZSA9IGRhdGE7XHJcbiAgICAgICAgLy8gQWxzbyBzZXQgdGhpcyBpbiBjb29raWUvbG9jYWxTdG9yYWdlXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvcGVuU29ja2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc29ja2V0U3RhdGUpIHtcclxuICAgICAgICAgICAgc29ja2V0Lm9uKCdkcm9uZXN0YXRlJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlID0gZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNvY2tldFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkRyb25lU3RhdGVTb2NrZXQoKSB7XHJcbiAgICAgICAgY29uc3QgW2Ryb25lc3RhdGUsIHVwZGF0ZURyb25lc3RhdGVdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgc29ja2V0Lm9uKCdkcm9uZXN0YXRlJywgdXBkYXRlRHJvbmVzdGF0ZSk7XHJcbiAgICAgICAgICAgIC8vRHJvbmUuc2V0U3RhdGUoZHJvbmVzdGF0ZSk7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIHJldHVybiBkcm9uZXN0YXRlO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlblN0YXR1c1NvY2tldCgpIHtcclxuICAgICAgICBjb25zdCBbc3RhdHVzLCB1cGRhdGVTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vbignc3RhdHVzJywgdXBkYXRlU3RhdHVzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzKTtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRTaWduYWxTdHJlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHZhciBnZXRTcGVlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcclxuICAgICAgICBzZXRTdGF0ZTogc2V0U3RhdGUsXHJcbiAgICAgICAgb3BlblNvY2tldDogb3BlblNvY2tldCxcclxuICAgICAgICBnZXRTaWduYWxTdHJlbmd0aCwgZ2V0U2lnbmFsU3RyZW5ndGgsXHJcbiAgICAgICAgZ2V0U3BlZWQsIGdldFNwZWVkLFxyXG4gICAgICAgIG9wZW5Ecm9uZVN0YXRlU29ja2V0LCBvcGVuRHJvbmVTdGF0ZVNvY2tldFxyXG5cclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9uZTsiXSwibmFtZXMiOlsic29ja2V0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJEcm9uZSIsInN0YXRlIiwic29ja2V0U3RhdGUiLCJnZXRTdGF0ZSIsInNldFN0YXRlIiwiZGF0YSIsIm9wZW5Tb2NrZXQiLCJvbiIsIm9wZW5Ecm9uZVN0YXRlU29ja2V0IiwiZHJvbmVzdGF0ZSIsInVwZGF0ZURyb25lc3RhdGUiLCJvcGVuU3RhdHVzU29ja2V0Iiwic3RhdHVzIiwidXBkYXRlU3RhdHVzIiwiY29uc29sZSIsImxvZyIsImdldFNpZ25hbFN0cmVuZ3RoIiwiZ2V0U3BlZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Objects/Drone.js\n");

/***/ })

});