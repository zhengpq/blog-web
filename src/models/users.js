import { getUserList } from '../services/users' 

export default {
  namespace: 'users',
  state: {
    users: [],
  },
  effects: {
    *getUsers({payload, callback},{call, put}) {
      console.log('pakizheng', payload)
      const data = yield call(getUserList)
      callback(data.users)
    }
  },
  reducers: {
    changeUserList(state, { payload }) {
      console.log('pakizheng', payload)
      return {...state, users: payload.data}
    }
  }
}