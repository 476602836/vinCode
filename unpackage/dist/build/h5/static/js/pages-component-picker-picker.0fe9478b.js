(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-picker-picker"],{"74cb":function(t,i,e){"use strict";e.r(i);var a=e("c4a5"),n=e("c694");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);var l=e("2877"),u=Object(l["a"])(n["default"],a["a"],a["b"],!1,null,"eafe4954",null);i["default"]=u.exports},abac:function(t,i,e){"use strict";function a(t){var i=new Date,e=i.getFullYear(),a=i.getMonth()+1,n=i.getDate();return"start"===t?e-=60:"end"===t&&(e+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(e,"-").concat(a,"-").concat(n)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{title:"picker",array:[{name:"中国"},{name:"美国"},{name:"巴西"},{name:"日本"}],index:0,multiArray:[["无脊柱动物","脊柱动物"],["扁性动物","线形动物","环节动物","软体动物","节肢动物"],["猪肉绦虫","吸血虫"]],multiIndex:[0,0,0],date:a({format:!0}),startDate:a("start"),endDate:a("end"),time:"12:01"}},methods:{bindPickerChange:function(t){console.log("picker发送选择改变，携带值为："+t.target.value),this.index=t.target.value},bindMultiPickerColumnChange:function(t){switch(console.log("修改的列为："+t.detail.column+"，值为："+t.detail.value),this.multiIndex[t.detail.column]=t.detail.value,t.detail.column){case 0:switch(this.multiIndex[0]){case 0:this.multiArray[1]=["扁性动物","线形动物","环节动物","软体动物","节肢动物"],this.multiArray[2]=["猪肉绦虫","吸血虫"];break;case 1:this.multiArray[1]=["鱼","两栖动物","爬行动物"],this.multiArray[2]=["鲫鱼","带鱼"];break}this.multiIndex[1]=0,this.multiIndex[2]=0;break;case 1:switch(this.multiIndex[0]){case 0:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["猪肉绦虫","吸血虫"];break;case 1:this.multiArray[2]=["蛔虫"];break;case 2:this.multiArray[2]=["蚂蚁","蚂蟥"];break;case 3:this.multiArray[2]=["河蚌","蜗牛","蛞蝓"];break;case 4:this.multiArray[2]=["昆虫","甲壳动物","蛛形动物","多足动物"];break}break;case 1:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["鲫鱼","带鱼"];break;case 1:this.multiArray[2]=["青蛙","娃娃鱼"];break;case 2:this.multiArray[2]=["蜥蜴","龟","壁虎"];break}break}this.multiIndex[2]=0;break}this.$forceUpdate()},bindDateChange:function(t){this.date=t.target.value},bindTimeChange:function(t){this.time=t.target.value}}};i.default=n},c4a5:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("普通选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{value:t.index,range:t.array,"range-key":"name"},on:{change:function(i){i=t.$handleEvent(i),t.bindPickerChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.array[t.index].name))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("多列选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"multiSelector",value:t.multiIndex,range:t.multiArray},on:{columnchange:function(i){i=t.$handleEvent(i),t.bindMultiPickerColumnChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.multiArray[0][t.multiIndex[0]])+"，"+t._s(t.multiArray[1][t.multiIndex[1]])+"，"+t._s(t.multiArray[2][t.multiIndex[2]]))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("时间选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"time",value:t.time,start:"09:01",end:"21:01"},on:{change:function(i){i=t.$handleEvent(i),t.bindTimeChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.time))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("日期选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"date",value:t.date,start:t.startDate,end:t.endDate},on:{change:function(i){i=t.$handleEvent(i),t.bindDateChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.date))])],1)],1)],1)],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},c694:function(t,i,e){"use strict";e.r(i);var a=e("abac"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a}}]);