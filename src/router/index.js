import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import login from '@/components/sign/index.vue'
import Member from '@/components/Member/index.vue'
import purchase from '@/components/purchase/index.vue'
import ShoppingCart from '@/components/ShoppingCart/index.vue'
import BrandStory from '@/components/BrandStory/index.vue'// 品牌故事
import TopNavigation from '@/components/public/TopNavigation.vue' // 顶部
import TopBanner from '@/components/public/TopBanner.vue' // 顶部导航
import search from '@/components/public/search.vue' // 搜索
import ClassNav from '@/components/public/ClassNav.vue' // banner导航
import HelpCenter from '@/components/HelpCenter/index.vue' // 帮助中心
import Notice from '@/components/Notice/index.vue'
import BottomNav from '@/components/public/BottomNavigation.vue' // 公共底部
import SearchList from '@/components/Search_list/index.vue' // 公共底部
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Home
      }
    },
    {
      path: '/login',
      components: {
        default: login
      }
    },
    {
      path: '/Member',
      components: {
        default: Member
      }
    }, {
      path: '/purchase',
      components: {
        default: purchase
      }
    }, {
      path: '/ShoppingCart',
      components: {
        default: ShoppingCart,
        ShoppingCart: ShoppingCart
      }
    }, {
      path: '/TopNavigation',
      components: {
        default: TopNavigation
      }
    },
    {
      path: '/TopBanner',
      components: {
        default: TopBanner
      }
    },
    {
      path: '/search',
      components: {
        default: search
      }
    },
    {
      path: '/ClassNav',
      components: {
        default: ClassNav
      }
    },
    {
      path: '/BottomNav',
      components: {
        default: BottomNav
      }
    },
    {
      path: '/BrandStory',
      components: {
        default: BrandStory
      }
    },
    {
      path: '/Notice/:id',
      components: {
        default: Notice
      }
    },
    {
      path: '/SearchList',
      components: {
        default: SearchList
      }
    },
    {
      path: '/HelpCenter',
      component: {
        default: HelpCenter
      }
    }
  ]
})
