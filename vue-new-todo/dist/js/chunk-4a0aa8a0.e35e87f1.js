(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a0aa8a0"],{"07ac":function(t,e,a){var n=a("23e7"),r=a("6f53").values;n({target:"Object",stat:!0},{values:function(t){return r(t)}})},"1dde":function(t,e,a){var n=a("d039"),r=a("b622"),s=a("2d00"),i=r("species");t.exports=function(t){return s>=51||!n((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3c7e":function(t,e,a){"use strict";a("a2ab")},"6f53":function(t,e,a){var n=a("83ab"),r=a("df75"),s=a("fc6a"),i=a("d1e7").f,o=function(t){return function(e){var a,o=s(e),c=r(o),u=c.length,l=0,d=[];while(u>l)a=c[l++],n&&!i.call(o,a)||d.push(t?[a,o[a]]:o[a]);return d}};t.exports={entries:o(!0),values:o(!1)}},8418:function(t,e,a){"use strict";var n=a("c04e"),r=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var i=n(e);i in t?r.f(t,i,s(0,a)):t[i]=a}},"91ea":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board container"},[a("p",{staticClass:"board_title"},[t._v("자유게시판")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text"},domProps:{value:t.keyword},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),a("a",{staticClass:"btnSearch btn",attrs:{href:"#"},on:{click:t.search}},[t._v("검색")]),a("table",{staticClass:"table table-hover"},[t._m(0),a("tbody",t._l(t.paginatedData,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(t.IndexCount(n+1)))]),a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.author))]),a("td",[t._v(t._s(e.saveDate))]),a("td",[t._v(t._s(e.like))])])})),0)]),a("hr"),t._m(1),a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item"},[a("button",{staticClass:"page-link",attrs:{disabled:0===t.pageNum,href:"#"},on:{click:t.prevPage}},[t._v("이전")])]),a("li",{staticClass:"page-item"},[a("button",{staticClass:"page-link pagecount",attrs:{href:"#"}},[t._v(t._s(t.pageNum+1)+"/"+t._s(t.pageCount)+"페이지")])]),a("li",{staticClass:"page-item"},[a("button",{staticClass:"page-link",attrs:{disabled:t.pageNum>=t.pageCount-1},on:{click:t.nextPage}},[t._v("다음")])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("No")]),a("th",[t._v("제목")]),a("th",[t._v("글쓴이")]),a("th",[t._v("작성시간")]),a("th",[t._v("좋아요")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"write_position"},[a("a",{staticClass:"btn btn-dark a-hover",attrs:{href:"/board/post"}},[t._v("글쓰기")])])}],s=(a("07ac"),a("fb6a"),{data:function(){return{result:null,pageNum:0,pageSize:10,listArray:[],addIndex:0,keyword:""}},methods:{prevPage:function(){this.pageNum=this.pageNum-1},nextPage:function(){this.pageNum=this.pageNum+1},IndexCount:function(t){var e=this.pageNum*this.pageSize,a=this.addIndex+e;return a=this.addIndex+e,a+t},search:function(){var t=this;console.log(this.keyword),this.$axios.get("http://localhost:4500/search/board",{params:{title:this.keyword}}).then((function(e){console.log(e.data),t.result=e.data,t.listArray=Object.values(t.result)})).catch((function(t){console.error(t)}))}},computed:{pageCount:function(){var t=this.listArray.length,e=this.pageSize,a=Math.floor(t/e);return t%e>0&&(a+=1),a},paginatedData:function(){var t=this.pageNum*this.pageSize,e=t+this.pageSize,a=function(a){return console.log(t),console.log(e),a.reverse()};return a(this.listArray).slice(t,e)}},created:function(){var t=this;this.$axios.get("http://localhost:4500/getboard",{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json; charset = utf-8"}}).then((function(e){t.result=e.data,t.listArray=Object.values(t.result),console.log(t.listArray)})).catch((function(t){console.error(t)}))}}),i=s,o=(a("3c7e"),a("2877")),c=Object(o["a"])(i,n,r,!1,null,"7b0c5389",null);e["default"]=c.exports},a2ab:function(t,e,a){},e8b5:function(t,e,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,e,a){"use strict";var n=a("23e7"),r=a("861d"),s=a("e8b5"),i=a("23cb"),o=a("50c4"),c=a("fc6a"),u=a("8418"),l=a("b622"),d=a("1dde"),f=d("slice"),p=l("species"),h=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var a,n,l,d=c(this),f=o(d.length),g=i(t,f),b=i(void 0===e?f:e,f);if(s(d)&&(a=d.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?r(a)&&(a=a[p],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(d,g,b);for(n=new(void 0===a?Array:a)(v(b-g,0)),l=0;g<b;g++,l++)g in d&&u(n,l,d[g]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-4a0aa8a0.e35e87f1.js.map