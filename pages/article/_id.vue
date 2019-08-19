<template>
  <main>
    <section class="main_visual">
      <h1>
        <img src="/images/logo.svg" alt="" class="main_visual_logo">
      </h1>
      <img src="/images/mv_pc.jpg" alt="" class="main_visual_image for-pc">
      <img src="/images/mv_sp.jpg" alt="" class="main_visual_image for-sp">
      <p class="post_read">BLOG</p>
    </section>

    <div class="content">

      <article class="post">
        <div class="article" v-html="compiledMarkdown"></div>
        <div class="single_meta">
          <a class="category" :href="'/categories/' +  ArticleData.tag">
            {{ArticleData.tag }}
          </a>
          <!--          <p>-->
          <!--            <time datetime="{{ .Date.Local.Format "2006-01-02" }}">-->
          <!--            {{ .Date.Local.Format "2006/01/02 15:04" }}-->
          <!--            </time></p>-->
        </div>

      </article>

      <aside class="submenu">
        <p class="submenu_title">カテゴリ</p>
        <div class="submenu_list_wrap">
          <ul class="submenu_list">
            <li class="submenu_list_item"><a :href="'/categories/' + ArticleData.tag">{{ArticleData.tag}}</a></li>
          </ul>
          <p class="submenu_text"></p>
        </div>
      </aside>

    </div>
  </main>
</template>

<script>
  import Header from '~/components/common/Header.vue'
  import marked from 'marked';

  export default {
    head () {
      return {
        title: this.ArticleData.seo_title
      }
    },
    components: {
      Header,
    },
    data() {
      return {
        ArticleData: {
          title: '',
          body: '',
          featured_image: '',
          tag: '',
          seo_title: '',
          meta_description: '',
        }
      }
    },
    computed: {
      compiledMarkdown: function () {
        marked.setOptions({breaks: true})
        return marked(this.ArticleData.body)
      }
    },
    created() {
      const params = {
        params: {
          // ここにクエリパラメータを指定する
          id: this.$route.params.id,
        }
      };
      this.$axios.$get(process.env.API + 'posts', params)
        .then(function (res) {
          this.ArticleData = res.data
          console.log(this.ArticleData.seo_title)
        }.bind(this))

    },
  }
</script>


<style lang="scss">
  article.post .article {
    position: relative;
  }

  article.post .article h2 {
    @include fontsize(22);
    position: relative;
    border-bottom: #f4f4f4 solid 3px;
    width: 100%;
    margin: 0 0 42px;
    padding-bottom: 15px;
  }

  article.post .article h2::after {
    content: "";
    display: block;
    background-color: #000;
    width: 120px;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(50%);
  }

  article.post .article strong {
    font-weight: bold;
  }

  article.post .article h3 {
    @include fontsize(15);
    font-weight: bold;
    position: relative;
    background-color: #f4f4f4;
    padding: 20px 10px 20px 40px;
    margin: 40px 0 0;
  }

  article.post .article h3::before {
    content: "●";
    font-weight: bold;
    position: absolute;
    transform: translateX(-120%);
  }

  article.post .article h4 {
    @include fontsize(15);
    font-weight: bold;
    margin-top: 16px;
  }

  article.post .article p {
    margin-top: 20px;
    line-height: 1.8;
  }

  article.post .article img {
    width: 50%;
    margin: 20px auto;
    display: block;
  }

  article.post .article ol,
  article.post .article ul {
    padding: 20px 0 20px 20px;
  }

  article.post .article li {
    margin-top: 18px;
  }

  article.post .article li:first-child {
    margin-top: 0;
  }

  article.post .article .single_meta {
    display: flex;
    align-items: center;
  }

  article.post .article .single_meta p {
    margin-left: 10px;
  }

  .article.post .article single_meta p:first-child {
    margin-left: 0;
  }

  article.post .article .note_post {
    background-color: #f4f4f4;
    width: 100%;
    padding: 30px 20px;
  }

  article.post .article .category {
    text-decoration: none;
    display: inline-block;
    border: #f4f4f4 solid 1px;
    border-radius: 16px;
    padding: 4px 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 0.75rem;
    color: #000;
    text-align: left;
  }
</style>



<style lang="scss" scoped>


  .main_visual {
    width: 100%;
    position: relative;
    font-size: 0;
    @include mq() {
      position: relative;
      font-size: 0;
      padding-top: 0;
      height: auto;
    }
  }

  .main_visual:before {
    content: "";
    display: block;
    padding-top: 129%;
    @include mq() {
      padding-top: 0;
      display: none;

    }
  }


  .main_visual_logo {
    position: absolute;
    top: 0;
    left: 5.882%;
    z-index: 2;
    width: 130px;
    transform: translateY(20%);
    @include mq() {
      width: 240px;
    }
  }


  .main_visual_image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    @include mq() {
      position: sticky;
      height: auto;
    }
  }

  .main_visual_right {
    display: none;
    @include mq() {
      min-width: 120px;
      width: 120px;
      display: block;
      position: relative;
    }
  }


  .main_visual_right_scroll {
    writing-mode: vertical-rl;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    @include fontsize(13);
    cursor: pointer;
  }

  .main_visual_right_scroll::before {
    display: none;
    @include mq() {
      display: block;
      content: "";
      position: absolute;
      display: block;
      background-color: #707070;
      width: 1px;
      height: 122px;
      top: -40%;
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
    }
  }


  .main_visual_news {
    color: #000;
    background-color: #fff;
    @include fontsize(16);
    position: absolute;
    right: 50%;
    bottom: 0;
    padding: 20px;
    margin: 0;
    text-decoration: none;
    transform: translateY(30%) translateX(50%);
    width: 80%;
    @include mq() {
      width: auto;
      transform: translateY(0) translateX(0);
      right: 0%;
      padding: 30px 40px;
    }

    strong {
      @include fontsize(22);
    }

    .pipe {
      margin: 0 10px;

      &::after {
        content: "";
        margin-top: 7px;
        width: 1px;
        height: 17px;
        background-color: #707070;
        display: inline-block;
      }
    }

    .text {
      display: block;
      @include mq() {
        display: inline;
      }
    }

    .date {
      display: block;
      margin-top: 4px;
      @include mq() {
        margin-top: 0;
        display: inline;
      }
    }
  }

  .main_visual_news_link_wrap {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @include mq() {
      flex-direction: row;
      align-items: center;
    }
  }

  .date_text_wrap {
    position: relative;
    display: inline-block;

    &::after {
      position: absolute;
      bottom: -20%;
      left: 0;
      content: '';
      width: 100%;
      height: 2px;
      background: #333;
      transform: scale(0, 1);
      transform-origin: left top;
      transition: transform .3s;
    }

    &:hover::after {
      transform: scale(1, 1);
    }
  }

  .main_visual_news_link {
    display: block;
  }

  .icon_e-mail {
    display: block;
    width: 30%;
    margin: 46px auto 0;
    transition: 1s width;
  }

  .icon_e-mail:hover {
    width: 20%;
  }


  .content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 90px 25px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    @include mq(x) {
      flex-direction: row;
    }
  }

  .submenu {
    @include submenu();
  }

  .submenu_title {
    @include fontsize(14);
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 14px 0;
    margin: 0;
  }

  .submenu_list_wrap {
    border: #acabad solid 1px;
    border-top: transparent;
  }

  .submenu_list {
    padding: 0;
    margin: 0;
    background-color: #f4f4f4;
  }

  .submenu_list_item {
    list-style: none;
    position: relative;
    @include index_link_btn(#f4f4f4, "keyboard-left-arrow-button.png", 7);
    text-align: left;
    max-width: none;
  }

  .submenu_list_item a {
    padding: 12px 22px;
    color: #000;
    text-decoration: none;
    display: block;
    border-bottom: solid 1px #acabad;
  }

  .submenu_list_item a:hover {
    background-color: #e7e7e7;
  }

  .submenu_text {
    background-color: #f4f4f4;
    display: block;
    height: 100px;
    margin: 0;
  }

  .main_visual {
    width: 100%;
    position: relative;
    font-size: 0;
    @include mq() {
      position: relative;
      font-size: 0;
      padding-top: 0;
      height: auto;
    }
  }

  .main_visual::before {
    content: "";
    padding-top: 91%;
    display: block;
    @include mq() {
      padding-top: 23.33%;
    }
  }

  .main_visual_image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .post {
    display: block;
    width: 100%;
    max-width: 920px;
  }

  .post_read {
    position: absolute;
    @include fontsize(32);
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    margin: 0;
  }

  body {
    @include fontsize(14);
  }

  .content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 90px 25px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    @include mq(x) {
      flex-direction: row;
    }
  }

</style>
