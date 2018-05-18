<template>
  <v-layout justify-center align-center>
    <v-flex md2>
      <v-form v-model="valid" class="form_auth" justify-center>
        <v-toolbar flat dense class="light-blue darken-1" dark>
          <v-toolbar-title>Авторизация</v-toolbar-title>
        </v-toolbar>
        <div class="input-form">
        <v-text-field
          v-model="phone"
          @input="phoneBackspace"
          name = "phoneNumber"
          :rules="phoneRules"
          label="Номер телефона"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          name="password"
          :rules="passwordRules"
          label="Пароль"
          required
        ></v-text-field>
        <v-checkbox
          :label="`Администратор`"
          v-model="administrator"
        ></v-checkbox>
        <v-btn
          class="orange darken-1 btn-auth"
          large
        >ВОЙТИ</v-btn>
        </div>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    phone: '',
    phoneRules: [
      v => !!v || 'Номер телефона обязателен',
      v => v.length === 11 || 'Номер телефона должен состоять из 11 цифр'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Пароль является обяхательным полем',
      v => v.length < 32 || 'Пароль не может быть больше 32 символов'
    ],
    administrator: false
  }),
  methods: {
    phoneBackspace () {
      console.log(`0st - ${this.phone}`)
      if (this.phone.length > 11) {
        this.phone = this.phone.slice(0, -1)
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
</style>
