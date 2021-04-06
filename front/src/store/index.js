import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards:[],
  },
  mutations: {
    getboard(state,payload){
      state.boards = payload;
    }
  },
  actions: {
    GetBoard({commit})
    {
        axios.get('http://localhost:3000/getboard',{
            headers :{
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset = utf-8'
            }
        })
        .then((res) => {
           commit('getboard',res.data);
        })
        .catch((err)=>{
            console.error(err);
        });
    }
  },
  modules: {
  },
  getters:{
  },
})
