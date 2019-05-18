import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import login from '@/components/sign/index.vue'
import Member from '@/components/Member/index.vue'
import purchase from '@/components/purchase/index.vue'
import BrandStory from '@/components/BrandStory/index.vue'// 品牌故事
import TopNavigation from '@/components/public/TopNavigation.vue' // 顶部
import TopBanner from '@/components/public/TopBanner.vue' // 顶部导航
import search from '@/components/public/search.vue' // 搜索
import ClassNav from '@/components/public/ClassNav.vue' // banner导航
import Notice from '@/components/Notice/index.vue'
import BottomNav from '@/components/public/BottomNavigation.vue' // 公共底部
import SearchList from '@/components/Search_list/index.vue' // 公共底部
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        Home: Home
      }
    },
    {
      path: '/login',
      components: {
        default: login,
        login: login
      }
    },
    {
      path: '/Member',
      components: {
        default: Member,
        Member: Member
      }
    }, {
      path: '/purchase',
      components: {
        default: purchase,
        purchase: purchase
      }
    },
    {
      path: '/TopNavigation',
      components: {
        default: TopNavigation,
        TopNavigation: TopNavigation
      }
    },
    {
      path: '/TopBanner',
      components: {
        default: TopBanner,
        TopBanner: TopBanner
      }
    },
    {
      path: '/search',
      components: {
        default: search,
        TopBanner: search
      }
    },
    {
      path: '/ClassNav',
      components: {
        default: ClassNav,
        ClassNav: ClassNav
      }
    },
    {
      path: '/BottomNav',
      components: {
        default: BottomNav,
        BottomNav: BottomNav
      }
    },
    {
      path: '/BrandStory',
      components: {
        default: BrandStory,
        BrandStory: BrandStory
      }
    },
    {
      path: '/Notice',
      components: {
        default: Notice,
        Notice: Notice
      }
    },
    {
      path: '/SearchList',
      components: {
        default: SearchList
      }
    }
  ]
})
