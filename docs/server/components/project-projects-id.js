exports.ids = [4];
exports.modules = {

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("302d6c08", content, true, context)
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectsId_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectsId_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectsId_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectsId_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectsId_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".goBack_container{text-align:left;text-align:initial}.goBack:hover{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project/projectsId.vue?vue&type=template&id=b0ad9fc4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"goBack_container\"><span class=\"goBack\"><i class=\"fas fa-angle-left\"></i> volver\n    </span></section> <section><h2 class=\"card__title\">"+_vm._ssrEscape(_vm._s(_vm.projectToPrint.title))+"</h2> <article><img"+(_vm._ssrAttr("src",_vm.projectToPrint.img))+(_vm._ssrAttr("alt",'Project'[_vm.projectToPrint.title]))+" class=\"card__thumbnail\"> <p class=\"post-content\">"+_vm._ssrEscape(_vm._s(_vm.projectToPrint.comment))+"</p></article></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Project/projectsId.vue?vue&type=template&id=b0ad9fc4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project/projectsId.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var projectsIdvue_type_script_lang_js_ = ({
  data() {
    return {
      projectToPrint: {},
      data_projects: [{
        id: 'project4',
        title: 'Buscador de personajes',
        gitHub: 'https://github.com/CriSFV/Rick-Morty-directory',
        gitHubPages: 'https://crisfv.github.io/Rick-Morty-directory/#/',
        img: '/assets/images/project4.png',
        tags: ['HTML5', 'CSS3', 'SASS', 'JAVASCRIPT', 'REACT'],
        comment: 'SPA creada con React con llamada a API externa. Responsive Desing'
      }, {
        id: 'project3',
        title: 'Buscador de series',
        gitHub: 'https://github.com/CriSFV/Series-Searcher',
        gitHubPages: 'https://crisfv.github.io/Series-Searcher/',
        img: '/assets/images/project3.png',
        tags: ['HTML5', 'CSS3', 'SASS', 'JAVASCRIPT'],
        comment: 'Aplicación creada con JavaScript con llamada a API externa donde puedes buscar tus series favoritas'
      }, {
        id: 'project2',
        title: 'Adivina el número',
        gitHub: 'https://github.com/CriSFV/Guess-the-number',
        gitHubPages: 'https://crisfv.github.io/Guess-the-number/',
        img: '/assets/images/project2.png',
        tags: ['HTML5', 'CSS3', 'SASS', 'JAVASCRIPT'],
        comment: 'Aplicación creada con JavaScript en la que tienes que tratar de adivinar el número aleatorio'
      }, {
        id: 'project5',
        title: 'Juego del ahorcado',
        gitHub: 'https://github.com/CriSFV/Hangmangame',
        gitHubPages: 'https://crisfv.github.io/Hangmangame/',
        img: '/assets/images/project5.png',
        tags: ['JAVASCRIPT', 'REACT'],
        comment: 'Aplicación aún en construcción creada con React y con petición a API de palabra aleatoria que tienes que tratar de adivinar con el conocido juego del ahorcado.'
      }, {
        id: 'project6',
        title: 'Awesome profile cards',
        gitHub: 'https://github.com/CriSFV/awesome-profile-cards',
        gitHubPages: 'https://crisfv.github.io/awesome-profile-cards/',
        img: '/assets/images/project6.png',
        tags: ['HTML5', 'CSS3', 'SASS', 'JAVASCRIPT'],
        comment: 'Aplicación responsive creada con JavaScript en la que puedes crear una tarjeta personalizada, creado en equipo bajo filosofía Agile'
      }, {
        id: 'project8',
        title: 'Awesome profile cards',
        gitHub: 'https://github.com/CriSFV/project-promo-n-module-3-team-2',
        gitHubPages: 'https://sqlito-johnson.herokuapp.com/',
        img: '/assets/images/project8.jpg',
        tags: ['REACT', 'NODEJS'],
        comment: 'Migración a ReactJS de código JavaScript heredado, utilizando también NodeJs y SQLite para la creación de tarjetas de contacto compartibles. Proyecto creado en equipo bajo filosofía Agile'
      }, {
        id: 'project7',
        title: 'My favorites clubs',
        gitHub: 'https://github.com/CriSFV/My-favorites-clubs',
        gitHubPages: 'https://crisfv.github.io/My-favorites-clubs/',
        img: '/assets/images/project7.png',
        tags: ['HTML5', 'CSS3', 'SASS', 'JAVASCRIPT', 'REACT'],
        comment: 'SPA creada con React en la que añadir y modificar tu lista de clubs.'
      }, {
        id: 'project1',
        title: 'Maquetación de una web',
        gitHub: 'https://github.com/CriSFV/Maquetacion-de-una-web',
        gitHubPages: 'https://crisfv.github.io/Maquetacion-de-una-web/',
        img: '/assets/images/project1.png',
        tags: ['HTML5', 'CSS3', 'SASS', 'GULP'],
        comment: 'Maquetación de una web responsive en equipo bajo filosofía agile'
      }, {
        id: 'project9',
        title: 'Guess the pokemon',
        gitHub: 'https://github.com/CriSFV/Poke-game',
        gitHubPages: 'https://vue-pok.netlify.app/',
        img: '/assets/images/project9.jpg',
        tags: ['HTML5', 'CSS3', 'VUEJS'],
        comment: 'Proyecto creado como ejercicio de aprendizaje con VUE'
      }]
    };
  },

  mounted() {
    this.loadOption();
  },

  methods: {
    loadOption() {
      this.projectToPrint = this.data_projects.find(x => x.id === this.$route.params.id);
      console.log(this.projectToPrint);
    },

    goBack() {
      this.$router.push('/projects');
    }

  }
});
// CONCATENATED MODULE: ./components/Project/projectsId.vue?vue&type=script&lang=js&
 /* harmony default export */ var Project_projectsIdvue_type_script_lang_js_ = (projectsIdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Project/projectsId.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Project_projectsIdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "299ffa20"
  
)

/* harmony default export */ var projectsId = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=project-projects-id.js.map