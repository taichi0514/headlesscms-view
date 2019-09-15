<template>
  <main id="registrationForm">
    <h1>ログイン</h1>
    <label>メール</label>
    <br/>
    <input v-model="username"/>
    <br/>
    <label>パスワード</label>
    <br/>
    <input v-model="password" type="password"/>
    <br/>
    <button v-on:click="Login" type="button">ログイン</button>
  </main>
</template>


<script>
  const Cookie = require('js-cookie')

  export default {
    middleware: 'notAuthenticated',
    data() {
      return {
        username: "",
        password: "",
        token: ""
      };
    },

    created() {
    },

    methods: {
      async Login() {
        setTimeout(() => {
          const postData = {
            scope: "*",
            grant_type: "password",
            client_id: "5",
            client_secret: process.env.CLIENTSECRET,
            username: this.username,
            password: this.password
          };
          const username = this.username
          const password = this.password
          this.$store.commit('setUser', {username})
          this.$store.commit('setPass', {password})
          this.$axios.post(process.env.AUTH, postData).then((res)=>{
            const auth = res.data
            this.$store.commit("setAuth", {auth});
            Cookie.set('auth', auth)
            this.$router.push("/admin");
          })
        }, 1000)
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>

