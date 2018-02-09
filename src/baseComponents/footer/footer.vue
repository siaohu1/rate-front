<template>
    <el-row :gutter="24">
      <div class="footer">
        <div class="footer-content">
          <div class="contact">
              <a href=""><img src="../../assets/facebook-f.png" alt=""></a>
              <a href=""><img src="../../assets/in.png" alt=""></a>
              <a href=""><img src="../../assets/plan.png" alt=""></a>
              <a href=""><img src="../../assets/wecat.png" alt=""></a>
              <a href=""><img src="../../assets/weibo.png" alt=""></a>
              <a href=""><img src="../../assets/email.png" alt=""></a>
          </div>
          <div class="slogan">
            <p>B20是由投资者和金融专家支持的ICO评级平台。</p>
            <p>&copy;2017-2018保留所有权利</p>
          </div>
        </div>
      </div>
    </el-row>
</template>

<script>
  export default {
    data (){
     return {

     }
    }
  }
</script>

<style lang="less" scoped>
.footer{
  width: 100%;
  height: 2.92rem;
  background: #3C7BE3 linear-gradient(-180deg, rgba(255,255,255,0.19) 0%, rgba(0,0,0,0.12) 95%);
  position: relative;
  .footer-content{
    width: 3.47rem;
    position:absolute;
    bottom:.93rem;
    left:7.72rem;
    .contact{
      display: flex;
      justify-content:space-around;
    }
    .slogan{
      margin-top: .22rem;
      p{
        text-align: center;
        font-family: "PingFangSC-Medium";
        font-size: .16rem;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: .22rem;
      }
    }
  }
}
</style>
