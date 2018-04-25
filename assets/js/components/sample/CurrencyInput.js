import Vue from 'vue'
import CurrencyInput from './CurrencyInput.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#sample-currency',
  delimiters: ['${', '}'],
  data: {
    price: 0,
    shipping: 0,
    handling: 0,
    discount: 0
  },
  computed: {
    total: function () {
      return ((
        this.price * 100 +
        this.shipping * 100 +
        this.handling * 100 -
        this.discount * 100
      ) / 100).toFixed(2)
    }
  },
  components: {
    CurrencyInput
  }
})
