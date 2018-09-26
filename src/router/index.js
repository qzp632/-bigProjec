import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import aa from '@/components/aa'
import bb from '@/components/bb'
import cc from '@/components/cc'
import dd from '@/components/dd'
import ee from '@/components/ee'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children:[
        {
            path:'aa',
            component:aa
        },
        {
          path:'bb',
          component:bb
        },
        {
          path:'cc',
          component:cc
        },
        {
          path:'dd',
          component:dd
        },
        {
          path:'ee',
          component:ee
        }
      ] 
    }
  ]
})
