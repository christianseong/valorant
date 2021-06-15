<template>
<div class="ArticleView mx-auto">
    <v-row no-gutters>
        <v-col class="d-flex my-5" cols="12">
            <p style="cursor:pointer;" class="listSubText" @click="toHome"><v-icon small>mdi-home</v-icon>Home</p>
            <v-icon small class="mx-3">mdi-chevron-right</v-icon>
            <p style="cursor:pointer; font-weight:900;" class="listSubText" @click="toCate">{{queryTitle}}</p>
        </v-col>
    </v-row>
    <v-row no-gutters>
        <v-col class="my-3" cols="12">
            <p class="newsTitleText">{{title}}</p>
        </v-col>
        <v-col cols="auto my-3">
            <p class="listTinyText"><v-icon x-small>mdi-account</v-icon>{{author}}</p>
        </v-col>
        <v-divider style="height:12px;" class="mx-5 my-auto" vertical></v-divider>
        <v-col cols="auto my-3">
            <p class="listTinyText"><v-icon x-small>mdi-clock-time-three-outline</v-icon>{{regTime.slice(0,16).replace('T','｜')}}</p>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" color="grey" outlined min-width="25" width="36" height="32" @click="urlShare" v-bind="attrs" v-on="on">
                        <v-icon color="black" small>mdi-link-variant</v-icon>
                        </v-btn>
                </template>
                <span>URL 공유하기</span>
            </v-tooltip>
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" color="grey" outlined min-width="25" width="36" height="32" @click="print" v-bind="attrs" v-on="on">
                        <v-icon color="black" small>mdi-printer</v-icon>
                        </v-btn>
                </template>
                <span>인쇄하기</span>
            </v-tooltip>
        </v-col>
    </v-row>
    <v-divider class="mt-4"></v-divider>
    <v-row no-gutters>
        <v-col class="mt-12" cols="12" lg="9">
            <div style="width:100%;">
                <div id="htmlViewer" v-html="contents"></div>
            </div>
        </v-col>
        <v-col v-if="!this.$vuetify.breakpoint.mdAndDown" cols="3" lg="3">
            <v-row no-gutters>
                <v-col cols="12">
                    <p class="newsTitleText ml-3">최신뉴스</p>
                </v-col>
                <v-col cols="12">
                    <Timeline/>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</div>
</template>

<script>
import axios from 'axios'
import Timeline from '@/components/Timeline.vue'
import VueCookies from 'vue-cookies'
export default {
    components:{
        Timeline,
    },
    data(){
        return{
            toggle_exclusive:0,
            title:null,
            author:null,
            bNum:null,
            contents:null,
            regTime:'',
        }
    },
    mounted(){
        this.getBoard();
    },
    methods:{
        getBoard(){
            var n = parseInt(this.$route.query.num);
            axios.post('http://alldayfootball.co.kr/api/board/findone',{
                seq:n
            })
            .then((res)=>{
                this.title = res.data.title;
                this.author = res.data.author;
                this.bNum = res.data.bNum;
                this.contents = res.data.contents;
                this.regTime = res.data.regTime;
                this.addViews();

            })
        },
        addViews(){
            if(VueCookies.isKey(`views${this.$route.query.num}`)) return;
            else{
                VueCookies.set(`views${this.$route.query.num}`, new Date());
                axios.put('http://alldayfootball.co.kr/api/board/addviews',{
                    seq:this.$route.query.num
                })
            }
        },
        urlShare(){
            var link = `http://alldayfootball.co.kr/articleView?num=${this.$route.query.num}`;
            const ele = document.createElement('textarea');
            ele.value = link;
            document.body.appendChild(ele);
            ele.select();
            document.execCommand("copy");
            document.body.removeChild(ele);
            alert('URL이 복사되었습니다. \n Ctrl+V로 붙여넣을 수 있습니다.');
        },
        toHome(){
            location.href="/";
        },
        toCate(){
            switch(this.bNum){
                case 0 :location.href="/Articlelist?name=k1"; break;
                case 1 :location.href="/Articlelist?name=k2"; break;
                case 2 :location.href="/Articlelist?name=k3"; break;
                case 3 :location.href="/Articlelist?name=k4"; break;
                case 4 :location.href="/Articlelist?name=k5"; break;
                case 5 :location.href="/Articlelist?name=interview"; break;
                case 6 :location.href="/Articlelist?name=column"; break;
                case 7 :location.href="/Articlelist?name=kresult"; break;
                default : return 'title'
            }
        },
        print(){
            window.onbeforeprint = () =>{
                document.body.innerHTML = document.getElementById('htmlViewer').innerHTML;
            }
             window.onafterprint = function(){
                location.reload();
            };
            window.print();
            return false;
        },
    },
    computed:{
            queryTitle(){
            switch(this.bNum){
                case 0 :return 'K1 리그';
                case 1 :return 'K2 리그';
                case 2 :return 'K3 리그';
                case 3 :return 'K4 리그';
                case 4 :return 'K5 리그';
                case 5 :return '인터뷰';
                case 6 :return '스포츠 칼럼';
                case 7 :return 'K리그 경기 결과';
                default : return 'title'
            }
        },
    },
    watch:{
        $route(){
            this.getBoard();
        },
    },

}
</script>

<style>
#htmlViewer *{
  max-width: 100% !important;
  height: auto !important;
}
</style>