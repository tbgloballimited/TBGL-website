(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 1502:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(6689)

module.exports = { 
      attributes: {"title":"Awesome kitties","date":"2019-03-17T19:31:20.591Z","cats":[{"description":"Maru is a Scottish Fold from Japan, and he loves boxes.","name":"Maru (まる)"},{"description":"Lil Bub is an American celebrity cat known for her unique appearance.","name":"Lil Bub"},{"description":"Grumpy cat is an American celebrity cat known for her grumpy appearance.","name":"Grumpy cat (Tardar Sauce)"}]},
    
      react: 
      function (props) {
        Object.keys(props).forEach(function (key) {
          this[key] = props[key]
        })
        const markdown = /*#__PURE__*/React.createElement("div", {
  className: "frontmatter-markdown"
}, /*#__PURE__*/React.createElement("p", null, "Welcome to my awesome page about cats of the internet."), /*#__PURE__*/React.createElement("p", null, "This page is built with NextJS, and content is managed in Netlify CMS"));
        return markdown
      }
    ,
     }

/***/ }),

/***/ 5031:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "Project_hero__5zNtf",
	"heroText": "Project_heroText__Co9lD",
	"breadcrumb": "Project_breadcrumb__KgurR",
	"heroDescription": "Project_heroDescription__RQJVF",
	"angleIcon": "Project_angleIcon__1EAgd",
	"project_container": "Project_project_container__actpG",
	"single_hero": "Project_single_hero__tSYOA",
	"single_project_container": "Project_single_project_container__8uy05",
	"project_summary": "Project_project_summary__t04Al",
	"summary_point": "Project_summary_point__VRk3C",
	"summary_point_img": "Project_summary_point_img__6biGY",
	"project_list": "Project_project_list__105My",
	"project_image_grid": "Project_project_image_grid__QLVQr",
	"image_grid": "Project_image_grid__SFKsQ",
	"descriptionTitle": "Project_descriptionTitle__wKipR",
	"project_image": "Project_project_image__pMF_1"
};


/***/ }),

/***/ 1501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_projects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(3951);
// EXTERNAL MODULE: ./styles/Project.module.css
var Project_module = __webpack_require__(5031);
var Project_module_default = /*#__PURE__*/__webpack_require__.n(Project_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/FooterCta.js
var FooterCta = __webpack_require__(6853);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(723);
// EXTERNAL MODULE: ./components/Faq.js
var Faq = __webpack_require__(5433);
// EXTERNAL MODULE: ./components/WhyChooseUs.js
var WhyChooseUs = __webpack_require__(1444);
// EXTERNAL MODULE: ./components/Clients.js
var Clients = __webpack_require__(5870);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/ProjectItem.js
var components_ProjectItem = __webpack_require__(4812);
;// CONCATENATED MODULE: ./components/ProjectList.js



const ProjectList = ({ projects  })=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: styles.containerProject,
            children: /*#__PURE__*/ _jsx("ul", {
                children: projects.map((project)=>/*#__PURE__*/ _jsx(ProjectItem, {
                        projects: project
                    }, project.id)
                )
            })
        })
    });
};
/* harmony default export */ const components_ProjectList = ((/* unused pure expression or super */ null && (ProjectList)));

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./content/projects.md
var projects = __webpack_require__(1502);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./pages/projects.js
















const projects_projects = ()=>{
    let { title , cats  } = projects.attributes;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
                title: "Projects | Tunde Ben Global Limited"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (Project_module_default()).hero,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "overlay",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (Project_module_default()).heroText,
                            children: "Our projects"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Project_module_default()).breadcrumb,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Project_module_default()).heroDescription,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Project_module_default()).angleIcon,
                                    children: "\u3009 "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Project_module_default()).heroDescription,
                                    children: "Projects"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (Project_module_default()).project_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        style: {
                            color: "#00923f"
                        },
                        children: "OUR PROJECTS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Our Recent Works"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "While pursuing our business objectives, we aim to be a responsible partner in society, acting with integrity towards our employees, clients, businesses, partners, as we as the wider community in which we operate."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: cats.map((cat, k)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: cat.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: cat.description
                                            })
                                        ]
                                    }, k)
                                )
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(WhyChooseUs/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Clients/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(FooterCta/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
// export const getStaticProps = async () => {
//   const res_project =  await fetch
//   (`${server}/api/projects`)
//   const projects = await res_project.json()
//   return {
//     props:{
//       projects
//     },
//   }
// }
/* harmony default export */ const pages_projects = (projects_projects);


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
var __webpack_exports__ = __webpack_require__.X(0, [505,61,951,97,433,311], () => (__webpack_exec__(1501)));
module.exports = __webpack_exports__;

})();