import Vue from 'vue';
import Buefy from 'buefy';

import App from '@/App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Buefy, {
  defaultIconPack: 'fas'
});

router.beforeEach((to, from, next) => {
  console.log(`from: ${from.path} -> to: ${to.path}`);
  if(to.path !== '/login') {
    // next({ path: '/login' });
  }
  next();
});

// Whenerver Server Gives 401 Status Code, it logouts and redirect to login page
// Vue.http.interceptors.push((request, next) => {
//   next(function (response) {
//     if (response.status === 401) {
//       let msg = response.body.returnMessage
//       localStorage.setItem('logoutReason', msg)
//       auth.logout()
//     }
//   })
// });

new Vue({
  router,
  store,
  render: h => h(App),
})
.$mount('#app');
