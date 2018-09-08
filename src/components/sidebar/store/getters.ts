import { GetterTree } from 'vuex';

import { SidebarState } from '@/components/sidebar/store/models';
import { IRootState } from '@/store';

export const getters: GetterTree<SidebarState, IRootState> = {
  menus(state) {
    return state.menus;
  }
};
