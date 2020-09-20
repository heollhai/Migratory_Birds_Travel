<template>
  <div id="app">
    <div id="nav">  
		<router-link to="/">
			<div class='nav_1'></div>
			<div>首页</div>
		</router-link>
		<router-link to="/discover">
			<div class='nav_2'></div>
			<div>发现</div>
		</router-link> 
		<router-link to="/customization">
			<div class='nav_3'></div>
			<div>定制行</div>
		</router-link> 
		<router-link to="/destination">
			<div class='nav_4'></div>
			<div>目的地</div>
		</router-link> 
		<router-link to="/my">
			<div class='nav_5'></div>
			<div>我的</div>
		</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#nav{
	width:10rem;height:1.504rem;display: flex;position: fixed;bottom: 0;left: 0;
	a{
		flex: 1; display: flex;flex-direction:column ;margin: 0 0.4rem;text-align: center;
		text-decoration: none;color: #445356;
		div:nth-of-type(1){flex: 3; margin: 0.08rem  0.213333rem 0 0.213333rem;background-size: 155px;}
		div:nth-of-type(2){flex: 2;line-height: 24px;}
	}
	.router-link-exact-active{
		
		.nav_1{
			background: url('assets/小图标/底部.png') -0.053333rem -0px no-repeat;
			background-size: 155px;
		}
		.nav_2{
			background: url('assets/小图标/底部.png') -0.853333rem  -0px no-repeat;
			background-size: 155px;
		}
		.nav_4{
			background: url('assets/小图标/底部.png') -2.48rem 0px no-repeat;
			background-size: 155px;
		}
		.nav_5{
			background: url('assets/小图标/底部.png')  -3.36rem -0px no-repeat;
			background-size: 155px;
		}
	} 
	.nav_1{
		background: url('assets/小图标/底部.png') -0.053333rem -0.906666rem no-repeat;
	}
	 .nav_2{
	 	background: url('assets/小图标/底部.png') -0.853333rem -0.906666rem no-repeat;
	 } 
	 .nav_3{
	 	background: url('assets/小图标/底部.png') -1.653333rem -0.08rem no-repeat;
	 } 
	 .nav_4{
	 	background: url('assets/小图标/底部.png') -2.48rem -0.906666rem no-repeat;
	 } 
	 .nav_5{
	 	background: url('assets/小图标/底部.png') -3.36rem -0.906666rem no-repeat;
	 } 
}
</style>
