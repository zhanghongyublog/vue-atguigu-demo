/*
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-09 18:57:05
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-09 19:12:02
 */
export default {
  install (Vue) {
    // 全局过滤器
    Vue.filter('zhySlice', function (value) {
      return value.slice(0, 3)
    })

    // 全局指令
    Vue.directive('zhyFocus', {
      bind (element) {
        element.value = 'zhyzhy'
      },
      inserted (element) {
        element.focus()
      }
    })
  }
}