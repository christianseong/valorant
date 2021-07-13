<template>
<div class="mt-16" id="Nav">
    <div class="mx-auto d-flex px-2 align-end" style="max-width:1264px; height:90px;">
        <div v-if="!this.$vuetify.breakpoint.mdAndDown" style="z-index:2;" class="mr-auto d-flex align-center">
            <!-- <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" icon><div style="width:100%; height:100%;" class="colorText"><v-icon large style="color:inherit;">mdi-account-box</v-icon></div></v-btn>
                </template>
                <span>로그인</span>
            </v-tooltip> -->
            <!-- <v-divider style="height:15px; min-height:0px;" class="mx-2 my-auto" vertical></v-divider> -->
            <div>
                <v-text-field @keypress.enter="clickSearch" v-model="search" label="기사검색" background-color="white" solo hide-details>
                    <template v-slot:append-outer>
                        <v-btn small color="green" @click="clickSearch" class="mb-2" icon><v-icon>mdi-magnify</v-icon></v-btn>
                    </template>
                </v-text-field>
            </div>
        </div>
        <div v-if="!this.$vuetify.breakpoint.mdAndDown" class="d-flex justify-center" style="width:1264px; position:absolute;">
            <v-card elevation="0" width="300px" height="90px" to="/"><v-img class="mx-auto mb-5" width="300px" height="90px" contain src="http://alldayfootball.co.kr/img/logo.7d7ab685.png"></v-img></v-card>
        </div>
        <v-card v-if="!this.$vuetify.breakpoint.mdAndDown" style="z-index:2;" elevation="0" class="ml-auto d-flex align-center transparent mb-1">
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on" href="https://www.facebook.com/Alldayfootballer/" target="_blank"><v-img height="20px" width="20px" contain src="@/assets/sns/facebook.png"></v-img></a>
                </template>
                <span>페이스북</span>
            </v-tooltip>
            <v-divider style="height:15px; min-height:0px;" class="mx-3 my-auto" vertical></v-divider>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on" href="https://www.instagram.com/allground.official/" target="_blank"><v-img height="20px" width="20px" contain src="@/assets/sns/instagram.png"></v-img></a>
                </template>
                <span>인스타그램</span>
            </v-tooltip>
            <v-divider style="height:15px; min-height:0px;" class="mx-3 my-auto" vertical></v-divider>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on" href="https://blog.naver.com/alldayfootball" target="_blank"><v-img height="20px" width="20px" contain src="@/assets/sns/blog.png"></v-img></a>
                </template>
                <span>네이버 블로그</span>
            </v-tooltip>
            <v-divider style="height:15px; min-height:0px;" class="mx-3 my-auto" vertical></v-divider>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on" href="http://v2.alldayfootball.net/" target="_blank"><v-img height="20px" width="20px" contain src="@/assets/sns/alldayfootball.png"></v-img></a>
                </template>
                <span>스카우팅 시스템</span>
            </v-tooltip>
            <v-divider style="height:15px; min-height:0px;" class="mx-3 my-auto" vertical></v-divider>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on" href="https://smartstore.naver.com/alldaycorporation" target="_blank"><v-img height="20px" width="20px" contain src="@/assets/sns/shop.png"></v-img></a>
                </template>
                <span>스포츠 용품</span>
            </v-tooltip>
        </v-card>
    </div>
    <v-card elevation="12" style="border-top:1px solid rgba(66,255,66,.3);" class="mt-1 mx-auto" color="#0C9045" id="Header" width="100%" height="55px">
        <v-img @click="push('/')" width="100%" height="100%" gradient="to top, rgba(0,0,0,.1),rgba(100,222,100,.1), rgba(0,255,255,.1)">
            <div v-if="!this.$vuetify.breakpoint.mdAndDown" class="mx-auto d-flex align-center justify-space-around" style="width:1264px; height:100%;">
                <v-menu offset-y v-for="(i,idx) in menuList" :key="idx">
                    <template v-slot:activator="{ on, attrs }">
                        <v-card v-if="i.to!='subMenu'" :to="`/articlelist${i.to}`" v-bind="attrs" v-on="on" height="100%" class="px-5 d-flex align-center" elevation="0" color="transparent">
                            <p style="color:white;">{{i.title}}</p>
                        </v-card>
                        <v-card v-else v-bind="attrs" v-on="on" height="100%" class="px-5 d-flex align-center" elevation="0" color="transparent">
                            <p style="color:white;">{{i.title}}<v-icon dark v-if="i.to==='subMenu'">mdi-chevron-down</v-icon></p>
                        </v-card>
                    </template>
                    <v-list v-if="i.to==='subMenu'" color="#0C9045">
                        <v-list-item style="border-top:1px solid rgba(0,55,0,.05);" color="#0C9045" :to="i.to" v-for="(i,idx) in i.subMenu" :key="idx">
                            <p style="color:white;" class="mx-auto">{{i.title}}</p>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-menu open-on-hover offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-card @click="toShop" v-bind="attrs" v-on="on" height="100%" class="px-5 d-flex align-center" elevation="0" color="transparent">
                            <p style="color:white;">스포츠 용품</p>
                        </v-card>
                    </template>
                </v-menu>
            </div>
        </v-img>
    </v-card>
</div>
</template>

<script>
export default {
    data(){
        return{
            search:'',
            menuList:[
                {title:'', to:'', subMenu:[{title:'',to:''},
                {title:'',to:''},
                {title:'',to:''},
                {title:'',to:''},
                {title:'',to:''}]},
                {title:'', to:''},
                {title:'', to:''},
                {title:'', to:''}
            ],
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
            this.$axios.post('http://alldayfootball.co.kr/api/config/findone',{
                id:"60e246fb2145564307fa6265"
            })
            .then((res)=>{
                // console.log(res.data.info);
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

<style>
#Nav .v-text-field.v-text-field--solo .v-input__control{
    min-height:35px !important;
    width:300px;
    align-self: center;
}
</style>

<style scoped>
p{
    font-weight: 700;
}
#Nav{
    background-color:white;
}
.v-application .colorText{
    color:#0C9045;
    -moz-transition:color .2s ease;   
    -o-transition:color .2s ease;   
    -ms-transition:color .2s ease;   
    -webkit-transition:color .2s ease;
    transition:color .2s ease;   
}
.colorText:hover{
    color:#14be5e;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
    -moz-transition:color .2s ease;   
    -o-transition:color .2s ease;   
    -ms-transition:color .2s ease;   
    -webkit-transition:color .2s ease;
    transition:color .2s ease;  
}
</style>