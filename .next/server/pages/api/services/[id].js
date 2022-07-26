"use strict";
(() => {
var exports = {};
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 6160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8342);

function handler({ query: { id  }  }, res) {
    const filtered = _data__WEBPACK_IMPORTED_MODULE_0__/* .services.filter */ .uZ.filter((service)=>service.id === id
    );
    if (filtered.length > 0) {
        res.status(200).json(filtered);
    } else {
        res.status(404).json({
            message: `Service with the id of ${id} is not found`
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [342], () => (__webpack_exec__(6160)));
module.exports = __webpack_exports__;

})();