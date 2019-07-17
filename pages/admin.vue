<template>
  <div class="admin">
    <div class="cms-form">
      <fieldset>
        <legend>タイトル</legend>
        <input type="text" placeholder="タイトル">
      </fieldset>

      <fieldset>
        <legend>本文</legend>
        <textarea type="text" placeholder="本文"></textarea>
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

    <div class="cms-form-view">

    </div>
  </div>
</template>

<script>

  export default {}
</script>

<style scoped lang="scss">

  *{
    box-sizing: border-box;
  }
  .admin{
    display: flex;
  }

  .cms-form{
    width: 50%;
    padding: 40px 20px;
  }

  .cms-form-view{
    width: 50%;
    padding: 40px 20px;
  }

  fieldset{
    border:solid 1px rgb(223, 223, 227);
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
    border:none ;
    font-size: 100%;
  }

  textarea{
    border-radius: 5px 5px 0 0;
    padding: 16px 20px;
    width: 100%;
    border:none ;
    font-size: 100%;
  }
</style>
