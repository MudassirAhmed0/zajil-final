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

/***/ "./Components/Layout/NewsLetterForm.jsx":
/*!**********************************************!*\
  !*** ./Components/Layout/NewsLetterForm.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Layout.module.css */ \"./styles/Layout.module.css\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n// import { sanitize } from '../../../utils/miscellaneous';\n// import Loading from '../../loading';\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NewsLetterForm = function(param) {\n    var status = param.status, message1 = param.message, onValidated = param.onValidated;\n    _s();\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), error = ref6[0], setError = ref6[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), email = ref1[0], setEmail = ref1[1];\n    /**\r\n     * Handle form submit.\r\n     *\r\n     * @return {{value}|*|boolean|null}\r\n     */ var handleFormSubmit = function() {\n        alert();\n        setError(null);\n        if (!email) {\n            setError('Please enter a valid email address');\n            return null;\n        }\n        var isFormValidated = onValidated({\n            EMAIL: email\n        });\n        // On success return true\n        return email && email.indexOf(\"@\") > -1 && isFormValidated;\n    };\n    /**\r\n     * Handle Input Key Event.\r\n     *\r\n     * @param event\r\n     */ var handleInputKeyEvent = function(event) {\n        alert();\n        setError(null);\n        // Number 13 is the \"Enter\" key on the keyboard\n        if (event.keyCode === 13) {\n            // Cancel the default action, if needed\n            event.preventDefault();\n            // Trigger the button element with a click\n            handleFormSubmit();\n        }\n    };\n    /**\r\n     * Extract message from string.\r\n     *\r\n     * @param {String} message\r\n     * @return {null|*}\r\n     */ var getMessage = function(message) {\n        var ref, ref3;\n        if (!message) {\n            return null;\n        }\n        var ref4;\n        var result = (ref4 = message === null || message === void 0 ? void 0 : message.split('-')) !== null && ref4 !== void 0 ? ref4 : null;\n        if (\"0\" !== (result === null || result === void 0 ? void 0 : (ref = result[0]) === null || ref === void 0 ? void 0 : ref.trim())) {\n            return sanitize(message);\n        }\n        var ref5;\n        var formattedMessage = (ref5 = result === null || result === void 0 ? void 0 : (ref3 = result[1]) === null || ref3 === void 0 ? void 0 : ref3.trim()) !== null && ref5 !== void 0 ? ref5 : null;\n        return formattedMessage ? sanitize(formattedMessage) : null;\n    };\n    var ref2;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"light-font \".concat((_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().newsletter)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"sds\",\n                            name: \"newsletter\",\n                            id: \"newsletter\",\n                            onChange: function(event) {\n                                var ref;\n                                return setEmail((ref2 = event === null || event === void 0 ? void 0 : (ref = event.target) === null || ref === void 0 ? void 0 : ref.value) !== null && ref2 !== void 0 ? ref2 : '');\n                            },\n                            onKeyUp: function(event) {\n                                return handleInputKeyEvent(event);\n                            }\n                        }, void 0, false, {\n                            fileName: \"G:\\\\creative-axe-work\\\\zajil-v4\\\\Components\\\\Layout\\\\NewsLetterForm.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"newsletter\",\n                            children: \"Subscribe to Newsletter\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\creative-axe-work\\\\zajil-v4\\\\Components\\\\Layout\\\\NewsLetterForm.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\creative-axe-work\\\\zajil-v4\\\\Components\\\\Layout\\\\NewsLetterForm.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-32 border shadow-md border-white rounded text-white medium-font \",\n                    onClick: alert(),\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\creative-axe-work\\\\zajil-v4\\\\Components\\\\Layout\\\\NewsLetterForm.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\creative-axe-work\\\\zajil-v4\\\\Components\\\\Layout\\\\NewsLetterForm.jsx\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false));\n};\n_s(NewsLetterForm, \"7udYEMzCx5sfzcpmAkRC60B4jf0=\");\n_c = NewsLetterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsLetterForm);\nvar _c;\n$RefreshReg$(_c, \"NewsLetterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0xheW91dC9OZXdzTGV0dGVyRm9ybS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDaEMsRUFBMkQ7QUFDM0QsRUFBdUM7QUFDWTs7O0FBR25ELEdBQUssQ0FBQ0UsY0FBYyxHQUFHLFFBQVEsUUFBOEIsQ0FBQztRQUFwQ0MsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLFFBQU8sU0FBUEEsT0FBTyxFQUFFQyxXQUFXLFNBQVhBLFdBQVc7O0lBRWxELEdBQUssQ0FBcUJMLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWhDTSxLQUFLLEdBQWNOLElBQWMsS0FBMUJPLFFBQVEsR0FBSVAsSUFBYztJQUN4QyxHQUFLLENBQXFCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFoQ1EsS0FBSyxHQUFjUixJQUFjLEtBQTFCUyxRQUFRLEdBQUlULElBQWM7SUFFeEMsRUFJRztRQUVDVyxLQUFLOztRQUdMLEVBQUUsR0FBR0gsS0FBSyxFQUFFLENBQUM7WUFDVEQsUUFBUSxDQUFDLENBQW9DO1lBQzdDO1FBQ0osQ0FBQztRQUVELEdBQUssQ0FBQ0s7WUFBZ0NDLEtBQUssRUFBRUwsS0FBSztRQUFDLENBQUM7UUFFcEQ7UUFDQSxNQUFNLENBQUNBLEtBQUssSUFBSUEsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBRztJQUNyQyxDQUFDO0lBRUQsRUFJRztRQUVDSCxLQUFLO1FBQ0xKLFFBQVEsQ0FBQyxJQUFJOztRQUViO1lBQ0ksRUFBdUM7O1lBRXZDLEVBQTBDO1lBQzFDRyxnQkFBZ0I7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUFFRCxFQUtHO1lBTWFVLEdBQVcsRUFHRUEsSUFBVztRQVBwQyxFQUFFLEdBQUdoQixPQUFPLEVBQUUsQ0FBQztZQUNYLE1BQU0sQ0FBQyxJQUFJO1FBQ2YsQ0FBQztZQUNjQSxJQUFtQjtRQUFsQzs7O1FBR0EsQ0FBQzs7UUFDRCxHQUFLLENBQUNvQixnQkFBZ0I7UUFDdEIsTUFBTSxDQUFDQTtJQUNYLENBQUM7UUFNb0hSLElBQW9CO0lBSnpJLE1BQU07Ozs7c0NBR09TLENBQUc7b0JBQUNDLFNBQVMsRUFBRyxDQUFXLGFBQW9CLE9BQWxCekIsTUFBTSxDQUFDMEIsVUFBVTs7Ozs0QkFDeEJHLFdBQVcsRUFBQyxDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBWTs7O2tKQUE0RDtnQ0FBdEJ0Qiw2REFBQUEsUUFBUTs7OzJGQUFrRE0sQ0FBTSxDQUFOQTs7Ozs7Ozs7NEJBQy9JdUIsT0FBTyxFQUFDLENBQVk7c0NBQUMsQ0FBdUI7Ozs7Ozs7Ozs7OztzQ0FFdERDLENBQU07b0JBQUNiLFNBQVMsRUFBQyxDQUFvRTtvQkFBQ2MsT0FBTyxFQUFFN0IsS0FBSzs4QkFBSSxDQUV6Rzs7Ozs7Ozs7Ozs7OztBQUtoQixDQUFDO0dBMUVLVCxjQUFjO0tBQWRBLGNBQWM7QUE0RXBCLE1BQU0sU0FBU0EsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0xheW91dC9OZXdzTGV0dGVyRm9ybS5qc3g/OWZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgc2FuaXRpemUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9taXNjZWxsYW5lb3VzJztcclxuLy8gaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vbG9hZGluZyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0xheW91dC5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmNvbnN0IE5ld3NMZXR0ZXJGb3JtID0gKHsgc3RhdHVzLCBtZXNzYWdlLCBvblZhbGlkYXRlZCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgZm9ybSBzdWJtaXQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7e3ZhbHVlfXwqfGJvb2xlYW58bnVsbH1cclxuICAgICAqL1xyXG4gICAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBhbGVydCgpXHJcbiAgICAgICAgc2V0RXJyb3IobnVsbCk7XHJcblxyXG4gICAgICAgIGlmICghZW1haWwpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc0Zvcm1WYWxpZGF0ZWQgPSBvblZhbGlkYXRlZCh7IEVNQUlMOiBlbWFpbCB9KTtcclxuXHJcbiAgICAgICAgLy8gT24gc3VjY2VzcyByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBlbWFpbCAmJiBlbWFpbC5pbmRleE9mKFwiQFwiKSA+IC0xICYmIGlzRm9ybVZhbGlkYXRlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBJbnB1dCBLZXkgRXZlbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0S2V5RXZlbnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBhbGVydCgpXHJcbiAgICAgICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICAgICAgLy8gTnVtYmVyIDEzIGlzIHRoZSBcIkVudGVyXCIga2V5IG9uIHRoZSBrZXlib2FyZFxyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICAvLyBDYW5jZWwgdGhlIGRlZmF1bHQgYWN0aW9uLCBpZiBuZWVkZWRcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgYnV0dG9uIGVsZW1lbnQgd2l0aCBhIGNsaWNrXHJcbiAgICAgICAgICAgIGhhbmRsZUZvcm1TdWJtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRyYWN0IG1lc3NhZ2UgZnJvbSBzdHJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcclxuICAgICAqIEByZXR1cm4ge251bGx8Kn1cclxuICAgICAqL1xyXG4gICAgY29uc3QgZ2V0TWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBtZXNzYWdlPy5zcGxpdCgnLScpID8/IG51bGw7XHJcbiAgICAgICAgaWYgKFwiMFwiICE9PSByZXN1bHQ/LlswXT8udHJpbSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzYW5pdGl6ZShtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkTWVzc2FnZSA9IHJlc3VsdD8uWzFdPy50cmltKCkgPz8gbnVsbDtcclxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkTWVzc2FnZSA/IHNhbml0aXplKGZvcm1hdHRlZE1lc3NhZ2UpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleGB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BsaWdodC1mb250ICR7c3R5bGVzLm5ld3NsZXR0ZXJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J3NkcycgbmFtZT0nbmV3c2xldHRlcicgaWQ9J25ld3NsZXR0ZXInIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVtYWlsKGV2ZW50Py50YXJnZXQ/LnZhbHVlID8/ICcnKX0gb25LZXlVcD17KGV2ZW50KSA9PiBoYW5kbGVJbnB1dEtleUV2ZW50KGV2ZW50KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ld3NsZXR0ZXJcIj5TdWJzY3JpYmUgdG8gTmV3c2xldHRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LTMyIGJvcmRlciBzaGFkb3ctbWQgYm9yZGVyLXdoaXRlIHJvdW5kZWQgdGV4dC13aGl0ZSBtZWRpdW0tZm9udCAnIG9uQ2xpY2s9e2FsZXJ0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NMZXR0ZXJGb3JtXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIk5ld3NMZXR0ZXJGb3JtIiwic3RhdHVzIiwibWVzc2FnZSIsIm9uVmFsaWRhdGVkIiwiZXJyb3IiLCJzZXRFcnJvciIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVGb3JtU3VibWl0IiwiYWxlcnQiLCJpc0Zvcm1WYWxpZGF0ZWQiLCJFTUFJTCIsImluZGV4T2YiLCJoYW5kbGVJbnB1dEtleUV2ZW50IiwiZXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJnZXRNZXNzYWdlIiwicmVzdWx0Iiwic3BsaXQiLCJ0cmltIiwic2FuaXRpemUiLCJmb3JtYXR0ZWRNZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibmV3c2xldHRlciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsImlkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uS2V5VXAiLCJsYWJlbCIsImh0bWxGb3IiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Layout/NewsLetterForm.jsx\n");

/***/ })

});