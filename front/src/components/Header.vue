<template>
  <div class="Header" ondragstart="return false">
      <div class="Nav">
        <div class="NavHolder">
          <router-link to="/"><div class="logoholder"></div></router-link>
        </div>
        <div class="NavHolder">
            <router-link to="/board">게시판</router-link>
        </div>
            <button @click="clicked">test</button>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{

    }
},
methods:{
    clicked(){
        console.log(this.boards);
    }
},
computed:{
    boards(){
        return this.$store.state.boards;
    }
},
}

</script>

 <style scoped>
.Header{
    background-color: #111133;
    position: fixed;
    width:100%;
    height:70px;
    top:0;
    left:0;
    z-index: 100;
}
.Nav{
    position: relative;
    display: flex;
    min-width:fit-content;
    max-width:100%;
    height:100%;
    margin: 0 auto;
}
.NavHolder{
    position: relative;
    display: flex;
    min-width: 50px;
    max-width: fit-content;
    height:(100%-5px);
    margin: 0px 30px 0px 10px;
    justify-content: center;
}
.NavHolder a{
    position: relative;
    display: flex;
    align-items: center;
    height:100%;
    text-decoration: none;
    font-weight: 900;
    color: white;
}
.NavHolder:hover{
    border-bottom: solid 5px #FF4655;
}
.NavHolder:hover a{
    color:#FF4655;
}
.logoholder{
    background-image: url('../assets/logo_white.png');
    background-repeat: no-repeat;
    background-size:contain;
    background-position: center;
    position: relative;
    width: 50px;
    height:100%;
}
.logoholder:hover{
    background-image: url('../assets/logo_red.png');
}
@media (max-width: 600px) {
    .Header{
        height:50px;
    }
    .NavHolder:hover{
    border-bottom: solid 2px #FF4655;
    }
    .logoholder{
        width:30px;
    }
}
</style>