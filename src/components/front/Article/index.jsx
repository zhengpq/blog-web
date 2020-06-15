import React, { useEffect } from 'react';
import { connect } from 'dva'
import { useParams } from "umi";
const ReactMarkdown = require('react-markdown')
import styles from './index.less';

const Article = props => {
  const { dispatch, detail } = props
  const { title, type, content} = detail
  const params = useParams()
  console.log('paki', params);

  useEffect(() => {
    const keys = Object.keys(detail)
    if (keys.length > 0) {
      dispatch({
        type: 'article/initArticle'
      })
    } else {
      dispatch({
        type: 'article/articleDetail',
        payload: {
          id: parseInt(params.id)
        }
      })
    }
  }, [])
  
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <ReactMarkdown source={content}></ReactMarkdown>
      </div>
    </div>
  )
}

export default connect(({ article: { detail } }) => ({ detail }))(Article);