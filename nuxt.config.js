import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [
    'normalize.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/axios.js'
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8000/api'
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  // 読みませたいscssファイルを指定します。
  styleResources: {
    sass: [
      '~/assets/scss/libs/*.scss', '~/assets/scss/libs/_mq.scss'
    ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL:'https://headlesscms-api.herokuapp.com',
    browserBaseURL:'https://headlesscms-api.herokuapp.com',
    https: true,
    proxy: {
      '/api': {target: 'https://headlesscms-api.herokuapp.com/api/posts/all', pathRewrite: {'^/api': ''}}
    }
  },


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
