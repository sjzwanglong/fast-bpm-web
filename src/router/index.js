import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'

import Dashboard from '@/views/home/Dashboard'
import Cmpy from '../views/org/Cmpy'
import Dept from '../views/org/Dept'
import User from '../views/org/User'

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      { path: "/home", redirect: "/home/dashboard" },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      }, {
        path: "cmpy",
        name: "Cmpy",
        component: Cmpy
      }, {
        path: "dept",
        name: "Dept",
        component: Dept
      }, {
        path: "user",
        name: "User",
        component: User
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
