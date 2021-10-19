import settingStateTypes from './modules/Setting/types';
import appStateTypes from './modules/app/types';
import permissionStateTypes from './modules/permission/types';

export default interface RootStateTypes {
}

export interface AllStateTypes extends RootStateTypes {
  settingsModule: settingStateTypes,
  appModule: appStateTypes,
  permissionModule:permissionStateTypes
}
