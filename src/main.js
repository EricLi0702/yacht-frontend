import Vue from 'vue'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import store from '@/store'
import router from '@/router'
import VueToastify from "vue-toastify";
Vue.use(VueToastify, {position:"top-right",theme:"light"});

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
