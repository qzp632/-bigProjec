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
            name:'aa',
            path:'aa',
            component:aa
        },
        {
          name:'bb',
          path:'bb',
          component:bb
        },
        {
          name:'cc',
          path:'cc',
          component:cc
        },
        {
          name:'dd',
          path:'dd',
          component:dd
        },
        {
          name:'ee',
          path:'ee',
          component:ee
        }
      ] 
    }
  ]
})
