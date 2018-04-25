import Vue from 'vue'
import Watch from './Watch.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#sample-watch',
  template: '<Watch/>',
  components: { Watch }
})
