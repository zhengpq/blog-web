import request from '@/utils/request'

// 拉取文章列表
export async function articlesServer() {
  return request('/api/admin/articles')
}

// 获取文章详情
export async function articleService(id) {
  return request('/api/article', {
    method: 'GET',
    params: {
      id,
    }
  })
}