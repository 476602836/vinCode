<template>
	<view>
	<view >
		<view class="uni-center" style="background:#FFFFFF; font-size:0;">
			<image class="image" mode="widthFix" :src="user.avatar" />
		</view>
	</view>
	<uni-list>
		<uni-list-item @tap="mysearch" title="我的查询" thumb="http://weiqing.zxiu58.top/icons/1.png" />
		<uni-list-item @tap="myteam" title="我的推广" note="" thumb="http://weiqing.zxiu58.top/icons/2.png" />
		<uni-list-item @tap="fuzhi" title="推广链接" note="" thumb="http://weiqing.zxiu58.top/icons/3.png" />
		<uni-list-item title="推广奖励" note="" thumb="http://weiqing.zxiu58.top/icons/4.png" />
	</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import {clipboard} from '../../../js_sdk/ican-clipBoard/ican-clipBoard.js'
	import site from '../../../common/site.js';
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				user:uni.getStorageSync('user')
			}
		},
		methods: {
			myteam(){
				uni.navigateTo({
					url: 'myteam/myteam',
				})
			},
			mysearch(){
				uni.navigateTo({
					url: 'mysearch/mysearch',
				})
			},
			fuzhi(){
				uni.setClipboardData({ data:site.siteapi+"&do=Index&pid="+this.user.id, success:function(data){
					uni.showToast({
						title: "复制链接成功",
						icon: "info-filled",
						duration: 1000
					})
				}, fail:function(err){}, complete:function(res){} })
			}
		}
	}
</script>

<style>
	.image {
		margin:40upx 0;
		width: 200upx;
	}
</style>
