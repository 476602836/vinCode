<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in list" :key="key">
				<view class="uni-media-list">
					<view class="uni-media-list-logo">
						<image :src="value.avatar"></image>
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{value.nickname}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{value.create_time}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import site from '../../../../common/site.js';
	
	var user = uni.getStorageSync('user')
	
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				list:[]
			}
		},
		methods: {
			
		},
		onLoad(){
			uni.request({
				url: site.siteapi, //仅为示例，并非真实接口地址。
				data: {
					do: 'ajax',
					op: 'myteam',
					uid: user.id
				},
				header: {
					//'custom-header': 'hello' //自定义请求头信息
				},
				success: (res) => {
					console.log(user)
					if(res.data.errno==0){
						this.list = res.data.data
					}
				}
			});
		}
	}
</script>

<style>
	.uni-list-item{
		height: 150upx;
	}
</style>
