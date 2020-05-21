import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue'

Vue.use(AlloyFingerPlugin,{
  AlloyFinger
})

var echarts = require('echarts')
window.$E = echarts

window.lsg = function (e, i) {
  if (i) {
    window.localStorage.setItem(e, JSON.stringify(i))
    return i
  } else {
    return JSON.parse(window.localStorage.getItem(e))
  }
}

Vue.use(Vant);


// new vconsole()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')