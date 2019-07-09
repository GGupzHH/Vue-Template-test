import integration from './integration'

// 将axios挂载到Vue上
const Http = {}
Http.install = function (Vue) {
  Vue.prototype.$http = integration
}
export default Http
