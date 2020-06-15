import request from '@/utils/request'

// 发布文章
export async function publishArticleService(data) {
  return request('/api/publish/article', {
    method: 'POST',
    data
  })
}

// 更新文章
export async function updateArticleService(data) {
  return request('/api/update/article', {
    method: 'POST',
    data
  })
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