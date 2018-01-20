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
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
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
