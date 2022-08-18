/*
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-09 09:30:55
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-17 09:56:48
 */
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from './store'

import router from './router'



// 混入
import mixin from "./mixin";
Vue.mixin(mixin)

// 插件
import plugins from './plugins';
Vue.use(plugins)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
