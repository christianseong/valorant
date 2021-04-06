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


 <style scoped>
 #app{
   position: relative;
   width: 100%;
   height: 100%;
 }
</style>
