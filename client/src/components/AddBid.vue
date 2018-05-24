<template>
<v-container>
  <v-layout row justify-center v-if="user == 'administrator'">
    <v-flex md6 lg4 xl4>
      <v-form class="form_auth" justify-center v-on:submit.prevent>
        <v-toolbar flat dense class="light-blue darken-1" dark>
          <v-layout justify-center align-center>
          <v-toolbar-title class="ml-0">Новая заявка</v-toolbar-title>
          </v-layout>
        </v-toolbar>
        <div class="input-form">
          <v-text-field
          v-model="bid.product"
          name="product"
          label="Товар"
          maxlength="75"
          :counter="75"
          autocomplete="off"
          required
          prepend-icon="fa-box-open"
          ></v-text-field>
          <v-text-field
          v-model="bid.cost"
          name="product"
          label="Стоимость заказа"
          maxlength="20"
          autocomplete="off"
          required
          prepend-icon="money"
          ></v-text-field>
          <v-text-field
          v-model="bid.address"
          name="address"
          label="Адрес доставки"
          maxlength="100"
          :counter="100"
          autocomplete="off"
          required
          prepend-icon="fa-home"
          ></v-text-field>
          <v-text-field
          :mask="datetime"
          v-model="bid.datetime"
          name="datetime"
          label="Дата и время доставки"
          autocomplete="off"
          required
          prepend-icon="fa-calendar"
          ></v-text-field>
          <v-text-field
          v-model="bid.phoneNumber"
          name="phoneNumber"
          label="Телефон клиента"
          maxlength="11"
          autocomplete="off"
          required
          prepend-icon="phone"
          ></v-text-field>
          <v-select
          :items="couriers"
          v-model="bid.courier"
          label="Выбрать курьера"
          autocomplete
          required
          prepend-icon="fa-truck"
          ></v-select>
          <v-text-field
          v-model="bid.note"
          name="note"
          label="Примечание"
          maxlength="100"
          :counter="150"
          autocomplete="off"
          prepend-icon="fa-pencil-alt"
          ></v-text-field>
          <v-layout justify-space-around>
            <v-btn
              type="button"
              class="red darken-1 btn-auth"
              large
              @click="resetBid"
            >Очистить</v-btn>
            <v-btn
              type="submit"
              class="green darken-1 btn-auth"
              large
              @click="addBid"
            >Добавить</v-btn>
          </v-layout>
          <v-layout justify-center>
            <p v-if="errorForm" class="error-form">{{ errorForm }}</p>
            <p v-if="successForm" class="success-form">{{ successForm }}</p>
          </v-layout>
        </div>
      </v-form>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import GetCourier from '@/services/GetCourier'
import Bid from '@/services/Bid'
export default {
  beforeCreate: async function () {
    this.successForm = false
    this.errorForm = false
    this.user = await localStorage.user
    this.courierData = await GetCourier.getCouriers()
    for (let i in this.courierData) {
      this.couriers.push(`${+i + 1}) ${this.courierData[i].lastName} ${this.courierData[i].firstName} ${this.courierData[i].middleName} - ${this.courierData[i].phoneNumber}`)
      this.id_couriers.push(this.courierData[i]._id)
    }
  },
  data: () => ({
    successForm: false,
    errorForm: false,
    user: '',
    couriersData: null,
    id_couriers: [],
    couriers: [],
    bid: {
      product: '',
      address: '',
      cost: '',
      datetime: '',
      courier: '',
      note: '',
      phoneNumber: ''
    },
    datetime: 'date-with-time'
  }),
  methods: {
    resetBid () {
      for (let i in this.bid) {
        this.bid[i] = ''
      }
    },
    addBid: async function () {
      let bidData = {}
      for (let key in this.bid) {
        bidData[key] = this.bid[key]
      }
      bidData['id_courier'] = this.id_couriers[+this.bid.courier[0] - 1]
      delete bidData['courier']
      let result = await Bid.addBid(bidData)
      if (result === 'Заявка успешно создана') {
        this.successForm = result
      } else {
        this.errorForm = result
      }
      setTimeout(() => {
        this.successForm = false
        this.errorForm = false
      }, 3000)
      this.resetBid()
    }
  }
}
</script>

<style scoped>
  .form_auth {
    background-color: #fff;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-radius: 7px;
  }
  nav {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .btn-auth {
    color: #fff;
    border-radius: 7px;
    width: 49%;
    margin-left: 0;
    margin-right: 0;
  }
  .input-form{
    padding: 8px;
  }
  .error-form {
    color: red;
    margin-bottom: 0;
  }
  .success-form{
    color: rgb(13, 197, 13);
    margin-bottom: 0;
  }
  .fullheight{
    min-height: 100%;
  }
</style>
