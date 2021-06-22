<template>
<div class="media">
    <div class="d-flex justift-center mt-6">
        <div @click="goto('/introduce')" :class="{'grey darken-2':tab}" class="d-flex justify-center align-center pa-2" style="width:50%; outline:1px solid rgba(0,0,0,.3); cursor:pointer;">
            <p :style="{color:this.tabColor}" class="headerText">매체소개</p>
        </div>
        <div :class="{'grey darken-2':!tab}" @click="goto('/introduce?tab=1')" class="d-flex justify-center pa-2 align-center" style="width:50%; outline:1px solid rgba(0,0,0,.3); cursor:pointer;">
            <p :style="{color:this.tabColor2}" style="text-align:center;" class="headerText">찾아오시는 길</p>
        </div>
    </div>

    <v-row class="mt-16" v-if="tab">
        <v-col class="d-flex justify-center" cols="12">
            <p class="mainText">매체소개</p>
        </v-col>
        <v-col class="d-flex justify-center my-15" cols="12">
            <div style="width:100%; min-height:60vh;" v-html="this.contents">

            </div>
        </v-col>
        <!-- <v-col class="d-flex justify-center" cols="12">
            <p class="listText">2010년 2월 설립된 (주)인터풋볼은 No.1 축구 미디어로서 전문기자들이 국내외 축구 소식을 빠르고 심도 있게 전달하며 
            <br>대한민국 축구의 발전을 위한 역할을 다하고 있습니다.</p>
        </v-col>
        <v-col cols="12">
            <div style="height:600px; width:100%; background-color:red"></div>
        </v-col> -->
    </v-row>

    <v-row class="my-16" v-if="!tab">
        <v-col class="d-flex justify-center" cols="12">
            <p class="mainText">찾아오시는 길</p>
        </v-col>
        <v-col class="d-flex justify-center my-5" cols="12">
            <v-card :width="mapHeight" height="40vh">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.8342680606725!2d126.89337031564983!3d37.653
              100226922916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c975564a8049d%3A0xe1337ec378777c1c!2z7IK87Iah7J
              et7ZiE64yA7Zek66as7JeH!5e0!3m2!1sko!2skr!4v1619678132310!5m2!1sko!2skr" width="100%" height="100%"></iframe>
            </v-card>
        </v-col>
        <v-col class="d-flex justify-center" cols="12">
            <p class="sliderTitleText">경기도 고양시 덕양구 삼송로 222 현대헤리엇 335호 (주) 올그라운드</p>
        </v-col>
        <v-col class="d-flex justify-center" cols="12">
            <p class="sliderTitleText">대표전화: 02-6953-0618</p>
        </v-col>
    </v-row>
</div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
    mounted(){
        axios.post('http://alldayfootball.co.kr/api/settingboard/findone',{
                id:"60ce99f5b7062e4c6c092cb3"
            })
            .then((res)=>{
                this.contents = res.data.contents;
            })
    },
    data(){
        return{
            contents:"",
        }
    },
    methods:{
        goto(n){
            location.href=n;
        },
    },
    computed:{
        mapHeight(){
            switch(this.$vuetify.breakpoint.name){
                case 'xs' :return '100%'
                case 'sm' :return '100%'
                case 'md': return '80%'
                case 'lg': return '70%'
                case 'xl': return '70%'
                default: return '100%'
            }
        },
        tab(){
            if(this.$route.query.tab===undefined) return true;
            return false;
        },
        tabColor(){
            if(this.$route.query.tab===undefined) return 'white';
            return '#737475'; 
        },
        tabColor2(){
            if(this.$route.query.tab===undefined) return '#737475';
            return 'white'; 
        },
    },
}
</script>

<style scoped>
@import url("../../assets/css/unify.css");
</style>