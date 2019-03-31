
import React from 'react';
import { Layout, Menu, message, Avatar, Badge, Card, Input, Button, Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './app.less';
import Editor from './components/editor';
import Public from './components/public';
import ReactMarkdown from 'react-markdown';
import { ChangeEditor } from './components/changeEditor';
import { SignIn } from '../../signIn';
import logo from '../../../assets/img/logo.png';
import { initialSource } from '../../../untils/mock.js';
import moment from 'moment';
const { Header, Content, Footer } = Layout;
const menu = (
  <Menu>
    <Menu.Item> 33333 </Menu.Item>
    <Menu.Item> 4444 </Menu.Item>
    <Menu.Item> 77777 </Menu.Item>
  </Menu>
);
export default class EditorApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
    this.state = {
      markdownSrc: initialSource,
      htmlMode: 'raw',
      isShowRich: false,
      title: '',
      content: ''
    };
  }

  componentDidMount() {
    const urlParam = this.props.location.search;
    // if(){
    //
    // }
    if(!!urlParam){
      const id = urlParam.split('=')[1];
      this.props.getArticle({ id });
    }

  }
  componentWillReceiveProps(nextProps) {
    const { detail } = nextProps.dataObj || {};
    let { content = '', title = '标题1'} = detail;
    // if(){

      this.setState({title: title,content: content})
    // }
  }

  handleMarkdownChange(evt) {

    this.setState({ content: evt.target.value });
  }

  changeEditorFun() {
    console.log('是否切换富文本编辑器');
    this.setState({ isShowRich: !this.state.isShowRich });
  }

  savePublicInfo = (e) => {
    let category = e.classify || '';
    const { title , content} = this.state;
    const  user = window.sessionStorage.getItem('user_id');
    if(!!!title){
      return message.warning('请输入标题');
    }
    if(!!!content){
      return message.warning('请输入内容');
    }

    if(!!!user){
      return message.warning('请登陆');
    }
    const saveObj = {
      title,
      content: content,
      user: user, // todo 此处是ID
      createAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      category,
    };
    const urlParam = this.props.location.search;

    if(!!urlParam){
      const id = urlParam.split('=')[1];
      const obj = {id:id};
      Object.assign(obj,saveObj);
      this.props.editArticle(obj);
    }else {
      this.props.saveArticle(saveObj);
    }
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value }); // todo 记得使用节流
  }

  render() {
      console.log('ddd',this.props);
      // const { markdownSrc } = this.state;
      // const { detail } = this.props.dataObj;
    let { content, title } = this.state;

    return (
      <Layout className="editor-box ">
        <Header className="editor-header">
          <div className="header-left">
            <div className="log"><Link to="./"><img src={logo} /><span>绿叶笔记</span></Link></div>
            <Input className="title" size="large" value = { title } placeholder="请输入文章标题..." onChange={this.handleTitle} />
          </div>
          <div className="header-right">
            <div className="h-r-c auto-save">自动保存到&nbsp; <Button>草稿</Button></div>
            <div className="h-r-c"><Icon type="picture" /></div>
            <div className="h-r-c">
              <ChangeEditor
                className="change-editor"
                onChange={this.changeEditorFun}
              />
            </div>
            <div className="h-r-c">
              <Public className="public" savePublicInfo={this.savePublicInfo} />
            </div>
            <div className="h-r-c avatar">
              <SignIn />
            </div>
          </div>
        </Header >
        <Content className="editor-middle">
          <Card className="editor-left" hoverable>
            <Editor value={ content } onChange={this.handleMarkdownChange} />
          </Card>

          <Card className="editor-right" hoverable>
            <ReactMarkdown
              className="result"
              source={ content }
            />
          </Card>
        </Content>
        <Footer className="editor-footer"> info</Footer >
      </Layout>
    );
  }
}

