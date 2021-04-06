import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

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
           commit(this.getboard,res);
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
