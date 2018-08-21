import { Module } from 'vuex';
import { IRootState } from '@/store';

import { MenuItem, MenuSection, SidebarState } from '@/components/Sidebar/store/models';
import { getters } from '@/components/Sidebar/store/getters';

const menus: MenuSection[] = [
  new MenuSection('', [
    new MenuItem('Dashboard', '', 'Dashboard', 'dashboard')
  ]),
  new MenuSection('Boards', [
    new MenuItem('Tasks', '', 'Tasks', 'tasks'),
    new MenuItem('Clients', '', 'Clients', 'clients'),
    new MenuItem('Calendar', '', 'Calendar', 'calendar'),
    new MenuItem('Day', '', 'Day', 'day')
  ]),
  new MenuSection('Knowledge', [
    new MenuItem('Knowledge Board', '', 'Knowledge Board', 'knowledgeboard'),
    new MenuItem('Reports', '', 'Reports', 'reports')
  ]),
  new MenuSection('General', [
    new MenuItem('Chat', '', 'Chat', 'chat'),
    // new MenuItem('Notifications', '', 'Notifications', 'notifications'),
    new MenuItem('Administration', '', 'Administration', 'admin'),
    new MenuItem('User', '', 'User Profile', 'userprofile')
  ])
];

const state: SidebarState = new SidebarState(menus);

export const namespaced = true;

export const sidebarState: Module<SidebarState, IRootState> = {
  namespaced,
  state,
  getters
};
