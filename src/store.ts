import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { IRootState } from './store/application/models/IRootState';
import { applicationStore } from './store/application/store';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  state: {
    version: '0.0.1'
  },
  modules: {
    application: applicationStore
  }
  // plugins: [createPersistedState({
  //   key: 'sageworxs'
  // })]
};

export default new Vuex.Store<IRootState>(store);
