exports.ids = [2];
exports.modules = {

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("34d501c9", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLinks_vue_vue_type_style_index_0_id_d5974c80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLinks_vue_vue_type_style_index_0_id_d5974c80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLinks_vue_vue_type_style_index_0_id_d5974c80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLinks_vue_vue_type_style_index_0_id_d5974c80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLinks_vue_vue_type_style_index_0_id_d5974c80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media 0 width,0.3rem width,3px solid $principal-color .icons font-size,5px border-bottom,10px color,15px border,15px text-decoration,15px width,18px .dropdown-item color,20px .header__link__home font-size,20px margin,35px position,100 font-size,100% z-index,500px list-style-type,600 height,$light-color border-radius,$principal-color text-decoration,$principal-dark 0.5px solid background-color,$principal-dark .dropdown-item,$principal-dark .dropdown-menu.show background-color,$principal-dark font-size,$principal-light color,.header font-weight,auto .header__link a color,center font-size,center justify-content,end .menu__button border-radius,end transform,fit-content top,fit-content transition,flex-end .header__link color,flex justify-content,hover border-radius,inline-block text-align,none,none .home display,none display,none text-align,relative left,row !important align-items,space-between .navbar-collapse justify-content,transform ease 1s margin,translateY(7px) @media (min-width:992px) flex-direction,transparent border{$background:radial-gradient(circle,#3f5efb 0,#fc466b 100%);$principal-dark:#202234;$principal-color:#3f5efb;$principal-color-opacity:rgba(63,94,251,.6);$light-color:#ced7e4;$background_new:#f7f7f7;$principal-middle:#ec9bc6;$principal-light:#f1f1ec;$principal-letters:#413b42;$headerFooterBg:rgba(63,198,251,.25);$third-font-family:\"Crafty Girls\",cursive;$secondary-font-family:\"Montserrat\",sans-serif;$principal-font-family:\"Roboto\",sans-serif}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/MenuLinks.vue?vue&type=template&id=d5974c80&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"home",attrs:{"id":"header"}},[_vm._ssrNode("<a href=\"/\" class=\"header__link__home\" data-v-d5974c80><i class=\"fas fa-home\" data-v-d5974c80></i></a> "),_c('b-dropdown',{staticClass:"m-2 menu__button",attrs:{"text":"Menu","variant":"#eee1bb","dropleft":"","no-caret":""}},[_c('b-dropdown-item',{staticClass:"header__link",attrs:{"variant":"#eee1bb","to":"/projects"}},[_vm._v("Proyectos")]),_vm._v(" "),_c('b-dropdown-item',{staticClass:"header__link",attrs:{"variant":"#eee1bb","to":"/aboutme"}},[_vm._v("Sobre mi")]),_vm._v(" "),_c('b-dropdown-item',{staticClass:"header__link",attrs:{"variant":"#eee1bb","to":"/contact"}},[_vm._v("Contacto")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation/MenuLinks.vue?vue&type=template&id=d5974c80&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/MenuLinks.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MenuLinksvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Navigation/MenuLinks.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_MenuLinksvue_type_script_lang_js_ = (MenuLinksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation/MenuLinks.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_MenuLinksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d5974c80",
  "ee8225f8"
  
)

/* harmony default export */ var MenuLinks = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=navigation-menu-links.js.map