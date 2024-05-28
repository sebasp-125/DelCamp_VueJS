import Vue from 'vue'
import VueRouter from 'vue-router'
import DelcampHeader from '../components/DelcampHeader.vue'
import DelcampFooter from '../components/DelcampFooter.vue'
import LandingPage from '../components/Landing-page.vue'
import Login from '../components/Login.vue'
import LoginFarmerVue from '@/components/Farmer/LoginFarmer.vue'
import ProfileFarmer from '@/components/Farmer/ProfileFarmer.vue'
import RegisterFarmer from '@/components/Farmer/RegisterFarmer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/landing-page',
    name: 'landing-page',
    component: LandingPage
  },
  {
    path: '/delcamp-footer',
    name: 'delcamp-footer',
    component: DelcampFooter
  },
  {
    path: '/delcamp-header',
    name: 'delcamp-header',
    component: DelcampHeader
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/login-farmer',
    name: 'login-farmer',
    component: LoginFarmerVue
  },
  {
    path: '/profile-farmer',
    name: 'profile-farmer',
    component: ProfileFarmer
  },
  {
    path: '/register-farmer',
    name: 'register-farmer',
    component: RegisterFarmer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
