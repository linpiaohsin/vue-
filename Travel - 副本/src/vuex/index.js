import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let defaultCity = "汕头"
try{
	defaultCity = localStorage.city
}catch(e){
	//TODO handle the exception
}

export default new Vuex.Store({
  name:'store',
  state:{
    city:defaultCity
  },
  actions:{
    changeCity(ctx ,city){
      ctx.commit('changeCity',city)
    }
  },
  mutations:{
    changeCity(state,city){
      state.city = city
			try{
				localStorage.city=city
			}catch(e){
				//TODO handle the exception
			}
			
    }
  }

})
