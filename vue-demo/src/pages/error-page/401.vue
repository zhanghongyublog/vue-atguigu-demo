<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-17 10:07:49
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-17 10:25:03
-->
<template>
  <div class="errPage-container">
    <el-row>
      <el-col :span="12">
        <h1>Oops!</h1>
        <h2>你没有权限去该页面</h2>
        <ul class="list-unstyled">
          <li class="link-type">
            <router-link to="/"> 回首页 </router-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import errGif from "@/assets/401_images/401.gif";

export default {
  name: "Page401",
  data() {
    return {
      errGif: errGif + "?" + +new Date(),
    };
  },
};
</script>
