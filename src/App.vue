<template>
  <div id="app">
    <demo-button />
  </div>
</template>

<script>
import DemoButton from "./demo/Button.vue";
export default {
  name: "App",
  components: {
    DemoButton,
  },
};
</script>

<style lang="scss" scoped></style>
