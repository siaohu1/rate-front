<template>
  <el-row class="arcblock-main">
  <el-col class="main-top-left">
    <el-col class="left-container">
      <el-col class="main-title">
        <img src="../../../assets/banner01.png" alt="">
        <span class="main-word">Fire Lotto (PrelCO)</span>
      </el-col>
      <el-col></el-col>
      <el-col></el-col>
    </el-col>
  </el-col>
    <el-col class="main-top-right"></el-col>
  </el-row>
</template>

<script>
  export default {
  data(){
    return{
    }
  },
    methods: {

    }
  }
</script>

<style scoped lang="less">
  .arcblock-main{
    /*padding: 10%;*/
    width: 72%;
    /*width: 100%;*/
    height: 615px;
    margin: 0 auto;
      .main-top-left{
        width: 50.2%;
        height: 500px;
        background-color: green;
        float: left;
          .main-title{
            height: 101px;
            height: 100%;
            background-color: blue;
            margin-top: 109px;
            img{
              height: 101px;
              width: 101px;
              float: left;
              margin: 0 31px;
            }
            .main-word{
              clear: both;
              display: inline-block;
              height: 101px;
              line-height: 101px;
              font-size: 36px;
              letter-spacing: 0;
              /*margin-left: 31px;*/
            }
          }
      }
    .main-top-right{
      width: 49.8%;
      height: 500px;
      background-color: greenyellow;
      float: left;
    }

  }

</style>
