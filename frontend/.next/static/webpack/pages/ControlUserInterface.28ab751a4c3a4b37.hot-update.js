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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Objects/Drone */ \"./Objects/Drone.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/BatteryCharging90 */ \"./node_modules/@material-ui/icons/BatteryCharging90.js\");\n/* harmony import */ var _mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Thermostat */ \"./node_modules/@mui/icons-material/Thermostat.js\");\n/* harmony import */ var _mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/SignalWifi3Bar */ \"./node_modules/@mui/icons-material/SignalWifi3Bar.js\");\n/* harmony import */ var _mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Speed */ \"./node_modules/@mui/icons-material/Speed.js\");\n/* harmony import */ var _mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Timer */ \"./node_modules/@mui/icons-material/Timer.js\");\n/* harmony import */ var _mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Height */ \"./node_modules/@mui/icons-material/Height.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\adidi\\\\Documents\\\\Development\\\\Robotics\\\\Tello\\\\node\\\\tello-nodejs-react\\\\fontend\\\\components\\\\StatusBar.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n //import ThermostatIcon from '@material-ui/icons/Thermostat';\n\n\n\n\n\n\n\n\n_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openSocket();\n\nfunction getState() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneState = _useState[0],\n      updateDroneState = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    updateDroneState(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState());\n    console.log(droneState);\n  }, []);\n  return droneState;\n}\n\n_s(getState, \"UNysuUqyy+K/zRt8DNtHLjBGYcc=\");\n\nvar StatusBar = function StatusBar() {\n  _s2();\n\n  var state = _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tt();\n  console.log(state); // const speed = getSpeed();\n  // const signalStrength = getSignalStrength();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneSpeed = _useState2[0],\n      updateDroneSpeed = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneSignalStrength = _useState3[0],\n      updateDroneSignalStrength = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    updateDroneSpeed(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSpeed());\n    updateDroneSignalStrength(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSignalStrength());\n    console.log(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState());\n    console.log('running');\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sx: {\n      flexGrow: 1\n    },\n    style: {\n      color: \"gray\",\n      position: \"fixed\",\n      bottom: 0,\n      width: \"100%\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      position: \"sticky\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        variant: \"regular\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          sx: {\n            flexGrow: 1\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            container: true,\n            spacing: {\n              xs: 2,\n              md: 3\n            },\n            columns: {\n              xs: 12,\n              sm: 12,\n              md: 12\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 60,\n                  columnNumber: 19\n                }, _this), \" \", state != null ? state.bat + ' %' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 19\n                }, _this), \" \", state != null ? state.temph + ' C' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 19\n                }, _this), \"  \", droneSignalStrength != null ? droneSignalStrength + ' dB' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 81,\n                  columnNumber: 19\n                }, _this), \"  \", droneSpeed != null ? droneSpeed + ' s' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 89,\n                  columnNumber: 19\n                }, _this), \"  \", state != null ? state.time + ' s' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 19\n                }, _this), \"  \", state != null ? state.tof + ' cm' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(StatusBar, \"zAfdB2zf/O9vzudNmXhMcTGUEZA=\");\n\n_c = StatusBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatusBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"StatusBar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlCLHFCQUFLLEVBQUMsU0FBL0I7QUFBeUMseUJBQVMsRUFBQyxLQUFuRDtBQUFBLHdDQUNFLDhEQUFDLG1FQUFEO0FBQVksMkJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLFFBQ3dDbEIsS0FBSyxJQUFJLElBQVQsR0FBZ0JBLEtBQUssQ0FBQ21CLEdBQU4sR0FBWSxLQUE1QixHQUFvQyxLQUQ1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2REQsQ0FoRkQ7O0lBQU1wQjs7S0FBQUE7QUFrRk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGF0dXNCYXIuanM/NmZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRHJvbmUgZnJvbSAnLi4vT2JqZWN0cy9Ecm9uZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmF0dGVyeUNoYXJnaW5nOTBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CYXR0ZXJ5Q2hhcmdpbmc5MCc7XHJcbi8vaW1wb3J0IFRoZXJtb3N0YXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UaGVybW9zdGF0JztcclxuaW1wb3J0IFRoZXJtb3N0YXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVGhlcm1vc3RhdCc7XHJcbmltcG9ydCBTaWduYWxXaWZpM0Jhckljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaWduYWxXaWZpM0Jhcic7XHJcbmltcG9ydCBTcGVlZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TcGVlZCc7XHJcbmltcG9ydCBUaW1lckljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9UaW1lcic7XHJcbmltcG9ydCBIZWlnaHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSGVpZ2h0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcclxuXHJcbkRyb25lLm9wZW5Tb2NrZXQoKTtcclxuXHJcbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xyXG5cclxuICBjb25zdCBbZHJvbmVTdGF0ZSwgdXBkYXRlRHJvbmVTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZURyb25lU3RhdGUoRHJvbmUuZ2V0U3RhdGUoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhkcm9uZVN0YXRlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiBkcm9uZVN0YXRlO1xyXG59XHJcblxyXG5cclxuY29uc3QgU3RhdHVzQmFyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBzdGF0ZSA9IERyb25lLnR0KCk7XHJcbiAgY29uc29sZS5sb2coc3RhdGUpXHJcbiAgLy8gY29uc3Qgc3BlZWQgPSBnZXRTcGVlZCgpO1xyXG4gIC8vIGNvbnN0IHNpZ25hbFN0cmVuZ3RoID0gZ2V0U2lnbmFsU3RyZW5ndGgoKTtcclxuXHJcbiAgY29uc3QgW2Ryb25lU3BlZWQsIHVwZGF0ZURyb25lU3BlZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Ryb25lU2lnbmFsU3RyZW5ndGgsIHVwZGF0ZURyb25lU2lnbmFsU3RyZW5ndGhdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgdXBkYXRlRHJvbmVTcGVlZChEcm9uZS5nZXRTcGVlZCgpKTtcclxuICAgIHVwZGF0ZURyb25lU2lnbmFsU3RyZW5ndGgoRHJvbmUuZ2V0U2lnbmFsU3RyZW5ndGgoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhEcm9uZS5nZXRTdGF0ZSgpKVxyXG4gICAgY29uc29sZS5sb2coJ3J1bm5pbmcnKVxyXG4gIH0sIFtdKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0gc3R5bGU9e3sgY29sb3I6IFwiZ3JheVwiLCBwb3NpdGlvbjogXCJmaXhlZFwiLCBib3R0b206IDAsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0aWNreVwiPlxyXG4gICAgICAgIDxUb29sYmFyIHZhcmlhbnQ9XCJyZWd1bGFyXCI+XHJcbiAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX0gY29sdW1ucz17eyB4czogMTIsIHNtOiAxMiwgbWQ6IDEyIH19PlxyXG5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8QmF0dGVyeUNoYXJnaW5nOTBJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIgLz4ge3N0YXRlICE9IG51bGwgPyBzdGF0ZS5iYXQgKyAnICUnIDogJ04vQSd9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsyfSBtZD17Mn0gPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8VGhlcm1vc3RhdEljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIiAvPiB7c3RhdGUgIT0gbnVsbCA/IHN0YXRlLnRlbXBoICsgJyBDJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTaWduYWxXaWZpM0Jhckljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIiAvPiAge2Ryb25lU2lnbmFsU3RyZW5ndGggIT0gbnVsbCA/IGRyb25lU2lnbmFsU3RyZW5ndGggKyAnIGRCJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3BlZWRJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIgLz4gIHtkcm9uZVNwZWVkICE9IG51bGwgPyBkcm9uZVNwZWVkICsgJyBzJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8VGltZXJJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIgLz4gIHtzdGF0ZSAhPSBudWxsID8gc3RhdGUudGltZSArICcgcycgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8SGVpZ2h0SWNvbiBjbGFzc05hbWU9XCJ1aS1pY29uc1wiIC8+ICB7c3RhdGUgIT0gbnVsbCA/IHN0YXRlLnRvZiArICcgY20nIDogJ04vQSd9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1c0JhcjtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJEcm9uZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiQmF0dGVyeUNoYXJnaW5nOTBJY29uIiwiVGhlcm1vc3RhdEljb24iLCJTaWduYWxXaWZpM0Jhckljb24iLCJTcGVlZEljb24iLCJUaW1lckljb24iLCJIZWlnaHRJY29uIiwiR3JpZCIsIm9wZW5Tb2NrZXQiLCJnZXRTdGF0ZSIsImRyb25lU3RhdGUiLCJ1cGRhdGVEcm9uZVN0YXRlIiwiY29uc29sZSIsImxvZyIsIlN0YXR1c0JhciIsInN0YXRlIiwidHQiLCJkcm9uZVNwZWVkIiwidXBkYXRlRHJvbmVTcGVlZCIsImRyb25lU2lnbmFsU3RyZW5ndGgiLCJ1cGRhdGVEcm9uZVNpZ25hbFN0cmVuZ3RoIiwiZ2V0U3BlZWQiLCJnZXRTaWduYWxTdHJlbmd0aCIsImZsZXhHcm93IiwiY29sb3IiLCJwb3NpdGlvbiIsImJvdHRvbSIsIndpZHRoIiwieHMiLCJtZCIsInNtIiwiYmF0IiwidGVtcGgiLCJ0aW1lIiwidG9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/StatusBar.js\n");

/***/ })

});