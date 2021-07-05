<template>
    <div :style="{width:HeaderWidth}" class="Header mx-auto">

        <v-row no-gutters>
            <v-col class="d-flex justify-center mt-10" cols="12">
                <v-card to="/" elevation="0" class="transparent" width="300" height="94"><v-img width="100%" height="100%" contain src="@/assets/logo/logo.png"></v-img></v-card>
            </v-col>
            <v-col class="d-flex justify-end" cols="12">
            <v-card elevation="0" class="d-flex transparent">
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <a v-bind="attrs" v-on="on" href="https://www.facebook.com/Alldayfootballer/" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/facebook.png"></v-img></a>
                        </template>
                        <span>페이스북</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <a v-bind="attrs" v-on="on" href="https://www.instagram.com/allground.official/" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/instagram.png"></v-img></a>
                        </template>
                        <span>인스타그램</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <a v-bind="attrs" v-on="on" href="https://blog.naver.com/alldayfootball" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/blog.png"></v-img></a>
                        </template>
                        <span>네이버 블로그</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <a v-bind="attrs" v-on="on" href="http://v2.alldayfootball.net/" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/alldayfootball.png"></v-img></a>
                        </template>
                        <span>스카우팅 시스템</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <a v-bind="attrs" v-on="on" href="https://smartstore.naver.com/alldaycorporation" target="_blank"><v-img class="ma-3" height="20px" width="20px" contain src="@/assets/sns/shop.png"></v-img></a>
                        </template>
                        <span>스포츠 용품</span>
                    </v-tooltip>
              </v-card>
            </v-col>
            <v-col cols="12">
                <v-card v-if="!this.$vuetify.breakpoint.mdAndDown" class="d-flex justify-center" height="55" width="100%" color="#0C9045">
                    <div class="d-flex mx-auto" v-for="(i,idx) in menuList" :key="idx">
                        <v-menu v-if="i.to==='subMenu'" open-on-hover offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-tab :ripple="false" style="text-decoration: none;" to="/Articlelist?name=k1" class="d-flex align-center justify-center" v-bind="attrs" v-on="on">
                                    <p style="color:white;" class="headerText">{{i.title}}<v-icon small color="white">mdi-chevron-down</v-icon></p>
                                </v-tab>
                            </template>
                            <v-list :rounded="false" color="#0C9045">
                                <v-list-item v-for="(i, index) in i.subMenu" :key="index">
                                    <v-card class="px-3" :rounded="false" elevation="0" color="#0C9045" height="100%" width="100%" :to="i.to">
                                        <p style="text-align:center; color:white;" class="headerText">{{ i.title }}</p>
                                    </v-card>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-tab v-else style="text-decoration: none;" :ripple="false" :to="i.to" class="d-flex align-center pa-0 mx-auto">
                            <p style="color:white;" class="headerText">{{i.title}}</p>
                        </v-tab>
                    </div>
                    <v-tab style="text-decoration: none;" :ripple="false" @click="toShop" class="d-flex align-center pa-0 mx-auto">
                        <p style="color:white;" class="headerText">스포츠 용품</p>
                    </v-tab>
                    <div class="d-flex align-center pt-1 px-3">
                        <v-text-field @keypress.enter="clickSearch" v-model="search" label="검색" height="35" background-color="white" solo hide-details>
                            <template v-slot:append-outer>
                                <v-btn color="white" @click="clickSearch" class="pb-2" icon><v-icon>mdi-magnify</v-icon></v-btn>
                            </template>
                        </v-text-field>
                    </div>
                </v-card>
                <v-card v-if="this.$vuetify.breakpoint.mdAndDown" class="d-flex justify-space-around" height="55" color="#0C9045">
                    <v-app-bar-nav-icon class="my-auto ml-2" color="white" @click="OpenDrawer"></v-app-bar-nav-icon>
                    <v-spacer></v-spacer>
                    <div class="d-flex align-center pt-1">
                        <v-text-field @keypress.enter="clickSearch" v-model="search" label="검색" height="35" background-color="white" solo hide-details>
                            <template v-slot:append-outer>
                                <v-btn small color="white" @click="clickSearch" class="mr-2 pb-2" icon><v-icon>mdi-magnify</v-icon></v-btn>
                            </template>
                        </v-text-field>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
    data(){
        return{
            search:'',
            menuList:[
                {title:'집중취재', to:'subMenu'},
                {title:'인터뷰', to:'/Articlelist?name=interview'},
                {title:'스포츠 칼럼', to:'/Articlelist?name=column'},
                {title:'K리그 경기결과', to:'/Articlelist?name=kresult'}
            ]
        }
    },
    created(){
        this.getConfig();
    },
    computed:{
        HeaderWidth(){  
            switch(this.$vuetify.breakpoint.name){
                case 'xs' : return "100%";
                case 'sm' : return "100%";
                case 'md' : return "100%";
                case 'lg' : return "70%";
                case 'xl' : return "70%";
                default : return "70%";
            }
        },
    },
    methods:{
        getConfig(){
            axios.post('http://alldayfootball.co.kr/api/config/findone',{
                id:"60e246fb2145564307fa6265"
            })
            .then((res)=>{
                console.log(res.data.info);
                this.menuList = res.data.info;
            })
        },
        clickSearch(){
            if(this.$route.query.name!=`/Articlelist?name=search&word=${this.search}`) this.$router.push(`/Articlelist?name=search&word=${this.search}`)
        },
        OpenDrawer(){ // drawer를 띄우는 메소드 ㅇㅅㅇ //
            this.$store.commit('set_drawerBool',!this.$store.state.drawerBool);
        },
        toShop(){
            window.open("https://smartstore.naver.com/alldaycorporation");
        },
    },
}
</script>

<style scoped>
@import url("../../assets/css/unify.css");

</style>

<style>
.v-text-field.v-text-field--solo .v-input__control{
    min-height:35px !important;
    width:300px;
    align-self: center;
}

@media (max-width:680px){
    .v-text-field.v-text-field--solo .v-input__control{
        width:250px;
    }
}

</style>
