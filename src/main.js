import Vue from 'vue'

import App from './App'

import router from './router'

import ElementUi from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(ElementUi)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
