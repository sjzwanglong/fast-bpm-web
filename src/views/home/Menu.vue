<template>
  <v-navigation-drawer
    v-model="model"
    :clipped="clipped"
    :floating="floating"
    :mini-variant="mini"
    app
    overflow
  >
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-img src="@/assets/img/logo-c.png"></v-img>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">admin</v-list-item-title>
          <v-list-item-subtitle>admin@rauho.com</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item,i) in menus" :key="i" :to="item.path">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.text}}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      model: true,
      menus: [
        {
          icon: "mdi-monitor-dashboard",
          text: "首页",
          path: "/home/dashboard"
        },
        {
          icon: "mdi-alpha-c-box-outline",
          text: "公司管理",
          path: "/home/cmpy"
        },
        {
          icon: "mdi-alpha-b-box-outline",
          text: "部门管理",
          path: "/home/dept"
        },
        {
          icon: "mdi-alpha-u-box-outline",
          text: "用户管理",
          path: "/home/user"
        }
      ]
    };
  },
  watch: {
    isShow() {
      this.model = this.isShow;
    }
  },
  props: ["isShow", "clipped", "floating", "mini"]
};
</script>

<style lang="scss" scoped>
img {
  height: 100px;
}
</style>