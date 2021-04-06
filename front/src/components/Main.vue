<template>
  <div class="Main">
    <div class="BackgroundHolder"></div>
      <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Main{
    position: relative;
    max-width:100%;
    height:100%;
    top:70px;
    background-color:#444455;
}
.BackgroundHolder{
    position: absolute;
    width:100%;
    height:100%;
    background-image: url(../assets/zett.png);
    background-position:bottom;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x:100%;
    opacity: 0.3;
    z-index:1;
}
@media (max-width: 600px) {
    .Main{
        top:30px;
    }
}
</style>