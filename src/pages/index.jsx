import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import Card from '../components/front/Card';
import Articles from '../components/front/Articles'
import { history } from 'umi'
import styles from './index.less';
const { Header, Sider, Content } = Layout;

const App = props => {
  const { dispatch, articles } = props;
  console.log('paki', articles);

  useEffect(() => {
    dispatch({
      type: 'article/articles',
    });
  }, []);

  // const showArticle = id => {
  //   history.push(`/article/${id}`)
  // };

  // const articleList = () => {
  //   return articles.map(item => (
  //     <Card
  //       article={item}
  //       key={item.key}
  //       onClick={() => {
  //         showArticle(item.id);
  //       }}
  //     ></Card>
  //   ));
  // };

  return (
    <Layout className={styles.layout}>
      <Header style={{ padding: 0 }} className={styles.header}></Header>
      <Layout>
        <Sider trigger={null} collapsible className={styles.sider}>
          <div>jjjjj</div>
        </Sider>
        <Content className={styles.main}>
          {/* <Articles articles={articles}></Articles> */}
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default connect(({ article: { articles } }) => ({
  articles,
}))(App);
