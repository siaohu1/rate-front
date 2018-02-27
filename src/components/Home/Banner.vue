<template>
      <el-row :gutter="24" class="banner">
          <swiper :options="swiperOption" class="swiperbox" style="overflow:hidden;">
          <swiper-slide><img src="../../assets/banner.jpg" alt="" style="width: 100%"></swiper-slide>
          <swiper-slide><img src="../../assets/banner.jpg" alt="" style="width: 100%"></swiper-slide>
          <swiper-slide><img src="../../assets/banner.jpg" alt="" style="width: 100%"></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </el-row>
</template>

<script>
    import 'swiper/dist/css/swiper.min.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
</style>
