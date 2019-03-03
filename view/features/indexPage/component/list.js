import React from 'react';
import { List, Icon } from 'antd';
import { Link } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';
import './list.less';

export default class ListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.getArticleArray();
  }


  render() {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    const { articleList } = this.props.dataObj;
    console.log('this.props.articleList', articleList);
    return (
      <List
        className="index-page"
        itemLayout="vertical"
        size="large"
        pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: articleList.pageSize,
            }}
        dataSource={articleList.items}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText type="eye" text={item.pv} />,
              <IconText type="like-o" text={item.pv} />,
              <IconText type="message" text={item.comments.length} />,
                ]}
          >
            <List.Item.Meta
              title={<Link
                target="_blank"
                to={{
                    pathname: './detail',
                    search: `?id=${item._id}`,
                 }}
                replace
              >{item.title}
              </Link>}
            />
            <ReactMarkdown
              className="result"
              source={item.content.substring(0, 300)}
            />

          </List.Item>
            )}
      />
    );
  }
}
