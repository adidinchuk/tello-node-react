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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Objects/Drone */ \"./Objects/Drone.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/BatteryCharging90 */ \"./node_modules/@material-ui/icons/BatteryCharging90.js\");\n/* harmony import */ var _mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Thermostat */ \"./node_modules/@mui/icons-material/Thermostat.js\");\n/* harmony import */ var _mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/SignalWifi3Bar */ \"./node_modules/@mui/icons-material/SignalWifi3Bar.js\");\n/* harmony import */ var _mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Speed */ \"./node_modules/@mui/icons-material/Speed.js\");\n/* harmony import */ var _mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Timer */ \"./node_modules/@mui/icons-material/Timer.js\");\n/* harmony import */ var _mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Height */ \"./node_modules/@mui/icons-material/Height.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\adidi\\\\Documents\\\\Development\\\\Robotics\\\\Tello\\\\node\\\\tello-nodejs-react\\\\fontend\\\\components\\\\StatusBar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n //import ThermostatIcon from '@material-ui/icons/Thermostat';\n\n\n\n\n\n\n\n\n\nvar StatusBar = function StatusBar() {\n  _s();\n\n  var state = _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openDroneStateSocket();\n  console.log(state); // const speed = getSpeed();\n  // const signalStrength = getSignalStrength();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneSpeed = _useState[0],\n      updateDroneSpeed = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneSignalStrength = _useState2[0],\n      updateDroneSignalStrength = _useState2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sx: {\n      flexGrow: 1\n    },\n    style: {\n      color: \"gray\",\n      position: \"fixed\",\n      bottom: 0,\n      width: \"100%\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      position: \"sticky\",\n      enableColorOnDark: \"true\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        variant: \"regular\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          sx: {\n            flexGrow: 1\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            container: true,\n            spacing: {\n              xs: 2,\n              md: 3\n            },\n            columns: {\n              xs: 12,\n              sm: 12,\n              md: 12\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 19\n                }, _this), \" \", state != null ? state.bat + ' %' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 19\n                }, _this), \" \", state != null ? state.temph + ' C' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 19\n                }, _this), \"  \", droneSignalStrength != null ? droneSignalStrength + ' dB' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 61,\n                  columnNumber: 19\n                }, _this), \"  \", droneSpeed != null ? droneSpeed + ' cm/s' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 69,\n                  columnNumber: 19\n                }, _this), \"  \", state != null ? state.time + ' s' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 19\n                }, _this), \"  \", state != null ? state.tof + ' cm' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(StatusBar, \"d+EHi/jqyrxAWerTLwFtH+6K7pQ=\");\n\n_c = StatusBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatusBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"StatusBar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERyb25lIGZyb20gJy4uL09iamVjdHMvRHJvbmUnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhdHRlcnlDaGFyZ2luZzkwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQmF0dGVyeUNoYXJnaW5nOTAnO1xyXG4vL2ltcG9ydCBUaGVybW9zdGF0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVGhlcm1vc3RhdCc7XHJcbmltcG9ydCBUaGVybW9zdGF0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1RoZXJtb3N0YXQnO1xyXG5pbXBvcnQgU2lnbmFsV2lmaTNCYXJJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2lnbmFsV2lmaTNCYXInO1xyXG5pbXBvcnQgU3BlZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU3BlZWQnO1xyXG5pbXBvcnQgVGltZXJJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVGltZXInO1xyXG5pbXBvcnQgSGVpZ2h0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0hlaWdodCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XHJcblxyXG5cclxuY29uc3QgU3RhdHVzQmFyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBzdGF0ZSA9IERyb25lLm9wZW5Ecm9uZVN0YXRlU29ja2V0KCk7XHJcbiAgY29uc29sZS5sb2coc3RhdGUpXHJcbiAgLy8gY29uc3Qgc3BlZWQgPSBnZXRTcGVlZCgpO1xyXG4gIC8vIGNvbnN0IHNpZ25hbFN0cmVuZ3RoID0gZ2V0U2lnbmFsU3RyZW5ndGgoKTtcclxuXHJcbiAgY29uc3QgW2Ryb25lU3BlZWQsIHVwZGF0ZURyb25lU3BlZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Ryb25lU2lnbmFsU3RyZW5ndGgsIHVwZGF0ZURyb25lU2lnbmFsU3RyZW5ndGhdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19IHN0eWxlPXt7IGNvbG9yOiBcImdyYXlcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgYm90dG9tOiAwLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGlja3lcIiBlbmFibGVDb2xvck9uRGFyaz1cInRydWVcIj5cclxuICAgICAgICA8VG9vbGJhciB2YXJpYW50PVwicmVndWxhclwiPlxyXG4gICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDIsIG1kOiAzIH19IGNvbHVtbnM9e3sgeHM6IDEyLCBzbTogMTIsIG1kOiAxMiB9fT5cclxuXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPEJhdHRlcnlDaGFyZ2luZzkwSWNvbiBjbGFzc05hbWU9XCJ1aS1pY29uc1wiIC8+IHtzdGF0ZSAhPSBudWxsID8gc3RhdGUuYmF0ICsgJyAlJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPFRoZXJtb3N0YXRJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIgLz4ge3N0YXRlICE9IG51bGwgPyBzdGF0ZS50ZW1waCArICcgQycgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2lnbmFsV2lmaTNCYXJJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIgLz4gIHtkcm9uZVNpZ25hbFN0cmVuZ3RoICE9IG51bGwgPyBkcm9uZVNpZ25hbFN0cmVuZ3RoICsgJyBkQicgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsyfSBtZD17Mn0gPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPFNwZWVkSWNvbiBjbGFzc05hbWU9XCJ1aS1pY29uc1wiIC8+ICB7ZHJvbmVTcGVlZCAhPSBudWxsID8gZHJvbmVTcGVlZCArICcgY20vcycgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPFRpbWVySWNvbiBjbGFzc05hbWU9XCJ1aS1pY29uc1wiIC8+ICB7c3RhdGUgIT0gbnVsbCA/IHN0YXRlLnRpbWUgKyAnIHMnIDogJ04vQSd9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsyfSBtZD17Mn0gPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPEhlaWdodEljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIiAvPiAge3N0YXRlICE9IG51bGwgPyBzdGF0ZS50b2YgKyAnIGNtJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0dXNCYXI7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiRHJvbmUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkJhdHRlcnlDaGFyZ2luZzkwSWNvbiIsIlRoZXJtb3N0YXRJY29uIiwiU2lnbmFsV2lmaTNCYXJJY29uIiwiU3BlZWRJY29uIiwiVGltZXJJY29uIiwiSGVpZ2h0SWNvbiIsIkdyaWQiLCJTdGF0dXNCYXIiLCJzdGF0ZSIsIm9wZW5Ecm9uZVN0YXRlU29ja2V0IiwiY29uc29sZSIsImxvZyIsImRyb25lU3BlZWQiLCJ1cGRhdGVEcm9uZVNwZWVkIiwiZHJvbmVTaWduYWxTdHJlbmd0aCIsInVwZGF0ZURyb25lU2lnbmFsU3RyZW5ndGgiLCJmbGV4R3JvdyIsImNvbG9yIiwicG9zaXRpb24iLCJib3R0b20iLCJ3aWR0aCIsInhzIiwibWQiLCJzbSIsImJhdCIsInRlbXBoIiwidGltZSIsInRvZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StatusBar.js\n");

/***/ })

});