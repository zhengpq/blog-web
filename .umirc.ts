import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  proxy: {
    '/api': {
      target: 'http://localhost:7002/',
    },
  },
  routes: [
    {
      path: '/',
      exact: true,
      component: '@/pages/index',
      routes: [
        {
          path: '/articles',
          component: '@/components/front/Articles',
          exact: true,
        },
        {
          path: '/article/:id',
          exact: true,
          component: '@/components/front/Article',
        },
      ],
    },
    { path: '/admin/write', exact: true, component: '@/pages/Write' },
    {
      path: '/admin',
      component: '@/pages/Admin',
      exact: true,
      routes: [
        {
          path: '/admin',
          redirect: '/admin/articles',
          exact: true,
        },
        {
          path: '/admin/articles',
          component: '@/components/back/Articles',
          exact: true,
        },
        {
          path: '/admin/drafts',
          component: '@/components/back/Drafts',
          exact: true,
        },
      ],
    },
  ],
});
