
<template>
  <div class="hello">
      <img src='../assets/logo.png'>
      <homes v-show='homes' :homest='homes'></homes>
  </div>
</template>


<script>
import '../styles/only.css'
const Home = {
   data(){
      return{
        valueso:''
      }
   },
   props:['homest','ctpaso'],
   template: "<div class='vulenames'>"
            +"<p>欢迎学习vue初级入门教程</p>"
            +"<input class='inpt' type='text' ref='povalue'>{{valueso}}</br>"
            +"<input type='text'>"
            +"<div><button>取消</button><button @click='mytext'>确认</button></div>"
            +"</div>",

    methods:{
      mytext(){
        this.valueso=this.$refs.povalue.value;
      }
    }
}


export default {

  name: 'hello',
  data () {
    return {
      homes:true
    }
  },

  components:{
      homes : Home
  },

  methods:{
      mishow: function() {
        homes:false
    }
  }

}

</script>


<style>
h1, h2 {
  font-weight: normal;
}
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
  outline:none
}
</style>
