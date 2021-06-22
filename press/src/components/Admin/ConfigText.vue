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
                <v-row no-gutters>
                <v-col class="d-flex justify-center mt-16 mb-5" cols="12">
                    <p style="color:white;" class="articleSubText mr-6">제안 및 문의 : contact@allground.co.kr</p>
                </v-col>
                <v-col class="d-flex justify-center my-5" cols="12">
                    <p @click="goto('/introduce')" style="color:white; cursor:pointer;" class="articleSubText mx-3">매체소개</p>
                    <p @click="goto('/introduce/help')" style="color:white; cursor:pointer;" class="articleSubText mx-3">불편신고</p>
                    <p @click="goto('/introduce/policy')" style="color:white; cursor:pointer;" class="articleSubText mx-3">청소년 보호정책</p>
                </v-col>
                <v-col cols>
                </v-col>
                <v-col class="d-flex justify-center mb-3" cols="12">
                    <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-2"> 대표전화:<br v-if="this.$vuetify.breakpoint.mdAndDown"> 02-6953-0618</p>
                    <v-divider style="border-color:white; height:13px;" class="mx-1 my-auto" inset vertical></v-divider>
                    <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-2"> 발행인:<br v-if="this.$vuetify.breakpoint.mdAndDown"> 이학진</p>
                    <v-divider style="border-color:white; height:13px;" class="mx-1 my-auto" inset vertical></v-divider>
                    <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-2"> 편집인:<br v-if="this.$vuetify.breakpoint.mdAndDown"> 문찬호</p>
                    <v-divider style="border-color:white; height:13px;" class="mx-1 my-auto" inset vertical></v-divider>
                    <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleTinyText pa-2"> 청소년보호정책책임자:<br v-if="this.$vuetify.breakpoint.mdAndDown"> 홍길동</p>
                </v-col>
                <v-col class="mb-5" cols="12">
                    <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleSubText pa-2">경기도 고양시 덕양구 삼송로 222 현대헤리엇 335호 (주) 올그라운드</p>
                    <p style="color:rgba(255,255,255,.8); text-align:center;" class="articleSubText pa-2"> Copyright © 2021 By allground.co.,ltd .All rights reserved.</p>
                </v-col>
                </v-row>
            </div>
        </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="my-5">
        <v-expansion-panel-header><p class="mainSubText">소개페이지 수정</p></v-expansion-panel-header>
        <v-expansion-panel-content>
            <ConfigEdit/>
        </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
        </v-col>
    </v-row>
</div>
</template>

<script>
import ConfigEdit from '@/components/Admin/ConfigEdit'
export default {
    components:{
        ConfigEdit,
    },
    data(){
        return{
            panel: [0,1],
        }
    },
    mounted() {
        this.panel = [];
    },
}
</script>

<style>
</style>

<style scoped>
@import url("../../assets/css/unify.css");
</style>