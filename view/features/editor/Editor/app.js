
import React from 'react';
import { Layout, Menu, Breadcrumb, Card } from 'antd';

const { Header, Content, Footer } = Layout;
import './app.less';
import Editor from './components/editor';
import ReactMarkdown from 'react-markdown';
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
export default class EditorApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
    this.state = {
      markdownSrc: initialSource,
      htmlMode: 'raw'
    }
  }

  handleMarkdownChange(evt) {
    this.setState({markdownSrc: evt.target.value})
  }

  render() {
    return (
      <Layout className="editor-box">
        <Header  className='editor-header'> 标题</Header >
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