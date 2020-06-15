import React, { useState, useEffect, useRef} from 'react';
import { connect } from 'dva';
import { Link } from 'umi'
import { Input, Layout, Button, Radio, Menu } from 'antd';
import styles from './index.less';

const { Header, Sider, Content } = Layout;
const { TextArea } = Input;

const routes = [
  {
    name: '文章管理',
    key: 'articles',
    path: '/admin/articles'
  },
  {
    name: '草稿管理',
    key: 'drafts',
    path: '/admin/drafts',
  },
  {
    name: '标签管理',
    key: 'tags',
    path: '/admin/tags'
  },
  {
    name: '新建文章',
    key: 'write',
    path: '/admin/write',
  }
]

const Admin = props => {
  const { dispatch } = props
  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['articles']}>
          {
            routes.map(item => {
              return (
              <Menu.Item key={item.key}><Link to={item.path}>{item.name}</Link></Menu.Item>
              )
            })
          }
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}></Header>
        <Content className={styles.main}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default connect(() => ({}))(Admin);
