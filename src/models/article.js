import {
  articleService,
  articlesServer
} from '../services/article';
import { history } from 'umi';
import { message } from 'antd';

export default {
  namespace: 'article',
  state: {
    articles: [],
    detail: {},
  },
  effects: {
    *articles({payload, callback},{call, put}) {
      const {status, data} = yield call(articlesServer)
      if (status === 200) {
        yield put({
          type: 'changeArticles',
          payload: {
            articles: data.map(article => ({
              key: article.id,
              id: article.id,
              title: article.title,
              type: article.type
            }))
          }
        })
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
      } else {
        message.warn('拉取文章内容失败');
        history.push('/');
      }
    },
  },
  reducers: {
    changeArticles(state, { payload }) {
      return {...state, ...payload}
    },
    initArticle(state) {
      return {...state, detail: {}}
    },
    changeArticle(state, { payload, callback }) {
      const newDetail = {
        id: payload.id,
        title: payload.title,
        content: payload.content,
        typeSelected: payload.type,
      };
      return { ...state, detail: newDetail };
    },
  },
};
