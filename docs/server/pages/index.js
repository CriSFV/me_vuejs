exports.ids = [14,7];
exports.modules = {

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7a9a2bfe", content, true, context)
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes fade-in{0%{opacity:0}50%{opacity:.5}to{opacity:1}}@keyframes fade-in{0%{opacity:0}50%{opacity:.5}to{opacity:1}}@-webkit-keyframes giro{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}to{transform:rotate(1turn)}}@keyframes giro{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}to{transform:rotate(1turn)}}@-webkit-keyframes cascade{0%{transform:translateY(-500px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes cascade{0%{transform:translateY(-500px);opacity:0}to{transform:translateY(0);opacity:1}}.giro{-webkit-animation:giro 3s linear infinite,cascade 3s linear;animation:giro 3s linear infinite,cascade 3s linear}.fade-in{-webkit-animation:fade-in 2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in 2s cubic-bezier(.39,.575,.565,1) both}.cascade{-webkit-animation:cascade 5s linear;animation:cascade 5s linear}.hero__btn{background-color:#ec9bc6;border-radius:15px;width:155px;margin-bottom:20px}.btn-container{text-align:center;margin:30px 0 0}.hero__content{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#202234;font-size:14px}.hero__content__photo{margin-bottom:20px}.hero__content_presentation{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:30px}@media(min-width:768px){.hero__content_presentation{padding:0;flex-direction:row;justify-content:space-evenly;width:100%}}@media(min-width:1400px){.hero__content_presentation{padding:0 20em;flex-direction:row;justify-content:space-evenly;width:100%}}@media(min-width:1600px){.hero__content_presentation{padding:0 25em;flex-direction:row;justify-content:space-evenly;width:100%}}.hero__photo{width:200px;height:200px;border-radius:50%}.hero__title{margin:10px}.hero__subtitle{font-size:20px}@media(min-width:768px){.hero__subtitle{font-size:30px}}.hero__name{color:#3f5efb}.hero__subtitle2{font-size:20px;margin-top:5px}.hero__info{text-align:justify;padding:30px;margin:0 0 100px}@media(min-width:576px){.hero__info{margin:0}}.modal-body{display:flex;justify-content:space-around}.modal-body a{width:150px;height:40px}.modal-body a:hover{color:#3f5efb;text-decoration:none}@media(min-width:500){.hero__content{padding:90px 40px 0 60px}}.icon{font-size:28px;margin:5px;color:#3f5efb}.hero_text{text-align:center}@media(min-width:768px){.hero_text{margin:0 0 0 10px}}.responsive{display:none}@media(min-width:576px){.responsive{display:inline-block}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hero/Hero.vue?vue&type=template&id=2843c5a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"generalContainer hero__content",attrs:{"id":"home"}},[_vm._ssrNode("<section class=\"hero__content_presentation\"><div class=\"hero__content__photo\"><img src=\"/assets/images/editorimg.jpg\" alt=\"this is me\" class=\"hero__photo fade-in\"></div> <div class=\"hero_text\"><h2 class=\"hero__title\">¡¡Hola!!</h2> <h2 class=\"hero__subtitle hero__name fade-in\">\n        Soy Cris, Front-End Developer\n      </h2> <div class=\"fade-in\"><i class=\"far fa-smile-beam icon giro responsive\"></i> <span class=\"hero__subtitle\">Creadora de experiencias digitales</span> <i class=\"far fa-smile-beam icon giro responsive\"></i></div></div></section> "),_vm._ssrNode("<article class=\"hero__info\">","</article>",[_vm._ssrNode("<h5>¡Gracias por haber llegado hasta aquí!</h5> <p>\n      Apasionada de la vida y de la gente, muchos años gestionando grupos me\n      han ayudado a trabajar mejor en equipo, contribuyendo al desarrollo de\n      las personas.\n    </p> <p>\n      Me gusta la tecnología y aprender cosas nuevas, y si es en equipo, mucho\n      mejor!!\n    </p> "),_vm._ssrNode("<div class=\"btn-container\">","</div>",[_c('b-button',{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":true}}],staticClass:"btn-principal"},[_vm._v("Comenzar")])],1)],2),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"modal-1","title":"¿Por donde quieres empezar?","size":"lg","hide-footer":"","centered":"","no-close-on-esc":"","no-close-on-backdrop":""}},[_c('ul',{staticClass:"list_decoration column-row"},[_c('li',{staticClass:"header__link"},[_c('a',{staticClass:"nav_link",attrs:{"href":"/projects"}},[_vm._v(" Proyectos ")])]),_vm._v(" "),_c('li',{staticClass:"header__link"},[_c('a',{staticClass:"nav_link",attrs:{"href":"/aboutme"}},[_vm._v(" Cónoceme ")])]),_vm._v(" "),_c('li',{staticClass:"header__link"},[_c('a',{staticClass:"nav_link",attrs:{"href":"/contact"}},[_vm._v(" Contacto ")])])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Hero/Hero.vue?vue&type=template&id=2843c5a6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hero/Hero.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Herovue_type_script_lang_js_ = ({
  name: 'Hero',

  data() {
    return {};
  },

  methods: {}
});
// CONCATENATED MODULE: ./components/Hero/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var Hero_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Hero/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Hero_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c89620cc"
  
)

/* harmony default export */ var Hero = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=d13e7ad2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Hero')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=d13e7ad2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Hero: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 49))
  },
  name: 'IndexPage',
  layouts: 'default'
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3b174993"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Hero: __webpack_require__(49).default})


/***/ })

};;
//# sourceMappingURL=index.js.map