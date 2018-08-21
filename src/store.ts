import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { sidebarState } from '@/components/Sidebar/store/store';

Vue.use(Vuex);

export interface IRootState {
  version: string;
}

const store: StoreOptions<IRootState> = {
  state: {
    version: '0.0.1'
  },
  modules: {
    sidebarState
  }
};

export default new Vuex.Store<IRootState>(store);

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   },
// });
