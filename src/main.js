import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
import VueCookies from "vue-cookies"


Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.$cookies.config("1d")
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
