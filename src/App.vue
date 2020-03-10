<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
<style lang="scss" scoped>
#app {
  background: linear-gradient($background-start, $background-end);
}
</style>
