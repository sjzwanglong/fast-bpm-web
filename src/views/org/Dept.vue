<template>
  <v-container fluid>DEPT</v-container>
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
          text: "部门管理",
          disabled: false,
          link: true,
          to: "/home/dept"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch({ type: "changeItems", items: this.items });
    this.$store.dispatch({
      type: "changeTab",
      tab: {
        name: "部门管理",
        code: "dept",
        to: "/home/dept"
      }
    });
  },
  methods: {},
  components: {}
};
</script>

<style>
</style>
