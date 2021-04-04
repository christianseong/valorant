<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
 import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
     Header,
  }
}
</script>

<style>
#app {
  position: relative;
  display: block;
  top:0;
  left:0;
  width: 100%;
  height: 1000px;

    /*background-image: url("https://post-phinf.pstatic.net/MjAyMDA2MDJfMTcz/MDAxNTkxMTAzNzQ4NzU3.vW22HTXpkYkfp1B2Nc1dkeDjiJLIKtUhBTAenmPlHZYg.jjXCeA7PGsHjD81cynrf6nhYRxGTg4v6KhO-R2dH9tAg.JPEG/VALORANT_Jett_Type_%EB%B3%B5%EC%82%AC.jpg?type=w1200");*/
    background-repeat: no-repeat;
    background-size: cover;
}


</style>
