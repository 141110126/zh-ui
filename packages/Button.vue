<template>
  <div
    class="zh-button"
    :class="[
      type ? `zh-button--${type}` : '',
      {
        'is-plain': plain,
        'is-circle': circle,
        'is-round': round,
        'is-disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @clcik="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: "ZhButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.zh-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.zh-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #66b1ff;
    background-color: #66b1ff;
  }
}
.zh-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #85ce61;
    background-color: #85ce61;
  }
}
.zh-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #a6a9ad;
    background-color: #a6a9ad;
  }
}
.zh-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.zh-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #f78989;
    background-color: #f78989;
  }
}
// is-plain
.zh-button.is-plain {
  &:hover,
  &:focus {
    color: #fff;
    background: #409eff;
    border-color: #409eff;
  }
}
.zh-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    color: #fff;
    background: #409eff;
    border-color: #409eff;
  }
}
.zh-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    color: #fff;
    background: #67c23a;
    border-color: #67c23a;
  }
}
.zh-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    color: #fff;
    background: #909399;
    border-color: #909399;
  }
}
.zh-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    color: #fff;
    background: #e6a23c;
    border-color: #e6a23c;
  }
}
.zh-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    color: #fff;
    background: #f56c6c;
    border-color: #f56c6c;
  }
}
// is-round
.zh-button.is-round {
  border-radius: 20px;
  padding: 12px;
}
// is-circle
.zh-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// id-disabled
.zh-button.is-disabled,
.zh-button.is-disabled:focus,
.zh-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.zh-button--primary.is-disabled,
.zh-button--primary.is-disabled:active,
.zh-button--primary.is-disabled:focus,
.zh-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.zh-button--success.is-disabled,
.zh-button--success.is-disabled:active,
.zh-button--success.is-disabled:focus,
.zh-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.zh-button--info.is-disabled,
.zh-button--info.is-disabled:active,
.zh-button--info.is-disabled:focus,
.zh-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.zh-button--warning.is-disabled,
.zh-button--warning.is-disabled:active,
.zh-button--warning.is-disabled:focus,
.zh-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.zh-button--danger.is-disabled,
.zh-button--danger.is-disabled:active,
.zh-button--danger.is-disabled:focus,
.zh-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
// icon后的文字样式
.zh-button [class*="zh-icon-"] + span {
  margin-left: 5px;
}
</style>
