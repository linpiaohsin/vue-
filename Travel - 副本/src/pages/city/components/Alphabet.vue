<template>
  <ul class="list" >
    <li class="item"
        v-for="item in letters"
        :key="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >{{item}}</li>

  </ul>
</template>

<script>
  export default{
    name:'CityAlphabet',
    props:{
      cities:Object
    },
    data(){
      return{
        touchStaus:false,
        starty:0,
        timer:null//节流
      }
    },
    computed:{
      letters(){
        const letters=[]
        for (let i in this.cities){
          letters.push(i)
        }
        return letters
      }
    },
    //ajax获取，页面重新渲染时执行
    update(){
      this.starty = this.$refs['A'][0].offsetTop
    },
    methods:{
      handleLetterClick(e){

        this.$emit('change',e.target.innerText);

      },
      handleTouchStart(){
        this.touchStaus = true
      },
      handleTouchMove(e){
        if (this.touchStaus){
          if(this.timer){
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() =>{
            const touchy=e.touches[0].clientY-71
            const index=Math.floor((touchy-this.starty)/20)
            if(index>=0&&index<this.letters.length){
              this.$emit('change',this.letters[index])
            }
          },16)

        }
      },
      handleTouchEnd(){
        this.touchStaus=false
      }

    }

  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0rem
    top 1.58rem
    bottom 0rem
    width .4rem

    .item
      line-height .4rem
      text-align center
      color $bgcolor


</style>
