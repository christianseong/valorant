(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb53be56"],{"13b3":function(t,e,i){},"166a":function(t,e,i){},"22de":function(t,e,i){"use strict";i("8319")},3860:function(t,e,i){"use strict";var s=i("604c");e["a"]=s["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return s["a"].options.computed.classes.call(this)}},methods:{genData:s["a"].options.methods.genData}})},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var s=i("5530"),n=(i("a9e3"),i("4de4"),i("caad"),i("2532"),i("a434"),i("159b"),i("fb6a"),i("7db0"),i("c740"),i("166a"),i("a452")),a=i("7560"),r=i("58df"),o=i("d9bd"),l=Object(r["a"])(n["a"],a["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(s["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex((function(e){return e===t}));this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"63b7":function(t,e,i){},8319:function(t,e,i){},"8ce9":function(t,e,i){},afdd:function(t,e,i){"use strict";var s=i("8336");e["a"]=s["a"]},c3f0:function(t,e,i){"use strict";i("159b");var s=i("80d2"),n=function(t){var e=t.touchstartX,i=t.touchendX,s=t.touchstartY,n=t.touchendY,a=.5,r=16;t.offsetX=i-e,t.offsetY=n-s,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&i<e-r&&t.left(t),t.right&&i>e+r&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&n<s-r&&t.up(t),t.down&&n>s+r&&t.down(t))};function a(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function r(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),n(e)}function o(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return a(t,e)},touchend:function(t){return r(t,e)},touchmove:function(t){return o(t,e)}}}function u(t,e,i){var n=e.value,a=n.parent?t.parentElement:t,r=n.options||{passive:!0};if(a){var o=l(e.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[i.context._uid]=o,Object(s["q"])(o).forEach((function(t){a.addEventListener(t,o[t],r)}))}}function c(t,e,i){var n=e.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var a=n._touchHandlers[i.context._uid];Object(s["q"])(a).forEach((function(t){n.removeEventListener(t,a[t])})),delete n._touchHandlers[i.context._uid]}}var h={inserted:u,unbind:c};e["a"]=h},cd56:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Main mx-auto"},[i("v-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",lg:"8"}},[i("div",{staticClass:"d-flex align-end pa-1",staticStyle:{width:"100%",height:"500px"}},[i("v-card",{staticClass:"scopeCard",attrs:{width:"100%",height:"100%"},on:{click:function(e){return t.goToView(t.boardResult[0].seq)}}},[i("v-row",{staticClass:"d-flex align-end",staticStyle:{position:"absolute","z-index":"2",width:"100%",height:"100%"},attrs:{"no-gutters":""}},[i("v-col",{staticClass:"mb-5 pa-5 pr-16",attrs:{cols:"12"}},[i("p",{staticClass:"mainTitleText pr-16"},[t._v(t._s(t.boardResult[0].title))])])],1),i("v-img",{staticStyle:{position:"absolute"},attrs:{gradient:"to top right, rgba(0,0,0,.33), rgba(0,0,0,.33)",src:t.boardResult[0].thumb,width:"100%",height:"100%"}})],1)],1)]),i("v-col",{attrs:{cols:"12",lg:"4"}},[i("div",{staticClass:"d-flex align-end pa-1",staticStyle:{width:"100%",height:"250px"}},[i("v-card",{staticClass:"scopeCard",attrs:{width:"100%",height:"100%"},on:{click:function(e){return t.goToView(t.boardResult[1].seq)}}},[i("v-row",{staticClass:"d-flex align-end",staticStyle:{position:"absolute","z-index":"2",width:"100%",height:"100%"},attrs:{"no-gutters":""}},[i("v-col",{staticClass:"mb-5 pa-5 pr-16",attrs:{cols:"12"}},[i("p",{staticClass:"mainSubTitleText pr-16"},[t._v(t._s(t.boardResult[1].title))])])],1),i("v-img",{staticStyle:{position:"absolute"},attrs:{gradient:"to top right, rgba(0,0,0,.33), rgba(0,0,0,.33)",src:t.boardResult[1].thumb,width:"100%",height:"100%"}})],1)],1),i("div",{staticClass:"d-flex align-end pa-1",staticStyle:{width:"100%",height:"250px"}},[i("v-card",{staticClass:"scopeCard",attrs:{width:"100%",height:"100%"},on:{click:function(e){return t.goToView(t.boardResult[2].seq)}}},[i("v-row",{staticClass:"d-flex align-end",staticStyle:{position:"absolute","z-index":"2",width:"100%",height:"100%"},attrs:{"no-gutters":""}},[i("v-col",{staticClass:"mb-5 pa-5 pr-16",attrs:{cols:"12"}},[i("p",{staticClass:"mainSubTitleText pr-16"},[t._v(t._s(t.boardResult[2].title))])])],1),i("v-img",{staticStyle:{position:"absolute"},attrs:{gradient:"to top right, rgba(0,0,0,.33), rgba(0,0,0,.33)",src:t.boardResult[2].thumb,width:"100%",height:"100%"}})],1)],1)])],1),i("v-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},[i("v-row",{staticStyle:{border:"1px solid rgba(0,0,0,.2)"},attrs:{"no-gutters":""}},[i("v-col",{staticClass:"green darken-3",attrs:{cols:"12"}},[i("p",{staticClass:"mainSubTitleText px-5 py-3",staticStyle:{"font-weight":"300"}},[t._v("많이 본 기사")]),i("v-divider")],1),i("v-col",{attrs:{cols:"12"}},[i("v-carousel",{attrs:{cycle:"",interval:"3000","hide-delimiters":"","show-arrows-on-hover":""}},t._l(t.boardResultViews,(function(e,s){return i("v-carousel-item",{key:s},[i("v-row",{staticStyle:{height:"100%"},attrs:{"no-gutters":""}},[i("v-col",{staticClass:"pa-10",attrs:{cols:"4"}},[i("v-card",{attrs:{width:"100%",height:"100%"}},[i("v-img",{staticStyle:{position:"absolute",cursor:"pointer"},attrs:{gradient:"to top right, rgba(0,0,0,.5), rgba(0,0,0,.2)",src:e.thumb,width:"100%",height:"100%"},on:{click:function(i){return t.goToView(e.seq)}}})],1)],1),i("v-col",{staticClass:"my-auto pa-10",attrs:{cols:"8"}},[i("p",{staticClass:"mainSubTitleText",staticStyle:{color:"black",cursor:"pointer"},on:{click:function(i){return t.goToView(e.seq)}}},[t._v(t._s(e.title))]),i("p",{staticClass:"listSubText",staticStyle:{cursor:"pointer"},on:{click:function(i){return t.goToView(e.seq)}}},[t._v(t._s(e.pretext))])])],1)],1)})),1)],1)],1)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"green darken-3",attrs:{cols:"12"}},[i("p",{staticClass:"mainSubTitleText px-5 py-3",staticStyle:{"font-weight":"300"}},[t._v("최신 뉴스")]),i("v-divider")],1)],1),i("v-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},t._l(t.boardResult.slice(3,16),(function(e,s){return i("v-col",{key:s,attrs:{cols:"6",lg:"4"}},[i("div",{staticStyle:{border:"1px solid rgba(0,0,0,.2)",width:"100%"}},[i("v-card",{staticClass:"scopeCard",attrs:{width:"100%",height:"250"},on:{click:function(i){return t.goToView(e.seq)}}},[i("v-img",{staticStyle:{position:"absolute"},attrs:{gradient:"to top right, rgba(0,0,0,.33), rgba(0,0,0,.33)",src:e.thumb,width:"100%",height:"100%"}})],1),i("v-card",{staticClass:"px-5 py-1",attrs:{height:"75",width:"100%",color:"green darken-3"}},[i("p",{staticClass:"mainSubTitleText pr-10",staticStyle:{cursor:"pointer"},on:{click:function(i){return t.goToView(e.seq)}}},[t._v(t._s(e.title))])])],1)])})),1)],1)},n=[],a=(i("caad"),i("2532"),i("fb6a"),i("ac1f"),i("5319"),i("bc3a")),r=i.n(a),o={data:function(){return{boardResult:[{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0},{title:"",seq:0}],boardResultViews:[{title:"",seq:1,thumb:""},{title:"",seq:2,thumb:""},{title:"",seq:3,thumb:""},{title:"",seq:4,thumb:""},{title:"",seq:5,thumb:""}]}},computed:{},created:function(){this.takeBoardViews(),this.takeBoard()},methods:{takeBoard:function(){var t=this;r.a.post("http://alldayfootball.co.kr/api/board/takeboard",{bNum:null,limit:15,page:1,word:""}).then((function(e){t.boardResult=e.data.docs,t.findThumb()}))},takeBoardViews:function(){var t=this;r.a.post("http://alldayfootball.co.kr/api/board/takeboardviews",{bNum:null,limit:5,page:1,word:""}).then((function(e){t.boardResultViews=e.data.docs,t.findThumbViews(),t.findPretextViews()}))},findThumb:function(){for(var t=0;t<this.boardResult.length;t++)if(this.boardResult[t].contents.includes("<img")){var e=this.boardResult[t].contents.indexOf("<img"),i=this.boardResult[t].contents.indexOf('src="',e+4),s=this.boardResult[t].contents.indexOf('"',i+5);this.boardResult[t].thumb=this.boardResult[t].contents.slice(i+5,s)}},findThumbViews:function(){for(var t=0;t<this.boardResultViews.length;t++)if(this.boardResultViews[t].contents.includes("<img")){var e=this.boardResultViews[t].contents.indexOf("<img"),i=this.boardResultViews[t].contents.indexOf('src="',e+4),s=this.boardResultViews[t].contents.indexOf('"',i+5);this.boardResultViews[t].thumb=this.boardResultViews[t].contents.slice(i+5,s)}},findPretextViews:function(){for(var t=0;t<this.boardResultViews.length;t++)this.boardResultViews[t].pretext=this.boardResultViews[t].contents.replace(/(<([^>]+)>|&nbsp;)/gi," ").slice(0,200)+"..."},goToView:function(t){location.href="/articleView?num=".concat(t)}}},l=o,u=(i("22de"),i("2877")),c=i("6544"),h=i.n(c),d=i("b0af"),f=i("5530"),v=(i("a9e3"),i("d81d"),i("63b7"),i("f665")),p=i("afdd"),m=i("9d26"),g=i("37c6"),b=i("480e"),w=i("3860"),y=i("80d2"),x=i("d9bd"),V=v["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({},v["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(x["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genDefaultSlot:function(){var t,e=this;return null==(t=this.$slots.default)?void 0:t.map((function(t){return e.$createElement(b["a"],{props:{light:!e.theme.isDark,dark:e.theme.isDark}},[t])}))},genControlIcons:function(){return this.isVertical?null:v["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],s=0;s<e;s++){var n=this.$createElement(p["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",s+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[s],s)}},[this.$createElement(m["a"],{props:{size:18}},this.delimiterIcon)]);i.push(n)}return this.$createElement(w["a"],{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(g["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=v["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(y["d"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),T=i("9d65"),C=i("4e82"),I=i("c3f0"),S=i("58df"),$=Object(S["a"])(T["a"],Object(C["a"])("windowGroup","v-window-item","v-window")),_=$.extend().extend().extend({name:"v-window-item",directives:{Touch:I["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(y["d"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(y["d"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),R=i("adda"),O=i("1c87"),k=Object(S["a"])(_,O["a"]),B=k.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(R["a"],{staticClass:"v-carousel__item",props:Object(f["a"])(Object(f["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(y["l"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),q=i("62ad"),A=i("ce7e"),D=i("0fd9b"),j=Object(u["a"])(l,s,n,!1,null,null,null);e["default"]=j.exports;h()(j,{VCard:d["a"],VCarousel:V,VCarouselItem:B,VCol:q["a"],VDivider:A["a"],VImg:R["a"],VRow:D["a"]})},ce7e:function(t,e,i){"use strict";var s=i("5530"),n=(i("8ce9"),i("7560"));e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},f665:function(t,e,i){"use strict";var s=i("5530"),n=(i("99af"),i("7db0"),i("c740"),i("13b3"),i("c3f0")),a=i("afdd"),r=i("9d26"),o=i("604c");e["a"]=o["a"].extend({name:"v-window",directives:{Touch:n["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(s["a"])(Object(s["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var s,n=this,o={click:function(t){t.stopPropagation(),n.changedByDelimiters=!0,i()}},l={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},u=null!=(s=null==this.$scopedSlots[t]?void 0:this.$scopedSlots[t]({on:o,attrs:l}))?s:[this.$createElement(a["a"],{props:{icon:!0},attrs:l,on:o},[this.$createElement(r["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},u)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){var n=this.genIcon("next",s,this.next);n&&t.push(n)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,s=i-1;return i<=2?t<e:t===s&&0===e||(0!==t||e!==s)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var s=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:s})}return t("div",i,[this.genContainer()])}})}}]);
//# sourceMappingURL=chunk-fb53be56.e8fcf56a.js.map