 //引入封装好的axios
	  import  request from './requwst.js';

	  //获取  get方式
	  
	  //轮播
	  export function SwiperList(){
	   return request({
	    url:'product/banner/getBySeller/4bc4027c645343f09a964b5c2e9f875b',
	    method:'get',
	   })
	  }
	  //获取  post方式
	  // export function addprodutAttrList(data){
	  //  return request({
	  //   url:'index/Api/create_product_cate',
	  //   method:'post',
	  //   data:data
	  //  })
	  // }