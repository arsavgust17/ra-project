import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/store";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import iViewUI from '@/global/iViewUI';
import vueGlobalServices from '@/global/vueGlobalServices';

Vue.config.productionTip = false;
Vue.config.devtools = true;

iViewUI(Vue);
vueGlobalServices(Vue);

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(Vuetify);
Vue.use(axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
