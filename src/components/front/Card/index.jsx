import React, { useEffect } from 'react';
import styles from './index.less';

const Card = props => {
  const {article, onClick} = props
  
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardTitle}>{article.title}</div>
    </div>
  )
}

export default Card