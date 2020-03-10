<template>
  <v-container fluid>DASHBOARD</v-container>
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
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch({ type: "changeItems", items: this.items });
  },
  methods: {},
  components: {}
};
</script>

<style>
</style>
