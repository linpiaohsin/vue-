webpackJsonp([3],{"4xeG":function(t,e){},"9n10":function(t,e){},JRoR:function(t,e){},M6Sr:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("+VlJ"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=n("C7Lr")({name:"App"},s,!1,function(t){n("eQAv")},null,null).exports,r=n("KGCO"),o=n("2sCs"),l=n.n(o),c={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var u=n("C7Lr")({name:"FadeAnimation"},c,!1,function(t){n("TbRz")},"data-v-6b2c0572",null).exports,d={name:"gallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,n){return e("swiper-slide",{key:n},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var h={name:"DetailBanner",components:{gallary:n("C7Lr")(d,p,!1,function(t){n("UqPH")},"data-v-6042ad3d",null).exports,fade:u},props:{sightName:String,bannerImg:String,bannerImgs:Array},methods:{handleCli:function(){this.img_see=!0},handleClose:function(){this.img_see=!1}},data:function(){return{img_see:!1}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"banner",on:{click:t.handleCli}},[n("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),t._m(0)]),t._v(" "),n("fade",[n("gallary",{directives:[{name:"show",rawName:"v-show",value:t.img_see,expression:"img_see"}],attrs:{imgs:t.bannerImgs},on:{close:t.handleClose}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-info"},[e("div",{staticClass:"banner-title"},[this._v("hhhhhh")]),this._v(" "),e("div",{staticClass:"banner-number"},[e("span",{staticClass:"iconfont back-icon"},[this._v("")]),this._v("39")])])}]};var v=n("C7Lr")(h,f,!1,function(t){n("ctXX")},"data-v-841cf054",null).exports,m={name:"DetailHeader",data:function(){return{abs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.abs=!1}else this.abs=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.abs,expression:"abs"}],staticClass:"abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.abs,expression:"!abs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n\t\t景点详情\n\t")],1)],1)},staticRenderFns:[]};var g=n("C7Lr")(m,_,!1,function(t){n("4xeG")},"data-v-6b552536",null).exports,w={name:"list",props:{list:Array},data:function(){return{}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list,function(e,i){return n("div",{key:i,staticClass:"item"},[n("div",{staticClass:"item-title border-bottom"},[n("span",{staticClass:"item-title-icon"}),t._v(t._s(e.title)+"\n\t\t")]),t._v(" "),e.children?n("div",{staticClass:"item-chilren"},[n("list",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var y={name:"Detail",components:{DetailBanner:v,DetailHeader:g,list:n("C7Lr")(w,C,!1,function(t){n("ZrCl")},"data-v-466bae50",null).exports},mounted:function(){this.getSidesIfo()},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getSidesIfo:function(){l.a.get("/api/detail.json?id="+this.$route.params.id).then(this.getSidesIfoSucc)},getSidesIfoSucc:function(t){if((t=t.data).data&&t.ret){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,bannerImgs:this.gallaryImgs}}),this._v(" "),e("DetailHeader"),this._v(" "),e("div",{staticClass:"content"},[e("list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var S=n("C7Lr")(y,b,!1,function(t){n("JRoR")},"data-v-7d5199a6",null).exports;i.a.use(r.a);var x=new r.a({routes:[{path:"/",name:"Home",component:function(){return n.e(0).then(n.bind(null,"wXUp"))}},{path:"/city",name:"City",component:function(){return n.e(1).then(n.bind(null,"KTAJ"))}},{path:"/detail/:id",name:"detail",component:S}],scrollBehavior:function(t,e,n){return{x:0,y:0}}}),$=n("iDdd"),k=n.n($),I=(n("9n10"),n("M6Sr"),n("TzC8"),n("41jX")),E=n.n(I),N=n("9rMa");i.a.use(N.a);var R="汕头";try{R=localStorage.city}catch(t){}var T=new N.a.Store({name:"store",state:{city:R},actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:{changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}}});n("aEDl");i.a.config.productionTip=!1,k.a.attach(document.body),i.a.use(E.a),new i.a({el:"#app",router:x,store:T,components:{App:a},template:"<App/>"})},TbRz:function(t,e){},TzC8:function(t,e){},UGy7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},s=n("C7Lr")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},i,!1,null,null,null);e.default=s.exports},UqPH:function(t,e){},ZrCl:function(t,e){},aEDl:function(t,e){},ctXX:function(t,e){},eQAv:function(t,e){},syvT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n("Bnvi"));var s={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=n("C7Lr")(s,a,!1,null,null,null);e.default=r.exports}},["NHnr"]);
//# sourceMappingURL=app.7044ee8e607893d4f4a4.js.map