import Vue from "vue";
import App from "./App.vue";
import ZhButton from "./components/Button.vue";
import ZhDialog from "./components/Dialog.vue";
import "./assets/fonts/font.css";
Vue.config.productionTip = false;
Vue.component(ZhButton.name, ZhButton);
Vue.component(ZhDialog.name, ZhDialog);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
