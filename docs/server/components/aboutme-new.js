exports.ids = [1];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3f38f0e8", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutmeNew_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutmeNew_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutmeNew_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutmeNew_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutmeNew_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(min-width:768px){.extra_container{padding:1rem 3rem}}@media(min-width:992px){.extra_container{padding:1rem 5rem}}@media(min-width:1200px){.extra_container{padding:1rem 8rem}}@media(min-width:1400px){.extra_container{padding:1rem 10rem}}.all_about_me{display:flex;flex-direction:column;justify-content:center;align-items:center}@media(min-width:576px){.all_about_me{display:grid;grid-template-columns:1fr 3fr 1fr;grid-template-rows:1fr 3fr 1fr;grid-gap:4%;gap:4%;align-self:center;align-items:center;text-align:center}}.all_about_photo_container{grid-column:2/3;grid-row:2/3}.my_photo{width:200px;height:200px;border-radius:50%}.bocadillo{padding:10px;border:1px solid #202234;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:5px auto;border-radius:20px;box-shadow:1px 1px 7px rgba(0,0,0,.5);-webkit-animation:cascade 5s linear;animation:cascade 5s linear}.bocadillo:nth-child(8){-webkit-animation-delay:.1s;animation-delay:.1s}.bocadillo:nth-child(7){-webkit-animation-delay:.2s;animation-delay:.2s}.bocadillo:nth-child(6){-webkit-animation-delay:.4s;animation-delay:.4s}.bocadillo:nth-child(5){-webkit-animation-delay:.6s;animation-delay:.6s}.bocadillo:nth-child(4){-webkit-animation-delay:.1s;animation-delay:.1s}.bocadillo:nth-child(3){-webkit-animation-delay:.2s;animation-delay:.2s}.bocadillo:nth-child(2){-webkit-animation-delay:.4s;animation-delay:.4s}.bocadillo:first-child{-webkit-animation-delay:.6s;animation-delay:.6s}.all_about_btn{-webkit-animation:fade-in 5s ease;animation:fade-in 5s ease}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutmeNew.vue?vue&type=template&id=735e7bd9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"GoBack_container\">","</section>",[_c('GoBack')],1),_vm._ssrNode(" <hr> <section class=\"all_about_me extra_container\"><article class=\"bocadillo\"><p>Equipo</p></article> <article class=\"bocadillo\"><p>Adaptación a los cambios</p></article> <article class=\"bocadillo\"><p>Organización</p></article> <article class=\"bocadillo\"><p>Filosofía Agile</p></article> <div class=\"all_about_photo_container\"><img src=\"/assets/images/editorimg.jpg\" alt=\"me\" class=\"my_photo fade-in\"></div> <article class=\"bocadillo\"><p>Autonomía</p></article> <article class=\"bocadillo\"><p>Marco-Scrum</p></article> <article class=\"bocadillo\"><p>Comunicación efectiva</p></article> <article class=\"bocadillo\"><p>Planificación</p></article></section> <section><div class=\"center my-4 all_about_btn\"><button class=\"secondary-btn\""+(_vm._ssrStyle(null,null, { display: (_vm.showExperience) ? '' : 'none' }))+">\n        Ver experiencia profesional\n      </button></div></section> <section class=\"extra_container\""+(_vm._ssrStyle(null,null, { display: (!_vm.showExperience) ? '' : 'none' }))+"><h3>Experiencia profesional:</h3> <ul><li><span><i>Febrero 2022 - Actualmente</i></span> <h6><b>FRONT-END DEVELOPER JR</b>- CEPEISA</h6> <p>\n          Desarrollo front-end de nueva aplicación de la compañia. Realización\n          de maquetación responsive y diferentes funcionalidades.\n        </p> <p>\n          Stack utilizado: HTML5, CSS, SASS, Bootstrap, Element.io, VUE, Nuxt\n        </p></li> <li class=\"my-4\"><span><i>Abril 2021 - Mayo 2022</i></span> <h6><b>TECNICO RRHH,</b> WERKHAUS SL SCS</h6> <p>\n          PNL certificado de profesionalidad nivel 3. Técnico de recursos\n          humanos. Gestión y administración del personal\n        </p></li> <li><span><i>Julio 2005 - Diciembre 2019</i></span> <h6><b>TEAM LEADER SENIOR (2017-2019), TEAM LEADER(2009-2017), TRAFFIC\n            CONTROLER (2006-2009)</b>\n          TRANSCOM WW\n        </h6> <p>\n          Gestión de equipos a diferentes niveles y realización de tareas de\n          BU del responsable del servicio. Elaboración de previsiones,\n          informes a distintos niveles y planes de acción para alcanzar los\n          objetivos. Control del personal y seguimiento de agentes. Reparto de\n          tareas de trabajo\n        </p></li></ul> <nav class=\"center\"><a href=\"/assets/Pdfs/cfv_CV_Spanish.pdf\" target=\"_blank\" class=\"secondary-btn\">\n        Ver CV en Pdf\n      </a></nav></section>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AboutmeNew.vue?vue&type=template&id=735e7bd9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutmeNew.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AboutmeNewvue_type_script_lang_js_ = ({
  components: {
    GoBack: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 83))
  },

  data() {
    return {
      showExperience: true
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
// CONCATENATED MODULE: ./components/AboutmeNew.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutmeNewvue_type_script_lang_js_ = (AboutmeNewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutmeNew.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutmeNewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "10b96980"
  
)

/* harmony default export */ var AboutmeNew = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=aboutme-new.js.map