import pkg from './package'
import axios from 'axios'

require('dotenv').config();
const {API} = process.env;
const {CLIENTSECRET} = process.env;
const {AUTH} = process.env;
const {MODE} = process.env;

export default {
  mode: process.env.MODE,

  /*
  ** Headers of the page
  */
  head: {
    title: '',
    titleTemplate: '%s | CMS DEMO',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'CMS DEMO'},
      {hid: 'og:site_name', property: 'og:site_name', content: 'CMS DEMO'},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:url', property: 'og:url', content: 'https://headlesscms-view.herokuapp.com'},
      {hid: 'og:title', property: 'og:title', content: 'CMS DEMO'},
      {hid: 'og:description', property: 'og:description', content: 'CMS DEMO'},
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://headlesscms-api.s3.ap-northeast-1.amazonaws.com/test/sQ1p0a2Dk2Lb3QkrKxZ8eoL9laEWQ0zJelMeAVfQ.jpeg'
      },
      {hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'CMS DEMO'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#4444b9',
    height: '5px'
  },

  /*
  ** Global CSS
  */
  css: [
    'normalize.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth',
    'nuxt-client-init-module',
    ['cookie-universal-nuxt', {parseJSON: false}]
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
  axios: {},

  env: {
    API,
    CLIENTSECRET,
    AUTH,
    MODE
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
  },

  generate: {
    routes: async function () {
      const params = {
        params: {
          paginate: 4,
          page: 1
        }
      };
      const paginate = await axios.get(process.env.API + 'paginate', params)
      const paginate_res = paginate.data.data.map(paginate => {
        return {
          route: '/paginate/' + paginate.id,
          payload: {paginate}
        }
      })
      const article = await axios.get(process.env.API + 'posts/all')
      const article_res = article.data.data.map(article => {
        return {
          route: '/article/' + article.id,
          payload: {article}
        }
      })
      const admin_edit = await axios.get(process.env.API + 'posts/all')
      const admin_edit_res = admin_edit.data.data.map(edit => {
        return {
          route: '/admin/edit/' + edit.id,
          payload: {edit}
        }
      })
      const article_area = await axios.get(process.env.API + 'posts/all')
      const article_area_res = article_area.data.data.map(article_area_posts => {
        return {
          payload: {article_area_posts}
        }
      })

      const tag = await axios.get(process.env.API + 'tag/all');
      const tag_res = tag.data.map(tags => {
        return {
          route: '/category/' + tags.tag,
          payload: tags.tag
        }
      })


      return Promise.all([paginate_res, article_res, admin_edit_res, article_area_res, tag_res]).then(values => {
        return [...values[0], ...values[1], ...values[2], ...values[3], ...values[4]]
      })
    }
  }
}
