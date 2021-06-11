<template>
<div v-scroll="onScroll" class="screen">
  <v-app>
    <Header v-if="!isAdmin" />
    <Drawer/>
    <v-main>
      <!-- <div style="height:100%;" class="d-flex mt-5">
        <div v-if="!this.$vuetify.breakpoint.mdAndDown && !isAdmin " class="mx-auto" style="width:10%; height:100%;">
          <div :style="{top:adTop}" style="position:absolute; width:inherit; height:600px; transition: " class="ad purple">광고1</div>
        </div> -->
        <router-view :style="{width:ContentWidth}" />
        <!-- <div v-if="!this.$vuetify.breakpoint.mdAndDown && !isAdmin" class="mx-auto" style="width:10%; height:100%;">
          <div :style="{top:adTop}" style="position:absolute; width:inherit; height:600px; transition:" class="ad purple">광고2</div>
        </div>
      </div> -->
      <Footer v-if="!isAdmin"/>
    </v-main>
  </v-app>
</div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer.vue'
import Drawer from '@/components/Drawer.vue'
export default {
  name: 'App',
  components:{
    Drawer,
    Header,
    Footer
  },
  data(){
    return{
      scrollTop:0,
      adTop:0,
    }
  },
  mounted(){
  },
  computed:{
    ContentWidth(){  
      if(window.location.href.includes('admin')) return '100%';
        switch(this.$vuetify.breakpoint.name){
            case 'xs' : return "95%";
            case 'sm' : return "95%";
            case 'md' : return "95%";
            case 'lg' : return "60%";
            case 'xl' : return "60%";
            default : return "60%";
        }
    },
    isAdmin(){
      if(window.location.href.includes('admin')||window.location.href.includes('introduce')) return true;
      return false;
    }
  },

  methods:{
    onScroll(){
      this.scrollTop=document.body.parentNode.scrollTop;
    },
  },
  watch:{
    scrollTop(oldVal,newVal){
      if(this.$vuetify.breakpoint.mdAndDown||window.location.href.includes('admin')||window.location.href.includes('introduce')) return;
      var footer = document.getElementsByClassName('Footer')[0].getBoundingClientRect().top+window.pageYOffset-850;
      if(newVal<20){
          setTimeout(() => {
          this.adTop='0px';
        }, 1);
      }
      if(newVal<footer){
        setTimeout(() => {
          this.adTop=`${newVal+25}px`;
        }, 1);
      }
      else{
          setTimeout(() => {
          this.adTop=`${footer-25}px`;
        }, 1);
      }
    },
  },
};
</script>

<style>
.v-application p{
  margin:0;
}
.screen{
  padding-top:30px;
}
</style>
