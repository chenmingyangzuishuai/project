import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import List from '@/view/home/List'
import tuijian from '@/components/home-child/anyone.vue'
import amazing from '@/view/home/amazing'
import gehu from '@/view/home/gehu'
import box from '@/view/home/box'
import jiadian from '@/view/home/jiadian'
import chufang from '@/view/home/chufang'
import peishi from '@/view/home/peishi'
import lingshi from '@/view/home/lingshi'
import muying from '@/view/home/muying'
import jiaju from '@/view/home/jiaju'


import Class from '@/view/ClassTab'
import fenlei from '@/components/ClassTab/content'
import pinpai from '@/components/ClassTab/pinpai'


import myself from '@/view/myself/myself'

import shopcar from '@/view/shopcar/shop'

import detail from '@/view/detail/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Home/tuijian/2'
    },
    {
      path:'/detail/:id',
      component:detail
    },
    {
      path:'/shopcar',
      component:shopcar
    },
    {
      path:'/myself',
      component:myself
    },
    {
      path:'/Class',
      component:Class,
      redirect:'/Class/first',
      children:[
        {
          path:'first',
          component:fenlei
        },
        {
          path:'pinpai',
          component:pinpai
        }
      ]
    },
    {
      path:'/Home',
      component:Home,
      redirect:'/Home/tuijian/2',
      children:[
        {
          path:'tuijian/:id',
          component:tuijian
        },
        {
          path:'jujia/:id',
          component:List
        },
        {
          path:'meizhuang/:id',
          component:amazing
        },
        {
          path:'gehu/:id',
          component:gehu
        },
        {
          path:'xiangbao/:id',
          component:box
        },
        {
          path:'jiadian/:id',
          component:jiadian
        },
        {
          path:'chufang/:id',
          component:chufang
        },
        {
          path:'peishi/:id',
          component:peishi
        },
        {
          path:'lingshi/:id',
          component:lingshi
        },
        {
          path:'muying/:id',
          component:muying
        },
        {
          path:'jiaju/:id',
          component:jiaju
        }
      ]
    }
  ]
})
