/**
 * Regexp constant
 * @file 通用正则
 * @module app/constants/regexp
 */

export const EMAIL: RegExp = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;

export const PHONE: RegExp = /^[1][3,4,5,7,8][0-9]{9}$/;

export const emailRegular = (content: string): boolean => {
  return EMAIL.test(content);
};

export const phoneRegular = (content: string): boolean => {
  return PHONE.test(content);
};
