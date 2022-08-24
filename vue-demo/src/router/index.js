/*
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-17 08:58:25
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-22 15:17:54
 */
// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/about'
import Home from '../pages/home'
import Users from '../pages/users/index'
import UsersDetail from '../pages/users/user-detail'
import Message from '../pages/message'

import Page404 from '../pages/error-page/404.vue'
import Page401 from '../pages/error-page/401.vue'


const routes = [
  {
    path: '',
    redirect: (to, from) => {
      console.error(to, from);
      return '/home'
    }
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        name: 'yonghu',
        path: 'users',
        component: Users,
        children: [{
          path: 'user/:username',
          component: UsersDetail
        }]
      },
      {
        path: 'message',
        component: Message
      }
    ]
  },
  {
    path: '/about',
    component: About
  },

  {
    path: '/401',
    component: Page401,
  },
  {
    path: '*',
    component: Page404,
  }
]

//创建并暴露一个路由器
export default new VueRouter({ routes: routes })
