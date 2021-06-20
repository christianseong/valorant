<template>
    <div style="background-color:rgba(0,0,0,.85); width:100vw; height:55px; position:absolute; left:0; top:0;" class="AdminHeader">
        <v-row class="fill-height" no-gutters>
            <v-col cols="12" class="d-flex align-center">
                <v-app-bar-nav-icon v-if="this.$vuetify.breakpoint.mdAndDown" class="mx-2" color="white" @click="OpenAdminDrawer"></v-app-bar-nav-icon>
                <v-card @click="toHome" class="d-flex align-center" height="50%" elevation="0" rounded="0" color="transparent">
                    <v-img height="100%" contain src="@/assets/logo/smlogo.png"></v-img>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        OpenAdminDrawer(){
            this.$store.commit('set_adminDrawerBool',!this.$store.state.adminDrawerBool);
        },
        toHome(){
            location.href='/';
        },
    },
}
</script>

<style>
</style>