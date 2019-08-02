<template>
  <header>
    <div class="header_inner">
      <div class="header_left"></div>
      <button class="header_right" type="button">
        <img src="/images/button_nav.svg" class="button_nav" alt="メニューを開く">
      </button>
      <div class="nav-content" aria-hidden="true">
        <div class="nav_content_left">
          <div class="nav_content_img">
            <div class="nav_logo_wrap">
              <img src="/images/logo.svg" alt="Raffi" class="nav_logo">
              <p>指先と心も健康に<br>
                [ ネイルサロン ラフィ ]
              </p>
            </div>
          </div>
        </div>
        <div class="nav_content_right">
          <div class="nav_content_right_top">
            <button class="btn_colse_wrap" type="button">
              <img src="/images/colse.svg" alt="メニュー閉じる" class="btn_colse">
            </button>
          </div>
          <nav class="nav">
            <ul class="nav_list">
              <li class="nav_list_item"><a href="/">TOP</a></li>
              <li class="nav_list_item"><a href="">CONCEPT</a></li>
              <li class="nav_list_item"><a href="">MENU</a></li>
              <li class="nav_list_item"><a href="">BLOG</a></li>
            </ul>

            <div class="btn_wrap">
              <a href="/" class="nail link_btn">爪に関するお悩みがある方へ</a>
              <a href="mailto:raffi.nailsalon@gmail.com" class="e-mail link_btn"><i
                class="e-mail-envelope-header"><img
                src="/images/e-mail-envelope_nav.png"
                alt=""></i>ご予約・お問い合わせ</a>

            </div>
            <div class="sns_link">
              <p class="sns_link_title">FLLOW ME</p>
              <ul class="sns_link_list">
                <li class="sns_link_list_item"><a href=""><img src="/images/icon_sample.png" alt=""></a></li>
                <li class="sns_link_list_item"><a href=""><img src="/images/icon_sample.png" alt=""></a></li>
              </ul>
            </div>
          </nav>

        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

  header {
    width: 100%;
    height: 60px;
    @include mq() {
      height: 120px;
    }
  }

  .header_inner {
    display: flex;
  }


  .header_left {
    background-color: #fff;
    width: 80%;
    height: 60px;
    flex-grow: 1;
    @include mq() {
      width: 91.18%;
      height: 120px;
      display: block;
    }
  }

  .header_right {
    position: fixed;
    z-index: 2;
    flex-grow: 2;
    background-color: #000;
    width: 60px;
    height: 60px;
    appearance: none;
    border: none;
    cursor: pointer;
    top: 0;
    right: 0;
    @include mq() {
      width: 120px;
      height: 120px;
      display: block;
    }
  }

  .header_right .button_nav {
    transition: 1s width;
    width: 22px;
    @include mq() {
      width: 45px;
    }
  }

  .header_right .button_nav:hover {
    width: 30%;
  }

  .nav-content {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    display: none;
    right: 100vw;
  }

  .nav-content.active {
    animation-duration: 0.5s;
    animation-name: fade-in;
    display: flex;
    right: 0;
    background-color: #000;
  }

  .nav-content.hide {
    animation-duration: 2s;
    animation-name: fade-out;
    display: block;
  }

  @keyframes fade-in {
    0% {
      display: none;
      opacity: 0;
      right: 100vw;
    }

    1% {
      display: block;
      opacity: 0;
      right: 100vw;
    }

    100% {
      display: block;
      opacity: 1;
      right: 0;
    }
  }

  @keyframes fade-out {
    0% {
      display: block;
      opacity: 1;
      right: 0vw;
    }

    1% {
      display: block;
      opacity: 1;
      right: 0vw;
    }

    100% {
      display: none;
      opacity: 0;
      right: 100vw;
    }
  }

  .nav_content_left {
    position: relative;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    overflow: hidden;
    display: none;
    @include mq(x) {
      display: block;
    }
  }

  .nav_content_img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: url("/images/img_nav_visual.jpg");
  }

  .nav_content_left_visual {
    width: 100%;
    height: 100%;

  }

  .nav_logo_wrap {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateX(15%) translateY(-15%);
    font-weight: bold;
  }


  .nav_content_right {
    width: 100%;
    display: block;
  }

  .nav_content_right_top {
    border-bottom: #707070 solid 1px;
    display: flex;
    justify-content: flex-end;
    height: 60px;
  }

  .btn_colse_wrap {
    background-color: #000;
    appearance: none;
    border: none;
  }

  .btn_colse {
    padding: 10px;
    cursor: pointer;
    width: 80%;
    @include mq() {
      padding: 40px;
      width: 100%;

    }
  }

  .btn_colse_wrap .btn_colse {
    transition: 1s width;
    width: 44px;
    @include mq() {
      width: 100%;
    }
  }

  .btn_colse_wrap .btn_colse:hover {
    width: 90%;
  }

  .nav_list {
    padding: 0;
  }

  .nav_list_item {
    color: #fff;
    list-style: none;
    @include fontsize(28);
    @include boder_bottom_anime;
    @include mq() {
      @include fontsize(48);
    }

    a::after {
      background: #fff;
    }
  }

  .nav_list_item a {
    text-decoration: none;
    color: #fff;
  }

  .nav {
    min-width: auto;
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 30px 25px;
    @include mq(x) {
      padding: 8.759% 11.7%;
      min-width: 980px;
    }
  }

  .btn_wrap {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    @include mq() {
      flex-direction: row;
      margin-top: 40px;
    }
  }

  .nail {
    background-color: #000;
    border: solid 1px #fff;
  }

  .e-mail {
    margin-top: 20px;
    margin-left: 0;
    background-color: #fff;
    color: #000;
    @include mq() {
      margin-top: 0;
      margin-left: 20px;
    }
  }

  .nail, .e-mail {
    font-weight: bold;
    max-width: 260px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px 0;
    line-height: 21px;
    @include fontsize(11);
    @include mq() {
      max-width: 470px;
      @include fontsize(21);
      padding: 32px 0;
    }
  }


  .nail::after, .e-mail::after {
    content: "";
    width: 6px;
    height: 11px;
    background-image: url("/images/btn-right-arrow.svg");
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateX(-350%) translateY(-50%);
    @include fontsize(12);
    font-weight: bold;
    transition: 1s transform;
    @include mq() {
      transform: translateX(-200%) translateY(-50%);
    }
  }

  .nail:hover::after, .e-mail:hover::after {
    transform: translateX(-50%) translateY(-50%);
  }

  .sns_link {
    color: #fff;
  }

  .sns_link_title {
    margin-top: 20px;
    @include mq() {
      margin-top: 40px;
    }
  }

  .sns_link_list {
    display: flex;
    padding: 0;
  }

  .sns_link_list_item {
    list-style: none;
  }

  .e-mail-envelope-header img {
    height: 10px;
    margin-right: 10px;
    @include mq() {
      height: 27px;
      width: 42px;

    }
  }

  .nail.link_btn::after {
    background-image: url("/images/btn-right-arrow-header-white.svg");
  }


  .nail.link_btn::after, .e-mail.link_btn::after {
    width: 6px;
    height: 10px;
    background-size: cover;
    @include mq() {
      width: 9px;
      height: 16px;
    }
  }

</style>
