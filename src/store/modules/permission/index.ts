/* eslint-disable no-restricted-syntax */
import { Module } from 'vuex';
import { constantRoutes } from '@/router';
import permissionStateTypes from './types';
import RootStateTypes from '../../types';

// create a new Store Modules.
const permissionModule: Module<permissionStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    accessRoutes: constantRoutes, // 可访问路由集合
    routes:constantRoutes, // 所有路由集合
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
};
export default permissionModule;
