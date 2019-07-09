const get = {}
get.login = data => {
  // 将返回的数据在这里做处理 直接返回view需要的数据
  let {
    token,
    username,
    psw
  } = data
  window.localStorage.setItem('token', token)
  return { username, psw }
}
export default get
