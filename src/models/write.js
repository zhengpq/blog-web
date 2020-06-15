import {
  publishArticleService,
  updateArticleService,
  articleService,
} from '../services/write';
import { history } from 'umi';
import { message } from 'antd';

export default {
  namespace: 'write',
  state: {
    id: null,
    title: '',
    // categories: [
    //   {id: 0, key: 'front', name: '前端'}
    // ],
    // tags: [
    //   { value: 0, label: '前端' },
    //   { value: 1, label: '后端' },
    //   { value: 2, label: '数据库' },
    //   { value: 3, label: '算法' },
    //   { value: 4, label: '操作系统' },
    // ],
    types: [
      { type: 'original', name: '原创' },
      { type: 'reprint', name: '转载' },
      { type: 'translate', name: '翻译' },
    ],
    content: '',
    typeSelected: 'original',
    // tagSelected: null,
  },
  effects: {
    *publishArticle({ payload, callback }, { call, put }) {
      const res = yield call(publishArticleService, payload);
      if (res.status === 200) {
        message.success('发布成功', 1, () => {
          history.push('/admin/articles');
        });
      } else {
        message.warn('发布失败');
      }
    },
    *updateArticle({ payload, callback }, { call, put }) {
      const res = yield call(updateArticleService, payload);
      if (res.status === 200) {
        message.success('更新成功', 1, () => {
          history.push('/admin/articles');
        });
        yield put({
          type: 'initArticle'
        })
      } else {
        message.warn('更新失败，请重试');
      }
    },
    *articleDetail({ payload, callback }, { call, put }) {
      const res = yield call(articleService, payload.id);
      const { status, data } = res;
      if (status === 200) {
        yield put({
          type: 'changeArticle',
          payload: data,
        });
        history.push('/admin/write');
      } else {
        message.warn('拉取文章内容失败');
        history.push('/admin/articles');
      }
    },
  },
  reducers: {
    setTags(state, { payload }) {},
    initArticle(state) {
      return {
        ...state,
        id: null,
        title: '',
        content: '',
        typeSelected: 'original'
      }
    },
    changeUserList(state, { payload }) {
      return { ...state, users: payload.data };
    },
    changeArticle(state, { payload, callback }) {
      const newState = {
        id: payload.id,
        title: payload.title,
        content: payload.content,
        typeSelected: payload.type,
      };
      return { ...state, ...newState };
    },
  },
};
