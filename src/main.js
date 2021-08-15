import Vue from "vue";
import App from "./App.vue";
import ZhButton from "./components/Button.vue";

import "./assets/fonts/font.css";
Vue.config.productionTip = false;
Vue.component(ZhButton.name, ZhButton);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
