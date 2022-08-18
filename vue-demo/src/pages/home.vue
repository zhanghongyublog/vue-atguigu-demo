<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-15 14:59:15
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-18 08:48:01
-->
<template>
  <div class="comContainer">
    <h2>我是Home的内容</h2>
    <ul>
      <li>
        <router-link to="/home/message">Message</router-link>
      </li>
      <li>
        <router-link to="/home/users"> Users </router-link>
      </li>
    </ul>
    <h3>total: {{ $store.state.userAbout.totalAllCount }}</h3>
    <h3>search: {{ $store.state.userAbout.searchCount }}</h3>
    <div class="comContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log("Home组件即将被销毁了");
  },
  mounted() {
    console.log("Home组件挂载完毕了", this);
    // window.homeRoute = this.$route;
    // window.homeRouter = this.$router;
  },
};
</script>

<style scoped>
.comContainer {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.comContent {
  height: 80%;
  border: 2px solid violet;
}
</style>