<template>
  <div class="VideoHolder" ondragstart="return false">
      <h1 class="pro" v-text="text"></h1>
      <video preload="true" muted="" loop="" playsinline="" autoplay><source src="https://playvalorant.com//assets/video/Retake-hero-desktop.mp4" type="video/mp4"></video>
  </div>

</template>

<script>
export default {
data(){
    return{
        text:"띵작 FPS 발로란트"
    }
}
}
</script>

<style scoped>
.pro{
  position:absolute;
  display: block;
  color:#3498db;
  font-size:100px;
  opacity:1;
  animation: pro 0.3s ease-in-out infinite;
  z-index: 51;
}
@keyframes pro{
  7%{
    transform:translateY(100px);opacity:0.8;color:red;font-weight: 900;font-style: italic;font-size:1rem;
  }
  15%{
    transform:translateX(-100px);opacity:1;color:orange;font-weight: 800;font-style:oblique;
  }
  21%{
    transform:rotate(120deg);opacity:0.8;color:yellow;font-weight: 700;font-style:unset;
  }
  28%{
    transform:translateX(100px);opacity:0.3;color:green;font-weight: 600;font-style:initial;
  }
  35%{
    transform:rotate(180deg);color:blue;opacity:0.9;font-weight: 500;font-size:3rem;
  }
  42%{
    transform:translateX(0px);color:darkblue;opacity:0.3;font-weight: 400;font-size:10rem;
  }
  49%{
    transform:rotate(-120deg);opacity:0.4;color:purple;font-weight: 300;font-size:1rem;
  }
  56%{
    transform:translateX(-100px);opacity:0.3;color:black;font-weight: 200;font-size:15rem;
  }
  63%{ transform:translateY(0px);opacity:0.6;color:white;font-weight: -500;font-size:10rem;
  }
  70%{ transform:translateX(0px);opacity:0.8;color:pink;font-weight: 1000;font-size:6rem;
  }
  77%{ transform:translateY(100px);opacity:1;color:tomato;font-weight: -1100;font-size:2rem;
  }
  84%{ transform:translateX(100px);opacity:0.8;color:mediumpurple;font-weight: 100;font-size:1rem;
  }
  91%{ transform:translateY(0px);opacity:0.5;color:mediumseagreen;font-weight: 500;font-size:0.1rem;
  }
  100%{ transform:translateX(0px);opacity:0.7;color:aqua;font-weight: 900;font-size:0.5rem;
  }
}

.VideoHolder{
  position: fixed;
  display: flex;
  width:100%;
  justify-content: center;
  z-index:50;
  top:25%;
}
.VideoHolder video{
   object-fit: cover;
   border-radius: 60%;
   width:50%;
}
video:hover{
    transition-duration: 1s;
    width:70%;
}
@media (max-width: 600px) {
  .VideoHolder {
    height:25%;
  }
}
</style>