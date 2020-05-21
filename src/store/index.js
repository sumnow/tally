import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


function formatDate(date, fmt = "yyyy-MM-dd") {
  date = new Date(date);
  //author: meizz
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  return fmt;
}

window.formatDate = formatDate

export default new Vuex.Store({
  state: {
    titleDate: formatDate(new Date()),
    db: {}
  },
  getters: {
    getDate: state => state.titleDate,
    getDB: state => state.db
  },
  mutations: {
    changeDate(state, payload) {
      state.titleDate = payload
    },
    changeDB(state, payload) {
      state.db = payload || state.db
    },
  },
  actions: {
    commitDB(context) {
      context.commit('changeDB')
    }
  },
  modules: {}
})