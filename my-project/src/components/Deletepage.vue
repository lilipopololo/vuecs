<template>
	<div>
		<button class='datas' @click='myData'>数据请求</button>
		<ul class='mylitodos' v-for='todos in count'>
			<li>
				{{todos.title}}
			</li>
		</ul>
	</div>
</template>

<script>
import Vue from 'vue'
import '../styles/only.css';
import { mapState } from 'vuex'
import { mapActions } from 'vuex'



	export default {

		data(){
			return{
				myadd:''
			}
		},

		methods:{
			myData(){
				this.$http({
					method:'GET',
					url:'/api/v1/topics'
				})
				.then(function(datas){
					const mytodos = datas.data.data
					 console.log(mytodos)
					 this.$store.dispatch('incrementAsync',mytodos) //异步处理
				})

			}
		},

		computed:mapState ({ //vuex数据抓取
		    	count: state => state.count,
		    })
		  
	}

	
</script>
<style>
	.datas{
		width:100%;
		height:50px;
		background: #846216;
		text-align: center;
		line-height: 50px;
		border: none;
		color:#fff;
	}
	.mylitodos li {
		text-align: center;
		width: 100%;
		margin-top: 10px;
		background: #ccc;
		color: red;
	}
</style>