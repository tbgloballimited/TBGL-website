(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5522:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Header_title__UlymB",
	"hero": "Header_hero__24qjT",
	"text": "Header_text__n6tyE",
	"cta": "Header_cta__3wtyD",
	"description": "Header_description__YuMkT",
	"slide_container": "Header_slide_container___7VLW",
	"overlay": "Header_overlay__4loKl",
	"hero_container": "Header_hero_container__eqnAM",
	"video_bg": "Header_video_bg__eJUep",
	"slide-container": "Header_slide-container__weFut",
	"each-slide": "Header_each-slide__ZZUIr",
	"each-fade": "Header_each-fade__WBLk5",
	"carousel_image": "Header_carousel_image__1NDLc"
};


/***/ }),

/***/ 8149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(2136);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ./components/ServiceList.js + 1 modules
var ServiceList = __webpack_require__(4820);
// EXTERNAL MODULE: ./components/ProjectItem.js
var ProjectItem = __webpack_require__(4812);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1645);
// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(3951);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(5522);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header.js


// import bgVideo from '/videos/3dbg.mp4'
const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: (Header_module_default()).hero,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "overlay"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("video", {
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    className: (Header_module_default()).video_bg,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                        src: "/videos/3dbg.mp4",
                        type: "video/mp4"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Header_module_default()).slide_container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Header_module_default()).hero_container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (Header_module_default()).text,
                                children: "Let your power problem be our problem."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Header_module_default()).description,
                                children: [
                                    "Having unstable and high cost of power generation is not fun.",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "We want to make it a better experience for you."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (Header_module_default()).cta,
                                children: "LEARN MORE"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/WhyChooseUs.js
var WhyChooseUs = __webpack_require__(1444);
// EXTERNAL MODULE: ./components/FooterCta.js
var FooterCta = __webpack_require__(6853);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(723);
// EXTERNAL MODULE: ./components/Clients.js
var Clients = __webpack_require__(5870);
// EXTERNAL MODULE: ./components/ProductList.js + 1 modules
var ProductList = __webpack_require__(9666);
;// CONCATENATED MODULE: ./pages/index.js












// import Testimonial from '../components/Testimonial'

function Home({ services , projects , products  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
                title: "Home - Tunde Ben Global Limited"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Layout_module_default()).containerAbout,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Layout_module_default()).aboutImg
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Layout_module_default()).aboutDesc,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "WHO WE ARE"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Renewable Energy For Sustainability"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: {
                                    width: "490px"
                                },
                                children: "Since 2014, we have been providing constant electicity supply to various projects from private businesses, corporate organizations, non-governmental organizations and private Individuals."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Lower Monthly Bills"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "No worries about blackouts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Positive environment impact"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (Layout_module_default()).cta,
                                children: "MORE ABOUT US"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (Layout_module_default()).containerProjects,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        style: {
                            color: "#00923f"
                        },
                        children: "OUR PROJECTS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Our Recent Work"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        style: {
                            color: "#848484",
                            fontWeight: "normal"
                        },
                        children: [
                            "We have built a wide range of independent power",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "generating systems"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (Layout_module_default()).containerProducts,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        style: {
                            color: "#00923f"
                        },
                        children: "PRODUCTS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Shop With Us"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        children: [
                            "Browse through some of our vetted ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " products from trusted brands"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Layout_module_default()).containerProcess,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        style: {
                            color: "#00923f"
                        },
                        children: "OUR PROCESS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "How We Work"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            color: "#848484",
                            textAlign: "center"
                        },
                        children: "We complete every step carefully,"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/img/appointment.png",
                                        alt: "appointment",
                                        height: "60",
                                        width: "60"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Make Appointment"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/img/consultation.png",
                                        alt: "consultation",
                                        height: "60",
                                        width: "60"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Consultation"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/img/design.png",
                                        alt: "design",
                                        height: "60",
                                        width: "60"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Design"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/img/construction.png",
                                        alt: "construction",
                                        height: "60",
                                        width: "60"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Construction & Commissioning"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(WhyChooseUs/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(FooterCta/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
const getStaticProps = async ()=>{
    const res_service = await fetch(`${config/* server */.f}/api/services`);
    const services = await res_service.json();
    const res_project = await fetch(`${config/* server */.f}/api/projects`);
    const projects = await res_project.json();
    // const res_testimonial =  await fetch
    // (`${server}/api/testimonials`)
    // const testimonials = await res_testimonial.json()
    const res_product = await fetch(`${config/* server */.f}/api/products`);
    const products = await res_product.json();
    return {
        props: {
            services,
            projects,
            products
        }
    };
};


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
var __webpack_exports__ = __webpack_require__.X(0, [505,61,951,97,311,723,80], () => (__webpack_exec__(8149)));
module.exports = __webpack_exports__;

})();