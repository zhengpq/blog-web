import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'dva';
import { Table, Button } from 'antd';
import styles from './index.less';

const Articles = props => {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '文章类型',
      dataIndex: 'type',
      key: 'type',
    },
    // {
    //   title: '创建日期',
    //   dataIndex: 'create_date',
    //   key: 'create_date',
    // },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (text, record, index) => {
        console.log('paki', text, record, index, Articles.deleteArticle);
        return (
          <div className={styles.actions}>
            <Button
              style={{ marginRight: '16px' }}
              type="primary"
              onClick={() => {
                changeArticle(record.id)
              }}
            >
              修改
            </Button>
            <Button
              onClick={() => {
                deleteArticle(record.id);
              }}
            >
              删除
            </Button>
          </div>
        );
      },
    },
  ];

  const { dispatch, articles, updateArticleList } = props;
  useEffect(() => {
    dispatch({
      type: 'admin/articles',
    });
  }, []);
  const deleteArticle = articleId => {
    dispatch({
      type: 'admin/delectArticle',
      payload: {
        id: articleId,
      },
      callback() {
        dispatch({
          type: 'admin/articles',
        });
      }
    });
  };
  const changeArticle = articleId => {
    dispatch({
      type: '',
      payload: {
        id: articleId
      }
    })
  }
  return (
    <div>
      <Table columns={columns} dataSource={articles}></Table>
    </div>
  );
};

export default connect(({ admin: { articles } }) => ({ articles }))(Articles);
