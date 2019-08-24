import { ApplicationState } from './models/ApplicationState';
import { Module } from 'vuex';
import { IRootState } from './models/IRootState';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export const state = new ApplicationState();

const namespaced: boolean = true;

export const applicationStore: Module<ApplicationState, IRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
