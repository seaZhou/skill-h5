import { defineStore } from 'pinia';
import { LessonListRequest } from '/@/service/lesson/index';
import localCache from '/@/utils/cache';
import router from '/@/router';
import { Toast } from '@nutui/nutui';

interface StoreList {
  rows: Record<any, any>;
  total: number;
}

export const useLessonStore = defineStore({
  id: 'app-user',
  state: (): StoreList => ({
    total: 0,
    rows: {},
  }),
  getters: {
    getLessonList(): any {
      return this.rows || {};
    },
  },
  actions: {
    setRows(rows: any) {
      console.log(rows, 'rows')
      this.rows = rows ? rows : '';
    },
    setTotal(total: number) {
      this.total = total ? total : 0;
    },
    async lessonList(params) {
      console.log(params, 'params');
      const listResult = await LessonListRequest(params);
      console.log(listResult, 'listResult');
      if (listResult.code === 200) {
        this.setRows(listResult.rows);
        this.setTotal(listResult.total);
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
