<template>
      <el-row :gutter="24" class="banner">
          <swiper :options="swiperOption" class="swiperbox" style="overflow:hidden;">
          <swiper-slide><img src="../../../assets/banner.jpg" alt="" style="width: 100%"></swiper-slide>
          <swiper-slide><img src="../../../assets/banner.jpg" alt="" style="width: 100%"></swiper-slide>
          <swiper-slide><img src="../../../assets/banner.jpg" alt="" style="width: 100%"></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-text">
          <!--<p>如果你无法简洁的表达你的想法，那只说明你还不够了解它.</p>-->
          <!--<span>&#45;&#45; 阿尔伯特·爱因斯坦</span>-->
      </div>
      </el-row>
</template>

<script>
    // import 'swiper/dist/css/swiper.min.css'
    import 'swiper/dist/css/swiper.min.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    // import bannerImg from './banner01.png'

   export default {
    name: 'carrousel',
    data (){
      return {
        swiperOption: {
          autoplay:true,
          mousewheelControl: true,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          slidesPerView: 1,
          spaceBetween: 30,
          loop:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }



</script>

<style  lang="less">
  .banner{
    height: 5.32rem;
    opacity: 0.9;
    /*background-image: linear-gradient(-242deg, rgba(5,90,229,0.02) 6%, #320773 63%);*/
    position: relative;
    .swiper-pagination{
      height: 10%;
      position: absolute;
      top: 4.56rem;
      span{
        display: inline-block;
        width: .2rem;
        height: .2rem;
        background-color: white;
      }
    }
    .swiper-text{
      position: absolute;
      width: 39.4%;
      left: 31.25%;
      top: 1.91rem;
      z-index: 99;
      p{
        font-size: .36rem;
        text-align: left;
        font-family: "PingFangSC-Light";
        color: rgba(255,255,255,0.87);
        line-height: .48rem;
      }
      span{
        font-size: .2rem;
        color: #ffffff;
        float: right;
        font-family: "PingFangSC-Light";
        color: rgba(255,255,255,0.87);
        line-height: .48rem;
      }
    }

  }
/*!*.swiper-pagination{height: 10%;position: absolute;bottom: 10px;}*!*/
/*!*.swiper-text{position: absolute;width: 39.4%;left: 31.25%;top: 191px;z-index: 99;}*!*/
/*!*.swiper-text p{font-size: 36px;color: #fff;text-align: left;}*!*/
/*!*.swiper-text span{font-size: 20px;color: #fff;float: right;}*!*/
 /*.swiper-pagination span{*/
        /*display: inline-block;*/
        /*width: 20px;*/
        /*height: 20px;*/
        /*background-color: white;*/
    /*}*/
</style>
