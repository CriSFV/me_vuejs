exports.ids = [0];
exports.modules = {

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("278458c3", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_goback_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_goback_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_goback_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_goback_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_goback_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav_link_header{font-size:14px}.goBack_container{text-align:left;text-align:initial;display:flex;justify-content:space-between;align-items:center}.goBack:hover{cursor:pointer}.links_container{display:flex;width:300px}.links_container_sm{display:flex;flex-direction:column}.b-sidebar{width:160px!important}.boton_menu{background-color:transparent;border:1px solid #202234;border-radius:5px;color:#202234;padding:0 5px}.boton_menu:hover{background-color:#202234;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/goback.vue?vue&type=template&id=0748fe28&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"goBack_container"},[_vm._ssrNode("<span class=\"goBack\"><i class=\"fas fa-angle-left\"></i> volver home\n  </span> "),_vm._ssrNode("<div class=\"responsive_sm\">","</div>",[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":true}}],staticClass:"boton_menu"},[_vm._v("Menu")]),_vm._ssrNode(" "),_c('b-sidebar',{attrs:{"id":"sidebar-1","title":"Menu","shadow":""}},[_c('ul',{staticClass:"list_decoration links_container_sm"},[_c('li',{staticClass:"header__link"},[_c('span',[_c('a',{staticClass:"nav_link_header",attrs:{"href":"/projects"}},[_vm._v(" Proyectos ")])])]),_vm._v(" "),_c('li',{staticClass:"header__link"},[_c('span',[_c('a',{staticClass:"nav_link_header",attrs:{"href":"/aboutme"}},[_vm._v(" Cónoceme ")])])]),_vm._v(" "),_c('li',{staticClass:"header__link"},[_c('span',[_c('a',{staticClass:"nav_link_header",attrs:{"href":"/contact"}},[_vm._v(" Contacto ")])])])])])],2),_vm._ssrNode(" <div class=\"responsive_md\"><ul class=\"list_decoration links_container\"><li class=\"header__link\"><span><a href=\"/projects\" class=\"nav_link_header\"> Proyectos </a></span></li> <li class=\"header__link\"><span><a href=\"/aboutme\" class=\"nav_link_header\"> Cónoceme </a></span></li> <li class=\"header__link\"><span><a href=\"/contact\" class=\"nav_link_header\"> Contacto </a></span></li></ul></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation/goback.vue?vue&type=template&id=0748fe28&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/goback.vue?vue&type=script&lang=js&
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
/* harmony default export */ var gobackvue_type_script_lang_js_ = ({
  methods: {
    goBack() {
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./components/Navigation/goback.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_gobackvue_type_script_lang_js_ = (gobackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation/goback.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_gobackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "db7ce796"
  
)

/* harmony default export */ var goback = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=navigation-goback.js.map