<template>
  <div>
    <div class="recommand-title">热销推荐</div>
    <ul>

        <router-link tag="li"
                     :to="'/detail/'+item.id"
                     class="item border-bottom" v-for="item in recommendList" :key="item.id">

          <img src=""class="item-img" :src="item.imgUrl"/>

          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>


    </ul>
  </div>
</template>
<script>
  export default {
    name:'HomeRecommand',
    props:{
      recommendList:Array
    },
    data(){
      return{
       /* itemList:[{
          id:'000',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
          title:'hhhhhhhh',
          desc:'hhhhhhhhhhhhhhhhhhhh'
        },{
          id:'001',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
          title:'hhhhhhhh',
          desc:'hhhhhhhhhhhhhhhhhhhh'
        },{
          id:'002',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
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
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item
  display flex
  height 1.9rem

  .item-img
    height 1.7rem
    width 1.7rem
    padding .1rem
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
    .item-button
      margin-top .2rem
      color #fff
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .1rem
      border-radius .06rem
</style>
