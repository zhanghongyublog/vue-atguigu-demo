<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-09 09:30:55
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-09 19:13:38
-->
<template>
  <div id="app">
    <School />
    <hr ref="hr" />
    <Student ref="Student" />
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  created() {
    console.error(this.$refs.hr);
  },
  mounted() {
    console.error(this.$refs);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
