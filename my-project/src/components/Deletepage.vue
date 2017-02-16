<template>
	<div>
		<button class='datas' @click='myData'>数据请求</button>
		<ul>
			<li>{{myadd}}</li>
		</ul>
	</div>
</template>

<script>
import Vue from 'vue'
import '../styles/only.css';
import resource from 'vue-resource';
import store from '../vuexText/startValus'


Vue.use(resource)

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
					for(var i in mytodos){
						this.myadd = mytodos[i].title;
					}
					 console.log(this.$store.state.count)
				})
			}
		},
		store: store,
		vuex: {
		    getters: {
		      // 该 getter 函数将会把仓库的 `store.state.count` 绑定为组件的 `this.count`
		      counts: function (state) {
		        return state.count
		      }
		    }
		  }
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
</style>