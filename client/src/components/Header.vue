<template>
  <v-toolbar class="blue darken-1">
    <v-toolbar-side-icon  class="side-icon" v-if="authToken"></v-toolbar-side-icon>
    <v-toolbar-title>Курьерская служба</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="authToken">
      <v-btn flat class="btn-exit" @click="tokenDestroy">Выход</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: ['authToken'],
  data: () => ({
  }),
  methods: {
    tokenDestroy () {
      localStorage.removeItem('token')
    }
  }
}
</script>

<style scoped>
    .toolbar__title{
        cursor: pointer;
        color: #fff;
    }
    .btn-exit{
      color: #fff;
    }
    .side-icon{
      color: #fff;
    }

</style>
