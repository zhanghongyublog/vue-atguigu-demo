<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-09 19:05:17
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-09 19:10:26
-->
<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input v-zhyFocus type="text" />
  </div>
</template>

<script>
// import {hunhe,hunhe2} from '../mixin'

export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  // mixins:[hunhe,hunhe2]
};
</script>