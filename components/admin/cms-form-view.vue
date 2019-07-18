<template>
  <div class="cms-form-view">
      <h2>{{title}}</h2>
    <p> {{body}}</p>
  </div>
</template>


<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'title',
        'body'
      ])
    }
  }
</script>

<style scoped lang="scss">
  h2{
    margin-top: 60px;
  }

  p{
    margin-top: 90px;
  }
</style>
