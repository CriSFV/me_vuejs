exports.ids = [6];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f5829d5c", content, true, context)
};

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutme_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutme_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutme_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutme_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutme_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card{background-color:transparent;margin:20px;display:grid;grid-template-rows:100px 220px 1fr;box-shadow:1px 4px 15px 3px rgba(0,0,0,.65);border-radius:20px;width:230px;height:346px;transition:all .5s ease}.card:hover{transform:scale(1.02)}.card__title{padding:10px;color:#202234;font-weight:700;text-align:center}.card__thumbnail{width:200px;height:200px;background-position:50%;background-size:cover;border-radius:5px;margin:auto}@media(min-width:330px){.card{width:300px}}.post-content{padding:30px;text-align:center}a:active .post-content,a:hover .post-content{text-decoration:none;color:#202234}@-webkit-keyframes fade-in{0%{opacity:0}50%{opacity:.5}to{opacity:1}}@keyframes fade-in{0%{opacity:0}50%{opacity:.5}to{opacity:1}}@-webkit-keyframes giro{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}to{transform:rotate(1turn)}}@keyframes giro{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}to{transform:rotate(1turn)}}@-webkit-keyframes cascade{0%{transform:translateY(-500px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes cascade{0%{transform:translateY(-500px);opacity:0}to{transform:translateY(0);opacity:1}}.giro{-webkit-animation:giro 3s linear infinite,cascade 3s linear;animation:giro 3s linear infinite,cascade 3s linear}.fade-in{-webkit-animation:fade-in 2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in 2s cubic-bezier(.39,.575,.565,1) both}.cascade{-webkit-animation:cascade 5s linear;animation:cascade 5s linear}.hero__btn{background-color:#ec9bc6;border-radius:15px;width:155px;margin-bottom:20px}.btn-container{text-align:center;margin:30px 0 0}.hero__content{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#202234;font-size:14px}.hero__content__photo{margin-bottom:20px}.hero__content_presentation{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:30px}@media(min-width:768px){.hero__content_presentation{padding:0;flex-direction:row;justify-content:space-evenly;width:100%}}@media(min-width:1400px){.hero__content_presentation{padding:0 20em;flex-direction:row;justify-content:space-evenly;width:100%}}@media(min-width:1600px){.hero__content_presentation{padding:0 25em;flex-direction:row;justify-content:space-evenly;width:100%}}.hero__photo{width:200px;height:200px;border-radius:50%}.hero__title{margin:10px}.hero__subtitle{font-size:20px}@media(min-width:768px){.hero__subtitle{font-size:30px}}.hero__name{color:#3f5efb}.hero__subtitle2{font-size:20px;margin-top:5px}.hero__info{text-align:justify;padding:30px;margin:0 0 100px}@media(min-width:576px){.hero__info{margin:0}}.modal-body{display:flex;justify-content:space-around}.modal-body a{width:150px;height:40px}.modal-body a:hover{color:#3f5efb;text-decoration:none}@media(min-width:500){.hero__content{padding:90px 40px 0 60px}}.footer{width:100%;margin:15px 0;padding:14px 0}.footer__copy{margin-left:20px}.header{font-weight:600;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;top:0;width:100%;z-index:100;font-size:5px;border-bottom:3px solid #3f5efb}.icons{font-size:20px}.header__link__home{font-size:35px;position:relative;left:10px;color:#3f5efb;text-decoration:none}.home{display:flex;justify-content:space-between}.navbar-collapse{justify-content:end}[dir=ltr] .menu__button{text-align:right}[dir=rtl] .menu__button{text-align:left}.menu__button{border-radius:15px;width:500px;list-style-type:none;display:inline-block;transform:translateY(7px)}@media(min-width:992px){.menu__button{flex-direction:row!important;align-items:center;justify-content:flex-end}}.header__link{color:#ced7e4;border-radius:15px;text-decoration:none;text-align:center;font-size:20px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;transition:transform 1s ease;margin:auto}.header__link a{color:#202234}.dropdown-item:hover{border-radius:15px;border:.5px solid #202234;background-color:#f1f1ec;color:#202234;font-size:18px}.dropdown-item{color:#202234}.dropdown-menu.show{background-color:transparent;border:none}html{scroll-behavior:smooth}body{background:#f7f7f7}body p{margin:0}.generalContainer{padding:0 1rem}@media(min-width:576px){.generalContainer{padding:2rem 3rem}}.btn-principal{background-color:#3f5efb;border-radius:5px;width:155px;height:30px;line-height:15px;color:#ced7e4!important;border:none;transition:transform .5s ease}.btn-principal:hover{background-color:#202234;color:#f1f1ec!important}.secondary-btn{padding:5px;background-color:transparent;border-radius:5px;border:1px solid #3f5efb;color:#3f5efb!important}.secondary-btn:hover{background-color:#202234;color:#f1f1ec!important}.list_decoration{list-style-type:none;padding:0;margin-bottom:0}.column-row{display:flex;flex-direction:column}@media(min-width:576px){.column-row{flex-direction:row;justify-content:space-around;width:100%}}.nav_link:hover{color:#3f5efb}.center{display:flex;justify-content:center;align-items:center}.right{text-align:right}@media(min-width:576px){.responsive_sm{display:none}}.responsive_md{display:none}@media(min-width:576px){.responsive_md{display:flex}}.aboutMe-section{margin-top:100px}.tagList{list-style-type:none;display:flex;flex-direction:column;align-items:center}@media(min-width:400px){.tagList{flex-direction:row;justify-content:center;flex-wrap:wrap}}.tagList .tagList-item{display:flex;justify-content:center;align-items:center;width:150px;padding:5px;background-color:#3f5efb;margin:10px;border-radius:20px;border:1px solid #f1f1ec;transition:all .5s ease;color:#f1f1ec}.tagList .tagList-item:hover{transform:scale(1.02)}.tagIcon{font-size:1.5rem;margin-right:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Aboutme.vue?vue&type=template&id=2fa47c8c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"GoBack_container\">","</section>",[_c('GoBack')],1),_vm._ssrNode(" <section class=\"mb-5\"><h1 class=\"mb-4\">Esta soy yo:</h1> <p>\n      Estudié Educación Social hasta que, haciendo las prácticas de la\n      carrera, vi que no era lo mío, así que me puse a trabajar en el sector\n      de atención al cliente, donde mayoritariamente he estado gestionando\n      equipos en diversas campañas y a distintos niveles.\n    </p> <p>\n      Después de unos años allí, quise mejorar mi formación y ampliar\n      horizontes, surgió una oportunidad y no la dejé escapar.\n    </p> <p>\n      Siempre me había llamado la atención el tema de la programación y, tras\n      dejarme aconsejar por amigos que conocían mis expectativas y\n      capacidades, encontré\n      <a href=\"https://www.adalab.es\" target=\"_blank\"><u>Adalab</u></a>, realicé su bootcamp y aquí estoy hoy, reinventada como Desarrolladora\n      Front-End y dispuesta a aportar valor en cualquier equipo en el que me\n      encuentre.\n    </p></section> <section class=\"mb-2\"><h3>Aptitudes:</h3> <ul><li>Alta capacidad de trabajo en equipo</li> <li>Trabajo bajo presión y con tiempos limitados</li> <li>Organización y adaptación a los cambios</li> <li>Autonomía</li> <li>Comunicación efectiva</li> <li>Filosofía Agile y marco de trabajo Scrum</li> <li>\n        Planificación y gestión eficiente de tiempo y grandes volumenes de\n        trabajo\n      </li></ul></section> <section><div class=\"center my-3\"><button class=\"secondary-btn\""+(_vm._ssrStyle(null,null, { display: (_vm.showExperience) ? '' : 'none' }))+">\n        Ver experiencia profesional\n      </button></div> <ul class=\"tagList\">"+(_vm._ssrList((_vm.icons),function(tag,idxTag){return ("<li class=\"tagList-item\"><span class=\"tag\"><i"+(_vm._ssrClass("tagIcon",tag.icon))+"></i></span> <span>"+_vm._ssrEscape(" "+_vm._s(tag.name)+" ")+"</span></li>")}))+"</ul></section> <section"+(_vm._ssrStyle(null,null, { display: (!_vm.showExperience) ? '' : 'none' }))+"><h3>Experiencia profesional:</h3> <ul><li><span>Febrero 2022 - Actualmente</span> <h6><b>FRONT-END DEVELOPER JR</b>- CEPEISA</h6> <p>\n          Desarrollo front-end de nueva aplicación de la compañia. Realización\n          de maquetación responsive y diferentes funcionalidades.\n        </p> <p>\n          Stack utilizado: HTML5, CSS, SASS, Bootstrap, Element.io, VUE, Nuxt\n        </p></li> <li class=\"my-4\"><span>Abril 2021 - Mayo 2022</span> <h6><b>TECNICO RRHH,</b> WERKHAUS SL SCS</h6> <p>\n          PNL certificado de profesionalidad nivel 3. Técnico de recursos\n          humanos. Gestión y administración del personal\n        </p></li> <li><span>Julio 2005 - Diciembre 2019</span> <h6><b>TEAM LEADER SENIOR (2017-2019), TEAM LEADER(2009-2017), TRAFFIC\n            CONTROLER (2006-2009)</b>\n          TRANSCOM WW\n        </h6> <p>\n          Gestión de equipos a diferentes niveles y realización de tareas de\n          BU del responsable del servicio. Elaboración de previsiones,\n          informes a distintos niveles y planes de acción para alcanzar los\n          objetivos. Control del personal y seguimiento de agentes. Reparto de\n          tareas de trabajo\n        </p></li></ul> <nav class=\"center\"><a href=\"/assets/Pdfs/cfv_CV_Spanish.pdf\" target=\"_blank\" class=\"btn-secondary\">\n        Ver CV en Pdf\n      </a></nav></section>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Aboutme.vue?vue&type=template&id=2fa47c8c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Aboutme.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Aboutmevue_type_script_lang_js_ = ({
  components: {
    GoBack: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 83))
  },

  data() {
    return {
      showExperience: true,
      icons: [{
        icon: 'fas fa-code',
        name: 'Code'
      }, {
        icon: 'fab fa-html5',
        name: 'HTML'
      }, {
        icon: 'fab fa-js-square',
        name: 'JavaScript'
      }, {
        icon: 'fab fa-vuejs',
        name: 'Vue'
      }, {
        icon: 'fab fa-css3',
        name: 'CSS3'
      }, {
        icon: 'fab fa-sass',
        name: 'SASS'
      }, {
        icon: 'fab fa-bootstrap',
        name: 'BOOTSTRAP'
      }, {
        icon: 'fab fa-react',
        name: 'React'
      }, {
        icon: 'fab fa-git-square',
        name: 'Git'
      }, {
        icon: 'fab fa-github',
        name: 'GitHub'
      }, {
        icon: 'fab fa-gitkraken',
        name: 'Gitkraken'
      }, {
        icon: 'fab fa-slack',
        name: 'VsCode'
      }]
    };
  },

  methods: {
    showProfessionalExperience() {
      this.showExperience = false;
    },

    downloadPdf() {
      window.open('/assets/Pdfs/cfv_CV_Spanish.pdf');
    }

  }
});
// CONCATENATED MODULE: ./components/Aboutme.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Aboutmevue_type_script_lang_js_ = (Aboutmevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Aboutme.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Aboutmevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "551ca630"
  
)

/* harmony default export */ var Aboutme = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=aboutme.js.map