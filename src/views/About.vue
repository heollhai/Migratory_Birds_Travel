<template>
  <div class="about">
    <h1>qqqqqq</h1>qqq
	<Telba ></Telba>
	<el-row>
	  <el-col :span="4"><div class="grid_content ">222222</div></el-col>
	</el-row>
  </div>
</template>
<script>
	import Telba from './component/biaoge/index.vue'
	import './component/biaoge/index.scss'
	export default{
		name:'aa',
		components:{
			Telba
		},
		created() {
			
		},
		methods:{
			tableRowClass({row,rowIndex}){
				console.log(rowIndex)
				if(rowIndex===2){
					return 'classRed'
				}
				return ''
			}
		}
		
	}
</script>

<style lang="scss">
	.about .el-table .warning-row{
	  background: red;
	}
</style>
<style lang="scss" scoped="scoped">
	 .about h1{color: red;}
	 .grid_content{background-color: #000000;}
</style>

