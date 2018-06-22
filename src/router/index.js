import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/Layout'
import NotFound from '@/pages/errorpages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'layout',
      component:Layout,
      children:[
		

      ],
    },
    {
      path:'*',
      component:NotFound
    }
  ]
})
