import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';
import Admin from '@/pages/home/Administration.vue';
import Dashboard from '@/pages/home/Dashboard.vue';
import Calendar from '@/pages/home/Calendar.vue';
import Day from '@/pages/home/Day.vue';
import Chat from '@/pages/home/Chat.vue';
import KnowledgeBoard from '@/pages/home/KnowledgeBoard.vue';
import Reports from '@/pages/home/Reports.vue';
import Settings from '@/pages/home/Settings.vue';
import Tasks from '@/pages/home/Tasks.vue';
import UserProfile from '@/pages/home/UserProfile.vue';

Vue.use(Router);

const routes = [
  { name: 'home', path: '/home', component: Home, children: [
    { name: 'dashboard', path: 'dashboard', component: Dashboard, meta: { breadcrumb: 'Dashboard' } },
    { name: 'clients', path: 'client', component: Calendar, meta: { breadcrumb: 'Clients' } },
    { name: 'calendar', path: 'calendar', component: Calendar, meta: { breadcrumb: 'Calendar' } },
    { name: 'day', path: 'day', component: Day, meta: { breadcrumb: 'Calendar' } },
    { name: 'chat', path: 'chat', component: Chat, meta: { breadcrumb: 'Char' } },
    { name: 'knowledgeboard', path: 'knowledge', component: KnowledgeBoard, meta: { breadcrumb: 'Knowledge Board' } },
    { name: 'reports', path: 'report', component: Reports, meta: { breadcrumb: 'Reports' } },
    { name: 'settings', path: 'settings', component: Settings, meta: { breadcrumb: 'Dashboard' } },
    { name: 'tasks', path: 'tasks', component: Tasks, meta: { breadcrumb: 'Tasks' } },
    { name: 'admin', path: 'admin', component: Admin, meta: { breadcrumb: 'Administration' } },
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
