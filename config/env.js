let baseUrl = ''
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://127.0.0.1:8005'
    break
  case 'production':
    baseUrl = 'http://127.0.0.1:8005'
    break
}
export default baseUrl
