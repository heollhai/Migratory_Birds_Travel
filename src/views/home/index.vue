<template>
	<div>
		<template>
		  <div class="block">
			    <span class="demonstration">默认 Hover 指示器触发</span>
		    <el-carousel height="187px">
		      <el-carousel-item v-for="(item,index) in swiperArr" :key="index">
		        <img :src="item.photoUrl" alt="">
		      </el-carousel-item>
		    </el-carousel>
		  </div>
		</template>
		 
	</div>
</template>

<script>
	import {SwiperList} from '../../utils/api.js'

	export default{
		name:'HomeIndex',
		data(){
			return{
				swiperArr:[]
			}
		},
		created() {
			SwiperList().then(res=>{
				this.swiperArr=[...res.data]
				console.log(this.swiperArr)
			})
		},

	}
</script>

<style lang="scss">
	.block{width:10rem;height:5rem;
		img{
			width:100%;
			height:187px;
		}
	}
	
</style>
