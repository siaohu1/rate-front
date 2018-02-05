<template>
  <el-row class="arcblock-main">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-title">TokenStars TEAM (TEAM)</div>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="main-content">
      <el-tab-pane label="
Details" name="second">
        <el-col>
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="Overview
" name="first">
      <eol-col class="overview-title">Crowdsale</eol-col>
      </el-tab-pane>


    </el-tabs>
  </el-row>
</template>

<script>
  export default {
  data(){
    return{
      activeName: 'second'
    }
  },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped lang="less">
    .arcblock-main{
      padding: 0 5%;
      .main-content{
        border: 1px solid #E5E5E5;
      }
      .main-title{
        font-size: 40px;
        font-weight: 200;

      }
      .overview-title{
        font-size: 22px;
        font-weight: 400;
        color: rgb(146,163,183);
        font-family: "DINPro-Light";
        border-bottom: 1px solid #E5E5E5;
      }
    }

</style>
