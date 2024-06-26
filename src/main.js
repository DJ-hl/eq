import Vue from 'vue';
import App from './App.vue';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import VueAnimateNumber from 'vue-animate-number'
Vue.use(VueAnimateNumber)

Vue.use(ViewUI);


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
