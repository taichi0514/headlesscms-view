<template>
  <div class="admin">
    <header>
      <button class="Articlepost" @click="ViewReturn" type="button">トップページに戻る</button>
      <div>
        <button class="Articlepost Articledelete" @click="Logout" type="button">ログアウト</button>
        <button class="Articlepost" @click="PostReturn" type="button">新規記事投稿</button>
      </div>

    </header>
    <div class="article_area">
      <div class="article_area_bg"></div>
      <div class="article_list">
        <article class="article_list_item active" v-for="(item,index) in ArticleList" :key="index">
          <nuxt-link class="article_list_item_link" :to="'admin/edit/' + item.id">
            <img v-if="item.featured_image　=== null" src="//placehold.jp/290x160.png" alt=""
                 class="article_list_item_image">
            <img v-else :src="item.featured_image" alt="" class="article_list_item_image">
            <section class="article_list_item_section">
              <h3 class="article_list_item_section_title">{{item.title}}</h3>
              <p class="article_list_item_section_text">{{item.meta_description}}</p>
              <div :to="'/category/' + item.tag" class="article_list_item_category_link">
                <div v-if="item.tag　=== null">
                </div>
                <div v-else>
                  <span class="article_list_item_category">{{item.tag}}</span>
                </div>
              </div>
              <time class="time_updated_at">{{item.updated_at}}</time>
            </section>
          </nuxt-link>
        </article>
      </div>
      <button class="article_list_link" @click="$router.back()">戻る</button>
    </div>
  </div>
</template>

<script>
  const Cookie = require('js-cookie')
  const cookieparser = require('cookieparser');

  export default {
    middleware: 'authenticated',
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
          meta_description: ''
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
    methods: {
      ViewReturn: function () {
        this.$router.push('/')
      },
      PostReturn: function () {
        this.$router.push('/admin/post')
      },
      Logout: function () {
        this.$axios.get(process.env.API + "logout");
        Cookie.remove('auth');
        Cookie.remove('auth_check')
        this.$store.commit("removeAuth");
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped lang="scss">

  header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  .Articlepost {
    appearance: none;
    border: none;
    background-color: #a9a9b3;
    border-radius: 5px;
    padding: 12px 14px;
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    transition: background-color 1s, color 1s;
  }

  .Articlepost:hover {
    background-color: darken(#a9a9b3, 20%);
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
    padding: 16px 44px;
    text-decoration: none;
    display: block;
  }

  .ArticleListLinkInner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  .article_area {
    padding: 0 0 40px;
    @include mq() {
      padding: 100px 0;
    }
  }

  .article_area_bg {
    background-color: #F4F4F4;
    display: block;
    width: 100%;
    max-width: 1100px;
    height: 280px;
    margin: 0 auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    @include mq() {
      background-color: transparent;
      width: 110%;
      max-width: 1600px;
    }
  }

  .article_list {
    max-width: 920px;
    width: 100%;
    margin: 0 auto;
    transform: translateY(-20%);
    display: flex;
    padding: 40px 25px;
    flex-direction: column;
    align-items: center;
    background-color: #F4F4F4;
    flex-wrap: wrap;
    @include mq(llg) {
      background-color: transparent;
      padding: 0;
      flex-direction: row;
      transform: translateY(-15%);
    }
  }

  .article_list_item {
    border: #CCCCCC 1px solid;
    max-width: 290px;
    width: 100%;
    list-style: none;
    background-color: #fff;
    margin-top: 15px;
    margin-bottom: -40px;
    opacity: 0;
    transition: margin-bottom 1s, opacity 2.5s;
    margin-left: 0;
    overflow: hidden;
    @include mq(llg) {
      width: 30%;
      height: 390px;
      margin-top: 2%;
      margin-left: 2%;
    }
  }

  .article_list_item_image {
    transition: 1s transform;
    height: 160px;
  }

  .article_list_item:hover .article_list_item_image {
    transform: scale(1.1);
  }

  /*.article_list_item:first-child {*/
  /*  margin-left: 0;*/
  /*}*/

  .article_list_item.active {
    margin-bottom: 0;
    opacity: 1;
  }

  .article_list_item_image {
    width: 100%;
    object-fit: cover;
  }

  .article_list_item_section {
    padding: 20px;
  }

  .article_list_item_section_title {
    margin: 0;
    font-weight: 700;
    @include fontsize(16);
  }

  .article_list_item_section_text {
    margin-top: 4px;
    margin-bottom: 0;
    font-weight: 300;
  }

  .article_list_item_category {
    margin-top: 20px;
    display: inline-block;
    border: #F4F4F4 solid 1px;
    border-radius: 16px;
    padding: 4px 16px;
    box-sizing: border-box;
    @include fontsize(12);
    color: #000;
    text-align: left;
  }

  .article_list_item_category_link {
    text-decoration: none;
  }

  .article_list_item_link {
    text-decoration: none;
    color: #000;
  }


  .article_list_link {
    @include index-link-btn();
    margin: -285px auto 0;
    display: block;
    padding: 12px 0;
    max-width: 260px;
    cursor: pointer;
    @include mq {
      max-width: 240px;
      padding: 12px 0px;
      margin: -140px auto 0;
    }

  }

  .article_list_link.link_btn::after {
    transform: translateX(-160%) translateY(-50%);
    transition: 1s transform;
  }

  .article_list_link:hover::after {
    transform: translateX(-60%) translateY(-50%);
  }

  .time_updated_at {
    margin-top: 20px;
    display: block;
  }

  .Articlepost.Articledelete {
    background-color: #e67a7a;
    color: #fff;
  }

  .Articlepost.Articledelete:hover {
    background-color: darken(#e67a7a, 30%);
    color: #fff;
  }


</style>
