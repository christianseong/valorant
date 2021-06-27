<template>
  <div class="Footer mt-10" style="width:100%; background-color:#0C9045;">
    <v-row v-if="!this.$vuetify.breakpoint.smAndDown" no-gutters>
      <v-col class="d-flex justify-center mt-16 mb-5" cols="12">
        <p style="color:white;" class="articleSubText mr-6">제안 및 문의 : {{email}}</p>
      </v-col>
      <v-col class="d-flex justify-center my-5" cols="12">
        <p @click="goto('/introduce')" style="color:white; cursor:pointer;" class="articleSubText mx-3">매체소개</p>
        <p @click="goto('/introduce/help')" style="color:white; cursor:pointer;" class="articleSubText mx-3">불편신고</p>
        <p @click="goto('/introduce/policy')" style="color:white; cursor:pointer;" class="articleSubText mx-3">청소년 보호정책</p>
      </v-col>
      <v-col cols>
      </v-col>
      <v-col class="d-flex justify-center mb-3" cols="12">
        <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-2"> 대표전화: {{tel}}</p>
        <v-divider style="border-color:white; height:13px;" class="mx-1 my-auto" inset vertical></v-divider>
        <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-2"> 발행인: {{pub}}</p>
        <v-divider style="border-color:white; height:13px;" class="mx-1 my-auto" inset vertical></v-divider>
        <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-2"> 편집인: {{edi}}</p>
        <v-divider style="border-color:white; height:13px;" class="mx-1 my-auto" inset vertical></v-divider>
        <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-2"> 청소년보호정책책임자: {{pol}}</p>
      </v-col>
      <v-col class="mb-5" cols="12">
        <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleSubText pa-2">{{add}}</p>
        <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleSubText pa-2"> Copyright © 2021 By allground.co.,ltd .All rights reserved.</p>
      </v-col>
    </v-row>
    <v-row v-if="this.$vuetify.breakpoint.smAndDown" no-gutters>
      <v-col class="d-flex justify-center my-5" cols="12">
        <p @click="goto('/introduce')" style="color:white; cursor:pointer;" class="mx-3 articleTinyText">매체소개</p>
        <p @click="goto('/introduce/help')" style="color:white; cursor:pointer;" class="mx-3 articleTinyText">불편신고</p>
        <p @click="goto('/introduce/policy')" style="color:white; cursor:pointer;" class="mx-3 articleTinyText">청소년 보호정책</p>
      </v-col>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header color="#0C9045">
            <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1">사업자 정보</p>
          </v-expansion-panel-header>
          <v-expansion-panel-content color="#0C9045">
            <v-col class="mb-3" cols="12">
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 대표전화: {{tel}}</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 발행인: {{pub}}</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 편집인: {{edi}}</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-1"> 청소년보호정책책임자: {{pol}}</p>
            </v-col>
            <v-col class="mb-5" cols="12">
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-2">{{add}}</p>
              <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-2"> Copyright © 2021 By allground.co.,ltd .All rights reserved.</p>
            </v-col>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
  data(){
    return{
      email:'',
      tel:'',
      pub:'',
      edi:'',
      pol:'',
      add:''
    }
  },
  mounted(){
    this.getConfig();
  },
  methods:{
    goto(r){
      location.href=r;
    },
    getConfig(){
      axios.post('http://alldayfootball.co.kr/api/config/findone',{
        id:"60d6b0c44dcc9e16fc936574"
      })
      .then((res)=>{
        this.email = res.data.info.email;
        this.tel = res.data.info.tel;
        this.pub = res.data.info.pub;
        this.edi = res.data.info.edi;
        this.pol = res.data.info.pol;
        this.add = res.data.info.add;
      })
    },
  },
}
</script>

<style scoped>
@import url("../assets/css/unify.css");

</style>