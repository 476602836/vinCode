<template>
	<view>
		<!-- <page-head title="view"></page-head> -->
		<uni-swiper-dot :info="info" :current="current" :mode="mode1" :dots-styles="dotsStyles" field="content">
			<swiper class="swiper-box" @change="change" autoplay="true" >
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
				<view class="uni-icon uni-icon-scan" style="color: rgb(143, 143, 148); font-size: 25px;" @tap="chooseImage"></view>
			</view>
			<view class="code-slide code-slide2">
				<view class="uni-form-item uni-column">
					<input class="uni-input" v-model="vin" @input="onKeyVinInput" maxlength="17"  focus placeholder="输入17位VIN码" style="background: #f7f3f3;"/>
				</view>
			</view>
			<view class="code-slide code-slide3">
				<view  class="uni-icon uni-icon-info-filled" style="color: rgb(143, 143, 148); font-size: 25px;" @tap="actionSheetTap"></view>
			</view>
		</view>
		<view style="clear:both;"></view>
		<button type="primary"  @click="showMulLinkageTwoPicker"  style="width: 95%;margin-top: 5upx;background-color: #ff9600;">{{pickerText}}</button>
		<button @tap="search" type="primary" style="width: 95%;margin-top: 5upx;"  >立即查询</button>
		
		<view class="uni-common-mt" style="background:#FFF; padding:20upx;">
			<rich-text :nodes="strings"></rich-text>
		</view>

		<view class=" uni-common-mt">

			<view class="uni-title uni-common-mt">

			</view>

		</view>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
	</view>
	
</template>
<script>
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
	import uLink from "@/components/uLink.vue"
	import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue';
	// https://github.com/zhetengbiji/mpvue-citypicker
	import mpvueCityPicker from '../../../components/mpvue-citypicker/mpvueCityPicker.vue'
	import cityData from '../../../common/car.data.js';
	import jweixin from '../../../common/wxpay.js';
	
	var siteurl = "http://weiqing.zxiu58.top/"
	var siteapi = "http://weiqing.zxiu58.top/app/index.php?i=3&c=entry&m=ab_vin"
	
	
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		components: {
			uniSwiperDot,
			uLink,
			mpvuePicker,
			mpvueCityPicker
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
				mode1: 'default',
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
				strings: '<div style="text-align:center;background:#d4f3f2;color: #607D8B;"><h2>通知</h2><div style="width:90%;display:inline-block;text-align: left;">由于查询人数较多，现在查询价格暂定，后期价格会略有浮动</div></div>',
				vin:'',
				// 选择车型
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '选择车型',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[],
				
				// 上传图片
				imageList: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				
				vins : ''
				
			}
		},
		// onLoad() {
		// 	
		// 	
		// },
		onUnload() {
			this.imageList = [],
				this.sourceTypeIndex = 2,
				this.sourceType = ['拍照', '相册', '拍照或相册'],
				this.sizeTypeIndex = 2,
				this.sizeType = ['压缩', '原图', '压缩或原图'],
				this.countIndex = 8;
		},
		methods: {
			actionSheetTap() {
				var vins = uni.getStorageSync("vins")
				var itemList = vins.split(",").reverse() 
				uni.showActionSheet({
					title:'最近查询',
					itemList: itemList,
					success: (e) => {
						console.log(e.tapIndex);
						// uni.showToast({
						// 	title:"点击了第" + e.tapIndex + "个选项",
						// 	icon:"none"
						// })
						this.vin = itemList[e.tapIndex]
					}
				})
			},
			// 二级联动选择
			showMulLinkageTwoPicker() {
				this.pickerValueArray = this.mulLinkageTwoPicker
				this.mode = 'multiLinkageSelector'
				this.deepLength = 2
				this.pickerValueDefault = [0, 0]
				this.$refs.mpvuePicker.show()
			},
			onConfirm(e) {
				this.pickerText = e.label
			},
			
			onKeyVinInput: function(event) {  
                this.vin = event.target.value
				//console.log(this.vin)
            },  
			search(){
				if(this.vin.length!=17){
					uni.showToast({
						title: "请输入正确的VIN码",
						icon: "info-filled",
						duration: 1000
					})
					return;
				}
				jweixin.ready(function(){  
					console.log(1)
				});
				//uni.setStorageSync('vins','');
				if(-1==uni.getStorageSync('vins').indexOf(this.vin))uni.setStorageSync('vins',uni.getStorageSync('vins')+','+this.vin);
				console.log(uni.getStorageSync('vins').indexOf(this.vin))
				location.href ='http://weiqing.zxiu58.top/app/index.php?i=3&c=entry&do=pay&m=ab_vin&fee=0.01&uid=4&vin=LVSFCAMEX8F265694';return;
				uni.navigateTo({
					//url: 'search/search?data='+this.vin,
					url: 'pay/pay?fee='+5
				})
			},
			chooseImage: async function() {
					uni.chooseImage({
						success: (chooseImageRes) => {
							
							uni.showToast({
								title: "正在检测vin码...",
								icon: "loading",
								duration: 15000
							})
							
							const tempFilePaths = chooseImageRes.tempFilePaths;
							uni.uploadFile({
								url: 'http://weiqing.zxiu58.top/app/index.php?i=3&c=entry&op=index&do=Upload2&m=ab_qrcode', //仅为示例，非真实的接口地址
								filePath: tempFilePaths[0],
								name: 'file',
								formData: {
									'user': 'test'
								},
								success: (uploadFileRes) => {
									//uploadFileRes.data = "2GFD5G5G4HG45GH78"
									console.log(uploadFileRes.data);
									var vinData = JSON.parse(uploadFileRes.data);
									if(vinData.errno==1){
										uni.showToast({
											title: "未检测到VIN码",
											icon: "info-filled",
											duration: 1000
										})
										return;
									}
									uni.showToast({
										title: "已检测到VIN码",
										icon: "info-filled",
										duration: 1000
									})
									this.vin = vinData.Vin
								}
							});
						}
					});
				},
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
			
			var search = getQueryString('search')
			if(search){
				uni.navigateTo({
					url: 'search/search?data='+search,
				})
			}
			
			
			var user = uni.getStorageSync('user')
			if(!user){
				var uid = getQueryString('uid')
				uni.request({
					url: siteapi, //仅为示例，并非真实接口地址。
					data: {
						do: 'ajax',
						op: 'user',
						uid:uid
					},
					header: {
						//'custom-header': 'hello' //自定义请求头信息
					},
					success: (res) => {
						console.log(res.data);
						if(res.data.errno==0){
							uni.setStorageSync('user',res.data.data);
						}
					}
				});
			}
			console.log(uni.getStorageSync('user'))
			this.platform = uni.getSystemInfoSync().platform
		}

	}
	function getQueryString(name) { 
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); 
        return null; 
    } 
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
