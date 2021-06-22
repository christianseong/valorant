<template>
  <div class="IntroduceFooter mt-10" style="position:absolute; width:100vw; left:0; background-color:#0C9045;">
    <v-row no-gutters>
      <v-col class="d-flex justify-center py-6" cols="12">
        <p style="color:white;" class="articleTinyText mx-3">©<br v-if="this.$vuetify.breakpoint.smAndDown">올데이풋볼</p>
        <p style="color:rgba(255,255,255,.8);" class="articleTinyText mx-3">경기도 고양시 덕양구 삼송로 222현대헤리엇 335호<br v-if="this.$vuetify.breakpoint.smAndDown">(주) 올그라운드</p>
        <p style="color:rgba(255,255,255,.8);" class="articleTinyText mx-3">대표전화:<br v-if="this.$vuetify.breakpoint.smAndDown"> 02-6953-0618</p>
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