<template>
  <div class="admin">
    <ul>
      <li class="list" v-for="(item,index) in ArticleList" :key="index">
        <a :href="'admin/edit/' + item.id">
          {{item.title}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        ArticleList: {
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
      // https://headlesscms-api.herokuapp.com/api/posts/all
      this.$axios.$get('http://localhost:8000/api/posts/all')
        .then(res => {
          console.log(res);
          let resdata = res.data.map(res => {
            return res
          })
          this.ArticleList = resdata
          console.log(this.ArticleList)
        })
    }
  }
</script>

<style scoped lang="scss">

  * {
    box-sizing: border-box;
  }

  .admin {
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


</style>
