<template>
<!-- <div class="wrapper">-->
   <swiper :options="swiperOption" ref="mySwiper" >
     <!-- slides -->
     <swiper-slide v-for="swiper in swiperList" :key="swiper.id">
       <img class="home-swiper" :src="swiper.imgUrl">
     </swiper-slide>


     <!-- Optional controls -->
     <div class="swiper-pagination"  slot="pagination"></div>
     <!--    <div class="swiper-button-prev" slot="button-prev"></div>
         <div class="swiper-button-next" slot="button-next"></div>-->
     <!--    <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
   </swiper>
<!-- </div>-->
</template>
<script>
export default {
  name:'HomeSwiper',
  props:{
    swiperList:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop:true
      },
      /*swiperList:[{
        id:'0000',
        imgurl:'http://img1.qunarzz.com/piao/fusion/1807/71/e4bf6ce2a203ba02.jpg_750x200_c99e3a64.jpg'
      },{
        id:'0001',
        imgurl:'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg'
      },{
        id:'0002',
        imgurl:'http://img1.qunarzz.com/piao/fusion/1808/5e/514ce60160e62602.jpg_750x200_9b0074e2.jpg'
      },{
        id:'0003',
        imgurl:'http://img1.qunarzz.com/piao/fusion/1805/e8/14b75b1c81fbe702.jpg_750x200_e6d4f1f1.jpg'
      }]*/
    }
  }
}

</script>
<style lang="stylus" scoped>
  //防止抖动
/*  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.25*/
    .home-swiper
      width 100%



</style>
