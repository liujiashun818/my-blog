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
      content = '', createAt = '', title = '', pv = 0, _v = 0,comments = []
    } = dataObj.detail || {};
    const IconText = ({ type, text }) => (
        <span style={{ marginRight: 20 }} >
        <Icon type={type} style={{ marginRight: 8 }}/>
          {text}
      </span>
    );
    return (
      <Layout className="layout index-page detail">
        <HeaderComponent />
        <Content>
          <div className="content-box">
            <Card hoverable className="content-common content-main">
              <List.Item>
               <List.Item.Meta
                    title={title}
                    description={[
                      <IconText type="eye" text={pv} />,
                      <IconText type="like-o" text={_v} />,
                      <IconText type="message" text={comments.length} />,
                      <span>{createAt}</span>,
                      <span style={{ float: 'right'}}><a>编辑</a></span>
                    ]}
                />
                <ReactMarkdown
                    className="result"
                    source={content}
                />

              </List.Item>
            </Card >
            <div className="content-right">
              <BaseInfo />
              <BaseInfo />
              <BaseInfo />

            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}
