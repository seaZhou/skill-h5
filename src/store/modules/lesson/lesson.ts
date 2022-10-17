import { defineStore } from 'pinia';
import { LessonListRequest, LiveListRequest } from '/@/service/lesson/index';
import localCache from '/@/utils/cache';
import router from '/@/router';
import { Toast } from '@nutui/nutui';

interface StoreList {
  listLesson: Record<any, any>;
  listLive: Record<any, any>;
  total: number;
  liveTotal: number;
}

export const useLessonStore = defineStore({
  id: 'app-user',
  state: (): StoreList => ({
    total: 0,
    listLesson: {},
    listLive: {},
    liveTotal: 0,
  }),
  getters: {
    getLessonList(): any {
      return this.listLesson || {};
    },
    getLiveList(): any {
      return this.listLive || {};
    },
  },
  actions: {
    setlist(list: any) {
      this.listLesson = list ? list : '';
    },
    setlistLive(list: any) {
      this.listLive = list ? list : '';
    },
    setTotal(total: number) {
      this.total = total ? total : 0;
    },
    setTotalLive(total: number) {
      this.liveTotal = total ? total : 0;
    },
    async lessonList(params) {
      const listResult = await LessonListRequest(params);
      if (listResult.code === 200) {
        this.setlist(listResult.rows);
        this.setTotal(listResult.total);
        Toast.success(listResult.msg);
      } else {
        Toast.fail(listResult.msg);
      }
    },
    async liveList(params) {
      const listResult = await LiveListRequest(params);
      if (listResult.code === 200) {
        this.setlistLive(listResult.rows);
        this.setTotalLive(listResult.total);
        Toast.success(listResult.msg);
      } else {
        Toast.fail(listResult.msg);
      }
    },
  },
  persist: {
    key: 'token',
    storage: localStorage,
    paths: ['token'],
  },
});
