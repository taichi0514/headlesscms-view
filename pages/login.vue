<template>
  <main>
    <div id="registrationForm" class="form-wrapper">
      <form>
        <div class="form-item">
          <label>メール</label>
          <input v-model="username" type="email" name="email" required="required" placeholder=""></input>
        </div>
        <div class="form-item">
          <label>パスワード</label>
          <input v-model="password" type="password" name="password" required="required" placeholder=""></input>
        </div>
        <div class="button-panel">
          <button class="button" title="ログイン" v-on:click="Login" type="button" value="ログイン">ログイン</button>
          <button class="Articlepost" @click="Return" type="button">戻る</button>

        </div>

      </form>
    </div>
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
    methods: {
      Login() {
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
          this.$axios.post(process.env.AUTH, postData).then((res) => {
            const auth = res.data
            this.$store.commit("setAuth", {auth});
            Cookie.set('auth', auth)
            Cookie.set('auth_check', "ture")
            this.$router.push("/admin");
          })
        }, 1000)
      },
      Return() {
        this.$router.push("/");
      }
    }
  };
</script>

<style lang="scss" scoped>
  /* Fonts */
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400);
  /* fontawesome */
  @import url(http://weloveiconfonts.com/api/?family=fontawesome);

  [class*="fontawesome-"]:before {
    font-family: 'FontAwesome', sans-serif;
  }

  /* Simple Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* body */
  body {
    background: #e9e9e9;
    color: #5e5e5e;
    font: 400 87.5%/1.5em 'Open Sans', sans-serif;
  }

  /* Form Layout */
  .form-wrapper {
    background: #fafafa;
    margin: 3em auto;
    padding: 3em 1em;
    max-width: 370px;
  }

  h1 {
    text-align: center;
    padding: 1em 0;
  }

  form {
    padding: 0 1.5em;
  }

  .form-item {
    margin-bottom: 0.75em;
    width: 100%;
  }

  .form-item input {
    background: #fafafa;
    border: none;
    border-bottom: 2px solid #e9e9e9;
    color: #666;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    height: 50px;
    transition: border-color 0.3s;
    width: 100%;
  }

  .form-item input:focus {
    border-bottom: 2px solid #c0c0c0;
    outline: none;
  }

  .button-panel {
    margin: 2em 0 0;
    width: 100%;
  }

  .button-panel .button {
    background: #f16272;
    border: none;
    color: #fff;
    cursor: pointer;
    height: 50px;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    letter-spacing: 0.05em;
    text-align: center;
    text-transform: uppercase;
    transition: background 0.3s ease-in-out;
    width: 100%;
  }

  .button:hover {
    background: #ee3e52;
  }

  .form-footer {
    font-size: 1em;
    padding: 2em 0;
    text-align: center;
  }

  .form-footer a {
    color: #8c8c8c;
    text-decoration: none;
    transition: border-color 0.3s;
  }

  .form-footer a:hover {
    border-bottom: 1px dotted #8c8c8c;
  }
  .Articlepost {
    appearance: none;
    border: none;
    background-color: #a9a9b3;
    padding: 12px 14px;
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    transition: background-color 1s, color 1s;
    width: 100%;
    margin-top: 20px;
  }

  .Articlepost:hover {
    background-color: darken(#a9a9b3, 20%);
  }
</style>

