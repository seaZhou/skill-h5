import { createRouter, createWebHashHistory, Router } from 'vue-router';
import routes from './routes';
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

router.beforeEach(async (_to, _from, next) => {
  // if (_to.path !== '/login') {
  //   const token = localCache.getCache('token');
  //   if (!token) {
  //     return '/login';
  //   }
  // }
  next();
});

export default router;
