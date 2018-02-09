<template>
    <el-row :gutter="24" class="header">
     <div class="wrapper">
       <div class="logo"><a href="javascript:;"><img src="../../assets/logo.png" ></a></div>
       <div class="header-nav">
         <ul >
           <li><a href="/">首页</a></li>
           <li><a href="javascript:;">项目列表</a></li>
           <li><a href="javascript:;">团队动态</a></li>
           <li><a href="javascript:;">关于</a></li>
         </ul>
       </div>
       <div class="get-rate"><p>获得你的启动评级</p></div>
     </div>
    </el-row>
</template>
<script>
  export default {
    data(){
      return{
      }
    }
  }
</script>
<style lang="less" scoped>
  .header{
    background-color: #3C7BE3;
    height: .8rem;
    line-height: .8rem;
    display: flex;
    justify-content: center;
    .wrapper{
      width:100%;
      height: .8rem;
      padding: 0 2.68rem 0 2.8rem;
      .logo{
        float: left;
        width: .52rem;
        height: .52rem;
        margin-top: .14rem;
        line-height: .8rem;
        /*margin-left: 2.75rem;*/
        a{
          img{
              width: 100%;
            height: 100%;
          }
        }
      }
      .header-nav{
        /*width: auto;*/
        /*margin-left: 156px;*/
        /*width: 6.2rem;*/
        ul{
          float: left;
         li{
          list-style-type: none;
          display: inline-block;
          text-align: left;
          margin-left: .8rem;
          a{
            text-decoration: none;
            color:#ffffff;
            font-size: 0.2rem;
            font-family: "PingFangSC-Medium";
          }
        }
      }

    }
  }
    .get-rate{
      width: 2.46rem;
      height: .4rem;
      background-color: #1D5ABF;
      border-radius: 40px;
      /*position: fixed;*/
      /*display: inline-block;*/
      margin-top: .2rem;
      float: right;
      p{
        ont-family: PingFangSC-Medium;
        font-size: .2rem;
        color: #F5F5F5;
        letter-spacing: 0;
        position: relative;
        bottom: .185rem;
        left: .41rem;
      }
    }
  }
</style>
