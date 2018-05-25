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
  },
  getBidsStatus0 () {
    const config = {
      headers: { Authorization: localStorage.token }
    }
    return api().get('/api/getbids', config)
      .then(function (response) {
        return response.data
      })
      .catch(function () {
        return 'Ошибка получения заявок'
      })
  },
  getBidsStatus123 () {
    const config = {
      headers: { Authorization: localStorage.token }
    }
    return api().get('/api/getreadybids', config)
      .then(function (response) {
        return response.data
      })
      .catch(function () {
        return 'Ошибка получения заявок'
      })
  },
  deleteBid (id) {
    const config = {
      headers: { Authorization: localStorage.token }
    }
    return api().post('/api/deletebid', {_id: id}, config)
      .then(function (response) {
        return 'Заявка успешно удалена'
      })
      .catch(function () {
        return 'Ошибка удалении заявки'
      })
  },
  updateStatus (id, status) {
    const config = {
      headers: { Authorization: localStorage.token }
    }
    return api().post('/api/updatebidstatus', {_id: id, status: status}, config)
      .then(function (response) {
        return 'Статус заявки изменён'
      })
      .catch(function () {
        return 'Ошибка изменения статуса'
      })
  }
}
