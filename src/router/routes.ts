const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('/@/layout/basic/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('/@/views/home/index.vue'),
        meta: {
          title: 'tabbar.home',
          keepAlive: true,
        },
      },
      {
        path: 'myCourse',
        component: () => import('/@/views/myCourse/index.vue'),
        meta: {
          title: 'tabbar.myCourse',
          keepAlive: true,
        },
      },
      {
        path: 'news',
        component: () => import('/@/views/news/index.vue'),
        meta: {
          title: 'tabbar.news',
          keepAlive: true,
        },
      },
      {
        path: 'member',
        component: () => import('/@/views/member/index.vue'),
        meta: {
          title: 'tabbar.member',
          keepAlive: true,
        },
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('/@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('/@/views/login/cnps/login-register.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
];

export default routes;
