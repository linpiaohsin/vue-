<template>
  <div>
    <home-header ></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <icons :iconList="iconList"></icons>
    <home-recommand :recommendList="recommendList"></home-recommand>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>

</template>

<script>
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import Icons from './components/icons.vue'
  import axios from 'axios'
	import HomeRecommand from './components/Recommand.vue'
	import HomeWeekend from './components/Weekend.vue'
  export default {
    name:'Home',
    components:{
      HomeHeader,
      HomeSwiper,
      Icons,
      HomeRecommand,
      HomeWeekend,

    },
    mounted(){
      this.getHomeInfo()
    },
    methods:{
      getHomeInfo(){
        axios.get('/api/index.json').then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
       /* console.log(res)*/
         res=res.data
        if(res.ret && res.data){
          const data=res.data
          this.city=data.city
          this.swiperList=data.swiperList
          this.iconList=data.iconList
          this.recommendList=data.recommendList
          this.weekendList=data.weekendList


        }
      }
    },
    data(){
      return{
        city:'',
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      }
    }
  }
</script>
<style class="stylus" scoped="">

</style>
