<template>
  <v-container fluid>USER</v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "首页",
          disabled: false,
          link: true,
          to: "/home/dashboard"
        },
        {
          text: "用户管理",
          disabled: false,
          link: true,
          to: "/home/user"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch({ type: "changeItems", items: this.items });
    this.$store.dispatch({
      type: "changeTab",
      tab: {
        name: "用户管理",
        code: "user",
        to: "/home/user"
      }
    });
  },
  methods: {},
  components: {}
};
</script>

<style>
</style>
