import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Icon, Card, Layout, Avatar } from 'antd';
import { initialSource } from '../../../untils/mock.js';

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
    console.log('获取ID：',this.props);
    let urlParam = this.props.location.search;
    var id = urlParam.split("=")[1];
    this.props.getArticle({id:id});
  }

    render() {
    console.log(this.props,'详情')；
    return (
      <Layout className="layout index-page detail">
        <HeaderComponent />
        <Content>
          <div className="content-box">
            <Card hoverable className="content-common content-main">
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="空荡荡的多多多"
              />
              <ReactMarkdown
                className="result"
                source={initialSource}
              />
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
