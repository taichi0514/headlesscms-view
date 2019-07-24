<template>
  <div class="admin">
    <dialog id="dialog" class="dialog">
      <div class="dialog_content"><p>更新完了</p>
        <nuxt-link to="/admin" class="Articlepost dialog_link">管理画面に戻る</nuxt-link>
      </div>
    </dialog>
    <header>
      <button class="Articlepost" @click="ViewReturn">戻る</button>
      <button class="Articlepost" @click="Articlepost(); DialogShow()">記事更新</button>
    </header>
    <div class="cms-form-wrap">
      <div class="cms-form">
        <fieldset>
          <legend>タイトル</legend>
          <input type="text" placeholder="タイトル" v-model="ArticleData.title">
        </fieldset>

        <fieldset>
          <legend>本文</legend>
          <textarea type="text" name="file" placeholder="本文" v-model="ArticleData.body"
                    @drop.prevent="handleDrop" id="text"></textarea>
        </fieldset>

        <fieldset>
          <legend>OGP画像</legend>
          <img :src=ArticleData.featured_image alt="" id="featured_image">
          <input type="file" name="file" @change="OgpHandleDrop">
        </fieldset>

        <fieldset>
          <legend>タグ</legend>
          <input type="text" placeholder="タグ" v-model="ArticleData.tag">
        </fieldset>

        <fieldset>
          <legend>SEOタイトル</legend>
          <input type="text" placeholder="SEOタイトル" v-model="ArticleData.seo_title">
        </fieldset>

        <fieldset>
          <legend>meta-discription</legend>
          <textarea type="text" placeholder="meta-discription" v-model="ArticleData.meta_description"></textarea>
        </fieldset>
      </div>

      <div class="cms-form-view">
        <h2>{{ArticleData.title}}</h2>
        <p v-html="compiledMarkdown"></p>
      </div>
    </div>
  </div>

</template>


<script>
  import marked from 'marked';

  export default {
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
    created() {
      this.$axios.$get(process.env.API +`posts/?id=${this.$route.params.id}`)
        .then((res) => {
          this.ArticleData = res.data
        })
    },
    computed: {
      compiledMarkdown: function () {
        marked.setOptions({breaks: true})
        return marked(this.ArticleData.body)
      }
    },
    methods: {
      handleDrop: function (event) {
        event.preventDefault();
        const files = event.dataTransfer.files;
        for (let i = 0; i < files.length; i++) {
          // 一件ずつアップロード
          this.uploud(files[i], event.srcElement);
        }
      },
      uploud: function (f, el) {
        let formData = new FormData();
        formData.append('file', f);
        const config = {
          headers: {'Content-Type': 'multipart/form-data'}
        };
        this.$axios.$post(process.env.API + 'upload', formData, config)
          .then(res => {
            const textarea = document.querySelector('#' + el.id);
            let sentence = textarea.value;
            const len = sentence.length;
            const pos = textarea.selectionStart;
            const before = sentence.substr(0, pos);
            const word = '<img src="' + res.img + '"/>';
            const after = sentence.substr(pos, len);
            sentence = before + word + after;
            textarea.value = sentence;
          })
      },
      Articlepost: function () {
        const params = {
          id: this.$route.params.id,
          title: this.ArticleData.title,
          body: this.ArticleData.body,
          featured_image: this.ArticleData.featured_image,
          tag: this.ArticleData.tag,
          seo_title: this.ArticleData.seo_title,
          meta_description: this.ArticleData.meta_description
        }
        this.$axios.$post(process.env.API + 'posts/edit', params)
      },
      OgpHandleDrop: function (event) {
        event.preventDefault();
        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
          this.featuredImage(files[i]);
        }
      },
      async featuredImage(f) {
        let formData = new FormData();
        formData.append('file', f);
        const config = {
          headers: {'Content-Type': 'multipart/form-data'}
        };
        const res = await this.$axios.$post(process.env.API + 'upload', formData, config)
        this.ArticleData.featured_image = res.img;
      },
      ViewReturn: function () {
        this.$router.push('/admin')
      },
      DialogShow: function () {
        const el = document.getElementById('dialog');
        el.setAttribute('open', '')
      }
    }
  }
</script>

<style scoped lang="scss">
  .admin {
    position: relative;
  }

  .dialog {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border: none;
  }

  .dialog_content {
    position: absolute;
    width: 100%;
    height: 100vh;
    text-align: center;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
  }

  .dialog_content p {
    @include fontsize(28);
    padding: 40px 0;
  }

  .dialog_link {
    text-decoration: none;
  }

  header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  .Articlepost {
    appearance: none;
    border: none;
    background-color: #dfdfe3;
    border-radius: 5px;
    padding: 12px 14px;
    cursor: pointer;
    font-weight: bold;
    color: #7a8291;
    transition: background-color 1s, color 1s;
  }

  .Articlepost:hover {
    background-color: darken(#dfdfe3, 20%);
    color: #fff;
  }

  .cms-form-wrap {
    display: flex;
  }

  .cms-form {
    width: 50%;
    padding: 40px 20px;
  }

  .cms-form-view {
    width: 50%;
    padding: 40px 20px;
  }

  .cms-form {
    fieldset {
      border: solid 1px rgb(223, 223, 227);
      position: relative;
      padding: 0;
      margin-top: 60px;
    }

    legend {
      color: rgb(122, 130, 145);
      background-color: rgb(223, 223, 227);
      padding: 4px 6px;
      border-radius: 5px 5px 0 0;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-1%) translateY(-100%);
      font-weight: bold;
    }

    input {
      border-radius: 5px 5px 0 0;
      padding: 16px 20px;
      width: 100%;
      border: none;
      @include fontsize(15);
    }

    textarea {
      border-radius: 5px 5px 0 0;
      padding: 16px 20px;
      width: 100%;
      border: none;
      font-size: 100%;
      height: 280px;
      @include fontsize(14);
    }
  }

  .cms-form-view {
    h2 {
      margin-top: 60px;
    }

    p {
      margin-top: 90px;
    }
  }
</style>
