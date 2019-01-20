import React from 'react';
import { Switch, Route, Router, hashHistory } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content,Footer,Sider } = Layout;
import './App.less';
import { Link } from 'react-router-dom';
import { domaList } from '../../untils/domanList'; 
import {SearchPage} from '../../features/search/index.js';
import {WriteArticle} from '../../features/writeArticle/index.js';
import {SignIn} from '../../features/signIn/index.js';
import {IndexPage} from '../../features/indexPage/index.js';
import {News} from '../../features/news/index.js';
import {Topic} from '../../features/topic/index.js';
import {BaseInfo} from '../../features/baseInfo/index.js';

import HeaderComponent from '../../components/header/index.js';

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
          <Layout className="layout index-page">
            <HeaderComponent />
          <Content>
           <div className='content-box'>
           <div className='content-common content-main'>
                  <Route path='/' component={IndexPage} exact />
                  <Route path='/news' component={News} />
                  <Route path='/topic' component={Topic} />
               
            </div> 
            <div className='content-right'> 
              <BaseInfo />
              <BaseInfo />
              <BaseInfo />
            
            </div>
           </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>
       
          </Footer>
        </Layout>
        )
    }
}

     