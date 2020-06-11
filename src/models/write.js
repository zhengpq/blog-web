import { publishArticleService } from '../services/write'
import { history } from 'umi'
import { message } from 'antd'

export default {
  namespace: 'write',
  state: {
    id: null,
    title: 'hhhh',
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
      { type: 'original', name: '原创'},
      { type: 'reprint', name: '转载'},
      { type: 'translate', name: '翻译'},
    ],
    content: '测试测试',
    typeSelected: 'original',
    // tagSelected: null,
  },
  effects: {
    *publishArticle({payload, callback},{call, put}) {
      const res = yield call(publishArticleService, payload)
      if (res.status === 200) {
        message.success('发布成功', 1, () => {
          history.push('/admin/articles')
        })
      } else {
        message.warn('发布失败')
      } 
    }
  },
  reducers: {
    setTags(state, {payload}) {

    },
    changeUserList(state, { payload }) {
      return {...state, users: payload.data}
    }
  }
}