<template>
  <div class="zh-form-item">
    <label class="zh-form-item__label" :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="zh-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ZhFormItem",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  inject: ["Form"]
};
</script>
<style lang="scss" coped>
.zh-form-item {
  margin-bottom: 25px;
  .zh-form-item__label {
    text-align: center;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .zh-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
