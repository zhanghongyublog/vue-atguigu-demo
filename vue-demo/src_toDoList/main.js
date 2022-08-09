/*
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-09 09:30:55
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-09 19:11:30
 */
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false


// 混入
import mixin from "./mixin";
Vue.mixin(mixin)

// 插件
import plugins from './plugins';
Vue.use(plugins)

new Vue({
  render: h => h(App),
}).$mount('#app')
