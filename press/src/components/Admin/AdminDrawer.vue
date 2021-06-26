<template>
    <v-navigation-drawer
    absolute
    stateless
    v-model="adminDrawerBool"
    color="rgba(0,0,0,.8)"
    id="Admindrawer"
    style="top:55px; z-index:3;"
    :width="DrawerWidth"
    >
      <v-row no-gutters>
        <v-col v-if="this.$vuetify.breakpoint.mdAndDown" cols="12">
          <v-card elevation="0" class="transparent d-flex justify-end"><v-icon @click="close" class="mr-5 mt-2" color="white">mdi-exit-to-app</v-icon></v-card>
        </v-col>
        <v-col class="d-flex justify-center mt-5" cols="12">
          <v-card width="125px" height="125px" color="rgba(88,211,88,.17)" rounded="circle">
            <v-img height="100%" width="100%" :src="userData.photo"></v-img>
          </v-card>
        </v-col>
        <v-col class="d-flex justify-center" cols="12">
          <p class="subText" style="color:white;">{{userData.name}}<span class="ml-5 listTinyText">{{userData.id}}</span></p>
        </v-col>
        <v-col class="d-flex justify-center my-5" cols="12">
          <v-btn @click="logout" color="white" outlined><v-icon>mdi-logout</v-icon>로그아웃</v-btn>
        </v-col>
      </v-row>
      <v-divider style="background-color:white;"></v-divider>
    
    <!-- 메뉴 부분 ㅇㅅㅇ -->
      <v-list nav>
        <v-list-item active-class="activeList" v-for="i in menuList" :key="i.title" link :to="i.to">
        <v-list-item-content>
          <v-list-item-title style="color:white; text-align:center;" class="subText my-1"><p><v-icon color="white" class="mr-2">{{`mdi-${i.icon}`}}</v-icon>{{i.title}}</p></v-list-item-title>
        </v-list-item-content>
        </v-list-item>
        <v-list-group active-class="activeList" color="transparent" :value="true">
              <template slot="appendIcon">
                <v-icon color="white">mdi-chevron-down</v-icon>
            </template>
            <template v-slot:activator>
              <v-list-item-title style="color:white; text-align:center;" class="subText ma-0 ml-8"><v-icon color="white" class="mr-2">mdi-cog</v-icon>환경설정</v-list-item-title>
            </template>
            <v-list-item-content v-for="(i,idx) in subMenu" :key="idx">
              <v-list-item-title @click="gotoList(i.to)" style="color:white; text-align:center; cursor:pointer" class="subText"><v-icon color="white" class="mr-2">{{`mdi-${i.icon}`}}</v-icon>{{i.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-group>
      </v-list>
    <!-- 메뉴 부분 ㅇㅅㅇ -->
    </v-navigation-drawer>
</template>

<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
  data(){
    return{
      userData:{name:'',id:'',photo:''},
      menuList:[
          {title:"기사관리",to:"/admin/article",icon:"newspaper-variant-multiple"},
          {title:"광고관리",to:"/admin/ad",icon:"bullhorn"},
          {title:"계정관리",to:"/admin/accout",icon:"account-cog"},
          // {title:"환경설정",to:"/admin/etc"},
      ],
      subMenu:[
        {title:'문구관리',to:"/admin/configtext",icon:"text"},
      ],
    }
  },
  mounted(){
    axios.get('http://alldayfootball.co.kr/api/auth/check')
    .then((res)=>{
      this.userData.name=res.data.info.name;
      this.userData.id=res.data.info.id;
      if(res.data.info.photo===''||res.data.info.photo===null||res.data.info.photo===undefined) this.userData.photo = 'https://kr.object.ncloudstorage.com/alldayfootball/defalut/defalut.png'
      else this.userData.photo=res.data.info.photo;
    })
  },
  methods:{
    logout(){
      axios.get('http://alldayfootball.co.kr/api/auth/logout')
      .then((res)=>{
        if(res.data==='logged_out'){
            alert('로그아웃 되었습니다.');
            location.href='/';
        }
      })
    },
    gotoList(to){
      location.href=to;
    },
    close(){
      this.adminDrawerBool=false;
    },
  },
  computed:{
    DrawerWidth(){  
        switch(this.$vuetify.breakpoint.name){
            case 'xs' : return "80%";
            case 'sm' : return "80%";
            case 'md' : return "80%";
            case 'lg' : return "15%";
            case 'xl' : return "15%";
            default : return "15%";
        }
    },
    adminDrawerBool:{
      get(){
        return this.$store.state.adminDrawerBool;
      },
      set(bool){
        return this.$store.commit('set_adminDrawerBool',bool);
      },
    },
    breakPoint(){
      return this.$vuetify.breakpoint.name;
    },
  },
  watch:{
    breakPoint(){
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return this.$store.commit('set_adminDrawerBool',false);
          case 'sm': return this.$store.commit('set_adminDrawerBool',false);
          case 'md': return this.$store.commit('set_adminDrawerBool',false);
          case 'lg': return this.$store.commit('set_adminDrawerBool',true);
          case 'xl': return this.$store.commit('set_adminDrawerBool',true);
        }
    },
  },
  

}
</script>

<style scoped>
@import url("../../assets/css/unify.css");
.activeList{
  border-left:2px solid white;
}
</style>
