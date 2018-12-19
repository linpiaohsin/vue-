<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper" >
            <div class="button" >
              {{this.$store.state.city}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">
                {{item.name}}
            </div>

           </div>
        </div>
      </div>

      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
          <div class="item-list" >
            <div class="item border-topbottom"
                  v-for="innerItem in item"
                  :key="innerItem.id"
                 @click="handleCityClick(innerItem.name)"
            >
              {{innerItem.name}}
            </div>

          </div>

      </div>

    </div>
  </div>
</template>
<script>
  import Bscroll from 'better-scroll'
  export default {
    name:'List',
    mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper)
    },
    props:{
      cities:Object,
      hotCities:Array,
      letter:String,
    },
    watch:{
      letter(){
        if (this.letter){
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    methods:{
      handleCityClick(city){
        this.$store.dispatch('changeCity',city)
        this.$router.push('/')
      }
    }
  }
</script>
<style lang="stylus" scoped="">
  @import "~styles/varibles.styl"
  .list
    top 1.58rem
    left 0rem
    right 0rem
    bottom 0rem
    overflow hidden
    position absolute
    .border-topbottom
      &:before
        border-color #777
      &:after
        border-color #777
    .title
      line-height .54rem
      background #eee
      color #666
      padding-left .2rem
      font-size .26rem
    .button-list//触发float的brc否则字体不可见
      overflow hidden
      padding .1rem .6rem .1rem .1
      .button-wrapper
        width 33.33%
        float left
        .button
          padding .1rem 0rem
          border-radius .1rem
          margin .1rem
          text-align center
          border .02rem solid #ccc
    .item-list
      .item
        line-height .72rem
        padding-left .2rem
</style>
