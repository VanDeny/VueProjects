import Vue from 'vue'
import App from './App.vue'
import VuePageTitle from "vue-page-title";
import router from "./router"

Vue.config.productionTip = false

Vue.use(VuePageTitle, {
  suffix: ' - made by VanDeny'
})

const rout = {
  router,
  render: h => h(App),
};

new Vue(rout).$mount('#app')
