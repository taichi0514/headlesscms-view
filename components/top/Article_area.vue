<template>
  <div class="article_area">
    <div class="article_area_bg"></div>
    <div class="article_list">
      <article class="article_list_item active" v-for="(item,index) in ArticleList" :key="index">
        <nuxt-link class="article_list_item_link" :to=" '/article/' +item.id">
          <img v-if="item.featured_image　=== null" src="//placehold.jp/290x160.png" alt=""
               class="article_list_item_image">
          <img v-else :src="item.featured_image" alt="" class="article_list_item_image">
          <section class="article_list_item_section">
            <h3 class="article_list_item_section_title">{{item.title}}</h3>
            <p class="article_list_item_section_text">{{item.meta_description}}</p>
            <div v-if="item.tag　=== null">
            </div>
            <div v-if="item.tag　!== null">
              <nuxt-link :to="'category/' + item.tag" class="article_list_item_category_link">
                <span class="article_list_item_category">{{item.tag}}</span>
              </nuxt-link>
            </div>
          </section>
        </nuxt-link>
      </article>
    </div>
    <a href="/paginate/1" class="article_list_link">一覧をみる</a>
  </div>
</template>


<script>
  export default {
    props: ['ArticleList'],
  }
</script>


<style lang="scss" scoped>

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
    max-width: 1235px;
    width: 100%;
    margin: 0 auto;
    transform: translateY(-20%);
    display: flex;
    padding: 40px 25px;
    flex-direction: column;
    align-items: center;
    background-color: #F4F4F4;
    @include mq(llg) {
      background-color: transparent;
      padding: 0;
      flex-direction: row;
      transform: translateY(-52%);
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
      margin-top: 0;
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

  .article_list_item:first-child {
    margin-left: 0;
  }

  .article_list_item.active {
    margin-bottom: 0;
    opacity: 1;
  }

  .article_list_item_image {
    width: 100%;
    object-fit: contain;
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


</style>



