import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/Layout'
import NotFound from '@/pages/errorpages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name:'layout',
      component:Layout,
      children:[
        {
          path: 'home',
          name: 'home',
          component: Vue.component( 'Home', require( '@/pages/Home.vue' ).default )
        },
        {
          path:'*',
          component:NotFound
        }
      ]
    }
  ]
})
