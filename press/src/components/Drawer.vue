<template>
    <v-navigation-drawer
    app
    disable-resize-watcher
    v-model="drawerBool"
    temporary
    color="black"
    id="drawer"
    >
    <!-- 로고 부분 (to /main) ㅇㅅㅇ -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-card class="transparent d-flex justify-end"><v-icon @click="close" color="white">mdi-exit-to-app</v-icon></v-card>
            <v-card height="100px" class="ma-0 pa-0" color="transparent" to="/"><v-img height="100%" contain src="@/assets/logo/logo.png"></v-img></v-card>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    <!-- 로고 부분 (to /main) ㅇㅅㅇ -->
      <v-divider style="background-color:white;"></v-divider>
    
    <!-- 메뉴 부분 ㅇㅅㅇ -->
      <v-list nav>
        <v-list-item class="custom justify-center">
          <v-list-group color="transparent" :value="true">
              <template slot="appendIcon">
                <v-icon color="white">mdi-chevron-down</v-icon>
            </template>
            <template v-slot:activator>
              <v-list-item-title style="color:white; text-align:center;" class="mainText ma-0 ml-8">집중 취재</v-list-item-title>
            </template>
            <v-list-item-content v-for="(i,idx) in subMenu" :key="idx">
              <v-list-item-title @click="gotoList(i.to)" style="color:white; text-align:center;" class="mainText">{{i.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-group>
        </v-list-item>
        
        <v-list-item v-for="item in menuList" :key="item.title" link :to="item.to">
        <v-list-item-content>
          <v-list-item-title style="color:white; text-align:center;" class="mainText"><p>{{ item.title }}</p></v-list-item-title>
        </v-list-item-content>
        </v-list-item>
        <v-list-item link>
        <v-list-item-content>
          <v-list-item-title @click="toShop" style="color:white; text-align:center;" class="mainText"><p>스포츠 용품 쇼핑물</p></v-list-item-title>
        </v-list-item-content>
        </v-list-item>
        <v-list-item class="d-flex justify-center">
            <v-card elevation="0" class="d-flex transparent">
              <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                      <a v-bind="attrs" v-on="on" href="https://www.facebook.com/Alldayfootballer/" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/facebook.png"></v-img></a>
                  </template>
                  <span>페이스북</span>
              </v-tooltip>
              <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                      <a v-bind="attrs" v-on="on" href="https://www.instagram.com/allground.official/" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/instagram.png"></v-img></a>
                  </template>
                  <span>인스타그램</span>
              </v-tooltip>
              <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                      <a v-bind="attrs" v-on="on" href="https://blog.naver.com/alldayfootball" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/blog.png"></v-img></a>
                  </template>
                  <span>네이버 블로그</span>
              </v-tooltip>
              <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                      <a v-bind="attrs" v-on="on" href="http://v2.alldayfootball.net/" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/alldayfootball.png"></v-img></a>
                  </template>
                  <span>스카우팅 시스템</span>
              </v-tooltip>
              <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                      <a v-bind="attrs" v-on="on" href="https://smartstore.naver.com/alldaycorporation" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/shop.png"></v-img></a>
                  </template>
                  <span>축구용품 구입처</span>
              </v-tooltip>
              </v-card>
        </v-list-item>
      </v-list>
    <!-- 메뉴 부분 ㅇㅅㅇ -->
    </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return{
      menuList:[
        {title:'인터뷰', to:'/Articlelist?name=interview'},
        {title:'스포츠 칼럼', to:'/Articlelist?name=column'},
        {title:'K리그 경기결과', to:'/Articlelist?name=kresult'},
      ],
      subMenu:[
        {title:'K1 리그',to:"/Articlelist?name=k1"},
        {title:'K2 리그',to:"/Articlelist?name=k2"},
        {title:'K3 리그',to:"/Articlelist?name=k3"},
        {title:'K4 리그',to:"/Articlelist?name=k4"},
        {title:'K5 리그',to:"/Articlelist?name=k5"},
      ],
      // drawerBood
    }
  },
  methods:{
    gotoList(to){
      location.href=to;
    },
    close(){
      this.$store.commit('set_drawerBool',false);
    },
    toShop(){
      window.open("https://smartstore.naver.com/alldaycorporation");
    },
  },
  computed:{
    drawerBool:{
      get(){
        return this.$store.state.drawerBool;
      },
      set(bool){
        return this.$store.commit('set_drawerBool',bool);
      },
    },

  },
  

}
</script>

<style>
#drawer .v-application--is-ltr .v-list-item__action:last-of-type:not(:only-child), .v-application--is-ltr .v-list-item__avatar:last-of-type:not(:only-child), .v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child){
  margin: 0;
  display: inline;
}
#drawer .v-list--nav .v-list-item:not(:last-child):not(:only-child), .v-list--rounded .v-list-item:not(:last-child):not(:only-child){
  margin: 0 !important;
}
</style>

<style scoped>
</style>
