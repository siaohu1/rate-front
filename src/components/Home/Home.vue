<template>
  <div>
    <lheader></lheader>
    <banner></banner>
    <lmain></lmain>
    <lfooter></lfooter>
  </div>
</template>
<script>
  import lheader from '../../baseComponents/header/header'
  import banner from './banner/banner'
  import lmain from './main/main'
  import lfooter from '../../baseComponents/footer/footer'
  export default {
    data() {
      return {

      }
    },
    methods: {},
    computed: {},
    components: {
      lheader,
      banner,
      lmain,
      lfooter
    }
  }
</script>
<style scoped>

</style>
