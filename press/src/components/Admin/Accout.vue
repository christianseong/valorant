<template>
<div class="Accout">
    <v-row class="my-5">
        <v-col cols="12">
            <p class="mainText">계정관리</p>
        </v-col>
    </v-row>
    <v-row>
        <v-col class="grey lighten-2" cols="4">
            <p style="text-align:center" class="sliderTitleText">이름</p>
        </v-col>
        <v-col class="grey lighten-2" cols="4">
            <p style="text-align:center" class="sliderTitleText">아이디</p>
        </v-col>
        <v-col class="grey lighten-2" cols="4">
            <p style="text-align:center" class="sliderTitleText">등급</p>
        </v-col>
    </v-row>
    <v-row style="border-bottom:1px solid rgba(0,0,0,.2);" @click="openEdit(userList[idx])" v-for="(i,idx) in userList" :key="idx">
        <v-col style="border-right:1px solid rgba(0,0,0,.2);" cols="4">
            <p style="text-align:center; color:black" class="sliderTitleText">{{i.name}}</p>
        </v-col>
        <v-col style="border-right:1px solid rgba(0,0,0,.2);" cols="4">
            <p style="text-align:center; color:black;" class="sliderTitleText">{{i.id}}</p>
        </v-col>
        <v-col cols="4">
            <p v-if="i.superAdmin" style="text-align:center; color:black;" class="sliderTitleText">최고관리자</p>
            <p v-if="!i.superAdmin" style="text-align:center; color:black;" class="sliderTitleText">일반관리자</p>
        </v-col>
    </v-row>
    <v-row>
        <v-col class="d-flex justify-end" cols="12">
            <v-btn @click="dialog=true" color="green" class="mr-10 my-5"><v-icon color="white">mdi-pencil-plus</v-icon><p class="subText" style="color:white;">관리자 등록</p></v-btn>
        </v-col>
    </v-row>

    <v-dialog v-model="dialog" :width="dialogWidth">
        <v-container class="white">
        <v-row>
            <v-col class="black" cols="12" lg="12">
                <p class="sliderTitleText" style="color:white;">관리자 등록</p>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="12" lg="2">
                <p class="sliderTitleText" style="color:black;">ID</p>
            </v-col>
            <v-col cols="12" lg="6">
                <v-text-field v-model="regId" hide-details label="ID" solo></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="12" lg="2">
                <p class="sliderTitleText" style="color:black;">비밀번호</p>
            </v-col>
            <v-col cols="12" lg="6">
                <v-text-field v-model="regPassword" hide-details label="Password" solo></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="12" lg="2">
                <p class="sliderTitleText" style="color:black;">이름</p>
            </v-col>
            <v-col cols="12" lg="6">
                <v-text-field v-model="regName" hide-details label="name" solo></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col class="d-flex align-center" cols="12" lg="2">
                <p class="sliderTitleText" style="color:black;">구분</p>
            </v-col>
            <v-col cols="12" lg="6">
                <v-radio-group row v-model="regRadio">
                    <v-radio label="최고 관리자" :value="0"></v-radio>
                    <v-radio label="일반 관리자" :value="1"></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col class="d-flex align-center" lg="2">
                <p class="sliderTitleText" style="color:black;">사진업로드</p>
            </v-col>
            <v-col cols="12" lg="6">
                  <v-file-input v-model="regFile" prepend-icon="mdi-camera" accept="image/png, image/jpeg, image/bmp" label="사진업로드"></v-file-input>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-space-around" cols="12">
                <v-btn @click="register" color="green"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">등록하기</p></v-btn>
                <v-btn @click="closeDialog(0)" color="red"><v-icon color="white">mdi-close</v-icon><p class="subText" style="color:white;">취소</p></v-btn>
            </v-col>
        </v-row>
        </v-container>
    </v-dialog>

    <v-dialog v-model="dialog2" :width="dialogWidth">
        <v-container class="white">
        <v-row>
            <v-col class="black" cols="12" lg="12">
                <p class="sliderTitleText" style="color:white;">관리자 정보 수정</p>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="12" lg="2">
                <p class="sliderTitleText" style="color:black;">ID</p>
            </v-col>
            <v-col cols="12" lg="6">
                <v-text-field v-model="editId" hide-details label="ID" disabled solo></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="12" lg="2">
                <p class="sliderTitleText" style="color:black;">비밀번호</p>
            </v-col>
            <v-col cols="12" lg="6">
                <v-text-field v-model="editPassword" hide-details label="Password" solo></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="12" lg="2">
                <p class="sliderTitleText" style="color:black;">이름</p>
            </v-col>
            <v-col cols="12" lg="6">
                <v-text-field v-model="editName" hide-details label="name" solo></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col class="d-flex align-center" lg="2">
                <p class="sliderTitleText" style="color:black;">구분</p>
            </v-col>
            <v-col cols="12" lg="6">
                <v-radio-group row v-model="editRadio">
                    <v-radio label="최고 관리자" :value="0"></v-radio>
                    <v-radio label="일반 관리자" :value="1"></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col class="d-flex align-center" lg="2">
                <p class="sliderTitleText" style="color:black;">사진업로드</p>
            </v-col>
            <v-col cols="12" lg="6">
                  <v-file-input v-model="editFile" prepend-icon="mdi-camera" accept="image/png, image/jpeg, image/bmp" label="사진업로드"></v-file-input>
            </v-col>
        </v-row>

        <v-row v-if="!$vuetify.mdAndDown" class="d-flex justify-center">
            <v-col class="d-flex justify-space-around" cols="12" lg="12">
                <v-btn @click="edit" color="green"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">등록하기</p></v-btn>
                <v-btn @click="remove" color="pink"><v-icon color="white">mdi-trash-can-outline</v-icon><p class="subText" style="color:white;">삭제하기</p></v-btn>
                <v-btn @click="closeDialog(1)" color="red"><v-icon color="white">mdi-close</v-icon><p class="subText" style="color:white;">취소</p></v-btn>
            </v-col>
        </v-row>
        <v-row v-if="$vuetify.mdAndDown" class="d-flex justify-center">
            <v-col class="d-flex justify-space-around" cols="12" lg="12">
                <v-btn x-small @click="edit" color="green"><v-icon color="white">mdi-upload</v-icon><p class="subText" style="color:white;">등록</p></v-btn>
                <v-btn x-small @click="remove" color="pink"><v-icon color="white">mdi-trash-can-outline</v-icon><p class="subText" style="color:white;">삭제</p></v-btn>
                <v-btn x-small @click="closeDialog(1)" color="red"><v-icon color="white">mdi-close</v-icon><p class="subText" style="color:white;">취소</p></v-btn>
            </v-col>
        </v-row>
        </v-container>
    </v-dialog>
</div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
    data(){
        return{
            userList:[
                {name:'',id:'',superAdmin:true,Admin:true},
            ],
            dialog:false,
            dialog2:false,
            regId:'',
            regName:'',
            regPassword:'',
            regRadio:0,
            regFile:"",

            editId:'',
            editName:'',
            editPassword:'',
            editRadio:0,
            editFile:"",
        }
    },
    computed:{
        dialogWidth(){
            switch(this.$vuetify.breakpoint.name){
                case 'xs' : return '100%';
                case 'sm' : return '100%';
                case 'md' : return '90%';
                case 'lg' : return '60%';
                case 'xl' : return '50%';
                default : return '100%';
            }
        }
    },
    mounted(){
        this.getUserList();
        
    },
    methods:{
        getUserList(){
            axios.get('http://alldayfootball.co.kr/api/auth/find')
            .then((res)=>{
                this.userList = res.data;
                console.log(this.userList);
            })
        },
        async register(){
            if(this.regId==='') {
                alert('id를 입력하세요');
                return;
            }
            if(this.regPassword==='') {
                alert('비밀번호를 입력하세요');
                return;
            }
            if(this.regName==='') {
                alert('이름을 입력하세요');
                return
            }
            var photoURL = "";
            if(this.regFile!="")
            {
                const formData = new FormData();
                formData.append('image', this.regFile);
                const res = await axios.post('http://alldayfootball.co.kr/api/storage/profileupload',formData,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                photoURL = res.data.slice(0);
                console.log(photoURL);
            }
            await axios.post('http://alldayfootball.co.kr/api/auth/register',{
                id:this.regId,
                name:this.regName,
                photo:photoURL,
                password:this.regPassword,
                superAdmin:this.regRadio===0
                })
                .then((res)=>{
                    console.log(photoURL);
                    if(res.data==='registered'){
                        alert('등록되었습니다.');
                        this.getUserList();
                        this.regId='';
                        this.regName='';
                        this.regPassword='';
                        this.regRadio=0;
                        this.regFile="",
                        this.dialog=false;
                        return;
                    }
                    if(res.data==='not_logged'){
                        alert('권한이 없습니다.');
                        return;
                    }
                    if(res.data==='id_exists'){
                        alert('이미 등록된 ID입니다.');
                        return;
                    }
                    if(res.data==='not_admin'){
                        alert('권한이 없습니다.');
                        return;
                    }
                })
        },
        openEdit(data){
            this.editId = data.id;
            this.editName = data.name;
            this.editPassword = '';
            this.editFile = '';
            this.editRadio = (data.superAdmin ? 0 : 1);
            this.dialog2=true;
        },
        async edit(){
            var photoURL = "";
            if(this.editFile!="")
            {
                const formData = new FormData();
                formData.append('image', this.editFile);
                const res = await axios.post('http://alldayfootball.co.kr/api/storage/profileupload',formData,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                photoURL = res.data.slice(0);
                console.log(photoURL);
            }
            await axios.put('http://alldayfootball.co.kr/api/auth/edit',{
                id:this.editId,
                name:this.editName,
                photo:photoURL,
                password:this.editPassword,
                superAdmin:this.editRadio===0
            })
            .then((res)=>{
                if(res.data==='not_logged'){
                    alert('권한이 없습니다.');
                    return;
                }
                if(res.data==='updated'){
                    alert('수정되었습니다.');
                    this.getUserList();
                    this.editId='';
                    this.editName='';
                    this.editPassword='';
                    this.editFile = "";
                    this.editRadio=0;
                    this.dialog2=false;
                    return;
                }
                if(res.data==='not_admin'){
                    alert('권한이 없습니다.');
                    return;
                }
            })
        },
        remove(){
            axios.post('http://alldayfootball.co.kr/api/auth/delete',{
                id:this.editId
            })
            .then((res)=>{
                if(res.data==='not_logged'){
                    alert('권한이 없습니다.');
                    return;
                }
                if(res.data==='not_admin'){
                    alert('권한이 없습니다.');
                    return;
                }
                if(res.data==='deleted'){
                    this.getUserList();
                    alert('삭제 되었습니다.');
                    this.dialog2=false;
                    return;
                }
            })
        },
        closeDialog(n){
            if(n===0)
            {
                this.regId='';
                this.regName='';
                this.regPassword='';
                this.regRadio=0;
                this.regFile='';
                this.dialog = false;
                return;
            }
            if(n===1)
            {
            this.editId='';
            this.editName='';
            this.editPassword='';
            this.editRadio=0;
            this.editFile='';
            this.dialog2 = false;
            return;
            }
        }
    },
}
</script>

<style scoped>
@import url("../../assets/css/unify.css");
</style>