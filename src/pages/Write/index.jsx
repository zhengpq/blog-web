import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'dva';
import SimpleMDE from 'react-simplemde-editor';
import { Input, Layout, Button, Radio } from 'antd';
import 'easymde/dist/easymde.min.css';
import styles from './index.less';

const { Header, Content } = Layout;
const { TextArea } = Input;

const Write = props => {
  const {
    dispatch,
    title,
    tags,
    types,
    content,
    typeSelected,
    tagSelected,
  } = props;

  const [articleTitle, setTitle] = useState(title);
  const [articleTypeSelected, setType] = useState(typeSelected);
  const [articleContent, setContent] = useState(content);

  const changeTitle = event => {
    const { value } = event.target;
    setTitle(value);
  };

  const changeType = event => {
    const { value } = event.target;
    setType(value);
  };

  const changeContent = value => {
    setContent(value);
  };

  const publish = () => {
    dispatch({
      type: 'write/publishArticle',
      payload: {
        title: articleTitle,
        type: articleTypeSelected,
        content: articleContent,
      },
    });
  };

  const saveDraft = () => {};

  return (
    <Layout className={styles.layout}>
      <Header className={styles.headerOuter}>
        <div className={styles.header}>
          {/* <Button style={{ marginRight: '24px' }} onClick={saveDraft}>
            保存为草稿
          </Button> */}
          <Button type="primary" onClick={publish}>
            发布文章
          </Button>
        </div>
      </Header>
      <Content className={styles.main}>
        <Input
          className={styles.section}
          placeholder="请输入文章标题"
          size="large"
          value={articleTitle}
          onChange={changeTitle}
        ></Input>
        <div className={`${styles.section} ${styles.type}`}>
          <div className={styles.label}>文章类型</div>
          <Radio.Group value={articleTypeSelected} onChange={changeType}>
            {types.map(type => {
              return (
                <Radio value={type.type} key={type.type}>
                  {type.name}
                </Radio>
              );
            })}
          </Radio.Group>
        </div>
        {/* <div className={styles.section}>
          <div className={styles.label}>文章类别</div>
        </div> */}
        <div className={styles.section}>
          <SimpleMDE
            value={content}
            options={{
              spellChecker: false,
              minHeight:'800px',
              uploadImage: true
            }}
            onChange={changeContent}
          ></SimpleMDE>
        </div>
      </Content>
    </Layout>
  );
};

export default connect(
  ({ write: { title, types, content, typeSelected } }) => ({
    title,
    types,
    content,
    typeSelected
  }),
)(Write);
