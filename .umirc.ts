import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  proxy: {
    '/api': {
      target: 'http://localhost:7001/',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: '@/pages/index',
      routes: [
        {
          path: '/home',
          redirect: '/home/articles',
        },
        {
          path: '/home/articles',
          component: '@/components/front/Articles',
        },
      ],
    },
    { path: '/article/:id', component: '@/components/front/Article' },
    { path: '/admin/write', component: '@/pages/write' },
    {
      path: '/admin',
      component: '@/pages/Admin',
      routes: [
        {
          path: '/admin',
          redirect: '/admin/articles',
        },
        {
          path: '/admin/articles',
          component: '@/components/back/Articles',
        },
        {
          path: '/admin/drafts',
          component: '@/components/back/Drafts',
        },
      ],
    },
  ],
});
