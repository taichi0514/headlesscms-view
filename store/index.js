import Vuex from 'vuex'


export const state = () => ({
  auth: false,
  auth_data:null,
  username: null,
  password: null,
})


export const mutations = {

  setAuth(state, auth) {
    state.auth = {loggedIn:"ture"},
    state.auth_data = auth.token

  },

  setUser(state, user) {
    state.username = user.username
  },

  setPass(state, pass) {
    state.password = pass.password
  }

}

