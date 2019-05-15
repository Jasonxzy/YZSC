import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import purchase from '@/components/purchase/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        index: Home
      }
    },
    {
      path: '/purchase',
      components: {
        index: purchase
      }
    }
  ]
})
