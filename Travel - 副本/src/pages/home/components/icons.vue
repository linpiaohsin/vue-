<template>
  <div class="icon">
    <swiper :options="swiperOption" ref="mySwiper" >
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon-each" v-for='icon in page' :key="icon.id">
          <div class="icon-img">
            <img :src="icon.imgUrl" class=" icon-img-content"/>
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

  </div>

</template>
<script>
  export default {
    name:"Icons",
    props:{
      iconList:Array
    },

    data(){
      return{
        swiperOption: {
          pagination: '.swiper-pagination',
         /* loop:true*/
        },
        /*iconList:[{
          id:'001',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          imgDesc:'热门景点'
        },{
          id:'002',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          imgDesc:'广州必游'
        },{
          id:'003',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          imgDesc:'动植物园'
        },{
          id:'004',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          imgDesc:'游乐场'
        },{
          id:'005',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
          imgDesc:'两江夜游'
        },{
          id:'006',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
          imgDesc:'汽车票hhhhhhhhhh'
        },{
          id:'007',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          imgDesc:'城市观光'
        },{
          id:'008',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          imgDesc:'夏日玩水'
        },{
          id:'009',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
          imgDesc:'玩转长隆'
        }]*/
      }
    },
    computed:{
      pages(){
        const pages=[]
        this.iconList.forEach((item,index)=>{
          const page=Math.floor(index/8)
          if(!pages[page]){
            pages[page]=[]
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>
<style lang="stylus" scoped="">
  @import "~styles/varibles.styl"
  @import "~styles/mixin.styl"

  .icon >>>.swiper-container
    .icons
      height 0
      padding-bottom 50%
      margin-top .1rem
    .icon-each
      height 0
      position relative
      float left
      width 25%
      padding-bottom 25%

      .icon-img
        position absolute
        left 0
        right 0
        top: 0
        bottom .44rem
        box-sizing border-box
        padding .1rem

        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0rem
        bottom 0rem
        height .44rem
        line-height .44rem
        text-align center
        ellipsis()

</style>
