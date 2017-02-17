import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const state = {
  count:'1'
}

const mutations = {
  increment (state,datas) {
		state.count = datas	
		console.log(state.count);

  }
}

const actions = {
		incrementAsync ({ commit },todos) {
			  commit('increment',todos)
		}
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})


