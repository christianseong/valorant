<template>
  <div class="Main mx-auto">
    <v-row no-gutters class="my-8">
      <v-col cols="12" lg="8">
        <v-card elevation="0" class="d-flex align-end pa-2" :height="mobileHeight" style="width:100%;">
          <v-card class="scopeCard" @click="goToView(boardResultMain[0].seq)" width="100%" height="100%">
            <v-row class="d-flex align-end" style="position:absolute; z-index:2; width:100%; height:100%;" no-gutters>
              <v-col class="mb-5 pa-5 pr-16" cols="12">
                <p style="color:white;" class="mainText pr-16">{{boardResultMain[0].title}}</p>
              </v-col>
            </v-row>
            <v-img gradient="to bottom, rgba(0,0,0,.33), rgba(0,0,0,1)" style="position:absolute;" :src="boardResultMain[0].thumb" width="100%" height="100%">
            </v-img>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-row no-gutters>
          <v-col cols="6" lg="12">
          <div class="d-flex align-end pa-2" style="width:100%; height:250px;">
            <v-card class="scopeCard" @click="goToView(boardResultMain[1].seq)" width="100%" height="100%">
              <v-row class="d-flex align-end" style="position:absolute; z-index:2; width:100%; height:100%;" no-gutters>
                  <v-col class="mb-5" cols="12">
                    <p style="color:white;" class="mainSubText px-5">{{boardResultMain[1].title}}</p>
                  </v-col>
              </v-row>
              <v-img gradient="to bottom, rgba(0,0,0,.33),rgba(0,0,0,.33), rgba(0,0,0,1)" style="position:absolute;" :src="boardResultMain[1].thumb" width="100%" height="100%">
              </v-img>
            </v-card>
          </div>
          </v-col>
          <v-col cols="6" lg="12">
            <div class="d-flex align-end pa-2" style=" width:100%; height:250px;">
            <v-card class="scopeCard" @click="goToView(boardResultMain[2].seq)" width="100%" height="100%">
                <v-row class="d-flex align-end" style="position:absolute; z-index:2; width:100%; height:100%;" no-gutters>
                  <v-col class="mb-5" cols="12">
                    <p style="color:white;" class="mainSubText px-5">{{boardResultMain[2].title}}</p>
                  </v-col>
                </v-row>
              <v-img gradient="to bottom, rgba(0,0,0,.33),rgba(0,0,0,.33), rgba(0,0,0,1)" style="position:absolute;" :src="boardResultMain[2].thumb" width="100%" height="100%">
              </v-img>
            </v-card>
          </div>
          </v-col>
        </v-row>

        
      </v-col>
    </v-row>
    <v-card v-if="!this.$vuetify.breakpoint.smAndDown" class="pa-2">
      <v-row class="pa-1" no-gutters>
        <v-col cols="12">
          <p class="mainSubText px-5 py-3" style="color:black;">많이 본 기사</p>
        <v-divider></v-divider>
        </v-col>
        <v-col class="pa-5" cols="12">
          <v-carousel cycle interval="3000" hide-delimiters show-arrows-on-hover>
            <v-carousel-item v-for="(i,idx) in boardResultViews" :key="idx">
              <div style="height:100%;" class="d-flex">
                <v-card rounded="0" class="d-flex justify-center align-center scopeCard" style="position:absolute;" width="100%" height="100%">
                  <v-img contain @click="goToView(i.seq)" gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.2)" style="position:absolute; cursor:pointer;" :src="i.thumb" width="100%" height="100%"></v-img>
                </v-card>
                <v-card width="100%" color="rgba(1,1,1,.6)" class="pa-10 align-self-end">
                  <p @click="goToView(i.seq)" style="color:white; cursor:pointer;" class="sliderTitleText mb-5">{{i.title}}</p>
                  <p @click="goToView(i.seq)" style="cursor:pointer; color:rgba(255,255,255,.7);" class="sliderSubText">{{i.pretext}}</p>
                </v-card>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-card>

    <v-card v-if="this.$vuetify.breakpoint.smAndDown" class="pa-2">
      <v-row class="pa-1" no-gutters>
        <v-col cols="12">
          <p class="mainSubText px-5 py-3" style="color:black;">많이 본 기사</p>
        <v-divider></v-divider>
        </v-col>
        <v-col cols="12">
          <v-carousel cycle interval="100000" hide-delimiters show-arrows-on-hover>
            <v-carousel-item v-for="(i,idx) in boardResultViews" :key="idx">
              <div style="height:100%;" class="d-flex">
                <v-card rounded="0" class="d-flex justify-center align-center scopeCard" style="position:absolute;" width="100%" height="100%">
                  <v-img @click="goToView(i.seq)" gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.2)" style="position:absolute; cursor:pointer;" :src="i.thumb" width="100%" height="100%"></v-img>
                </v-card>
                <v-card width="100%" color="rgba(1,1,1,.6)" class="pa-2 align-self-end">
                  <p @click="goToView(i.seq)" style="color:white; cursor:pointer;" class="sliderTitleText mb-5">{{i.title}}</p>
                  <p @click="goToView(i.seq)" style="cursor:pointer; color:rgba(255,255,255,.7);" class="sliderSubText">{{i.pretext}}</p>
                </v-card>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-2 my-10">
      <v-row class="pa-1" no-gutters>
        <v-col cols="12">
          <p class="mainSubText px-5 py-3" style="color:black;">최신 뉴스</p>
        <v-divider></v-divider>
        </v-col>
        <v-col v-for="(i,idx) in boardResult.slice(0,12)" :key="idx" cols="6" lg="4">
          <div class="pa-2 decoCard2" style="width:100%;">
            <v-card class="scopeCard" @click="goToView(i.seq)" width="100%" :height="mobileHeight2">
              <v-img gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.33)" style="position:absolute;" :src="i.thumb" width="100%" height="100%"></v-img>
              <v-card height="100%" width="100%" color="rgba(0,0,0,.2)"></v-card>
            </v-card>
            <v-card elevation="0" :class="{ 'px-5': !$vuetify.breakpoint.smAndDown, 'px-0': $vuetify.breakpoint.smAndDown }" class="py-1 d-flex align-end">
              <p @click="goToView(i.seq)" class="mainSubText" style="color:black; cursor:pointer;">{{i.title}}</p>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
  components:{
  },
  data(){
    return{
      mainArt0:0,
      mainArt1:1,
      mainArt2:2,
        boardResult:[
          {title:'',seq:0,},
          {title:'',seq:0,},
          {title:'',seq:0,},
          {title:'',seq:0,},
          {title:'',seq:0,},
          {title:'',seq:0,},
          {title:'',seq:0,},
          {title:'',seq:0,},
          {title:'',seq:0,},
          {title:'',seq:0,},
          {title:'',seq:0,},
          {title:'',seq:0,},
        ],
        boardResultViews:[
          {title:'',seq:1,thumb:''},
          {title:'',seq:2,thumb:''},
          {title:'',seq:3,thumb:''},
          {title:'',seq:4,thumb:''},
          {title:'',seq:5,thumb:''},
        ],
        boardResultMain:[
          {title:'',seq:1,thumb:''},
          {title:'',seq:2,thumb:''},
          {title:'',seq:3,thumb:''},
        ],
    }
  },
  computed:{
    mobileHeight(){
          switch(this.$vuetify.breakpoint.name){
            case 'xs' : return "300px";
            case 'sm' : return "300px";
            case 'md' : return "400px";
            case 'lg' : return "500px";
            case 'xl' : return "500px";
            default : return "500px";
        }
    },
    mobileHeight2(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "125px";
        case 'sm' : return "200px";
        case 'md' : return "250px";
        case 'lg' : return "250px";
        case 'xl' : return "250px";
        default : return "250px";
      }
    },
    mainArt(){
      return [this.mainArt0,this.mainArt1,this.mainArt2];
    },
  },
  created(){
    this.takeConfig();
  },
  methods:{
    takeConfig(){
      axios.post('http://alldayfootball.co.kr/api/config/findone',{
        id:"60d8f5569d4b9d6bafe4205e"
      })
      .then((res)=>{
        this.mainArt0 = res.data.info[0];
        this.mainArt1 = res.data.info[1];
        this.mainArt2 = res.data.info[2];
        this.takeBoard();
        this.takeBoardViews();
        this.takeMainBoard();
      })
    },
    takeBoard(){
      axios.post('http://alldayfootball.co.kr/api/board/takeboard',{
        bNum: null,
        limit: 12,
        page: 1,
        word:""
        })
        .then((res=>{
          this.boardResult = res.data.docs;
          this.findThumb();
          }))
    },
    takeMainBoard(){
      axios.post('http://alldayfootball.co.kr/api/board/findmain',{
        mainArt: [this.mainArt0,this.mainArt1,this.mainArt2]
        })
        .then((res=>{
          // this.boardResultMain = res.data;
          for(var i = 0; i<3; i++){
            for(var o = 0; o<3; o++){
              if(res.data[i].seq==this.mainArt[o]){
                this.boardResultMain[o] = res.data[i];
                // console.log(res.data[i].seq,this.mainArt[o]);
              }
            }
          }
          this.findThumbMain();
          }))
    },
    takeBoardViews(){
      axios.post('http://alldayfootball.co.kr/api/board/takeboardviews',{
        bNum: null,
        limit: 5,
        page: 1,
        word:""
        })
        .then((res=>{
          this.boardResultViews = res.data.docs;
          this.findThumbViews();
          this.findPretextViews();
          }))
    },


    findThumb(){
      for(var i = 0; i<this.boardResult.length; i++){
          if(this.boardResult[i].contents.includes('<img')){
          var tagIndex = this.boardResult[i].contents.indexOf('<img');
          var tagSrcIndex = this.boardResult[i].contents.indexOf('src="',tagIndex+4);
          var tagEndIndex = this.boardResult[i].contents.indexOf('"',tagSrcIndex+5);
          this.boardResult[i].thumb = this.boardResult[i].contents.slice(tagSrcIndex+5,tagEndIndex);
          }
      }
    },
    findThumbMain(){
      for(var i = 0; i<this.boardResultMain.length; i++){
          if(this.boardResultMain[i].contents.includes('<img')){
          var tagIndex = this.boardResultMain[i].contents.indexOf('<img');
          var tagSrcIndex = this.boardResultMain[i].contents.indexOf('src="',tagIndex+4);
          var tagEndIndex = this.boardResultMain[i].contents.indexOf('"',tagSrcIndex+5);
          this.boardResultMain[i].thumb = this.boardResultMain[i].contents.slice(tagSrcIndex+5,tagEndIndex);
          }
      }
    },
    findThumbViews(){
      for(var i = 0; i<this.boardResultViews.length; i++){
          if(this.boardResultViews[i].contents.includes('<img')){
          var tagIndex = this.boardResultViews[i].contents.indexOf('<img');
          var tagSrcIndex = this.boardResultViews[i].contents.indexOf('src="',tagIndex+4);
          var tagEndIndex = this.boardResultViews[i].contents.indexOf('"',tagSrcIndex+5);
          this.boardResultViews[i].thumb = this.boardResultViews[i].contents.slice(tagSrcIndex+5,tagEndIndex);
          }
      }
    },
    findPretextViews(){
      for(var i = 0; i<this.boardResultViews.length; i++){
          this.boardResultViews[i].pretext = this.boardResultViews[i].contents.replace(/(<([^>]+)>|&nbsp;)/ig," ").slice(0,200)+('...');
      }
    },
    goToView(num){
      location.href=`/articleView?num=${num}`;
    },
  },

}
</script>

<style>
.Main .scopeCard{
  overflow: hidden;
}
.Main .scopeCard:hover .v-image__image{
  transition-duration: .9s;
  width:105%;
  height: 105%;
}
.Main .scopeCard:hover p{
  text-decoration: underline;
}
</style>

<style scoped>
@import url("../assets/css/unify.css");
.decoCard:hover{
  background-color:black;
  color:white;
}
.decoCard:hover .sliderTitleText{
  text-decoration: underline;
  color:white;
}
.decoCard:hover .sliderSubText{
  color:white;
}
.decoCard:hover .coInherit{
  color:white;
}

.decoCard2:hover .headerText{
  text-decoration: underline;
  color:white;
}

</style>