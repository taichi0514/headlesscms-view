<template>
  <div class="admin">
      <ul class="ArticleListWrapp">
        <li class="ArticleList" v-for="(item,index) in ArticleList" :key="index">
          <nuxt-link class="ArticleListLink" :to="'admin/edit/' + item.id">
            {{item.title}}
          </nuxt-link>
        </li>
      </ul>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    head: {
      bodyAttrs: {
        class: 'management'
      }
    },
    data() {
      return {
        ArticleList: {
          title: '',
          body: '',
          featured_image: '',
          tag: '',
          seo_title: '',
          meta_description: '',
        }
      }
    },
    created() {
      // https://headlesscms-api.herokuapp.com/api/posts/all
      this.$axios.$get('http://localhost:8000/api/posts/all')
        .then(res => {
          console.log(res);
          let resdata = res.data.map(res => {
            return res
          })
          this.ArticleList = resdata
          console.log(this.ArticleList)
        })
    }
  }
</script>

<style scoped lang="scss">

  .ArticleListWrapp {
    max-width: 960px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 30px 0;
  }

  .ArticleList {
    display: block;
    max-width: 100%;
    background-color: #fff;
    margin-top: 16px;
  }

  .ArticleList:first-child {
    margin-top: 0;
  }

  .ArticleListLink {
    color: #000;
    padding: 16px 22px;
    text-decoration: none;
    display: block;
  }


</style>
