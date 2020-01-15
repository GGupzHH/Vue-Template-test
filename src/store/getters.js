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
export default getters
