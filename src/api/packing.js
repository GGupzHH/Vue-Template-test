// 将实例化好的axios引入
import axios from './axios'

let Http = axios

function sames (params, headers) {
  let options = {}
  if (params) {
    options.params = params
  }
  if (headers) {
    options.headers = headers
  }
  return options
}
// 对外展示get  post请求方法   内部去调用axios的get post方法
export default {
  get (url, params, headers) {
    return Http.get(url, sames(params, headers))
  },
  // 参数  URL 数据 请求头 拼接在URL的参数
  post (url, data, headers, params) {
    return Http.post(url, data, sames(params, headers))
  },
  put (url, params, headers) {
    return Http.put(url, params, sames(params, headers))
  },
  delete (url, params, headers) {
    return Http.delete(url, sames(params, headers))
  }
}
