import { defineStore } from 'pinia';
import { ILoginState } from './types';
import { accountLoginRequest } from '/@/service/login/login';
import localCache from '/@/utils/cache';
import router from '/@/router';
import { Toast } from '@nutui/nutui';

interface StoreUser {
  token: string;
  info: Record<any, any>;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): StoreUser => ({
    token: '',
    info: {},
  }),
  getters: {
    getUserInfo(): any {
      return this.info || {};
    },
  },
  actions: {
    setInfo(info: any) {
      this.info = info ? info : '';
    },
    setToken(token: any) {
      this.token = token ? token : '';
    },
    async login(account: { username: string; password: string }) {
      console.log(account, 'account');
      const loginResult = await accountLoginRequest(account);
      console.log(loginResult, 'res');
      if (loginResult.code === 200) {
        this.setInfo(loginResult.data.sysUser);
        this.setToken(loginResult.token.access_token);
        localCache.setCache('token', loginResult.token.access_token);
        router.push({ path: '/home' });
        Toast.success(loginResult.msg);
      } else {
        Toast.fail(loginResult.msg);
      }
    },
  },
  persist: {
    key: 'token',
    storage: localStorage,
    paths: ['token'],
  },
});
