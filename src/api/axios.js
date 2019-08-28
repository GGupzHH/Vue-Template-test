import axios from 'axios'
import baseUrl from '../../config/env'
// 创建 axios 实例
console.log(baseUrl)
let Http = axios.create({
  // headers: {'Content-Type': 'application/json'},
  // 设置请求超时
  timeout: 60000,
  baseURL: baseUrl
})

// 设置 post、put 默认 Content-Type
Http.defaults.headers.post['Content-Type'] = 'application/json'
Http.defaults.headers.put['Content-Type'] = 'application/json'

// 添加请求拦截器
Http.interceptors.request.use(
  // 发送请求之前做点啥
  config => {
    if (config.method === 'post' || config.method === 'put') {
      // post、put 提交时，将对象转换为string, 为处理Java后台解析问题
      config.data = JSON.stringify(config.data)
    }
    // 请求发送前进行处理
    return config
  },
  // 请求错误做点啥
  error => {
    // 请求错误处理
    return Promise.reject(error)
  }
)

// 添加响应拦截器
Http.interceptors.response.use(
  // 响应数据做点啥
  response => {
    let { data } = response
    return data
  },
  // 响应错误做点啥
  error => {
    let info = {}
    console.log(error)
    // let { status, statusText, data } = error.response

    // if (!error.response) {
    //   info = {
    //     code: 5000,
    //     msg: 'Network Error'
    //   }
    // } else {
    //   // 此处整理错误信息格式
    //   info = {
    //     code: status,
    //     data: data,
    //     msg: statusText
    //   }
    // }
    return info
  }
)

/**
 * 创建统一封装过的 axios 实例
 * @return {AxiosInstance}
 */
export default Http
