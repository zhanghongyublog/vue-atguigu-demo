<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-15 14:59:15
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-17 10:36:18
-->
<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log("About组件即将被销毁了");
  },
  mounted() {
    console.log("About组件挂载完毕了", this);
    // window.homeRoute = this.$route;
    // window.homeRouter = this.$router;
  },
};
</script>

