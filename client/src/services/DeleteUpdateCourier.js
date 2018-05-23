import api from '@/services/api'

export default {
  deleteCourier (id) {
    const config = {
      headers: { Authorization: localStorage.token }
    }
    return api().post('/api/deletecourier', {_id: id}, config)
      .then(function (response) {
        return 'Курьер успешно удалён'
      })
      .catch(function () {
        return 'Ошибка удаления курьера'
      })
  },
  updateCourier (courierData) {
    const config = {
      headers: { Authorization: localStorage.token }
    }
    return api().post('/api/updatecourier',
      {
        firstName: courierData['firstName'],
        middleName: courierData['middleName'],
        lastName: courierData['lastName'],
        phoneNumber: courierData['phoneNumber'],
        password: courierData['password'],
        passport: courierData['passport'],
        address: courierData['address'],
        car: courierData['car'],
        numberCar: courierData['numberCar'],
        _id: courierData['_id']
      }, config)
      .then(function (response) {
        return 'Данные обновлены'
      })
      .catch(function () {
        return 'Ошибка обновления данных'
      })
  }
}
