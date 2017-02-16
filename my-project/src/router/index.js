import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Myapp from 'components/multiModule'
import UserProfile from 'components/multiModule' //潜逃路由
import UserMrofile from 'components/indexmo'
import Inadd from 'components/Deletepage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
    	path:'/myapp',
    	name:'Myapp',
    	component:Myapp,
      children:[
        {
          path:'/myapp/prosto',  //嵌套
          component:UserMrofile
        }
      ]
    },
    {
      path:'/Inadd',
      component:Inadd
    }
  ]
})
