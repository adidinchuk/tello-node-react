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

/***/ "./components/StatusBar.js":
/*!*********************************!*\
  !*** ./components/StatusBar.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Objects/Drone */ \"./Objects/Drone.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/BatteryCharging90 */ \"./node_modules/@material-ui/icons/BatteryCharging90.js\");\n/* harmony import */ var _mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Thermostat */ \"./node_modules/@mui/icons-material/Thermostat.js\");\n/* harmony import */ var _mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/SignalWifi3Bar */ \"./node_modules/@mui/icons-material/SignalWifi3Bar.js\");\n/* harmony import */ var _mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Speed */ \"./node_modules/@mui/icons-material/Speed.js\");\n/* harmony import */ var _mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Timer */ \"./node_modules/@mui/icons-material/Timer.js\");\n/* harmony import */ var _mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Height */ \"./node_modules/@mui/icons-material/Height.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\adidi\\\\Documents\\\\Development\\\\Robotics\\\\Tello\\\\node\\\\tello-nodejs-react\\\\fontend\\\\components\\\\StatusBar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n //import ThermostatIcon from '@material-ui/icons/Thermostat';\n\n\n\n\n\n\n\n\n\nvar StatusBar = function StatusBar() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneState = _useState[0],\n      updateDroneState = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneVelocity = _useState2[0],\n      updateDroneVelocity = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneSignalStrength = _useState3[0],\n      updateDroneSignalStrength = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    updateDroneState(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState());\n  }, []);\n  _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openSocket();\n  console.log(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState());\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sx: {\n      flexGrow: 1\n    },\n    style: {\n      color: \"gray\",\n      position: \"fixed\",\n      bottom: 0,\n      width: \"100%\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      position: \"sticky\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        variant: \"regular\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          sx: {\n            flexGrow: 1\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            container: true,\n            spacing: {\n              xs: 2,\n              md: 3\n            },\n            columns: {\n              xs: 12,\n              sm: 12,\n              md: 12\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 19\n                }, _this), \" \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().bat != null ? _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().bat + ' %' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 17\n                }, _this), \" \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().temph != null ? _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().temph + ' C' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 17\n                }, _this), \"  \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSignalStrength() != null ? _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSignalStrength() + ' dB' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 61,\n                  columnNumber: 17\n                }, _this), \"  \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSpeed() != null ? _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSpeed() + ' s' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 69,\n                  columnNumber: 17\n                }, _this), \"  \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().time != null ? _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().time + ' s' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 17\n                }, _this), \"  \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tof != null ? _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tof + ' cm' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(StatusBar, \"HOJTUDVsdUgFaLGZzncpaEdF0y4=\");\n\n_c = StatusBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatusBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"StatusBar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkRELENBNUVEOztHQUFNeEI7O0tBQUFBO0FBOEVOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3RhdHVzQmFyLmpzPzZmZTIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERyb25lIGZyb20gJy4uL09iamVjdHMvRHJvbmUnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhdHRlcnlDaGFyZ2luZzkwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQmF0dGVyeUNoYXJnaW5nOTAnO1xyXG4vL2ltcG9ydCBUaGVybW9zdGF0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVGhlcm1vc3RhdCc7XHJcbmltcG9ydCBUaGVybW9zdGF0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1RoZXJtb3N0YXQnO1xyXG5pbXBvcnQgU2lnbmFsV2lmaTNCYXJJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2lnbmFsV2lmaTNCYXInO1xyXG5pbXBvcnQgU3BlZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU3BlZWQnO1xyXG5pbXBvcnQgVGltZXJJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVGltZXInO1xyXG5pbXBvcnQgSGVpZ2h0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0hlaWdodCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XHJcbmNvbnN0IFN0YXR1c0JhciA9ICgpID0+IHtcclxuXHJcblxyXG4gIGNvbnN0IFtkcm9uZVN0YXRlLCB1cGRhdGVEcm9uZVN0YXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkcm9uZVZlbG9jaXR5LCB1cGRhdGVEcm9uZVZlbG9jaXR5XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkcm9uZVNpZ25hbFN0cmVuZ3RoLCB1cGRhdGVEcm9uZVNpZ25hbFN0cmVuZ3RoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICB1cGRhdGVEcm9uZVN0YXRlKERyb25lLmdldFN0YXRlKCkpO1xyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICBEcm9uZS5vcGVuU29ja2V0KCk7XHJcbiAgY29uc29sZS5sb2coRHJvbmUuZ2V0U3RhdGUoKSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0gc3R5bGU9e3sgY29sb3I6IFwiZ3JheVwiLCBwb3NpdGlvbjogXCJmaXhlZFwiLCBib3R0b206IDAsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0aWNreVwiPlxyXG4gICAgICAgIDxUb29sYmFyIHZhcmlhbnQ9XCJyZWd1bGFyXCI+XHJcbiAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX0gY29sdW1ucz17eyB4czogMTIsIHNtOiAxMiwgbWQ6IDEyIH19PlxyXG5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8QmF0dGVyeUNoYXJnaW5nOTBJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIgLz4geyBEcm9uZS5nZXRTdGF0ZSgpLmJhdCAhPSBudWxsID8gRHJvbmUuZ2V0U3RhdGUoKS5iYXQgKyAnICUnIDogJ04vQScgfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8VGhlcm1vc3RhdEljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIiAvPiB7RHJvbmUuZ2V0U3RhdGUoKS50ZW1waCAhPSBudWxsID8gRHJvbmUuZ2V0U3RhdGUoKS50ZW1waCArICcgQycgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcbiAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPFNpZ25hbFdpZmkzQmFySWNvbiBjbGFzc05hbWU9XCJ1aS1pY29uc1wiLz4gIHtEcm9uZS5nZXRTaWduYWxTdHJlbmd0aCgpICE9IG51bGwgPyBEcm9uZS5nZXRTaWduYWxTdHJlbmd0aCgpICsgJyBkQicgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsyfSBtZD17Mn0gPlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPFNwZWVkSWNvbiBjbGFzc05hbWU9XCJ1aS1pY29uc1wiLz4gIHtEcm9uZS5nZXRTcGVlZCgpICAhPSBudWxsID8gRHJvbmUuZ2V0U3BlZWQoKSArICcgcycgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8VGltZXJJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIvPiAge0Ryb25lLmdldFN0YXRlKCkudGltZSAhPSBudWxsID8gRHJvbmUuZ2V0U3RhdGUoKS50aW1lICsgJyBzJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgIDxIZWlnaHRJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIvPiAge0Ryb25lLmdldFN0YXRlKCkudG9mICAhPSBudWxsID8gRHJvbmUuZ2V0U3RhdGUoKS50b2YgKyAnIGNtJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0dXNCYXI7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiRHJvbmUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkJhdHRlcnlDaGFyZ2luZzkwSWNvbiIsIlRoZXJtb3N0YXRJY29uIiwiU2lnbmFsV2lmaTNCYXJJY29uIiwiU3BlZWRJY29uIiwiVGltZXJJY29uIiwiSGVpZ2h0SWNvbiIsIkdyaWQiLCJTdGF0dXNCYXIiLCJkcm9uZVN0YXRlIiwidXBkYXRlRHJvbmVTdGF0ZSIsImRyb25lVmVsb2NpdHkiLCJ1cGRhdGVEcm9uZVZlbG9jaXR5IiwiZHJvbmVTaWduYWxTdHJlbmd0aCIsInVwZGF0ZURyb25lU2lnbmFsU3RyZW5ndGgiLCJnZXRTdGF0ZSIsIm9wZW5Tb2NrZXQiLCJjb25zb2xlIiwibG9nIiwiZmxleEdyb3ciLCJjb2xvciIsInBvc2l0aW9uIiwiYm90dG9tIiwid2lkdGgiLCJ4cyIsIm1kIiwic20iLCJiYXQiLCJ0ZW1waCIsImdldFNpZ25hbFN0cmVuZ3RoIiwiZ2V0U3BlZWQiLCJ0aW1lIiwidG9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/StatusBar.js\n");

/***/ })

});