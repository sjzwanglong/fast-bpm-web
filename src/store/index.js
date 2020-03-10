import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        text: "首页",
        disabled: false,
        link: true,
        to: "/home/dashboard"
      }
    ],
    tabItems: [{
      name: "首页",
      code: "dashboard",
      to: "/home/dashboard"
    }]
  },
  mutations: {
    changeItems(state, payload) {
      state.items = payload.items
    },
    changeTab(state, payload) {
      if (state.tabItems.findIndex(item => item.code == payload.tab.code) >= 0) {
        return;
      }
      state.tabItems.push(payload.tab)
    }
  },
  actions: {
    changeItems(context, payload) {
      context.commit(payload)
    },
    changeTab(context, payload) {
      context.commit(payload)
    }
  },
  modules: {
  }
})
