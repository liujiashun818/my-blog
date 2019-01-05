import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content,Footer } = Layout;
import './App.less';
import { Link } from 'react-router-dom';
import { domaList } from '../../untils/domanList'; 
import {SearchPage} from '../../features/search/index.js';
import {WriteArticle} from '../../features/writeArticle/index.js';
import {SignIn} from '../../features/signIn/index.js';


 export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menus: domaList,
        }
    }
    getMenuDom(){
      // console.log('domaList',domaList)
      if(this.state.menus.length>0){
         const menus = this.state.menus.map(m => {
           let aa = [];
           if (m.subMenus.length>0){
            m.subMenus.forEach(sb=>{   
              aa.push(
                <Menu.Item key={sb.key}>
                   <Link to={sb.url}>{sb.title}</Link>
                </Menu.Item>   
              )     
                          
             })
           };
           return (
             <SubMenu key={m.key} title={m.title}>
                 {aa}
             </SubMenu>
           )
         });
         return menus;
      } else{
        return <span/>
      }

    }
    render() {
        return(
          <Layout className="layout">
          <Header>
            <div className="header-left">
                log
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px', width: "50%", float: 'left' }}
            >
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">动态</Menu.Item>
              <Menu.Item key="3">话题</Menu.Item>
            </Menu>
            <div className="header-right">
              <SearchPage />
              <WriteArticle/>
              <SignIn />
            </div>
            
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            234567890
          </Footer>
        </Layout>
        )
    }
}

     