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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socket */ \"./socket.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Drone = function () {\n  var _s = $RefreshSig$(),\n      _ref;\n\n  var state = \"\";\n  var socketState = false;\n\n  var getState = function getState() {\n    return state; // Or pull this from cookie/localStorage\n  };\n\n  var setState = function setState(data) {\n    state = data; // Also set this in cookie/localStorage\n  };\n\n  var openSocket = function openSocket() {\n    if (!socketState) {\n      _socket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on('dronestate', function (data) {\n        state = data;\n      });\n      socketState = true;\n    }\n  };\n\n  function tt() {\n    _s();\n\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n        dronestate = _useState[0],\n        updateDronestate = _useState[1];\n\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n      _socket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on('dronestate', updateDronestate); //Drone.setState(dronestate);\n    }, []);\n    return dronestate;\n  }\n\n  _s(tt, \"R8RYShhvTd6XobN1fYKpnMoAqVE=\");\n\n  var getSignalStrength = function getSignalStrength() {\n    return 0;\n  };\n\n  var getSpeed = function getSpeed() {\n    return 0;\n  };\n\n  return _ref = {\n    getState: getState,\n    setState: setState,\n    openSocket: openSocket,\n    getSignalStrength: getSignalStrength\n  }, (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"getSignalStrength\", getSignalStrength), (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"getSpeed\", getSpeed), (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"getSpeed\", getSpeed), (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"tt\", tt), (0,C_Users_adidi_Documents_Development_Robotics_Tello_node_tello_nodejs_react_fontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"tt\", tt), _ref;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Drone);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9PYmplY3RzL0Ryb25lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBSUksS0FBSyxHQUFJLFlBQVk7QUFBQTtBQUFBOztBQUVyQixNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxLQUFsQjs7QUFFQSxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFZO0FBQ3ZCLFdBQU9GLEtBQVAsQ0FEdUIsQ0FDTjtBQUNwQixHQUZEOztBQUlBLE1BQUlHLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVVDLElBQVYsRUFBZ0I7QUFDM0JKLElBQUFBLEtBQUssR0FBR0ksSUFBUixDQUQyQixDQUUzQjtBQUNILEdBSEQ7O0FBS0EsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBWTtBQUN6QixRQUFJLENBQUNKLFdBQUwsRUFBa0I7QUFDZE4sTUFBQUEsa0RBQUEsQ0FBVSxZQUFWLEVBQXdCLFVBQUNTLElBQUQsRUFBVTtBQUM5QkosUUFBQUEsS0FBSyxHQUFHSSxJQUFSO0FBQ0gsT0FGRDtBQUlBSCxNQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNIO0FBQ0osR0FSRDs7QUFVQSxXQUFTTSxFQUFULEdBQWM7QUFBQTs7QUFDVixvQkFBdUNWLCtDQUFRLENBQUMsRUFBRCxDQUEvQztBQUFBLFFBQU9XLFVBQVA7QUFBQSxRQUFtQkMsZ0JBQW5COztBQUVBYixJQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWkQsTUFBQUEsa0RBQUEsQ0FBVSxZQUFWLEVBQXdCYyxnQkFBeEIsRUFEWSxDQUVaO0FBQ0gsS0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLFdBQU9ELFVBQVA7QUFFSDs7QUFqQ29CLEtBd0JaRCxFQXhCWTs7QUFtQ3JCLE1BQUlHLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBWTtBQUNoQyxXQUFPLENBQVA7QUFDSCxHQUZEOztBQUdBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7QUFDdkIsV0FBTyxDQUFQO0FBQ0gsR0FGRDs7QUFJQTtBQUNJVCxJQUFBQSxRQUFRLEVBQUVBLFFBRGQ7QUFFSUMsSUFBQUEsUUFBUSxFQUFFQSxRQUZkO0FBR0lFLElBQUFBLFVBQVUsRUFBRUEsVUFIaEI7QUFJSUssSUFBQUEsaUJBQWlCLEVBQWpCQTtBQUpKLHdPQUl1QkEsaUJBSnZCLDZOQUtJQyxRQUxKLDZOQUtjQSxRQUxkLHVOQU1JSixFQU5KLHVOQU1RQSxFQU5SO0FBVUgsQ0FwRFcsRUFBWjs7QUFzREEsK0RBQWVSLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vT2JqZWN0cy9Ecm9uZS5qcz83YTY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb2NrZXQgZnJvbSAnLi4vc29ja2V0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxudmFyIERyb25lID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc3RhdGUgPSBcIlwiO1xyXG4gICAgdmFyIHNvY2tldFN0YXRlID0gZmFsc2U7XHJcblxyXG4gICAgdmFyIGdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTsgICAgLy8gT3IgcHVsbCB0aGlzIGZyb20gY29va2llL2xvY2FsU3RvcmFnZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2V0U3RhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHN0YXRlID0gZGF0YTtcclxuICAgICAgICAvLyBBbHNvIHNldCB0aGlzIGluIGNvb2tpZS9sb2NhbFN0b3JhZ2VcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9wZW5Tb2NrZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzb2NrZXRTdGF0ZSkge1xyXG4gICAgICAgICAgICBzb2NrZXQub24oJ2Ryb25lc3RhdGUnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc29ja2V0U3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0dCgpIHtcclxuICAgICAgICBjb25zdCBbZHJvbmVzdGF0ZSwgdXBkYXRlRHJvbmVzdGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQub24oJ2Ryb25lc3RhdGUnLCB1cGRhdGVEcm9uZXN0YXRlKTtcclxuICAgICAgICAgICAgLy9Ecm9uZS5zZXRTdGF0ZShkcm9uZXN0YXRlKTtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIGRyb25lc3RhdGU7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2V0U2lnbmFsU3RyZW5ndGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICB2YXIgZ2V0U3BlZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXHJcbiAgICAgICAgc2V0U3RhdGU6IHNldFN0YXRlLFxyXG4gICAgICAgIG9wZW5Tb2NrZXQ6IG9wZW5Tb2NrZXQsXHJcbiAgICAgICAgZ2V0U2lnbmFsU3RyZW5ndGgsIGdldFNpZ25hbFN0cmVuZ3RoLFxyXG4gICAgICAgIGdldFNwZWVkLCBnZXRTcGVlZCxcclxuICAgICAgICB0dCwgdHRcclxuXHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvbmU7Il0sIm5hbWVzIjpbInNvY2tldCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiRHJvbmUiLCJzdGF0ZSIsInNvY2tldFN0YXRlIiwiZ2V0U3RhdGUiLCJzZXRTdGF0ZSIsImRhdGEiLCJvcGVuU29ja2V0Iiwib24iLCJ0dCIsImRyb25lc3RhdGUiLCJ1cGRhdGVEcm9uZXN0YXRlIiwiZ2V0U2lnbmFsU3RyZW5ndGgiLCJnZXRTcGVlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Objects/Drone.js\n");

/***/ })

});