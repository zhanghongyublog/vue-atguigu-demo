<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-15 14:59:15
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-18 08:47:10
-->
<template>
  <div>
    我是Users组件的内容
    <input type="text" v-model="keyWord" @click.enter="searchUsers" />

    <button @click.enter="searchUsers">Search</button>
    <div class="content">
      <div class="userList">
        <div class="userItem" v-for="user in users">
          <router-link :to="'/home/users/user/' + user.login">{{
            user.login
          }}</router-link>
        </div>
      </div>
      <div class="userDetail">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Users",
  data() {
    return {
      keyWord: "zhanghongyu",
      isShow: true,
      // users: [],
    };
  },
  computed: {
    ...mapState("userAbout", ["users"]),
  },
  methods: {
    async searchUsers() {
      const self = this;
      await this.$store.dispatch("userAbout/getUsers", {
        keyWord: self.keyWord,
      });
      // this.users = this.$store.state.user.users;
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
}
.userList {
  width: 250px;
  height: 500px;
  overflow-y: scroll;
}
.userItem {
  margin: 5px;
}
.userDetail {
  flex: 1;
}
</style>