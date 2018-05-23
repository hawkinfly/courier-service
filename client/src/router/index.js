import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AddCourier from '@/components/AddCourier'
import EditCourier from '@/components/EditCourier'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/addcourier',
      name: 'AddCourier',
      component: AddCourier
    },
    {
      path: '/editcourier',
      name: 'EditCourier',
      component: EditCourier
    }
  ]
})
