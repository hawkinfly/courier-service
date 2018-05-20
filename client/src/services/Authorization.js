import api from '@/services/api'

export default {
  authorization (phoneNumber, password) {
    return api().post('/api/signin', {
      phoneNumber: phoneNumber,
      password: password
    })
      .then(function (response) {
        console.log(response.data)
        // добавить токен в куки или сессии
      })
      .catch(function () {
        return 'Ошибка авторизации'
      })
  }
}
