import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count:''
}
const mutations = { //更改状态
  increment (state,datas) {
		state.count = datas	
  }
}
const actions = { //方法action
		incrementAsync ({ commit },todos) {
			  commit('increment',todos)
		}
    // incrementAsync (context,todos) { 等同于上
    //     context.commit('increment',todos)
    // }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})


