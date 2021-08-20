import Vue from "vue";
import App from "./App.vue";
import ZhButton from "./components/Button.vue";
import ZhDialog from "./components/Dialog.vue";
import ZhInput from "./components/Input.vue";
import ZhSwitch from "./components/Switch.vue";

import "./assets/fonts/iconfont.css";
Vue.config.productionTip = false;
Vue.component(ZhButton.name, ZhButton);
Vue.component(ZhDialog.name, ZhDialog);
Vue.component(ZhInput.name, ZhInput);
Vue.component(ZhSwitch.name, ZhSwitch);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
