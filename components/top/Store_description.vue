<template>
  <div class="store_description">
    <img src="/images/img_store_photo.jpg" alt="" class="img_store_photo">
    <section class="store_description_text_area active">
      <h2 class="store_description_text_area_title">ネイルサロン<br><span><img src="/images/logo_store_description.svg"
                                                                         alt="Raffi"
                                                                         class="logo_store_description"></span><sub>（ラフィ）</sub>
      </h2>
      <p class="store_description_text_copy">日常のケアから、特別な日のネイルまで<br>あなただけの貸し切りサロン</p>
      <p class="store_description_text_area_text">
        Raffiは、大阪府高槻駅近くにある完全予約制のプライベートネイルサロンです。手元が美しく見えるカラーと洗練されたデザインをモットーに、お一人おひとり丁寧に向き合います。深爪矯正をはじめ、巻き爪、反り爪などお爪の悩みをお持ち方に向けたメニューにも力を入れており、豊富な知識と技術でしっかりサポートいたします。お気軽にご相談ください。</p>
      <a href="/" class="store_description_link">
        コンセプト・こだわり
      </a>
      <a href="/" class="store_description_link">
        爪に関するお悩みがある方へ
      </a>
    </section>
  </div>
</template>


<style lang="scss" scoped>

  .contents {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    @include mq(xl) {
      max-width: 1600px;
    }
  }

  .store_description {
    display: flex;
    flex-direction: column;
    padding: 40px 25px;
    @include mq() {
      flex-direction: row;
      padding: 120px 25px 0;
    }
  }

  .img_store_photo {
    max-width: 610px;
    width: 100%;
    align-self: flex-start;
    @include mq(){
      width: 40%;
    }
  }

  .store_description_text_area {
    margin-left: 10vw;
    opacity: 0;
    transition: margin-left 1s, opacity 2.5s;
    width: 100%;
    @include mq(){
      width: 60%;
    }

  }

  .store_description_text_area.active {
    margin-left: 0;
    opacity: 1;
    @include mq() {
      margin-left: 70px;
    }
  }

  .store_description_text_area_title {
    font-weight: normal;
    @include fontsize(16);
  }

  .store_description_text_area_title sub{
    @include fontsize(12);
  }

  .logo_store_description {
    margin-top: 10px;
  }

  .store_description_text_copy {
    font-weight: 700;
    @include fontsize(20);
    margin-bottom: 0;
  }

  .store_description_text_area_copy {
    @include fontsize(16);
  }

  .store_description_text_area_text {
    line-height: 1.8;
    font-weight: 300;
    margin-top: 0;
  }

  .store_description_link {
    @include index_link_btn();
    margin-top: 10px;
    margin-right: 0;
    padding: 12px 10px;
    @include mq(xl) {
      max-width: 260px;
      margin-top: 20px;
      margin-right: 20px;
      padding: 12px 0px;
    }
  }

  .store_description_link:hover::after {
    transform: translateX(-60%) translateY(-50%);
  }



</style>
