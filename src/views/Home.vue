<template>
  <div class="home">
   
    <Telba></Telba>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Telba from './component/biaoge/index.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,Telba
  },
  
}
</script>

<style lang="scss"  >
	.home .el-table .warning-row {
	  background: fuchsia;
	}
</style>
