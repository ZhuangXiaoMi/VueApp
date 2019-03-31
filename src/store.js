import Vue from 'vue'
import Vuex from 'vuex'
import { crossDomain, getUserInfoById } from '@/api/getData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: { id: '', name: '' }
  },
  getters: {
    // 类似计算属性
  },
  mutations: {
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    crossDomain({commit}) {
      const res = crossDomain();
      res.then(response => console.log(response))
         .catch(error => console.log(error));
    },
    async getUserInfo(store, { id }) {
      //const res = getUserInfoById(id);
      await getUserInfoById(id).then(function (response) {
          console.log('resolved');
          console.log(response);
          store.commit('saveUserInfo', response.data.Data);
        })
        .catch(function (error) {
          console.log('rejected');
          console.log(error);
        });
    }
  }
})