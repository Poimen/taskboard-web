import { GetterTree } from 'vuex';

import { SidebarState } from '@/components/Sidebar/store/models';
import { IRootState } from '@/store';

export const getters: GetterTree<SidebarState, IRootState> = {
  menus(state) {
    return state.menus;
  }
};
