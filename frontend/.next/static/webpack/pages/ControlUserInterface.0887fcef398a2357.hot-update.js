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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Objects/Drone */ \"./Objects/Drone.js\");\n/* harmony import */ var _material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/BatteryCharging90 */ \"./node_modules/@material-ui/icons/BatteryCharging90.js\");\n/* harmony import */ var _mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Thermostat */ \"./node_modules/@mui/icons-material/Thermostat.js\");\n/* harmony import */ var _mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/SignalWifi3Bar */ \"./node_modules/@mui/icons-material/SignalWifi3Bar.js\");\n/* harmony import */ var _mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Speed */ \"./node_modules/@mui/icons-material/Speed.js\");\n/* harmony import */ var _mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Timer */ \"./node_modules/@mui/icons-material/Timer.js\");\n/* harmony import */ var _mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Height */ \"./node_modules/@mui/icons-material/Height.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\Users\\\\adidi\\\\Documents\\\\Development\\\\Robotics\\\\Tello\\\\node\\\\tello-nodejs-react\\\\fontend\\\\components\\\\StatusBar.js\",\n    _this = undefined;\n\n\n\n\n\n\n //import ThermostatIcon from '@material-ui/icons/Thermostat';\n\n\n\n\n\n\n\n\n\nvar StatusBar = function StatusBar() {\n  _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openSocket();\n  console.log(_Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState());\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    sx: {\n      flexGrow: 1\n    },\n    style: {\n      color: \"gray\",\n      position: \"fixed\",\n      bottom: 0,\n      width: \"100%\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      position: \"sticky\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        variant: \"regular\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          sx: {\n            flexGrow: 1\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            container: true,\n            spacing: {\n              xs: 2,\n              md: 3\n            },\n            columns: {\n              xs: 12,\n              sm: 12,\n              md: 12\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 30,\n                  columnNumber: 19\n                }, _this), \" \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().bat != null ? _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().bat : 'N/A', \" %\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 36,\n                  columnNumber: 17\n                }, _this), \" \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().temph != null ? _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().temph : 'N/A', \" C\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 43,\n                  columnNumber: 17\n                }, _this), \"  \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSignalStrength() != null ? _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSignalStrength() : 'N/A', \" dB\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 51,\n                  columnNumber: 17\n                }, _this), \"  \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSpeed(), \" s\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 17\n                }, _this), \"  \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().time, \" s\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 17\n                }, _this), \"  \", _Objects_Drone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tof, \" cm\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = StatusBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatusBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"StatusBar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXR1c0Jhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNWSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBRXRCUixFQUFBQSxpRUFBQTtBQUNBVSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVgsK0RBQUEsRUFBWjtBQUVBLHNCQUNFLDhEQUFDLHlEQUFEO0FBQUssTUFBRSxFQUFFO0FBQUVhLE1BQUFBLFFBQVEsRUFBRTtBQUFaLEtBQVQ7QUFBMEIsU0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCQyxNQUFBQSxRQUFRLEVBQUUsT0FBM0I7QUFBb0NDLE1BQUFBLE1BQU0sRUFBRSxDQUE1QztBQUErQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQXRELEtBQWpDO0FBQUEsMkJBQ0UsOERBQUMsNERBQUQ7QUFBUSxjQUFRLEVBQUMsUUFBakI7QUFBQSw2QkFDRSw4REFBQyw2REFBRDtBQUFTLGVBQU8sRUFBQyxTQUFqQjtBQUFBLCtCQUNFLDhEQUFDLHlEQUFEO0FBQUssWUFBRSxFQUFFO0FBQUVKLFlBQUFBLFFBQVEsRUFBRTtBQUFaLFdBQVQ7QUFBQSxpQ0FDRSw4REFBQywwREFBRDtBQUFNLHFCQUFTLE1BQWY7QUFBZ0IsbUJBQU8sRUFBRTtBQUFFSyxjQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxjQUFBQSxFQUFFLEVBQUU7QUFBYixhQUF6QjtBQUEyQyxtQkFBTyxFQUFFO0FBQUVELGNBQUFBLEVBQUUsRUFBRSxFQUFOO0FBQVVFLGNBQUFBLEVBQUUsRUFBRSxFQUFkO0FBQWtCRCxjQUFBQSxFQUFFLEVBQUU7QUFBdEIsYUFBcEQ7QUFBQSxvQ0FFRSw4REFBQywwREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBVyxnQkFBRSxFQUFFLENBQWY7QUFBa0IsZ0JBQUUsRUFBRSxDQUF0QjtBQUF5QixnQkFBRSxFQUFFLENBQTdCO0FBQUEscUNBQ0UsOERBQUMsZ0VBQUQ7QUFBWSx1QkFBTyxFQUFDLElBQXBCO0FBQXlCLHFCQUFLLEVBQUMsU0FBL0I7QUFBeUMseUJBQVMsRUFBQyxLQUFuRDtBQUFBLHdDQUNFLDhEQUFDLDRFQUFEO0FBQXVCLDJCQUFTLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixPQUNtRG5CLCtEQUFBLEdBQWlCcUIsR0FBakIsSUFBd0IsSUFBeEIsR0FBK0JyQiwrREFBQSxHQUFpQnFCLEdBQWhELEdBQXNELEtBRHpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFPRSw4REFBQywwREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBVyxnQkFBRSxFQUFFLENBQWY7QUFBa0IsZ0JBQUUsRUFBRSxDQUF0QjtBQUF5QixnQkFBRSxFQUFFLENBQTdCO0FBQUEscUNBRUUsOERBQUMsZ0VBQUQ7QUFBWSx1QkFBTyxFQUFDLElBQXBCO0FBQXlCLHFCQUFLLEVBQUMsU0FBL0I7QUFBeUMseUJBQVMsRUFBQyxLQUFuRDtBQUFBLHdDQUNBLDhEQUFDLHNFQUFEO0FBQWdCLDJCQUFTLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQSxPQUN5Q3JCLCtEQUFBLEdBQWlCc0IsS0FBakIsSUFBMEIsSUFBMUIsR0FBaUN0QiwrREFBQSxHQUFpQnNCLEtBQWxELEdBQTBELEtBRG5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFhRSw4REFBQywwREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBVyxnQkFBRSxFQUFFLENBQWY7QUFBa0IsZ0JBQUUsRUFBRSxDQUF0QjtBQUF5QixnQkFBRSxFQUFFLENBQTdCO0FBQUEscUNBR0UsOERBQUMsZ0VBQUQ7QUFBWSx1QkFBTyxFQUFDLElBQXBCO0FBQXlCLHFCQUFLLEVBQUMsU0FBL0I7QUFBeUMseUJBQVMsRUFBQyxLQUFuRDtBQUFBLHdDQUNBLDhEQUFDLDBFQUFEO0FBQW9CLDJCQUFTLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQSxRQUM2Q3RCLHdFQUFBLE1BQTZCLElBQTdCLEdBQW9DQSx3RUFBQSxFQUFwQyxHQUFnRSxLQUQ3RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGLGVBcUJFLDhEQUFDLDBEQUFEO0FBQU0sa0JBQUksTUFBVjtBQUFXLGdCQUFFLEVBQUUsQ0FBZjtBQUFrQixnQkFBRSxFQUFFLENBQXRCO0FBQXlCLGdCQUFFLEVBQUUsQ0FBN0I7QUFBQSxxQ0FHRSw4REFBQyxnRUFBRDtBQUFZLHVCQUFPLEVBQUMsSUFBcEI7QUFBeUIscUJBQUssRUFBQyxTQUEvQjtBQUF5Qyx5QkFBUyxFQUFDLEtBQW5EO0FBQUEsd0NBQ0EsOERBQUMsa0VBQUQ7QUFBVywyQkFBUyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREEsUUFDb0NBLCtEQUFBLEVBRHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJGLGVBNEJFLDhEQUFDLDBEQUFEO0FBQU0sa0JBQUksTUFBVjtBQUFXLGdCQUFFLEVBQUUsQ0FBZjtBQUFrQixnQkFBRSxFQUFFLENBQXRCO0FBQXlCLGdCQUFFLEVBQUUsQ0FBN0I7QUFBQSxxQ0FJRSw4REFBQyxnRUFBRDtBQUFZLHVCQUFPLEVBQUMsSUFBcEI7QUFBeUIscUJBQUssRUFBQyxTQUEvQjtBQUF5Qyx5QkFBUyxFQUFDLEtBQW5EO0FBQUEsd0NBQ0EsOERBQUMsa0VBQUQ7QUFBVywyQkFBUyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREEsUUFDb0NBLCtEQUFBLEdBQWlCeUIsSUFEckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE1QkYsZUFvQ0UsOERBQUMsMERBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQVcsZ0JBQUUsRUFBRSxDQUFmO0FBQWtCLGdCQUFFLEVBQUUsQ0FBdEI7QUFBeUIsZ0JBQUUsRUFBRSxDQUE3QjtBQUFBLHFDQUdFLDhEQUFDLGdFQUFEO0FBQVksdUJBQU8sRUFBQyxJQUFwQjtBQUF5QixxQkFBSyxFQUFDLFNBQS9CO0FBQXlDLHlCQUFTLEVBQUMsS0FBbkQ7QUFBQSx3Q0FDQSw4REFBQyxtRUFBRDtBQUFZLDJCQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQSxRQUNxQ3pCLCtEQUFBLEdBQWlCMEIsR0FEdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkRELENBbEVEOztLQUFNbEI7QUFvRU4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGF0dXNCYXIuanM/NmZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRHJvbmUgZnJvbSAnLi4vT2JqZWN0cy9Ecm9uZSdcclxuXHJcbmltcG9ydCBCYXR0ZXJ5Q2hhcmdpbmc5MEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JhdHRlcnlDaGFyZ2luZzkwJztcclxuLy9pbXBvcnQgVGhlcm1vc3RhdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RoZXJtb3N0YXQnO1xyXG5pbXBvcnQgVGhlcm1vc3RhdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9UaGVybW9zdGF0JztcclxuaW1wb3J0IFNpZ25hbFdpZmkzQmFySWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NpZ25hbFdpZmkzQmFyJztcclxuaW1wb3J0IFNwZWVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NwZWVkJztcclxuaW1wb3J0IFRpbWVySWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1RpbWVyJztcclxuaW1wb3J0IEhlaWdodEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9IZWlnaHQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xyXG5jb25zdCBTdGF0dXNCYXIgPSAoKSA9PiB7XHJcblxyXG4gIERyb25lLm9wZW5Tb2NrZXQoKTtcclxuICBjb25zb2xlLmxvZyhEcm9uZS5nZXRTdGF0ZSgpKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fSBzdHlsZT17eyBjb2xvcjogXCJncmF5XCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIGJvdHRvbTogMCwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RpY2t5XCI+XHJcbiAgICAgICAgPFRvb2xiYXIgdmFyaWFudD1cInJlZ3VsYXJcIj5cclxuICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fSBjb2x1bW5zPXt7IHhzOiAxMiwgc206IDEyLCBtZDogMTIgfX0+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsyfSBtZD17Mn0gPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCYXR0ZXJ5Q2hhcmdpbmc5MEljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIiAvPiB7IERyb25lLmdldFN0YXRlKCkuYmF0ICE9IG51bGwgPyBEcm9uZS5nZXRTdGF0ZSgpLmJhdCA6ICdOL0EnIH0gJVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8VGhlcm1vc3RhdEljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIiAvPiB7RHJvbmUuZ2V0U3RhdGUoKS50ZW1waCAhPSBudWxsID8gRHJvbmUuZ2V0U3RhdGUoKS50ZW1waCA6ICdOL0EnfSBDXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsyfSBtZD17Mn0gPlxyXG4gICBcclxuXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgIDxTaWduYWxXaWZpM0Jhckljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIi8+ICB7RHJvbmUuZ2V0U2lnbmFsU3RyZW5ndGgoKSAhPSBudWxsID8gRHJvbmUuZ2V0U2lnbmFsU3RyZW5ndGgoKSA6ICdOL0EnfSBkQlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8U3BlZWRJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIvPiAge0Ryb25lLmdldFNwZWVkKCl9IHNcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSA+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8VGltZXJJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIvPiAge0Ryb25lLmdldFN0YXRlKCkudGltZX0gc1xyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgIDxIZWlnaHRJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIvPiAge0Ryb25lLmdldFN0YXRlKCkudG9mfSBjbVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0dXNCYXI7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiRHJvbmUiLCJCYXR0ZXJ5Q2hhcmdpbmc5MEljb24iLCJUaGVybW9zdGF0SWNvbiIsIlNpZ25hbFdpZmkzQmFySWNvbiIsIlNwZWVkSWNvbiIsIlRpbWVySWNvbiIsIkhlaWdodEljb24iLCJHcmlkIiwiU3RhdHVzQmFyIiwib3BlblNvY2tldCIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsImZsZXhHcm93IiwiY29sb3IiLCJwb3NpdGlvbiIsImJvdHRvbSIsIndpZHRoIiwieHMiLCJtZCIsInNtIiwiYmF0IiwidGVtcGgiLCJnZXRTaWduYWxTdHJlbmd0aCIsImdldFNwZWVkIiwidGltZSIsInRvZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StatusBar.js\n");

/***/ })

});