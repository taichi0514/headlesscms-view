<template>
  <div class="cms-form-view">
      <h2>{{title}}</h2>
    <p v-html="compiledMarkdown">
    </p>
  </div>
</template>


<script>
  import { mapState } from 'vuex'
  import marked from 'marked';
  export default {
  computed: {
      ...mapState([
        'title',
        'body'
      ]),
      compiledMarkdown: function () {
        marked.setOptions({breaks : true})
        return marked(this.$store.state.body)
      }
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
