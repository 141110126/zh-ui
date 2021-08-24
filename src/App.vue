<template>
  <div id="app">
    <h1>button</h1>
    <examples-button />
    <examples-dialog />
    <h1>input</h1>
    <examples-input />
    <h1>switch</h1>
    <examples-switch />
    <h1>form</h1>
    <examples-form />
  </div>
</template>

<script>
import ExamplesButton from "./test/Button.vue";
import ExamplesDialog from "./test/Dialog.vue";
import ExamplesInput from "./test/Input.vue";
import ExamplesSwitch from "./test/Switch.vue";
import ExamplesForm from "./test/Form.vue";

export default {
  name: "App",
  components: {
    ExamplesButton,
    ExamplesDialog,
    ExamplesInput,
    ExamplesSwitch,
    ExamplesForm,
  },
};
</script>

<style lang="scss" scoped></style>
