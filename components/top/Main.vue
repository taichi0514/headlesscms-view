<template>
  <div class="main_visual_wrap">
    <section class="main_visual">
      <h1>
        <img src="/images/logo.svg" alt="Raffi" class="main_visual_logo">
      </h1>
      <img src="/images/mv_pc.jpg" alt="" class="main_visual_image for-pc">
      <img src="/images/mv_sp.jpg" alt="" class="main_visual_image for-sp">
      <a href="/" class="main_visual_news"><span class="main_visual_news_link_wrap"><span class="news_wrap"><strong>NEWS</strong> <span class="pipe"></span></span>
                <span class="date_text_wrap"><span class="date">2018.03.23  </span><span
                  class="text">ニューオープンしました。</span></span></span></a>
    </section>
    <div class="main_visual_right">
      <a href="mailto:raffi.nailsalon@gmail.com">
        <img src="/images/e-mail-envelope.svg" alt="" class="icon_e-mail">
      </a>
      <div class="main_visual_right_scroll">
        SCROLL
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

  .main_visual_wrap {
    display: flex;
    justify-content: space-between;
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
    transform: translateY(-40%);
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
      &::after{
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

  .main_visual_news_link_wrap{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @include mq(){
      flex-direction: row;
      align-items: center;
    }
  }

  .date_text_wrap{
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



</style>
