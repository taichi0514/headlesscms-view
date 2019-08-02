<template>
  <div>
    <Header/>
    <Main/>
    <Store_description />
    <Article_area/>
  </div>
</template>

<script>
  import Header from '~/components/common/Header.vue'
  import Main from '~/components/top/Main.vue'
  import Store_description from '~/components/top/Store_description.vue'
  import Article_area from '~/components/top/Article_area.vue'

  export default {
    components: {
      Header,
      Main,
      Store_description,
      Article_area
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
