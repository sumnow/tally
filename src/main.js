import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue'
import obj from './tools'

Vue.use(AlloyFingerPlugin, {
  AlloyFinger
})

var echarts = require('echarts')
window.$E = echarts

Vue.prototype.statusKeyMap = function () {
  const statusKeyMap = Vue.prototype.statusKeyMap || {}
  obj.statusMap.forEach(e => {
    statusKeyMap[e.id] = e.type
    Object.keys(e.subType).forEach(el => {
      statusKeyMap[parseInt(el) + parseInt(e.id)] = e.subType[el]
    })
  })
  return statusKeyMap
}

const keyValueObj = {
  'currentDayCost': 'a',
  'totalCost': 'b',
  'text': 'c',
  'cost': 'd',
  'message': 'e'
}

function changeKV(e) {
  return keyValueObj[e]
}

const saveData = (dataBase) => {
  const _arr = Object.keys(dataBase);
  const obj = {};
  for (let i = _arr.length - 1; i >= 0; i--) {
    if (dataBase[_arr[i]].totalCost === 0) {
      console.log("delete nil data which day", _arr[i]);
    } else {
      let _temp = [];
      dataBase[_arr[i]].currentDayCost.forEach((e) => {
        if (e.cost !== 0) {
          let l = {}
          l[changeKV('cost')] = e.cost;
          l[changeKV('txt')] = e.txt;
          l[changeKV('message')] = e.message;
          _temp.push(l);
        }
      });
      let m = {}
      m[changeKV('totalCost')] = dataBase[_arr[i]].totalCost
      m[changeKV('currentDayCost')] = _temp
      obj[_arr[i]] = m
    }
    console.log(obj);
  }
  return obj
}

const readData = (data) => {
  function parseObj(_data) {
    if (typeof _data === 'object') {
      if (_data instanceof Array)  {

      }
    } else {
      return _data
    }
  }
}

window.lsg = function (e, i) {
  if (i) {
    const result = saveData(i)
    console.log('[lsg]write', e, result)
    window.localStorage.setItem(e, JSON.stringify(result))
    return i
  } else {
    const read = saveData(i)

    console.log('[lsg]read', e, i)
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