/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/ControlUserInterface";
exports.ids = ["pages/ControlUserInterface"];
exports.modules = {

/***/ "../config.js":
/*!********************!*\
  !*** ../config.js ***!
  \********************/
/***/ ((module) => {

eval("module.exports = {\r\n    backend: {\r\n        drone: {\r\n            COMMAND_PORT: \"8889\",\r\n            STATUS_PORT: \"8890\",\r\n            VIDEO_ENDPOINT: \"udp://0.0.0.0:11111\",\r\n            HOST: \"192.168.10.1\"\r\n        },\r\n        IO_SERVER_PORT: 6767,\r\n        SERVER_HOST: 'http://192.168.0.17',\r\n        VIDEO_STREAMING_SERVER_HOST: 'ws://192.168.0.17',\r\n        VIDEO_STREAMING_SERVER_PORT : 3001,\r\n        DATA_PORT: 3002\r\n    },\r\n    frontend : {\r\n        \r\n    }\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWxsby1yZWFjdC1mcm9udGVuZC8uLi9jb25maWcuanM/NzMwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGJhY2tlbmQ6IHtcclxuICAgICAgICBkcm9uZToge1xyXG4gICAgICAgICAgICBDT01NQU5EX1BPUlQ6IFwiODg4OVwiLFxyXG4gICAgICAgICAgICBTVEFUVVNfUE9SVDogXCI4ODkwXCIsXHJcbiAgICAgICAgICAgIFZJREVPX0VORFBPSU5UOiBcInVkcDovLzAuMC4wLjA6MTExMTFcIixcclxuICAgICAgICAgICAgSE9TVDogXCIxOTIuMTY4LjEwLjFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgSU9fU0VSVkVSX1BPUlQ6IDY3NjcsXHJcbiAgICAgICAgU0VSVkVSX0hPU1Q6ICdodHRwOi8vMTkyLjE2OC4wLjE3JyxcclxuICAgICAgICBWSURFT19TVFJFQU1JTkdfU0VSVkVSX0hPU1Q6ICd3czovLzE5Mi4xNjguMC4xNycsXHJcbiAgICAgICAgVklERU9fU1RSRUFNSU5HX1NFUlZFUl9QT1JUIDogMzAwMSxcclxuICAgICAgICBEQVRBX1BPUlQ6IDMwMDJcclxuICAgIH0sXHJcbiAgICBmcm9udGVuZCA6IHtcclxuICAgICAgICBcclxuICAgIH1cclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../config.js\n");

/***/ }),

/***/ "./components/StatusBar.js":
/*!*********************************!*\
  !*** ./components/StatusBar.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _objects_Drone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../objects/Drone */ \"./objects/Drone.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/BatteryCharging90 */ \"@material-ui/icons/BatteryCharging90\");\n/* harmony import */ var _material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Thermostat */ \"@mui/icons-material/Thermostat\");\n/* harmony import */ var _mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/SignalWifi3Bar */ \"@mui/icons-material/SignalWifi3Bar\");\n/* harmony import */ var _mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Speed */ \"@mui/icons-material/Speed\");\n/* harmony import */ var _mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Timer */ \"@mui/icons-material/Timer\");\n/* harmony import */ var _mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Height */ \"@mui/icons-material/Height\");\n/* harmony import */ var _mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../config */ \"../config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_13__]);\nswr__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"C:\\\\Users\\\\adidi\\\\Documents\\\\Development\\\\Robotics\\\\Tello\\\\automation\\\\tello-node-react\\\\frontend\\\\components\\\\StatusBar.js\";\n\n\n\n\n\n\n //import ThermostatIcon from '@material-ui/icons/Thermostat';\n\n\n\n\n\n\n\n\n\n\n\n\nconst StatusBar = () => {\n  const state = _objects_Drone__WEBPACK_IMPORTED_MODULE_4__[\"default\"].openDroneStateSocket();\n  const {\n    0: droneInfo,\n    1: updateDroneInfo\n  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n    wifi: null,\n    speed: null\n  });\n  const address = (_config__WEBPACK_IMPORTED_MODULE_15___default().backend.SERVER_HOST) + ':' + (_config__WEBPACK_IMPORTED_MODULE_15___default().backend.DATA_PORT) + '/api/info/get';\n\n  const fetcher = async url => await axios__WEBPACK_IMPORTED_MODULE_14___default().get(url).then(res => {\n    res.data, updateDroneInfo(res.data);\n  });\n\n  const {\n    data,\n    error\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(address, fetcher);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {\n    sx: {\n      flexGrow: 1\n    },\n    style: {\n      color: \"gray\",\n      position: \"fixed\",\n      bottom: 0,\n      width: \"100%\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_0___default()), {\n      position: \"sticky\",\n      color: \"inherit\",\n      className: \"test\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default()), {\n        variant: \"regular\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {\n          sx: {\n            flexGrow: 1\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {\n            container: true,\n            spacing: {\n              xs: 2,\n              md: 3\n            },\n            columns: {\n              xs: 12,\n              sm: 12,\n              md: 12\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_material_ui_icons_BatteryCharging90__WEBPACK_IMPORTED_MODULE_6___default()), {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 39,\n                  columnNumber: 19\n                }, undefined), \" \", state.bat != null ? state.bat + ' %' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_icons_material_Thermostat__WEBPACK_IMPORTED_MODULE_7___default()), {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 19\n                }, undefined), \" \", state.temph != null ? state.temph + ' C' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_icons_material_SignalWifi3Bar__WEBPACK_IMPORTED_MODULE_8___default()), {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 52,\n                  columnNumber: 19\n                }, undefined), \"  \", droneInfo.wifi != null ? droneInfo.wifi + ' dB' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_icons_material_Speed__WEBPACK_IMPORTED_MODULE_9___default()), {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 60,\n                  columnNumber: 19\n                }, undefined), \"  \", droneInfo.speed != null ? droneInfo.speed + ' cm/s' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_10___default()), {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 68,\n                  columnNumber: 19\n                }, undefined), \"  \", state.time != null ? state.time + ' s' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {\n              item: true,\n              xs: 2,\n              sm: 2,\n              md: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n                variant: \"h6\",\n                color: \"inherit\",\n                component: \"div\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_icons_material_Height__WEBPACK_IMPORTED_MODULE_11___default()), {\n                  className: \"ui-icons\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 19\n                }, undefined), \"  \", state.tof != undefined ? state.tof + ' cm' : 'N/A']\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatusBar);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUEsNkJBREYsUUFDd0MzQixLQUFLLENBQUM0QixHQUFOLElBQWFDLFNBQWIsR0FBeUI3QixLQUFLLENBQUM0QixHQUFOLEdBQVksS0FBckMsR0FBNkMsS0FEckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNkRELENBdkVEOztBQXlFQSxpRUFBZTdCLFNBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbGxvLXJlYWN0LWZyb250ZW5kLy4vY29tcG9uZW50cy9TdGF0dXNCYXIuanM/NmZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRHJvbmUgZnJvbSAnLi4vb2JqZWN0cy9Ecm9uZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmF0dGVyeUNoYXJnaW5nOTBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CYXR0ZXJ5Q2hhcmdpbmc5MCc7XHJcbi8vaW1wb3J0IFRoZXJtb3N0YXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UaGVybW9zdGF0JztcclxuaW1wb3J0IFRoZXJtb3N0YXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVGhlcm1vc3RhdCc7XHJcbmltcG9ydCBTaWduYWxXaWZpM0Jhckljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaWduYWxXaWZpM0Jhcic7XHJcbmltcG9ydCBTcGVlZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TcGVlZCc7XHJcbmltcG9ydCBUaW1lckljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9UaW1lcic7XHJcbmltcG9ydCBIZWlnaHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSGVpZ2h0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IFN0YXR1c0JhciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgc3RhdGUgPSBEcm9uZS5vcGVuRHJvbmVTdGF0ZVNvY2tldCgpO1xyXG4gIGNvbnN0IFtkcm9uZUluZm8sIHVwZGF0ZURyb25lSW5mb10gPSB1c2VTdGF0ZSh7d2lmaTogbnVsbCwgc3BlZWQ6IG51bGx9KTtcclxuXHJcbiAgY29uc3QgYWRkcmVzcyA9IGNvbmZpZy5iYWNrZW5kLlNFUlZFUl9IT1NUICsgJzonICsgY29uZmlnLmJhY2tlbmQuREFUQV9QT1JUICsgJy9hcGkvaW5mby9nZXQnO1xyXG4gIGNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsKSA9PiBhd2FpdCBheGlvcy5nZXQodXJsKS50aGVuKChyZXMpID0+IHtyZXMuZGF0YSwgdXBkYXRlRHJvbmVJbmZvKHJlcy5kYXRhKX0pO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihhZGRyZXNzLCBmZXRjaGVyKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19IHN0eWxlPXt7IGNvbG9yOiBcImdyYXlcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgYm90dG9tOiAwLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGlja3lcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9XCJ0ZXN0XCI+XHJcbiAgICAgICAgPFRvb2xiYXIgdmFyaWFudD1cInJlZ3VsYXJcIj5cclxuICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fSBjb2x1bW5zPXt7IHhzOiAxMiwgc206IDEyLCBtZDogMTIgfX0+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsyfSBtZD17Mn0gPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCYXR0ZXJ5Q2hhcmdpbmc5MEljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIiAvPiB7c3RhdGUuYmF0ICE9IG51bGwgPyBzdGF0ZS5iYXQgKyAnICUnIDogJ04vQSd9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsyfSBtZD17Mn0gPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8VGhlcm1vc3RhdEljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIiAvPiB7c3RhdGUudGVtcGggIT0gbnVsbCA/IHN0YXRlLnRlbXBoICsgJyBDJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTaWduYWxXaWZpM0Jhckljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIiAvPiAge2Ryb25lSW5mby53aWZpICE9IG51bGwgPyBkcm9uZUluZm8ud2lmaSArICcgZEInIDogJ04vQSd9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGVlZEljb24gY2xhc3NOYW1lPVwidWktaWNvbnNcIiAvPiAge2Ryb25lSW5mby5zcGVlZCAhPSBudWxsID8gZHJvbmVJbmZvLnNwZWVkICsgJyBjbS9zJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8VGltZXJJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIgLz4gIHtzdGF0ZS50aW1lICE9IG51bGwgPyBzdGF0ZS50aW1lICsgJyBzJyA6ICdOL0EnfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17Mn0gbWQ9ezJ9ID5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWlnaHRJY29uIGNsYXNzTmFtZT1cInVpLWljb25zXCIgLz4gIHtzdGF0ZS50b2YgIT0gdW5kZWZpbmVkID8gc3RhdGUudG9mICsgJyBjbScgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzQmFyO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJBcHBCYXIiLCJCb3giLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkRyb25lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJCYXR0ZXJ5Q2hhcmdpbmc5MEljb24iLCJUaGVybW9zdGF0SWNvbiIsIlNpZ25hbFdpZmkzQmFySWNvbiIsIlNwZWVkSWNvbiIsIlRpbWVySWNvbiIsIkhlaWdodEljb24iLCJHcmlkIiwidXNlU1dSIiwiYXhpb3MiLCJjb25maWciLCJTdGF0dXNCYXIiLCJzdGF0ZSIsIm9wZW5Ecm9uZVN0YXRlU29ja2V0IiwiZHJvbmVJbmZvIiwidXBkYXRlRHJvbmVJbmZvIiwid2lmaSIsInNwZWVkIiwiYWRkcmVzcyIsImJhY2tlbmQiLCJTRVJWRVJfSE9TVCIsIkRBVEFfUE9SVCIsImZldGNoZXIiLCJ1cmwiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVycm9yIiwiZmxleEdyb3ciLCJjb2xvciIsInBvc2l0aW9uIiwiYm90dG9tIiwid2lkdGgiLCJ4cyIsIm1kIiwic20iLCJiYXQiLCJ0ZW1waCIsInRpbWUiLCJ0b2YiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/StatusBar.js\n");

/***/ }),

/***/ "./components/VideoStreamFrame.js":
/*!****************************************!*\
  !*** ./components/VideoStreamFrame.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cycjimmy_jsmpeg_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cycjimmy/jsmpeg-player */ \"@cycjimmy/jsmpeg-player\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cycjimmy_jsmpeg_player__WEBPACK_IMPORTED_MODULE_1__]);\n_cycjimmy_jsmpeg_player__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"C:\\\\Users\\\\adidi\\\\Documents\\\\Development\\\\Robotics\\\\Tello\\\\automation\\\\tello-node-react\\\\frontend\\\\components\\\\VideoStreamFrame.js\";\n\n\n\n\n\nconst VideoStreamFrame = props => {\n  const {\n    0: src,\n    1: udpateSrc\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  props.socket.on('image', image => {\n    // console.log('data', data);            \n    udpateSrc(image);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: props.wrapperClassName,\n    style: {\n      height: props.height,\n      width: props.width\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n      src: `data:image/jpeg;base64,${src}`,\n      style: {\n        height: props.height,\n        width: props.width\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoStreamFrame);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvU3RyZWFtRnJhbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTU0sZ0JBQWdCLEdBQUlDLEtBQUQsSUFBVztBQUVoQyxRQUFNO0FBQUEsT0FBQ0MsR0FBRDtBQUFBLE9BQU1DO0FBQU4sTUFBbUJMLCtDQUFRLENBQUMsSUFBRCxDQUFqQztBQUVBRyxFQUFBQSxLQUFLLENBQUNHLE1BQU4sQ0FBYUMsRUFBYixDQUFnQixPQUFoQixFQUEwQkMsS0FBRCxJQUFXO0FBQ2hDO0FBQ0FILElBQUFBLFNBQVMsQ0FBQ0csS0FBRCxDQUFUO0FBRUgsR0FKRDtBQU1BLHNCQUVJO0FBQ0ksYUFBUyxFQUFFTCxLQUFLLENBQUNNLGdCQURyQjtBQUVJLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxNQUFNLEVBQUVQLEtBQUssQ0FBQ08sTUFBaEI7QUFBd0JDLE1BQUFBLEtBQUssRUFBRVIsS0FBSyxDQUFDUTtBQUFyQyxLQUZYO0FBQUEsMkJBR0k7QUFBSyxTQUFHLEVBQUcsMEJBQXlCUCxHQUFJLEVBQXhDO0FBQTJDLFdBQUssRUFBRTtBQUFFTSxRQUFBQSxNQUFNLEVBQUVQLEtBQUssQ0FBQ08sTUFBaEI7QUFBd0JDLFFBQUFBLEtBQUssRUFBRVIsS0FBSyxDQUFDUTtBQUFyQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBVUgsQ0FwQkQ7O0FBc0JBLGlFQUFlVCxnQkFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVsbG8tcmVhY3QtZnJvbnRlbmQvLi9jb21wb25lbnRzL1ZpZGVvU3RyZWFtRnJhbWUuanM/MTUyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSlNNcGVnIGZyb20gJ0BjeWNqaW1teS9qc21wZWctcGxheWVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVmlkZW9TdHJlYW1GcmFtZSA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzcmMsIHVkcGF0ZVNyY10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIHByb3BzLnNvY2tldC5vbignaW1hZ2UnLCAoaW1hZ2UpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpOyAgICAgICAgICAgIFxyXG4gICAgICAgIHVkcGF0ZVNyYyhpbWFnZSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLndyYXBwZXJDbGFzc05hbWV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogcHJvcHMuaGVpZ2h0LCB3aWR0aDogcHJvcHMud2lkdGggfX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwke3NyY31gfSBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLmhlaWdodCwgd2lkdGg6IHByb3BzLndpZHRoIH19PjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlb1N0cmVhbUZyYW1lO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSlNNcGVnIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJWaWRlb1N0cmVhbUZyYW1lIiwicHJvcHMiLCJzcmMiLCJ1ZHBhdGVTcmMiLCJzb2NrZXQiLCJvbiIsImltYWdlIiwid3JhcHBlckNsYXNzTmFtZSIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VideoStreamFrame.js\n");

/***/ }),

/***/ "./objects/Drone.js":
/*!**************************!*\
  !*** ./objects/Drone.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../socket */ \"./socket.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Drone = function () {\n  var state = \"\";\n  var socketState = false;\n\n  var getState = function () {\n    return state;\n  };\n\n  var setState = function (data) {\n    state = data;\n  };\n\n  var openSocket = function () {\n    if (!socketState) {\n      _socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('dronestate', data => {\n        state = data;\n      });\n      socketState = true;\n    }\n  };\n\n  function openDroneStateSocket() {\n    const {\n      0: dronestate,\n      1: updateDronestate\n    } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n      _socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('dronestate', updateDronestate);\n    }, []);\n    return dronestate;\n  }\n\n  function openStatusSocket() {\n    const {\n      0: status,\n      1: updateStatus\n    } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n      _socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('status', updateStatus);\n    }, []);\n    return status;\n  }\n\n  var getSignalStrength = function () {\n    return 0;\n  };\n\n  var getSpeed = function () {\n    return 0;\n  };\n\n  return {\n    getState: getState,\n    setState: setState,\n    openSocket: openSocket,\n    getSignalStrength,\n    getSignalStrength,\n    getSpeed,\n    getSpeed,\n    openDroneStateSocket,\n    openDroneStateSocket,\n    openStatusSocket,\n    openStatusSocket\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drone);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9vYmplY3RzL0Ryb25lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQUlHLEtBQUssR0FBSSxZQUFZO0FBRXJCLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEtBQWxCOztBQUVBLE1BQUlDLFFBQVEsR0FBRyxZQUFZO0FBQ3ZCLFdBQU9GLEtBQVA7QUFDSCxHQUZEOztBQUlBLE1BQUlHLFFBQVEsR0FBRyxVQUFVQyxJQUFWLEVBQWdCO0FBQzNCSixJQUFBQSxLQUFLLEdBQUdJLElBQVI7QUFDSCxHQUZEOztBQUlBLE1BQUlDLFVBQVUsR0FBRyxZQUFZO0FBQ3pCLFFBQUksQ0FBQ0osV0FBTCxFQUFrQjtBQUNkTCxNQUFBQSxrREFBQSxDQUFVLFlBQVYsRUFBeUJRLElBQUQsSUFBVTtBQUM5QkosUUFBQUEsS0FBSyxHQUFHSSxJQUFSO0FBQ0gsT0FGRDtBQUdBSCxNQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNIO0FBQ0osR0FQRDs7QUFTQSxXQUFTTSxvQkFBVCxHQUFnQztBQUM1QixVQUFNO0FBQUEsU0FBQ0MsVUFBRDtBQUFBLFNBQWFDO0FBQWIsUUFBaUNYLCtDQUFRLENBQUMsRUFBRCxDQUEvQztBQUNBRCxJQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDWkQsTUFBQUEsa0RBQUEsQ0FBVSxZQUFWLEVBQXdCYSxnQkFBeEI7QUFDSCxLQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0EsV0FBT0QsVUFBUDtBQUVIOztBQUVELFdBQVNFLGdCQUFULEdBQTRCO0FBQ3hCLFVBQU07QUFBQSxTQUFDQyxNQUFEO0FBQUEsU0FBU0M7QUFBVCxRQUF5QmQsK0NBQVEsQ0FBQyxLQUFELENBQXZDO0FBQ0FELElBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNaRCxNQUFBQSxrREFBQSxDQUFVLFFBQVYsRUFBb0JnQixZQUFwQjtBQUNILEtBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxXQUFPRCxNQUFQO0FBQ0g7O0FBRUQsTUFBSUUsaUJBQWlCLEdBQUcsWUFBWTtBQUNoQyxXQUFPLENBQVA7QUFDSCxHQUZEOztBQUdBLE1BQUlDLFFBQVEsR0FBRyxZQUFZO0FBQ3ZCLFdBQU8sQ0FBUDtBQUNILEdBRkQ7O0FBSUEsU0FBTztBQUNIWixJQUFBQSxRQUFRLEVBQUVBLFFBRFA7QUFFSEMsSUFBQUEsUUFBUSxFQUFFQSxRQUZQO0FBR0hFLElBQUFBLFVBQVUsRUFBRUEsVUFIVDtBQUlIUSxJQUFBQSxpQkFKRztBQUlnQkEsSUFBQUEsaUJBSmhCO0FBS0hDLElBQUFBLFFBTEc7QUFLT0EsSUFBQUEsUUFMUDtBQU1IUCxJQUFBQSxvQkFORztBQU1tQkEsSUFBQUEsb0JBTm5CO0FBT0hHLElBQUFBLGdCQVBHO0FBT2VBLElBQUFBO0FBUGYsR0FBUDtBQVVILENBeERXLEVBQVo7O0FBMERBLGlFQUFlWCxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVsbG8tcmVhY3QtZnJvbnRlbmQvLi9vYmplY3RzL0Ryb25lLmpzPzZlMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNvY2tldCBmcm9tICcuLi9zb2NrZXQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxudmFyIERyb25lID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc3RhdGUgPSBcIlwiO1xyXG4gICAgdmFyIHNvY2tldFN0YXRlID0gZmFsc2U7XHJcblxyXG4gICAgdmFyIGdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTsgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgc3RhdGUgPSBkYXRhO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb3BlblNvY2tldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNvY2tldFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vbignZHJvbmVzdGF0ZScsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNvY2tldFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkRyb25lU3RhdGVTb2NrZXQoKSB7XHJcbiAgICAgICAgY29uc3QgW2Ryb25lc3RhdGUsIHVwZGF0ZURyb25lc3RhdGVdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vbignZHJvbmVzdGF0ZScsIHVwZGF0ZURyb25lc3RhdGUpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICByZXR1cm4gZHJvbmVzdGF0ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlblN0YXR1c1NvY2tldCgpIHtcclxuICAgICAgICBjb25zdCBbc3RhdHVzLCB1cGRhdGVTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vbignc3RhdHVzJywgdXBkYXRlU3RhdHVzKTtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2V0U2lnbmFsU3RyZW5ndGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICB2YXIgZ2V0U3BlZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXHJcbiAgICAgICAgc2V0U3RhdGU6IHNldFN0YXRlLFxyXG4gICAgICAgIG9wZW5Tb2NrZXQ6IG9wZW5Tb2NrZXQsXHJcbiAgICAgICAgZ2V0U2lnbmFsU3RyZW5ndGgsIGdldFNpZ25hbFN0cmVuZ3RoLFxyXG4gICAgICAgIGdldFNwZWVkLCBnZXRTcGVlZCxcclxuICAgICAgICBvcGVuRHJvbmVTdGF0ZVNvY2tldCwgb3BlbkRyb25lU3RhdGVTb2NrZXQsXHJcbiAgICAgICAgb3BlblN0YXR1c1NvY2tldCwgb3BlblN0YXR1c1NvY2tldFxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb25lOyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRyb25lIiwic3RhdGUiLCJzb2NrZXRTdGF0ZSIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJkYXRhIiwib3BlblNvY2tldCIsIm9uIiwib3BlbkRyb25lU3RhdGVTb2NrZXQiLCJkcm9uZXN0YXRlIiwidXBkYXRlRHJvbmVzdGF0ZSIsIm9wZW5TdGF0dXNTb2NrZXQiLCJzdGF0dXMiLCJ1cGRhdGVTdGF0dXMiLCJnZXRTaWduYWxTdHJlbmd0aCIsImdldFNwZWVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./objects/Drone.js\n");

/***/ }),

/***/ "./pages/ControlUserInterface.js/index.js":
/*!************************************************!*\
  !*** ./pages/ControlUserInterface.js/index.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_VideoStreamFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/VideoStreamFrame */ \"./components/VideoStreamFrame.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ \"../config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_StatusBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/StatusBar */ \"./components/StatusBar.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Fab */ \"@mui/material/Fab\");\n/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Fab__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_icons_material_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Navigation */ \"@mui/icons-material/Navigation\");\n/* harmony import */ var _mui_icons_material_Navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Navigation__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Person */ \"@mui/icons-material/Person\");\n/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_icons_material_People__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/People */ \"@mui/icons-material/People\");\n/* harmony import */ var _mui_icons_material_People__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_People__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/FormGroup */ \"@mui/material/FormGroup\");\n/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/FormControlLabel */ \"@mui/material/FormControlLabel\");\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Switch */ \"@mui/material/Switch\");\n/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _objects_Drone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../objects/Drone */ \"./objects/Drone.js\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Divider */ \"@mui/material/Divider\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_VideoStreamFrame__WEBPACK_IMPORTED_MODULE_0__, _components_StatusBar__WEBPACK_IMPORTED_MODULE_4__]);\n([_components_VideoStreamFrame__WEBPACK_IMPORTED_MODULE_0__, _components_StatusBar__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"C:\\\\Users\\\\adidi\\\\Documents\\\\Development\\\\Robotics\\\\Tello\\\\automation\\\\tello-node-react\\\\frontend\\\\pages\\\\ControlUserInterface.js\\\\index.js\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst resolutionRatio = 1.33333;\nconst padding = 24;\nconst videoOverlayOptions = {};\n\nconst IndexPage = () => {\n  const state = _objects_Drone__WEBPACK_IMPORTED_MODULE_15__[\"default\"].openDroneStateSocket();\n  const {\n    0: windowDimension,\n    1: detectHW\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n\n  function detectSize() {\n    if (false) {}\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    if (windowDimension == null) detectSize();\n    window.addEventListener('resize', detectSize);\n    return () => {\n      window.removeEventListener('resize', detectSize);\n    };\n  }, [windowDimension]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_16___default()), {\n      sx: {\n        minWidth: 275\n      },\n      className: \"float-FAB-div\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_18___default()), {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n          sx: {\n            flexGrow: 1\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {\n            container: true,\n            spacing: 2,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {\n              item: true,\n              xs: 8,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12___default()), {\n                control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_13___default()), {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 60\n                }, undefined),\n                label: \"Follow\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 33\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 29\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {\n              item: true,\n              xs: 4,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_9___default()), {\n                sx: {\n                  mr: 0\n                },\n                className: \"FAB-icons\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 33\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 29\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {\n              item: true,\n              xs: 8,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12___default()), {\n                control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_13___default()), {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 64,\n                  columnNumber: 60\n                }, undefined),\n                label: \"Follow\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 33\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 29\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {\n              item: true,\n              xs: 4,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_icons_material_People__WEBPACK_IMPORTED_MODULE_10___default()), {\n                sx: {\n                  mr: 0\n                },\n                className: \"FAB-icons\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 33\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 29\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_19___default()), {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_20___default()), {\n            className: \"FAB-button\",\n            variant: \"outlined\",\n            color: \"success\",\n            children: 'land'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {\n      container: true,\n      spacing: 0,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(\"div\", {\n        className: \"video\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_VideoStreamFrame__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          wrapperClassName: \"video-wrapper\",\n          abs: windowDimension == null ? null : windowDimension.height,\n          height: windowDimension == null ? null : Math.min(windowDimension.height, (windowDimension.width - 2 * padding) / resolutionRatio),\n          width: windowDimension == null ? null : Math.min(windowDimension.width - 2 * padding, windowDimension.height * resolutionRatio),\n          socket: socket_io_client__WEBPACK_IMPORTED_MODULE_5___default().connect((_config__WEBPACK_IMPORTED_MODULE_1___default().backend.SERVER_HOST) + ':' + (_config__WEBPACK_IMPORTED_MODULE_1___default().backend.VIDEO_STREAMING_SERVER_PORT), {\n            withCredentials: false\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_StatusBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db250cm9sVXNlckludGVyZmFjZS5qcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1zQixlQUFlLEdBQUcsT0FBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsRUFBaEI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxFQUE1Qjs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUVwQixRQUFNQyxLQUFLLEdBQUdWLDRFQUFBLEVBQWQ7QUFDQSxRQUFNO0FBQUEsT0FBQ1ksZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUE4QnpCLCtDQUFRLENBQUMsSUFBRCxDQUE1Qzs7QUFFQSxXQUFTMEIsVUFBVCxHQUFzQjtBQUNsQixlQUNJRCxFQUFBO0FBQ1A7O0FBRUQxQixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDWixRQUFJeUIsZUFBZSxJQUFJLElBQXZCLEVBQ0lFLFVBQVU7QUFDZEUsSUFBQUEsTUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ04sVUFBbEM7QUFDQSxXQUFPLE1BQU07QUFDVEUsTUFBQUEsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1AsVUFBckM7QUFDSCxLQUZEO0FBR0gsR0FQUSxFQU9OLENBQUNGLGVBQUQsQ0FQTSxDQUFUO0FBVUEsc0JBQ0k7QUFBQSw0QkFFSSwrREFBQyw0REFBRDtBQUFNLFFBQUUsRUFBRTtBQUFFVSxRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFWO0FBQTZCLGVBQVMsRUFBQyxlQUF2QztBQUFBLDZCQUNJLCtEQUFDLG1FQUFEO0FBQUEsZ0NBR0ksK0RBQUMsMERBQUQ7QUFBSyxZQUFFLEVBQUU7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QUFtQ0Esb0ZBQTlDLEVBQTBGO0FBQzlGOEMsWUFBQUEsZUFBZSxFQUFFO0FBRDZFLFdBQTFGO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxDSixlQWdESSwrREFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXFESCxDQXpFRDs7QUEyRUEsaUVBQWV0QixTQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWxsby1yZWFjdC1mcm9udGVuZC8uL3BhZ2VzL0NvbnRyb2xVc2VySW50ZXJmYWNlLmpzL2luZGV4LmpzPzZlNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZGVvU3RyZWFtRnJhbWUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWRlb1N0cmVhbUZyYW1lJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhdHVzQmFyJztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IEZhYiBmcm9tICdAbXVpL21hdGVyaWFsL0ZhYic7XHJcbmltcG9ydCBOYXZpZ2F0aW9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgUGVyc29uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1BlcnNvbic7XHJcbmltcG9ydCBQZW9wbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVvcGxlJztcclxuXHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3dpdGNoJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xyXG5pbXBvcnQgRHJvbmUgZnJvbSAnLi4vLi4vb2JqZWN0cy9Ecm9uZSc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuY29uc3QgcmVzb2x1dGlvblJhdGlvID0gMS4zMzMzMztcclxuY29uc3QgcGFkZGluZyA9IDI0O1xyXG5cclxuY29uc3QgdmlkZW9PdmVybGF5T3B0aW9ucyA9IHt9O1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHN0YXRlID0gRHJvbmUub3BlbkRyb25lU3RhdGVTb2NrZXQoKTsgICAgXHJcbiAgICBjb25zdCBbd2luZG93RGltZW5zaW9uLCBkZXRlY3RIV10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZGV0ZWN0U2l6ZSgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIGRldGVjdEhXKHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3dEaW1lbnNpb24gPT0gbnVsbClcclxuICAgICAgICAgICAgZGV0ZWN0U2l6ZSgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZXRlY3RTaXplKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZXRlY3RTaXplKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt3aW5kb3dEaW1lbnNpb25dKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8Q2FyZCBzeD17eyBtaW5XaWR0aDogMjc1IH19IGNsYXNzTmFtZT1cImZsb2F0LUZBQi1kaXZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIGNvbnRyb2w9ezxTd2l0Y2ggLz59IGxhYmVsPVwiRm9sbG93XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25JY29uIHN4PXt7IG1yOiAwIH19IGNsYXNzTmFtZT1cIkZBQi1pY29uc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCBjb250cm9sPXs8U3dpdGNoIC8+fSBsYWJlbD1cIkZvbGxvd1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVvcGxlSWNvbiBzeD17eyBtcjogMCB9fSBjbGFzc05hbWU9XCJGQUItaWNvbnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J0ZBQi1idXR0b24nIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwic3VjY2Vzc1wiPnsnbGFuZCd9PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpZGVvJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZGVvU3RyZWFtRnJhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInZpZGVvLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhYnM9e3dpbmRvd0RpbWVuc2lvbiA9PSBudWxsID8gbnVsbCA6IHdpbmRvd0RpbWVuc2lvbi5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17d2luZG93RGltZW5zaW9uID09IG51bGwgPyBudWxsIDogTWF0aC5taW4od2luZG93RGltZW5zaW9uLmhlaWdodCwgKHdpbmRvd0RpbWVuc2lvbi53aWR0aCAtICgyICogcGFkZGluZykpIC8gcmVzb2x1dGlvblJhdGlvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpbmRvd0RpbWVuc2lvbiA9PSBudWxsID8gbnVsbCA6IE1hdGgubWluKHdpbmRvd0RpbWVuc2lvbi53aWR0aCAtICgyICogcGFkZGluZyksICh3aW5kb3dEaW1lbnNpb24uaGVpZ2h0ICogcmVzb2x1dGlvblJhdGlvKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldD17aW8uY29ubmVjdChjb25maWcuYmFja2VuZC5TRVJWRVJfSE9TVCArICc6JyArIGNvbmZpZy5iYWNrZW5kLlZJREVPX1NUUkVBTUlOR19TRVJWRVJfUE9SVCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxTdGF0dXNCYXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il0sIm5hbWVzIjpbIlZpZGVvU3RyZWFtRnJhbWUiLCJjb25maWciLCJHcmlkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdGF0dXNCYXIiLCJpbyIsIkJveCIsIkZhYiIsIk5hdmlnYXRpb25JY29uIiwiUGVyc29uSWNvbiIsIlBlb3BsZUljb24iLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbExhYmVsIiwiU3dpdGNoIiwiUGFwZXIiLCJEcm9uZSIsIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiRGl2aWRlciIsIkJ1dHRvbiIsInJlc29sdXRpb25SYXRpbyIsInBhZGRpbmciLCJ2aWRlb092ZXJsYXlPcHRpb25zIiwiSW5kZXhQYWdlIiwic3RhdGUiLCJvcGVuRHJvbmVTdGF0ZVNvY2tldCIsIndpbmRvd0RpbWVuc2lvbiIsImRldGVjdEhXIiwiZGV0ZWN0U2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtaW5XaWR0aCIsImZsZXhHcm93IiwibXIiLCJNYXRoIiwibWluIiwiY29ubmVjdCIsImJhY2tlbmQiLCJTRVJWRVJfSE9TVCIsIlZJREVPX1NUUkVBTUlOR19TRVJWRVJfUE9SVCIsIndpdGhDcmVkZW50aWFscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ControlUserInterface.js/index.js\n");

/***/ }),

/***/ "./socket.js":
/*!*******************!*\
  !*** ./socket.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"../config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()((_config__WEBPACK_IMPORTED_MODULE_1___default().backend.SERVER_HOST) + ':' + (_config__WEBPACK_IMPORTED_MODULE_1___default().backend.IO_SERVER_PORT), {\n  withCredentials: false\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb2NrZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUEsTUFBTUUsTUFBTSxHQUFHRix1REFBRSxDQUFDQyxvRUFBQSxHQUE2QixHQUE3QixHQUFtQ0EsdUVBQXBDLEVBQW1FO0FBQ2hGSyxFQUFBQSxlQUFlLEVBQUU7QUFEK0QsQ0FBbkUsQ0FBakI7QUFJQSxpRUFBZUosTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbGxvLXJlYWN0LWZyb250ZW5kLy4vc29ja2V0LmpzPzkxOGEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8oY29uZmlnLmJhY2tlbmQuU0VSVkVSX0hPU1QgKyAnOicgKyBjb25maWcuYmFja2VuZC5JT19TRVJWRVJfUE9SVCwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzb2NrZXQ7Il0sIm5hbWVzIjpbImlvIiwiY29uZmlnIiwic29ja2V0IiwiYmFja2VuZCIsIlNFUlZFUl9IT1NUIiwiSU9fU0VSVkVSX1BPUlQiLCJ3aXRoQ3JlZGVudGlhbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./socket.js\n");

/***/ }),

/***/ "@material-ui/icons/BatteryCharging90":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/BatteryCharging90" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/BatteryCharging90");

/***/ }),

/***/ "@mui/icons-material/Height":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Height" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Height");

/***/ }),

/***/ "@mui/icons-material/Navigation":
/*!*************************************************!*\
  !*** external "@mui/icons-material/Navigation" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Navigation");

/***/ }),

/***/ "@mui/icons-material/People":
/*!*********************************************!*\
  !*** external "@mui/icons-material/People" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/People");

/***/ }),

/***/ "@mui/icons-material/Person":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Person" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Person");

/***/ }),

/***/ "@mui/icons-material/SignalWifi3Bar":
/*!*****************************************************!*\
  !*** external "@mui/icons-material/SignalWifi3Bar" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/SignalWifi3Bar");

/***/ }),

/***/ "@mui/icons-material/Speed":
/*!********************************************!*\
  !*** external "@mui/icons-material/Speed" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Speed");

/***/ }),

/***/ "@mui/icons-material/Thermostat":
/*!*************************************************!*\
  !*** external "@mui/icons-material/Thermostat" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Thermostat");

/***/ }),

/***/ "@mui/icons-material/Timer":
/*!********************************************!*\
  !*** external "@mui/icons-material/Timer" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Timer");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Card":
/*!*************************************!*\
  !*** external "@mui/material/Card" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Card");

/***/ }),

/***/ "@mui/material/CardActions":
/*!********************************************!*\
  !*** external "@mui/material/CardActions" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ "@mui/material/CardContent":
/*!********************************************!*\
  !*** external "@mui/material/CardContent" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ "@mui/material/Divider":
/*!****************************************!*\
  !*** external "@mui/material/Divider" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ "@mui/material/Fab":
/*!************************************!*\
  !*** external "@mui/material/Fab" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Fab");

/***/ }),

/***/ "@mui/material/FormControlLabel":
/*!*************************************************!*\
  !*** external "@mui/material/FormControlLabel" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ "@mui/material/FormGroup":
/*!******************************************!*\
  !*** external "@mui/material/FormGroup" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormGroup");

/***/ }),

/***/ "@mui/material/Grid":
/*!*************************************!*\
  !*** external "@mui/material/Grid" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grid");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/Switch":
/*!***************************************!*\
  !*** external "@mui/material/Switch" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Switch");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("socket.io-client");

/***/ }),

/***/ "@cycjimmy/jsmpeg-player":
/*!******************************************!*\
  !*** external "@cycjimmy/jsmpeg-player" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@cycjimmy/jsmpeg-player");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/ControlUserInterface.js/index.js"));
module.exports = __webpack_exports__;

})();