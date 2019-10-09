import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义一个变量count
const state = {
  count: 0
}
const getters = {
  devCount: state => {
    return state.count + '-----'
  },
  devCount_: (state, getters) => {
    return getters.devCount + '+++'
  },
  devCount_fn: (state, getters) => n => {
    return getters.devCount_ + n
  }
}
// 对变量进行操作
const mutations = {
  addCount (state, n) {
    // console.log(state)
    state.count = n
    // console.log(n)
  },
  reduceCount (state, n) {
    state.count = n
  }
}
// 异步操作
const actions = {
  actionsAddCount (context, n) {
    console.log(context)
    console.log(n)
    /**
     * context => {}
     * commit('mutations fn name') 异步再去调用mutations中的方法去改变state的值
     * dispatch('actions fn name) 去指定异步操作去actions中的方法执行
     * getters
     * rootGetters
     * state
     * rootState
    */
    context.dispatch('text', n)
    context.commit('addCount', n)
  },
  text (context, n) {
    console.log(context)
    console.log(n)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
