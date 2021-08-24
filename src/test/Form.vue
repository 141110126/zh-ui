<template>
  <div>
    <zh-form :model="model" label-width="100px">
      <zh-form-item label="用户名">
        <zh-input
          placeholeder="请输入用户名"
          v-model="model.username"
        ></zh-input>
      </zh-form-item>
      <zh-form-item label="选择">
        <zh-switch v-model="model.active"></zh-switch>
      </zh-form-item>
    </zh-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: "",
        active: true,
      },
    };
  },
};
</script>
<style></style>
