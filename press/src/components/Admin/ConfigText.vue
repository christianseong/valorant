<template>
<div class="ConfigText">
    <v-row class="my-5">
        <v-col cols="12">
            <p class="mainText">문구관리</p>
        </v-col>
        <v-col cols="12">
    <v-expansion-panels v-model="panel" multiple focusable>
        <v-expansion-panel class="my-5">
        <v-expansion-panel-header><p class="mainSubText">Footer 수정</p></v-expansion-panel-header>
        <v-expansion-panel-content>
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
            <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                    <p class="sliderTitleText">제안 및 문의 :</p>
                </v-col>
                <v-col cols="auto">
                    <v-text-field solo v-model="email" label="email" hide-details></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                    <p class="sliderTitleText">대표전화 :</p>
                </v-col>
                <v-col cols="auto">
                    <v-text-field solo v-model="tel" label="전화번호" hide-details></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                    <p class="sliderTitleText">발행인 :</p>
                </v-col>
                <v-col cols="auto">
                    <v-text-field solo v-model="pub" label="발행인" hide-details></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                    <p class="sliderTitleText">편집인 :</p>
                </v-col>
                <v-col cols="auto">
                    <v-text-field solo v-model="edi" label="편집인" hide-details></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                    <p class="sliderTitleText">청소년보호정책책임자 :</p>
                </v-col>
                <v-col cols="auto">
                    <v-text-field solo v-model="pol" label="정책책임자" hide-details></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                    <p class="sliderTitleText">주소 :</p>
                </v-col>
                <v-col cols="12" lg="8">
                    <v-text-field solo v-model="add" label="주소" hide-details></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center" cols="12">
                    <v-btn class="ma-3" @click="clickEdit" color="#509F3F"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">수정하기</p></v-btn>
                </v-col>
            </v-row>
        </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="my-5">
        <v-expansion-panel-header><p class="mainSubText">소개페이지 수정</p></v-expansion-panel-header>
        <v-expansion-panel-content>
            <ConfigEdit/>
        </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="my-5">
        <v-expansion-panel-header><p class="mainSubText">메인기사 지정</p></v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                    <p class="sliderTitleText">첫번째 기사:</p>
                </v-col>
                <v-col cols="auto">
                    <v-text-field solo v-model="mainArt0" label="첫번째 기사" hide-details></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                    <p class="sliderTitleText">두번째 기사:</p>
                </v-col>
                <v-col cols="auto">
                    <v-text-field solo v-model="mainArt1" label="두번째 기사" hide-details></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-5 d-flex align-center" no-gutters>
                <v-col class="mx-5" lg="2" cols="12">
                    <p class="sliderTitleText">세번째 기사:</p>
                </v-col>
                <v-col cols="auto">
                    <v-text-field solo v-model="mainArt2" label="세번째 기사" hide-details></v-text-field>
                </v-col>

            <v-row>
                <v-col class="d-flex justify-center" cols="12">
                    <v-btn class="ma-3" @click="clickEdit2" color="#509F3F"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">수정하기</p></v-btn>
                </v-col>
            </v-row>
            </v-row>
        </v-expansion-panel-content>
        </v-expansion-panel>

    </v-expansion-panels>
        </v-col>
    </v-row>
</div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
import ConfigEdit from '@/components/Admin/ConfigEdit'
export default {
    components:{
        ConfigEdit,
    },
    data(){
        return{
            panel: [0,1],
            email:"",
            tel:"",
            pub:"",
            edi:"",
            pol:"",
            add:"",
            mainArt0:0,
            mainArt1:1,
            mainArt2:2,
            
        }
    },
    mounted() {
        this.getConfig();
        this.panel = [];
    },
    methods:{
        clickEdit(){
            axios.put('http://alldayfootball.co.kr/api/config/edit',{
                id:"60d6b0c44dcc9e16fc936574",
                info:this.info
            })
            .then((res)=>{
                if(res.data==="updated"){
                    alert('수정되었습니다.');
                    location.reload();
                }
            })
        },
        clickEdit2(){
            if(this.mainArt0===""){
                alert('첫번째 기사를 지정해주세요.')
                return;
            }
            if(this.mainArt1===""){
                alert('두번째 기사를 지정해주세요.')
                return;
            }
            if(this.mainArt2===""){
                alert('세번째 기사를 지정해주세요.')
                return;
            }
            var suc = true;
            for(var i =0; i<3; i++){
                const cur = this.info2[i];
                for(var o=0; o<3; o++){
                    if(cur===this.info2[o]){
                        suc = false;
                        break;
                    }
                }
                if(suc===false) break;
            }
            if(suc===false){
                alert('중복으로 지정할 수 없습니다.')
                return;
            }
            axios.put('http://alldayfootball.co.kr/api/config/edit',{
                id:"60d8f5569d4b9d6bafe4205e",
                info:this.info2
            })
            .then((res)=>{
                if(res.data==="updated"){
                    alert('수정되었습니다.');
                    location.reload();
                }
            })
        },
        getConfig(){
        axios.get('http://alldayfootball.co.kr/api/config/find')
        .then((res)=>{
            this.email = res.data[0].info.email;
            this.tel = res.data[0].info.tel;
            this.pub = res.data[0].info.pub;
            this.edi = res.data[0].info.edi;
            this.pol = res.data[0].info.pol;
            this.add = res.data[0].info.add;
            this.mainArt0 = res.data[1].info[0];
            this.mainArt1 = res.data[1].info[1];
            this.mainArt2 = res.data[1].info[2];
        })
        },
    },
    computed:{
        info(){
            return {email:this.email,tel:this.tel,pub:this.pub,edi:this.edi,pol:this.pol,add:this.add};
        },
        info2(){
            return [this.mainArt0,this.mainArt1,this.mainArt2];
        },
    },
}
</script>

<style>
</style>

<style scoped>
@import url("../../assets/css/unify.css");
</style>