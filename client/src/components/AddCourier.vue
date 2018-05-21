<template>
<v-container>
  <v-layout justify-center>
    <v-flex md6 lg4 xl3>
      <v-form v-model="valid" class="form_auth" justify-center v-on:submit.prevent>
        <v-toolbar flat dense class="light-blue darken-1" dark>
          <v-layout justify-center align-center>
          <v-toolbar-title class="ml-0">Новый курьер</v-toolbar-title>
          </v-layout>
        </v-toolbar>
        <div class="input-form">
        <v-text-field
          v-model="lastName"
          name="lastName"
          label="Фамилия"
          :rules="nameRules"
          maxlength="50"
          autocomplete="off"
          required
          prepend-icon="person"
        ></v-text-field>
        <v-text-field
          v-model="firstName"
          name="firstName"
          label="Имя"
          :rules="nameRules"
          maxlength="50"
          autocomplete="off"
          required
          prepend-icon="person"
        ></v-text-field>
        <v-text-field
          v-model="middleName"
          name="middleName"
          label="Отчество"
          :rules="nameRules"
          maxlength="50"
          autocomplete="off"
          required
          prepend-icon="person"
        ></v-text-field>
        <v-text-field
          v-model="passport"
          name="passport"
          label="Серия и номер паспотра"
          :rules="passportRules"
          maxlength="12"
          autocomplete="off"
          prepend-icon="fa-address-card"
          required
        ></v-text-field>
        <v-text-field
          v-model="address"
          name="address"
          label="Адрес"
          :rules="addressRules"
          maxlength="120"
          autocomplete="off"
          prepend-icon="home"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          name = "phoneNumber"
          :rules="phoneRules"
          label="Номер телефона"
          maxlength="11"
          autocomplete="off"
          required
          prepend-icon="phone"
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          name="password"
          :rules="passwordRules"
          label="Пароль"
          maxlength="32"
          required
          prepend-icon="security"
        ></v-text-field>
         <v-text-field
          v-model="car"
          name="car"
          label="Автомобиль"
          maxlength="50"
          autocomplete="off"
          prepend-icon="fa-car"
        ></v-text-field>
        <v-text-field
          v-model="numberCar"
          name="numberCar"
          label="Автомобильный номер"
          maxlength="50"
          autocomplete="off"
          prepend-icon="subtitles"
        ></v-text-field>
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
        <v-layout justify-center>
          <p v-if="errorForm" class="error-form">{{ errorForm }}</p>
        </v-layout>
        </div>
      </v-form>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data: () => ({
    errorForm: false,
    valid: false,
    phone: '',
    phoneRules: [
      v => !!v || 'Номер телефона обязателен',
      v => v.length === 11 || 'Номер телефона должен состоять из 11 цифр'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Пароль является обязательным полем',
      v => v.length <= 32 || 'Пароль не может быть больше 32 символов'
    ]
  }),
  methods: {
    sendForm () {
    },
    resetButton () {
      this.phone = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
    h2 {
    color: rgb(63, 62, 62);
  }
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
  .fullheight{
    min-height: 100%;
  }
</style>
