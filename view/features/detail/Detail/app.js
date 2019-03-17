import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Icon, Card, Layout, List } from 'antd';

import HeaderComponent from '../../../components/header/index.js';
import Topic from './topic/Topic';
import BaseInfo from '../../baseInfo/BaseInfo';
import './app.less';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const {
  Header, Content, Footer, Sider,
} = Layout;
const { Meta } = Card;

export default class DetailApp extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    const urlParam = this.props.location.search;
    const id = urlParam.split('=')[1];
    this.props.getArticle({ id });
  }

  render() {
    console.log('详情', this.props);
    const dataObj = this.props.dataObj;
    const {
      content = '', createAt = '', title = '', pv = 0, _v = 0,comments = [],_id
    } = dataObj.detail || {};
    const IconText = ({ type, text }) => (
        <span style={{ marginRight: 20 }} >
        <Icon type={type} style={{ marginRight: 8 }}/>
          {text}
      </span>
    );
    return (
      <Layout className="layout index-page detail">
        <HeaderComponent key='deatil'/>
        <Content>
          <div className="content-box">
            <Card hoverable className="content-common content-main">
              <List.Item style={{display:'block'}}>
               <List.Item.Meta
                    key='33'
                    title={title}
                    description={[
                      <IconText key ='eye' type="eye" text={pv} />,
                      <IconText key ='like-o'  type="like-o" text={_v} />,
                      <IconText key ='message'  type="message" text={comments.length} />,
                      <span>{createAt}</span>,
                      <span style={{ float: 'right'}}>
                          <Link to={{
                              pathname: './editor',
                              search: `?id=${_id}`,
                          }} replace>编辑</Link>
                      </span>
                    ]}
                />
                <ReactMarkdown
                    className="result"
                    style={{height:'100%'}}
                    source={content}
                />

              </List.Item>
            </Card >
            <div className="content-right">
              <BaseInfo key='1'/>
              <BaseInfo key='2'/>
              <BaseInfo key='3'/>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}
