<template>
<div :style="{ marginLeft:isMobile}" class="admin">
    <AdminHeader/>
    <AdminDrawer/>
    <router-view class="mt-16" />
</div>
</template>

<script>
import AdminHeader from '@/components/Admin/AdminHeader.vue'
import AdminDrawer from '@/components/Admin/AdminDrawer.vue'
export default {
    mounted(){
        // this.$router.push('/admin/article');
    },
    components:{
        AdminHeader,
        AdminDrawer
    },
    computed:{
        isMobile(){  
            switch(this.$vuetify.breakpoint.name){
                case 'xs' : return '2%';
                case 'sm' : return '2%';
                case 'md' : return '2%';
                case 'lg' : return '20%';
                case 'xl' : return '20%';
                default : return '20%';
            }
        },
    },

}
</script>

<style>

</style>