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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/NavigationBar.js":
/*!*************************************!*\
  !*** ./components/NavigationBar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ButtonAppBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\nfunction ButtonAppBar() {\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {\n        sx: {\n            flexGrow: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3___default()), {\n            sx: {\n                backgroundColor: \"#8C9EBE\",\n                height: \"100px\",\n                position: \"fixed\",\n                top: 0,\n                left: 0,\n                right: 0,\n                zIndex: 1100,\n                boxShadow: \"none\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5___default()), {\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    gap: \"60px\",\n                    height: \"100px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        onClick: ()=>route.push(\"/menu\"),\n                        sx: {\n                            fontFamily: \"Poppins, sans-serif\",\n                            fontWeight: 600,\n                            fontSize: \"20px\",\n                            color: \"white\",\n                            \"&:hover\": {\n                                color: \"#1F2D4D\"\n                            }\n                        },\n                        children: \"Menu\"\n                    }, void 0, false, {\n                        fileName: \"/src/components/NavigationBar.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        onClick: ()=>route.push(\"/cart\"),\n                        sx: {\n                            fontFamily: \"Poppins, sans-serif\",\n                            fontWeight: 600,\n                            fontSize: \"20px\",\n                            color: \"white\",\n                            \"&:hover\": {\n                                color: \"#1F2D4D\"\n                            }\n                        },\n                        children: \"Cart\"\n                    }, void 0, false, {\n                        fileName: \"/src/components/NavigationBar.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        onClick: ()=>route.push(\"/login\"),\n                        sx: {\n                            fontFamily: \"Poppins, sans-serif\",\n                            fontWeight: 600,\n                            fontSize: \"20px\",\n                            color: \"white\",\n                            \"&:hover\": {\n                                color: \"#1F2D4D\"\n                            }\n                        },\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/src/components/NavigationBar.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/src/components/NavigationBar.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/src/components/NavigationBar.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/src/components/NavigationBar.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNiO0FBQ1c7QUFDTjtBQUNRO0FBQ0Y7QUFHM0IsU0FBU007SUFDdEIsTUFBTUMsUUFBUVAsMERBQVNBO0lBRXZCLHFCQUNFLDhEQUFDRywwREFBR0E7UUFBQ0ssSUFBSTtZQUFFQyxVQUFVO1FBQUU7a0JBQ3JCLDRFQUFDUCw2REFBTUE7WUFBQ00sSUFBSTtnQkFDVkUsaUJBQWlCO2dCQUNqQkMsUUFBUTtnQkFDUkMsVUFBVTtnQkFDVkMsS0FBSztnQkFDTEMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsV0FBVztZQUNiO3NCQUNFLDRFQUFDYiw4REFBT0E7Z0JBQ05JLElBQUk7b0JBQ0ZVLFNBQVM7b0JBQ1RDLGdCQUFnQjtvQkFDaEJDLFlBQVk7b0JBQ1pDLEtBQUs7b0JBQ0xWLFFBQVE7Z0JBQ1Y7O2tDQUVBLDhEQUFDTiw2REFBTUE7d0JBQ0xpQixTQUFTLElBQU1mLE1BQU1nQixJQUFJLENBQUM7d0JBQzFCZixJQUFJOzRCQUNGZ0IsWUFBWTs0QkFDWkMsWUFBWTs0QkFDWkMsVUFBVTs0QkFDVkMsT0FBTzs0QkFDUCxXQUFXO2dDQUFFQSxPQUFPOzRCQUFVO3dCQUNoQztrQ0FDRDs7Ozs7O2tDQUdELDhEQUFDdEIsNkRBQU1BO3dCQUNMaUIsU0FBUyxJQUFNZixNQUFNZ0IsSUFBSSxDQUFDO3dCQUMxQmYsSUFBSTs0QkFDRmdCLFlBQVk7NEJBQ1pDLFlBQVk7NEJBQ1pDLFVBQVU7NEJBQ1ZDLE9BQU87NEJBQ1AsV0FBVztnQ0FBRUEsT0FBTzs0QkFBVTt3QkFDaEM7a0NBQ0Q7Ozs7OztrQ0FHRCw4REFBQ3RCLDZEQUFNQTt3QkFDTGlCLFNBQVMsSUFBTWYsTUFBTWdCLElBQUksQ0FBQzt3QkFDMUJmLElBQUk7NEJBQ0ZnQixZQUFZOzRCQUNaQyxZQUFZOzRCQUNaQyxVQUFVOzRCQUNWQyxPQUFPOzRCQUNQLFdBQVc7Z0NBQUVBLE9BQU87NEJBQVU7d0JBQ2hDO2tDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIuanM/ODcwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25BcHBCYXIoKSB7XHJcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgIDxBcHBCYXIgc3g9e3sgXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM4QzlFQkVcIiwgXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsIFxyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLCBcclxuICAgICAgICB0b3A6IDAsIFxyXG4gICAgICAgIGxlZnQ6IDAsIFxyXG4gICAgICAgIHJpZ2h0OiAwLCBcclxuICAgICAgICB6SW5kZXg6IDExMDAsXHJcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZSdcclxuICAgICAgfX0+XHJcbiAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgZ2FwOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCJcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZS5wdXNoKFwiL21lbnVcIil9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJQb3BwaW5zLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICcmOmhvdmVyJzogeyBjb2xvcjogJyMxRjJENEQnIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE1lbnVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZS5wdXNoKFwiL2NhcnRcIil9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJQb3BwaW5zLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICcmOmhvdmVyJzogeyBjb2xvcjogJyMxRjJENEQnIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhcnRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZS5wdXNoKFwiL2xvZ2luXCIpfVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAnJjpob3Zlcic6IHsgY29sb3I6ICcjMUYyRDREJyB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIkJ1dHRvbiIsIkJ1dHRvbkFwcEJhciIsInJvdXRlIiwic3giLCJmbGV4R3JvdyIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiekluZGV4IiwiYm94U2hhZG93IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdhcCIsIm9uQ2xpY2siLCJwdXNoIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavigationBar.js\n");

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationBar */ \"./components/NavigationBar.js\");\n\n\nfunction Layout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/src/components/layout.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/src/components/layout.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"/src/components/layout.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/src/components/layout.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUdoQyxTQUFTQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxxQkFDRTs7MEJBQ0UsOERBQUNDOzs7OzswQkFDRyw4REFBQ0gsc0RBQWdCQTs7Ozs7MEJBRWpCLDhEQUFDSTswQkFBTUY7Ozs7OzswQkFDWCw4REFBQ0M7Ozs7Ozs7QUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmlnYXRpb25MYXlvdXQgZnJvbSBcIi4vTmF2aWdhdGlvbkJhclwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbkxheW91dC8+XHJcblxyXG4gICAgICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAiXSwibmFtZXMiOlsiTmF2aWdhdGlvbkxheW91dCIsIkxheW91dCIsImNoaWxkcmVuIiwiZGl2IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_app_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_variableName_roboto___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/_app.js\",\"import\":\"Roboto\",\"arguments\":[{\"weight\":[\"300\",\"400\",\"500\",\"700\"],\"subsets\":[\"latin\"],\"display\":\"swap\"}],\"variableName\":\"roboto\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.js\\\",\\\"import\\\":\\\"Roboto\\\",\\\"arguments\\\":[{\\\"weight\\\":[\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"700\\\"],\\\"subsets\\\":[\\\"latin\\\"],\\\"display\\\":\\\"swap\\\"}],\\\"variableName\\\":\\\"roboto\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_app_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_variableName_roboto___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_variableName_roboto___WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material-nextjs/v13-pagesRouter */ \"@mui/material-nextjs/v13-pagesRouter\");\n/* harmony import */ var _mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/layout */ \"./components/layout.js\");\n/* harmony import */ var _store_useBearStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/useBearStore */ \"./store/useBearStore.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_useBearStore__WEBPACK_IMPORTED_MODULE_7__]);\n_store_useBearStore__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.createTheme)({\n    palette: {},\n    typography: {\n        fontFamily: (next_font_google_target_css_path_pages_app_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_variableName_roboto___WEBPACK_IMPORTED_MODULE_9___default().style).fontFamily\n    }\n});\nfunction App({ Component, pageProps, props }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);\n    const setAppName = (0,_store_useBearStore__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((state)=>state.setAppName);\n    const pageName = router.pathname;\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        console.log(\"App load\", pageName, router.query);\n        setLoading(true);\n        // TODO: This section is use to handle page change.\n        setAppName(\"Say Hi\");\n        setLoading(false);\n    }, [\n        router,\n        pageName\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: `Application`\n                    }, void 0, false, {\n                        fileName: \"/src/pages/_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/src/pages/_app.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/src/pages/_app.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/src/pages/_app.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/src/pages/_app.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_4__.AppCacheProvider, {\n                ...props,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n                    theme: theme,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/src/pages/_app.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/src/pages/_app.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/src/pages/_app.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/src/pages/_app.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/src/pages/_app.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV01BO0FBWHdCO0FBQ0o7QUFDYztBQUNnQztBQUNOO0FBRXpCO0FBQ087QUFDbkI7QUFDOEI7QUFRM0QsTUFBTVcsUUFBUU4saUVBQVdBLENBQUM7SUFDeEJPLFNBQVMsQ0FBQztJQUNWQyxZQUFZO1FBQ1ZDLFlBQVlkLDJMQUFZLENBQUNjLFVBQVU7SUFDckM7QUFDRjtBQUVlLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRTtJQUN6RCxNQUFNQyxTQUFTbEIsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ21CLFNBQVNDLFdBQVcsR0FBR3JCLHFEQUFjLENBQUM7SUFDN0MsTUFBTXVCLGFBQWFqQiwrREFBWUEsQ0FBQyxDQUFDa0IsUUFBVUEsTUFBTUQsVUFBVTtJQUMzRCxNQUFNRSxXQUFXTixPQUFPTyxRQUFRO0lBRWhDMUIsc0RBQWUsQ0FBQztRQUNkNEIsUUFBUUMsR0FBRyxDQUFDLFlBQVlKLFVBQVVOLE9BQU9XLEtBQUs7UUFDOUNULFdBQVc7UUFDWCxtREFBbUQ7UUFDbkRFLFdBQVc7UUFDWEYsV0FBVztJQUNiLEdBQUc7UUFBQ0Y7UUFBUU07S0FBUztJQUVyQixxQkFDRSw4REFBQ3pCLHVEQUFjOzswQkFDYiw4REFBQ08sa0RBQUlBOztrQ0FDSCw4REFBQ3lCO2tDQUFPLENBQUMsV0FBVyxDQUFDOzs7Ozs7a0NBQ3JCLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDcEMsa0ZBQWdCQTtnQkFBRSxHQUFHZ0IsS0FBSzswQkFDekIsNEVBQUNmLCtEQUFhQTtvQkFBQ08sT0FBT0E7OEJBQ3BCLDRFQUFDTCwwREFBTUE7a0NBQ0wsNEVBQUNXOzRCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBcHBDYWNoZVByb3ZpZGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwtbmV4dGpzL3YxMy1wYWdlc1JvdXRlclwiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBSb2JvdG8gfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB1c2VCZWFyU3RvcmUgZnJvbSBcIkAvc3RvcmUvdXNlQmVhclN0b3JlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQmFja2Ryb3AsIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5cclxuY29uc3Qgcm9ib3RvID0gUm9ib3RvKHtcclxuICB3ZWlnaHQ6IFtcIjMwMFwiLCBcIjQwMFwiLCBcIjUwMFwiLCBcIjcwMFwiXSxcclxuICBzdWJzZXRzOiBbXCJsYXRpblwiXSxcclxuICBkaXNwbGF5OiBcInN3YXBcIixcclxufSk7XHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICBwYWxldHRlOiB7fSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBmb250RmFtaWx5OiByb2JvdG8uc3R5bGUuZm9udEZhbWlseSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBwcm9wcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNldEFwcE5hbWUgPSB1c2VCZWFyU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5zZXRBcHBOYW1lKTtcclxuICBjb25zdCBwYWdlTmFtZSA9IHJvdXRlci5wYXRobmFtZTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiQXBwIGxvYWRcIiwgcGFnZU5hbWUsIHJvdXRlci5xdWVyeSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgLy8gVE9ETzogVGhpcyBzZWN0aW9uIGlzIHVzZSB0byBoYW5kbGUgcGFnZSBjaGFuZ2UuXHJcbiAgICBzZXRBcHBOYW1lKFwiU2F5IEhpXCIpXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9LCBbcm91dGVyLCBwYWdlTmFtZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e2BBcHBsaWNhdGlvbmB9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxBcHBDYWNoZVByb3ZpZGVyIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgPC9BcHBDYWNoZVByb3ZpZGVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJyb2JvdG8iLCJSZWFjdCIsInVzZVJvdXRlciIsIkFwcENhY2hlUHJvdmlkZXIiLCJUaGVtZVByb3ZpZGVyIiwiY3JlYXRlVGhlbWUiLCJMYXlvdXQiLCJ1c2VCZWFyU3RvcmUiLCJIZWFkIiwiQmFja2Ryb3AiLCJDaXJjdWxhclByb2dyZXNzIiwidGhlbWUiLCJwYWxldHRlIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJzdHlsZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInByb3BzIiwicm91dGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInNldEFwcE5hbWUiLCJzdGF0ZSIsInBhZ2VOYW1lIiwicGF0aG5hbWUiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJGcmFnbWVudCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/useBearStore.js":
/*!*******************************!*\
  !*** ./store/useBearStore.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"zustand\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);\nzustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* \r\n  https://github.com/pmndrs/zustand\r\n  Global state-management\r\n*/ const useBearStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        appName: undefined,\n        setAppName: (state)=>set({\n                appName: state\n            })\n    }));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBearStore);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS91c2VCZWFyU3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFFakM7OztBQUdBLEdBRUEsTUFBTUMsZUFBZUQsK0NBQU1BLENBQUMsQ0FBQ0UsTUFBUztRQUNwQ0MsU0FBU0M7UUFDVEMsWUFBWSxDQUFDQyxRQUFVSixJQUFJO2dCQUFFQyxTQUFTRztZQUFNO0lBQzlDO0FBRUEsaUVBQWVMLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zdG9yZS91c2VCZWFyU3RvcmUuanM/ZTYzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwienVzdGFuZFwiO1xyXG5cclxuLyogXHJcbiAgaHR0cHM6Ly9naXRodWIuY29tL3BtbmRycy96dXN0YW5kXHJcbiAgR2xvYmFsIHN0YXRlLW1hbmFnZW1lbnRcclxuKi9cclxuXHJcbmNvbnN0IHVzZUJlYXJTdG9yZSA9IGNyZWF0ZSgoc2V0KSA9PiAoe1xyXG4gIGFwcE5hbWU6IHVuZGVmaW5lZCxcclxuICBzZXRBcHBOYW1lOiAoc3RhdGUpID0+IHNldCh7IGFwcE5hbWU6IHN0YXRlIH0pXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUJlYXJTdG9yZTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZSIsInVzZUJlYXJTdG9yZSIsInNldCIsImFwcE5hbWUiLCJ1bmRlZmluZWQiLCJzZXRBcHBOYW1lIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/useBearStore.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material-nextjs/v13-pagesRouter":
/*!*******************************************************!*\
  !*** external "@mui/material-nextjs/v13-pagesRouter" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material-nextjs/v13-pagesRouter");

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

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();