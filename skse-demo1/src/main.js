import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// import {Button,Form,Input,Select} from 'ant-design-vue/lib/button';
// import Button from 'ant-design-vue/lib/button';
// import Form from 'ant-design-vue/lib/form';
// import Input from 'ant-design-vue/lib/input';
// import Select from 'ant-design-vue/lib/select';
// import Checkbox from 'ant-design-vue/lib/checkbox';
// import Grid from 'ant-design-vue/lib/grid';
// import 'ant-design-vue/dist/antd.css';

// Vue.use(Button);
// Vue.use(Form);
// Vue.use(Input);
// Vue.use(Select);
// Vue.use(Checkbox);
// Vue.use(Grid);

// Vue.component(Button.name, Button);
// Vue.component(Form);

Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
