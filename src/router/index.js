import Vue from 'vue'
import VueRouter from 'vue-router'
import Edit from '../views/Edit.vue';
import Base from '../views/Base.vue';
import Total from '../views/Total.vue';
import About from '../views/About.vue';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Edit', //设置默认指向的路径
  },
  {
    path: '/Edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/Base',
    name: 'Base',
    component: Base
  },
  {
    path: '/Total',
    name: 'Total',
    component: Total
  },
  {
    path: '/Setting',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  // {
  //   path: '/thisyear'
  // },
  // {
  // }
]

const router = new VueRouter({
  mode: 'history',
  // base: '/tally/',
  routes
})


export default router