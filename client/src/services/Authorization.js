import api from '@/services/api'

export default {
  authorization (phoneNumber, password) {
    return api().post('/api/signin', {
      phoneNumber: phoneNumber,
      password: password
    })
      .then(function (response) {
        localStorage.setItem('user', 'administrator')
        localStorage.setItem('token', response.data)
      })
      .catch(function () {
        return 'Ошибка авторизации'
      })
  },
  autentification (token) {
    return api().get('/api/current-administrator', { headers: { Authorization: token } })
      .then(function (response) {
        localStorage.setItem('user', 'administrator')
      })
      .catch(function () {
        console.log('Пользователь не найден')
        return 'Ошибка авторизации'
      })
  },
  authorizationCourier (phoneNumber, password) {
    return api().post('/api/signincourier', {
      phoneNumber: phoneNumber,
      password: password
    })
      .then(function (response) {
        localStorage.setItem('user', 'courier')
        localStorage.setItem('token', response.data)
      })
      .catch(function () {
        return 'Ошибка авторизации'
      })
  }
}
