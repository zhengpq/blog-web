import request from '@/utils/request'
// 获取用户列表
export async function getUserList() {
  return request('/api/users')
}