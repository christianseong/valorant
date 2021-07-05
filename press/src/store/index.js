import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerBool:false,
    adminDrawerBool:true,
    loading:true,
  },
  mutations: {
    set_drawerBool(state,bool){
      state.drawerBool = bool;
    },
    set_adminDrawerBool(state,bool){
      state.adminDrawerBool = bool;
    },
    set_loading(state,bool){
      state.loading = bool;
    },
  },
  actions: {
  },
  modules: {
  }
})
