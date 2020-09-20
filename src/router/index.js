import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '../views/home/index.vue'


Vue.use(VueRouter)

const routes = [
  {//首页
    path: '/',
    name: 'Home',
    component: Home
  },
  {//定制行
    path: '/customization',
    name: 'Customization',
    component: () => import(/* webpackChunkName: "customization" */ '../views/customization/index.vue')
  },
  {//目的地
    path: '/destination',
    name: 'Destination',
    component: () => import(/* webpackChunkName: "destination" */ '../views/destination/index.vue')
  },
  {//发现页
    path: '/discover',
    name: 'Discover',
    component: () => import(/* webpackChunkName: "discover" */ '../views/discover/index.vue')
  },
  {//我的
    path: '/my',
    name: 'My',
   component: () => import(/* webpackChunkName: "my" */ '../views/my/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
