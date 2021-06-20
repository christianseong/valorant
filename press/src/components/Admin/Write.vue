<template>
<div class="Write">
    <v-row class="my-5">
        <v-col cols="12">
            <p class="titleSubText">글쓰기</p>
        </v-col>
    </v-row>
    <v-row class="mt-5" no-gutters>
        <v-col cols="1">
            <v-select
            :items="bNumItems" v-model="select"
            style="border:0.5px solid rgba(55,55,55,.2);" color="blue darken-4" 
            hide-details solo></v-select>
        </v-col>
        <v-col style="border:1px solid rgba(55,55,55,.2);" cols="11">
            <v-text-field solo v-model="title" label="제목" hide-details></v-text-field>
        </v-col>
        <v-col style="border-bottom:1px solid grey;" cols="12">
            <div id="editor"></div>
        </v-col>
        <v-col class="d-flex justify-center" cols="12">
            <v-btn class="ma-3" @click="clickSubmit" width="100px" color="green">등록하기</v-btn>
            <v-btn @click="cancle" class="ma-3"  width="100px" color="grey">취소</v-btn>
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
         var uploadOptions = {
             height:'70vh',
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
                            // message: resp.message
                        }
                    },
                    defaultHandlerSuccess: function (data) {
                        this.selection.insertImage(data.path);
                    },
                }
         }



        this.editor = new Jodit('#editor',uploadOptions)
        this.editor.value = "";
        axios.get('http://alldayfootball.co.kr/api/auth/check')
        .then((res)=>{
            this.author=res.data.info.name
        })
    },
    data(){
        return{
            title:null,
            editor:null,
            author:null,
            bNumItems:[
                'k1','k2','k3','k4','k5','인터뷰','스포츠 칼럼','k리그결과',
            ],
            select:'k1',
        }
    },
    computed:{
        radioGroup(){
            switch(this.select){
                case 'k1' : return 0;
                case 'k2' : return 1;
                case 'k3' : return 2;
                case 'k4' : return 3;
                case 'k5' : return 4;
                case '인터뷰' : return 5;
                case '스포츠 칼럼' : return 6;
                case 'k리그결과' : return 7;
                default: return 0;
            }
        },
    },
    methods:{
        cancle(){
            if(this.title===null&&this.editor.value==="") this.$router.push('/admin/article');
            else{
                if(confirm("작성 된 내용은 저장되지 않습니다. 나가시겠습니까?")) {
                    window.location.href = "/admin/article"
                }
            }
        },
        clickSubmit(){
            axios.post('http://alldayfootball.co.kr/api/board/write',{
                title: this.title,
                contents: this.editor.value,
                author:this.author,
                bNum:this.radioGroup
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