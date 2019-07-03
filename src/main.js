import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApp } from './common/Observer';

import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://localhost:3000');

Vue.config.productionTip = false

createdVueInstance();

function createdVueInstance(){
const newapp = new Vue({
  router,
  render: h => h(App)
})
registerApp(newapp);
newapp.$mount('#app')
}
