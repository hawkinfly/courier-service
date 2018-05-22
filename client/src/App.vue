<template>
  <div id="app">
    <v-app>
    <my-header :authToken="authToken"/>
    <router-view/>
    <my-footer/>
    </v-app>
  </div>
</template>

<script>
import MyHeader from '@/components/Header.vue'
import MyFooter from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  },
  data: () => ({
    authToken: localStorage.getItem('token')
  }),
  methods: {
    getAuthorization () {
      this.authToken = localStorage.getItem('token')
    }
  },
  watch: {
    $route () {
      this.getAuthorization()
    }
  }
}
</script>

<style>
  #app{
    background-color: rgb(238, 237, 237);
  }
  .menu__content{
    left: 0 !important;
    top: 0 !important;
    min-width: 100% !important;
    width: 100%;
  }
</style>
