import api from '@/services/api'

export default {
  addBid (bidData) {
    const config = {
      headers: { Authorization: localStorage.token }
    }
    return api().post('/api/addbid',
      {
        product: bidData['product'],
        address: bidData['address'],
        cost: bidData['cost'],
        datetime: bidData['datetime'],
        id_courier: bidData['id_courier'],
        note: bidData['note'],
        phoneNumber: bidData['phoneNumber']
      }, config)
      .then(function (response) {
        return 'Заявка успешно создана'
      })
      .catch(function () {
        return 'Ошибка создания заявки'
      })
  }
}
