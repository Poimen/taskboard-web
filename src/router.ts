import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';
import Dashboard from '@/pages/Home/Dashboard.vue';
import Calendar from '@/pages/Home/Calendar.vue';
import Chat from '@/pages/Home/Chat.vue';
import KnowledgeBoard from '@/pages/Home/KnowledgeBoard.vue';
import Reports from '@/pages/Home/Reports.vue';
import Settings from '@/pages/Home/Settings.vue';
import Tasks from '@/pages/Home/Tasks.vue';
import UserProfile from '@/pages/Home/UserProfile.vue';

Vue.use(Router);

const routes = [
  { name: 'home', path: '/home', component: Home, children: [
    { name: 'dashboard', path: 'dashboard', component: Dashboard, meta: { breadcrumb: 'Dashboard' } },
    { name: 'caledar', path: 'calendar', component: Calendar, meta: { breadcrumb: 'Calendar' } },
    { name: 'chat', path: 'chat', component: Chat, meta: { breadcrumb: 'Char' } },
    { name: 'knowledgeboard', path: 'knowledge', component: KnowledgeBoard, meta: { breadcrumb: 'Knowledge Board' } },
    { name: 'reports', path: 'reports', component: Reports, meta: { breadcrumb: 'Reports' } },
    { name: 'settings', path: 'settings', component: Settings, meta: { breadcrumb: 'Dashboard' } },
    { name: 'tasks', path: 'tasks', component: Tasks, meta: { breadcrumb: 'Tasks' } },
    { name: 'userprofile', path: 'userprofile', component: UserProfile, meta: { breadcrumb: 'Profile' } },
  ]},
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
