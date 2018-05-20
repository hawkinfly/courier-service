<template>
<v-container>
  <v-layout justify-center align-center class="fullheight">
    <v-flex md6 lg4 xl3>
      <v-form v-model="valid" class="form_auth" justify-center v-on:submit.prevent>
        <v-toolbar flat dense class="light-blue darken-1" dark>
          <v-layout justify-center align-center>
          <v-toolbar-title class="ml-0">Авторизация</v-toolbar-title>
          </v-layout>
        </v-toolbar>
        <div class="input-form">
        <v-text-field
          v-model="phone"
          name = "phoneNumber"
          :rules="phoneRules"
          label="Номер телефона"
          maxlength="11"
          autocomplete="off"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          name="password"
          :rules="passwordRules"
          label="Пароль"
          maxlength="32"
          required
        ></v-text-field>
        <v-checkbox
          :label="`Администратор`"
          v-model="administrator"
        ></v-checkbox>
        <v-btn
          type="submit"
          class="orange darken-1 btn-auth"
          large
          @click="sendForm"
        >ВОЙТИ</v-btn>
        <v-layout justify-center>
          <p v-if="errorForm" class="error-form">Данные не валидны!</p>
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
      v => !!v || 'Пароль является обяхательным полем',
      v => v.length <= 32 || 'Пароль не может быть больше 32 символов'
    ],
    administrator: false
  }),
  methods: {
    sendForm () {
      let pattern = /^\d{11}$/
      if ((pattern.test(this.phone)) && (this.password.length >= 6 && this.password.length <= 32)) {
        this.errorForm = false
        console.log('hi')
      } else {
        this.errorForm = true
      }
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
    width: 100%;
    margin-left: 0;
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
