(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-API-API"],{"0c6e":function(t,e,a){"use strict";a.r(e);var n=a("8867"),i=a("a681");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("0fea");var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"20e31c92",null);e["default"]=u.exports},"0fea":function(t,e,a){"use strict";var n=a("f6a2"),i=a.n(n);i.a},"1d6e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t.showSetTabBarPage?[a("set-tab-bar",{on:{unmount:function(e){e=t.$handleEvent(e),t.leaveSetTabBarPage(e)}}})]:[a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-pb"},[a("v-uni-view",{staticClass:"uni-header-logo"},[a("v-uni-image",{attrs:{src:"/static/apiIndex.png"}})],1),a("v-uni-view",{staticClass:"uni-hello-text uni-common-pb"},[t._v("以下将演示uni-app接口能力，详细文档见："),a("u-link",{attrs:{href:"https://uniapp.dcloud.io/api/",text:"https://uniapp.dcloud.io/api/",inWhiteList:!0}})],1),t._l(t.lists,function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-card"},[a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell uni-collapse"},[a("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-bottom",class:e.open?"uni-active":"",attrs:{"hover-class":"uni-list-cell-hover"},on:{click:function(e){e=t.$handleEvent(e),t.triggerCollapse(n)}}},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"uni-list uni-collapse",class:e.open?"uni-active":""},t._l(e.pages,function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",url:e.url},on:{click:function(a){a=t.$handleEvent(a),t.goDetailPage(e.url)}}},[a("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[t._v(t._s(e.name))])],1)}),1)],1)],1)],1)})],2)]],2)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"35eb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("0c6e")),i=o(a("5b2a"));function o(t){return t&&t.__esModule?t:{default:t}}var s={components:{setTabBar:n.default,uLink:i.default},data:function(){var t=[{name:"图片",url:"image"},{name:"视频",url:"video"}],e=[{id:"page",name:"界面",open:!1,pages:[{name:"设置导航条",url:"set-navigation-bar-title"},{name:"页面跳转",url:"navigator"},{name:"设置TabBar",url:"set-tabbar"},{name:"下拉刷新",url:"pull-down-refresh"},{name:"创建绘画",url:"canvas"},{name:"节点信息",url:"get-node-info"},{name:"显示操作菜单",url:"action-sheet"},{name:"显示模态弹窗",url:"modal"},{name:"显示加载提示框",url:"show-loading"},{name:"显示消息提示框",url:"toast"}]},{id:"device",name:"设备",open:!1,pages:[{name:"获取手机网络状态",url:"get-network-type"},{name:"获取手机系统信息",url:"get-system-info"},{name:"打电话",url:"make-phone-call"},{name:"监听加速度传感器",url:"on-accelerometer-change"},{name:"监听罗盘数据",url:"on-compass-change"}]},{id:"network",name:"网络",open:!1,pages:[{name:"发起一个请求",url:"request"},{name:"上传文件",url:"upload-file"},{name:"下载文件",url:"download-file"}]},{id:"media",name:"媒体",open:!1,pages:t},{id:"location",name:"位置",open:!1,pages:[{name:"获取当前位置",url:"get-location"},{name:"使用地图查看位置",url:"open-location"},{name:"使用地图选择位置",url:"choose-location"}]},{id:"storage",name:"数据",open:!1,pages:[{name:"数据存储",url:"storage"}]}];return{showSetTabBarPage:!1,lists:e}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/API/API"}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/about/about"})},onLoad:function(){},onReady:function(){},onShow:function(){this.leaveSetTabBarPage()},onHide:function(){this.leaveSetTabBarPage()},methods:{triggerCollapse:function(t){if(this.lists[t].pages)for(var e=0;e<this.lists.length;++e)this.lists[e].open=t===e&&!this.lists[t].open;else this.goDetailPage(this.lists[t].url)},goDetailPage:function(t){if("set-tabbar"!==t){var e=~t.indexOf("platform")?t:"/pages/API/"+t+"/"+t;console.log(e),uni.navigateTo({url:e})}else this.showSetTabBarPage=!0},leaveSetTabBarPage:function(){this.showSetTabBarPage=!1}}};e.default=s},4277:function(t,e,a){"use strict";a.r(e);var n=a("1d6e"),i=a("e713");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("f2b0");var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"dc82dfa2",null);e["default"]=u.exports},"4c8d":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-button[data-v-20e31c92]{margin-top:%?30?%}.btn-area[data-v-20e31c92]{padding-top:%?30?%}",""])},"5b2a":function(t,e,a){"use strict";a.r(e);var n=a("6ced"),i=a("71cb");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"4d038231",null);e["default"]=u.exports},"6ced":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticStyle:{"text-decoration":"underline"},attrs:{href:t.href,inWhiteList:t.inWhiteList},on:{click:function(e){e=t.$handleEvent(e),t.openURL(e)}}},[t._v(t._s(t.text))])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"71cb":function(t,e,a){"use strict";a.r(e);var n=a("c4a8"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"721f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"tababr",hasSetTabBarBadge:!1,hasShownTabBarRedDot:!1,hasCustomedStyle:!1,hasCustomedItem:!1,hasHiddenTabBar:!1}},destroyed:function(){if(this.hasSetTabBarBadge&&uni.removeTabBarBadge({index:1}),this.hasShownTabBarRedDot&&uni.hideTabBarRedDot({index:1}),this.hasHiddenTabBar&&uni.showTabBar(),this.hasCustomedStyle&&uni.setTabBarStyle({color:"#7A7E83",selectedColor:"#007AFF",backgroundColor:"#F8F8F8",borderStyle:"black"}),this.hasCustomedItem){var t={index:1,text:"接口",iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png"};uni.setTabBarItem(t)}},methods:{navigateBack:function(){this.$emit("unmount")},setTabBarBadge:function(){this.hasSetTabBarBadge?uni.removeTabBarBadge({index:1}):uni.setTabBarBadge({index:1,text:"1"}),this.hasSetTabBarBadge=!this.hasSetTabBarBadge},showTabBarRedDot:function(){this.hasShownTabBarRedDot?uni.hideTabBarRedDot({index:1}):uni.showTabBarRedDot({index:1}),this.hasShownTabBarRedDot=!this.hasShownTabBarRedDot},hideTabBar:function(){this.hasHiddenTabBar?uni.showTabBar():uni.hideTabBar(),this.hasHiddenTabBar=!this.hasHiddenTabBar},customStyle:function(){this.hasCustomedStyle?uni.setTabBarStyle({color:"#7A7E83",selectedColor:"#007AFF",backgroundColor:"#F8F8F8",borderStyle:"black"}):uni.setTabBarStyle({color:"#FFF",selectedColor:"#007AFF",backgroundColor:"#000000",borderStyle:"black"}),this.hasCustomedStyle=!this.hasCustomedStyle},customItem:function(){var t={index:1,text:"接口",iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png"};this.hasCustomedItem?uni.setTabBarItem(t):(t.text="API",uni.setTabBarItem(t)),this.hasCustomedItem=!this.hasCustomedItem}}};e.default=n},"87c6":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-page-body[data-v-dc82dfa2]{height:auto;min-height:100%}.uni-card[data-v-dc82dfa2]{-webkit-box-shadow:none;box-shadow:none}.uni-list[data-v-dc82dfa2]:after{height:0}.uni-list[data-v-dc82dfa2]:before{height:0}",""])},8867:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("page-head",{attrs:{title:t.title}}),a("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.setTabBarBadge(e)}}},[t._v(t._s(t.hasSetTabBarBadge?"移除tab徽标":"设置tab徽标"))]),a("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.showTabBarRedDot(e)}}},[t._v(t._s(t.hasShownTabBarRedDot?"移除红点":"显示红点"))]),a("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.customStyle(e)}}},[t._v(t._s(t.hasCustomedStyle?"移除自定义样式":"自定义Tab样式"))]),a("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.customItem(e)}}},[t._v(t._s(t.hasCustomedItem?"移除自定义信息":"自定义Tab信息"))]),a("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.hideTabBar(e)}}},[t._v(t._s(t.hasHiddenTabBar?"显示TabBar":"隐藏TabBar"))]),a("v-uni-view",{staticClass:"btn-area"},[a("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.navigateBack(e)}}},[t._v("返回上一级")])],1)],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},a681:function(t,e,a){"use strict";a.r(e);var n=a("721f"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},c4a8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-link",props:{href:{type:String,default:""},text:{type:String,default:""},inWhiteList:{type:Boolean,default:!1}},methods:{openURL:function(){window.open(this.href)}}};e.default=n},d644:function(t,e,a){var n=a("87c6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("2e6395e7",n,!0,{sourceMap:!1,shadowMode:!1})},e713:function(t,e,a){"use strict";a.r(e);var n=a("35eb"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},f2b0:function(t,e,a){"use strict";var n=a("d644"),i=a.n(n);i.a},f6a2:function(t,e,a){var n=a("4c8d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("3f184c9c",n,!0,{sourceMap:!1,shadowMode:!1})}}]);