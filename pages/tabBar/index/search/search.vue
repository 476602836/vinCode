<template>
	<view class="root">
		<page-head :title="title"></page-head>
		<view class="">
			<uni-list-item title="品牌名称" note=""  :show-arrow="false" :show-text="true" :text="carDate.brand_name"  />
			<uni-list-item title="车型名称" note=""  :show-arrow="false" :show-text="true" :text="carDate.model_name"  />
			<uni-list-item title="销售名称" note=""  :show-arrow="false" :show-text="true" :text="carDate.sale_name"  />
			<uni-list-item title="车辆类型" note=""  :show-arrow="false" :show-text="true" :text="carDate.car_type"  />
			<uni-list-item title="生产年份" note=""  :show-arrow="false" :show-text="true" :text="carDate.made_year"  />
			<uni-list-item title="燃油类型" note=""  :show-arrow="false" :show-text="true" :text="carDate.fuel_Type"  />
			<uni-list-item title="变速器类型" note=""  :show-arrow="false" :show-text="true" :text="carDate.transmission_type"  />
			<uni-list-item title="排量(L)" note=""  :show-arrow="false" :show-text="true" :text="carDate.output_volume"  />
			<uni-list-item title="档位数" note=""  :show-arrow="false" :show-text="true" :text="carDate.gears_num"  />
			<uni-collapse @change="change">
				<uni-collapse-item title="更多信息">
					<uni-list>
						<uni-list-item title="发动机型号" note=""  :show-arrow="false" :show-text="true" :text="carDate.engine_type"  />
						<uni-list-item title="功率/转速(Kw/R)" note=""  :show-arrow="false" :show-text="true" :text="carDate.power"  />
						<uni-list-item title="座位数" note=""  :show-arrow="false" :show-text="true" :text="carDate.seat_num"  />
						<uni-list-item title="车辆级别" note=""  :show-arrow="false" :show-text="true" :text="carDate.vehicle_level"  />
						<uni-list-item title="车门数" note=""  :show-arrow="false" :show-text="true" :text="carDate.door_num"  />
						<uni-list-item title="厂家名称" note=""  :show-arrow="false" :show-text="true" :text="carDate.manufacturer"  />
						<uni-list-item title="档位数" note=""  :show-arrow="false" :show-text="true" :text="carDate.gears_num"  />
						<uni-list-item title="装备质量(KG)" note=""  :show-arrow="false" :show-text="true" :text="carDate.car_weight"  />
						<uni-list-item title="车系" note=""  :show-arrow="false" :show-text="true" :text="carDate.car_line"  />
						<uni-list-item title="停产年份" note=""  :show-arrow="false" :show-text="true" :text="carDate.stop_year"  />
						<uni-list-item title="排放标准" note=""  :show-arrow="false" :show-text="true" :text="carDate.effluent_standard"  />
						<uni-list-item title="燃油标号" note=""  :show-arrow="false" :show-text="true" :text="carDate.fuel_num"  />
						<uni-list-item title="指导价格（万元）" note=""  :show-arrow="false" :show-text="true" :text="carDate.guiding_price"  />
						<uni-list-item title="年款" note=""  :show-arrow="false" :show-text="true" :text="carDate.year"  />
						<uni-list-item title="驱动方式" note=""  :show-arrow="false" :show-text="true" :text="carDate.drive_style"  />
					</uni-list>
				</uni-collapse-item>
				<!-- <uni-collapse-item :open="true" title="默认开启">
					<view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
				</uni-collapse-item>
				<uni-collapse-item :disabled="true" title="禁用状态">
					<view style="padding: 30upx;"> 禁用状态 </view>
				</uni-collapse-item> -->
			</uni-collapse>
		</view>
	</view>
</template>
<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import site from '../../../../common/site.js';
	export default {
		components: {
			uniCollapse,
			uniCollapseItem,
			uniList,
			uniListItem
		},
		data() {
			return {
				title: '查询结果',
				data:"",
				carDate:{}
				
			}
		},
		methods:{
			change(e) {
				console.log(e)
			}
		},
		onLoad(e){
			if(e.data){
				this.data = e.data;
				this.title = this.data+'的查询结果';
			}
			var user = uni.getStorageSync('user')
			this.carDate = uni.getStorageSync(this.data)
			if(!this.carDate){
				uni.request({
					url: site.siteapi, //仅为示例，并非真实接口地址。
					data: {
						do: 'ajax',
						op: 'vincar',
						uid: user.id,
						vin:this.data
					},
					header: {
						//'custom-header': 'hello' //自定义请求头信息
					},
					success: (res) => {
						console.log(user)
						if(res.data.errno==0){
							this.carDate = res.data.data
							uni.setStorageSync(this.data,res.data.data)
						}
					}
				});
			}
		}
		
	}
	
</script>
<style>
	page{
		display: flex;
		min-height: 100%;
	}
	.root{
		display: flex;
		flex: 1;
		flex-direction: column;
	}
	.page-body{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>