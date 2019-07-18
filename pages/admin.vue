<template>
  <div class="admin">
    <CmsForm></CmsForm>
    <CmsFormView></CmsFormView>
  </div>
</template>

<script>
  import CmsForm from '~/components/admin/cms-form.vue'
  import CmsFormView from '~/components/admin/cms-form-view.vue'
  export default {
    components:{
      CmsForm,
      CmsFormView
    }
  }
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


</style>
