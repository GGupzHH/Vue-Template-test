import packing from './packing'
import apis from './api'
// 将定义好的各种接口引入，挂载 最后导出
for (let key in apis) {
  apis[key].forEach(api => {
    // 将定义好的接口挂载到对应方法的原型链上
    packing[key].prototype[api] = function (data) {
      this.constructor(api, data)
    }
  })
}
// httpGet.forEach(item => {
//   packing.get.prototype[item] = function (datas) {
//     this.constructor(item, datas)
//   }
// })
// // packing.get.prototype.login = function (datas) {
// //   this.constructor(`login`, datas)
// // }
// httpPost.forEach(item => {
//   packing.post.prototype[item] = function (data) {
//     // console.log(this)
//     this.constructor(item, data)
//   }
// })
// packing.post.prototype.getitem = function (data) {
//   this.constructor(`getitem`, data)
// }
export default packing
