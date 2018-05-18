<template>
  <v-layout justify-center align-center>
    <v-flex md2>
      <v-form v-model="valid" class="form_auth" justify-center>
        <h2 class="text-xs-center">Авторизация</h2>
        <v-text-field
          v-model="phone"
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
        <v-btn
          class="orange darken-1 btn-auth"
          large
        >ВОЙТИ</v-btn>
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
    ]
  })
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
    padding: 10px;
  }
  .btn-auth {
    color: #fff;
    border-radius: 7px;
    width: 100%;
    margin-left: 0;
  }
</style>
