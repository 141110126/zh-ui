<template>
  <div>
    <!-- <zh-dialog title="温馨提示"></zh-dialog> -->
    <zh-dialog width="70%" top="100px" :visible.sync="visible">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
      <template v-slot:footer>
        <zh-button type="primary">确定</zh-button>
        <zh-button>取消</zh-button>
      </template>
    </zh-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {},
  components: {},
};
</script>

<style></style>
