import api from '@/services/api'

export default {
  authorization (phoneNumber, password) {
    return api().post('/api/signin', {
      phoneNumber: phoneNumber,
      password: password
    })
      .then(function (response) {
        localStorage.setItem('token', 'administrator')
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
  }
}
