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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Objects/Drone */ \"./Objects/Drone.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/BatteryCharging90 */ \"./node_modules/@material-ui/icons/BatteryCharging90.js\");\n/* harmony import */ var _mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Thermostat */ \"./node_modules/@mui/icons-material/Thermostat.js\");\n/* harmony import */ var _mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/SignalWifi3Bar */ \"./node_modules/@mui/icons-material/SignalWifi3Bar.js\");\n/* harmony import */ var _mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Speed */ \"./node_modules/@mui/icons-material/Speed.js\");\n/* harmony import */ var _mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Timer */ \"./node_modules/@mui/icons-material/Timer.js\");\n/* harmony import */ var _mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Height */ \"./node_modules/@mui/icons-material/Height.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\adidi\\\\Documents\\\\Development\\\\Robotics\\\\Tello\\\\node\\\\tello-nodejs-react\\\\fontend\\\\components\\\\StatusBar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n //import ThermostatIcon from '@material-ui/icons/Thermostat';\n\n\n\n\n\n\n\n\n\nvar StatusBar = function StatusBar() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneState = _useState[0],\n      updateDroneState = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneSpeed = _useState2[0],\n      updateDroneSpeed = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      droneSignalStrength = _useState3[0],\n      updateDroneSignalStrength = _useState3[1];\n\n  _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openSocket();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    updateDroneState(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState());\n    updateDroneSpeed(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSpeed());\n    updateDroneSignalStrength(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSignalStrength());\n    console.log(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState());\n    console.log('running');\n  }, [droneState]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sx: {\n      flexGrow: 1\n    },\n    style: {\n      color: \"gray\",\n      position: \"fixed\",\n      bottom: 0,\n      width: \"100%\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      position: \"sticky\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        variant: \"regular\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          sx: {\n            flexGrow: 1\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            container: true,\n            spacing: {\n              xs: 2,\n              md: 3\n            },\n            columns: {\n              xs: 12,\n              sm: 12,\n              md: 12\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 41,\n                  columnNumber: 19\n                }, _this), \" \", droneState != null ? droneState.bat + ' %' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 47,\n                  columnNumber: 17\n                }, _this), \" \", droneState != null ? droneState.temph + ' C' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 54,\n                  columnNumber: 17\n                }, _this), \"  \", droneSignalStrength != null ? droneSignalStrength + ' dB' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 17\n                }, _this), \"  \", droneSpeed != null ? droneSpeed + ' s' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 17\n                }, _this), \"  \", droneState != null ? droneState.time + ' s' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 17\n                }, _this), \"  \", droneState != null ? droneState.tof + ' cm' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(StatusBar, \"pmSoh/vfIBhLBmsYjvZC1+BGsJU=\");\n\n_c = StatusBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatusBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"StatusBar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUEscUJBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZERCxDQTdFRDs7R0FBTXhCOztLQUFBQTtBQStFTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N0YXR1c0Jhci5qcz82ZmUyIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBEcm9uZSBmcm9tICcuLi9PYmplY3RzL0Ryb25lJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXR0ZXJ5Q2hhcmdpbmc5MEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JhdHRlcnlDaGFyZ2luZzkwJztcclxuLy9pbXBvcnQgVGhlcm1vc3RhdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RoZXJtb3N0YXQnO1xyXG5pbXBvcnQgVGhlcm1vc3RhdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9UaGVybW9zdGF0JztcclxuaW1wb3J0IFNpZ25hbFdpZmkzQmFySWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NpZ25hbFdpZmkzQmFyJztcclxuaW1wb3J0IFNwZWVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NwZWVkJztcclxuaW1wb3J0IFRpbWVySWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1RpbWVyJztcclxuaW1wb3J0IEhlaWdodEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9IZWlnaHQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xyXG5jb25zdCBTdGF0dXNCYXIgPSAoKSA9PiB7XHJcblxyXG5cclxuICBjb25zdCBbZHJvbmVTdGF0ZSwgdXBkYXRlRHJvbmVTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZHJvbmVTcGVlZCwgdXBkYXRlRHJvbmVTcGVlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZHJvbmVTaWduYWxTdHJlbmd0aCwgdXBkYXRlRHJvbmVTaWduYWxTdHJlbmd0aF0gPSB1c2VTdGF0ZShudWxsKTtcclxuRHJvbmUub3BlblNvY2tldCgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgIHVwZGF0ZURyb25lU3RhdGUoRHJvbmUuZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICB1cGRhdGVEcm9uZVNwZWVkKERyb25lLmdldFNwZWVkKCkpO1xyXG4gICAgICAgICAgdXBkYXRlRHJvbmVTaWduYWxTdHJlbmd0aChEcm9uZS5nZXRTaWduYWxTdHJlbmd0aCgpKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKERyb25lLmdldFN0YXRlKCkpIFxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3J1bm5pbmcnKVxyXG4gICAgfSwgW2Ryb25lU3RhdGVdKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0gc3R5bGU9e3sgY29sb3I6IFwiZ3JheVwiLCBwb3NpdGlvbjogXCJmaXhlZFwiLCBib3R0b206IDAsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0aWNreVwiPlxyXG4gICAgICAgIDxUb29sYmFyIHZhcmlhbnQ9XCJyZWd1bGFyXCI+XHJcbiAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX0gY29sdW1ucz17eyB4czogMTIsIHNtOiAxMiwgbWQ6IDEyIH19PlxyXG5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8QmF0dGVyeUNoYXJnaW5nOTBJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIgLz4geyBkcm9uZVN0YXRlICE9IG51bGwgPyBkcm9uZVN0YXRlLmJhdCArICcgJScgOiAnTi9BJyB9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsyfSBtZD17Mn0gPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgIDxUaGVybW9zdGF0SWNvbiBjbGFzc05hbWU9XCJ1aS1pY29uc1wiIC8+IHtkcm9uZVN0YXRlICE9IG51bGwgPyBkcm9uZVN0YXRlLnRlbXBoICsgJyBDJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8U2lnbmFsV2lmaTNCYXJJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIvPiAge2Ryb25lU2lnbmFsU3RyZW5ndGggIT0gbnVsbCA/IGRyb25lU2lnbmFsU3RyZW5ndGggKyAnIGRCJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8U3BlZWRJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIvPiAge2Ryb25lU3BlZWQgICE9IG51bGwgPyBkcm9uZVNwZWVkICsgJyBzJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgIDxUaW1lckljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIi8+ICB7ZHJvbmVTdGF0ZSAhPSBudWxsID8gZHJvbmVTdGF0ZS50aW1lICsgJyBzJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgIDxIZWlnaHRJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIvPiAge2Ryb25lU3RhdGUgIT0gbnVsbCA/IGRyb25lU3RhdGUudG9mICsgJyBjbScgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzQmFyO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJBcHBCYXIiLCJCb3giLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkRyb25lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJCYXR0ZXJ5Q2hhcmdpbmc5MEljb24iLCJUaGVybW9zdGF0SWNvbiIsIlNpZ25hbFdpZmkzQmFySWNvbiIsIlNwZWVkSWNvbiIsIlRpbWVySWNvbiIsIkhlaWdodEljb24iLCJHcmlkIiwiU3RhdHVzQmFyIiwiZHJvbmVTdGF0ZSIsInVwZGF0ZURyb25lU3RhdGUiLCJkcm9uZVNwZWVkIiwidXBkYXRlRHJvbmVTcGVlZCIsImRyb25lU2lnbmFsU3RyZW5ndGgiLCJ1cGRhdGVEcm9uZVNpZ25hbFN0cmVuZ3RoIiwib3BlblNvY2tldCIsImdldFN0YXRlIiwiZ2V0U3BlZWQiLCJnZXRTaWduYWxTdHJlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmbGV4R3JvdyIsImNvbG9yIiwicG9zaXRpb24iLCJib3R0b20iLCJ3aWR0aCIsInhzIiwibWQiLCJzbSIsImJhdCIsInRlbXBoIiwidGltZSIsInRvZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StatusBar.js\n");

/***/ })

});