<template>
<!-- 로딩할때 나오는 페이지임!! 여기를 조정하면 로딩을 커스텀 삽가눙 ㅇㅅㅇ  -->
<div v-show="loading">
  <v-overlay color="black" opacity=".8">
    <v-card elevation="0" width="100px" height="100px" color="transparent">
      <v-card id="aftercard" style="position:absolute;" width="100%" height="100%" class="d-flex justify-center overflow-y-hidden align-slef-end" elevation="0" color="transparent">
      <img src="@/assets/logo/animationlogo_resize.gif" id="gif" height="50px">
      </v-card>
      <!-- <div style="position:absolute;" class="t"></div> -->
    </v-card>
  </v-overlay>
</div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  computed:{
    loading(){ // << 요놈이랑 v-if 처리되있음 ㅇㅅㅇ //
      return this.$store.state.loading;
    },
  },
  watch:{
    loading(){
    var gif = document.getElementById('gif');
    gif.src = "";
    gif.src = require('@/assets/logo/animationlogo_resize.gif');
    }
  },
}
</script>

<style scoped>
  /* .t {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    filter: blur(10px);
    opacity: 0;
    animation: flash 1s ease-out alternate infinite;
    border-radius: 300px;
  } */
  #logoimg{
    /* display: none; */
  }
/* @keyframes flash{
  to {
    opacity: .99;
  }
} */
</style>