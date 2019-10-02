const cookieparser = require('cookieparser')


export const state = () => ({
  token: null,
  auth: false,
  auth_data: null,
  username: null,
  password: null,
})


export const mutations = {

  setAuth(state, auth) {
    state.auth = auth
    state.auth_check = true
  },

  setUser(state, user) {
    state.username = user.username
  },

  setPass(state, pass) {
    state.password = pass.password
  },
  removeAuth(state) {
    state.auth = null
    state.auth_check = false
  },

}


export const actions = {
  nuxtClientInit({commit}, {app}) {
    let auth = null
    if (process.static) {
      const parsed = cookieparser.parse(app.$cookies.get('auth'))
      try {
        auth = JSON.parse(parsed.auth)
        commit('setAuth', auth)
      } catch (err) {
        // 有効なクッキーが見つからない場合
        commit('removeAuth', auth)
      }
    }
  }

}
