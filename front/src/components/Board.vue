<template>
  <div class="Board">
    <div class = "board container"> 
      <p class="board_title">자유게시판</p>
      <input type="text" v-model="keyword" @keypress.enter = "search" /><a href="#" @click="search" class ="btnSearch btn">검색</a>

      <table class="table table-hover">
        <thead>
          <tr>
          <th>No</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>작성시간</th>
          <th>좋아요</th>
          </tr>
        </thead> 

        <tbody>
                  <!-- <HomePopularA  v-for  = "(i,idx) in 10" :key = "idx" v-bind:result="this.result"></HomePopularA> !-->
        <tr v-for = "(i,idx) in paginatedData" :key="idx" @click="clickParams(i.author,i.title,i.contents)">
            <td>{{IndexCount(idx+1)}}</td>
            <td>{{i.title}}</td>
            <td>{{i.author}}</td>
            <td>{{i.date}}</td>
            <td>{{i.like}}</td>
        </tr>
        </tbody>
        </table>
        <hr />
        <div class="write_position">
            <a class = "btn btn-dark a-hover" href="/board/post">글쓰기</a> 
        </div>
         <ul class="pagination">
            
            <li class="page-item"><button class="page-link" :disabled= "pageNum === 0"  @click = "prevPage" href="#">이전</button></li>
            <li class="page-item"><button class="page-link pagecount" href="#">{{pageNum+1}}/{{pageCount}}페이지</button></li>
            <li class="page-item"><button class="page-link" :disabled="pageNum >= pageCount - 1" @click= "nextPage">다음</button></li>
      
        </ul>
        
    </div>
    <div class="BackgroundHolder"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      result : null,
      pageNum : 0,
      pageSize : 10,
      listArray : [],
      addIndex : 0,
      keyword: ""
    }
  },
  beforeCreate(){
    console.log('게시판활성화');
    this.$store.dispatch('GetBoard');
  },
  created(){
    
  },
  computed:{
    boards(){
      this.$store.dispatch('GetBoard');
        return this.$store.state.boards;
    },
     pageCount (){
           let listLeng = this.listArray.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
            if (listLeng % listSize > 0) page += 1;
      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
        return page;
       },
    paginatedData () {
       const start = this.pageNum * this.pageSize,
       end = start + this.pageSize;
       const result = this.boards;
       const listArray = Object.values(result);

        const reverse = (list)=>{
        return list.reverse();
        }
        return reverse(listArray).slice(start, end);
    },
},
  methods:{
    prevPage(){
            this.pageNum = this.pageNum-1;
            //console.log(this.pageNum);
        },
        nextPage(){
            this.pageNum = this.pageNum+1;
            //console.log(this.pageNum);
        },
        IndexCount(idx){
        const start  = this.pageNum * this.pageSize;
        let addIndex = this.addIndex+start;
        addIndex = this.addIndex+ start;
        return addIndex+idx;
    },
    search(){
        console.log(this.keyword);
        this.$axios.get('http://localhost:4500/search/board',{
            params:{
                title : this.keyword
            }
        })
        .then((res) => {
           console.log(res.data)
           //this.paginatedData = res.data;
            this.result = res.data;
            this.listArray = Object.values(this.result);
        })
        .catch((err)=>{
            console.error(err);
        });
    },
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
    position: absolute;
    top:10px;
    width:100%;
    height:100%;
    background-color: #cccccc;
    opacity:0.1;
    border-radius: 20px;
    z-index:1;
}
.board{
  z-index:100;
}
.BackgroundHolder:hover{
    animation-duration:3s;
    opacity:0.1;
    
}
.a-hover:hover{
    background-color: coral;
    border-color: coral;
}
.board{
    position: relative;
    margin-top: 70px;
}
.board_title{
    font-size: 60px;
    font-weight: bold;
    color :#FF4655 ;
}
.table{
    color : black;
    
}
.pagination{
    justify-content: center;
}
.write_position{
    position: relative;
    left : 90%
}
.page-link{
    color : #FF4655;
}
</style>