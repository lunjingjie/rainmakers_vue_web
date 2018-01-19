import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@/style.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'mdi/css/materialdesignicons.min.css';

import App from '@/App';
import router from '@/router';

Vue.use(Vuetify, {
  theme: {
    primary: '#292961',
    error: '#b71c1c',
    timeline: '#2196F3',
    btnColor: '#d1d1f0',
  },
});

Vue.config.productionTip = false;
// 路由拦截页面
/* router.beforeEach((to, from, next) => {
  if (window.localStorage.getItem('expire') < new Date().getTime()) {
    if (to.name !== 'Login') {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else if (to.name === 'Login') {
    next({ name: 'Index' });
  } else {
    next();
  }
}); */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
