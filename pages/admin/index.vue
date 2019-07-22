<template>
  <div class="admin">
    <ul>
      <li class="list" v-for="(item,index) in ArticleList" :key="index">
        <a :href="'admin/' + item.id">
          {{item.title}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    created() {
      // https://headlesscms-api.herokuapp.com/api/posts/all
      this.$axios.$get('http://localhost:8000/api/posts/all')
        .then(res => {
          console.log(res);
          let resdata =res.data.map(res=>{return res})
          this.$store.commit('getArticleList',resdata)
        })
    },
    computed: {
      ...mapState([
        'title',
        'body',
        'ArticleList'
      ])
    },
    methods: {
      ...mapMutations([
        'updateMessage',
        'updateBody',
        'getArticleList',
      ]),
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
