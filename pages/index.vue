<template>
  <div>
    <Header/>
    <Main/>
    <div class="contents">
      <Store_description/>
      <Article_area v-bind:ArticleList="ArticleList"/>
    </div>
  </div>
</template>

<script>
  import Header from '~/components/common/Header.vue'
  import Main from '~/components/top/Main.vue'
  import Store_description from '~/components/top/Store_description.vue'
  import Article_area from '~/components/top/Article_area.vue'

  export default {
    middleware: 'notAuthenticated',
    components: {
      Header,
      Main,
      Store_description,
      Article_area
    },
    async asyncData({$axios}) {
      const hoge = {
        params: {
          paginate: 4,
          page: 1
        }
      };
      const article_area_posts = await $axios.$get(process.env.API + 'paginate', hoge)
      return { ArticleList: article_area_posts.data }
    },
    data() {
      return {
        ArticleList2: {
          id: '',
          title: '',
          body: '',
          featured_image: '',
          tag: '',
          seo_title: '',
          meta_description: '',
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

  .contents {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    @include mq(xl) {
      max-width: 1600px;
    }
  }

</style>
