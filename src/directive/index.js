import copy from './copy'

const directive = {
  install: function (Vue) {
    // 挂载 因为 bind 和 update 方法使用的一个回调函数  所以这里直接将copy函数传入
    Vue.directive('copy', copy)
  }
}

export default directive
