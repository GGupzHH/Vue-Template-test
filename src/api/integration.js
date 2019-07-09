import packing from './packing'
import resfilter from './responsefilter'
import apis from './api'
console.log(resfilter)
// 将定义好的各种接口引入，挂载 最后导出
for (let key in apis) {
  apis[key].forEach(api => {
    // 将定义好的接口挂载到对应方法的原型链上
    packing[key].prototype[api] = async function (data) {
      return resfilter[key][api](await this.constructor(api, data))
    }
  })
}
export default packing
