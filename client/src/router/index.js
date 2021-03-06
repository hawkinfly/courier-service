import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AddCourier from '@/components/AddCourier'
import EditCourier from '@/components/EditCourier'
import AddBid from '@/components/AddBid'
import Bids from '@/components/Bids'
import ReadyBids from '@/components/ReadyBids'
import MyBids from '@/components/MyBids'

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
    },
    {
      path: '/addbid',
      name: 'AddBid',
      component: AddBid
    },
    {
      path: '/bids',
      name: 'Bids',
      component: Bids
    },
    {
      path: '/readybids',
      name: 'ReadyBids',
      component: ReadyBids
    },
    {
      path: '/mybids',
      name: 'MyBids',
      component: MyBids
    }
  ]
})
