
<template>
  <div class="hello">
      <img src='../assets/logo.png'>
      <homes v-show='curr' v-on:child-say='getLoginValue'></homes>
      <div class='muhouneirong' v-if='land'>
          <p class='welcomes'>{{loginName}}:你好，欢迎使用vue进行开发<p>
          <p><router-link to="/myapp" style='color:red;font-size:20px;line-height:40px;margin-button:25px'>多也页面处理与路由处理</router-link></p>
          <p><router-link to="/Inadd" style='color:red;font-size:20px;line-height:40px;margin-button:25px'>数据请求，赠删页，vuex页</router-link></p>
      </div>

  </div>
</template>


<script>
import '../styles/only.css'

const Home = {
 
   props:['currt'],
   template: "<div class='vulenames'>"
            +"<p>欢迎学习vue初级入门教程</p>"
            +"<input class='inpt' type='text' ref='povalue'></br>"
            +"<input type='text'>"
            +"<div><button>取消</button><button @click='mythis'>确认</button></div>"
            +"</div>",

    methods:{
      mytext(){
        let nodevalue = this.$refs.povalue.value;
        if(nodevalue==''||nodevalue==null){
            return
        }else{
            this.valueso = nodevalue;
            this.$emit('currt')
        }
      },
      mythis(){
          const nodes = this.$refs.povalue.value;
          this.$emit('child-say',nodes);
      }
    }
}


export default {

  name: 'hello',
  data () {
    return {
      curr:true,
      loginName:'2',
      land:false
    }
  },


  components:{
      homes : Home
  },

  methods:{
    getLoginValue(values){
      console.log(values)
      this.loginName = values;
      this.curr=false;
      this.land=true;
    }
  }

}

</script>


<style>

.hello{
  text-align:center;
  background:#2b332c;
  position:absolute;
  width:100%;
  height:100%;
}

.hello img{
  margin:20px auto 0 auto;

}

.vulenames{
  text-align:center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.vulenames p{
  font-size:30px;
  color:#fff;
  background: url(http://i.giphy.com/fsULJFFGv8X3G.gif);
  background-size: cover;
  background-position: center;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  margin:25px 0 25px 0;
}

.vulenames input{
  width:200px;
  height:26px;
  margin-top:5px;
  border-radius:2px;
  border:none;
  outline:none;
  padding-left:5px;
}

.vulenames button{
  background:red;
  width:100px;
  border:none;
  margin-left:1px;
  height:25px;
  margin-top:10px;
  border-radius:2px;
  color:#fff;
  outline:none;
}
.welcomes{
  color:#fff;
  font-size: 20px;
  line-height: 50px;
}

</style>
