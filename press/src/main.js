import 'babel-polyfill'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCookies from "vue-cookies"

Vue.config.productionTip = false;
Vue.use(VueCookies)
Vue.use(VueHead)
Vue.$cookies.config("1d")
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
