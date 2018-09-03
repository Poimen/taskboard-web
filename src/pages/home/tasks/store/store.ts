import { Module } from 'vuex';
import { IRootState } from '@/store';

import { TasksState, Task } from './models';

const tasks: Task[] = [];
const state: TasksState = new TasksState(tasks);

export const namespaced = true;

export const tasksState: Module<TasksState, IRootState> = {
  namespaced,
  state
};
