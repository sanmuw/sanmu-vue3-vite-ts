import { Module } from 'vuex';
import defaultSetting from '@/config';
import settingStateTypes from './types';
import RootStateTypes from '../../types';

const {
  title, fixedHeader, sideBarLogo, 
} = defaultSetting.default;
// create a new Store Modules.
const settingsModule: Module<settingStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    title,
    fixedHeader,
    sideBarLogo,
    hideHeader:false,

  },
  mutations: {
    toggleHeader:(state: settingStateTypes)=>{
      state.hideHeader=!state.hideHeader
    },
    toggleFixedHeader:(state: settingStateTypes)=>{
      state.fixedHeader=!state.fixedHeader
    },
    toggleSidebarLogo:(state: settingStateTypes)=>{
      state.sideBarLogo=!state.sideBarLogo
    },
  },
  actions: {
    toToggleHeader({commit}){
      commit('toggleHeader');
    },
    toToggleFixedHeader({commit}){
      commit('toggleFixedHeader');
    },
    toToggleSidebarLogo({commit}){
      commit('toggleSidebarLogo');
    },
  },
  getters: {
    getHideHeaderState(state:settingStateTypes){
      return state.hideHeader
    },
    getFixedHeaderState(state:settingStateTypes){
      return state.fixedHeader
    },
    getSidebarLogoState(state:settingStateTypes){
      return state.sideBarLogo
    },
  },
};
export default settingsModule;
