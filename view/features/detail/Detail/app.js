import React,{ Component} from 'react';
import ReactMarkdown from 'react-markdown';
import { Icon,Card,Layout,Avatar  } from 'antd';
const { Header, Content,Footer,Sider } = Layout;
const { Meta } = Card;
import {initialSource} from '../../../untils/mock.js';

import HeaderComponent from '../../../components/header/index.js';
import Topic from './topic/Topic'; 
import BaseInfo from '../../baseInfo/BaseInfo'; 
import './app.less';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class DetailApp extends Component{
    
    render(){
        return (
            <Layout className="layout index-page detail">
            <HeaderComponent />
          <Content>
           <div className='content-box'>
           <Card hoverable={true} className='content-common content-main'>
           <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="空荡荡的多多多"
            />  
                <ReactMarkdown
                     className="result"
                     source={initialSource}
                />
            </Card > 
            <div className='content-right'> 
              <BaseInfo />
              <BaseInfo />
              <BaseInfo />
            
            </div>
           </div>
          </Content>
        </Layout>
        )
    }
}