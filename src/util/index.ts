/**
 * Index
 * @file 公用方法
 * @module src/util/index.ts
 * @author yangxiang
 */

import React from "react";
import moment from "moment";
import { NavigationContainerRef } from "@react-navigation/native";
const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: string, param?: any): void => {
  navigationRef.current?.navigate(name, param);
};

export const goBack = (): void => {
  navigationRef.current?.goBack();
};

export const formatDateMsByMS = (millisecond: number): string => {
  return moment(new Date(millisecond)).format("mm:ss");
};

export const formatDateMsByYMD = (millisecond: number): string => {
  return moment(new Date(millisecond)).format("yyyy/MM/DD");
};

export const formatDateMsByYMDHM = (millisecond: number): string => {
  return moment(new Date(millisecond)).format("yyyy/MM/DD HH:mm");
};
