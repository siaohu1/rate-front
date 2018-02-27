<template>
  <section>
<lheader/>
    <lmain/>
    <lfooter/>
  </section>
</template>

<script>
  import lheader from '../../baseComponents/AbrockHeader'
  import lmain from './ArcblockMain'
  import lfooter from '../../baseComponents/Footer'
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
