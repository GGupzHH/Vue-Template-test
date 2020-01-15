import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import constantRoutes from './router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})
// router.beforeEach
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(to => {
  NProgress.done()
})
export default router
