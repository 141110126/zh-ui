<template>
  <div class="zh-switch" :class="{ 'is-checked': value }" @click="handleClick">
    <span class="zh-switch__core" ref="core">
      <span class="zh-switch__button"></span>
    </span>
    <input class="zh-switch__input" type="checkbox" :name="name" ref="input" />
  </div>
</template>
<script>
export default {
  name: "ZhSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
  },
  methods: {
    async handleClick() {
      this.$emit("input", !this.value);
      await this.$nextTick();
      this.setColor();
      this.setInputChecked();
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    },
    // 设置input的checked与value同步
    setInputChecked() {
      this.$refs.input.checked = this.value;
    },
  },
  mounted() {
    this.setColor();
    this.setInputChecked();
  },
};
</script>
<style lang="scss" scoped>
.zh-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .zh-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .zh-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.zh-switch.is-checked {
  .zh-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .zh-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
