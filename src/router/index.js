import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import purchase from '@/components/purchase/index.vue'
import TopNavigation from '@/components/public/TopNavigation.vue' // 顶部
import TopBanner from '@/components/public/TopBanner.vue' // 顶部导航
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
    },
    {
      path: '/TopNavigation',
      components: {
        index: TopNavigation
      }
    },
    {
      path: '/TopBanner',
      components: {
        index: TopBanner
      }
    }
  ]
})
