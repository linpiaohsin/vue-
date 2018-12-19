<template>
	
	<div>
		<detail-banner 
			:sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"></detail-banner>
		<DetailHeader></DetailHeader>
		<div class="content">
			<list :list="list"></list>
		</div>
		
	</div>


</template>
<script>
import axios from 'axios'
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/Detailheader.vue'
import list from './components/list.vue'
  export default {
    name:'Detail',
    components:{
      DetailBanner,
			DetailHeader,
			list
    },
		mounted() {
			this.getSidesIfo()
		},
		data(){
			return{
				sightName: '',
				bannerImg: '',
				gallaryImgs: [],
				list: []
			}
		},
		methods:{
			getSidesIfo(){
				axios.get('/api/detail.json?id='+this.$route.params.id).then(this.getSidesIfoSucc)
			},
			getSidesIfoSucc(res){
					res = res.data
					if(res.data && res.ret){
						const data = res.data
						this.sightName = data.sightName
						this.bannerImg = data.bannerImg
						this.gallaryImgs = data.gallaryImgs
						this.list = data.categoryList
					}
			}
		}

  }
</script>
<style lang="stylus" scoped="">
.content
	height 50rem
</style>
