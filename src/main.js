import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import api from './api/mount'
import './mock/mock'
import TYPE_JUDGE from './utils/TypeJudge'
import './style/reset.less'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import echarts from 'echarts'

Vue.use(api)
Vue.use(ElementUI)
Vue.use(iView)
Vue.use(TYPE_JUDGE)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
