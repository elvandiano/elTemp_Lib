import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/layout/Menu'
import Navbar from '@/layout/Navbar'
import Header from '@/layout/AppHeader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    }
  ]
})
