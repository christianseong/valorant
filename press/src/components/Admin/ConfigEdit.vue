<template>
<div class="ConfigEdit">
    <v-row class="mt-5" no-gutters>
        <v-col cols="12">
            <v-combobox solo-inverted chips v-model="select" :items="items" ></v-combobox>
        </v-col>
        <v-col style="border-bottom:1px solid grey;" cols="12">
            <div id="editor2"></div>
        </v-col>
        <v-col class="d-flex justify-center" cols="12">
            <v-btn class="ma-3" @click="clickSubmit" color="green"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">수정하기</p></v-btn>
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
        this.editor = new Jodit('#editor2',uploadOptions)
            // console.log(n);
            axios.post('http://alldayfootball.co.kr/api/settingboard/findone',{
                id:this.selectId
            })
            .then((res)=>{
                this.id = res.data._id;
                this.editor.value = res.data.contents;
            })

    },
    data(){
        return{
            editor:null,
            id:null,
            select: '매체소개',
            items: [
                '매체소개',
                '불편신고',
                '약관 및 정책',
            ],
        }
    },
    watch:{
        select(){
            axios.post('http://alldayfootball.co.kr/api/settingboard/findone',{
                id:this.selectId
            })
            .then((res)=>{
                this.id = res.data._id;
                this.editor.value = res.data.contents;
            })
        },
    },
    computed:{
        selectId(){
            switch(this.select){
                case '매체소개' : return "60ce99f5b7062e4c6c092cb3";
                case '불편신고' : return "60ce9a39b7062e4c6c092cb4";
                case '약관 및 정책' : return "60ce9a4fb7062e4c6c092cb5";
                default: return "60ce99f5b7062e4c6c092cb3";
            }
        },
    },
    methods:{
        clickSubmit(){
            axios.put('http://alldayfootball.co.kr/api/settingboard/edit',{
                id: this.id,
                contents: this.editor.value
            })
            .then(()=>{
                window.location.href = "/admin/configtext"
            })
        },
    },
}
</script>

<style>
.ConfigEdit .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot{
    box-shadow: none;
}
</style>

<style scoped>
@import url("../../assets/css/unify.css");
</style>