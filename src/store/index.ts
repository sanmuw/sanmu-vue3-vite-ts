import { InjectionKey } from '@vue/runtime-core';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

import settingsModule from './modules/Setting/index';
import appModule from './modules/app/index';
import permissionModule from './modules/permission/index';
import RootStateTypes, { AllStateTypes } from './types';

const defaultState = {
};
// 新建store 实例
export const store = createStore({
  state() {
    return defaultState;
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {
    settingsModule,
    appModule,
    permissionModule
  },
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue3-store');

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key);
}
