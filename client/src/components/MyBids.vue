<template>
  <v-container>
    <v-layout row justify-center v-if="user == 'courier'">
      <v-flex md6 lg4 xl4 v-if="arrayBids !== 'Ошибка получения заявок'">
        <div class="bid-block" v-for="(value, key) in sortBids" :key="key" :id="'bid-' + key">
          <v-layout row justify-center align-center>
            <v-flex xs4 md3 class="title_head">
              Товар:
            </v-flex>
            <v-flex xs8 md9>
              &#160;{{ value.product }}
            </v-flex>
          </v-layout>
          <v-layout row justify-center align-center>
            <v-flex xs4 md3 class="title_head">
              Стоимость:
            </v-flex>
            <v-flex xs8 md9>
              &#160;{{ value.cost }}
            </v-flex>
          </v-layout>
          <v-layout row justify-center align-center>
            <v-flex xs4 md3 class="title_head">
              Адрес:
            </v-flex>
            <v-flex xs8 md9>
              &#160;{{ value.address }}
            </v-flex>
          </v-layout>
          <v-layout row justify-center align-center>
            <v-flex xs4 md3 class="title_head">
              Дата и время:
            </v-flex>
            <v-flex xs8 md9>
              &#160;{{ value.datetime.slice(0, 2) + '/' + value.datetime.slice(2, 4) + '/' + value.datetime.slice(4, 8) + ' ' + value.datetime.slice(8, 10) + ':' + value.datetime.slice(10, 12) }}
            </v-flex>
          </v-layout>
          <v-layout row justify-center align-center>
            <v-flex xs4 md3 class="title_head">
              Телефон:
            </v-flex>
            <v-flex xs8 md9>
              &#160;{{ value.phoneNumber }}
            </v-flex>
          </v-layout>
          <v-layout row justify-center align-center>
            <v-flex xs4 md3 class="title_head">
              Примечание:
            </v-flex>
            <v-flex xs8 md9>
              <template v-if="value.note">
                &#160;{{ value.note }}
              </template>
              <template v-else>
                &#160;Нет примечания
              </template>
            </v-flex>
          </v-layout>
          <v-layout row justify-center align-center>
            <v-btn fab dark small color="orange" title="Отменить заявку" @click="cancelBid(key)">
              <v-icon dark>cancel</v-icon>
            </v-btn>
            <v-btn fab dark small color="green darken-1" title="Подтвердить заявку" @click="successBid(key)">
              <v-icon dark>check</v-icon>
            </v-btn>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Bid from '@/services/Bid'
import GetCourier from '@/services/GetCourier'
export default {
  beforeCreate: async function () {
    this.user = await localStorage.user
    this.arrayBids = await Bid.getBidsStatus0()
    for (let i = 0; i < this.arrayBids.length; i++) {
      let result = await GetCourier.getOneCourier(this.arrayBids[i]['id_courier'])
      if (localStorage.phone === result.slice(-11)) {
        this.courier.push(result)
        this.idBids.push(this.arrayBids[i]['_id'])
        this.sortBids.push(this.arrayBids[i])
      }
    }
  },
  data: () => ({
    user: '',
    arrayBids: null,
    sortBids: [],
    courier: [],
    idBids: [],
    offset: 0
  }),
  methods: {
    cancelBid: async function (numberBid) {
      let status = 3
      let result = await Bid.updateStatus(this.sortBids[numberBid], status)
      if (result === 'Статус заявки изменён') {
        let str = '#bid-'
        str += numberBid
        const item = document.querySelector(str)
        item.style.display = 'none'
      }
    },
    successBid: async function (numberBid) {
      const date = new Date()
      let monthletter = ''
      if (date.getMonth() < 9) {
        monthletter = 0
      }
      let formatdatetimeNow = `${date.getDate()}${monthletter}${date.getMonth() + 1}${date.getFullYear()}${date.getHours()}${date.getMinutes()}`
      let status = ''
      if (formatdatetimeNow <= this.sortBids[numberBid]['datetime']) {
        status = 1
      } else {
        status = 2
      }
      let result = await Bid.updateStatus(this.idBids[numberBid], status)
      if (result === 'Статус заявки изменён') {
        let str = '#bid-'
        str += numberBid
        const item = document.querySelector(str)
        item.style.display = 'none'
      }
    }
  }
}
</script>

<style scoped>
  .bid-block {
    padding: 15px;
    background-color: rgba(145, 142, 142, .1);
    color: rgb(36, 36, 36);
    font-size: 16px;
    border-radius: 20px;
    margin-bottom: 25px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .title_head {
    text-align: right;
    font-weight: bold;
  }
  @media screen and (max-width: 1240px){
    .bid-block {
    font-size: 12px;
    }
  }
</style>
