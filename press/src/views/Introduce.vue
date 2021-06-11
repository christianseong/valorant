<template>
<div class="introduce mx-auto">
    <IntroduceHeader/>
    <router-view/>
    <IntroduceFooter/>
</div>
</template>

<script>
import IntroduceHeader from '@/components/Introduce/IntroduceHeader'
import IntroduceFooter from '@/components/Introduce/IntroduceFooter'
export default {
    components:{
        IntroduceHeader,
        IntroduceFooter,
    },
}
</script>

<style>

</style>