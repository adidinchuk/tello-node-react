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

/***/ "./Objects/Drone.js":
/*!**************************!*\
  !*** ./Objects/Drone.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket */ \"./socket.js\");\n\n\n\n\nvar Drone = function () {\n  var _s = $RefreshSig$(),\n      _ref;\n\n  var state = \"\";\n  var socketState = false;\n\n  var getState = function getState() {\n    return state; // Or pull this from cookie/localStorage\n  };\n\n  var setState = function setState(data) {\n    state = data; // Also set this in cookie/localStorage\n  };\n\n  var openSocket = function openSocket() {\n    if (!socketState) {\n      _socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on('dronestate', function (data) {\n        state = data;\n      });\n      socketState = true;\n    }\n  };\n\n  function setTimeout() {\n    _s();\n\n    var _useState = useState({}),\n        _useState2 = (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n        dronestate = _useState2[0],\n        updateDronestate = _useState2[1];\n\n    useEffect(function () {\n      _socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on('dronestate', updateDronestate); //Drone.setState(dronestate);\n    }, []);\n    return dronestate;\n  }\n\n  _s(setTimeout, \"R8RYShhvTd6XobN1fYKpnMoAqVE=\");\n\n  var getSignalStrength = function getSignalStrength() {\n    return 0;\n  };\n\n  var getSpeed = function getSpeed() {\n    return 0;\n  };\n\n  return _ref = {\n    getState: getState,\n    setState: setState,\n    openSocket: openSocket,\n    getSignalStrength: getSignalStrength\n  }, (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"getSignalStrength\", getSignalStrength), (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"getSpeed\", getSpeed), (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"getSpeed\", getSpeed), (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"tt\", tt), (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"tt\", tt), _ref;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Drone);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9PYmplY3RzL0Ryb25lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQUlDLEtBQUssR0FBSSxZQUFZO0FBQUE7QUFBQTs7QUFFckIsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJQyxXQUFXLEdBQUcsS0FBbEI7O0FBRUEsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBWTtBQUN2QixXQUFPRixLQUFQLENBRHVCLENBQ047QUFDcEIsR0FGRDs7QUFJQSxNQUFJRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFVQyxJQUFWLEVBQWdCO0FBQzNCSixJQUFBQSxLQUFLLEdBQUdJLElBQVIsQ0FEMkIsQ0FFM0I7QUFDSCxHQUhEOztBQUtBLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFDekIsUUFBSSxDQUFDSixXQUFMLEVBQWtCO0FBQ2RILE1BQUFBLGtEQUFBLENBQVUsWUFBVixFQUF3QixVQUFDTSxJQUFELEVBQVU7QUFDOUJKLFFBQUFBLEtBQUssR0FBR0ksSUFBUjtBQUNILE9BRkQ7QUFJQUgsTUFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDSDtBQUNKLEdBUkQ7O0FBVUEsV0FBU00sVUFBVCxHQUFzQjtBQUFBOztBQUNsQixvQkFBdUNDLFFBQVEsQ0FBQyxFQUFELENBQS9DO0FBQUE7QUFBQSxRQUFPQyxVQUFQO0FBQUEsUUFBbUJDLGdCQUFuQjs7QUFFQUMsSUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDWmIsTUFBQUEsa0RBQUEsQ0FBVSxZQUFWLEVBQXdCWSxnQkFBeEIsRUFEWSxDQUVaO0FBQ0gsS0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLFdBQU9ELFVBQVA7QUFFSDs7QUFqQ29CLEtBd0JaRixVQXhCWTs7QUFtQ3JCLE1BQUlLLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBWTtBQUNoQyxXQUFPLENBQVA7QUFDSCxHQUZEOztBQUdBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7QUFDdkIsV0FBTyxDQUFQO0FBQ0gsR0FGRDs7QUFJQTtBQUNJWCxJQUFBQSxRQUFRLEVBQUVBLFFBRGQ7QUFFSUMsSUFBQUEsUUFBUSxFQUFFQSxRQUZkO0FBR0lFLElBQUFBLFVBQVUsRUFBRUEsVUFIaEI7QUFJSU8sSUFBQUEsaUJBQWlCLEVBQWpCQTtBQUpKLHdPQUl1QkEsaUJBSnZCLDZOQUtJQyxRQUxKLDZOQUtjQSxRQUxkLHVOQU1JQyxFQU5KLHVOQU1RQSxFQU5SO0FBVUgsQ0FwRFcsRUFBWjs7QUFzREEsK0RBQWVmLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vT2JqZWN0cy9Ecm9uZS5qcz83YTY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb2NrZXQgZnJvbSAnLi4vc29ja2V0JztcclxuXHJcbnZhciBEcm9uZSA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHN0YXRlID0gXCJcIjtcclxuICAgIHZhciBzb2NrZXRTdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBnZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGU7ICAgIC8vIE9yIHB1bGwgdGhpcyBmcm9tIGNvb2tpZS9sb2NhbFN0b3JhZ2VcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNldFN0YXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBzdGF0ZSA9IGRhdGE7XHJcbiAgICAgICAgLy8gQWxzbyBzZXQgdGhpcyBpbiBjb29raWUvbG9jYWxTdG9yYWdlXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvcGVuU29ja2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc29ja2V0U3RhdGUpIHtcclxuICAgICAgICAgICAgc29ja2V0Lm9uKCdkcm9uZXN0YXRlJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlID0gZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNvY2tldFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGltZW91dCgpIHtcclxuICAgICAgICBjb25zdCBbZHJvbmVzdGF0ZSwgdXBkYXRlRHJvbmVzdGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQub24oJ2Ryb25lc3RhdGUnLCB1cGRhdGVEcm9uZXN0YXRlKTtcclxuICAgICAgICAgICAgLy9Ecm9uZS5zZXRTdGF0ZShkcm9uZXN0YXRlKTtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIGRyb25lc3RhdGU7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2V0U2lnbmFsU3RyZW5ndGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICB2YXIgZ2V0U3BlZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXHJcbiAgICAgICAgc2V0U3RhdGU6IHNldFN0YXRlLFxyXG4gICAgICAgIG9wZW5Tb2NrZXQ6IG9wZW5Tb2NrZXQsXHJcbiAgICAgICAgZ2V0U2lnbmFsU3RyZW5ndGgsIGdldFNpZ25hbFN0cmVuZ3RoLFxyXG4gICAgICAgIGdldFNwZWVkLCBnZXRTcGVlZCxcclxuICAgICAgICB0dCwgdHRcclxuXHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvbmU7Il0sIm5hbWVzIjpbInNvY2tldCIsIkRyb25lIiwic3RhdGUiLCJzb2NrZXRTdGF0ZSIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJkYXRhIiwib3BlblNvY2tldCIsIm9uIiwic2V0VGltZW91dCIsInVzZVN0YXRlIiwiZHJvbmVzdGF0ZSIsInVwZGF0ZURyb25lc3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRTaWduYWxTdHJlbmd0aCIsImdldFNwZWVkIiwidHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Objects/Drone.js\n");

/***/ })

});