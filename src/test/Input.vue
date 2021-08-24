<template>
  <div>
    <zh-input
      type="text"
      placeholder="请输入内容"
      name="text"
      :disabled="true"
      v-model="value"
    ></zh-input>
    <zh-input v-model="value" clearable></zh-input>
    <div>{{ value }}</div>
    <!-- <zh-input clearable></zh-input> -->
    <zh-input
      type="password"
      v-model="value"
      :showPassword.sync="showPassword"
    ></zh-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "111",
      showPassword: true,
    };
  },
};
</script>
<style></style>
