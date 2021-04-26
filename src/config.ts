/**
 * App config
 * @file App 配置
 * @module app/config
 * @author Surmon <https://github.com/surmon-china>
 */

import { Dimensions, Platform, ScaledSize } from "react-native";

export const appName = "Panda";
export const email = "Panda";
export const webUrl = "";
export const appApi = "";
export const staticApi = "";
export const gravatarApi = "";
export const GitHubUrl = "";

export const IS_DEV = __DEV__;
export const IS_IOS = Object.is(Platform.OS, "ios");
export const IS_ANDROID = !IS_IOS;

export const screenSize = (): ScaledSize => {
  return Dimensions.get("screen");
};

export const windowSize = (): ScaledSize => {
  return Dimensions.get("window");
};

export const isIPhoneX = (): boolean => {
  const dim = windowSize();
  return IS_IOS && (isIPhoneXSize(dim) || isIPhoneXrSize(dim));
};

export const isIPhoneXSize = (dim: ScaledSize): boolean =>
  dim.height === 812 || dim.width === 812;
export const isIPhoneXrSize = (dim: ScaledSize): boolean =>
  dim.height === 896 || dim.width === 896;

export const delay = (timeout = 1000): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), timeout));
