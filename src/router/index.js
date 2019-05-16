import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import login from '@/components/sign/index.vue'
import Member from '@/components/Member/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default:Home,
        Home: Home
      }
    },
    {
      path: '/login',
      components: {
        default:login,
        login: login
      }
    },
    {
      path: '/Member',
      components: {
        default:Member,
        Member: Member
      }
    }
  ]
})
