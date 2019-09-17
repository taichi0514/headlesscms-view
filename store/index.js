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
  },

  setUser(state, user) {
    state.username = user.username
  },

  setPass(state, pass) {
    state.password = pass.password
  },
  removeAuth(state) {
    state.auth = null
  },

}


export const actions = {
  nuxtServerInit({commit}, {req}) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // 有効なクッキーが見つからない場合
      }
    }
    commit('setAuth', auth)
  }
}
