<template>
<v-container>
  <v-layout row justify-center v-if="user == 'administrator'">
    <v-flex md6 lg4 xl4>
      <v-form v-model="valid" class="form_auth" justify-center v-on:submit.prevent>
        <v-toolbar flat dense class="light-blue darken-1" dark>
          <v-layout justify-center align-center>
          <v-toolbar-title class="ml-0">Новый курьер</v-toolbar-title>
          </v-layout>
        </v-toolbar>
        <div class="input-form">
        <v-text-field
          v-model="courier.lastName"
          name="lastName"
          label="Фамилия"
          maxlength="50"
          autocomplete="off"
          required
          prepend-icon="person"
        ></v-text-field>
        <v-text-field
          v-model="courier.firstName"
          name="firstName"
          label="Имя"
          maxlength="50"
          autocomplete="off"
          required
          prepend-icon="person"
        ></v-text-field>
        <v-text-field
          v-model="courier.middleName"
          name="middleName"
          label="Отчество"
          maxlength="50"
          autocomplete="off"
          required
          prepend-icon="person"
        ></v-text-field>
        <v-text-field
          v-model="courier.passport"
          name="passport"
          label="Серия и номер паспотра"
          maxlength="12"
          autocomplete="off"
          prepend-icon="fa-address-card"
          required
        ></v-text-field>
        <v-text-field
          v-model="courier.address"
          name="address"
          label="Адрес"
          maxlength="120"
          autocomplete="off"
          prepend-icon="home"
          required
        ></v-text-field>
        <v-text-field
          v-model="courier.phoneNumber"
          name = "phoneNumber"
          label="Номер телефона"
          maxlength="11"
          autocomplete="off"
          required
          prepend-icon="phone"
        ></v-text-field>
        <v-text-field
          v-model="courier.password"
          type="password"
          name="password"
          label="Пароль"
          maxlength="32"
          required
          prepend-icon="security"
        ></v-text-field>
         <v-text-field
          v-model="courier.car"
          name="car"
          label="Автомобиль"
          maxlength="50"
          autocomplete="off"
          prepend-icon="fa-car"
        ></v-text-field>
        <v-text-field
          v-model="courier.numberCar"
          name="numberCar"
          label="Автомобильный номер"
          maxlength="50"
          autocomplete="off"
          prepend-icon="subtitles"
        ></v-text-field>
        <v-layout justify-space-around>
        <v-btn
            type="button"
            class="red darken-1 btn-auth"
            large
            @click="resetButton"
        >Сбросить</v-btn>
        <v-btn
          type="submit"
          class="green darken-1 btn-auth"
          large
          @click="sendForm"
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
import AddCourier from '@/services/AddCourier'
export default {
  data: () => ({
    errorForm: false,
    successForm: false,
    valid: '',
    courier: {
      firstName: '',
      lastName: '',
      middleName: '',
      passport: '',
      address: '',
      phoneNumber: '',
      password: '',
      car: '',
      numberCar: ''
    },
    user: ''
  }),
  beforeCreate: async function () {
    this.user = await localStorage.user
  },
  methods: {
    sendForm: async function () {
      this.successForm = false
      this.errorForm = false
      let result = await AddCourier.addCourier(this.courier)
      for (let i in this.courier) {
        this.courier[i] = ''
      }
      if (result === 'Курьер добавлен') {
        this.successForm = result
      } else {
        this.errorForm = result
      }
      setTimeout(() => {
        this.successForm = false
        this.errorForm = false
      }, 5000)
    },
    resetButton () {
      for (let i in this.courier) {
        this.courier[i] = ''
      }
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
