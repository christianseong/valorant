<template>
  <div class="IntroduceFooter mt-10" style="position:absolute; width:100vw; left:0; background-color:#0C9045;">
    <v-row no-gutters>
      <v-col class="d-flex justify-center py-6" cols="12">
        <p style="color:white;" class="listTinyText mx-3">© 올데이풋볼</p>
        <p style="color:rgba(255,255,255,.8);" class="listTinyText mx-3">경기도 고양시 덕양구 삼송로 222 현대헤리엇 335호 (주) 올그라운드</p>
        <p style="color:rgba(255,255,255,.8);" class="listTinyText mx-3">대표전화: 02-6953-0618</p>
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
@import url("../../assets/css/unify.css");

</style>