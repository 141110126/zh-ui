<template>
  <div>
    <zh-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></zh-switch>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false,
    };
  },
};
</script>
<style></style>
