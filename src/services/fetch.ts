/**
 * Fetch service
 * @file 数据请求器
 * @module app/services/fetch
 */

import { stringify } from "query-string";
import {
  TRequestUrlPath,
  TRequestData,
  IRequestParams,
  THttpSuccessResponse,
  THttpResponse
} from "types/http";
import { appApi } from "config";
import { showToast } from "./toast";
import { optionStore } from "stores/option";

//构造函数
export const formatURL = (
  url: TRequestUrlPath,
  params?: IRequestParams
): TRequestUrlPath => {
  let query = "";
  if (params && Object.keys(params).length) {
    query = url.includes("?")
      ? `&${stringify(params)}`
      : `?${stringify(params)}`;
  }
  return `${url}${query}`;
};

/**
 * fetch 网络请求超时处理
 * @param original_fetch fetch
 * @param timeout
 * @returns {Promise<any>}
 */

const timeOutFetch = (
  original_fetch: Promise<Response>,
  timeout: number = 30000
): Promise<any> => {
  let timeoutBlock = () => {};
  let timeout_promise = new Promise((resolve, reject) => {
    timeoutBlock = () => {
      // 请求超时处理
      reject("timeout promise");
    };
  });

  let adorable_promise = Promise.race([original_fetch, timeout_promise]);

  setTimeout(() => {
    timeoutBlock();
  }, timeout);

  return adorable_promise;
};

//请求方法
export const httpService = <T>(
  url: TRequestUrlPath,
  options: RequestInit = {}
): Promise<THttpSuccessResponse<T>> => {
  const defaultOptions = {
    includeCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  return new Promise((resolve, reject) => {
    timeOutFetch(fetch(appApi + url, Object.assign(defaultOptions, options)))
      .then((response) => response.json())
      .then((response) => {
        if (response.res === 9999) {
          optionStore.updateLogin("", false);
          return;
        }
        resolve(response);
      })
      .catch((error) => {
        showToast("networkError");
        console.warn(`networkError：`, `url：${url}`, error);
      });
  });
};

export const get = <T>(
  url: TRequestUrlPath,
  getParams?: IRequestParams
): Promise<THttpSuccessResponse<T>> => {
  return httpService<T>(formatURL(url, getParams), { method: "GET" });
};

export const post = <T>(
  url: TRequestUrlPath,
  data?: TRequestData
): Promise<THttpSuccessResponse<T>> => {
  return httpService<T>(url, { method: "POST", body: JSON.stringify(data) });
};

export const put = <T>(
  url: TRequestUrlPath,
  data?: TRequestData
): Promise<THttpSuccessResponse<T>> => {
  return httpService<T>(url, { method: "PUT", body: JSON.stringify(data) });
};

export const patch = <T>(
  url: TRequestUrlPath,
  data?: TRequestData
): Promise<THttpSuccessResponse<T>> => {
  return httpService<T>(url, { method: "PATCH", body: JSON.stringify(data) });
};

export const remove = <T>(
  url: TRequestUrlPath,
  data?: TRequestData
): Promise<THttpSuccessResponse<T>> => {
  return httpService<T>(url, { method: "DELETE", body: JSON.stringify(data) });
};

export default {
  get,
  post,
  put,
  patch,
  remove
};
