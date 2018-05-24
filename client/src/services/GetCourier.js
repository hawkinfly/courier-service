import api from '@/services/api'

export default {
  getCouriers () {
    const config = {
      headers: { Authorization: localStorage.token }
    }
    return api().get('/api/editcourier', config)
      .then(function (response) {
        return response.data
      })
      .catch(function () {
        return 'Ошибка получения списка курьеров'
      })
  },
  getOneCourier (idCourier) {
    const config = {
      headers: { Authorization: localStorage.token }
    }
    return api().post('/api/getcourier', { id_courier: idCourier }, config)
      .then(function (response) {
        return `${response.data.lastName} ${response.data.firstName} - ${response.data.phoneNumber} `
      })
      .catch(function () {
        return 'Ошибка получения курьера'
      })
  }
}
