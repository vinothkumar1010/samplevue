import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'layout',
      component:Layout,
      children:[
		

      ],
    }
  ]
})