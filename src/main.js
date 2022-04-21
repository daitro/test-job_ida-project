import Vue from "vue";
import App from "./App.vue";
import VueMask from "v-mask";
import "./registerServiceWorker";

import "./assets/styles/reset.scss";
import "./assets/font/index.scss";

Vue.use(VueMask);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
