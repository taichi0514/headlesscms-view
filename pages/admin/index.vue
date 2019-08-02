<template>
  <div class="admin">
    <header>
      <button class="Articlepost" @click="ViewReturn">トップページに戻る</button>
      <button class="Articlepost" @click="PostReturn">新規記事投稿</button>
    </header>
      <ul class="ArticleListWrapp">
        <li class="ArticleList" v-for="(item) in ArticleList" :key="item.id">
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
      this.$axios.$get(process.env.API + 'posts/all')
        .then(res => {
          let resdata = res.data.map(res => {
            return res
          })
          this.ArticleList = resdata
        })
    },
    methods:{
      ViewReturn: function(){
        this.$router.push('/')
      },
      PostReturn: function(){
        this.$router.push('/admin/post')
      },
    }
  }
</script>

<style scoped lang="scss">

  header{
    padding: 20px;
    display: flex;
    justify-content:space-between;
  }
  .Articlepost{
    appearance: none;
    border: none;
    background-color: #a9a9b3;
    border-radius: 5px;
    padding: 12px 14px;
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    transition: background-color 1s,color 1s;
  }
  .Articlepost:hover{
    background-color: darken(#a9a9b3,20%);
  }

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
    border-radius: 5px;
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
