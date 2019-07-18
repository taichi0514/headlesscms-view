<template>
  <div class="admin">
    <CmsForm></CmsForm>
    <div class="cms-form-view">
    </div>
  </div>
</template>

<script>
  import CmsForm from '~/components/admin/cms-form.vue'
  export default {
    components:{
      CmsForm
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
