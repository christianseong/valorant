<template>
    <div style="width:100%;" class="AdminHeader mx-auto">
        <v-row no-gutters>
            <v-col class="d-flex justify-center my-10" cols="12">
                <v-card @click="home" elevation="0" class="transparent" width="300" height="94"><v-img contain src="@/assets/logo/logo.png"></v-img></v-card>
            </v-col>
            <v-col cols="12">
                <v-tabs height="55" grow centered show-arrows background-color="#0C9045" color="#0C9045" hide-slider>
                    <v-tab :to="i.to" class="d-flex" v-for="i in menuList" :key="i.to">
                        <p style="color:white;">{{i.title}}</p>
                    </v-tab>
                </v-tabs>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            menuList:[
                {title:"기사관리",to:"/admin/article"},
                {title:"광고관리",to:"/admin/ad"},
                {title:"계정관리",to:"/admin/accout"},
                {title:"환경설정",to:"/admin/etc"},
            ],
        }
    },
    methods:{
        home(){
            location.href="/";
        },
    },
}
</script>

<style>
.v-text-field.v-text-field--solo .v-input__control{
    min-height:35px !important;
    align-self: center;
}
</style>