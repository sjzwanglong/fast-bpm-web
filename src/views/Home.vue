<template>
  <v-app id="sandbox">
    <Menu
      :isShow="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini="primaryDrawer.min"
    ></Menu>
    <v-app-bar :clipped-left="primaryDrawer.clipped" app>
      <v-app-bar-nav-icon @click.stop="primaryDrawer.model = !primaryDrawer.model" />
      <v-breadcrumbs :items="$store.state.items"></v-breadcrumbs>
      <template v-slot:extension>
        <v-tabs v-model="showTab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab
            v-for="item in $store.state.tabItems"
            :key="item.code"
            :to="item.to"
          >{{ item.name }}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <Main></Main>
      </v-container>
    </v-content>

    <v-footer :inset="footer.inset" app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from "@/views/home/Menu";
import Main from "@/views/home/Main";
export default {
  data() {
    return {
      showTab: null,
      selected: true,
      primaryDrawer: {
        model: true,
        clipped: false,
        floating: false,
        mini: true
      },
      footer: {
        inset: false
      },
      dialog: false,
      drawer: null,
      items: [
        {
          text: "首页",
          disabled: false,
          link: true,
          to: "/home/dashboard"
        },
        {
          text: "公司管理",
          disabled: false,
          link: true,
          to: "/home/cmpy"
        }
      ]
    };
  },
  components: {
    Menu,
    Main
  }
};
</script>

<style lang="scss" scoped>
</style>
