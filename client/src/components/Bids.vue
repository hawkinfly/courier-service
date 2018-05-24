<template>
  <v-container>
    <v-layout row justify-center v-if="user == 'administrator'">
      <v-flex md6 lg4 xl4 v-if="arrayBids !== 'Ошибка получения заявок'">
        <div class="bid-block" v-for="(value, key) in arrayBids" :key="key" :id="'bid-' + key">
          <v-layout row justify-center>
            <v-flex xs3 class="title_head">
              Товар:
            </v-flex>
            <v-flex xs10>
              &#160;{{ value.product }}
            </v-flex>
          </v-layout>
          <v-layout row justify-center>
            <v-flex xs3 class="title_head">
              Стоимость:
            </v-flex>
            <v-flex xs10>
              &#160;{{ value.cost }}
            </v-flex>
          </v-layout>
          <v-layout row justify-center>
            <v-flex xs3 class="title_head">
              Адрес:
            </v-flex>
            <v-flex xs10>
              &#160;{{ value.address }}
            </v-flex>
          </v-layout>
          <v-layout row justify-center>
            <v-flex xs3 class="title_head">
              Дата и время:
            </v-flex>
            <v-flex xs10>
              &#160;{{ value.datetime.slice(0, 2) + '/' + value.datetime.slice(2, 4) + '/' + value.datetime.slice(4, 8) + ' ' + value.datetime.slice(8, 10) + ':' + value.datetime.slice(10, 12) }}
            </v-flex>
          </v-layout>
          <v-layout row justify-center>
            <v-flex xs3 class="title_head">
              Телефон:
            </v-flex>
            <v-flex xs10>
              &#160;{{ value.phoneNumber }}
            </v-flex>
          </v-layout>
          <v-layout row justify-center>
            <v-flex xs3 class="title_head">
              Курьер:
            </v-flex>
            <v-flex xs10 :id="'my-' + key">
             &#160;{{ courier[key] }}
            </v-flex>
          </v-layout>
          <v-layout row justify-center>
            <v-flex xs3 class="title_head">
              Примечание:
            </v-flex>
            <v-flex xs10>
              <template v-if="value.note">
                &#160;{{ value.note }}
              </template>
              <template v-else>
                &#160;Нет примечания
              </template>
            </v-flex>
          </v-layout>
          <v-layout row justify-center align-center>
            <v-btn fab dark small color="red" title="Удалить заявку" @click="removeBid(key)">
              <v-icon dark>delete</v-icon>
            </v-btn>
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
      this.courier.push(result)
      this.idBids.push(this.arrayBids[i]['_id'])
    }
  },
  data: () => ({
    user: '',
    arrayBids: null,
    courier: [],
    idBids: []
  }),
  methods: {
    removeBid: async function (numberBid) {
      let result = await Bid.deleteBid(this.idBids[numberBid])
      if (result === 'Заявка успешно удалена') {
        const str = 'bid-' + toString(numberBid)
        let item = document.getElementById(str)
        item.style.display = 'none'
      }
    },
    cancelBid (numberBid) {
      console.log('Это ' + numberBid)
    },
    successBid (numberBid) {
      console.log('Это ' + numberBid)
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
</style>
