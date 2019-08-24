import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const ifAuthenticated = (to: any, from: any, next: any) => {
  console.log(`Checking auth route`);
  // if (authService.isAuthenticated()) {
  //   next();
  //   return;
  // } else if (authService.hasAuth() && !authService.hasAuthExpired()) {
  //   next();
  //   return;
  // }
  // console.log(`auth failed`);
  // next({ name: 'login' });
  next();
};

const routes: RouteConfig[] = [{
  name: 'home',
  path: '/',
  component: Home,
  beforeEnter: ifAuthenticated
}];

const router = new Router({ routes, linkActiveClass: 'is-active', linkExactActiveClass: 'is-active', mode: 'history' });

export default router;
