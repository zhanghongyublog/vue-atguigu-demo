/*
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-17 08:48:45
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-18 08:44:44
 */
import Vue from 'vue'
import Vuex from 'vuex'


import userOptions from './user'
import testOptions from './test'


Vue.use(Vuex)



export default new Vuex.Store({
  modules: {
    testAbout: testOptions,
    userAbout: userOptions
  }
})