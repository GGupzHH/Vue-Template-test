import resGet from './resGet'
import resPost from './resPost'
const resfilter = {
  get: resGet,
  post: resPost,
  put: {},
  delete: {}
}
// 接口定义好的
// 比如说login定义好的请求 之后响应也用login这个方法去接收返回的数据  以此类推 什么参数的接口就用什么参数去定义接收函数
// 多封装一层是为了辨别同名不同方式的请求
export default resfilter
