<template>
	<div >
		<div class="banner" @click="handleCli">
			<img class="banner-img" :src="bannerImg" />
			<div class="banner-info">
				<div class="banner-title">hhhhhh</div>
				<div class="banner-number"><span class="iconfont back-icon">&#xe632;</span>39</div>
			</div>
			
		</div>
		<fade>
			<gallary  :imgs="bannerImgs" v-show="img_see"  @close="handleClose">
				
			</gallary>
		</fade>
	</div>
</template>
<script>
	import fade from '../../../common/fade/FadeAnimation.vue'
	import gallary from '../../../common/gallary/gallary.vue'
  export default {
    name:'DetailBanner',
		components:{
			gallary,
			fade
		},
		props:{
			sightName: String,
			bannerImg: String,
			bannerImgs: Array
		},
		methods:{
			handleCli(){
				this.img_see = true
			},
			handleClose(){
				this.img_see = false
			}
		},
		data(){
			return{
				img_see:false
			}
		}

  }
</script>
<style lang="stylus" scoped="">
 /* 防止抖动*/
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner.img
      width 100%
    .banner.info
      display flex
      position absolute
      left 0rem
      right 0rem
      bottom 0rem
      line-height .6rem
      color #fff
      .banner-title


        flex 1
      .banner-number
        padding 0 .4rem
        height .4rem
        line-height .4rem
        border-radius .2rem
        background rgba(0,0,0,.8)
 .banner
   position: relative
   overflow: hidden
   height: 0
   padding-bottom: 55%
   .banner-img
     width: 100%
   .banner-info
     display: flex
     position: absolute
     left: 0
     right: 0
     bottom: 0
     line-height: .6rem
     color: #fff
     background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
     .banner-tittle
       flex: 1
       font-size: .32rem
       padding: 0 .2rem
     .banner-number
       height: .32rem
       line-height: .32rem
       margin-top: .14rem
       padding: 0 .4rem
       border-radius: .2rem
       background: rgba(0, 0, 0, .8)
       font-size: .24rem
       .banner-icon
         font-size: .24rem
</style>
