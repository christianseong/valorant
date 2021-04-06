<template>
  <div class="Board">
    
    <div class="BackgroundHolder">
    </div>
  </div>
</template>

<script>
export default {
  date(){
    return{

    }
  },
  beforeCreate(){
    console.log('게시판활성화');
    this.$store.dispatch('GetBoard');
  },
  methods:{
  }

}
</script>

<style scoped>
.Board{
    position: relative;
    width:80%;
    height:95%;
    margin: auto;
    padding: 5px;
}
.BackgroundHolder{
    position: relative;
    top:10px;
    width:100%;
    height:100%;
    background-color: #cccccc;
    opacity:0.1;
    border-radius: 20px;
}
.BackgroundHolder:hover{
    animation-duration:3s;
    opacity:0.1;
}
</style>