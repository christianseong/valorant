<template>
<div>
  <v-timeline dense>
    <v-timeline-item v-for="(i, idx) in boardResult" :key="idx" color="white" small>
        <template v-slot:icon>
          <v-icon dark></v-icon>
        </template>
      <div class="py-2" style="width:80%;">
        <v-card rounded="0" class="pa-2" color="#0C9045">
            <p style="color:white;" class="articleTinyText">{{i.regTime.slice(0,16).replace('T','｜')}}</p>
        </v-card>
        <v-card rounded="0" class="pa-3" @click="goToView(i.seq)">
          <p style="color:black;" class="articleTinyText">{{i.title}}</p>
        </v-card>
      </div>
    </v-timeline-item>
  </v-timeline>
</div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
    data(){
        return{
            boardResult:[],
        }
    },
    created(){
        this.takeBoard();
    },
    methods:{
        takeBoard(){
        axios.post('http://alldayfootball.co.kr/api/board/takeboard',{
            bNum: null,
            limit: 5,
            page: 1,
            word:""
            })
            .then((res=>{
                this.boardResult = res.data.docs;
            }))
        },
        goToView(num){
            location.href=`/articleView?num=${num}`;
        },
    },

}
</script>


<style scoped>
@import url("../assets/css/unify.css");

</style>