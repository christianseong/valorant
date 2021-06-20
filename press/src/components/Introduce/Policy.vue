<template>
<div class="policy">
    <v-row class="mt-16">
        <v-col class="d-flex justify-center" cols="12">
            <p class="titleText">약관 및 정책</p>
        </v-col>
        <v-col class="d-flex justify-center my-16" cols="12">
            <div style="width:100%;" v-html="this.contents">

            </div>
        </v-col>
        <!-- <v-col class="mx-auto" cols="10">
            <p class="listSubText">청소년보호 책임자</p>
        </v-col>
        <v-col style="border-top:1px solid rgba(0,0,0,.1);" class="mx-auto" cols="10">
            <v-row>
                <v-col class="d-flex justify-center" style="border-bottom:1px solid rgba(0,0,0,.1); border-right:1px solid rgba(0,0,0,.1);" cols="3">
                    <p class="listSubText">성명</p>
                </v-col>
                <v-col class="d-flex align-center" style="border-bottom:1px solid rgba(0,0,0,.1);" cols="9">
                    <p class="listTinyText">홍길동</p>
                </v-col>
                <v-col class="d-flex justify-center" style="border-bottom:1px solid rgba(0,0,0,.1); border-right:1px solid rgba(0,0,0,.1);" cols="3">
                    <p class="listSubText">전화번호</p>
                </v-col>
                <v-col class="d-flex align-center" style="border-bottom:1px solid rgba(0,0,0,.1);" cols="9">
                    <p class="listTinyText">02-6953-0618</p>
                </v-col>
                <v-col class="d-flex justify-center" style="border-bottom:1px solid rgba(0,0,0,.1); border-right:1px solid rgba(0,0,0,.1);" cols="3">
                    <p class="listSubText">E-mail</p>
                </v-col>
                <v-col class="d-flex align-center" style="border-bottom:1px solid rgba(0,0,0,.1);" cols="9">
                    <p class="listTinyText">contact@allground.co.kr</p>
                </v-col>
            </v-row>
        </v-col> -->
    </v-row>
    <div style="height:25vh;"></div>
</div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
    mounted(){
        axios.post('http://alldayfootball.co.kr/api/settingboard/findone',{
                id:"60ce9a4fb7062e4c6c092cb5"
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

}
</script>

<style>

</style>