(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-tabbar-tabbar"],{"05d4":function(t,e,i){"use strict";i.r(e);var n=i("4a92"),a=i("36eb");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("d55b");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"356b060a",null);e["default"]=r.exports},"36eb":function(t,e,i){"use strict";i.r(e);var n=i("de2d"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"4a92":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-tab-bar"},[i("v-uni-scroll-view",{staticClass:"uni-swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabBars,function(e,n){return i("v-uni-view",{key:e.id,staticClass:"swiper-tab-list",class:t.tabIndex==n?"active":"",attrs:{id:e.id,"data-current":n},on:{click:function(e){e=t.$handleEvent(e),t.tapTab(e)}}},[t._v(t._s(e.name))])}),1),i("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.tabIndex,duration:300},on:{change:function(e){e=t.$handleEvent(e),t.changeTab(e)}}},t._l(t.newsitems,function(e,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-scroll-view",{staticClass:"list",attrs:{"scroll-y":""},on:{scrolltolower:function(e){e=t.$handleEvent(e),t.loadMore(n)}}},[t._l(e.data,function(e,a){return[i("media-list",{key:a+"_0",attrs:{options:e},on:{close:function(e){e=t.$handleEvent(e),t.close(n,a)},click:function(i){i=t.$handleEvent(i),t.goDetail(e)}}})]}),i("v-uni-view",{staticClass:"uni-tab-bar-loading"},[t._v(t._s(e.loadingText))])],2)],1)}),1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"85b8":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-view[data-v-93d7c4a6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.list-cell[data-v-93d7c4a6]{width:%?750?%;padding:0 %?30?%}.uni-list-cell-hover[data-v-93d7c4a6]{background-color:#eee}.media-list[data-v-93d7c4a6]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#c8c7cc;padding:%?20?% 0}.media-image-right[data-v-93d7c4a6]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.media-image-left[data-v-93d7c4a6]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.media-title[data-v-93d7c4a6]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.media-title[data-v-93d7c4a6]{lines:3;-o-text-overflow:ellipsis;text-overflow:ellipsis;font-size:%?32?%;color:#555}.media-title2[data-v-93d7c4a6]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin-top:%?6?%;line-height:%?40?%}.image-section[data-v-93d7c4a6]{margin-top:%?20?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.image-section-right[data-v-93d7c4a6]{margin-top:%?0?%;margin-left:%?10?%;width:%?225?%;height:%?146?%}.image-section-left[data-v-93d7c4a6]{margin-top:%?0?%;margin-right:%?10?%;width:%?225?%;height:%?146?%}.image-list1[data-v-93d7c4a6]{width:%?690?%;height:%?481?%}.image-list2[data-v-93d7c4a6]{width:%?225?%;height:%?146?%}.image-list3[data-v-93d7c4a6]{width:%?225?%;height:%?146?%}.media-info[data-v-93d7c4a6]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.info-text[data-v-93d7c4a6]{margin-right:%?20?%;color:#999;font-size:%?24?%}.media-foot[data-v-93d7c4a6]{margin-top:%?20?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.max-close-view[data-v-93d7c4a6]{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?40?%;width:%?80?%}.close-view[data-v-93d7c4a6]{border-style:solid;border-width:1px;border-color:#999;border-radius:%?10?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?30?%;width:%?40?%;line-height:%?30?%}.close[data-v-93d7c4a6]{text-align:center;color:#999;font-size:%?28?%}",""])},"8ad2":function(t,e,i){"use strict";i.r(e);var n=i("c293"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"9a26":function(t,e,i){"use strict";var n=i("c3ac"),a=i.n(n);a.a},b6a0:function(t,e,i){"use strict";i.r(e);var n=i("e6f1"),a=i("8ad2");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("9a26");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"93d7c4a6",null);e["default"]=r.exports},c293:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{options:{type:Object,default:function(t){return{}}}},methods:{close:function(t){this.$emit("close")},bindClick:function(){this.$emit("click")}}};e.default=n},c3ac:function(t,e,i){var n=i("85b8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d3b9443a",n,!0,{sourceMap:!1,shadowMode:!1})},ca0b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-tab-bar-loading[data-v-356b060a]{text-align:center;font-size:%?28?%;color:#999}",""])},cf12:function(t,e,i){var n=i("ca0b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("f3830bf8",n,!0,{sourceMap:!1,shadowMode:!1})},d55b:function(t,e,i){"use strict";var n=i("cf12"),a=i.n(n);a.a},de2d:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("a34a")),a=o(i("b6a0"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e,i,n,a,o,s){try{var r=t[o](s),c=r.value}catch(l){return void i(l)}r.done?e(c):Promise.resolve(c).then(n,a)}function r(t){return function(){var e=this,i=arguments;return new Promise(function(n,a){var o=t.apply(e,i);function r(t){s(o,n,a,r,c,"next",t)}function c(t){s(o,n,a,r,c,"throw",t)}r(void 0)})}}var c={data0:{datetime:"40分钟前",article_type:0,title:"uni-app行业峰会频频亮相，开发者反响热烈!",source:"DCloud",comment_count:639},data1:{datetime:"一天前",article_type:1,title:"DCloud完成B2轮融资，uni-app震撼发布!",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data2:{datetime:"一天前",article_type:2,title:"中国技术界小奇迹：HBuilder开发者突破200万",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data3:{article_type:3,image_list:[{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",width:563,height:316},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",width:641,height:360},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",width:640,height:360}],datetime:"5分钟前",title:"uni-app 支持使用 npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11},data4:{datetime:"2小时前",article_type:4,title:"uni-app 支持原生小程序自定义组件，更开放、更自由",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:69}},l={components:{mediaList:a.default},data:function(){return{scrollLeft:0,isClickChange:!1,tabIndex:0,newsitems:[],tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}]}},onLoad:function(){this.newsitems=this.randomfn()},methods:{goDetail:function(t){uni.navigateTo({url:"/pages/template/tabbar/detail/detail?title="+t.title})},close:function(t,e){var i=this;uni.showModal({content:"是否删除本条信息？",success:function(n){n.confirm&&i.newsitems[t].data.splice(e,1)}})},loadMore:function(t){var e=this;setTimeout(function(){e.addData(t)},1200)},addData:function(t){if(this.newsitems[t].data.length>30)this.newsitems[t].loadingText="没有更多了";else for(var e=1;e<=10;e++)this.newsitems[t].data.push(c["data"+Math.floor(5*Math.random())])},changeTab:function(){var t=r(n.default.mark(function t(e){var i,a,o,s,r,c,l,d,u;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.target.current,0===this.newsitems[i].data.length&&this.addData(i),!this.isClickChange){t.next=6;break}return this.tabIndex=i,this.isClickChange=!1,t.abrupt("return");case 6:return t.next=8,this.getElSize("tab-bar");case 8:a=t.sent,o=a.scrollLeft,s=0,r=0;case 12:if(!(r<i)){t.next=20;break}return t.next=15,this.getElSize(this.tabBars[r].id);case 15:c=t.sent,s+=c.width;case 17:r++,t.next=12;break;case 20:return l=uni.getSystemInfoSync().windowWidth,t.next=23,this.getElSize(this.tabBars[i].id);case 23:d=t.sent,u=d.width,s+u-o>l&&(this.scrollLeft=s+u-l),s<o&&(this.scrollLeft=s),this.isClickChange=!1,this.tabIndex=i;case 29:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getElSize:function(t){return new Promise(function(e,i){uni.createSelectorQuery().select("#"+t).fields({size:!0,scrollOffset:!0},function(t){e(t)}).exec()})},tapTab:function(){var t=r(n.default.mark(function t(e){var i,a,o;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.target.dataset.current,0===this.newsitems[i].data.length&&this.addData(i),this.tabIndex!==i){t.next=6;break}return t.abrupt("return",!1);case 6:return t.next=8,this.getElSize("tab-bar");case 8:a=t.sent,o=a.scrollLeft,this.scrollLeft=o,this.isClickChange=!0,this.tabIndex=i;case 13:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),randomfn:function(){for(var t=[],e=0,i=this.tabBars.length;e<i;e++){var n={loadingText:"加载更多...",data:[]};if(e<1)for(var a=1;a<=10;a++)n.data.push(c["data"+Math.floor(5*Math.random())]);t.push(n)}return t}}};e.default=l},e6f1:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"uni-list-cell-hover"},on:{click:function(e){e=t.$handleEvent(e),t.bindClick(e)}}},[t.options.title?i("v-uni-view",{staticClass:"media-list"},[i("v-uni-view",{class:{"media-image-right":2===t.options.article_type,"media-image-left":1===t.options.article_type}},[i("v-uni-text",{staticClass:"media-title",class:{"media-title2":1===t.options.article_type||2===t.options.article_type}},[t._v(t._s(t.options.title))]),t.options.image_list||t.options.image_url?i("v-uni-view",{staticClass:"image-section",class:{"image-section-right":2===t.options.article_type,"image-section-left":1===t.options.article_type}},[t.options.image_url?i("v-uni-image",{staticClass:"image-list1",class:{"image-list2":1===t.options.article_type||2===t.options.article_type},attrs:{src:t.options.image_url}}):t._e(),t._l(t.options.image_list,function(e,n){return t.options.image_list?i("v-uni-image",{key:n,staticClass:"image-list3",attrs:{src:e.url}}):t._e()})],2):t._e()],1),i("v-uni-view",{staticClass:"media-foot"},[i("v-uni-view",{staticClass:"media-info"},[i("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.options.source))]),i("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.options.comment_count)+"条评论")]),i("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.options.datetime))])],1),i("v-uni-view",{staticClass:"max-close-view",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.close(e)}}},[i("v-uni-view",{staticClass:"close-view"},[i("v-uni-text",{staticClass:"close"},[t._v("×")])],1)],1)],1)],1):t._e()],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}}]);