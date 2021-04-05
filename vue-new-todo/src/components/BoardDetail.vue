<template>
  <div>
        
        <div class="AddWrap">
            <h2>게시글</h2>
            <form>
                <table class="tbAdd">
                    <colgroup>
                        <col width="10%" />
                        <col width="*" />
                    </colgroup>
                    <tr>
                        <th>제목</th>
                        <td>{{$route.params.title}}</td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>{{$route.params.author}}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td class="textBox">
                            {{$route.params.contents}}
                        </td>
                    </tr>
                </table>
            </form>
        </div>

        <div class="btnWrap">
            <a href="#" class="list_btn btn">목록</a>
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
        min-height:35px;
        font-size: 0.8rem;
        box-sizing:border-box;
    }
    .textBox {
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