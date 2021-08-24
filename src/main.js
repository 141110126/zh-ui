import Vue from "vue";
import App from "./App.vue";
import ZhUI from "../packages";
Vue.config.productionTip = false;
// Vue.component(ZhButton.name, ZhButton);
// Vue.component(ZhDialog.name, ZhDialog);
// Vue.component(ZhInput.name, ZhInput);
// Vue.component(ZhSwitch.name, ZhSwitch);
// Vue.component(ZhForm.name, ZhForm);
// Vue.component(ZhFormItem.name, ZhFormItem);

Vue.use(ZhUI);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
