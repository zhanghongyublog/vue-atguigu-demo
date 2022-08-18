/*
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-17 08:48:45
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-18 09:24:59
 */
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    users: [],
    user: null,
    searchCount: 0,
    totalCount: 0,
    totalAllCount: 0
  },
  actions: {
    async getUsers (context, { keyWord }) {
      console.error('actions userAbout/getUsers', context, { keyWord });
      const _url = `https://api.github.com/search/users?q=${keyWord}`
      const res = await axios.get(_url)
      context.commit('GET_USERS', res)
    },
    async getUserDetail (context, userName) {
      console.error('actions userAbout/getUserDetail', context, userName);
      const _url = `https://api.github.com/users/${userName}`
      const res = await axios.get(_url)
      context.commit('GET_USER_DETAIL', res)
    }
  },
  mutations: {
    GET_USERS (state, res) {
      console.error('mutations userAbout/GET_USERS', state, res);
      state.users = res.data.items
      state.searchCount = res.data.items.length
      state.totalAllCount = res.data.total_count
    },
    GET_USER_DETAIL (state, res) {
      console.error('mutations userAbout/GET_USER_DETAIL', state, res);
      state.user = { ...res.data }

    }
  },
  getters: {
    userCount (state) {
      console.error('getters userAbout/userCount');
      return state.users.length
    }
  }
}


