import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Particles from "particles.vue";

// this adds the particles plugin to Vue.js
Vue.use(Particles);