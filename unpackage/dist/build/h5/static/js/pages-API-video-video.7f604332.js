(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-video-video"],{"02a2":function(e,t,i){var n=i("6c65");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("4f06").default;s("50f60826",n,!0,{sourceMap:!1,shadowMode:!1})},"348a":function(e,t,i){"use strict";i.r(t);var n=i("ceed"),s=i.n(n);for(var c in n)"default"!==c&&function(e){i.d(t,e,function(){return n[e]})}(c);t["default"]=s.a},"409f":function(e,t,i){"use strict";i.r(t);var n=i("6c1d"),s=i("348a");for(var c in s)"default"!==c&&function(e){i.d(t,e,function(){return s[e]})}(c);i("d476");var u=i("2877"),a=Object(u["a"])(s["default"],n["a"],n["b"],!1,null,"53c14c50",null);t["default"]=a.exports},"6c1d":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("视频来源")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.sourceType,value:e.sourceTypeIndex},on:{change:function(t){t=e.$handleEvent(t),e.sourceTypeChange(t)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sourceType[e.sourceTypeIndex]))])],1)],1)],1)],1)],1),e.src?[i("v-uni-video",{staticClass:"video",attrs:{src:e.src}})]:[i("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){t=e.$handleEvent(t),e.chooseVideo(t)}}},[e._v("+ 添加视频")])]],2)},s=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return s})},"6c65":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".video[data-v-53c14c50]{width:100%}",""])},ceed:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[["camera"],["album"],["camera","album"]],s={data:function(){return{title:"chooseVideo",sourceTypeIndex:2,sourceType:["拍摄","相册","拍摄或相册"],src:""}},onUnload:function(){this.src="",this.sourceTypeIndex=2,this.sourceType=["拍摄","相册","拍摄或相册"]},methods:{sourceTypeChange:function(e){this.sourceTypeIndex=e.target.value},chooseVideo:function(){var e=this;uni.chooseVideo({sourceType:n[this.sourceTypeIndex],success:function(t){e.src=t.tempFilePath}})}}};t.default=s},d476:function(e,t,i){"use strict";var n=i("02a2"),s=i.n(n);s.a}}]);