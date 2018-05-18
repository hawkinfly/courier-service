import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// import Posts from '@/comments/PostsPage' // удалить

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
    /* {
      path: '/posts',
      name: 'Posts',
      component: Posts
    } */
  ]
})
