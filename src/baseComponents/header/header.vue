<template>
    <el-row :gutter="24" class="header">
     <div class="wrapper">
       <div class="logo"><a href="javascript:;"><img src="../../assets/logo.png" ></a></div>
       <div class="header-nav">
         <ul >
           <li><a href="javascript:;">首页</a></li>
           <li><a href="javascript:;">项目列表</a></li>
           <li><a href="javascript:;">团队动态</a></li>
           <li><a href="javascript:;">关于</a></li>
         </ul>
       </div>
     </div>
    </el-row>
</template>
<script>
  // import avatar from './logo.png'
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
      width:70%;
      height: 80px;
      .logo{
        float: left;
        width: .52rem;
        height: .52rem;
        margin-top: .14rem;
        line-height: .8rem;
        a{
          img{
              width: 100%;
            height: 100%;
          }
        }
      }
      .header-nav{
        width: 80%;
        margin-left: 156px;
        ul li{
          list-style-type: none;
          display: inline-block;
          text-align: left;
          margin-right: 7.8%;
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
</style>
