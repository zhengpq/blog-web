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
      redirect: '/front'
    },
    {
      path: '/front',
      component: '@/pages/index',
      routes: [
        {
          path: '/front',
          redirect: 'articles',
        },
        {
          path: 'articles',
          component: '@/components/front/Articles',
          exact: true
        },
        {
          path: 'article/:id',
          component: '@/components/front/Article',
          exact: true
        },
      ],
    },
    { path: '/admin/write', exact: true, component: '@/pages/Write' },
    {
      path: '/admin',
      component: '@/pages/Admin',
      routes: [
        {
          path: '/admin',
          redirect: 'articles',
        },
        {
          path: 'articles',
          component: '@/components/back/Articles',
          exact: true,
        },
        {
          path: 'drafts',
          component: '@/components/back/Drafts',
          exact: true,
        },
      ],
    },
  ],
});
