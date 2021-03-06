import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引如element-ui 组件
import '@/assets/js/element-ui.js'
// css 公共样式
import '@/assets/css/public.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
