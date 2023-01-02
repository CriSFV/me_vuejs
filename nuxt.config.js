export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'me_vuejs',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'portfolio migrado a VUE',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" },
      { rel: 'preconnect', href:' https://fonts.googleapis.com'},
      { rel: 'preconnect', href:' https://fonts.gstatic.com'},
      { rel: 'stylesheet', href:' https://fonts.googleapis.com/css2?family=Crafty+Girls&family=Montserrat&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap '},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css' }
    ],
  },
  
  build: {
    babel: {
     compact: true,
    },
 },



  // Global CSS: https://go.nuxtjs.dev/config-css. no funciona con @ solo con ~/
  css: ['@/assets/styles/main.sass'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
