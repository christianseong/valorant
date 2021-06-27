<template>
<div class="ArticleView mx-auto">
    <v-row no-gutters>
        <v-col class="d-flex mt-10 mb-5" cols="12">
            <p style="cursor:pointer;" class="articleTinyText" @click="toHome">Home</p>
            <v-icon small class="mx-3">mdi-chevron-right</v-icon>
            <p style="cursor:pointer; font-weight:900; color:green;" class="articleTinyText" @click="toCate">{{queryTitle}}</p>
        </v-col>
    </v-row>
    <v-row no-gutters>
        <v-col class="my-3" cols="12">
            <p class="articleTitleText">{{title}}</p>
        </v-col>
        <v-col cols="auto my-3">
            <p class="articleTinyText"><v-icon class="mx-2" x-small>mdi-account</v-icon>{{author}}</p>
        </v-col>
        <v-divider style="height:12px;" class="mx-5 my-auto" vertical></v-divider>
        <v-col cols="auto my-3">
            <p class="articleTinyText"><v-icon class="mx-2" x-small>mdi-clock-time-three-outline</v-icon>{{regTime.slice(0,16).replace('T','｜')}}</p>
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
            <v-row no-gutters>
                <v-col class="mt-10" cols="12">
                    <v-card shaped class="d-flex align-center pa-2">
                        <v-card outlined height="75" width="75" color="rgba(88,211,88,.2)" rounded="circle">
                            <v-img width="100%" height="100%" :src="photo"></v-img>
                        </v-card>
                        <p class="mx-5 articleTitleText">{{name}} 기자</p>
                        <p class="mx-5 sliderSubText">제보: {{email}}</p>
                    </v-card>
                </v-col>
            </v-row>
                <!-- <v-col class="mt-16 mb-2" cols="12">
                    <p class="listSubText my-5">전체 댓글 <span style="color:green;">{{cmtCount}}</span>개</p>
                    <v-divider style="border:1px solid rgba(55, 155, 55, 0.3);"></v-divider>
                </v-col>
                <v-row v-for="(i,idx) in comments" :key="idx" class="my-2 pa-3" style="position:relative; border:1px solid rgba(0,0,0,.1); background-color:rgba(0,0,0,.05)" no-gutters>
                    <v-col class="my-2" cols="12">
                        <div style="position:absolute; width:100%;" class="d-flex justify-end px-3">
                            <v-btn @click="cmtDelete(i._id)" icon class="mr-3"><v-icon>mdi-delete</v-icon></v-btn>
                        </div>
                        <p class="listSubText" style="color:black;"><v-icon small>mdi-account</v-icon>{{i.author}}</p>
                    </v-col>
                    <v-col cols="12">
                        <p class="listSubText" style="color:black;">{{i.contents}}</p>
                    </v-col>
                    <v-col cols="12">
                        <p class="listTinyText"><v-icon x-small>mdi-clock-time-eight-outline</v-icon>{{i.regTime.slice(0,16).replace('T','｜')}}</p>
                    </v-col>
                </v-row>
                <v-col class="mt-5" cols="12">
                    <v-row @keydown.enter="cmtWrite" style="border:1px solid rgba(0,0,0,.3);" no-gutters>
                        <v-col style="border-right:1px solid rgba(55,55,55,.2);" cols="6">
                            <v-text-field @keypress="maxLengthName(10)" @keydown="maxLengthName(10)" @keyup="maxLengthName(10)" :counter="10" :rules="[rules.required , rules.nameCounter]" solo v-model="cmtName" label="이름" hide-details></v-text-field>
                        </v-col>
                        <v-col style="border-left:1px solid rgba(55,55,55,.2);" cols="6">
                            <v-text-field type="password" @keypress="maxLengthPassword(12)" @keydown="maxLengthPassword(12)" @keyup="maxLengthPassword(12)" :counter="12" :rules="[rules.required, rules.passwordCounter]" solo v-model="cmtPassword" label="비밀번호" hide-details></v-text-field>
                        </v-col>
                        <v-col style="border-top:1px solid rgba(55,55,55,.2);" cols="12">
                            <v-text-field @keypress="maxLengthComment(30)" @keydown="maxLengthComment(30)" @keyup="maxLengthComment(30)" :counter="30" :rules="[rules.required, rules.commentCounter]" solo v-model="cmtComment" label="댓글" hide-details></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col class="mt-5 d-flex justify-end" cols="12">
                            <v-btn @click="cmtWrite" dark color="#0C9045">등록</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
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
                <v-col class="mt-6" cols="12">
                    <v-divider style="border:1px solid rgba(55, 155, 55, 0.3);"></v-divider>
                </v-col> -->
        </v-col>



        <v-col v-if="!this.$vuetify.breakpoint.mdAndDown" cols="3" lg="3">
            <v-row no-gutters>
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
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
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
            authorid:null,
            name:'',
            email:'',
            photo:'https://kr.object.ncloudstorage.com/alldayfootball/defalut/defalut.png',
            bNum:null,
            contents:null,
            parent:null,
            regTime:'',
            // comments:[{parent:-1,author:"",contents:"",password:"",regTime:""}],
            // cmtName:'',
            // cmtPassword:'',
            // cmtComment:'',
            // cmtCount:0,
            // page:1,
            // pLength:1,
            // rules: {
            //     required: value => !!value || '입력이 필요합니다.',
            //     nameCounter: value => value.length <= 10 || '이름은 10자 이하여야 합니다.',
            //     passwordCounter: value => value.length <= 12 || '비밀번호는 12자 이하여야 합니다.',
            //     commentCounter: value => value.length <= 30 || '댓글은 30자 이하여야 합니다.'
            // },
      }
    },
    mounted(){
        this.getBoard();
        this.getAuthor();
        // this.getComment();
    },
    methods:{
        // cmtDelete(n){
        //     var userInput = prompt("비밀번호를 입력해주세요.");
        //     axios.post('http://alldayfootball.co.kr/api/board/cmtdelete',{
        //     id:n,
        //     password:userInput
        //     })
        //     .then((res)=>{
        //         console.log(res.data);
        //         if(res.data==="wrong_password"){
        //             alert('비밀번호가 틀립니다.');
        //             return;
        //         }
        //         if(res.data==="deleted"){
        //             alert('삭제되었습니다.');
        //             location.reload();
        //             return;
        //         }
        //     })
        // },
        // cmtWrite(){
        //     if(this.cmtName === ''){
        //         alert('이름을 입력해주세요.')
        //         return;
        //     }
        //     if(this.cmtPassword === ''){
        //         alert('비밀번호를 입력해주세요.')
        //         return;
        //     }
        //     if(this.cmtComment === ''){
        //         alert('댓글을 입력해주세요.')
        //         return;
        //     }
        //     var n = parseInt(this.$route.query.num);
        //     axios.post('http://alldayfootball.co.kr/api/board/cmtwrite',{
        //         parent:n,
        //         author:this.cmtName,
        //         contents:this.cmtComment,
        //         password:this.cmtPassword
        //     })
        //     .then((res)=>{
        //       if(res.data==='uploaded'){
        //           alert('댓글이 등록되었습니다.');
        //           location.reload();
        //       }  
        //     })
        // },
        // maxLengthName(n){
        //     if(this.cmtName.length>n){
        //         this.cmtName = this.cmtName.slice(0, n);
        //     }
        // },
        // maxLengthPassword(n){
        //     if(this.cmtPassword.length>n){
        //         this.cmtPassword = this.cmtPassword.slice(0, n);
        //     }
        // },
        // maxLengthComment(n){
        //     if(this.cmtComment.length>n){
        //         this.cmtComment = this.cmtComment.slice(0, n);
        //     }
        // },
        // getComment(){
        //     var n = parseInt(this.$route.query.num);
        //     axios.post('http://alldayfootball.co.kr/api/board/cmtfind',{
        //         parent:n,
        //         limit:10,
        //         page:this.page
        //     })
        //     .then((res)=>{
        //         this.comments = res.data.docs;
        //         this.cmtCount = res.data.totalDocs;
        //         this.pLength = res.data.totalPages;
        //     })
        // },
        getBoard(){
            var n = parseInt(this.$route.query.num);
            axios.post('http://alldayfootball.co.kr/api/board/findone',{
                seq:n
            })
            .then((res)=>{
                this.title = res.data.title;
                this.author = res.data.author;
                this.authorid = res.data.authorid;
                this.bNum = res.data.bNum;
                this.contents = res.data.contents;
                this.regTime = res.data.regTime;
                this.addViews();
            })
        },
        getAuthor(){
            axios.post('http://alldayfootball.co.kr/api/auth/findone',{
                id:this.authorid
            })
            .then((res)=>{
                this.name = res.data.name;
                this.email = res.data.email;
                this.photo = res.data.photo;
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
            this.getComment();
        },
        page(){
            this.getComment();
        },
    },

}
</script>

<style>
#htmlViewer *{
  max-width: 100% !important;
  height: auto !important;
}
.ArticleView .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    box-shadow:none;
}
.ArticleView .v-pagination__navigation{
    height: 25px !important;
    width: 25px !important;
}
.ArticleView .v-pagination__item{
    min-width: 25px !important;
    height: 25px !important;
}
</style>