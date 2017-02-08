<template>
  <div id="app">
    {{msg}}
    <img src="./assets/logo.png">

    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: '#mytodo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
