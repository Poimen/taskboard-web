import { Module } from 'vuex';
import { IRootState } from '@/store';

import { MenuItem, MenuSection, SidebarState } from './models';
import { getters } from './getters';

const menus: MenuSection[] = [
  new MenuSection('', [
    new MenuItem('', 'far fa-compass', 'Dashboard', 'dashboard'),
    new MenuItem('', 'fas fa-tasks', 'Tasks', 'tasks'),
    new MenuItem('', 'far fa-address-card', 'Clients', 'clients'),
    new MenuItem('', 'far fa-calendar-check', 'Calendar', 'calendar'),
    new MenuItem('', 'far fa-calendar', 'Day', 'day'),
    new MenuItem('', 'fas fa-chalkboard-teacher', 'Knowledge Board', 'knowledgeboard'),
    new MenuItem('', 'fas fa-table', 'Reports', 'reports'),
    new MenuItem('', 'fas fa-comments', 'Chat', 'chat'),
    // new MenuItem('Notifications', '', 'Notifications', 'notifications'),
    new MenuItem('', 'fas fa-cog', 'Administration', 'admin'),
    new MenuItem('', 'fas fa-user', 'User Profile', 'userprofile')
  ]),
];

const state: SidebarState = new SidebarState(menus);

export const namespaced = true;

export const sidebarState: Module<SidebarState, IRootState> = {
  namespaced,
  state,
  getters
};
