<template>
<div class="Write">
    <v-row class="my-5">
        <v-col cols="12">
            <p class="mainText">글쓰기</p>
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
            <textarea id="editor"></textarea>
        </v-col>
        <v-col class="d-flex justify-center" cols="12">
            <v-btn class="ma-3" @click="clickSubmit" color="#509F3F"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">등록하기</p></v-btn>
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
                        // type: resp.type,
                        // baseurl: resp.data.baseurl,
                        // error: resp.data.error,
                        message: resp.message
                    }
                },
                defaultHandlerSuccess: function (data) {
                    if(data.message.includes('image')) this.selection.insertImage(data.path);
                    if(data.message.includes('video')) this.selection.insertHtml(`<video controls src=${data.path}></video>`);
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
        this.editor = new Jodit('#editor',uploadOptions)
        this.editor.value = "<p></p>";
        axios.get('http://alldayfootball.co.kr/api/auth/check')
        .then((res)=>{
            this.author=res.data.info.name
            this.authorid = res.data.info._id
        })
    },
    data(){
        return{
            title:null,
            editor:null,
            author:null,
            authorid:null,
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
                authorid:this.authorid,
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

<style scoped>
@import url("../../assets/css/unify.css");
</style>