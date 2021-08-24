import Button from "./Button.vue";
import Dialog from "./Dialog.vue";
import Input from "./Input.vue";
import Switch from "./Switch.vue";
import Form from "./Form.vue";
import FormItem from "./FormItem.vue";
import "./fonts/iconfont.css";
// 出错组件列表
const components = [Button, Dialog, Input, Switch, Form, FormItem];

const install = function(Vue) {
  // 全局注册所有组件
  components.forEach(item => {
    Vue.component(item.name, item);
  });
};

// 为了支持window环境下用户不用手动使用Vue.use()来注册插件,此处先帮用户调用install方法
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;
