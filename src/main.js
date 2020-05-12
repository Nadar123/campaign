import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// axios.defaults.baseURL = '';

// axios.defaults.headers.get['Accepts'] = 'application/json';
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
