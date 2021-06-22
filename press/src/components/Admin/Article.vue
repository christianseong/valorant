<template>
<div id="Article" class="Article">
    <v-row class="my-5">
        <v-col cols="12">
            <p class="mainText">기사관리</p>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <v-combobox
            color="green"
            v-model="select"
            :items="category"
            label="카테고리"
            solo
            multiple
            chips
            >
                <template v-slot:item="{ item }">
                    <v-chip
                    color="green"
                    dark
                    label
                    small
                    >
                    {{item}}
                    </v-chip>
                </template>

                <template v-slot:selection="{item, attrs, select }">

                    <v-chip
                    v-bind="attrs"
                    color="rgba(88,222,88,.5)"
                    :input-value="select"
                    label
                    small
                    >
                        <p style="color:green;" class="headerText">{{item}}</p>
                    </v-chip>
                </template>
                
            </v-combobox>
        </v-col>
    </v-row>
    <v-row>
        <v-col class="d-flex align-center" cols="12">
        <v-text-field @keypress.enter="clickSearch" hide-details v-model="search" label="검색" solo></v-text-field>
        <v-btn icon style="height:90%;" class="mx-3 px-2" @click="clickSearch" color="#0C9045" ><v-icon>mdi-magnify</v-icon></v-btn>
        </v-col>
    </v-row>

    <div v-if="!this.$vuetify.breakpoint.mdAndDown">
    <v-row style="text-align:center;" class="mt-5" no-gutters>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
            <p style="color:white; border-right:1px solid white;" class="sliderTitleText">No</p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
            <p style="color:white; border-right:1px solid white;" class="sliderTitleText">분류</p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="5">
            <p style="color:white; border-right:1px solid white;" class="sliderTitleText">제목</p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="2">
            <p style="color:white; border-right:1px solid white;" class="sliderTitleText">작성자</p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="1">
            <p style="color:white; border-right:1px solid white;" class="sliderTitleText">조회수</p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="2">
            <p style="color:white;" class="sliderTitleText">날짜</p>
        </v-col>
    </v-row>

    <v-row style="text-align:center;border-bottom:1px solid rgba(0,0,0,.2);" no-gutters v-for="(i,index) in boardResult" :key="index">
        <v-col class="py-2" cols="1">
            <p style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);;" class="sliderTitleText">{{i.seq}}</p>
        </v-col>
        <v-col class="py-2" cols="1">
            <p style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);;" class="sliderTitleText">{{category[i.bNum]}}</p>
        </v-col>
        <v-col class="py-2" cols="5">
            <p @click="clickTitle(i.seq)" style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);; cursor:pointer;" class="newsSubText">{{i.title}}</p>
        </v-col>
        <v-col class="py-2" cols="2">
            <p style="border-right:1px solid rgba(0,0,0,.25);;" class="sliderTitleText">{{i.author}}</p>
        </v-col>
        <v-col class="py-2" cols="1">
            <p style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);;" class="sliderTitleText">{{i.views}}</p>
        </v-col>
        <v-col class="py-2" cols="2">
            <p class="sliderTitleText">{{i.regTime.slice(0,10)}}</p>
        </v-col>
    </v-row>
    </div>

    <div v-if="this.$vuetify.breakpoint.mdAndDown">
    <v-row style="text-align:center;" class="mt-5" no-gutters>
        <v-col class="py-3" style="background-color:#0C9045;" cols="6">
            <p style="color:white; border-right:1px solid white;" class="sliderTitleText">제목</p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="3">
            <p style="color:white; border-right:1px solid white;" class="sliderTitleText">작성자</p>
        </v-col>
        <v-col class="py-3" style="background-color:#0C9045;" cols="3">
            <p style="color:white;" class="sliderTitleText">날짜</p>
        </v-col>
    </v-row>

    <v-row style="text-align:center;border-bottom:1px solid rgba(0,0,0,.2);" no-gutters v-for="(i,index) in boardResult" :key="index">
        <v-col class="py-2" cols="6">
            <p @click="clickTitle(i.seq)" style="overflow:hidden; border-right:1px solid rgba(0,0,0,.2);; cursor:pointer;" class="sliderTitleText">{{i.title}}</p>
        </v-col>
        <v-col class="py-2" cols="3">
            <p style="border-right:1px solid rgba(0,0,0,.25);;" class="sliderTitleText">{{i.author}}</p>
        </v-col>
        <v-col class="py-2" cols="3">
            <p class="sliderTitleText">{{i.regTime.slice(0,10)}}</p>
        </v-col>
    </v-row>
    </div>

    <v-row>
        <v-col class="d-flex justify-end mt-6 mr-3" cols="12">
            <v-btn to="/admin/write">글쓰기</v-btn>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <div class="text-center">
                <v-container>
                <v-row justify="center">
                    <v-col cols="8">
                    <v-container class="max-width">
                        <v-pagination
                        v-model="page"
                        class="my-4"
                        color="#0C9045"
                        :length="pLength"
                        ></v-pagination>
                    </v-container>
                    </v-col>
                </v-row>
                </v-container>
            </div>
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
            titleCheck: true,
            contentCheck: true,
            bLength:0,
            boardResult:[],
            page:1,
            category:[
                'k1',
                'k2',
                'k3',
                'k4',
                'k5',
                '인터뷰',
                '스포츠칼럼',
                'K리그결과',
            ],
            select:['k1','k2','k3','k4','k5','인터뷰','스포츠칼럼','K리그결과'],
        }
    },
    created(){
        this.takeBoard();
    },
    computed:{
        selectCode(){
            var sc=[];
            if(this.category===this.select) return null;
            for(var i =0; i<this.select.length; i++){
                switch(this.select[i]){
                    case 'k1': sc[i] = 0; break;
                    case 'k2': sc[i] = 1; break;
                    case 'k3': sc[i] = 2; break;
                    case 'k4': sc[i] = 3; break;
                    case 'k5': sc[i] = 4; break;
                    case '인터뷰': sc[i] = 5; break;
                    case '스포츠칼럼': sc[i] = 6; break;
                    case 'K리그결과': sc[i] = 7; break;
                }
            }
            return sc;
        },
        pLength(){
            var quo = parseInt(this.bLength/10);
            var rem = this.bLength % 10 ;
            if(quo===0) return 1;
            if(quo>0&&rem===0) return quo;
            return quo + 1 ;
        },
    },
    methods:{
        clickTitle(num){
            location.href=`/admin/edit?num=${num}`;
        },
        clickSearch(){
            this.takeBoard();
        },
        takeBoard(){
            axios.post('http://alldayfootball.co.kr/api/board/takeboard',{
                bNum: this.selectCode,
                limit: 10,
                page: this.page,
                word:this.search
            })
            .then((res=>{
                this.boardResult = res.data.docs;
                this.bLength = res.data.totalDocs;
            }))
        },
    },
    watch:{
        page(){
            this.takeBoard();
        },
        select(){
            this.takeBoard();
        }
    },
}
</script>

<style>
.Article .v-pagination__navigation{
    height: 25px !important;
    width: 25px !important;
}
.Article .v-pagination__item{
    min-width: 25px !important;
    height: 25px !important;
}
.v-application .primary--text{
    color:green !important
}
</style>

<style scoped>
@import url("../../assets/css/unify.css");
</style>