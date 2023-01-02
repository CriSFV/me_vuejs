exports.ids = [10];
exports.modules = {

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("8d8738a6", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPreview_vue_vue_type_style_index_0_id_72656ea6_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPreview_vue_vue_type_style_index_0_id_72656ea6_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPreview_vue_vue_type_style_index_0_id_72656ea6_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPreview_vue_vue_type_style_index_0_id_72656ea6_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPreview_vue_vue_type_style_index_0_id_72656ea6_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card[data-v-72656ea6]{background-color:transparent;margin:20px;display:grid;grid-template-rows:100px 220px 1fr;box-shadow:1px 4px 15px 3px rgba(0,0,0,.65);border-radius:20px;width:230px;height:346px;transition:all .5s ease}.card[data-v-72656ea6]:hover{transform:scale(1.02)}.card__title[data-v-72656ea6]{padding:10px;color:#202234;font-weight:700;text-align:center}.card__thumbnail[data-v-72656ea6]{width:200px;height:200px;background-position:50%;background-size:cover;border-radius:5px;margin:auto}@media(min-width:330px){.card[data-v-72656ea6]{width:300px}}.post-content[data-v-72656ea6]{padding:30px;text-align:center}a:active .post-content[data-v-72656ea6],a:hover .post-content[data-v-72656ea6]{text-decoration:none;color:#202234}.post-preview[data-v-72656ea6]{box-shadow:0 2px 2px #ccc;width:50%}a[data-v-72656ea6]{text-decoration:none;color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project/ProjectPreview.vue?vue&type=template&id=72656ea6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post-project"},[_vm._ssrNode("<article class=\"card\" data-v-72656ea6><h2 class=\"card__title\" data-v-72656ea6>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> <img"+(_vm._ssrAttr("src",_vm.srcImage))+(_vm._ssrAttr("alt",'Project'[_vm.title]))+" class=\"card__thumbnail\" data-v-72656ea6></article>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Project/ProjectPreview.vue?vue&type=template&id=72656ea6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project/ProjectPreview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
// previiew projects
/* harmony default export */ var ProjectPreviewvue_type_script_lang_js_ = ({
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String
    },
    thumbnail: {
      type: String
    },
    srcImage: {
      type: String,
      default: '/assets/images/editorimg.jpg'
    }
  },
  methods: {
    selectProject(item) {
      this.$emit('selectProject', item);
    }

  }
});
// CONCATENATED MODULE: ./components/Project/ProjectPreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var Project_ProjectPreviewvue_type_script_lang_js_ = (ProjectPreviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Project/ProjectPreview.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Project_ProjectPreviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "72656ea6",
  "30864fca"
  
)

/* harmony default export */ var ProjectPreview = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=project-preview.js.map