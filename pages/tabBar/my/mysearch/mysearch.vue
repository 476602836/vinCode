<template>
	<view>
		<uni-list>
			<uni-list-item :show-badge="true"  :title="value.vin" v-for="(value, key) in list" :key="key"/>
			<!-- <uni-list-item :show-badge="true" :badge-text="12" title="标题文字" /> -->
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	var siteurl = "http://weiqing.zxiu58.top/"
	var siteapi = "http://weiqing.zxiu58.top/app/index.php?i=3&c=entry&m=ab_vin"
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				list : []
			}
		},
		methods: {
			
		},
		onLoad(){
			
			var user = uni.getStorageSync('user')
			console.log(user)
			uni.request({
				url: siteapi, //仅为示例，并非真实接口地址。
				data: {
					do: 'ajax',
					op: 'vin',
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

</style>
