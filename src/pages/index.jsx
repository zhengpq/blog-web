import React, { useEffect } from 'react';
import styles from './index.less';
import { connect } from 'dva';

const Users = props => {
  const { dispatch, users } = props;
  console.log(users)

  useEffect(() => {
    dispatch({
      type: 'users/getUsers',
      callback(res) {
        dispatch({
          type: 'users/changeUserList',
          payload: {
            data: res
          }
        })
      }
    });
  }, []);

  const createArticle = () => {
    dispatch(
      {type: 'write/'}
    )
  }

  return (
    <div>
      {users
        ? users.map(item => {
            return (
              <div key={item.name}>
                <span>{item.name} : </span>
                <span>{item.age}</span>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default connect(({ users: {users} }) => ({
  users
}))(Users);
// export default () => {
//   const getUserData = () => {
//     fetch('/api/user/1')
//     .then(function(response) {
//       response.json().then(body => {
//         console.log('pakizheng', body)
//       })
//     })
//     .then(function(myJson) {
//       console.log(myJson);
//     });
//   }
//   return (
//     <div>
//       <h1 className={styles.title}>Page index</h1>
//     </div>
//   );
// }
