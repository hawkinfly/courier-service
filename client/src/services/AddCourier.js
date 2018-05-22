import api from '@/services/api'

export default {
  addCourier (courierData) {
    const config = {
      headers: { Authorization: localStorage.token }
    }
    courierData.car = courierData.car || 'Автомобиль не указан'
    courierData.numberCar = courierData.numberCar || 'Автомобильный номер не указан'
    return api().post('/api/addcourier',
      {
        firstName: courierData['firstName'],
        middleName: courierData['middleName'],
        lastName: courierData['lastName'],
        phoneNumber: courierData['phoneNumber'],
        password: courierData['password'],
        passport: courierData['passport'],
        address: courierData['address'],
        car: courierData['car'],
        numberCar: courierData['numberCar']
      }, config)
      .then(function (response) {
        return 'Курьер добавлен'
      })
      .catch(function () {
        return 'Ошибка добавления курьера'
      })
  }
}
