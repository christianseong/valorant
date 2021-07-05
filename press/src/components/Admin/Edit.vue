<template>
<div class="Edit">
    <v-row class="my-5">
        <v-col cols="12">
            <p class="titleSubText">글쓰기</p>
        </v-col>
    </v-row>
    <v-row class="mt-5" no-gutters>
        <v-col cols="12" lg="1">
            <v-select
            :items="bNumItems" v-model="select"
            style="border:0.5px solid rgba(55,55,55,.2);" color="blue darken-4" 
            hide-details solo></v-select>
        </v-col>
        <v-col style="border:1px solid rgba(55,55,55,.2);" cols="12" lg="11">
            <v-text-field solo v-model="title" label="제목" hide-details></v-text-field>
        </v-col>
        <v-col style="border-bottom:1px solid grey;" cols="12">
            <div id="editor1"></div>
        </v-col>
        <v-col class="d-flex justify-center mt-10" cols="12">
            <v-btn class="ma-3" @click="clickSubmit" color="#509F3F"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">등록하기</p></v-btn>
            <v-btn @click="clickdelete" class="ma-3"  width="100px" color="#737373"><v-icon color="white">mdi-trash-can-outline</v-icon><p class="subText" style="color:white;">삭제</p></v-btn>
            <v-btn @click="cancle" class="ma-3"  width="100px" color="#737373"><v-icon color="white">mdi-close</v-icon><p class="subText" style="color:white;">취소</p></v-btn>
        </v-col>
    </v-row>
</div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
import { Jodit } from 'jodit'
import 'jodit/build/jodit.min.css'
export default {
    mounted() {
        this.getConfig();
         var uploadOptions = {
             height:'70vh',
             language: 'ko',
                enableDragAndDropFileToEditor: true,
                uploader: {
                    url: 'http://alldayfootball.co.kr/api/storage/test',
                    filesVariableName: function () {
                        return "files";
                    },
                    isSuccess: function (resp) {
                        return resp;
                    },
                    process: function (resp) {
                        return {
                            // files: resp.data.files,
                            path: resp.path,
                            // baseurl: resp.data.baseurl,
                            // error: resp.data.error,
                            message: resp.message
                        }
                    },
                    defaultHandlerSuccess: function (data) {
                        if(data.message.includes('image')) this.selection.insertImage(data.path);
                        if(data.message.includes('video')) this.selection.insertHTML(`<video controls src=${data.path}></video>`);
                    },
                },
            buttons: [
                'source', '|',
                'bold',
                'strikethrough',
                'underline',
                'italic', '|',
                'ul',
                'ol', '|',
                'outdent', 'indent',  '|',
                'font',
                'fontsize',
                'brush',
                'paragraph', '|',
                'image',
                'file',
                'table',
                'link', '|',
                'align', 'undo', 'redo', '|',
                'hr',
                'eraser',
                'copyformat', '|',
                'fullsize',
                'print',
                // {
                //     name: 'insertDate',
                //     tooltip: 'Insert current Date',
                //     exec: (editor) => {
                //         editor.s.insertHTML(new Date().toDateString());
                //     }
                // },
            ],
            buttonsXS: [
                'bold',
                'image', '|',
                'brush',
                'paragraph', '|',
                'align', '|',
                'undo', 'redo', '|',
                'eraser',
                'dots',
            ],
         }
        this.editor = new Jodit('#editor1',uploadOptions)
    },
    data(){
        return{
            title:null,
            editor:null,
            author:null,
            id:null,
            bNumItems:[
                'k1','k2','k3','k4','k5','인터뷰','스포츠 칼럼','k리그결과',
            ],
            select:'',
        }
    },
    watch:{
        $route(){
            var n = parseInt(this.$route.query.name);
            axios.post('http://alldayfootball.co.kr/api/board/findone',{
                seq:n
            })
            .then((res)=>{
                this.id = res.data._id;
                this.title = res.data.title;
                // this.author = res.data.author;
                this.editor.value = res.data.contents;
                this.findSelect(res.data.bNum);
            })
        },
    },
    computed:{
        radioGroup(){
            switch(this.select){
                case this.bNumItems[0] : return 0;
                case this.bNumItems[1] : return 1;
                case this.bNumItems[2] : return 2;
                case this.bNumItems[3] : return 3;
                case this.bNumItems[4] : return 4;
                case this.bNumItems[5] : return 5;
                case this.bNumItems[6] : return 6;
                case this.bNumItems[7] : return 7;
                default: return 0;
            }
        },
    },
    methods:{
        getConfig(){
            axios.post('http://alldayfootball.co.kr/api/config/findone',{
                id:"60e246fb2145564307fa6265"
            })
            .then((res)=>{
                var menuList = [];
                for(var i =0; i<res.data.info.length; i++){
                    if(res.data.info[i].to==='subMenu'){
                        for(var o = 0; o<res.data.info[i].subMenu.length; o++){
                            menuList.push(res.data.info[i].subMenu[o].title);
                        }
                    }
                    else{
                         menuList.push(res.data.info[i].title);
                    }
                }
                this.bNumItems = menuList;
                axios.get('http://alldayfootball.co.kr/api/auth/check')
                .then((res)=>{
                this.author=res.data.info.id
                })
                    var n = parseInt(this.$route.query.num);
                    // console.log(n);
                    axios.post('http://alldayfootball.co.kr/api/board/findone',{
                        seq:n
                    })
                    .then((res)=>{
                        this.id = res.data._id;
                        this.title = res.data.title;
                        // this.author = res.data.author;
                        this.findSelect(res.data.bNum);
                        this.editor.value = res.data.contents;
                    })
            })
        },
        findSelect(n){
            switch(n){
                case 0 :  this.select =this.bNumItems[0]; break;
                case 1 :  this.select =this.bNumItems[1]; break;
                case 2 :  this.select =this.bNumItems[2]; break;
                case 3 :  this.select =this.bNumItems[3]; break;
                case 4 :  this.select =this.bNumItems[4]; break;
                case 5 :  this.select =this.bNumItems[5]; break;
                case 6 :  this.select =this.bNumItems[6]; break;
                case 7 :  this.select =this.bNumItems[7]; break;
                default:  this.select =this.bNumItems[0]; break;
            }
            // console.log(this.select);
        },
        cancle(){
            if(this.title===null&&this.editor.value==="") this.$router.push('/admin/article');
            else{
                if(confirm("작성 된 내용은 저장되지 않습니다. 나가시겠습니까?")) {
                    window.location.href = "/admin/article"
                }
            }
        },
        clickSubmit(){
            // console.log(this.id,this.title,this.editor.value,this.radioGroup);
            axios.put('http://alldayfootball.co.kr/api/board/edit',{
                id: this.id,
                title: this.title,
                contents: this.editor.value,
                bNum:this.radioGroup
            })
            .then(()=>{
                window.location.href = "/admin/article"
            })
        },
        clickdelete(){
            axios.post('http://alldayfootball.co.kr/api/board/delete',{
                id: this.id
            })
            .then(()=>{
                window.location.href = "/admin/article"
            })
        },
    },
}
</script>

<style>
.Write .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot{
    box-shadow: none;
}
</style>
<style scoped>
@import url("../../assets/css/unify.css");
</style>