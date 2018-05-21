<template>
  <div id="app">
    <v-app>
    <my-header :authToken='authToken'/>
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
    authToken: 'S'
  })
}
</script>

<style>
  #app{
    background-color: rgb(238, 237, 237);
  }
</style>
