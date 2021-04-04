<template>
  <div>
        

        <div class="AddWrap">
            <h2>글쓰기</h2>
            <form>
                <table class="tbAdd">
                    <colgroup>
                        <col width="10%" />
                        <col width="*" />
                    </colgroup>
                    <tr>
                        <th>제목</th>
                        <td><input type="text" v-model="title"/></td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td><input type="text" v-model="author"/></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td><textarea v-model="contents"></textarea></td>
                    </tr>
                </table>
            </form>
        </div>

        <div class="btnWrap">
            <a href="#" class="list_btn btn">목록</a>
            <a href="#" class="add_btn btn" @click = "postBoard">등록</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title : "",
            author : "",
            contents : "",
            form : null

        }
    },


    methods:{

        fnList(){ //리스트 화면으로 이동 함수
			this.$router.push({path:'/board',query:this.body});
			
		},
        postBoard(){
            if(!this.title) {
                alert("제목을 입력해주세요!");
                this.$title.focus();
                return;
            }
            this.form = {
                title: this.title,
                author: this.author,
                contents: this.contents
            }

            this.$axios.post("http://localhost:4500/postboard",this.form)
            .then((res)=>{
                console.log(res);
                if(res.data.success){
                    alert("등록완료");
                    this.fnList();
                } else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
        }
    }
}
</script>

<style scoped>

    .AddWrap{
        position: relative;
        margin-top: 100px;
        text-align: center;
  
    }

    
    .tbAdd {
        border-top:1px solid #888;
        width: 50%;
        min-width: 600px;
    }
    .tbAdd th, .tbAdd td {
        border-bottom:1px solid rgb(202, 202, 202);
        padding:5px 0;
    }
    .tbAdd td {
        padding:10px 10px;
        box-sizing:border-box;
    }
    .tbAdd input {
        width:100%;
        min-height:35px;
        box-sizing:border-box;
        padding:0 10px;
        font-size: 0.8rem;
    }
    .tbAdd textarea {
        width:100%;
        max-height:300px;
        min-height:300px;
        padding:10px;
        font-size: 0.8rem;
        box-sizing:border-box;
    }
    .btnWrap {
        text-align:center;
        margin-top: 10px;
    }
    .btnWrap a {
        margin:0 10px;
        color: white;
    }
    .add_btn {
        background: rgb(85, 85, 85);
    }
    .add_btn:hover {
        background: rgb(58, 58, 58);
    }
    .list_btn {
        background: rgb(37, 146, 255);
    }
    .list_btn:hover {
        background: rgb(4, 130, 255);
    }
    form {
        display: flex;
        justify-content: center;
    }
    h2 {
        font-weight: bold;
    }
</style>