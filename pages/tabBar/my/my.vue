<template>
	<view>
	<view >
		<view class="uni-center" style="background:#FFFFFF; font-size:0;">
			<image class="image" mode="widthFix" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" />
		</view>
	</view>
	<uni-list>
		<uni-list-item title="我的查询" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png" />
		<uni-list-item title="我的车辆" note="" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
	</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.image {
		margin:40upx 0;
		width: 200upx;
	}
</style>
