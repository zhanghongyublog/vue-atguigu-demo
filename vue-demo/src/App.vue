<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-09 19:03:09
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-18 07:45:40
-->
<template>
  <div class="appContainer">
    <div class="appHeader">
      <h2>Vue Router</h2>
      <ul class="headerNav">
        <li>
          <router-link to="/home"> <h2>Home</h2> </router-link>
        </li>
        <li>
          <router-link to="/about"> <h2>About</h2> </router-link>
        </li>
      </ul>
    </div>
    <div class="appContent">
      <keep-alive include="About">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  margin: 0;
}
.appContainer {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  /* border: 3px solid red; */
}
.appHeader {
  /* border: ; */
}
.headerNav {
  display: flex;
  width: 50%;
  justify-content: space-around;
}
.appContent {
  width: 100%;
  height: 82%;
  box-sizing: border-box;
  border: 2px solid blue;
}
</style>