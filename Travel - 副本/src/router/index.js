import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/pages/detail/Detail'
/*import HelloWorld from '@/components/HelloWorld'*/




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',/*异步加载，js加载庞大超过1M可用，http请求*/
      component: () =>import('@/pages/home/Home')
    },{
      path: '/city',
      name: 'City',
      component: () =>import('@/pages/city/City')
    }, {
      path: '/detail/:id',
      name: 'detail',
      component:Detail
    }
  ],
	scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})
