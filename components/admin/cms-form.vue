<template>
  <div class="cms-form">
    <fieldset>
      <legend>タイトル</legend>
      <input type="text" placeholder="タイトル" :value="title" @input="$store.commit('updateTitle',$event.target.value)">
    </fieldset>

    <fieldset>
      <legend>本文</legend>
      <textarea type="text" placeholder="本文" :value="body" @input="$store.commit('updateBody',$event.target.value)"></textarea>
    </fieldset>

    <fieldset>
      <legend>サムネイル</legend>
      <form action="/api/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="file">
        <button type="submit">保存</button>
      </form>
    </fieldset>

    <fieldset>
      <legend>OGP画像</legend>
      <form action="/api/upload" method="post" enctype="multipart/form-data">
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
  import { mapState, mapMutations } from 'vuex'

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

      ])
    },
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
