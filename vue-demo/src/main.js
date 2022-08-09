/*
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-09 09:30:55
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-09 18:56:03
 */
import Vue from 'vue'
import App from './App.vue'

import mixin from "./mixin";

Vue.config.productionTip = false

Vue.mixin(mixin)

new Vue({
  render: h => h(App),
}).$mount('#app')
