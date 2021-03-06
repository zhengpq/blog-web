import React, { useEffect } from 'react';
import Card from '../Card';
import { history } from 'umi';
import { connect } from 'dva';

const Articles = props => {
  const { dispatch, articles } = props;
  console.log('paki articles', articles);

  useEffect(() => {
    dispatch({type: 'article/initArticle'})
  })
  const showArticle = id => {
    console.log('paki11');
    history.push(`/front/article/${id}`);
  };

  const articleList = () => {
    return articles.map(item => (
      <Card
        article={item}
        key={item.key}
        onClick={() => {
          showArticle(item.id);
        }}
      ></Card>
    ));
  };

  return <>{articleList()}</>;
};

export default connect(({ article: { articles } }) => ({ articles }))(Articles);
