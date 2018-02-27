<template>
  <section>
    <lheader></lheader>
    <banner></banner>
    <lmain></lmain>
    <lfooter></lfooter>
  </section>
</template>
<script>
  import lheader from '../../baseComponents/Header'
  import banner from './Banner'
  import lmain from './HomeMain'
  import lfooter from '../../baseComponents/Footer'
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
