/**
 * Storage service
 * @file 本地存储服务
 * @module app/services/storage
 */

/*

 * storage.set(key, value);

   storage.get<string>(key).then((data) => {
      console.log("-----", data);
   });
 */

import AsyncStorage from "@react-native-community/async-storage";
import STORAGE from "@constants/storage";

export const get = <T>(key: STORAGE): Promise<T> => {
  return AsyncStorage.getItem(key).then((data) => {
    return data ? JSON.parse(data) : data;
  });
};

export const set = (key: STORAGE, value: any): Promise<void> => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};

export const remove = (key: STORAGE): Promise<void> => {
  return AsyncStorage.removeItem(key);
};

export const clear = (): Promise<void> => {
  return AsyncStorage.clear();
};

export default {
  get,
  set,
  remove,
  clear,
};
