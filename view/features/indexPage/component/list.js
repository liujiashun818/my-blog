import React from 'react';
import { List, Icon, Modal } from 'antd';
import { Link } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';
const confirm = Modal.confirm;
import './list.less';

export default class ListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleItem = this.handleItem.bind(this);
  }

  componentDidMount() {
    this.props.getArticleArray();
  }

  handleItem(type, infoObj) {
      console.log('infoObj', infoObj);
      const _this = this;
      if(type === 'delete'){
         confirm({
             title: `你确定要删除这条数据吗？`,
             content: `标题：${infoObj.title}`,
             okText: 'Yes',
             okType: 'danger',
             okButtonProps: {
                 disabled: false,
             },
             cancelText: 'No',
             onOk() {
                 console.log('OK');
                 console.log('_this.props',_this.props);
                 _this.props.deleteArticle(infoObj.id)
             },
             onCancel() {
                 console.log('Cancel');
             },
         });
     }else{
         message.info(type)
     }

  }

  render() {
      const { deleteArticle } = this.props;

    const IconText = ({ type, text, infoObj}) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} onClick={this.handleItem.bind(this,type, infoObj)} />
        {text}
      </span>
    );
    const { articleList } = this.props.dataObj;

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
              <IconText type="eye" text={item.pv} infoObj={{id:item._id,title: item.title}} />,
              <IconText type="like-o" text={item.pv} infoObj={{id:item._id,title: item.title}} />,
              <IconText type="message" text={item.comments.length} infoObj={{id:item._id,title: item.title}} />,
              <IconText type="delete" text='删除' infoObj={{id:item._id,title: item.title}} />,
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
