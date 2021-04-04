<template>
    <div class = "board container"> 
        <p class="board_title">자유게시판</p>
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
                <tr v-for = "(i,idx) in paginatedData" :key="idx">
                    <td>{{IndexCount(idx+1)}}</td>
                    <td>{{i.title}}</td>
                    <td>{{i.author}}</td>
                    <td>{{i.saveDate}}</td>
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


</template>

<script>
export default {
    data(){
        return {
            result : null,
            pageNum : 0,
            pageSize : 10,
            listArray : [],
            addIndex : 0
        }
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
    }
    },

    computed:{
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
           
        return this.listArray.slice(start, end);
    },

    },

     created(){
            this.$axios.get('http://localhost:4500/getboard',{
            headers :{
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset = utf-8'
            }
        })
        .then((res) => {
            this.result = res.data;

            this.listArray = Object.values(this.result);
            console.log(this.listArray);
           



        })
        .catch((err)=>{
            console.error(err);
        });
    },


    /*
     watch : {
      result(){
        //console.log("changed");
        setTimeout(()=>{
        this.$axios.get('http://localhost:4500/getboard',{
            headers :{
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset = utf-8'
            }
        })
        .then((res) => {
            this.result = res.data;
            console.log(this.result);
           



        })
        .catch((err)=>{
            console.error(err);
        });
        },100000)
      }
    },
    */
    
}
</script>

<style scoped> 
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