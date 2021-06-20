import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerBool:false,
    adminDrawerBool:true,
  },
  mutations: {
    set_drawerBool(state,bool){
      state.drawerBool = bool;
    },
    set_adminDrawerBool(state,bool){
      state.adminDrawerBool = bool;
    },
  },
  actions: {
  },
  modules: {
  }
})
