<template>
  <v-toolbar class="blue darken-1">
    <v-menu class="hidden-md-and-up list-menu" absolute left top transition="slide-x-transition" v-if="authTokenLocal">
      <v-btn slot="activator" icon dark>
        <v-icon>list</v-icon>
      </v-btn>
      <v-list class="pt-0 pb-0 amber darken-2">
        <v-list-tile class="my-list__tile">
          <v-list-tile-title>Добавить курьера</v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="my-list__tile">
          <v-list-tile-title>Изменить данные</v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="my-list__tile">
          <v-list-tile-title>Добавить заявку</v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="my-list__tile">
          <v-list-tile-title>Текущие заявки</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title @click="tokenDestroy">Выход</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-toolbar-title><a href="/">Курьерская служба</a></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="authTokenLocal" class="hidden-sm-and-down">
      <v-btn flat class="btn-menu">Добавить курьера</v-btn>
      <v-btn flat class="btn-menu">Изменить данные</v-btn>
      <v-btn flat class="btn-menu">Добавить заявку</v-btn>
      <v-btn flat class="btn-menu">Текущие заявки</v-btn>
      <v-btn flat class="btn-menu" @click="tokenDestroy">Выход</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: function () {
    return {
      authTokenLocal: localStorage.getItem('token')
    }
  },
  methods: {
    tokenDestroy () {
      localStorage.removeItem('token')
      this.$emit('update:authToken', '')
      this.$router.push('/')
    },
    getToken () {
      this.authTokenLocal = localStorage.getItem('token')
    }
  },
  watch: {
    $route () {
      this.getToken()
    }
  }
}
</script>

<style scoped>
    .toolbar__title{
        cursor: pointer;
        color: #fff;
    }
    .btn-menu{
      color: #fff;
    }
    .side-icon{
      color: #fff;
    }
    .my-list__tile{
      border-bottom: solid 1px #fff;
    }
    .list{
      color: #fff;
    }
    .list-menu{
      border-radius: 15px;
    }
    a{
      text-decoration: none;
      color: #fff;
    }
</style>
