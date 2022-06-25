import Vue from 'vue'
import Router from 'vue-router'

const routes = [
  { 
    path: '/',
    meta: {layout: 'base'},
    component: () => import('./components/Home.vue') 
  },  
  { 
    path: '/practic', 
    name: 'practic',
    meta: {layout: 'practic'},
    component: () => import('./components/practic/Home.vue') 
  },  
  { 
    path: '/practic/categories', 
    name: 'categories',
    meta: {layout: 'practic'},
    component: () => import('./components/practic/Categories.vue') 
  },
  { 
    path: '/practic/profile', 
    name: 'profile',
    meta: {layout: 'practic'},
    component: () => import('./components/practic/Profile.vue') 
  },
  { 
    path: '/practic/record', 
    name: 'record',
    meta: {layout: 'practic'},
    component: () => import('./components/practic/Record.vue') 
  },
  { 
    path: '/practic/planning', 
    name: 'planning',
    meta: {layout: 'practic'},
    component: () => import('./components/practic/Planning.vue') 
  },
  { 
    path: '/practic/history', 
    name: 'history',
    meta: {layout: 'practic'},
    component: () => import('./components/practic/History.vue') 
  },
  { 
    path: '/practic/detail', 
    name: 'detail',
    meta: {layout: 'practic'},
    component: () => import('./components/practic/Detail.vue') 
  },
  { 
    path: '/practic/login', 
    name: 'login',
    meta: {layout: 'practic-auth'},
    component: () => import('./components/practic/Login.vue') 
  },
  { 
    path: '/practic/register', 
    name: 'register',
    meta: {layout: 'practic-auth'},
    component: () => import('./components/practic/Register.vue') 
  },
  { 
    path: '/foo', 
    name: 'foo',
    meta: {layout: 'base'},
    component: () => import('./components/Foo.vue') 
  },
  { 
    path: '/bar', 
    name: 'bar',
    meta: {layout: 'base'},
    component:  () => import('./components/Bar.vue') 
  },
  { 
    path: '/**/', 
    component: () => import('./components/NotFound.vue') 
  }
]

const router = new Router({
  mode: 'history',
  routes 
})

Vue.use(Router)


export default router