<template>
	<div class='myapp'>
		<ul>
			<li v-for='(time,i) in myadd' @click='poadd(i)' :class="{dbbackground:i==indexclrr}">
					{{time.name}}
			</li>
		</ul>
		<ahtml class='dbnode' v-show='0==indexclrr'></ahtml>
		<bhtml class='dbnode' v-show='1==indexclrr'></bhtml>   
		<chtml class='dbnode' v-show='2==indexclrr'></chtml>
		<dhtml class='dbnode' v-show='3==indexclrr'></dhtml>
		<ehtml class='dbnode' v-show='4==indexclrr'></ehtml>
		<div class='mycenter'><router-link to="/myapp/prosto">嵌套路由处理</router-link></div>
		<router-view></router-view>
	</div>

</template>



<script>
import '../styles/only.css'

const ahtml = {
	template:"<div style='background:#658426'>1</div>"
}

const bhtml = {
	template:"<div style='background:#032158'>2</div>"
}

const chtml = {
	template:"<div style='background:#123548'>3</div>"
}

const dhtml = {
	template:"<div style='background:#624586'>4</div>"
}

const ehtml = {
	template:"<div style='background:#356178'>5</div>"
}

const UserProfile = {
  template: "<div>User</div>"
}

const UserMrofile = {
	template:"<div>mstyo</div>"
}

export default {
  name: 'myapp',
  data () {
    return {
    	myadd:[
    		{name:'主页0'},
    		{name:'主页1'},
    		{name:'主页2'},
    		{name:'主页3'},
    		{name:'主页4'}
    	],
    	indexclrr:''
    }
  },
  methods:{
	poadd(inde){
		this.indexclrr = inde;
	}
  },
  components:{
  	ahtml:ahtml,
  	bhtml:bhtml,
  	chtml:chtml,
  	dhtml:dhtml,
  	ehtml:ehtml
  }

}

</script>


<style>
	
	.myapp ul li{
		width:20%;
		float:left;
		text-align:center;
		height:50px;
		background:#ccc;
		color:#fff;
		line-height:50px;
	}

	.myapp .dbbackground{
		background:#987426
	}
	.dbnode{
		height:300px;
		width:100%;
		text-align:center;
		line-height:50px;
	}
	.myapp .dbnode{
		display:block;
	}
	.mycenter{
		width:`100%;
		height: 50px;
		text-align: center;
		line-height: 50px;

	}
</style>
