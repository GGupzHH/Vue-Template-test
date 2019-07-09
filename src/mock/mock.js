import Mock from 'mockjs'

Mock.mock(RegExp('login' + '.*'), 'get', (option) => {
  // console.log(option)
  return {
    token: 'JNDJANDBBAHBSHB839',
    username: 'admin',
    psw: '123'
  }
})

Mock.mock('post1', 'post', (option) => {
  return {
    type: 'post'
  }
})
