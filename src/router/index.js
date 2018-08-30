import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from'@/pages/home'
// import About from'@/pages/about'
Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld,
      component:resolve => require(['@/components/HelloWorld'],resolve)
    },
    {
      path:'/home',
      name:'Home',
      // component:Home
      component:resolve => require(['@/pages/home'],resolve)

    },
    {
      path:'/about',
      name:'About',
      // component:About
      component:resolve => require(['@/pages/about'],resolve)

    }
  ]
})
