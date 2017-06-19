<template>
  <div :style="{width:'100%',height:'100%',background:'#fbfbfb'}">
    <div class="App">
      <div class='header'>
        <div class='headerLogo'>供应商数据</div> 
        <div class='headerLest'>
          <ul v-for='(time,i) in logos'>
              <li :class="{logobackground:i==indexValue}" @click='pageNuber(i)'>{{time.name}}<span v-if='i==indexValueSpan'>1</span></li>
          </ul>
        </div>
      </div>
      <div class='Appconent'>
         <el-row class="tapvalue">
          <el-col :span="8">
            <el-menu default-active="1" class="el-menu-vertical-demo" @open='handleOpen' theme="dark">
              <el-submenu index="1">
                <template slot="title">导航一</template>
                  <el-menu-item
                  @click='ces(i)'
                  v-for='(todo,i) in menuitem' 
                  :index="todo.name">
                  {{todo.name}}
                  </el-menu-item>
              </el-submenu>
              <el-menu-item index="2">导航二</el-menu-item>
              <el-menu-item index="3">导航三</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
        <div class='centervalues'>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import '../pulie/only.css'
import api from '../pulie/api.js'
import axios from 'axios'
export default {
  name:'App',
  data () {
    return {
      logos:[
        {name:'首页'},
        {name:'数据分析'},
        {name:'自主取数'},
        {name:'市场分析'},
        {name:'数据制定'}
      ],
      menuitem:[
        {name:'经营报告'},
        {name:'销售分析'},
        {name:'订单管理'},
        {name:'商品管理'},
        {name:'库存管理'},
        {name:'库存管理1'}
      ],
      indexValue:0,
      indexValueSpan:0,
    }
  },
  methods:{
    pageNuber(key){
      this.indexValue = key
      this.indexValueSpan = key
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    ces(key){
      switch (key) {
          case 0:
          this.$router.push({name:'AnnualOperatingConditions'})
          break;
          case 1:
          axios.post('/api/todos',{})
          .then(data=>{
            console.log(data)
          })
          break;
          case 2:
          // statements_1
          break;
          case 3:
          // statements_1
          break;
          case 4:
          // statements_1
          break;
        default:
          // statements_def
          break;
      }
    }
  }
}
</script>
<style>
  .App{
    width: 1200px;
    line-height: 50px;
    margin: 0px auto
  }
  .header{
    background: #3399ff;
    width: auto;
    height: 50px;
    overflow: hidden;
  }
  .headerLogo{
    width: 250px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size:15px; 
    float: left;
  }
  .headerLest{
    width: 600px;
    margin-left: 150px
  }
  .headerLest ul li{
    float: left;
    width: 120px;
    text-align: center;
    color: #fff;
    font-size: 13px;
    position: relative;
  }
  .logobackground{
    background: #3399cc;
  }
  .headerLest ul li span{
    background: #66ffcc;
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0px;
    left: 0px;
  }
  .Appconent{
    width: 100%;
    height: 700px;
  }
  .tapvalue{
    width: 250px;
    height: 700px;
    background: #324157;
    float: left;
  }
  .el-menu{
    width: 250px;
  }
  .centervalues{
    width: 950px;
    overflow: hidden;
    height: 700px            ;
    margin-left: 250px;
  }
</style>