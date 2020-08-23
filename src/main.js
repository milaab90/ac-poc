import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';

//talwind/scss files
import '@/assets/css/tailwind.css'
import '@/assets/scss/main.scss';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
