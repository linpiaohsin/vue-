<template>
  <div>
    <div class="recommand-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img src=""class="item-img" :src="item.imgUrl"/>

        </div>

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>

        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:'HomeWeekend',
    props:{
      weekendList:Array
    },
    data(){
      return{
        /*itemList:[{
          id:'000',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
          title:'hhhhhhhh',
          desc:'hhhhhhhhhhhhhhhhhhhh'
        },{
          id:'001',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
          title:'hhhhhhhh',
          desc:'hhhhhhhhhhhhhhhhhhhh'
        },{
          id:'002',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
          title:'hhhhhhhh',
          desc:'hhhhhhhhhhhhhhhhhhhh'
        }]*/
      }
    }

  }
</script>
<style lang="stylus" scoped="">
  @import "~styles/mixin.styl"
  .recommand-title

    line-height .8rem
    background #eee
    text-indent .2rem

  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width  100%
  .item-info
    flex 1
    min-width 0
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()

</style>
