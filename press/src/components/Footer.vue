<template>
  <div class="Footer mt-10" style="width:100%; background-color:#0C9045;">
    <v-row no-gutters>
      <v-col class="d-flex justify-center mt-16 mb-8" cols="12">
        <p style="color:white;" class="tinyTitleText mr-6">제안 및 문의 : contact@allground.co.kr</p>
        <p @click="goto('/introduce')" style="color:white; cursor:pointer;" class="tinyTitleText mx-3">매체소개</p>
        <p @click="goto('/introduce/help')" style="color:white; cursor:pointer;" class="tinyTitleText mx-3">불편신고</p>
        <p @click="goto('/introduce/policy')" style="color:white; cursor:pointer;" class="tinyTitleText mx-3">청소년 보호정책</p>
      </v-col>
      <v-col cols>
      </v-col>
      <v-col class="d-flex justify-center mb-3" cols="12">
        <p style="color:rgba(255,255,255,.8); text-align:center;" class="listSubText pa-2"> 대표전화: 02-6953-0618</p>
        <v-divider style="border-color:white; height:13px;" class="mx-1 my-auto" inset vertical></v-divider>
        <p style="color:rgba(255,255,255,.8); text-align:center;" class="listSubText pa-2"> 발행인: 이학진</p>
        <v-divider style="border-color:white; height:13px;" class="mx-1 my-auto" inset vertical></v-divider>
        <p style="color:rgba(255,255,255,.8); text-align:center;" class="listSubText pa-2"> 편집인: 문찬호</p>
        <v-divider style="border-color:white; height:13px;" class="mx-1 my-auto" inset vertical></v-divider>
        <p style="color:rgba(255,255,255,.8); text-align:center;" class="listSubText pa-2"> 청소년보호정책책임자: 홍길동</p>
      </v-col>
      <v-col class="mb-5" cols="12">
        <p style="color:rgba(255,255,255,.8); text-align:center;" class="listSubText pa-2">경기도 고양시 덕양구 삼송로 222 현대헤리엇 335호 (주) 올그라운드</p>
        <p style="color:rgba(255,255,255,.8); text-align:center;" class="listSubText pa-2"> Copyright © 2003 By allground.co.,ltd .All rights reserved.</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

  methods:{
    goto(r){
      location.href=r;
    },
  },
}
</script>

<style scoped>
@import url("../assets/css/unify.css");

</style>