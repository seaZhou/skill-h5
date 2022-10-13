import { useCookies } from '@vueuse/integrations/useCookies';
import { defineStore } from 'pinia';
import { ILoginState } from './types';
import { accountLoginRequest } from '/@/service/login/login';
import localCache from '/@/utils/cache';
import router from '/@/router';

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
      this.setInfo(loginResult.data.sysUser);
      this.setToken(loginResult.token.access_token);
      localCache.setCache('token', loginResult.token.access_token);
      router.push({ path: '/home' });
    },
  },
  persist: {
    key: 'token',
    storage: localStorage,
    paths: ['token'],
  },
});
// export const useUserStore = defineStore('app-user', () => {
//   const Token = ref(token);
//   const info = ref<Record<any, any>>({});
//   const setInfo = (info: any) => {
//     info.value = info ? info : '';
//   };
//   const getUserInfo = () => {
//     return info || {};
//   };
//   const login = () => {
//     return new Promise((resolve) => {
//       const { data } = loginPassword();
//       watch(data, () => {
//         setInfo(data.value);
//         // useCookies().set(VITE_TOKEN_KEY as string, data.value.token);
//         resolve(data.value);
//       });
//     });
//   };
//   return {
//     Token,
//     info,
//     setInfo,
//     login,
//     getUserInfo,
//   };
// });
