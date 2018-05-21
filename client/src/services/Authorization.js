import api from '@/services/api'

export default {
  authorization (phoneNumber, password) {
    return api().post('/api/signin', {
      phoneNumber: phoneNumber,
      password: password
    })
      .then(function (response) {
        localStorage.setItem('token', response.data)
      })
      .catch(function () {
        return 'Ошибка авторизации'
      })
  }
}
