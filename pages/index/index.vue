<template>
	<view>
		<!-- <page-head title="view"></page-head> -->
		<uni-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view :class="item.colorClass" class="swiper-item">
						<image :src="item.url" mode="aspectFill" />
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		
		<view class="" style="text-align: center;font-size: 20px;color: #000000;">输入17位VIN码</view>
		<view class="container">
			<view class="code-slide code-slide1">
				<view class="uni-icon uni-icon-scan" style="color: rgb(143, 143, 148); font-size: 25px;"></view>
			</view>
			<view class="code-slide code-slide2">
				<view class="uni-form-item uni-column">
					<input class="uni-input" focus placeholder="输入17位VIN码" style="background: #f7f3f3;"/>
				</view>
			</view>
			<view class="code-slide code-slide3">
				<view  class="uni-icon uni-icon-info-filled" style="color: rgb(143, 143, 148); font-size: 25px;"></view>
			</view>
		</view>
		<view style="clear:both;"></view>
		<button type="primary" style="width: 95%;">立即查询</button>
		
		<view class="uni-common-mt" style="background:#FFF; padding:20upx;">
			<rich-text :nodes="strings"></rich-text>
		</view>

		<view class=" uni-common-mt">

			<view class="uni-title uni-common-mt">

			</view>

		</view>
	</view>
</template>
<script>
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'

	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
				dotStyle: [{
						backgroundColor: 'rgba(0, 0, 0, .3)',
						border: '1px rgba(0, 0, 0, .3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
						selectedBorder: '1px rgba(0, 0, 0, .9) solid'
					},
					{
						backgroundColor: 'rgba(255, 90, 95,0.3)',
						border: '1px rgba(255, 90, 95,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
						selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
					},
					{
						backgroundColor: 'rgba(83, 200, 249,0.3)',
						border: '1px rgba(83, 200, 249,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
						selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
					}
				],
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				mode: 'default',
				dotsStyles: {},
				focus: false,
				inputValue: '',
				showClearIcon: false,
				inputClearValue: '',
				changeValue: '',
				showPassword: true,
				src: '../../../static/eye-1.png',
				platform: '',
				title: 'input',
				strings: '<div style="text-align:center;background:#d4f3f2;color: #607D8B;"><h2>通知</h2><div style="width:90%;display:inline-block;text-align: left;">由于查询人数较多，现在查询价格暂定，后期价格会略有浮动</div></div>'
			}
		},
		onLoad() {},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
			selectStyle(index) {
				this.dotsStyles = this.dotStyle[index]
				this.styleIndex = index
			},
			selectMode(mode, index) {
				this.mode = mode
				this.modeIndex = index
				this.styleIndex = -1
				this.dotsStyles = this.dotStyle[0]
			},
			onKeyInput: function(event) {
				this.inputValue = event.target.value
			},
			replaceInput: function(event) {
				var value = event.target.value;
				if (value === '11') {
					this.changeValue = '2';
				}
			},
			hideKeyboard: function(event) {
				if (event.target.value === '123') {
					uni.hideKeyboard();
				}
			},
			clearInput: function(event) {
				this.inputClearValue = event.target.value;
				if (event.target.value.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			clearIcon: function() {
				this.inputClearValue = '';
				this.showClearIcon = false;
			},
			changePassword: function() {
				this.showPassword = !this.showPassword;
			},
			onFocus() {
				this.$mp.page.$getAppWebview().setStyle({
					softinputNavBar: 'none'
				})
			},
			onBlur() {
				this.$mp.page.$getAppWebview().setStyle({
					softinputNavBar: 'auto'
				})
			}
		},
		onLoad() {
			this.platform = uni.getSystemInfoSync().platform
		}

	}
	//uni.showTabBar();
	// uni.setTabBarItem({
	//   "pagePath": "pages/tabBar/component/component",
	//   "iconPath": "static/component.png",
	//   "selectedIconPath": "static/componentHL.png",
	//   "text": "内置组件"
	// })
</script>

<style>
	.flex-item {
		width: 33.3%;
		height: 200upx;
		text-align: center;
		line-height: 200upx;
	}

	.flex-item-V {
		width: 100%;
		height: 150upx;
		text-align: center;
		line-height: 150upx;
	}

	.text {
		margin: 15upx 10upx;
		padding: 0 20upx;
		background-color: #ebebeb;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		color: #777;
		font-size: 26upx;
	}

	.desc {
		/* text-indent: 40upx; */
	}

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	.swiper-box {
		height: 400upx;
	}

	.swiper-item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background: #eee;
		color: #fff;
	}

	.swiper-item image {
		width: 100%;
		height: 100%;
	}

	.uni-bg-red {
		background: #ff5a5f;
	}

	.uni-bg-green {
		background: #09bb07;
	}

	.uni-bg-blue {
		background: #007aff;
	}

	.uni-swiper__box {
		margin-top: 30upx;
	}

	.uni-swiper__header {
		padding: 0 30upx;
		font-size: 32upx;
		color: #333;
	}

	.uni-swiper__info {
		display: flex;
		padding: 0 15upx;
	}

	.uni-swiper__info-item {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 15upx;
		height: 60upx;
		width: 100%;
		font-size: 28upx;
		color: #333;
		border: 1px #eee solid;
		border-radius: 10upx;
	}

	.uni-swiper__info-dots {
		width: 16upx;
		height: 16upx;
		border-radius: 50%;
		background: #333333;
		margin-left: 10upx;
		box-sizing: border-box;
	}

	.uni-swiper__info-dots:first-child {
		margin: 0;
	}

	.active {
		border: 1px #000 solid;
	}

	slider {
		width: 100%;
	}

	/* 搜索行 */
	.code-slide {
		float: left;
	}
	.code-slide1 {
		width: 14%;
		/* border-right: 1px gray solid; */
		text-align: center;
	}
	.code-slide2 {
		width: 70%;
		/* border-right: 1px gray solid; */
	}
	.code-slide3 {
		width: 14%;
		text-align: center;
		/* border-right: 1px gray solid; */
	}
</style>
