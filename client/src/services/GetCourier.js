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
        console.log('error')
      })
  }
}
