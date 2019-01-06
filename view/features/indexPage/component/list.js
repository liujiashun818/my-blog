import React from 'react';
import { List, Avatar, Icon } from 'antd';
const listData = [];

export default class ListApp extends React.Component {

    componentDidMount(){
        for (let i = 0; i < 23; i++) {
            listData.push({
              href: 'h这是链接',
              title: `我是标题 ${i}`,
              avatar: '作者',
              content: '内容首行。。。。内容首行内容首行内容首行内容首行内容首行内容首行内容首行。。。',
            });
          }
    }


    render(){
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} />
              {text}
            </span>
          );
        return(
            <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={listData}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                />
                {item.content}
              </List.Item>
            )}
          />
        )
    }
}