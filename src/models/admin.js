import { articlesServer, delectArticleServer} from '../services/admin'
import { transforType } from '../utils/transfor'
import { history } from 'umi'
import { message } from 'antd'

export default {
  namespace: 'admin',
  state: {
    articles: [],
    drafts: [],
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
              type: transforType(article.type)
            }))
          }
        })
      }
    },
    *delectArticle({payload, callback},{call, put}){
      const {id} = payload
      const { status } =  yield call(delectArticleServer, id)
      console.log('pakizheng99', status)
      if (status === 200) {
        message.success('删除成功后', 1, () => {
          callback()
        })
      } else {
        message.warn('删除失败')
      }
    }
  },
  reducers: {
    changeArticles(state, { payload }) {
      return {...state, ...payload}
    }
  }
}