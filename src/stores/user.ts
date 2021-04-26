/**
 * User
 * @file 登录信息存储
 * @module src/stores/user.ts
 * @author yangxiang
 */

import { makeAutoObservable } from "mobx";
import storage from "services/storage";
import STORAGE from "constants/storage";

export interface IUserStore {}

class UserStore {
  isShowLoading: boolean = true;
  isSignIn: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.resetStore();
  }

  resetStore() {
    this.initIsSignIn();
  }

  hideShowLoading() {
    this.isShowLoading = false;
  }

  updateIsSignIn(isSignIn: boolean) {
    this.hideShowLoading();
    this.isSignIn = isSignIn;
    storage.set(STORAGE.LOCAL_IS_SIGN_IN, isSignIn);
  }

  fetchLogin() {
    setTimeout(() => {
      this.updateIsSignIn(true);
    }, 3000);
    // try {
    //     const projects = await fetchGithubProjectsSomehow()
    //     const filteredProjects = somePreprocessing(projects)
    //     runInAction(() => {
    //         this.githubProjects = filteredProjects
    //         this.state = "done"
    //     })
    // } catch (e) {
    //     runInAction(() => {
    //         this.state = "error"
    //     })
    // }
  }

  private initIsSignIn() {
    storage.get<boolean>(STORAGE.LOCAL_IS_SIGN_IN).then((isSignIn) => {
      if (isSignIn != null) {
        this.updateIsSignIn(isSignIn);
        if (isSignIn) {
          this.fetchLogin();
        }
      }
    });
  }
}

export const userStore = new UserStore();
