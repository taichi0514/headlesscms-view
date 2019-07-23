<template>
  <div class="cms-form">
    <p> {{ $route.params }} </p>
    <fieldset>
      <legend>タイトル</legend>
      <input type="text" placeholder="タイトル" :value="ArticleData.title"
             @input="$store.commit('updateTitle',$event.target.value)">
    </fieldset>

    <fieldset>
      <legend>本文</legend>
      <textarea type="text" name="file" placeholder="本文" :value="ArticleData.body"
                @input="$store.commit('updateBody',$event.target.value)"
                @drop.prevent="handleDrop" id="text"></textarea>
    </fieldset>

    <fieldset>
      <legend>OGP画像</legend>
      <img :src=ArticleData.featured_image alt="">
      <form action="http://localhost:8000/api/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="file">
        <button type="submit">保存</button>
      </form>
    </fieldset>

    <fieldset>
      <legend>タグ</legend>
      <input type="text" placeholder="タグ" :value="ArticleData.tag"
             @input="$store.commit('updateTag',$event.target.value)">
    </fieldset>

    <fieldset>
      <legend>SEOタイトル</legend>
      <input type="text" placeholder="SEOタイトル" :value="ArticleData.seo_title"
             @input="$store.commit('updateSeoTitle',$event.target.value)">
    </fieldset>

    <fieldset>
      <legend>meta-discription</legend>
      <textarea type="text" placeholder="meta-discription" :value="ArticleData.meta_description"></textarea>
    </fieldset>

    <button @click="Articlepost">post</button>
    <div class="cms-form-view">
      <h2>{{title}}</h2>
      <p v-html="compiledMarkdown">
      </p>
    </div>
  </div>
</template>


<script>
  import {mapState, mapMutations} from 'vuex'
  import marked from 'marked';

  export default {
    computed: {
      ...mapState([
        'title',
        'body',
        'ArticleData'
      ])
    },
    created() {
      this.$axios.$get(`http://localhost:8000/api/posts/?id=${this.$route.params.id}`)
        .then((res) => {
          console.log(res)
          this.$store.commit('getArticleData', res.data)
        })
    },
    methods: {
      ...mapMutations([
        'updateMessage',
        'updateBody'

      ]),
      handleDrop: function (event) {
        event.preventDefault();
        const files = event.dataTransfer.files;
        for (let i = 0; i < files.length; i++) {
          // 一件ずつアップロード
          this.uploud(files[i], event.srcElement);
        }
      },
      uploud: function (f, el) {
        // console.log(f);
        let formData = new FormData();
        formData.append('file', f);
        console.log(formData.get('file'));
        const config = {
          headers: {'Content-Type': 'multipart/form-data'}
        };
        this.$axios.$post('https://headlesscms-api.herokuapp.com/api/upload', formData, config)
          .then(res => {
            console.log(res.img);
            var textarea = document.querySelector('#' + el.id);
            var sentence = textarea.value;
            var len = sentence.length;
            var pos = textarea.selectionStart;

            var before = sentence.substr(0, pos);
            var word = '<img src="' + res.img + '"/>';
            var after = sentence.substr(pos, len);

            sentence = before + word + after;

            textarea.value = sentence;

            console.log(res.img);
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
          meta_discription: this.ArticleData.meta_discription
        }
        const config = {
          headers: {'Content-Type': 'application/json'}
        }
        console.log(this.ArticleData.title);
        this.$store.commit('getArticleData', res.data)
        this.$axios.$post('http://localhost:8000/api/posts/edit', params)
          .then(res => {
            console.log(this.$route.params.id)
          })
      },
      compiledMarkdown: function () {
        marked.setOptions({breaks: true})
        return marked(this.$store.state.body)
      }
    }
    ,
  }
</script>

<style scoped lang="scss">
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
