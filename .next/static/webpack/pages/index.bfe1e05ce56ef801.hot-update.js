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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Layout.module.css */ \"./styles/Layout.module.css\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n// import { sanitize } from '../../../utils/miscellaneous';\n// import Loading from '../../loading';\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NewsLetterForm = function(param) {\n    var status = param.status, message1 = param.message, onValidated = param.onValidated;\n    _s();\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), error = ref6[0], setError = ref6[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), email = ref1[0], setEmail = ref1[1];\n    /**\r\n     * Handle form submit.\r\n     *\r\n     * @return {{value}|*|boolean|null}\r\n     */ var handleFormSubmit = function() {\n        setError(null);\n        if (!email) {\n            setError('Please enter a valid email address');\n            return null;\n        }\n        var isFormValidated = onValidated({\n            EMAIL: email\n        });\n        // On success return true\n        return email && email.indexOf(\"@\") > -1 && isFormValidated;\n    };\n    /**\r\n     * Handle Input Key Event.\r\n     *\r\n     * @param event\r\n     */ var handleInputKeyEvent = function(event) {\n        setError(null);\n        // Number 13 is the \"Enter\" key on the keyboard\n        if (event.keyCode === 13) {\n            // Cancel the default action, if needed\n            event.preventDefault();\n            // Trigger the button element with a click\n            handleFormSubmit();\n        }\n    };\n    /**\r\n     * Extract message from string.\r\n     *\r\n     * @param {String} message\r\n     * @return {null|*}\r\n     */ var getMessage = function(message) {\n        var ref, ref3;\n        if (!message) {\n            return null;\n        }\n        var ref4;\n        var result = (ref4 = message === null || message === void 0 ? void 0 : message.split('-')) !== null && ref4 !== void 0 ? ref4 : null;\n        if (\"0\" !== (result === null || result === void 0 ? void 0 : (ref = result[0]) === null || ref === void 0 ? void 0 : ref.trim())) {\n            return sanitize(message);\n        }\n        var ref5;\n        var formattedMessage = (ref5 = result === null || result === void 0 ? void 0 : (ref3 = result[1]) === null || ref3 === void 0 ? void 0 : ref3.trim()) !== null && ref5 !== void 0 ? ref5 : null;\n        return formattedMessage ? sanitize(formattedMessage) : null;\n    };\n    var ref2;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"light-font \".concat((_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().newsletter)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"sds\",\n                            name: \"newsletter\",\n                            id: \"newsletter\",\n                            onChange: function(event) {\n                                var ref;\n                                return setEmail((ref2 = event === null || event === void 0 ? void 0 : (ref = event.target) === null || ref === void 0 ? void 0 : ref.value) !== null && ref2 !== void 0 ? ref2 : '');\n                            },\n                            onKeyUp: function(event) {\n                                return handleInputKeyEvent(event);\n                            }\n                        }, void 0, false, {\n                            fileName: \"G:\\\\creative-axe-work\\\\zajil-v4\\\\Components\\\\Layout\\\\NewsLetterForm.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"newsletter\",\n                            children: \"Subscribe to Newsletter\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\creative-axe-work\\\\zajil-v4\\\\Components\\\\Layout\\\\NewsLetterForm.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\creative-axe-work\\\\zajil-v4\\\\Components\\\\Layout\\\\NewsLetterForm.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-32 border shadow-md border-white rounded text-white medium-font \",\n                    onClick: handleFormSubmit,\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\creative-axe-work\\\\zajil-v4\\\\Components\\\\Layout\\\\NewsLetterForm.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\creative-axe-work\\\\zajil-v4\\\\Components\\\\Layout\\\\NewsLetterForm.jsx\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false));\n};\n_s(NewsLetterForm, \"7udYEMzCx5sfzcpmAkRC60B4jf0=\");\n_c = NewsLetterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsLetterForm);\nvar _c;\n$RefreshReg$(_c, \"NewsLetterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0xheW91dC9OZXdzTGV0dGVyRm9ybS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDaEMsRUFBMkQ7QUFDM0QsRUFBdUM7QUFDWTs7O0FBR25ELEdBQUssQ0FBQ0UsY0FBYyxHQUFHLFFBQVEsUUFBOEIsQ0FBQztRQUFwQ0MsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLFFBQU8sU0FBUEEsT0FBTyxFQUFFQyxXQUFXLFNBQVhBLFdBQVc7O0lBRWxELEdBQUssQ0FBcUJMLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWhDTSxLQUFLLEdBQWNOLElBQWMsS0FBMUJPLFFBQVEsR0FBSVAsSUFBYztJQUN4QyxHQUFLLENBQXFCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFoQ1EsS0FBSyxHQUFjUixJQUFjLEtBQTFCUyxRQUFRLEdBQUlULElBQWM7SUFFeEMsRUFJRztRQUVDTyxRQUFRLENBQUMsSUFBSTs7WUFHVEEsUUFBUSxDQUFDLENBQW9DO1lBQzdDLE1BQU0sQ0FBQyxJQUFJO1FBQ2YsQ0FBQztRQUVELEdBQUssQ0FBQ0k7WUFBZ0NDLEtBQUssRUFBRUosS0FBSztRQUFDLENBQUM7UUFFcEQ7UUFDQSxNQUFNLENBQUNBLEtBQUssSUFBSUEsS0FBSyxDQUFDSyxPQUFPLENBQUMsQ0FBRztJQUNyQyxDQUFDO0lBRUQsRUFJRztRQUVDTixRQUFRLENBQUMsSUFBSTtRQUNiLEVBQStDOzs7WUFHM0NRLEtBQUssQ0FBQ0U7O1lBRU5QO1FBQ0osQ0FBQztJQUNMLENBQUM7SUFFRCxFQUtHO1lBTWFTLEdBQVcsRUFHRUEsSUFBVztRQVBwQyxFQUFFLEdBQUdmLE9BQU8sRUFBRSxDQUFDO1lBQ1gsTUFBTSxDQUFDLElBQUk7UUFDZixDQUFDO1lBQ2NBLElBQW1CO1FBQWxDOzs7UUFHQSxDQUFDOztRQUNELEdBQUssQ0FBQ21CLGdCQUFnQjtRQUN0QixNQUFNLENBQUNBO0lBQ1gsQ0FBQztRQU1vSFIsSUFBb0I7SUFKekksTUFBTTs7OztzQ0FHT1MsQ0FBRztvQkFBQ0MsU0FBUyxFQUFHLENBQVcsYUFBb0IsT0FBbEJ4QixNQUFNLENBQUN5QixVQUFVOzs7OzRCQUN4QkcsV0FBVyxFQUFDLENBQUs7NEJBQUNDLElBQUksRUFBQyxDQUFZOzs7a0pBQTREO2dDQUF0QnJCLDZEQUFBQSxRQUFROzs7MkZBQWtESyxDQUFNLENBQU5BOzs7Ozs7Ozs0QkFDL0l1QixPQUFPLEVBQUMsQ0FBWTtzQ0FBQyxDQUF1Qjs7Ozs7Ozs7Ozs7O3NDQUV0REMsQ0FBTTtvQkFBQ2IsU0FBUyxFQUFDLENBQW9FO29CQUFDYyxPQUFPLEVBQUU3Qjs4QkFBa0IsQ0FFbEg7Ozs7Ozs7Ozs7Ozs7QUFLaEIsQ0FBQztHQXhFS1IsY0FBYztLQUFkQSxjQUFjO0FBMEVwQixNQUFNLFNBQVNBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvTmV3c0xldHRlckZvcm0uanN4PzlmZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IHNhbml0aXplIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWlzY2VsbGFuZW91cyc7XHJcbi8vIGltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2xvYWRpbmcnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9MYXlvdXQubW9kdWxlLmNzcydcclxuXHJcblxyXG5jb25zdCBOZXdzTGV0dGVyRm9ybSA9ICh7IHN0YXR1cywgbWVzc2FnZSwgb25WYWxpZGF0ZWQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGZvcm0gc3VibWl0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge3t2YWx1ZX18Knxib29sZWFufG51bGx9XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoKSA9PiB7IFxyXG4gICAgICAgIHNldEVycm9yKG51bGwpO1xyXG5cclxuICAgICAgICBpZiAoIWVtYWlsKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNGb3JtVmFsaWRhdGVkID0gb25WYWxpZGF0ZWQoeyBFTUFJTDogZW1haWwgfSk7XHJcblxyXG4gICAgICAgIC8vIE9uIHN1Y2Nlc3MgcmV0dXJuIHRydWVcclxuICAgICAgICByZXR1cm4gZW1haWwgJiYgZW1haWwuaW5kZXhPZihcIkBcIikgPiAtMSAmJiBpc0Zvcm1WYWxpZGF0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgSW5wdXQgS2V5IEV2ZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dEtleUV2ZW50ID0gKGV2ZW50KSA9PiB7IFxyXG4gICAgICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgICAgIC8vIE51bWJlciAxMyBpcyB0aGUgXCJFbnRlclwiIGtleSBvbiB0aGUga2V5Ym9hcmRcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSBkZWZhdWx0IGFjdGlvbiwgaWYgbmVlZGVkXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIGJ1dHRvbiBlbGVtZW50IHdpdGggYSBjbGlja1xyXG4gICAgICAgICAgICBoYW5kbGVGb3JtU3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdCBtZXNzYWdlIGZyb20gc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXHJcbiAgICAgKiBAcmV0dXJuIHtudWxsfCp9XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGdldE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmICghbWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbWVzc2FnZT8uc3BsaXQoJy0nKSA/PyBudWxsO1xyXG4gICAgICAgIGlmIChcIjBcIiAhPT0gcmVzdWx0Py5bMF0/LnRyaW0oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2FuaXRpemUobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZE1lc3NhZ2UgPSByZXN1bHQ/LlsxXT8udHJpbSgpID8/IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZE1lc3NhZ2UgPyBzYW5pdGl6ZShmb3JtYXR0ZWRNZXNzYWdlKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXhgfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbGlnaHQtZm9udCAke3N0eWxlcy5uZXdzbGV0dGVyfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdzZHMnIG5hbWU9J25ld3NsZXR0ZXInIGlkPSduZXdzbGV0dGVyJyBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRFbWFpbChldmVudD8udGFyZ2V0Py52YWx1ZSA/PyAnJyl9IG9uS2V5VXA9eyhldmVudCkgPT4gaGFuZGxlSW5wdXRLZXlFdmVudChldmVudCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXdzbGV0dGVyXCI+U3Vic2NyaWJlIHRvIE5ld3NsZXR0ZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndy0zMiBib3JkZXIgc2hhZG93LW1kIGJvcmRlci13aGl0ZSByb3VuZGVkIHRleHQtd2hpdGUgbWVkaXVtLWZvbnQgJyBvbkNsaWNrPXtoYW5kbGVGb3JtU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzTGV0dGVyRm9ybVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJOZXdzTGV0dGVyRm9ybSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJvblZhbGlkYXRlZCIsImVycm9yIiwic2V0RXJyb3IiLCJlbWFpbCIsInNldEVtYWlsIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImlzRm9ybVZhbGlkYXRlZCIsIkVNQUlMIiwiaW5kZXhPZiIsImhhbmRsZUlucHV0S2V5RXZlbnQiLCJldmVudCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImdldE1lc3NhZ2UiLCJyZXN1bHQiLCJzcGxpdCIsInRyaW0iLCJzYW5pdGl6ZSIsImZvcm1hdHRlZE1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJuZXdzbGV0dGVyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwiaWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib25LZXlVcCIsImxhYmVsIiwiaHRtbEZvciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Layout/NewsLetterForm.jsx\n");

/***/ })

});