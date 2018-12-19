<template>
  <div>
    <city-header></city-header>
    <search :cities="cities"></search>
    <list :cities="cities"
          :hotCities="hotCities"
          :letter="letter"></list>
    <city-alphabet :cities="cities" @change="handleChange"></city-alphabet>
  </div>


</template>
<script>
  import axios from 'axios'
  import CityAlphabet from './components/Alphabet.vue'
  import CityHeader from './components/CityHeader'
  import Search from './components/Search'
  import List from './components/List'
  export default {
    name:'City',
    components:{
      CityHeader,
      Search,
      List,
      CityAlphabet
    },
    data(){
      return {
        cities:{},
        hotCities:[],
        letter:'',

      }
    },

    methods:{
      getCityInfo(){
        axios.get('/api/city.json').then(this.handleGetCityInfoSuc)
      },
      handleGetCityInfoSuc(res){
        res=res.data;
        if(res.ret&&res.data){
          const data=res.data
          this.cities=data.cities
          this.hotCities=data.hotCities
        }

      },
      handleChange(e){
        this.letter=e

      }

    }
    ,
    mounted(){
      this.getCityInfo()
    }
  }
</script>
<style lang="stylus" scoped="">

</style>
