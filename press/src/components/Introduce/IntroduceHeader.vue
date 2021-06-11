<template>
<div class="IntroduceHeader">
    <div :style="{width:HeaderWidth}"  class="mx-auto">
        <v-row no-gutters>
            <v-col class="d-flex align-center" cols="12">
                <v-card @click="toHome" elevation="0" class="transparent" width="100" height="30"><v-img width="100%" height="100%" contain src="@/assets/logo/logo.png"></v-img></v-card>
                <v-tab to="/introduce" class="mx-auto">
                    <p style="color:black;" class="listSubText pa-5">매체소개</p>
                </v-tab>
                    <div><v-divider class="my-auto" style="height:20px;" vertical></v-divider></div>
                <v-tab to="/introduce/help" class="mx-auto">
                    <p style="color:black;" class="listSubText pa-5">고객센터</p>
                </v-tab>
                    <div><v-divider class="my-auto" style="height:20px;" vertical></v-divider></div>
                <v-tab to="/introduce/policy" class="mx-auto">
                    <p style="color:black;" class="listSubText pa-5">약관 및 정책</p>
                </v-tab>
            </v-col>
        </v-row>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        HeaderWidth(){  
            switch(this.$vuetify.breakpoint.name){
                case 'xs' : return "100%";
                case 'sm' : return "100%";
                case 'md' : return "100%";
                case 'lg' : return "60%";
                case 'xl' : return "60%";
                default : return "60%";
            }
        },
    },
    methods:{
        toHome(){
            location.href='/';
        },
    },
}
</script>

<style scoped>
@import url("../../assets/css/unify.css");

</style>

<style>

</style>
