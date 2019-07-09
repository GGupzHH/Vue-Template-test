import summary from './summary'

// 将axios挂载到Vue上
const Http = {}
Http.install = function (Vue) {
  Vue.prototype.$http = summary
}
export default Http
