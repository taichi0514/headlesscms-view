<template>
  <div class="cms-form">
    <fieldset>
      <legend>タイトル</legend>
      <input type="text" placeholder="タイトル" :value="title" @input="$store.commit('updateTitle',$event.target.value)">
    </fieldset>

    <fieldset>
      <legend>本文</legend>
      <textarea type="text" name="file" placeholder="本文" :value="body" @input="$store.commit('updateBody',$event.target.value)"
                @drop.prevent="handleDrop"></textarea>
    </fieldset>

    <fieldset>
      <legend>サムネイル</legend>
      <form action="http://localhost:8000/api/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="file">
        <button type="submit">保存</button>
      </form>
    </fieldset>

    <fieldset>
      <legend>OGP画像</legend>
      <form action="http://localhost:8000/api/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="file">
        <button type="submit">保存</button>
      </form>
    </fieldset>

    <fieldset>
      <legend>タグ</legend>
      <input type="text" placeholder="タグ">
    </fieldset>

    <fieldset>
      <legend>SEOタイトル</legend>
      <input type="text" placeholder="SEOタイトル">
    </fieldset>

    <fieldset>
      <legend>meta-discription</legend>
      <textarea type="text" placeholder="meta-discription"></textarea>
    </fieldset>

  </div>
</template>


<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    computed: {
      ...mapState([
        'title',
        'body'
      ])
    },
    methods: {
      ...mapMutations([
        'updateMessage',
        'updateBody'

      ]),
      handleDrop: function (event) {
        event.preventDefault();
        const files = event.dataTransfer.files;
        for (var i = 0; i < files.length; i++) {
          // 一件ずつアップロード
          this.uploud(files[i], event.srcElement);
          // console.log(files);
        }
      },
      uploud: function (f, el) {
        // console.log(f);
        let formData = new FormData();
        formData.append('file', f);
        console.log(formData.get('file'));
        const config = {
          headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'multipart/form-data'}
        };
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8000/api/upload");
        xhr.send(formData);
        xhr.onload = ()=> {
          console.log(xhr.response);
        };
        // this.$axios.post('/api/upload', formData, config)
        //   .then(res => {
        //     console.log(formData.get('text'));
        //     console.log("おｋ");
        //     console.log(res);
        //   }).catch(error => {
        //   // いずれかのreadFileでエラーがあった場合の処理
        //   console.log(formData.get('text'));
        //   console.log(error);
        //   console.log("しっぱい");
        // })
      }
    }
    ,
  }
</script>

<style scoped lang="scss">
  fieldset {
    border: solid 1px rgb(223, 223, 227);
    position: relative;
    padding: 0;
    margin-top: 60px;
  }

  legend {
    color: rgb(122, 130, 145);
    background-color: rgb(223, 223, 227);
    padding: 0px 6px;
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
</style>
