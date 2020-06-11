import request from '@/utils/request'

// 拉取文章列表
export async function articlesServer() {
  return request('/api/admin/articles')
}

// 删除文章
export async function delectArticleServer(id) {
  console.log('pakizheng000', id)
  return request('/api/admin/delete/article', {
    method: 'POST',
    data: {
      id: id,
    },
  })
}