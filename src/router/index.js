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
          alias: '/', 
          component: Vue.component( 'Home', require( '@/pages/Home.vue' ).default )
        },
        {
          path: 'signup',
          name: 'signup',
          alias: '/', 
          component: Vue.component( 'Signup', require( '@/pages/Signup.vue' ).default )
        },
        {
          path:'*',
          component:NotFound
        }
      ]
    }
  ]
})
