<template>
  <div id="app">
    <v-app>
    <my-header/>
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
  }
}
</script>

<style>
</style>
