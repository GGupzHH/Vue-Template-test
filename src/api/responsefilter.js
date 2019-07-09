const resfilter = {
  get: {},
  post: {},
  put: {},
  delete: {}
}
// 接口定义好的
// 比如说login定义好的请求 之后响应也用login这个方法去接收返回的数据  以此类推 什么参数的接口就用什么参数去定义接收函数
resfilter.get.login = data => {
  // 将返回的数据在这里做处理 直接返回view需要的数据
  let {
    token,
    username,
    psw
  } = data
  window.localStorage.setItem('token', token)
  return { username, psw }
}
resfilter.post.login = data => data
export default resfilter
