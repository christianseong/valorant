<template>
  <v-app>
    <Nav/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',

  components:{
    Nav,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>

<style>
@import url("./assets/css/unify.css");
a{
    text-decoration: none;
}
*{
  font-family: 'Noto Sans KR', sans-serif;
}
.v-application p{
  margin-bottom: 0;
}
</style>
