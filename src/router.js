import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/inputModel',
      name: 'inputModel',
      component: () => import('./components/for-model.vue')
    }, {
      path: '/upload',
      name: 'upload',
      component: () => import('./components/upload.vue')
    }, {
      path: '/eventBus',
      name: 'eventBus',
      component: () => import('./components/EventBus.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: 'about' */ './views/About.vue')
    // }
  ]
})
