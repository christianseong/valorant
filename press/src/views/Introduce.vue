<template>
<div class="introduce mx-auto">
    <IntroduceHeader/>
    <router-view/>
    <IntroduceFooter/>
</div>
</template>

<script>
import bus from '@/utils/bus.js'
import IntroduceHeader from '@/components/Introduce/IntroduceHeader'
import IntroduceFooter from '@/components/Introduce/IntroduceFooter'
export default {
    components:{
        IntroduceHeader,
        IntroduceFooter,
    },
    mounted(){
        bus.$emit('end:loading');
    }
}
</script>

<style>

</style>