import React from 'react';
import { Switch, Route, Router, hashHistory } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content,Footer,Sider } = Layout;
import { Link } from 'react-router-dom';
import { domaList } from '../../untils/domanList'; 
import {SearchPage} from '../../features/search/index.js';
import {WriteArticle} from '../../features/writeArticle/index.js';
import {SignIn} from '../../features/signIn/index.js';
import './index.less';
import logo from '../../assets/img/logo.png';

 export default class HeaderComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menus: domaList,
        }
    }
    render() {
        return(
            <div className='header-style'>
              <div className='header-box'>
                <div className="header-left">
                    <img src={logo}/>
                    <span>绿叶笔记</span>
                </div>
                <div className="header-right">
                  <Menu
                    className="header-nav"
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px', width: "50%", float: 'left' }}
                  >
                    <Menu.Item key="1">
                      <Link to='/'><Icon type="home" />首页</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to='/news'><Icon type="codepen-circle" />动态</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link to='/topic'><Icon type="message" />话题</Link>
                    </Menu.Item>
                  </Menu>
                  <SearchPage/>
                  <WriteArticle/>
                  <SignIn />
                </div>
            </div>
          </div>
        )
    }
}

     