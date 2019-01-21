
import React from 'react';
import { Layout, Menu,Collapse, Avatar,Badge, Card, Input, Button,Dropdown,Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
import './app.less';
import Editor from './components/editor';
import Public from './components/public';
import ReactMarkdown from 'react-markdown';
import {ChangeEditor} from './components/changeEditor';
import logo from '../../../assets/img/logo.jpg';
import {initialSource} from '../../../untils/mock.js';
const menu = (
<Menu>
  <Menu.Item> 33333 </Menu.Item>
  <Menu.Item> 4444 </Menu.Item>
  <Menu.Item> 77777 </Menu.Item>
</Menu>
);
export default class EditorApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
    this.state = {
      markdownSrc: initialSource,
      htmlMode: 'raw',
      isShowRich: false,
    }
  }

  handleMarkdownChange(evt) {
    this.setState({markdownSrc: evt.target.value})
  }
  changeEditorFun() {
    console.log('是否切换富文本编辑器')
    this.setState({isShowRich: !this.state.isShowRich})
  }
  render() {
    return (
      <Layout className="editor-box ">
        <Header className='editor-header'> 
          <div className='header-left'>
            <div className='log'><Link to='./'><img src={logo}/></Link></div>
             <Input className='title' size="large" placeholder="请输入文章标题..." />
          </div>
          <div className='header-right'>
              <div className='h-r-c auto-save'>自动保存到  <Button>草稿</Button></div>
              <div className='h-r-c'><Icon type="picture" /></div>
              <div className='h-r-c'>
                <ChangeEditor
                   className='change-editor'
                   onChange={this.changeEditorFun}
                 />
              </div>
              <div className='h-r-c'> 
                  <Public className='public'/>
              </div>
              <div className='h-r-c avatar'>
                <Badge count={1}><Avatar shape="circle" icon="user" /></Badge>
               </div>
          </div>
        </Header >
        <Content className='editor-middle'>
          <Card className="editor-left" hoverable>
            <Editor value={this.state.markdownSrc} onChange={this.handleMarkdownChange} />
          </Card>

          <Card className="editor-right" hoverable>
            <ReactMarkdown
              className="result"
              source={this.state.markdownSrc}
            />
          </Card>
        </Content>
        <Footer className='editor-footer'> info</Footer >
      </Layout> 
    );
  }
}