// export default function ({store, axios}) {
//   const postData = {
//     scope: "*",
//     grant_type: 'password',
//     client_id: '5',
//     client_secret: process.env.CLIENTSECRET,
//     username: store.state.username,
//     password: store.state.password,
//   }
//   axios.post("https://headlesscms-api.herokuapp.com/oauth/token", postData).then((res)=>{
//     commit('setAuth', res)
//   })
//
// }
