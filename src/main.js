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
  'txt': 'c',
  'cost': 'd',
  'message': 'e',
  'event': 'f',
  'finishTime': 't'
}

const p1 = Object.fromEntries(Object.entries(keyValueObj).map(e => {
  return [e[1], e[0]]
}))

function changeKV(e) {
  return keyValueObj[e]
}

function revertKV(e) {
  return p1[e]
}

const saveData = (data) => {
  data = JSON.parse(JSON.stringify(data))
  console.log(data)
  if (data === undefined || data === null) return undefined

  function parseObj(_data) {
    if (typeof _data === 'object') {
      if (_data instanceof Array) {
        _data.forEach((e, i) => {
          _data[i] = parseObj(e)
        })
      } else {
        Object.keys(_data).forEach(e => {
          if(changeKV(e)) {
            _data[changeKV(e)] = parseObj(_data[e]);
            delete _data[e]
          } else {
            _data[e] = parseObj(_data[e])
          }
        })
      }
    } else {
      return _data
    }
    return _data
  }
  return parseObj(data)
  // const _arr = Object.keys(dataBase);
  // const obj = {};
  // for (let i = _arr.length - 1; i >= 0; i--) {
  //   if (dataBase[_arr[i]].totalCost === 0) {
  //     console.log("delete nil data which day", _arr[i]);
  //   } else {
  //     let _temp = [];
  //     dataBase[_arr[i]].currentDayCost.forEach((e) => {
  //       if (e.cost !== 0) {
  //         let l = {}
  //         l[changeKV('cost')] = e.cost;
  //         l[changeKV('txt')] = e.txt;
  //         l[changeKV('message')] = e.message;
  //         _temp.push(l);
  //       }
  //     });
  //     let m = {}
  //     m[changeKV('totalCost')] = dataBase[_arr[i]].totalCost
  //     m[changeKV('currentDayCost')] = _temp
  //     obj[_arr[i]] = m
  //   }
  //   console.log(obj);
  // }
  // return obj
}

const readData = (data) => {
  if (data === undefined || data === null) return undefined
  function parseObj(_data) {
    if (typeof _data === 'object') {
      if (_data instanceof Array) {
        _data.forEach((e, i) => {
          _data[i] = parseObj(e)
        })
      } else {
        Object.keys(_data).forEach(e => {
          if(revertKV(e)) {
            _data[revertKV(e)] = parseObj(_data[e]);
            delete _data[e]
          } else {
            _data[e] = parseObj(_data[e])
          }
        })
      }
    } else {
      return _data
    }
    return _data
  }
  return parseObj(data)
}

window.lsg = function (e, i) {
  if (i) {
    console.log('[lsg]write',e,i)
    window.localStorage.setItem(e, JSON.stringify(i))
    return i
  } else {
    const c = window.localStorage.getItem(e)
    const _e = JSON.parse(c)

    console.log('[lsg]read', _e)
    return _e
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