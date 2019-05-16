import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/public-css/public.less'
Vue.use(ElementUi)
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App />'
})
