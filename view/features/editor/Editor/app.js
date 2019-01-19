
import React from 'react';
import { Layout, Menu,Collapse, Avatar,Badge, Card, Input, Button,Dropdown,Icon } from 'antd';

const { Header, Content, Footer } = Layout;
import './app.less';
import Editor from './components/editor';
import Public from './components/public';
import ReactMarkdown from 'react-markdown';
import {ChangeEditor} from './components/changeEditor';

const initialSource = `
# Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
`
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
    console.log('kkkk')
    this.setState({isShowRich: !this.state.isShowRich})
  }
  render() {
    return (
      <Layout className="editor-box ">
        <Header className='editor-header'> 
          <div className='header-left'>
            <div className='log'>log</div>
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
              <div className='h-r-c public'> 
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
        <Footer  className='editor-footer'> info</Footer >
      </Layout> 
    );
  }
}