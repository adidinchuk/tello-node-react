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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Objects/Drone */ \"./Objects/Drone.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/BatteryCharging90 */ \"./node_modules/@material-ui/icons/BatteryCharging90.js\");\n/* harmony import */ var _mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Thermostat */ \"./node_modules/@mui/icons-material/Thermostat.js\");\n/* harmony import */ var _mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/SignalWifi3Bar */ \"./node_modules/@mui/icons-material/SignalWifi3Bar.js\");\n/* harmony import */ var _mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Speed */ \"./node_modules/@mui/icons-material/Speed.js\");\n/* harmony import */ var _mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Timer */ \"./node_modules/@mui/icons-material/Timer.js\");\n/* harmony import */ var _mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Height */ \"./node_modules/@mui/icons-material/Height.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\adidi\\\\Documents\\\\Development\\\\Robotics\\\\Tello\\\\node\\\\tello-nodejs-react\\\\fontend\\\\components\\\\StatusBar.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n //import ThermostatIcon from '@material-ui/icons/Thermostat';\n\n\n\n\n\n\n\n\n\nfunction getState() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneState = _useState[0],\n      updateDroneState = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    updateDroneState(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState());\n    console.log(droneState);\n  }, []);\n  return status;\n}\n\n_s(getState, \"UNysuUqyy+K/zRt8DNtHLjBGYcc=\");\n\nvar StatusBar = function StatusBar() {\n  _s2();\n\n  var state = getState(); // const speed = getSpeed();\n  // const signalStrength = getSignalStrength();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneSpeed = _useState2[0],\n      updateDroneSpeed = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneSignalStrength = _useState3[0],\n      updateDroneSignalStrength = _useState3[1];\n\n  _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openSocket();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    updateDroneSpeed(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSpeed());\n    updateDroneSignalStrength(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSignalStrength());\n    console.log(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState());\n    console.log('running');\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sx: {\n      flexGrow: 1\n    },\n    style: {\n      color: \"gray\",\n      position: \"fixed\",\n      bottom: 0,\n      width: \"100%\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      position: \"sticky\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        variant: \"regular\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          sx: {\n            flexGrow: 1\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            container: true,\n            spacing: {\n              xs: 2,\n              md: 3\n            },\n            columns: {\n              xs: 12,\n              sm: 12,\n              md: 12\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 54,\n                  columnNumber: 19\n                }, _this), \" \", droneState != null ? droneState.bat + ' %' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 60,\n                  columnNumber: 17\n                }, _this), \" \", droneState != null ? droneState.temph + ' C' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 67,\n                  columnNumber: 17\n                }, _this), \"  \", droneSignalStrength != null ? droneSignalStrength + ' dB' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 17\n                }, _this), \"  \", droneSpeed != null ? droneSpeed + ' s' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 83,\n                  columnNumber: 17\n                }, _this), \"  \", droneState != null ? droneState.time + ' s' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 90,\n                  columnNumber: 17\n                }, _this), \"  \", droneState != null ? droneState.tof + ' cm' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(StatusBar, \"zAfdB2zf/O9vzudNmXhMcTGUEZA=\");\n\n_c = StatusBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatusBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"StatusBar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsS0FBbkQ7QUFBQSx3Q0FDQSw4REFBQyxtRUFBRDtBQUFZLDJCQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQSxRQUNxQ3hCLFVBQVUsSUFBSSxJQUFkLEdBQXFCQSxVQUFVLENBQUN5QixHQUFYLEdBQWlCLEtBQXRDLEdBQThDLEtBRG5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZERCxDQS9FRDs7SUFBTXBCOztLQUFBQTtBQWlGTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N0YXR1c0Jhci5qcz82ZmUyIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBEcm9uZSBmcm9tICcuLi9PYmplY3RzL0Ryb25lJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXR0ZXJ5Q2hhcmdpbmc5MEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JhdHRlcnlDaGFyZ2luZzkwJztcclxuLy9pbXBvcnQgVGhlcm1vc3RhdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RoZXJtb3N0YXQnO1xyXG5pbXBvcnQgVGhlcm1vc3RhdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9UaGVybW9zdGF0JztcclxuaW1wb3J0IFNpZ25hbFdpZmkzQmFySWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NpZ25hbFdpZmkzQmFyJztcclxuaW1wb3J0IFNwZWVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NwZWVkJztcclxuaW1wb3J0IFRpbWVySWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1RpbWVyJztcclxuaW1wb3J0IEhlaWdodEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9IZWlnaHQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XHJcbiAgY29uc3QgW2Ryb25lU3RhdGUsIHVwZGF0ZURyb25lU3RhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZURyb25lU3RhdGUoRHJvbmUuZ2V0U3RhdGUoKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRyb25lU3RhdGUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gc3RhdHVzO1xyXG59XHJcblxyXG5cclxuY29uc3QgU3RhdHVzQmFyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAvLyBjb25zdCBzcGVlZCA9IGdldFNwZWVkKCk7XHJcbiAvLyBjb25zdCBzaWduYWxTdHJlbmd0aCA9IGdldFNpZ25hbFN0cmVuZ3RoKCk7XHJcblxyXG4gIGNvbnN0IFtkcm9uZVNwZWVkLCB1cGRhdGVEcm9uZVNwZWVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkcm9uZVNpZ25hbFN0cmVuZ3RoLCB1cGRhdGVEcm9uZVNpZ25hbFN0cmVuZ3RoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5Ecm9uZS5vcGVuU29ja2V0KCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICBcclxuICAgICAgICAgIHVwZGF0ZURyb25lU3BlZWQoRHJvbmUuZ2V0U3BlZWQoKSk7XHJcbiAgICAgICAgICB1cGRhdGVEcm9uZVNpZ25hbFN0cmVuZ3RoKERyb25lLmdldFNpZ25hbFN0cmVuZ3RoKCkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coRHJvbmUuZ2V0U3RhdGUoKSkgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygncnVubmluZycpXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19IHN0eWxlPXt7IGNvbG9yOiBcImdyYXlcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgYm90dG9tOiAwLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGlja3lcIj5cclxuICAgICAgICA8VG9vbGJhciB2YXJpYW50PVwicmVndWxhclwiPlxyXG4gICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDIsIG1kOiAzIH19IGNvbHVtbnM9e3sgeHM6IDEyLCBzbTogMTIsIG1kOiAxMiB9fT5cclxuXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPEJhdHRlcnlDaGFyZ2luZzkwSWNvbiBjbGFzc05hbWU9XCJ1aS1pY29uc1wiIC8+IHsgZHJvbmVTdGF0ZSAhPSBudWxsID8gZHJvbmVTdGF0ZS5iYXQgKyAnICUnIDogJ04vQScgfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8VGhlcm1vc3RhdEljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIiAvPiB7ZHJvbmVTdGF0ZSAhPSBudWxsID8gZHJvbmVTdGF0ZS50ZW1waCArICcgQycgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcbiAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPFNpZ25hbFdpZmkzQmFySWNvbiBjbGFzc05hbWU9XCJ1aS1pY29uc1wiLz4gIHtkcm9uZVNpZ25hbFN0cmVuZ3RoICE9IG51bGwgPyBkcm9uZVNpZ25hbFN0cmVuZ3RoICsgJyBkQicgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsyfSBtZD17Mn0gPlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPFNwZWVkSWNvbiBjbGFzc05hbWU9XCJ1aS1pY29uc1wiLz4gIHtkcm9uZVNwZWVkICAhPSBudWxsID8gZHJvbmVTcGVlZCArICcgcycgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8VGltZXJJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIvPiAge2Ryb25lU3RhdGUgIT0gbnVsbCA/IGRyb25lU3RhdGUudGltZSArICcgcycgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcbiAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8SGVpZ2h0SWNvbiBjbGFzc05hbWU9XCJ1aS1pY29uc1wiLz4gIHtkcm9uZVN0YXRlICE9IG51bGwgPyBkcm9uZVN0YXRlLnRvZiArICcgY20nIDogJ04vQSd9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1c0JhcjtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJEcm9uZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiQmF0dGVyeUNoYXJnaW5nOTBJY29uIiwiVGhlcm1vc3RhdEljb24iLCJTaWduYWxXaWZpM0Jhckljb24iLCJTcGVlZEljb24iLCJUaW1lckljb24iLCJIZWlnaHRJY29uIiwiR3JpZCIsImdldFN0YXRlIiwiZHJvbmVTdGF0ZSIsInVwZGF0ZURyb25lU3RhdGUiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiU3RhdHVzQmFyIiwic3RhdGUiLCJkcm9uZVNwZWVkIiwidXBkYXRlRHJvbmVTcGVlZCIsImRyb25lU2lnbmFsU3RyZW5ndGgiLCJ1cGRhdGVEcm9uZVNpZ25hbFN0cmVuZ3RoIiwib3BlblNvY2tldCIsImdldFNwZWVkIiwiZ2V0U2lnbmFsU3RyZW5ndGgiLCJmbGV4R3JvdyIsImNvbG9yIiwicG9zaXRpb24iLCJib3R0b20iLCJ3aWR0aCIsInhzIiwibWQiLCJzbSIsImJhdCIsInRlbXBoIiwidGltZSIsInRvZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StatusBar.js\n");

/***/ })

});