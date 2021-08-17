<template>
  <transition name="dialog-fade">
    <!-- 对话框遮罩 -->
    <div class="zh-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="zh-dialog" :style="{ width: width, marginTop: top }">
        <div class="zh-dialog__header">
          <slot name="title">
            <span class="zh-dialog__title">{{ title }}</span>
          </slot>
          <button class="zh-dialog__headerbtn" @click="handleClose">
            <i class="zh-icon-guanbi"></i>
          </button>
        </div>
        <div class="zh-dialog__body">
          <slot></slot>
        </div>
        <div class="zh-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ZhDialog",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.zh-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .zh-dialog {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    box-sizing: border-box;
    width: 50%;
    &__header {
      padding: 20px 20px 10px;
      .zh-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .zh-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .zh-icon-guanbi {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .zh-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>
