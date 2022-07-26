(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 1201:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "Products_hero__pxogU",
	"heroText": "Products_heroText__pykYL",
	"breadcrumb": "Products_breadcrumb__XiI87",
	"heroDescription": "Products_heroDescription__UCrqn",
	"angleIcon": "Products_angleIcon__gJJ_7",
	"product_main": "Products_product_main__p8G9p",
	"product_grid": "Products_product_grid__Cv0aI",
	"product_card": "Products_product_card__xEuRn",
	"product_image": "Products_product_image__lVasV",
	"product_content": "Products_product_content__hjtVp",
	"cta": "Products_cta__3Td07"
};


/***/ }),

/***/ 151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_products),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(3951);
// EXTERNAL MODULE: ./styles/Products.module.css
var Products_module = __webpack_require__(1201);
var Products_module_default = /*#__PURE__*/__webpack_require__.n(Products_module);
// EXTERNAL MODULE: ./components/FooterCta.js
var FooterCta = __webpack_require__(6853);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(723);
// EXTERNAL MODULE: ./components/ProductList.js + 1 modules
var ProductList = __webpack_require__(9666);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./config/index.js
const dev = "production" !== "production";
const server = dev ? "http://localhost:3000" : "https://tbgl.com.ng";

;// CONCATENATED MODULE: ./pages/products.js








const products = ({ products  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
                title: "Projects | Tunde Ben Global Limited"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (Products_module_default()).hero,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "overlay",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (Products_module_default()).heroText,
                            children: "Shop"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Products_module_default()).breadcrumb,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Products_module_default()).heroDescription,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Products_module_default()).angleIcon,
                                    children: "\u3009 "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Products_module_default()).heroDescription,
                                    children: "Shop"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (Products_module_default()).product_main,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "10K WATTS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "30K WATTS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "50K WATTS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "100K WATTS"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FooterCta/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
const getStaticProps = async ()=>{
    const res_product = await fetch(`${server}/api/products`);
    const products1 = await res_product.json();
    console.log(products1);
    return {
        props: {
            products: products1
        }
    };
};
/* harmony default export */ const pages_products = (products);


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,951,97,666], () => (__webpack_exec__(151)));
module.exports = __webpack_exports__;

})();