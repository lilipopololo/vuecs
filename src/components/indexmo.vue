<template>
	<div class='myapp'>
		<div>我是嵌套路由的页面，当然这里可以写基于当前页面的展示层</div>
	</div>
</template>



<script>
import '../styles/only.css'
export default {
  name: 'myapp',
  data () {
    return {
    	indexclrr:''
    }
  }
}
</script>
<style>
	.myapp{
		width:100%;
		height:100px;
		background: #ccc;
		text-align: center;
		line-height: 100px;
		color: #fff;
	}
</style>