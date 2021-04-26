/**
 * App global option store
 * @file App 全局公共存储
 * @module app/stores/option
 */

import {
  observable,
  action,
  makeAutoObservable,
  runInAction,
  computed
} from "mobx";
import { updateTheme, isDarkSystemTheme } from "style/colors";
import storage from "services/storage";
import STORAGE from "constants/storage";
import { getDeviceLanguage, updateLanguage, TLanguage } from "stores/i18n";
import { LANGUAGES } from "constants/language";

export interface IOptionStore {
  language: TLanguage;
  darkTheme: boolean;
}

class OptionStore {
  @observable language: TLanguage = LANGUAGES.ZH;
  @observable darkTheme: boolean = isDarkSystemTheme;

  constructor() {
    makeAutoObservable(this);
    this.resetStore();
  }

  @computed get isEnLang() {
    return this.language === LANGUAGES.EN;
  }

  @action.bound
  updateLanguageWithOutStorage(language: TLanguage) {
    this.language = language;
    updateLanguage(language);
  }

  @action.bound
  updateLanguage(language: TLanguage) {
    this.updateLanguageWithOutStorage(language);
    storage.set(STORAGE.LOCAL_LANGUAGE, language);
  }

  @action.bound
  updateDarkTheme(darkTheme: boolean) {
    runInAction(() => {
      this.darkTheme = darkTheme;
      storage.set(STORAGE.LOCAL_DARK_THEME, darkTheme);
      updateTheme(darkTheme);
    });
  }

  resetStore() {
    this.initLanguage();
    this.initDarkTheme();
  }

  private initLanguage() {
    storage
      .get<TLanguage>(STORAGE.LOCAL_LANGUAGE)
      .then((localLanguage) => {
        return localLanguage
          ? Promise.resolve(localLanguage)
          : getDeviceLanguage();
      })
      .then((language) => {
        console.log("Init app language:", language);
        this.updateLanguageWithOutStorage(language);
      });
  }

  private initDarkTheme() {
    storage.get<boolean>(STORAGE.LOCAL_DARK_THEME).then((darkTheme) => {
      if (darkTheme != null) {
        console.log("Init app darkTheme:", darkTheme);
        this.updateDarkTheme(darkTheme);
      }
    });
  }
}

export const optionStore = new OptionStore();
