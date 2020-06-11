import request from '@/utils/request'

export async function publishArticleService(data) {
  return request('/api/publish/article', {
    method: 'POST',
    data
  })
}