/**
 * Image
 * @file
 * @module src/components/image.ts
 * @author yangxiang
 */
import { ImageSourcePropType } from "react-native";

export interface IImageIconPropType {
  readonly [key: string]: ImageSourcePropType;
}

export interface IImagePropType {
  readonly [key: string]: IImageIconPropType;
}

export const Images: IImagePropType = {
  common: {},
  tabBar: {
    Home: require("../assets/images/ios-icon/Icon-40.png"),
    Home_S: require("../assets/images/ios-icon/Icon-40.png"),
    Order: require("../assets/images/ios-icon/Icon-40.png"),
    Order_S: require("../assets/images/ios-icon/Icon-40.png"),
    Main: require("../assets/images/ios-icon/Icon-40.png"),
    Main_S: require("../assets/images/ios-icon/Icon-40.png")
  },
  home: {},
  login: {}
};
