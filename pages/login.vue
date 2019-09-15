<template>
  <main id="registrationForm">
    <h1>
      ログイン
    </h1>
    <label>メール</label><br>
    <input v-model="username"><br>
    <label>パスワード</label><br>
    <input v-model="password"><br>
<!--    {{this.$store.state.auth}}-->
    <button v-on:click="Login" type="button">ログイン</button>
  </main>
</template>


<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        token: '',
      }
    },

    methods: {
      async Login() {
        const postData = {
          scope: "*",
          grant_type: 'password',
          client_id: '5',
          client_secret: process.env.CLIENTSECRET,
          username: this.username,
          password: this.password,
        }
        const username = this.username
        const password = this.password
        this.$store.commit('setUser', {username})
        this.$store.commit('setPass', {password})
        const token = await this.$axios.post("https://headlesscms-api.herokuapp.com/oauth/token", postData)
        this.$store.commit('setAuth', {token})
        this.$router.push('/admin')
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>

