import Vue from 'vue'
import Vuelidate from "vuelidate"
import App from './App.vue'

import './layout/css/normalize.css'

Vue.use(Vuelidate);
Vue.config.devtools = true

new Vue({
  render: h => h(App)
}).$mount('#app')
