<template>
  <div>
<lheader/>
    <lmain/>
    <lfooter/>
  </div>
</template>

<script>
  import lheader from '../../baseComponents/header/header'
  import lmain from './arcblock-main/arcblock-main'
  import lfooter from '../../baseComponents/footer/footer'
  export default {
    components:{
      lheader,
      lmain,
      lfooter
    }
  }
</script>

<style scoped>

</style>
