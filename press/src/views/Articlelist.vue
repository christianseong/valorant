<template>
<div class="articlelist mx-auto">
    <v-row no-gutters>
        <v-col cols="12" lg="9">
            <v-row style="height:88px;" no-gutters>
                <v-col class="my-5" cols="auto">
                    <p class="topicText">{{queryTitle}} <span class="topicSubText">({{this.bLength}}건)</span></p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="d-flex align-center" cols="auto">
                    <v-btn-toggle v-model="toggle">
                        <v-btn class="py-4" small>
                            <v-icon>mdi-image-text</v-icon>
                            <p class="sliderTitleText" v-if="!$vuetify.breakpoint.mdAndDown">요약형</p>
                        </v-btn>
                        <v-btn class="py-4" small>
                            <v-icon>mdi-format-align-justify</v-icon>
                            <p class="sliderTitleText" v-if="!$vuetify.breakpoint.mdAndDown">제목형</p>
                        </v-btn>
                        <v-btn class="py-4" small>
                            <v-icon>mdi-image</v-icon>
                            <p class="sliderTitleText" v-if="!$vuetify.breakpoint.mdAndDown">포토형</p>
                        </v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
            <v-divider style="border-bottom:2px solid black;"></v-divider>
            <v-row class="my-10" v-if="toggle===0" no-gutters>
                <v-col class="my-3 pa-3" style="border-top:1px solid rgba(0,0,0,.1); border-bottom:1px solid rgba(0,0,0,.1)" v-for="(i,idx) in boardResult" :key="idx" cols="12">
                        <v-row no-gutters>
                            <v-col cols="12" lg="3">
                                <v-card @click="goToView(i.seq)" width="100%" height="150"><v-img width="100%" height="100%" :src="i.thumb"></v-img></v-card>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="12" lg="8">
                                <v-row no-gutters>
                                    <v-col class="py-3" cols="12">
                                        <p @click="goToView(i.seq)" style="cursor:pointer" class="articleTitleText">{{i.title}}</p>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters>
                                    <v-col cols="12" class="my-3">
                                        <p @click="goToView(i.seq)" style="cursor:pointer" class="articleSubText">{{i.pretext}}</p>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters>
                                    <v-col cols="12">
                                        <p class="articleTinyText"><v-icon x-small>mdi-account</v-icon>{{i.author}} ｜ <v-icon x-small>mdi-clock-time-three-outline</v-icon>{{i.regTime.slice(0,16).replace('T','｜')}}</p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                </v-col>
            </v-row>

            <v-row class="my-10" v-if="toggle===1" no-gutters>
                <v-col class="my-1" v-for="(i,index) in boardResult" :key="index" cols="12">
                    <p @click="goToView(i.seq)" style="cursor:pointer; white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="articleTitleText">{{i.title}}
                        <br v-if="$vuetify.breakpoint.mdAndDown">
                        <span class="articleTinyText ml-5">{{i.author}} ｜ {{i.regTime.slice(0,16).replace('T','｜')}}</span>
                    </p>
                    <v-divider class="my-5" v-if="(index===5||index===10||index===15)"></v-divider>
                </v-col>
            </v-row>

            <v-row class="my-10" v-if="toggle===2" no-gutters>
                <v-col v-for="(i,index) in boardResult" :key="index" cols="6" lg="3">
                    <v-row no-gutters class="pa-5">
                        <v-col cols="12">
                            <v-card @click="goToView(i.seq)" width="100%" height="120"><v-img height="100%" width="100%" :src="i.thumb"></v-img></v-card>
                        </v-col>
                        <v-col class="my-2" cols="12">
                            <p @click="goToView(i.seq)" style="cursor:pointer" class="articleTitleText2">{{i.title}}</p>
                        </v-col>
                        <v-col cols="12">
                            <p class="articleTinyText"><v-icon x-small>mdi-account</v-icon>{{i.author}}</p>
                        </v-col>
                        <v-col cols="12">
                            <p class="articleTinyText"> <v-icon x-small>mdi-clock-time-three-outline</v-icon>{{i.regTime.slice(0,16).replace('T','｜')}}</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row no-gutters>
                    <v-col cols="12">
                        <div class="text-center">
                            <v-container>
                            <v-row justify="center">
                                <v-col cols="8">
                                <v-container class="max-width">
                                    <v-pagination
                                    color="#0C9045"
                                    v-model="page"
                                    class="my-4"
                                    :length="pLength"
                                    ></v-pagination>
                                </v-container>
                                </v-col>
                            </v-row>
                            </v-container>
                        </div>
                    </v-col>
            </v-row>
        </v-col>
        <v-col v-if="!this.$vuetify.breakpoint.mdAndDown" cols="3">
            <v-row no-gutters style="height:88px;">
            </v-row>
            <v-divider style="width:90%; border-bottom:2px solid black;"></v-divider>
            <v-row  no-gutters>
                <v-col cols="12">
                    <p class="topicText my-5 mx-5">최신뉴스</p>
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
import Timeline from '@/components/Timeline.vue'
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
    components:{
        Timeline
    },
    data(){
        return{
            boardResult:[],
            toggle:0,
            page:1,
            bLength:10,
        }
    },
    mounted(){
        switch(this.$route.query.name){
        case 'k1' : this.takeBoard(0); break;
        case 'k2' : this.takeBoard(1); break;
        case 'k3' : this.takeBoard(2); break;
        case 'k4' : this.takeBoard(3); break;
        case 'k5' : this.takeBoard(4); break;
        case 'interview' : this.takeBoard(5); break;
        case 'column' : this.takeBoard(6); break;
        case 'kresult' : this.takeBoard(7); break;
        case 'search' : this.takeBoard(8); break;
        default : this.takeBoard(0); break;
        }
    },
    methods:{
        takeBoard(Num){
            if(Num===8)
            {
                axios.post('http://alldayfootball.co.kr/api/board/takeboard',{
                bNum: null,
                limit: this.limit,
                page: this.page,
                word:this.$route.query.word
            })
            .then((res=>{
                this.boardResult = res.data.docs;
                this.bLength = res.data.totalDocs;
                this.findThumb();
                this.findPretext();
            }))
            return;
            }
            axios.post('http://alldayfootball.co.kr/api/board/takeboard',{
                bNum: Num,
                limit: this.limit,
                page: this.page,
                word:""
            })
            .then((res=>{
                this.boardResult = res.data.docs;
                this.bLength = res.data.totalDocs;
                this.findThumb();
                this.findPretext();
            }))
        },
        findThumb(){
            for(var i = 0; i<this.boardResult.length; i++){
                if(this.boardResult[i].contents.includes('<img')){
                var tagIndex = this.boardResult[i].contents.indexOf('<img');
                var tagSrcIndex = this.boardResult[i].contents.indexOf('src="',tagIndex+4);
                var tagEndIndex = this.boardResult[i].contents.indexOf('"',tagSrcIndex+5);
                this.boardResult[i].thumb = this.boardResult[i].contents.slice(tagSrcIndex+5,tagEndIndex);
                }
            }
        },
        findPretext(){
            for(var i = 0; i<this.boardResult.length; i++){
                this.boardResult[i].pretext = this.boardResult[i].contents.replace(/(<([^>]+)>|&nbsp;)/ig," ").slice(0,100)+('...');
            }
        },
        goToView(num){
            location.href=`/articleView?num=${num}`;
        },
    },
    computed:{
        limit(){
            switch(this.toggle){
                case 0 :return 15;
                case 1 :return 20;
                case 2 :return 12;
                default : return 10;
            }
        },
        queryTitle(){
            switch(this.$route.query.name){
                case 'k1' :return 'K1 리그';
                case 'k2' :return 'K2 리그';
                case 'k3' :return 'K3 리그';
                case 'k4' :return 'K4 리그';
                case 'k5' :return 'K5 리그';
                case 'interview' :return '인터뷰';
                case 'column' :return '스포츠 칼럼';
                case 'kresult' :return 'K리그 경기 결과';
                case 'search' :return '검색 결과';
                default : return 'title'
            }
        },
        pLength(){
            var quo = parseInt(this.bLength/this.limit);
            var rem = this.bLength % this.limit ;
            if(quo===0) return 1;
            if(quo>0&&rem===0) return quo;
            return quo + 1 ;
        },
    },
    watch:{
        $route(){
            this.page=1;
            switch(this.$route.query.name){
                case 'k1' : this.takeBoard(0); break;
                case 'k2' : this.takeBoard(1); break;
                case 'k3' : this.takeBoard(2); break;
                case 'k4' : this.takeBoard(3); break;
                case 'k5' : this.takeBoard(4); break;
                case 'interview' : this.takeBoard(5); break;
                case 'column' : this.takeBoard(6); break;
                case 'kresult' : this.takeBoard(7); break;
                case 'search' : this.takeBoard(8); break;
                default : this.takeBoard(0); break;
            }
        },
        page(){
            switch(this.$route.query.name){
                case 'k1' : this.takeBoard(0); break;
                case 'k2' : this.takeBoard(1); break;
                case 'k3' : this.takeBoard(2); break;
                case 'k4' : this.takeBoard(3); break;
                case 'k5' : this.takeBoard(4); break;
                case 'interview' : this.takeBoard(5); break;
                case 'column' : this.takeBoard(6); break;
                case 'kresult' : this.takeBoard(7); break;
                case 'search' : this.takeBoard(8); break;
                default : this.takeBoard(0); break;
            }
        },
        toggle(){
            this.page=1;
        },
    },

}
</script>

<style scoped>
@import url("../assets/css/unify.css");
</style>

<style>
.articlelist .v-pagination__navigation{
    height: 25px !important;
    width: 25px !important;
}
.articlelist .v-pagination__item{
    min-width: 25px !important;
    height: 25px !important;
}
</style>