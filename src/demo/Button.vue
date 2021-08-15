<template>
  <div>
    <div class="row">
      <zh-button icon="zh-icon-shanchu">按钮</zh-button>
      <zh-button type="primary">按钮</zh-button>
      <zh-button type="success">按钮</zh-button>
      <zh-button type="info">按钮</zh-button>
      <zh-button type="warning">按钮</zh-button>
      <zh-button type="danger">按钮</zh-button>
    </div>
    <div class="row">
      <zh-button plain>按钮</zh-button>
      <zh-button type="primary" plain>按钮</zh-button>
      <zh-button type="success" plain>按钮</zh-button>
      <zh-button type="info" plain>按钮</zh-button>
      <zh-button type="warning" plain>按钮</zh-button>
      <zh-button type="danger" plain>按钮</zh-button>
    </div>
    <div class="row">
      <zh-button round>按钮</zh-button>
      <zh-button type="primary" round>按钮</zh-button>
      <zh-button type="success" round>按钮</zh-button>
      <zh-button type="info" round>按钮</zh-button>
      <zh-button type="warning" round>按钮</zh-button>
      <zh-button type="danger" round>按钮</zh-button>
    </div>
    <div class="row">
      <zh-button circle>按</zh-button>
      <zh-button type="primary" circle>按</zh-button>
      <zh-button type="success" circle>按</zh-button>
      <zh-button type="info" circle>按</zh-button>
      <zh-button type="warning" circle>按</zh-button>
      <zh-button type="danger" circle>按</zh-button>
    </div>

    <div class="row">
      <zh-button>按钮</zh-button>
      <zh-button type="primary" icon="zh-icon-delete">按钮</zh-button>
      <zh-button type="success" icon="zh-icon-delete">按钮</zh-button>
      <zh-button type="info" icon="zh-icon-delete">按钮</zh-button>
      <zh-button type="warning" icon="zh-icon-delete">按钮</zh-button>
      <zh-button type="danger" icon="zh-icon-delete">按钮</zh-button>
    </div>
    <div class="row">
      <zh-button>按钮</zh-button>
      <zh-button type="primary" icon="zh-icon-shanchu"></zh-button>
      <zh-button type="success" icon="zh-icon-shanchu"></zh-button>
      <zh-button type="info" icon="zh-icon-shanchu"></zh-button>
      <zh-button type="warning" icon="zh-icon-shanchu"></zh-button>
      <zh-button type="danger" icon="zh-icon-shanchu"></zh-button>
    </div>
    <div class="row">
      <zh-button icon="zh-icon-shanchu">按钮</zh-button>
      <zh-button type="primary" icon="zh-icon-shanchu">按钮</zh-button>
      <zh-button type="success" icon="zh-icon-shanchu">按钮</zh-button>
      <zh-button type="info" icon="zh-icon-shanchu">按钮</zh-button>
      <zh-button type="warning" icon="zh-icon-shanchu">按钮</zh-button>
      <zh-button type="danger" icon="zh-icon-shanchu" @click="handleClick"
        >打印</zh-button
      >
    </div>
    <div class="row">
      <zh-button disabled @click="handleClick">按钮</zh-button>
      <zh-button type="primary" disabled @click="handleClick">按钮</zh-button>
      <zh-button type="success" disabled @click="handleClick">按钮</zh-button>
      <zh-button type="info" disabled @click="handleClick">按钮</zh-button>
      <zh-button type="warning" disabled @click="handleClick">按钮</zh-button>
      <zh-button type="danger" disabled @click="handleClick">按钮</zh-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log(1111);
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  .zh-button {
    margin: 10px;
  }
}
</style>
