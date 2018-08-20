import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';
import Dashboard from '@/pages/Home/Dashboard.vue';

Vue.use(Router);

const routes = [
  { name: 'home', path: '/home', component: Home, children: [
    { name: 'dashboard', path: 'dashboard', component: Dashboard, meta: { breadcrumb: 'Dashboard' } },
  ] },
  // { name: 'login', path: '/login', component: Login, meta: { breadcrumb: 'Login' } },
  { path: '*', redirect: '/home' }
];

export default new Router({ routes, linkActiveClass: 'is-active', linkExactActiveClass: 'is-active', mode: 'history', base: process.env.BASE_URL, });

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home,
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
//     },
//   ],
// });
