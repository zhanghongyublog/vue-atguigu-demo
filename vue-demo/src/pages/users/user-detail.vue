<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-15 14:59:15
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-18 15:58:30
-->
<template>
  <div>
    UserDetail:{{ username }}

    <button @click="getUserDetail2(username)">获取用户详情</button>
    <ul v-if="user">
      <li>
        用户头像：
        <img
          style="width: 150px; height: 200px"
          alt="用户头像"
          :src="user.avatar_url"
        />
      </li>
      <li>用户名称：{{ user.login }}</li>
      <li>用户博客： {{ user.blog }}</li>
      <li>用户职业：{{ user.bio }}</li>
      <li>用户住址：{{ user.location }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "UserDetail",
  data() {
    return {
      isShow: true,
      username: null,
      // user: null,
    };
  },
  computed: {
    isShow: "222",
    ...mapState("userAbout", ["user"]),
  },
  watch: {
    // 监听路由变化，路由变化的时候请求页面数据
    "$route.params.username": async function (val) {
      if (val) {
        this.username = val;
        // await this.$store.dispatch("userAbout/getUserByName", {
        //   keyWord: val,
        // });
        await this.getUserDetail2(val);
      }
    },
  },
  async mounted() {
    this.username = this.$route.params.username;
  },
  methods: {
    getUserDetail2() {
      this.$store.userAbout.state.users = [];
    },
    // ...mapActions("userAbout", { getUserDetail2: "getUserDetail" }),
  },
};
</script>

