/*
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-17 08:48:45
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-17 14:10:06
 */
export default {
  namespaced: true,
  state: {
    users: []
  },
  actions: {
    async getUser (context, state) {
      console.error('test');
    }
  },
  mutations: {
    GET_USER (context, state) {
      console.error(state.users);
    }
  },
  getters: {
    userCount (context, state) {
      return state.users.length
    }
  }
}