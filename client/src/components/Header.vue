<template>
  <v-toolbar class="blue darken-1">
    <v-menu class="hidden-md-and-up list-menu" absolute left top transition="slide-x-transition" v-if="authUser === 'administrator'">
      <v-btn slot="activator" icon dark>
        <v-icon>list</v-icon>
      </v-btn>
      <v-list class="pt-0 pb-0 amber darken-2">
        <v-list-tile class="my-list__tile">
          <v-list-tile-title @click="addCourier">Добавить курьера</v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="my-list__tile">
          <v-list-tile-title @click="editCourier">Изменить данные</v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="my-list__tile">
          <v-list-tile-title @click="addBid">Добавить заявку</v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="my-list__tile">
          <v-list-tile-title @click="bids">Текущие заявки</v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="my-list__tile">
          <v-list-tile-title @click="readyBids">Готовые заявки</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title @click="tokenDestroy">Выход</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu class="hidden-md-and-up list-menu" absolute left top transition="slide-x-transition" v-else-if="authUser === 'courier'">
      <v-btn slot="activator" icon dark>
        <v-icon>list</v-icon>
      </v-btn>
      <v-list class="pt-0 pb-0 amber darken-2">
        <v-list-tile class="my-list__tile">
          <v-list-tile-title @click="mybids">Мои заявки</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title @click="tokenDestroy">Выход</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-toolbar-title><a href="/">Курьерская служба</a></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="authUser === 'administrator'" class="hidden-sm-and-down">
      <v-btn flat class="btn-menu" @click="addCourier">Добавить курьера</v-btn>
      <v-btn flat class="btn-menu" @click="editCourier">Изменить данные</v-btn>
      <v-btn flat class="btn-menu" @click="addBid">Добавить заявку</v-btn>
      <v-btn flat class="btn-menu" @click="bids">Текущие заявки</v-btn>
      <v-btn flat class="btn-menu" @click="readyBids">Готовые заявки</v-btn>
      <v-btn flat class="btn-menu" @click="tokenDestroy">Выход</v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-else-if="authUser === 'courier'" class="hidden-sm-and-down">
      <v-btn flat class="btn-menu" @click="mybids">Мои заявки</v-btn>
      <v-btn flat class="btn-menu" @click="tokenDestroy">Выход</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: ['authUser'],
  data: function () {
    return {
    }
  },
  methods: {
    tokenDestroy () {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('phone')
      this.$emit('update:authToken', '')
      this.$router.push('/')
    },
    addCourier () {
      this.$router.push('/addcourier')
    },
    editCourier () {
      this.$router.push('/editcourier')
    },
    addBid () {
      this.$router.push('/addbid')
    },
    bids () {
      this.$router.push('/bids')
    },
    readyBids () {
      this.$router.push('/readybids')
    },
    mybids () {
      this.$router.push('/mybids')
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
